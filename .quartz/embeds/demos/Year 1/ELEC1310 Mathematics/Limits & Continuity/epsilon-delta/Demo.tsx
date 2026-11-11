import { Latex, latexNumber } from "~/toolkit/Latex";
import { HoleFormula } from "../HolePlot";
import {
  MathsCard,
  useMathsModel,
  MathsSlider,
  Reading,
} from "~/toolkit/MathsCard";
import {
  MathsPlot,
  Legend,
  graph,
  point,
  band,
  type Scene,
} from "~/toolkit/MathsPlot";
import { rule, holeEpsilonWorks, holeCounterexample, n } from "../models";
const schema = {
  epsilon: rule("Output tolerance ε", 0.5, 0.1, 1, 0.05),
  delta: rule("Input radius δ", 0.3, 0.02, 1.2, 0.01),
};
type V = { epsilon: number; delta: number };
const scene: Scene<V> = (b, v, c) => {
  band(
    b,
    () => 0.5,
    () => 4 - v().epsilon,
    () => 3.5,
    () => 4 + v().epsilon,
    c.green,
  );
  band(
    b,
    () => 2 - v().delta,
    () => 1.8,
    () => 2 + v().delta,
    () => 6.2,
    c.amber,
  );
  graph(b, (x) => x + 2, c.blue, 0.5, 3.5);
  point(
    b,
    () => 2,
    () => 4,
    c.blue,
    c.fill,
    "",
    true,
  );
  const bad = point(
    b,
    () => holeCounterexample(v().epsilon, v().delta),
    () => holeCounterexample(v().epsilon, v().delta) + 2,
    c.red,
    c.fill,
    "X",
  );
  bad.setAttribute({
    visible: () => !holeEpsilonWorks(v().epsilon, v().delta),
  });
  for (const s of [-1, 1])
    point(
      b,
      () => 2 + s * v().delta,
      () => 4 + s * v().delta,
      c.amber,
      c.fill,
      "",
      true,
    );
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema),
    works = holeEpsilonWorks(v.epsilon, v.delta),
    w = holeCounterexample(v.epsilon, v.delta);
  return (
    <MathsCard>
      <HoleFormula />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <MathsSlider
          label="Output tolerance ε"
          value={v.epsilon}
          min={0.1}
          max={1}
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
        bounds={[0.4, 6.5, 3.6, 1.5]}
        label="The input strip around two must map inside the output strip around four for every point except x equals two."
      />
      <Legend
        theme={theme}
        items={[
          ["Original fraction (x ≠ 2)", "blue"],
          ["0 < |x − 2| < δ", "amber"],
          ["|f(x) − 4| < ε", "green"],
        ]}
      />
      <Reading>
        <p>
          <strong>
            {works
              ? "Works for every allowed input"
              : "The input radius is too large"}
          </strong>
        </p>
        <p>
          <Latex
            latex={String.raw`\delta=${latexNumber(v.delta)}${works ? String.raw`\le` : ">"}\varepsilon=${latexNumber(v.epsilon)}`}
          />
        </p>
        {works ? (
          <>
            <p>
              <Latex latex={String.raw`|f(x)-4|=|x-2|<\delta\le\varepsilon`} />
            </p>
            <p>
              The centre <Latex latex="x=2" /> is excluded.
            </p>
          </>
        ) : (
          <>
            <p>
              Counterexample X:{" "}
              <Latex latex={String.raw`x\approx ${latexNumber(w)}`} />
            </p>
            <p>
              <Latex
                latex={String.raw`|x-2|\approx ${latexNumber(w - 2)}<\delta`}
              />
            </p>
            <p>
              <Latex
                latex={String.raw`|f(x)-4|\approx ${latexNumber(w - 2)}>\varepsilon`}
              />
            </p>
          </>
        )}
      </Reading>
      <button type="button" onClick={() => set("delta", v.epsilon)}>
        Choose δ = ε
      </button>
    </MathsCard>
  );
}
