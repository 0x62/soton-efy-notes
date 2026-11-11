import type { NumericRule } from "~/toolkit/params";
export const rule = (
  label: string,
  value: number,
  min: number,
  max: number,
  step = 0.01,
): NumericRule => ({ label, default: value, min, max, step, unit: "" });
export const distance = (p: number) => 10 ** -p;
export const secantSlope = (h: number) => 2 + h;
export const sinc = (x: number) => (x === 0 ? 1 : Math.sin(x) / x);
export const rationalised = (a: number, h: number) =>
  1 / (Math.sqrt(a + h) + Math.sqrt(a));
export const cubic = (x: number) => x * x * x - x - 1;
export function bracket(iterations: number) {
  let a = 1,
    b = 2;
  for (let i = 0; i < Math.floor(iterations); i++) {
    const m = (a + b) / 2;
    if (cubic(m) < 0) a = m;
    else b = m;
  }
  return { a, b };
}
export const epsilonWorks = (epsilon: number, delta: number) =>
  2 * delta <= epsilon;
export const counterexample = (epsilon: number, delta: number) =>
  3 + (epsilon / 2 + delta) / 2;
export const oscillationPair = (n: number) =>
  [
    1 / (Math.PI / 2 + 2 * Math.PI * n),
    1 / ((3 * Math.PI) / 2 + 2 * Math.PI * n),
  ] as const;
export const n = (v: number) => Number(v.toPrecision(8)).toString();

export function continuityKind(k: number, jump: number) {
  return jump !== 0
    ? "jump"
    : Math.abs(k - 7) < 1e-10
      ? "continuous"
      : "removable";
}
export function correctBisectionHalf(iteration: number) {
  const { a, b } = bracket(iteration);
  return cubic((a + b) / 2) > 0 ? "left" : "right";
}

export const holeEpsilonWorks = (epsilon: number, delta: number) =>
  delta <= epsilon;
export const holeCounterexample = (epsilon: number, delta: number) =>
  2 + (epsilon + delta) / 2;
