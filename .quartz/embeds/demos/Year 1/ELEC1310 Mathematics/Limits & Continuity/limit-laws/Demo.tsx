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
          f({n(v.x)}) = {n(f(v.x))}
          {v.operation !== 3 && (
            <>
              {" "}
              · g({n(v.x)}) = {n(g(v.x))}
            </>
          )}
        </p>
        <p>
          {names[v.operation]} = {n(combined(v.x, v.operation))} →{" "}
          <strong>{limits[v.operation]}</strong> as x → 1.
        </p>
        <p>
          {v.operation === 2
            ? "The denominator tends to 2 ≠ 0, so the quotient law applies."
            : v.operation === 3
              ? "The inner limit is 0; exp is continuous at 0, so the limit is exp(0) = 1."
              : "Both component limits are finite."}
        </p>
      </Reading>
    </MathsCard>
  );
}
