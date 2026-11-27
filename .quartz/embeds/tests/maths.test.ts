import { test } from "node:test";
import assert from "node:assert/strict";
import {
  continuityKind,
  correctBisectionHalf,
  holeEpsilonWorks,
  holeCounterexample,
  distance,
  secantSlope,
  sinc,
  rationalised,
  cubic,
  bracket,
  epsilonWorks,
  counterexample,
  oscillationPair,
} from "~/demos/Year 1/ELEC1310 Mathematics/Limits & Continuity/models";
import { readNumericParams } from "~/toolkit/params";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

test("nonzero approach distances preserve excluded points and secants converge from both sides", () => {
  for (const p of [0, 0.1, 1, 2, 3, 4, 5]) {
    const d = distance(p);
    assert.ok(d > 0);
    for (const h of [-d, d]) {
      assert.ok(Math.abs(((1 + h) ** 2 - 1) / h - secantSlope(h)) < 1e-9);
      assert.equal(h < 0, secantSlope(h) < 2);
    }
  }
});
test("conjugate evaluation agrees away from the hole and converges to the correct limit", () => {
  for (const a of [4, 9])
    for (const h of [-1, -0.1, -0.00001, 0.00001, 0.1, 1]) {
      assert.ok(
        Math.abs(rationalised(a, h) - (Math.sqrt(a + h) - Math.sqrt(a)) / h) <
          1e-10,
      );
      assert.ok(Number.isFinite(rationalised(a, h)));
    }
  assert.equal(rationalised(4, 0), 0.25);
  assert.equal(rationalised(9, 0), 1 / 6);
});
test("squeeze inequality and radian trigonometric bounds hold throughout the illustrated domain", () => {
  for (let i = 1; i < 10000; i++) {
    const x = i / 10000;
    assert.ok(Math.abs(x * x * Math.sin(1 / x)) <= x * x);
    const angle = x * 1.4;
    assert.ok(Math.cos(angle) < sinc(angle) && sinc(angle) < 1);
    assert.equal(sinc(-angle), sinc(angle));
  }
});
test("oscillation sequences approach zero but remain at opposite extrema", () => {
  let previous = Infinity;
  for (let n = 1; n <= 30; n++) {
    const [x, y] = oscillationPair(n);
    assert.ok(x < previous && x > y && y > 0);
    previous = x;
    assert.ok(Math.abs(Math.sin(1 / x) - 1) < 1e-12);
    assert.ok(Math.abs(Math.sin(1 / y) + 1) < 1e-12);
  }
});
test("bisection keeps opposite signs, nested intervals, and halves the width", () => {
  let previous = bracket(0);
  for (let n = 0; n <= 12; n++) {
    const next = bracket(n);
    assert.ok(cubic(next.a) < 0 && cubic(next.b) > 0);
    assert.ok(next.a >= previous.a && next.b <= previous.b);
    assert.equal(next.b - next.a, 2 ** -n);
    previous = next;
  }
});
test("epsilon delta guarantee includes equality and failing choices yield a strict interior counterexample", () => {
  for (const e of [0.1, 0.15, 0.5, 1, 2])
    for (const d of [0.02, 0.05, e / 2, e / 2 + 0.001, 0.6, 1.2]) {
      assert.equal(epsilonWorks(e, d), 2 * d <= e);
      if (!epsilonWorks(e, d)) {
        const x = counterexample(e, d);
        assert.ok(x > 3 && x - 3 < d);
        assert.ok(2 * (x - 3) > e);
      }
    }
});
test("all twelve meaningful lesson examples are directly authored, titled and lazy", () => {
  const note = readFileSync(
    resolve("../../Year 1/ELEC1310 Mathematics/Limits & Continuity.md"),
    "utf8",
  );
  const frames = [...note.matchAll(/<iframe[^>]+>/g)];
  assert.equal(frames.length, 12);
  for (const [frame] of frames) {
    assert.match(frame, /loading="lazy"/);
    assert.match(frame, /title="[^"]+"/);
    assert.match(frame, /data-notes-embed="y1\/elec1310\/limits-continuity\//);
  }
  assert.equal(
    new Set(frames.map(([f]) => f.match(/data-notes-embed="([^"]+)"/)![1]))
      .size,
    12,
  );
});

test("point repairs work only when the two side limits agree", () => {
  assert.equal(continuityKind(7, 0), "continuous");
  for (const k of [4, 6.9, 7.1, 10])
    assert.equal(continuityKind(k, 0), "removable");
  for (let k = 4; k <= 10; k += 0.1) assert.equal(continuityKind(k, 1), "jump");
});
test("learner bisection choices retain the signed bracket and reject the other half", () => {
  for (let i = 0; i < 12; i++) {
    const { a, b } = bracket(i),
      m = (a + b) / 2;
    const left = correctBisectionHalf(i) === "left";
    assert.ok((left ? cubic(a) * cubic(m) : cubic(m) * cubic(b)) < 0);
    assert.ok((left ? cubic(m) * cubic(b) : cubic(a) * cubic(m)) > 0);
    assert.deepEqual(bracket(i + 1), left ? { a, b: m } : { a: m, b });
  }
});
test("lesson retains original anchors and places secondary investigations in native disclosures", () => {
  const note = readFileSync(
    resolve("../../Year 1/ELEC1310 Mathematics/Limits & Continuity.md"),
    "utf8",
  );
  for (const h of [
    "Meaning of a limit",
    "One-sided limits and non-existence",
    "Continuity",
    "Limit laws",
    "Algebraic evaluation",
    "Squeeze theorem",
    "Infinite limits and asymptotes",
    "Intermediate value theorem",
    "Formal definition",
  ])
    assert.ok(note.includes("## " + h));
  assert.equal((note.match(/<details>/g) || []).length, 7);
  assert.equal((note.match(/<\/details>/g) || []).length, 7);
  assert.ok(note.indexOf("## Continuity") < note.indexOf("## Limit laws"));
  assert.ok(!/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(note));
});

test("the original quotient approaches four from both sides but remains undefined at two", () => {
  for (const step of [1, 2, 3, 4]) {
    const d = distance(step);
    for (const x of [2 - d, 2 + d]) {
      assert.notEqual(x, 2);
      assert.ok(Math.abs((x * x - 4) / (x - 2) - (x + 2)) < 1e-10);
      assert.ok(Math.abs(Math.abs(x + 2 - 4) - d) < 1e-14);
    }
  }
  assert.ok(Number.isNaN((2 * 2 - 4) / (2 - 2)));
});
test("the same hole has delta equals epsilon and strict counterexamples for wider radii", () => {
  for (const e of [0.1, 0.5, 1])
    for (const delta of [0.02, e, e + 0.01, 1.2]) {
      assert.equal(holeEpsilonWorks(e, delta), delta <= e);
      if (delta > e) {
        const x = holeCounterexample(e, delta);
        assert.ok(x > 2 && x - 2 < delta);
        assert.ok(x + 2 - 4 > e);
      }
    }
});
