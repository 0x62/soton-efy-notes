import { test } from "node:test";
import assert from "node:assert/strict";
import { readNumericParams, writeParams } from "../toolkit/params";
import { simulateTransient } from "../toolkit/simulation";
import { chartDomains } from "../toolkit/ResponseChart";
import { readFileSync } from "node:fs";

test("a resistor divider uses its own names, limits, netlist and three signals", async () => {
  const schema = {
    supply: {
      default: 12,
      min: -48,
      max: 48,
      step: 1,
      unit: "V",
      label: "Supply",
    },
    upper: {
      default: 10000,
      min: 2000,
      max: 1000000,
      step: 1000,
      unit: "Ω",
      label: "Upper resistor",
    },
    lower: {
      default: 20000,
      min: 2000,
      max: 1000000,
      step: 1000,
      unit: "Ω",
      label: "Lower resistor",
    },
  };
  const values = readNumericParams(
    schema,
    "?supply=-12&upper=10000&lower=20000",
  );
  assert.equal(values.upper, 10000);
  assert.equal(values.supply, -12);
  assert.deepEqual(readNumericParams(schema, writeParams(values)), values);
  const result = await simulateTransient({
    netlist: `Divider\nVbias input 0 DC ${values.supply}\nRtop input mid ${values.upper}\nRbottom mid 0 ${values.lower}\n.tran 0.001 0.01\n.end`,
    signals: [
      { id: "input", quantity: "voltage", source: "input" },
      { id: "midpoint", quantity: "voltage", source: "mid" },
      { id: "supplyCurrent", quantity: "current", source: "Vbias" },
    ],
  });
  assert.ok(Math.abs(result.series.midpoint.at(-1)! + 8) < 1e-5);
  assert.ok(Math.abs(result.series.supplyCurrent.at(-1)! - 0.0004) < 1e-8);
  const domains = chartDomains({
    label: "Divider",
    x: { values: result.time, label: "Seconds", format: String },
    axes: [
      { id: "potential", label: "V", side: "left", format: String },
      { id: "flow", label: "A", side: "right", format: String },
    ],
    series: Object.entries(result.series).map(([id, values]) => ({
      id,
      values,
      label: id,
      axis: id === "supplyCurrent" ? "flow" : "potential",
      color: "blue",
    })),
  });
  assert.ok(domains.potential[0] <= -12);
  assert.ok(domains.flow[1] >= 0.0004);
});

test("chart supports non-time x coordinates, signed data, explicit domains and arbitrary units", () => {
  const props = {
    label: "Gain",
    x: {
      values: [100, 1000, 10000],
      label: "Frequency",
      format: (v: number) => `${v}Hz`,
    },
    axes: [
      {
        id: "gain",
        label: "dB",
        side: "left" as const,
        format: String,
        domain: [-60, 20] as const,
      },
    ],
    series: [
      {
        id: "gain",
        label: "Gain",
        axis: "gain",
        values: [0, -10, -30],
        color: "purple",
      },
    ],
  };
  assert.deepEqual(chartDomains(props).gain, [-60, 20]);
  assert.throws(
    () =>
      chartDomains({ ...props, series: [{ ...props.series[0], values: [1] }] }),
    /one finite value/,
  );
});

test("shared layers do not import RC demo or encode its parameter bounds", () => {
  for (const file of [
    "CircuitCard.tsx",
    "CircuitSchematic.tsx",
    "ResponseChart.tsx",
    "params.ts",
    "simulation.ts",
  ]) {
    const text = readFileSync(
      new URL(`../toolkit/${file}`, import.meta.url),
      "utf8",
    );
    assert.doesNotMatch(
      text,
      /from ["']\.\/rc|resistance|capacitance|charging current|RC transient/,
    );
  }
});
