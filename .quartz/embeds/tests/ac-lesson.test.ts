import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  rms,
  projection,
  rlc,
  rlGain,
  rlPhase,
  degrees,
} from "~/demos/Year 1/ELEC1311 Circuits/AC Impedance/models";
import { request } from "~/demos/Year 1/ELEC1311 Circuits/AC Impedance/series-rlc/rlc";
import { simulateTransient } from "~/toolkit/simulation";
test("RMS agrees with integration; phasor projection retains peak and source phase", () => {
  const N = 10000;
  let sum = 0;
  for (let i = 0; i < N; i++)
    sum += (20 * Math.cos((2 * Math.PI * (i + 0.5)) / N)) ** 2;
  assert.ok(Math.abs(Math.sqrt(sum / N) - rms(20, false)) < 1e-10);
  assert.equal(rms(20, true), 20);
  assert.ok(Math.abs(projection(15) - 20) < 1e-12);
  assert.ok(Math.abs(projection(105)) < 1e-12);
  assert.ok(Math.abs(projection(0) - projection(360)) < 1e-12);
});
test("worked RLC and RL cutoff match independent reference values", () => {
  const p = rlc(1000);
  assert.equal(p.xl, 65);
  assert.equal(p.xc, 25);
  assert.equal(p.magnitude, 50);
  assert.equal(p.currentPeak, 0.24);
  assert.ok(Math.abs(degrees(p.currentPhase) + 38.130102354) < 1e-8);
  assert.ok(Math.abs(p.currentPeak * p.xl - 15.6) < 1e-12);
  assert.ok(Math.abs(p.currentPeak * p.xc - 6) < 1e-12);
  const resonance = 1 / Math.sqrt(0.065 * 40e-6);
  assert.ok(Math.abs(resonance / (2 * Math.PI) - 98.703705625) < 1e-7);
  assert.ok(Math.abs(rlc(resonance).x) < 1e-12);
  assert.ok(Math.abs(rlGain(1) - Math.SQRT1_2) < 1e-12);
  assert.equal(degrees(rlPhase(1)), 45);
  assert.ok(rlGain(0.1) < rlGain(1) && rlGain(1) < rlGain(5));
});
for (const omega of [300, 1000, 1800, 1 / Math.sqrt(0.065 * 40e-6)])
  test(`SPICE RLC agrees with independent ODE solution at omega=${omega}`, async () => {
    const result = await simulateTransient(request({ omega }));
    // Direct real sine/cosine coefficient solution, independent of the demo's polar calculation.
    const x = omega * 0.065 - 1 / (omega * 40e-6),
      a = 12 * Math.cos(Math.PI / 12),
      b = -12 * Math.sin(Math.PI / 12),
      den = 30 ** 2 + x * x;
    const A = (30 * a - x * b) / den,
      B = (30 * b + x * a) / den;
    let error = 0;
    result.time.forEach((t, i) => {
      const expected = A * Math.cos(omega * t) + B * Math.sin(omega * t);
      error = Math.max(error, Math.abs(result.series.current[i] - expected));
      assert.ok(
        Math.abs(
          result.series.source[i] - 12 * Math.cos(omega * t + Math.PI / 12),
        ) < 1e-8,
      );
    });
    assert.ok(error < 0.001, `current error ${error}`);
  });
test("AC lesson retains worked source values, anchors and modest number of demos", () => {
  const s = readFileSync(
    new URL(
      "../../../Year 1/ELEC1311 Circuits/AC Impedance.md",
      import.meta.url,
    ),
    "utf8",
  );
  assert.equal((s.match(/<iframe /g) || []).length, 5);
  for (const heading of [
    "Linear systems",
    "RMS and sinusoidal measurements",
    "Sinusoids and phasors",
    "Deriving the sinusoidal RL response",
    "Time and frequency descriptions",
    "Component impedances",
    "Deriving capacitor and inductor impedance",
    "Combining impedances",
    "Admittance",
    "Complex voltage division",
    "Worked RLC and dependent-source circuits",
    "Frequency response",
  ])
    assert.ok(s.includes("## " + heading));
  assert.ok(!/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(s));
});

test("phasor arrow tips share exact endpoints and explicit theme colors", async () => {
  const { createElement } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const { JSDOM } = await import("jsdom");
  const { PhasorTriangle } = await import("~/toolkit/PhasorTriangle");
  for (const theme of ["light", "dark"] as const) {
    for (const imaginary of [-9.6, 0, 9.6]) {
      const doc = new JSDOM(renderToStaticMarkup(createElement(PhasorTriangle, {
        real: 7.2, imaginary, realLabel: "VR", imaginaryLabel: "VL−VC", theme,
      }))).window.document;
      const [real, imag, sum] = [...doc.querySelectorAll("g[data-phasor] > line")];
      for (const coordinate of ["x", "y"]) {
        assert.equal(real.getAttribute(`${coordinate}2`), imag.getAttribute(`${coordinate}1`));
        assert.equal(imag.getAttribute(`${coordinate}2`), sum.getAttribute(`${coordinate}2`));
      }
      for (const marker of doc.querySelectorAll("marker")) {
        assert.equal(marker.getAttribute("refX"), "8");
        const path = marker.querySelector("path")!;
        assert.equal(path.getAttribute("fill"), "none");
        assert.match(path.getAttribute("stroke")!, /^#[a-f0-9]{6}$/);
        assert.equal(path.getAttribute("d"), "M1 1L8 5L1 9");
      }
    }
  }
});
