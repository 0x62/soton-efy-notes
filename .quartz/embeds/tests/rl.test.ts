import { test } from "node:test";
import assert from "node:assert/strict";
import {
  request,
  phasors,
  schema,
  sourcePeak,
} from "~/demos/Year 1/ELEC1311 Circuits/AC Impedance/voltage-division/rl";
import { readNumericParams } from "~/toolkit/params";
import { simulateTransient } from "~/toolkit/simulation";
const defaults = readNumericParams(schema, "");
for (const v of [
  defaults,
  { resistance: 200, inductance: 0.01, frequency: 10 },
  { resistance: 10, inductance: 1, frequency: 500 },
]) {
  test(`RL transient agrees with signed steady-state phasors ${JSON.stringify(v)}`, async () => {
    const p = phasors(v),
      result = await simulateTransient(request(v));
    let error = 0,
      kvl = 0;
    result.time.forEach((t, i) => {
      const angle = 2 * Math.PI * v.frequency * t;
      error = Math.max(
        error,
        Math.abs(
          result.series.resistor[i] -
            p.resistorPeak * Math.cos(angle + p.resistorPhase),
        ),
        Math.abs(
          result.series.inductor[i] -
            p.inductorPeak * Math.cos(angle + p.inductorPhase),
        ),
      );
      kvl = Math.max(
        kvl,
        Math.abs(
          result.series.resistor[i] +
            result.series.inductor[i] -
            sourcePeak * Math.cos(angle - Math.PI / 12),
        ),
      );
    });
    assert.ok(error < sourcePeak * 0.003, `peak waveform error ${error}`);
    assert.ok(kvl < sourcePeak * 1e-7, `KVL error ${kvl}`);
    assert.ok(result.series.inductor.some((x) => x < 0));
    assert.ok(
      Math.abs(p.inductorPhase - p.resistorPhase - Math.PI / 2) < 1e-12,
    );
  });
}
test("default phasors reproduce the lesson's peak voltage and phase", () => {
  const p = phasors(defaults);
  assert.ok(Math.abs(p.reactance - 100) < 0.001);
  assert.ok(Math.abs(p.inductorPeak - 17.14986) < 1e-5);
  assert.ok(Math.abs((p.inductorPhase * 180) / Math.PI - 15.96376) < 1e-4);
  assert.ok(Math.abs(p.resistorPeak - 10.289915) < 1e-5);
});

test("source amplitude is fixed and cannot be overridden by URL parameters", () => {
  assert.deepEqual(readNumericParams(schema, "?peak=100"), defaults);
  assert.match(request(defaults).netlist, /SIN\(0 20 /);
  assert.ok(!("peak" in schema));
});

test("series R and L have aligned vertical pins", async () => {
  const { layoutSchematic } = await import("@spice-ts/ui");
  const { circuit } = await simulateTransient(request(defaults));
  const layout = layoutSchematic(circuit);
  const resistor = layout.components.find((c) => c.component.name === "R1")!;
  const inductor = layout.components.find((c) => c.component.name === "L1")!;
  assert.equal(inductor.pins[0].x, inductor.pins[1].x);
  assert.notEqual(inductor.pins[0].y, inductor.pins[1].y);
  assert.equal(
    resistor.pins.find((p) => p.net === "out")!.x,
    inductor.pins.find((p) => p.net === "out")!.x,
  );
});

test("rendered inductor path reaches both vertical pins without SVG transforms", async () => {
  const { createElement } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const { SchematicView } = await import("@spice-ts/ui/react");
  const { layoutSchematic } = await import("@spice-ts/ui");
  const { JSDOM } = await import("jsdom");
  const { circuit } = await simulateTransient(request(defaults));
  const coil = layoutSchematic(circuit).components.find(
    (c) => c.component.name === "L1",
  )!;
  const doc = new JSDOM(
    renderToStaticMarkup(createElement(SchematicView, { circuit })),
  ).window.document;
  const path = doc.querySelector(
    `g[transform="translate(${coil.x},${coil.y})"] path`,
  )!;
  assert.ok(path);
  const d = path.getAttribute("d")!;
  assert.ok(
    d.startsWith(`M${coil.pins[0].x - coil.x},${coil.pins[0].y - coil.y} `),
  );
  assert.ok(
    d.endsWith(`L${coil.pins[1].x - coil.x},${coil.pins[1].y - coil.y}`),
  );
});
