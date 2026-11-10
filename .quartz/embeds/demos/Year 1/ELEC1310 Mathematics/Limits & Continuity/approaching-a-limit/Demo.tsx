import {
  MathsCard,
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
  p: rule("Approach", 0.3, 0, 3),
  point: rule("Point value", 0, 0, 2, 1),
};
type V = { p: number; point: number };
const scene: Scene<V> = (b, v, c) => {
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
    () => [0, 4],
    () => [4, 4],
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
  dot.setAttribute({ visible: () => v().point !== 0 });
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
    d = distance(v.p);
  return (
    <MathsCard>
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
        label="The line x+2 has a hole at (2,4). Points approach it from both sides."
      />
      <Legend
        theme={theme}
        items={[
          ["f(x) = (x² − 4)/(x − 2), x ≠ 2", "blue"],
          ["Limit 4", "amber"],
        ]}
      />
      <Reading>
        <p>
          P: ({n(2 - d)}, {n(4 - d)}) · Q: ({n(2 + d)}, {n(4 + d)})
        </p>
        <p>Both sides approach 4, regardless of f(2).</p>
      </Reading>
      <Approach value={v.p} target={3} onChange={(x) => set("p", x)} />
    </MathsCard>
  );
}
