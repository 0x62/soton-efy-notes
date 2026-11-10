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
  point(b, a, () => (v().mode === 0 ? cubic(a()) : -1), c.amber, c.fill, "a");
  point(b, z, () => (v().mode === 0 ? cubic(z()) : 5), c.green, c.fill, "b");
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema),
    { a, b } = bracket(v.iteration);
  return (
    <MathsCard>
      <Choices
        label="Continuity hypothesis"
        value={v.mode}
        options={["Continuous polynomial", "Jump counterexample"]}
        onChange={(x) => set("mode", x)}
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
      {v.mode === 0 && (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={v.iteration >= 12}
            onClick={() => set("iteration", v.iteration + 1)}
          >
            Bisect interval
          </button>
          <button
            type="button"
            disabled={v.iteration === 0}
            onClick={() => set("iteration", 0)}
          >
            Reset interval
          </button>
        </div>
      )}
    </MathsCard>
  );
}
