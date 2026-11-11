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
import { rule, distance, rationalised, n } from "../models";
const schema = {
  example: rule("Example", 0, 0, 1, 1),
  p: rule("Approach", 0.3, 0, 5),
  side: rule("Side", 1, 0, 1, 1),
};
type V = { example: number; p: number; side: number };
const a = (v: V) => (v.example === 0 ? 4 : 9);
const h = (v: V) => (v.side === 0 ? -1 : 1) * distance(v.p);
const scene: Scene<V> = (b, v, c) => {
  graph(b, (z) => rationalised(a(v()), z), c.blue, -1.2, 0);
  graph(b, (z) => rationalised(a(v()), z), c.blue, 0, 1.2);
  point(
    b,
    () => 0,
    () => 1 / (2 * Math.sqrt(a(v()))),
    c.blue,
    c.fill,
    "",
    true,
  );
  point(
    b,
    () => h(v()),
    () => rationalised(a(v()), h(v())),
    c.blue,
    c.fill,
    "P",
  );
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema),
    base = a(v),
    step = h(v);
  return (
    <MathsCard>
      <Choices
        label="Square root example"
        value={v.example}
        options={["Near x = 4", "Near x = 9"]}
        onChange={(x) => set("example", x)}
      />
      <Choices
        label="Side of approach"
        value={v.side}
        options={["h < 0", "h > 0"]}
        onChange={(x) => set("side", x)}
      />
      <MathsSlider
        label="h = x − a"
        value={v.p}
        min={0}
        max={5}
        step={0.01}
        display={n(step)}
        onChange={(x) => set("p", x)}
      />
      <MathsPlot
        values={v}
        theme={theme}
        scene={scene}
        bounds={[-1.3, 0.34, 1.3, 0.1]}
        label="The rationalised quotient approaches one over twice the square root of a; the original quotient has a hole at h zero."
      />
      <Reading>
        <p>
          <Latex
            latex={String.raw`\frac{\sqrt{${base}+h}-${Math.sqrt(base)}}{h}=\frac1{\sqrt{${base}+h}+${Math.sqrt(base)}}`}
          />
        </p>
        <p>
          <Latex
            latex={String.raw`h\approx ${latexNumber(step)},\quad f(h)\approx ${latexNumber(rationalised(base, step))}`}
          />
        </p>
        <p>
          <Latex
            latex={String.raw`\lim_{h\to0}f(h)=\frac1{${2 * Math.sqrt(base)}}=${latexNumber(1 / (2 * Math.sqrt(base)))}`}
          />
        </p>
        <p>
          The horizontal coordinate is <Latex latex="h" />; the hole at{" "}
          <Latex latex="h=0" /> remains.
        </p>
      </Reading>
    </MathsCard>
  );
}
