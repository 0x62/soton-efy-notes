import { MathsPlot, graph, point, type Scene } from "~/toolkit/MathsPlot";
export type HoleValues = { distance: number; point: number; samples: boolean };
const scene: Scene<HoleValues> = (b, v, c) => {
  graph(b, (x) => x + 2, c.blue, 0, 2);
  graph(b, (x) => x + 2, c.blue, 2, 4);
  point(
    b,
    () => 2,
    () => 4,
    c.blue,
    c.fill,
    "",
    true,
  );
  point(
    b,
    () => 2,
    () => (v().point === 1 ? 4 : 1),
    c.amber,
    c.fill,
    "f(2)",
  ).setAttribute({ layer: 11, visible: () => v().point !== 0 });
  for (const side of [-1, 1])
    point(
      b,
      () => 2 + side * v().distance,
      () => 4 + side * v().distance,
      side < 0 ? c.blue : c.green,
      c.fill,
      side < 0 ? "P" : "Q",
    ).setAttribute({ visible: () => v().samples });
};
export function HoleFormula() {
  return (
    <p
      className="flex flex-wrap items-center gap-2"
      aria-label="f of x equals x squared minus four divided by x minus two, for x not equal to two"
    >
      <span aria-hidden="true">f(x) =</span>
      <span aria-hidden="true" className="inline-flex flex-col text-center">
        <span className="border-b border-current px-2">x² − 4</span>
        <span>x − 2</span>
      </span>
      <span aria-hidden="true">, x ≠ 2</span>
    </p>
  );
}
export function HolePlot({
  values,
  theme,
}: {
  values: HoleValues;
  theme: "light" | "dark";
}) {
  return (
    <MathsPlot
      values={values}
      theme={theme}
      scene={scene}
      bounds={values.samples ? [1.75, 4.3, 2.25, 3.7] : [1.4, 4.8, 2.6, 0.5]}
      label={
        values.samples
          ? "The original fraction has a hole at (2,4). P and Q approach it from opposite sides without reaching it."
          : "The same fraction approaches four on either side of two. Only the assigned centre value changes."
      }
    />
  );
}
