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
const schema = { k: rule("Point value k", 4, 4, 10, 0.1) };
type V = { k: number };
const scene: Scene<V> = (b, v, c) => {
  graph(b, (x) => 2 * x + 1, c.blue, 1.8, 3);
  graph(b, (x) => x * x - 2, c.blue, 3, 4.2);
  point(
    b,
    () => 3,
    () => 7,
    c.blue,
    c.fill,
    "",
    true,
  );
  point(
    b,
    () => 3,
    () => v().k,
    c.amber,
    c.fill,
    "f(3)",
  );
  segment(
    b,
    () => [1.8, 7],
    () => [4.2, 7],
    c.green,
    true,
  );
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema),
    works = Math.abs(v.k - 7) < 1e-10;
  return (
    <MathsCard>
      <MathsSlider
        label="k = f(3)"
        value={v.k}
        min={4}
        max={10}
        step={0.1}
        onChange={(x) => set("k", x)}
      />
      <MathsPlot
        values={v}
        theme={theme}
        scene={scene}
        bounds={[1.8, 12.3, 4.2, 3.2]}
        label="Two pieces approach seven at x three; the separately assigned point k must equal seven for continuity."
      />
      <Legend
        theme={theme}
        items={[
          ["2x + 1 (x < 3); x² − 2 (x > 3)", "blue"],
          ["Assigned point k", "amber"],
        ]}
      />
      <Reading>
        <p>1. f(3) is defined: {n(v.k)} · 2. Both side limits = 7</p>
        <p>
          3. f(3) {works ? "=" : "≠"} 7 →{" "}
          <strong>{works ? "continuous" : "removable discontinuity"}</strong>
        </p>
      </Reading>
      <button type="button" onClick={() => set("k", 7)}>
        Make continuous
      </button>
    </MathsCard>
  );
}
