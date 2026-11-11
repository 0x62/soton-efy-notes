import { PhasorTriangle } from "~/toolkit/PhasorTriangle";
import { CircuitCard } from "~/toolkit/CircuitCard";
import { ResponseChart } from "~/toolkit/ResponseChart";
import {
  AccessibleDataTable,
  nearestSampleIndices,
} from "~/toolkit/AccessibleDataTable";
import { formatTime, formatVoltage, formatCurrent } from "~/toolkit/format";
import { chartPalette } from "~/toolkit/palette";
import { Latex, latexNumber as n } from "~/toolkit/Latex";
import { rlc, degrees } from "../models";
import { schema, simulate, type Result } from "./rlc";
import { schematic } from "./schematic";
export function Demo() {
  return (
    <CircuitCard<typeof schema, Result>
      schema={schema}
      simulate={simulate}
      schematicLayout={schematic}
      renderResult={(result, v, theme) => {
        const p = rlc(v.omega);
        return (
          <>
            <PhasorTriangle
              real={p.currentPeak * p.R}
              imaginary={p.currentPeak * p.x}
              realLabel="Vᵣ"
              imaginaryLabel="Vₗ − V꜀"
              theme={theme}
            />
            <div className="space-y-2 text-sm">
              <p>
                <Latex
                  latex={String.raw`X_L=${n(p.xl, 5)}\,\Omega,\quad X_C\approx ${n(p.xc, 5)}\,\Omega`}
                />
              </p>
              <p>
                <Latex
                  latex={String.raw`Z=30${p.x < 0 ? "-" : "+"}j${n(Math.abs(p.x), 5)}\,\Omega`}
                />
              </p>
              <p>
                <Latex
                  latex={String.raw`Z\approx ${n(p.magnitude, 5)}\angle(${n(degrees(p.angle), 5)}^\circ)\,\Omega`}
                />
              </p>
              <p>
                <Latex
                  latex={String.raw`\underline I\approx ${n(p.currentPeak, 5)}\angle(${n(degrees(p.currentPhase), 5)}^\circ)\,\mathrm A`}
                />{" "}
                (peak)
              </p>
              <p>
                <Latex
                  latex={String.raw`i(t)\approx ${n(p.currentPeak, 5)}\cos(${n(v.omega)}t${p.currentPhase < 0 ? "-" : "+"}${n(Math.abs(p.currentPhase), 5)})\,\mathrm A`}
                />{" "}
                (radians)
              </p>
              <p>
                {Math.abs(p.angle) < 0.001
                  ? "Voltage and current are in phase."
                  : p.angle > 0
                    ? "Current lags the source; the net reactance is inductive."
                    : "Current leads the source; the net reactance is capacitive."}
              </p>
            </div>
            <ResponseChart
              label="Series RLC source voltage and current"
              x={{ values: result.time, label: "Time", format: formatTime }}
              axes={[
                { id: "v", label: "V", side: "left", format: formatVoltage },
                { id: "i", label: "A", side: "right", format: formatCurrent },
              ]}
              series={[
                {
                  id: "source",
                  label: "Source voltage (V)",
                  axis: "v",
                  values: result.series.source,
                  color: chartPalette[theme].voltage,
                },
                {
                  id: "current",
                  label: "Current (A)",
                  axis: "i",
                  values: result.series.current,
                  color: chartPalette[theme].current,
                },
              ]}
            />
            <AccessibleDataTable
              caption="Series RLC steady-state samples"
              indices={nearestSampleIndices(
                result.time,
                Array.from(
                  { length: 9 },
                  (_, i) => (i * Math.PI) / (2 * v.omega),
                ),
              )}
              columns={[
                { label: "Time (s)", values: result.time },
                { label: "Source voltage (V)", values: result.series.source },
                { label: "Current (A)", values: result.series.current },
              ]}
            />
          </>
        );
      }}
    />
  );
}
