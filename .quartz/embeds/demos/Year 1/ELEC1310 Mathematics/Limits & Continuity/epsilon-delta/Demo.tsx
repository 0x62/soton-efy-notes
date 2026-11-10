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
  epsilon: rule("Output tolerance ε", 1, 0.1, 2, 0.05),
  delta: rule("Input radius δ", 0.3, 0.02, 1.2, 0.01),
};
type V = { epsilon: number; delta: number };
const scene: Scene<V> = (b, v, c) => {
  band(
    b,
    () => 1.5,
    () => 7 - v().epsilon,
    () => 4.5,
    () => 7 + v().epsilon,
    c.green,
  );
  band(
    b,
    () => 3 - v().delta,
    () => 3.8,
    () => 3 + v().delta,
    () => 10.2,
    c.amber,
  );
  graph(b, (x) => 2 * x + 1, c.blue, 1.5, 4.5);
  point(
    b,
    () => 3,
    () => 7,
    c.blue,
    c.fill,
    "",
    true,
  );
  const bad = point(
    b,
    () => counterexample(v().epsilon, v().delta),
    () => 2 * counterexample(v().epsilon, v().delta) + 1,
    c.red,
    c.fill,
    "X",
  );
  bad.setAttribute({ visible: () => !epsilonWorks(v().epsilon, v().delta) });
  for (const s of [-1, 1])
    point(
      b,
      () => 3 + s * v().delta,
      () => 7 + s * 2 * v().delta,
      c.amber,
      c.fill,
      "",
      true,
    );
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema),
    works = epsilonWorks(v.epsilon, v.delta),
    w = counterexample(v.epsilon, v.delta);
  return (
    <MathsCard>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <MathsSlider
          label="Output tolerance ε"
          value={v.epsilon}
          min={0.1}
          max={2}
          step={0.05}
          onChange={(x) => set("epsilon", x)}
        />
        <MathsSlider
          label="Input radius δ"
          value={v.delta}
          min={0.02}
          max={1.2}
          step={0.01}
          onChange={(x) => set("delta", x)}
        />
      </div>
      <MathsPlot
        values={v}
        theme={theme}
        scene={scene}
        bounds={[1.4, 10.5, 4.6, 3.5]}
        label="The input strip around three must map inside the output strip around seven for every point except x equals three."
      />
      <Legend
        theme={theme}
        items={[
          ["f(x) = 2x + 1", "blue"],
          ["0 < |x − 3| < δ", "amber"],
          ["|f(x) − 7| < ε", "green"],
        ]}
      />
      <Reading>
        <p>
          <strong>
            {works ? "Works for every allowed x" : "δ is too large"}
          </strong>{" "}
          · δ {works ? "≤" : " >"} ε/2 = {n(v.epsilon / 2)}
        </p>
        {works ? (
          <p>
            |f(x) − 7| = 2|x − 3| &lt; 2δ ≤ ε. The centre x = 3 is excluded.
          </p>
        ) : (
          <p>
            Counterexample X: x = {n(w)}, |x − 3| = {n(w - 3)} &lt; δ, but |f(x)
            − 7| = {n(2 * (w - 3))} &gt; ε.
          </p>
        )}
      </Reading>
      <button type="button" onClick={() => set("delta", v.epsilon / 2)}>
        Choose δ = ε/2
      </button>
    </MathsCard>
  );
}
