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
  p: rule("Approach", 0.5, 0, 3),
  index: rule("Sequence index", 2, 1, 30, 1),
};
type V = { mode: number; p: number; index: number };
const scene: Scene<V> = (b, v, c) => {
  graph(
    b,
    (x) =>
      v().mode === 0
        ? x < 0
          ? -1
          : NaN
        : v().mode === 1
          ? NaN
          : x < -0.025
            ? Math.sin(1 / x)
            : NaN,
    c.blue,
    -1.2,
    0,
  );
  graph(
    b,
    (x) =>
      v().mode === 0
        ? x > 0
          ? 1
          : NaN
        : v().mode === 1
          ? Math.sqrt(x)
          : x > 0.025
            ? Math.sin(1 / x)
            : NaN,
    c.blue,
    0,
    1.2,
  );
  for (const side of [-1, 1]) {
    const dot = point(
      b,
      () => 0,
      () => side,
      c.blue,
      c.fill,
      "",
      true,
    );
    dot.setAttribute({ visible: () => v().mode === 0 });
  }
  const endpoint = point(
    b,
    () => 0,
    () => 0,
    c.blue,
    c.fill,
  );
  endpoint.setAttribute({ visible: () => v().mode === 1 });
  const left = point(
    b,
    () => (v().mode === 2 ? oscillationPair(v().index)[0] : -distance(v().p)),
    () => (v().mode === 2 ? 1 : -1),
    c.amber,
    c.fill,
    "P",
  );
  left.setAttribute({ visible: () => v().mode !== 1 });
  point(
    b,
    () => (v().mode === 2 ? oscillationPair(v().index)[1] : distance(v().p)),
    () =>
      v().mode === 0 ? 1 : v().mode === 1 ? Math.sqrt(distance(v().p)) : -1,
    c.green,
    c.fill,
    "Q",
  );
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema),
    d = distance(v.p),
    pair = oscillationPair(v.index);
  return (
    <MathsCard>
      <Investigation question="Is the problem disagreement, a domain boundary, or no settled output?">
        <p>
          {
            "A jump has two different one-sided limits. At the square-root endpoint, only the right-hand domain exists. The oscillation sequences retain opposite outputs arbitrarily close to zero, disproving a common limit."
          }
        </p>
      </Investigation>
      <Choices
        label="Type of limit"
        value={v.mode}
        options={["Jump at 0", "Domain endpoint", "Oscillation"]}
        onChange={(x) => set("mode", x)}
      />
      {v.mode === 2 ? (
        <MathsSlider
          label="Sequence index n"
          value={v.index}
          min={1}
          max={30}
          step={1}
          onChange={(x) => set("index", x)}
        />
      ) : (
        <MathsSlider
          label="Distance to 0"
          value={v.p}
          min={0}
          max={3}
          step={0.01}
          display={n(d)}
          onChange={(x) => set("p", x)}
        />
      )}
      <MathsPlot
        values={v}
        theme={theme}
        scene={scene}
        bounds={[-1.3, 1.6, 1.3, -1.6]}
        label="Compare a jump, the endpoint of square root x, and two sequences in sine of one over x."
      />
      <Reading>
        {v.mode === 0 ? (
          <>
            <p>f(x) = |x|/x · left limit −1 · right limit +1</p>
            <p>The two-sided limit does not exist.</p>
          </>
        ) : v.mode === 1 ? (
          <>
            <p>
              f(x) = √x · x = {n(d)} · f(x) = {n(Math.sqrt(d))}
            </p>
            <p>Right-hand limit 0. No real domain to the left.</p>
          </>
        ) : (
          <>
            <p>P: xₙ = 1/(π/2 + 2πn) = {n(pair[0])}, f(xₙ) = +1</p>
            <p>Q: yₙ = 1/(3π/2 + 2πn) = {n(pair[1])}, f(yₙ) = −1</p>
            <p>
              Both sequences tend to 0; their outputs disagree. The limit fails.
            </p>
            <p className="text-xs">
              The curve omits |x| &lt; 0.025; the exact sequence points continue
              inside.
            </p>
          </>
        )}
      </Reading>
    </MathsCard>
  );
}
