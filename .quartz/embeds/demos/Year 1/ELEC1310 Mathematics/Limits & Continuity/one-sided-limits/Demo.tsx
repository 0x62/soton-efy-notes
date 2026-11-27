import { Latex, latexNumber } from "~/toolkit/Latex";
import {
  MathsCard,
  useMathsModel,
  MathsSlider,
  Choices,
  Reading,
  Approach,
} from "~/toolkit/MathsCard";
import { MathsPlot, graph, point, type Scene } from "~/toolkit/MathsPlot";
import { rule, distance, oscillationPair, n } from "../models";
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
        ? x < 2
          ? -1
          : NaN
        : v().mode === 1
          ? NaN
          : x < -0.025
            ? Math.sin(1 / x)
            : NaN,
    c.blue,
    -1.2,
    2,
  );
  graph(
    b,
    (x) =>
      v().mode === 0
        ? x > 2
          ? 1
          : NaN
        : v().mode === 1
          ? Math.sqrt(x)
          : x > 0.025
            ? Math.sin(1 / x)
            : NaN,
    c.blue,
    0,
    3.2,
  );
  for (const side of [-1, 1]) {
    const dot = point(
      b,
      () => 2,
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
    () =>
      v().mode === 2
        ? oscillationPair(v().index)[0]
        : (v().mode === 0 ? 2 : 0) - distance(v().p),
    () => (v().mode === 2 ? 1 : -1),
    c.amber,
    c.fill,
    "P",
  );
  left.setAttribute({ visible: () => v().mode !== 1 });
  point(
    b,
    () =>
      v().mode === 2
        ? oscillationPair(v().index)[1]
        : (v().mode === 0 ? 2 : 0) + distance(v().p),
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
      <Choices
        label="Type of limit"
        value={v.mode}
        options={["Jump at 2", "Domain endpoint", "Oscillation"]}
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
          label={v.mode === 0 ? "Distance to 2" : "Distance to 0"}
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
        bounds={v.mode === 0 ? [0.7, 1.6, 3.3, -1.6] : [-1.3, 1.6, 1.3, -1.6]}
        label="Compare a jump, the endpoint of square root x, and two sequences in sine of one over x."
      />
      <Reading>
        {v.mode === 0 ? (
          <>
            <p>
              <Latex latex={String.raw`f(x)=\frac{|x-2|}{x-2}`} />
            </p>
            <p>
              <Latex
                latex={String.raw`f(${latexNumber(2 - d)})=-1,\quad f(${latexNumber(2 + d)})=1`}
              />
            </p>
            <p>
              <Latex
                latex={String.raw`\lim_{x\to2^-}f(x)=-1\ne1=\lim_{x\to2^+}f(x)`}
              />
            </p>
            <p>The two-sided limit does not exist.</p>
          </>
        ) : v.mode === 1 ? (
          <>
            <p>
              <Latex
                latex={String.raw`f(x)=\sqrt{x},\quad x\approx ${latexNumber(d)}`}
              />
            </p>
            <p>
              <Latex
                latex={String.raw`f(x)\approx ${latexNumber(Math.sqrt(d))},\quad\lim_{x\to0^+}\sqrt{x}=0`}
              />
            </p>
            <p>No real domain to the left of zero.</p>
          </>
        ) : (
          <>
            <p>
              <Latex
                latex={String.raw`x_n=\frac1{\pi/2+2\pi n}\approx ${latexNumber(pair[0])}`}
              />
            </p>
            <p>
              <Latex
                latex={String.raw`y_n=\frac1{3\pi/2+2\pi n}\approx ${latexNumber(pair[1])}`}
              />
            </p>
            <p>
              <Latex latex={String.raw`f(x_n)=1,\quad f(y_n)=-1`} />
            </p>
            <p>
              Both sequences tend to zero; their outputs disagree. The limit
              fails.
            </p>
            <p className="text-xs">
              The curve omits <Latex latex={String.raw`|x|<0.025`} />; the exact
              sequence points continue inside.
            </p>
          </>
        )}
      </Reading>
    </MathsCard>
  );
}
