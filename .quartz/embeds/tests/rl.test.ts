import { test } from "node:test";
import assert from "node:assert/strict";
import {
  request,
  phasors,
  schema,
} from "~/demos/Year 1/ELEC1311 Circuits/AC Impedance/voltage-division/rl";
import { readNumericParams } from "~/toolkit/params";
import { simulateTransient } from "~/toolkit/simulation";
const defaults = readNumericParams(schema, "");
for (const v of [
  defaults,
  { peak: 5, resistance: 200, inductance: 0.01, frequency: 10 },
  { peak: 100, resistance: 10, inductance: 1, frequency: 500 },
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
            v.peak * Math.cos(angle - Math.PI / 12),
        ),
      );
    });
    assert.ok(error < v.peak * 0.003, `peak waveform error ${error}`);
    assert.ok(kvl < v.peak * 1e-7, `KVL error ${kvl}`);
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
