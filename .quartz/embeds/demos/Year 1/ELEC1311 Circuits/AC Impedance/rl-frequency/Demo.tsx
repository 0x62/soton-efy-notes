import { CircuitCard } from "~/toolkit/CircuitCard";
import { MathsPlot, graph, point, type Scene } from "~/toolkit/MathsPlot";
import { Latex, latexNumber as n } from "~/toolkit/Latex";
import { simulate as runRL, type Result } from "../voltage-division/rl";
import { RLResult } from "../voltage-division/RLResult";
import { schematic } from "../voltage-division/schematic";
import { rlGain, rlPhase, degrees } from "../models";
const R = 60,
  L = 100 / (2 * Math.PI * 50),
  fc = R / (2 * Math.PI * L);
const schema = {
  ratio: {
    default: 1,
    min: 0.1,
    max: 5,
    step: 0.1,
    label: "Frequency / cutoff",
    unit: "",
  },
};
type V = { ratio: number };
const values = (v: V) => ({
  resistance: R,
  inductance: L,
  frequency: v.ratio * fc,
});
const simulate = (v: V, signal: AbortSignal) => runRL(values(v), signal);
const scene: Scene<V> = (b, v, c) => {
  graph(b, rlGain, c.blue, 0, 5);
  point(
    b,
    () => 1,
    () => Math.SQRT1_2,
    c.amber,
    c.fill,
    "cutoff",
  );
  point(
    b,
    () => v().ratio,
    () => rlGain(v().ratio),
    c.green,
    c.fill,
  );
};
export function Demo() {
  return (
    <CircuitCard<typeof schema, Result>
      schema={schema}
      simulate={simulate}
      schematicLayout={schematic}
      renderResult={(result, v, theme) => (
        <>
          <p className="text-sm">Gain |H| against frequency / cutoff</p>
          <MathsPlot
            values={v}
            theme={theme}
            scene={scene}
            bounds={[-0.2, 1.15, 5.2, -0.12]}
            label="RL high-pass gain rising towards one, with the cutoff at gain one over square root two and the selected frequency."
          />
          <div className="space-y-2 text-sm">
            <p>
              <Latex
                latex={String.raw`f_c=\frac{R}{2\pi L}=30\,\mathrm{Hz},\quad f=${n(values(v).frequency)}\,\mathrm{Hz}`}
              />
            </p>
            <p>
              <Latex
                latex={String.raw`|H|=\frac{f/f_c}{\sqrt{1+(f/f_c)^2}}\approx ${n(rlGain(v.ratio), 5)}`}
              />
            </p>
            <p>
              <Latex
                latex={String.raw`\arg H\approx ${n(degrees(rlPhase(v.ratio)), 5)}^\circ,\quad V_{L,m}\approx ${n(20 * rlGain(v.ratio), 5)}\,\mathrm V`}
              />
            </p>
          </div>
          <RLResult result={result} v={values(v)} theme={theme} />
        </>
      )}
    />
  );
}
