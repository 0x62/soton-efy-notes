import { schematic } from "./schematic";
import { Latex, latexNumber } from "~/toolkit/Latex";
import {
  AccessibleDataTable,
  nearestSampleIndices,
} from "~/toolkit/AccessibleDataTable";
import { CircuitCard } from "~/toolkit/CircuitCard";
import { ResponseChart } from "~/toolkit/ResponseChart";
import { schema } from "./rc-params";
import { simulate, type Result } from "./rc";
import { formatCurrent, formatVoltage, formatTime } from "~/toolkit/format";
import { chartPalette } from "~/toolkit/palette";
export function RCTransientCircuit(
  props: { title?: string; description?: string } = {},
) {
  return (
    <CircuitCard<typeof schema, Result>
      {...props}
      schematicLayout={schematic}
      schema={schema}
      simulate={simulate}
      summary={(values) => (
        <p>
          <Latex
            latex={String.raw`\tau=RC=${latexNumber(values.resistance * values.capacitance)}\,\mathrm{s}`}
          />
        </p>
      )}
      renderResult={(result, values, theme) => {
        const tau = values.resistance * values.capacitance;
        return (
          <>
            <ResponseChart
              label="RC transient readings at time"
              x={{ values: result.time, label: "Time", format: formatTime }}
              axes={[
                {
                  id: "volts",
                  label: "V",
                  side: "left",
                  format: formatVoltage,
                },
                {
                  id: "amps",
                  label: "A",
                  side: "right",
                  format: formatCurrent,
                },
              ]}
              series={[
                {
                  id: "voltage",
                  label: "Voltage (V)",
                  axis: "volts",
                  values: result.series.voltage,
                  color: chartPalette[theme].voltage,
                },
                {
                  id: "current",
                  label: "Current (A)",
                  axis: "amps",
                  values: result.series.current,
                  color: chartPalette[theme].current,
                },
              ]}
            />
            <AccessibleDataTable
              caption="SPICE samples nearest each time constant"
              indices={nearestSampleIndices(
                result.time,
                [0, 1, 2, 3, 4, 5].map((n) => n * tau),
              )}
              columns={[
                { label: "Time (s)", values: result.time },
                { label: "Voltage (V)", values: result.series.voltage },
                { label: "Current (A)", values: result.series.current },
              ]}
            />
          </>
        );
      }}
    />
  );
}
