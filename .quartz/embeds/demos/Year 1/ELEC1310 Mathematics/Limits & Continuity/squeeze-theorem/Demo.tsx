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
  band,
  type Scene,
} from "~/toolkit/MathsPlot";
import { rule, distance, n } from "../models";
const schema = {
  mode: rule("Envelope", 0, 0, 1, 1),
  p: rule("Neighbourhood", 0.1, 0, 2),
};
type V = { p: number; mode: number };
const scene: Scene<V> = (b, v, c) => {
  band(
    b,
    () => -1.1,
    () => -(v().mode ? distance(v().p) ** 2 : 1),
    () => 1.1,
    () => (v().mode ? distance(v().p) ** 2 : 1),
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
  graph(b, (x) => (v().mode ? x * x : 1), c.amber, -1, 1);
  graph(b, (x) => (v().mode ? -x * x : -1), c.amber, -1, 1);
  // Sample uniformly in phase rather than letting graph sampling alias rapid oscillation.
  for (const side of [-1, 1]) {
    const xs = Array.from(
      { length: 1800 },
      (_, i) => side / (1 + (i * 99) / 1799),
    );
    b.create(
      "curve",
      [xs, (x: number) => (v().mode ? x * x : 1) * Math.sin(1 / x)],
      {
        strokeColor: c.blue,
        strokeWidth: 2,
        highlight: false,
        fixed: true,
      },
    );
  }
  point(
    b,
    () => 0,
    () => 0,
    c.blue,
    c.fill,
    "",
    true,
  ).setAttribute({ visible: () => v().mode === 1 });
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema),
    d = distance(v.p);
  return (
    <MathsCard>
      <Choices
        label="Oscillation envelope"
        value={v.mode}
        options={["sin(1/x)", "x² sin(1/x)"]}
        onChange={(x) => set("mode", x)}
      />
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
        label={
          v.mode
            ? "Shrinking envelope traps the oscillation between plus and minus x squared."
            : "Undamped sine reaches plus and minus one in every punctured neighbourhood of zero."
        }
      />
      <Legend
        theme={theme}
        items={[
          [v.mode ? "x² sin(1/x)" : "sin(1/x)", "blue"],
          [v.mode ? "Bounds ±x²" : "Bounds ±1", "amber"],
          [v.mode ? "Output bound ±δ²" : "Output bound stays ±1", "green"],
        ]}
      />
      <Reading>
        <p>
          {v.mode ? (
            <>
              0 &lt; |x| &lt; {n(d)} ⇒ |x² sin(1/x)| ≤ x² &lt;{" "}
              <strong>{n(d * d)}</strong>
            </>
          ) : (
            <>
              Inside 0 &lt; |x| &lt; {n(d)}, sine still reaches −1 and +1. Its
              range does not shrink.
            </>
          )}
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
