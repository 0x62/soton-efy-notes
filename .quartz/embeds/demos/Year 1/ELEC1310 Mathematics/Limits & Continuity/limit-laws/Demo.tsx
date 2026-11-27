import { Latex, latexNumber } from "~/toolkit/Latex";
import {
  MathsCard,
  useMathsModel,
  MathsSlider,
  Choices,
  Reading,
} from "~/toolkit/MathsCard";
import {
  MathsPlot,
  Legend,
  graph,
  point,
  segment,
  type Scene,
} from "~/toolkit/MathsPlot";
import { rule, n } from "../models";
const schema = {
  operation: rule("Operation", 0, 0, 3, 1),
  x: rule("x", 0.6, 0.5, 1.5, 0.001),
};
type V = { operation: number; x: number };
const f = (x: number) => x * x - 1,
  g = (x: number) => x + 1;
const combined = (x: number, op: number) =>
  op === 0
    ? f(x) + g(x)
    : op === 1
      ? f(x) * g(x)
      : op === 2
        ? f(x) / g(x)
        : Math.exp(f(x));
const names = ["f + g", "f × g", "f / g", "exp(f)"] as const;
const limits = [2, 0, 0, 1];
const scene: Scene<V> = (b, v, c) => {
  graph(b, f, c.ink, 0.35, 1.65);
  const gr = graph(b, g, c.green, 0.35, 1.65);
  gr.setAttribute({ visible: () => v().operation !== 3 });
  graph(b, (x) => combined(x, v().operation), c.blue, 0.35, 1.65);
  segment(
    b,
    () => [1, -2],
    () => [1, 5],
    c.amber,
    true,
  );
  point(
    b,
    () => v().x,
    () => combined(v().x, v().operation),
    c.blue,
    c.fill,
    "P",
  );
  point(
    b,
    () => 1,
    () => limits[v().operation],
    c.amber,
    c.fill,
    "L",
  );
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema);
  return (
    <MathsCard>
      <Choices
        label="Limit law"
        value={v.operation}
        options={names}
        onChange={(x) => set("operation", x)}
      />
      <MathsSlider
        label="x"
        value={v.x}
        min={0.5}
        max={1.5}
        step={0.001}
        onChange={(x) => set("x", x)}
      />
      <MathsPlot
        values={v}
        theme={theme}
        scene={scene}
        bounds={[0.35, 4.2, 1.65, -2]}
        label="f approaches zero and g approaches two as x approaches one; combine the limits."
      />
      <Legend
        theme={theme}
        items={
          v.operation === 3
            ? [
                ["f(x) = x² − 1", "ink"],
                ["exp(f(x))", "blue"],
              ]
            : [
                ["f(x) = x² − 1", "ink"],
                ["g(x) = x + 1", "green"],
                [names[v.operation], "blue"],
              ]
        }
      />
      <Reading>
        <p>
          <Latex
            latex={String.raw`x=${latexNumber(v.x)},\quad f(x)\approx ${latexNumber(f(v.x))}`}
          />
        </p>
        {v.operation !== 3 && (
          <p>
            <Latex latex={String.raw`g(x)\approx ${latexNumber(g(v.x))}`} />
          </p>
        )}
        <p>
          <Latex
            latex={String.raw`${["f(x)+g(x)", "f(x)g(x)", String.raw`\frac{f(x)}{g(x)}`, "e^{f(x)}"][v.operation]}\approx ${latexNumber(combined(v.x, v.operation))}`}
          />
        </p>
        <p>
          <Latex
            latex={String.raw`\lim_{x\to1}${["(f(x)+g(x))", "f(x)g(x)", String.raw`\frac{f(x)}{g(x)}`, "e^{f(x)}"][v.operation]}=${limits[v.operation]}`}
          />
        </p>
        <p>
          {v.operation === 2 ? (
            <>
              The denominator tends to <Latex latex={String.raw`2\ne0`} />, so
              the quotient law applies.
            </>
          ) : v.operation === 3 ? (
            <>
              The inner limit is zero; the exponential is continuous there, with{" "}
              <Latex latex="e^0=1" />.
            </>
          ) : (
            "Both component limits are finite."
          )}
        </p>
      </Reading>
    </MathsCard>
  );
}
