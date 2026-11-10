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
  mode: rule("Example", 0, 0, 2, 1),
  p: rule("Approach", 0.3, 0, 3),
};
type V = { mode: number; p: number };
const horizontal = (x: number) => (5 * x * x - 2) / (2 * x * x + 7);
const scene: Scene<V> = (b, v, c) => {
  const f = (x: number) =>
    v().mode === 2
      ? horizontal(x)
      : v().mode === 0
        ? 1 / (x - 2) ** 2
        : 1 / (x - 2);
  const left = graph(
    b,
    (x) => (v().mode === 2 ? NaN : f(x)),
    c.blue,
    -2,
    1.999,
  );
  const right = graph(
    b,
    (x) => (v().mode === 2 ? NaN : f(x)),
    c.blue,
    2.001,
    6,
  );
  const hor = graph(
    b,
    (x) => (v().mode === 2 ? horizontal(x) : NaN),
    c.blue,
    0,
    1200,
  );
  const vert = segment(
    b,
    () => [2, -11],
    () => [2, 11],
    c.amber,
    true,
  );
  vert.setAttribute({ visible: () => v().mode !== 2 });
  const line = segment(
    b,
    () => [0, 2.5],
    () => [1200, 2.5],
    c.amber,
    true,
  );
  line.setAttribute({ visible: () => v().mode === 2 });
  const p = point(
    b,
    () => (v().mode === 2 ? 10 ** v().p : 2 - distance(v().p)),
    () => (v().mode === 2 ? horizontal(10 ** v().p) : f(2 - distance(v().p))),
    c.blue,
    c.fill,
    "P",
  );
  const q = point(
    b,
    () => 2 + distance(v().p),
    () => f(2 + distance(v().p)),
    c.green,
    c.fill,
    "Q",
  );
  q.setAttribute({ visible: () => v().mode !== 2 });
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema),
    d = distance(v.p),
    far = 10 ** v.p;
  return (
    <MathsCard>
      <Investigation question="Is the input growing, or is the output growing?">
        <p>
          {
            "At a vertical asymptote the input approaches a finite location while the output grows without bound. At a horizontal asymptote the input tends to infinity while the output tends to a finite height."
          }
        </p>
      </Investigation>
      <Choices
        label="Asymptote example"
        value={v.mode}
        options={["1/(x − 2)²", "1/(x − 2)", "(5x² − 2)/(2x² + 7)"]}
        onChange={(x) => set("mode", x)}
      />
      <MathsSlider
        label={v.mode === 2 ? "x → +∞" : "Distance from x = 2"}
        value={v.p}
        min={0}
        max={3}
        step={0.01}
        display={n(v.mode === 2 ? far : d)}
        onChange={(x) => set("p", x)}
      />
      <MathsPlot
        values={v}
        theme={theme}
        scene={scene}
        bounds={
          v.mode === 2
            ? [-0.05 * Math.max(4, far), 3.2, 1.15 * Math.max(4, far), -0.7]
            : [-0.5, 11, 4.5, -11]
        }
        label="Separate branches at a vertical asymptote, or a rational function approaching the horizontal line y equals 2.5."
      />
      <Reading>
        {v.mode === 2 ? (
          <>
            <p>
              f({n(far)}) = {n(horizontal(far))} → 2.5 · gap ={" "}
              {n(2.5 - horizontal(far))}
            </p>
            <p>The function is even, so the limit at −∞ is also 2.5.</p>
          </>
        ) : (
          <>
            <p>
              Left value {n(v.mode === 0 ? 1 / d ** 2 : -1 / d)} · right value{" "}
              {n(v.mode === 0 ? 1 / d ** 2 : 1 / d)}
            </p>
            <p>
              {v.mode === 0
                ? "Both sides grow to +∞. This is not a finite real limit."
                : "Left → −∞; right → +∞. No common two-sided limit."}
            </p>
            {(v.mode === 0 ? 1 / d ** 2 : 1 / d) > 11 && (
              <p className="text-xs">
                Sample values exceed the fixed vertical plot range.
              </p>
            )}
          </>
        )}
      </Reading>
    </MathsCard>
  );
}
