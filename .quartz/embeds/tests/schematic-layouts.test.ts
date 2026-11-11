import { test } from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { SchematicView } from "@spice-ts/ui/react";
import { JSDOM } from "jsdom";
import { simulateTransient } from "~/toolkit/simulation";
import { schematic as rcLayout } from "~/demos/Year 1/ELEC1311 Circuits/RC Transients/charging/schematic";
import { request as rcRequest } from "~/demos/Year 1/ELEC1311 Circuits/RC Transients/charging/rc";
import { schematic as rlLayout } from "~/demos/Year 1/ELEC1311 Circuits/AC Impedance/voltage-division/schematic";
import { request as rlRequest } from "~/demos/Year 1/ELEC1311 Circuits/AC Impedance/voltage-division/rl";
import { schematic as rlcLayout } from "~/demos/Year 1/ELEC1311 Circuits/AC Impedance/series-rlc/schematic";
import { request as rlcRequest } from "~/demos/Year 1/ELEC1311 Circuits/AC Impedance/series-rlc/rlc";
for (const [name, request, layoutFn] of [
  ["RC",rcRequest({voltage:10,resistance:10,capacitance:0.2}),rcLayout],
  ["RL divider",rlRequest({resistance:60,inductance:0.31831,frequency:50}),rlLayout],
  ["RL frequency",rlRequest({resistance:60,inductance:100/(2*Math.PI*50),frequency:30}),rlLayout],
  ["RLC",rlcRequest({omega:1000}),rlcLayout],
] as const) test(`${name} schematic terminals coincide with actual symbols and grounds`,async()=>{
  const result=await simulateTransient(request), layout=layoutFn(result);
  const doc=new JSDOM(renderToStaticMarkup(createElement(SchematicView,{circuit:{...result.circuit,notesSchematicLayout:layout}}))).window.document;
  for (const pc of layout.components.filter(c=>["V","C"].includes(c.component.type))) {
    const group=doc.querySelector(`g[transform="translate(${pc.x},${pc.y})"]`)!;
    const lines=[...group.querySelectorAll("line")];
    for(const p of pc.pins) assert.ok(lines.some(l=>[1,2].some(i=>Number(l.getAttribute(`x${i}`))===p.x-pc.x && Number(l.getAttribute(`y${i}`))===p.y-pc.y)), `${pc.component.name} symbol terminal must meet ${p.x},${p.y}`);
    assert.equal(pc.pins[1].y-pc.pins[0].y,80);
    assert.equal(pc.pins[1].net,"0");
  }
  for(const w of layout.wires) for(const s of w.segments) for(const i of [1,2] as const)
    assert.ok(layout.components.some(c=>c.pins.some(p=>p.net===w.net && p.x===s[`x${i}`] && p.y===s[`y${i}`])));
});
