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
  graph,
  point,
  segment,
  type Scene,
} from "~/toolkit/MathsPlot";
import { rule, distance, n } from "../models";
const schema = {
  p: rule("Approach", 0.3, 0, 4),
  side: rule("Side", 1, 0, 1, 1),
};
type V = { p: number; side: number };
const x = (v: V) => 5 + (v.side === 0 ? -1 : 1) * distance(v.p);
const scene: Scene<V> = (b, v, c) => {
  graph(b, (z) => z + 5, c.blue, 3.5, 5);
  graph(b, (z) => z + 5, c.blue, 5, 6.5);
  point(
    b,
    () => 5,
    () => 10,
    c.blue,
    c.fill,
    "",
    true,
  );
  point(
    b,
    () => x(v()),
    () => x(v()) + 5,
    c.blue,
    c.fill,
    "P",
  );
  segment(
    b,
    () => [3.5, 10],
    () => [6.5, 10],
    c.amber,
    true,
  );
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema),
    input = x(v);
  return (
    <MathsCard>
      <Choices
        label="Side of approach to five"
        value={v.side}
        options={["x < 5", "x > 5"]}
        onChange={(x) => set("side", x)}
      />
      <MathsSlider
        label="Distance from x = 5"
        value={v.p}
        min={0}
        max={4}
        step={0.01}
        display={n(distance(v.p))}
        onChange={(x) => set("p", x)}
      />
      <MathsPlot
        values={v}
        theme={theme}
        scene={scene}
        bounds={[3.5, 11.6, 6.5, 8.4]}
        label="A line with a hole at (5,10), showing cancellation away from the excluded input."
      />
      <Reading>
        <p>
          <Latex
            latex={String.raw`\frac{x^2-25}{x-5}=\frac{(x-5)(x+5)}{x-5}`}
          />
        </p>
        <p>
          <Latex latex={String.raw`f(x)=x+5\quad(x\ne5)`} />
        </p>
        <p>
          <Latex
            latex={String.raw`x\approx ${latexNumber(input)},\quad f(x)\approx ${latexNumber(input + 5)}`}
          />
        </p>
        <p>
          <Latex latex={String.raw`\lim_{x\to5}f(x)=10`} />. The original
          expression is undefined at <Latex latex="x=5" />.
        </p>
      </Reading>
      <Approach value={v.p} target={4} onChange={(x) => set("p", x)} />
    </MathsCard>
  );
}
