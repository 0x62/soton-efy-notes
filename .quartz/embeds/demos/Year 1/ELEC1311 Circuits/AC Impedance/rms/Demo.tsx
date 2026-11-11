import {
  MathsCard,
  useMathsModel,
  Choices,
  Reading,
} from "~/toolkit/MathsCard";
import { MathsPlot, graph, type Scene, Legend } from "~/toolkit/MathsPlot";
import { Latex, latexNumber as n } from "~/toolkit/Latex";
import { rms } from "../models";
const schema = {
  square: { default: 0, min: 0, max: 1, step: 1, label: "Waveform", unit: "" },
};
type V = { square: number };
const voltage = (x: number, v: V) =>
  v.square
    ? x < 0.25 || x >= 0.75
      ? 20
      : -20
    : 20 * Math.cos(2 * Math.PI * x);
const scene: Scene<V> = (b, v, c) => {
  const sinusoid = graph(b, (x) => voltage(x, v()), c.blue, 0, 1);
  sinusoid.setAttribute({ visible: () => !v().square });
  // Explicit ideal steps avoid adaptive interpolation across a discontinuity.
  b.create("curve", [[0, 0.25, 0.25, 0.75, 0.75, 1], [20, 20, -20, -20, 20, 20]], {
    strokeColor: c.blue, strokeWidth: 2.5, highlight: false, fixed: true,
    visible: () => !!v().square,
  });
  // The square-wave RMS equals its positive peak: dashes keep both traces visible.
  graph(b, () => rms(20, !!v().square), c.amber, 0, 1, true);
};
const power: Scene<V> = (b, v, c) => {
  graph(b, (x) => voltage(x, v()) ** 2 / 20, c.green, 0, 1);
  graph(b, () => rms(20, !!v().square) ** 2 / 20, c.amber, 0, 1, true);
};
export function Demo() {
  const { values, set, theme } = useMathsModel(schema);
  const effective = rms(20, !!values.square);
  return (
    <MathsCard>
      <Choices
        label="Waveform"
        value={values.square}
        options={["Sinusoid", "Square wave"]}
        onChange={(x) => set("square", x)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm">Voltage (V) against time t/T</p>
          <MathsPlot
            values={values}
            theme={theme}
            scene={scene}
            bounds={[-0.04, 25, 1.04, -25]}
            label="One period of a 20 volt peak waveform; the amber line is its RMS voltage."
          />
          <Legend
            theme={theme}
            items={[
              ["Voltage", "blue"],
              ["RMS voltage", "amber", true],
            ]}
          />
        </div>
        <div>
          <p className="text-sm">Power (W) in 20 Ω against time t/T</p>
          <MathsPlot
            values={values}
            theme={theme}
            scene={power}
            bounds={[-0.04, 23, 1.04, -2]}
            label="Instantaneous resistor power and its average over one complete period."
          />
          <Legend
            theme={theme}
            items={[
              ["Power", "green"],
              ["Average power", "amber", true],
            ]}
          />
        </div>
      </div>
      <Reading>
        <p>
          <Latex
            latex={String.raw`V_m=20\,\mathrm V,\quad V_{\mathrm{rms}}${values.square ? "=" : String.raw`\approx`}${n(effective)}\,\mathrm V`}
          />
        </p>
        <p>
          <Latex
            latex={String.raw`P_{\mathrm{avg}}=\frac{V_{\mathrm{rms}}^2}{20\,\Omega}=${values.square ? 20 : 10}\,\mathrm W`}
          />
        </p>
        <p>
          Both waveforms have zero mean voltage. The square wave spends the
          whole period at its peak magnitude.
        </p>
      </Reading>
    </MathsCard>
  );
}
