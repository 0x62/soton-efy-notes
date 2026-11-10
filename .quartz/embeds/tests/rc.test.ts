import { simulateTransient } from "../toolkit/simulation";
import { test } from "node:test";
import assert from "node:assert/strict";
import { request } from "../demos/Year 1/ELEC1311 Circuits/RC Transients/charging/rc";
import { readParams } from "../demos/Year 1/ELEC1311 Circuits/RC Transients/charging/rc-params";
import { writeParams } from "../toolkit/params";
test("URL values are finite, bounded, SI quantities with stable roundtrip", () => {
  const defaults = readParams("");
  for (const input of [
    "?voltage=NaN&resistance=0&capacitance=-1",
    "?voltage=&resistance=Infinity&capacitance=99",
  ])
    assert.deepEqual(readParams(input), defaults);
  assert.deepEqual(
    readParams(writeParams({ voltage: 5, resistance: 100, capacitance: 0.01 })),
    { voltage: 5, resistance: 100, capacitance: 0.01 },
  );
});
for (const values of [
  { voltage: 10, resistance: 10, capacitance: 0.2 },
  { voltage: 5, resistance: 100, capacitance: 0.01 },
  { voltage: 100, resistance: 0.1, capacitance: 0.001 },
  { voltage: 0.1, resistance: 1000, capacitance: 2 },
]) {
  test(
    "SPICE matches analytic RC response " + JSON.stringify(values),
    async () => {
      const result = await simulateTransient(request(values)),
        tau = values.resistance * values.capacitance;
      assert.equal(result.time[0], 0);
      for (const factor of [0.5, 1, 2, 5]) {
        const i = result.time.reduce(
          (a, t, j) =>
            Math.abs(t - factor * tau) < Math.abs(result.time[a] - factor * tau)
              ? j
              : a,
          0,
        );
        assert.ok(
          Math.abs(
            result.series.voltage[i] -
              values.voltage * (1 - Math.exp(-result.time[i] / tau)),
          ) <
            values.voltage * 0.003,
        );
        assert.ok(
          Math.abs(
            result.series.current[i] -
              (values.voltage / values.resistance) *
                Math.exp(-result.time[i] / tau),
          ) <
            (values.voltage / values.resistance) * 0.003,
        );
      }
    },
  );
}

test("the cloned netlist IR renders a schematic with all RC components", async () => {
  const { createElement } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const { SchematicView } = await import("@spice-ts/ui/react");
  const result = structuredClone(
    await simulateTransient(request(readParams(""))),
  );
  const svg = renderToStaticMarkup(
    createElement(SchematicView, { circuit: result.circuit, theme: "light" }),
  );
  const { layoutSchematic } = await import("@spice-ts/ui");
  assert.deepEqual(
    layoutSchematic(result.circuit)
      .components.map((c) => c.component.name)
      .sort(),
    ["C1", "R1", "V1"],
  );
  assert.ok((svg.match(/<g transform=/g) || []).length >= 3);
  assert.ok(!svg.includes("Schematic error"));
  assert.ok(svg.includes("<svg"));
});
