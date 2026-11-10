import { MathsCard, useMathsModel, Reading } from "~/toolkit/MathsCard";
import { HoleFormula, HolePlot } from "../HolePlot";
import { rule, distance, n } from "../models";
const schema = { step: rule("Approach step", 1, 1, 4, 1) };
export function Demo() {
  const { values, set, theme } = useMathsModel(schema),
    d = distance(values.step);
  return (
    <MathsCard>
      <HoleFormula />
      <HolePlot
        values={{ distance: d, point: 0, samples: true }}
        theme={theme}
      />
      <table className="w-full text-sm tabular-nums">
        <caption className="sr-only">
          Values of the original fraction near its missing point
        </caption>
        <thead>
          <tr>
            <th scope="col">Input x</th>
            <th scope="col">Output f(x)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{n(2 - d)}</th>
            <td>{n(4 - d)}</td>
          </tr>
          <tr className="font-semibold">
            <th scope="row">2 exactly</th>
            <td>0/0 — undefined</td>
          </tr>
          <tr>
            <th scope="row">{n(2 + d)}</th>
            <td>{n(4 + d)}</td>
          </tr>
        </tbody>
      </table>
      <Reading>
        <p>
          The nearby outputs approach <strong>4</strong>. The original fraction
          still has no value at x = 2.
        </p>
      </Reading>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          disabled={values.step === 4}
          onClick={() => set("step", values.step + 1)}
        >
          Move closer
        </button>
        {values.step > 1 && (
          <button type="button" onClick={() => set("step", 1)}>
            Start again
          </button>
        )}
      </div>
    </MathsCard>
  );
}
