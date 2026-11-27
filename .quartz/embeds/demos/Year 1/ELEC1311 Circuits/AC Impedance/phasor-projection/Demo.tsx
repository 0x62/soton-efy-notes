import {
  MathsCard,
  useMathsModel,
  MathsSlider,
  Reading,
} from "~/toolkit/MathsCard";
import {
  MathsPlot,
  graph,
  point,
  segment,
  type Scene,
} from "~/toolkit/MathsPlot";
import { Latex, latexNumber as n } from "~/toolkit/Latex";
import { projection, radians } from "../models";
const schema = {
  theta: {
    default: 0,
    min: 0,
    max: 360,
    step: 1,
    label: "Cycle angle ωt",
    unit: "°",
  },
};
type V = { theta: number };
const plane: Scene<V> = (b, v, c) => {
  b.create("circle", [[0, 0], 20], {
    strokeColor: c.grid,
    strokeWidth: 1,
    fillOpacity: 0,
    highlight: false,
    fixed: true,
  });
  segment(
    b,
    () => [0, 0],
    () => [20 * Math.cos(radians(-15)), 20 * Math.sin(radians(-15))],
    c.amber,
  );
  segment(
    b,
    () => [0, 0],
    () => [projection(v().theta), 20 * Math.sin(radians(v().theta - 15))],
    c.blue,
  );
  segment(
    b,
    () => [projection(v().theta), 20 * Math.sin(radians(v().theta - 15))],
    () => [projection(v().theta), 0],
    c.green,
    true,
  );
  point(
    b,
    () => projection(v().theta),
    () => 0,
    c.green,
    c.fill,
  );
};
const wave: Scene<V> = (b, v, c) => {
  graph(b, projection, c.blue, 0, 360);
  point(
    b,
    () => v().theta,
    () => projection(v().theta),
    c.green,
    c.fill,
  );
};
export function Demo() {
  const { values, set, theme } = useMathsModel(schema);
  return (
    <MathsCard>
      <MathsSlider
        label="Cycle angle ωt"
        value={values.theta}
        min={0}
        max={360}
        step={1}
        onChange={(x) => set("theta", x)}
        display={`${values.theta}°`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm">
            Complex plane: real and imaginary voltage (V)
          </p>
          <MathsPlot
            values={values}
            theme={theme}
            scene={plane}
            equalScale
            bounds={[-25, 25, 25, -25]}
            label="Fixed amber phasor at minus 15 degrees, rotating blue complex voltage and green real projection."
          />
        </div>
        <div>
          <p className="text-sm">Real voltage (V) against cycle angle ωt (°)</p>
          <MathsPlot
            values={values}
            theme={theme}
            scene={wave}
            bounds={[-10, 25, 370, -25]}
            label="The real projection traces a cosine of peak 20 volts and phase minus 15 degrees."
          />
        </div>
      </div>
      <Reading>
        <p>
          <Latex
            latex={String.raw`\underline V=20\angle(-15^\circ)\,\mathrm V`}
          />
        </p>
        <p>
          <Latex latex={String.raw`v(t)=\Re\{\underline V e^{j\omega t}\}`} />
        </p>
        <p>
          <Latex
            latex={String.raw`v(t)=20\cos(${values.theta}^\circ-15^\circ)\approx ${n(projection(values.theta))}\,\mathrm V`}
          />
        </p>
        <p>
          The amber phasor stays fixed. The blue vector includes the time
          factor.
        </p>
      </Reading>
    </MathsCard>
  );
}
