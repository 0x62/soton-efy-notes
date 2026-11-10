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
  continuityKind,
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
  jump: rule("Right branch", 0, 0, 1, 1),
  k: rule("Point value k", 4, 4, 10, 0.1),
};
type V = { k: number; jump: number };
const scene: Scene<V> = (b, v, c) => {
  graph(b, (x) => 2 * x + 1, c.blue, 1.8, 3);
  graph(b, (x) => x * x - 2 + v().jump, c.blue, 3, 4.2);
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
    () => 7 + v().jump,
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
  ).setAttribute({ layer: 11 });
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
    works = continuityKind(v.k, v.jump) === "continuous";
  return (
    <MathsCard>
      <Investigation question="Can changing one point join these two pieces?">
        <p>
          {
            "The original pieces both approach 7, so k = 7 repairs the hole. Raising the right-hand piece gives side limits 7 and 8. No single k can equal both; the jump cannot be repaired at one point."
          }
        </p>
      </Investigation>
      <Choices
        label="Right-hand piece"
        value={v.jump}
        options={["Original pieces", "Raise right piece by 1"]}
        onChange={(x) => set("jump", x)}
      />
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
        label={
          v.jump
            ? "Left side approaches seven and right side eight; changing k cannot remove this jump."
            : "Both pieces approach seven; the assigned value k must equal seven for continuity."
        }
      />
      <Legend
        theme={theme}
        items={[
          [
            v.jump
              ? "2x + 1 (left); x² − 1 (right)"
              : "2x + 1 (left); x² − 2 (right)",
            "blue",
          ],
          ["Assigned point k", "amber"],
        ]}
      />
      <Reading>
        <p>
          1. f(3) is defined: {n(v.k)} · 2. Left limit = 7; right limit ={" "}
          {7 + v.jump}.
        </p>
        <p>
          3.{" "}
          {v.jump ? "No common limit to match" : `f(3) ${works ? "=" : "≠"} 7`}{" "}
          →{" "}
          <strong>
            {works
              ? "continuous"
              : v.jump
                ? "jump: no value of k can repair it"
                : "removable discontinuity"}
          </strong>
        </p>
      </Reading>
      <button type="button" onClick={() => set("k", 7)}>
        Try k = 7
      </button>
    </MathsCard>
  );
}
