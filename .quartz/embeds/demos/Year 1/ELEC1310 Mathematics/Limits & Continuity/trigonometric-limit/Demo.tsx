import { Latex, latexNumber } from "~/toolkit/Latex";
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
  type Scene,
} from "~/toolkit/MathsPlot";
import { rule, distance, sinc, n } from "../models";
const schema = { p: rule("Approach", 0, 0, 3), side: rule("Side", 1, 0, 1, 1) };
type V = { p: number; side: number };
const x = (v: V) => (v.side === 0 ? -1 : 1) * 1.4 * distance(v.p);
const scene: Scene<V> = (b, v, c) => {
  graph(b, Math.cos, c.amber, -1.55, 1.55);
  graph(b, () => 1, c.green, -1.55, 1.55);
  graph(b, sinc, c.blue, -1.55, 0);
  graph(b, sinc, c.blue, 0, 1.55);
  point(
    b,
    () => 0,
    () => 1,
    c.blue,
    c.fill,
    "",
    true,
  );
  segment(
    b,
    () => [x(v()), Math.cos(x(v()))],
    () => [x(v()), 1],
    c.ink,
  );
  point(
    b,
    () => x(v()),
    () => sinc(x(v())),
    c.blue,
    c.fill,
    "P",
  );
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema),
    input = x(v);
  return (
    <MathsCard>
      <Choices
        label="Sign of angle"
        value={v.side}
        options={["x < 0", "x > 0"]}
        onChange={(x) => set("side", x)}
      />
      <MathsSlider
        label="Angle x (radians)"
        value={v.p}
        min={0}
        max={3}
        step={0.01}
        display={n(input)}
        onChange={(x) => set("p", x)}
      />
      <MathsPlot
        values={v}
        theme={theme}
        scene={scene}
        bounds={[-1.75, 1.18, 1.75, -0.15]}
        label="For nonzero angles with absolute value less than pi over two, cosine x is below sine x over x, which is below one."
      />
      <Legend
        theme={theme}
        items={[
          ["cos x", "amber"],
          ["sin x / x", "blue"],
          ["1", "green"],
        ]}
      />
      <Reading>
        <p>
          <Latex
            latex={String.raw`x\approx ${latexNumber(input)}\ \mathrm{rad}`}
          />
        </p>
        <p>
          <Latex
            latex={String.raw`\cos x<\frac{\sin x}{x}<1\quad(0<|x|<\pi/2)`}
          />
        </p>
        <p>
          <Latex
            latex={String.raw`\cos x\approx ${latexNumber(Math.cos(input))}`}
          />
        </p>
        <p>
          <Latex
            latex={String.raw`\frac{\sin x}{x}\approx ${latexNumber(sinc(input))}`}
          />
        </p>
        <p>
          Both bounds approach one; the original ratio is undefined at zero.
          Values shown are rounded.
        </p>
      </Reading>
      <Approach value={v.p} target={3} onChange={(x) => set("p", x)} />
    </MathsCard>
  );
}
