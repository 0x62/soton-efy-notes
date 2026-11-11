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
import { rule, distance, secantSlope, n } from "../models";
const schema = {
  p: rule("Approach", 0.2, 0, 3),
  side: rule("Side", 1, 0, 1, 1),
};
type V = { p: number; side: number };
const h = (v: V) => (v.side === 0 ? -1 : 1) * distance(v.p);
const scene: Scene<V> = (b, v, c) => {
  graph(b, (x) => x * x, c.ink, -0.5, 3);
  graph(b, (x) => 2 * (x - 1) + 1, c.amber, -0.5, 3, true);
  graph(b, (x) => secantSlope(h(v())) * (x - 1) + 1, c.blue, -0.5, 3);
  segment(
    b,
    () => [1, 1],
    () => [1 + h(v()), 1],
    c.green,
  );
  segment(
    b,
    () => [1 + h(v()), 1],
    () => [1 + h(v()), (1 + h(v())) ** 2],
    c.green,
  );
  point(
    b,
    () => 1,
    () => 1,
    c.ink,
    c.fill,
    "P",
  );
  point(
    b,
    () => 1 + h(v()),
    () => (1 + h(v())) ** 2,
    c.blue,
    c.fill,
    "Q",
  );
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema),
    step = h(v);
  return (
    <MathsCard>
      <Choices
        label="Side of approach"
        value={v.side}
        options={["h < 0", "h > 0"]}
        onChange={(x) => set("side", x)}
      />
      <MathsSlider
        label="h"
        value={v.p}
        min={0}
        max={3}
        step={0.01}
        display={n(step)}
        onChange={(x) => set("p", x)}
      />
      <MathsPlot
        values={v}
        theme={theme}
        scene={scene}
        bounds={[-0.3, 4.8, 2.7, -0.8]}
        label="Secants through (1,1) and (1+h,(1+h) squared) approach the tangent to x squared."
      />
      <Legend
        theme={theme}
        items={[
          ["y = x²", "ink"],
          ["Secant PQ", "blue"],
          ["Tangent at x = 1", "amber"],
        ]}
      />
      <Reading>
        <p>
          <Latex latex={String.raw`h=${latexNumber(step)},\quad h\ne0`} />
        </p>
        <p>
          <Latex
            latex={String.raw`\frac{(1+h)^2-1}{h}=2+h\approx ${latexNumber(secantSlope(step))}`}
          />
        </p>
        <p>
          Tangent slope: <Latex latex={String.raw`\lim_{h\to0}(2+h)=2`} />.
        </p>
      </Reading>
      <Approach value={v.p} target={3} onChange={(x) => set("p", x)} />
    </MathsCard>
  );
}
