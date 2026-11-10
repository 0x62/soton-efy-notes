import {
  MathsCard,
  Investigation,
  useMathsModel,
  MathsSlider,
  Choices,
  Reading,
  Approach,
} from "~/toolkit/MathsCard";
import {
  MathsPlot,
  Legend,
  graph,
  point,
  segment,
  band,
  type Scene,
} from "~/toolkit/MathsPlot";
import {
  targetErrors,
  rule,
  distance,
  secantSlope,
  sinc,
  rationalised,
  cubic,
  bracket,
  epsilonWorks,
  counterexample,
  oscillationPair,
  n,
} from "../models";
const schema = {
  target: rule("Proposed limit L", 3, 2, 5, 0.1),
  p: rule("Approach", 0.3, 0, 3),
  point: rule("Point value", 0, 0, 2, 1),
};
type V = { p: number; point: number; target: number };
const scene: Scene<V> = (b, v, c) => {
  band(
    b,
    () => 0,
    () => v().target - 0.2,
    () => 4,
    () => v().target + 0.2,
    c.green,
  );
  graph(b, (x) => x + 2, c.blue, 0, 2);
  graph(b, (x) => x + 2, c.blue, 2, 4);
  segment(
    b,
    () => [2, 0],
    () => [2, 4],
    c.ink,
    true,
  );
  segment(
    b,
    () => [0, v().target],
    () => [4, v().target],
    c.amber,
    true,
  );
  point(
    b,
    () => 2,
    () => 4,
    c.blue,
    c.fill,
    "",
    true,
  );
  const dot = point(
    b,
    () => 2,
    () => (v().point === 1 ? 4 : 1),
    c.amber,
    c.fill,
    "f(2)",
  );
  dot.setAttribute({ layer: 11, visible: () => v().point !== 0 });
  point(
    b,
    () => 2 - distance(v().p),
    () => 4 - distance(v().p),
    c.blue,
    c.fill,
    "P",
  );
  point(
    b,
    () => 2 + distance(v().p),
    () => 4 + distance(v().p),
    c.green,
    c.fill,
    "Q",
  );
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema),
    d = distance(v.p),
    errors = targetErrors(v.target, d);
  return (
    <MathsCard>
      <Investigation question="Which proposed limit survives as both inputs approach 2?">
        <p>
          {
            "A wrong target leaves a non-zero gap. For L = 4, output error equals input distance. Changing only f(2) cannot change that relationship at nearby inputs."
          }
        </p>
      </Investigation>
      <MathsSlider
        label="Proposed limit L"
        value={v.target}
        min={2}
        max={5}
        step={0.1}
        onChange={(x) => set("target", x)}
      />
      <Choices
        label="Value at x = 2"
        value={v.point}
        options={["f(2) undefined", "f(2) = 4", "f(2) = 1"]}
        onChange={(x) => set("point", x)}
      />
      <MathsSlider
        label="Distance from x = 2"
        value={v.p}
        min={0}
        max={3}
        step={0.01}
        display={n(d)}
        onChange={(x) => set("p", x)}
      />
      <MathsPlot
        values={v}
        theme={theme}
        scene={scene}
        bounds={[-0.35, 6.4, 4.5, -0.5]}
        label="Two points approach the hole at (2,4); compare their outputs to a strip around your proposed limit."
      />
      <Legend
        theme={theme}
        items={[
          ["f(x) = (x² − 4)/(x − 2), x ≠ 2", "blue"],
          ["Proposed limit L", "amber"],
          ["Allowed output error < 0.2", "green"],
        ]}
      />
      <Reading>
        <p>
          P: ({n(2 - d)}, {n(4 - d)}) · Q: ({n(2 + d)}, {n(4 + d)})
        </p>
        <p>
          Largest sampled error from L: {n(errors.sample)}.
          {errors.sample < 0.2
            ? " Both samples are inside the strip."
            : " At least one sample is outside the strip."}
        </p>
        <p>
          As input distance shrinks, the remaining gap tends to |4 − L| ={" "}
          {n(errors.residual)}.
        </p>
      </Reading>
      <Approach value={v.p} target={3} onChange={(x) => set("p", x)} />
    </MathsCard>
  );
}
