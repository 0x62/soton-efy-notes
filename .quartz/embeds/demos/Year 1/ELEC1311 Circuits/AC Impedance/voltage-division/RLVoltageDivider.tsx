import { CircuitCard } from "~/toolkit/CircuitCard";
import { ResponseChart } from "~/toolkit/ResponseChart";
import {
  AccessibleDataTable,
  nearestSampleIndices,
} from "~/toolkit/AccessibleDataTable";
import { formatTime, formatVoltage, formatNumber } from "~/toolkit/format";
import { chartPalette } from "~/toolkit/palette";
import { schema, simulate, phasors, type Result } from "./rl";
import { schematic } from "./schematic";
export function RLVoltageDivider() {
  return (
    <CircuitCard<typeof schema, Result>
      schema={schema}
      schematicLayout={schematic}
      simulate={simulate}
      summary={(v) => (
        <p className="text-sm">
          Xₗ = {formatNumber(phasors(v).reactance)} Ω · Vₗ leads Vᵣ by 90°
        </p>
      )}
      renderResult={(result, v, theme) => (
        <>
          <ResponseChart
            label="RL voltage readings at time"
            x={{ values: result.time, label: "Time", format: formatTime }}
            axes={[
              {
                id: "voltage",
                label: "V",
                side: "left",
                format: formatVoltage,
              },
            ]}
            series={[
              {
                id: "resistor",
                label: "Vᵣ (V)",
                axis: "voltage",
                values: result.series.resistor,
                color: chartPalette[theme].voltage,
              },
              {
                id: "inductor",
                label: "Vₗ (V)",
                axis: "voltage",
                values: result.series.inductor,
                color: chartPalette[theme].current,
              },
            ]}
          />
          <AccessibleDataTable
            caption="Steady-state RL voltage samples"
            indices={nearestSampleIndices(
              result.time,
              Array.from({ length: 9 }, (_, n) => n / (4 * v.frequency)),
            )}
            columns={[
              { label: "Time (s)", values: result.time },
              {
                label: "Voltage across R, input to junction (V)",
                values: result.series.resistor,
              },
              {
                label: "Voltage across L, junction to ground (V)",
                values: result.series.inductor,
              },
            ]}
          />
        </>
      )}
    />
  );
}
