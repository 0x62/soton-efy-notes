import { useState } from "react";
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
  correctBisectionHalf,
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
  iteration: rule("Bisection steps", 0, 0, 12, 1),
  mode: rule("Function", 0, 0, 1, 1),
};
type V = { iteration: number; mode: number };
const scene: Scene<V> = (b, v, c) => {
  const a = () => (v().mode === 0 ? bracket(v().iteration).a : 1),
    z = () => (v().mode === 0 ? bracket(v().iteration).b : 2);
  band(
    b,
    a,
    () => -1.5,
    z,
    () => 5.5,
    c.green,
  );
  graph(b, (x) => (v().mode === 0 ? cubic(x) : NaN), c.blue, 0.8, 2.2);
  graph(b, (x) => (v().mode === 1 ? -1 : NaN), c.blue, 0.8, 1.4);
  graph(b, (x) => (v().mode === 1 ? 5 : NaN), c.blue, 1.4, 2.2);
  for (const y of [-1, 5]) {
    const p = point(
      b,
      () => 1.4,
      () => y,
      c.blue,
      c.fill,
      "",
      y === -1,
    );
    p.setAttribute({ visible: () => v().mode === 1 });
  }
  point(
    b,
    () => (a() + z()) / 2,
    () => (v().mode === 0 ? cubic((a() + z()) / 2) : NaN),
    c.red,
    c.fill,
    "m",
  );
  point(b, a, () => (v().mode === 0 ? cubic(a()) : -1), c.amber, c.fill, "a");
  point(b, z, () => (v().mode === 0 ? cubic(z()) : 5), c.green, c.fill, "b");
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema),
    { a, b } = bracket(v.iteration);
  const [feedback, setFeedback] = useState("");
  const m = (a + b) / 2;
  const choose = (left: boolean) => {
    if (left === (correctBisectionHalf(v.iteration) === "left")) {
      setFeedback(
        `Retained ${left ? "left" : "right"} half: its endpoint signs are opposite, so continuity still guarantees a root.`,
      );
      set("iteration", v.iteration + 1);
    } else
      setFeedback(
        `That half has two ${left ? "negative" : "positive"} endpoint values. Those signs do not guarantee a root; keep the other half.`,
      );
  };
  return (
    <MathsCard>
      <Investigation question="Which half still contains a guaranteed root?">
        <p>
          {
            "Keep the half whose endpoint values have opposite signs. Continuity carries the existence guarantee into that smaller interval. A discontinuous jump can skip zero, despite opposite signs at the endpoints."
          }
        </p>
      </Investigation>
      <Choices
        label="Continuity hypothesis"
        value={v.mode}
        options={["Continuous polynomial", "Jump counterexample"]}
        onChange={(x) => {
          set("mode", x);
          setFeedback("");
        }}
      />
      <MathsPlot
        values={v}
        theme={theme}
        scene={scene}
        bounds={[0.8, 6.2, 2.2, -1.8]}
        label="A continuous cubic crosses zero between opposite-signed endpoints; a discontinuous step can skip zero."
      />
      <Reading>
        {v.mode === 0 ? (
          <>
            <p>
              f(x) = x³ − x − 1 · f(a) = {n(cubic(a))} · f(b) = {n(cubic(b))}
            </p>
            <p>
              Midpoint m = {n(m)} · f(m) = {n(cubic(m))}. Which half retains
              opposite endpoint signs?
            </p>
            <p>
              At least one root lies in ({n(a)}, {n(b)}). Width {n(b - a)}.
            </p>
            <p>
              Continuity + opposite signs guarantee existence, not uniqueness.
            </p>
          </>
        ) : (
          <>
            <p>f(1) = −1 and f(2) = 5, but the jump skips 0.</p>
            <p>Without continuity, the IVT does not apply.</p>
          </>
        )}
      </Reading>
      {feedback && (
        <p role="status" className="text-sm">
          {feedback}
        </p>
      )}
      {v.mode === 0 && (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={v.iteration >= 12}
            onClick={() => choose(true)}
          >
            Keep left half
          </button>
          <button
            type="button"
            disabled={v.iteration >= 12}
            onClick={() => choose(false)}
          >
            Keep right half
          </button>
          <button
            type="button"
            disabled={v.iteration >= 12}
            onClick={() => choose(correctBisectionHalf(v.iteration) === "left")}
          >
            Show a worked step
          </button>
          <button
            type="button"
            disabled={v.iteration === 0}
            onClick={() => {
              set("iteration", 0);
              setFeedback("");
            }}
          >
            Reset interval
          </button>
        </div>
      )}
    </MathsCard>
  );
}
