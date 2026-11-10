import { CircuitCard } from "./CircuitCard";
import { ResponseChart } from "./ResponseChart";
import { schema } from "./rc-params";
import type { Result } from "./rc";
import { formatCurrent, formatVoltage, formatTime } from "@spice-ts/ui";
import { chartPalette } from "./palette";
const createWorker = () =>
  new Worker(new URL("./worker.ts", import.meta.url), { type: "module" });
const format = (n: number) => Number(n.toPrecision(4)).toString();
export function RCTransientCircuit(
  props: { title?: string; description?: string } = {},
) {
  return (
    <CircuitCard<typeof schema, Result>
      {...props}
      schema={schema}
      createWorker={createWorker}
      summary={(values) => (
        <p>
          τ = RC ={" "}
          <strong>{format(values.resistance * values.capacitance)} s</strong>
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
                  values: result.voltage,
                  color: chartPalette[theme].voltage,
                },
                {
                  id: "current",
                  label: "Current (A)",
                  axis: "amps",
                  values: result.current,
                  color: chartPalette[theme].current,
                },
              ]}
            />
            <div className="sr-only">
              <table className="w-full text-sm">
                <caption>SPICE samples nearest each time constant</caption>
                <thead>
                  <tr>
                    <th>Time (s)</th>
                    <th>Voltage (V)</th>
                    <th>Current (A)</th>
                  </tr>
                </thead>
                <tbody>
                  {[0, 1, 2, 3, 4, 5].map((n) => {
                    const i = result.time.reduce(
                      (best, t, j) =>
                        Math.abs(t - n * tau) <
                        Math.abs(result.time[best] - n * tau)
                          ? j
                          : best,
                      0,
                    );
                    return (
                      <tr key={n}>
                        <td>{format(result.time[i])}</td>
                        <td>{format(result.voltage[i])}</td>
                        <td>{format(result.current[i])}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        );
      }}
    />
  );
}
