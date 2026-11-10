import { useEffect, useState } from "react";
import { CircuitSchematic } from "./CircuitSchematic";
import { ResponseChart } from "./ResponseChart";
import { DARK_THEME, LIGHT_THEME } from "@spice-ts/ui";
import { readParams, writeParams, keys, schema } from "./params";
import type { Result } from "./rc";
import { useTheme } from "./runtime";
import { Button, Card, Parameter } from "./ui";
import { chartPalette } from "./palette";
export function CircuitCard({
  title,
  description,
}: { title?: string; description?: string } = {}) {
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
      {(title || description) && (
        <header>
          {title && <h1 className="text-xl font-semibold">{title}</h1>}
          {description && <p className="text-sm mt-2">{description}</p>}
        </header>
      )}
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
      <p role="status" className="sr-only">
        {busy
          ? "Simulating"
          : error
            ? "Simulation unavailable"
            : "Simulation complete"}
      </p>
      {error && <p role="alert">{error}</p>}
      {result && !error && (
        <div aria-busy={busy} className="space-y-5">
          <CircuitSchematic circuit={result.circuit} theme={plotTheme} />
          <ResponseChart result={result} theme={theme} />
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
        </div>
      )}
    </Card>
  );
}
