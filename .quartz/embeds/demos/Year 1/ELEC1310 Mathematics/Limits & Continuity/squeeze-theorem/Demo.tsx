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
const schema = { p: rule("Neighbourhood", 0.1, 0, 2) };
type V = { p: number };
const scene: Scene<V> = (b, v, c) => {
  band(
    b,
    () => -1.1,
    () => -(distance(v().p) ** 2),
    () => 1.1,
    () => distance(v().p) ** 2,
    c.green,
  );
  band(
    b,
    () => -distance(v().p),
    () => -1.1,
    () => distance(v().p),
    () => 1.1,
    c.amber,
  );
  graph(b, (x) => x * x, c.amber, -1, 1);
  graph(b, (x) => -x * x, c.amber, -1, 1);
  // Sample uniformly in phase rather than letting graph sampling alias rapid oscillation.
  for (const side of [-1, 1]) {
    const xs = Array.from(
      { length: 1800 },
      (_, i) => side / (1 + (i * 99) / 1799),
    );
    b.create("curve", [xs, xs.map((x) => x * x * Math.sin(1 / x))], {
      strokeColor: c.blue,
      strokeWidth: 2,
      highlight: false,
      fixed: true,
    });
  }
  point(
    b,
    () => 0,
    () => 0,
    c.blue,
    c.fill,
    "",
    true,
  );
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema),
    d = distance(v.p);
  return (
    <MathsCard>
      <MathsSlider
        label="Neighbourhood radius δ"
        value={v.p}
        min={0}
        max={2}
        step={0.01}
        display={n(d)}
        onChange={(x) => set("p", x)}
      />
      <MathsPlot
        values={v}
        theme={theme}
        scene={scene}
        bounds={[-1.2, 1.2, 1.2, -1.2]}
        label="The oscillating curve x squared sine of one over x is trapped between plus and minus x squared. The fixed axes show the envelope shrinking."
      />
      <Legend
        theme={theme}
        items={[
          ["x² sin(1/x)", "blue"],
          ["Bounds ±x²", "amber"],
          ["Output bound ±δ²", "green"],
        ]}
      />
      <Reading>
        <p>
          0 &lt; |x| &lt; {n(d)} ⇒ |x² sin(1/x)| ≤ x² &lt;{" "}
          <strong>{n(d * d)}</strong>
        </p>
        <p>
          The bound controls every input in the interval, even unseen
          oscillations.
        </p>
        <p className="text-xs">
          Curve inside |x| &lt; 0.01 omitted; the envelope still bounds it.
        </p>
      </Reading>
      <Approach value={v.p} target={2} onChange={(x) => set("p", x)} />
    </MathsCard>
  );
}
