import { useEffect, useState } from "react";
import { SchematicView, TransientPlot } from "@spice-ts/ui/react";
import { DARK_THEME, LIGHT_THEME } from "@spice-ts/ui";
import { readParams, writeParams, keys, schema } from "./params";
import type { Result } from "./rc";
import { useTheme } from "./runtime";
import { Button, Card, Parameter } from "./ui";
import { chartPalette } from "./palette";
export function CircuitCard() {
  const theme = useTheme(),
    [values, setValues] = useState(() => readParams(location.search)),
    [resetVersion, setResetVersion] = useState(0),
    [result, setResult] = useState<Result>(),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(true);
  useEffect(() => {
    setBusy(true);
    setError("");
    history.replaceState(null, "", "?" + writeParams(values, location.search));
    let worker: Worker | undefined, timeout: ReturnType<typeof setTimeout>;
    const timer = setTimeout(() => {
      worker = new Worker(new URL("./worker.ts", import.meta.url), {
        type: "module",
      });
      timeout = setTimeout(() => {
        worker?.terminate();
        setError("Simulation timed out. Try resetting the values.");
        setBusy(false);
      }, 10000);
      worker.onmessage = (e) => {
        clearTimeout(timeout);
        setResult(e.data.result);
        setError(e.data.error || "");
        setBusy(false);
        worker?.terminate();
      };
      worker.onerror = () => {
        clearTimeout(timeout);
        setError("Unable to run simulation. Try reloading this card.");
        setBusy(false);
        worker?.terminate();
      };
      worker.postMessage(values);
    }, 200);
    return () => {
      clearTimeout(timer);
      clearTimeout(timeout);
      worker?.terminate();
    };
  }, [values]);
  const plotTheme = {
    ...(theme === "dark" ? DARK_THEME : LIGHT_THEME),
    background: chartPalette[theme].background,
    surface: theme === "dark" ? "#161618" : "#faf8f8",
    text: theme === "dark" ? "#ebebec" : "#2b2b2b",
    textMuted: theme === "dark" ? "#d4d4d4" : "#4e4e4e",
    grid: theme === "dark" ? "#393639" : "#e5e5e5",
    font: "system-ui, sans-serif",
  };
  const tau = values.resistance * values.capacitance;
  const format = (n: number) => Number(n.toPrecision(4)).toString();
  return (
    <Card>
      <header>
        <p className="text-xs uppercase tracking-widest text-[var(--secondary)]">
          Circuit lab · RC transients
        </p>
        <h1 className="text-xl font-semibold mt-1">Charging a capacitor</h1>
        <p className="text-sm mt-2">
          Change the components and explore the first five time constants. The
          capacitor starts uncharged.
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {keys.map((key) => (
          <Parameter
            key={key}
            name={key}
            rule={schema[key]}
            value={values[key]}
            resetVersion={resetVersion}
            onChange={(n) => setValues((v) => ({ ...v, [key]: n }))}
          />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p>
          τ = RC = <strong>{format(tau)} s</strong>
        </p>
        <Button
          onClick={() => {
            setValues(readParams(""));
            setResetVersion((version) => version + 1);
          }}
        >
          Reset example
        </Button>
      </div>
      <p role="status" className="text-sm">
        {busy
          ? "Simulating…"
          : error
            ? "Simulation unavailable"
            : "Simulation complete · hover to inspect, scroll to zoom, double-click to fit."}
      </p>
      {error && <p role="alert">{error}</p>}
      {result && !error && (
        <div aria-busy={busy} className="space-y-5">
          <figure
            aria-label={`Series circuit: ${values.voltage} V source, ${values.resistance} ohm resistor, ${values.capacitance} farad capacitor to ground.`}
          >
            <div inert>
              <SchematicView
                circuit={result.circuit}
                theme={plotTheme}
                height={220}
              />
            </div>
            <figcaption className="text-xs text-center">
              V1 = {values.voltage} V · R1 = {values.resistance} Ω · C1 ={" "}
              {values.capacitance} F. Positive charging current flows from the
              source through R1 into C1.
            </figcaption>
          </figure>
          <Plot
            title="Capacitor voltage (V)"
            name="V(out)"
            time={result.time}
            samples={result.voltage}
            theme={plotTheme}
            traceColor={chartPalette[theme].trace}
          />
          <Plot
            title="Charging current (A)"
            name="I(C1)"
            time={result.time}
            samples={result.current}
            theme={plotTheme}
            traceColor={chartPalette[theme].trace}
          />
          <details>
            <summary className="cursor-pointer">
              Numeric readings (accessible chart alternative)
            </summary>
            <div className="overflow-x-auto">
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
          </details>
        </div>
      )}
    </Card>
  );
}
function Plot({
  title,
  name,
  time,
  samples,
  theme,
  traceColor,
}: {
  title: string;
  name: string;
  time: number[];
  samples: number[];
  theme: typeof LIGHT_THEME;
  traceColor: string;
}) {
  const [cursor, setCursor] = useState<{
    x: number;
    values: { value: number }[];
  } | null>(null);
  return (
    <figure aria-label={title + " versus time in seconds"}>
      <figcaption className="font-medium">{title}</figcaption>
      <TransientPlot
        data={[{ time, signals: new Map([[name, samples]]), label: "" }]}
        signals={[name]}
        colors={{ [name]: traceColor }}
        theme={theme}
        height={230}
        onCursorMove={setCursor}
      />
      <p className="text-xs text-center min-h-4">
        {cursor
          ? `${cursor.x.toPrecision(4)} s · ${cursor.values[0]?.value.toPrecision(4)} ${name.startsWith("I(") ? "A" : "V"}`
          : "Time (s) · hover for readings"}
      </p>
    </figure>
  );
}
