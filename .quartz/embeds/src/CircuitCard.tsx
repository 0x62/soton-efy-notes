import { useEffect, useState, type ReactNode } from "react";
import { CircuitSchematic } from "./CircuitSchematic";
import { DARK_THEME, LIGHT_THEME } from "@spice-ts/ui";
import { readNumericParams, writeParams, type NumericRule } from "./params";
import type { ComponentProps } from "react";
import { useTheme } from "./runtime";
import { Button, Card, Parameter } from "./ui";
import { chartPalette } from "./palette";
export type CircuitCardProps<
  S extends Record<string, NumericRule>,
  R extends { circuit: ComponentProps<typeof CircuitSchematic>["circuit"] },
> = {
  title?: string;
  description?: string;
  schema: S;
  createWorker: () => Worker;
  renderResult: (
    result: R,
    values: Record<keyof S, number>,
    theme: "light" | "dark",
  ) => ReactNode;
  summary?: (values: Record<keyof S, number>) => ReactNode;
  debounceMs?: number;
  timeoutMs?: number;
};
export function CircuitCard<
  S extends Record<string, NumericRule>,
  R extends { circuit: ComponentProps<typeof CircuitSchematic>["circuit"] },
>({
  title,
  description,
  schema,
  createWorker,
  renderResult,
  summary,
  debounceMs = 200,
  timeoutMs = 10000,
}: CircuitCardProps<S, R>) {
  const readParams = (query: string) => readNumericParams(schema, query);
  const keys = Object.keys(schema) as (keyof S & string)[];
  const theme = useTheme(),
    [values, setValues] = useState(() => readParams(location.search)),
    [resetVersion, setResetVersion] = useState(0),
    [result, setResult] = useState<R>(),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(true);
  useEffect(() => {
    setBusy(true);
    setError("");
    history.replaceState(null, "", "?" + writeParams(values, location.search));
    let worker: Worker | undefined, timeout: ReturnType<typeof setTimeout>;
    const timer = setTimeout(() => {
      worker = createWorker();
      timeout = setTimeout(() => {
        worker?.terminate();
        setError("Simulation timed out. Try resetting the values.");
        setBusy(false);
      }, timeoutMs);
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
    }, debounceMs);
    return () => {
      clearTimeout(timer);
      clearTimeout(timeout);
      worker?.terminate();
    };
  }, [values, createWorker, debounceMs, timeoutMs]);
  const plotTheme = {
    ...(theme === "dark" ? DARK_THEME : LIGHT_THEME),
    background: chartPalette[theme].background,
    surface: theme === "dark" ? "#161618" : "#faf8f8",
    text: theme === "dark" ? "#ebebec" : "#2b2b2b",
    textMuted: theme === "dark" ? "#d4d4d4" : "#4e4e4e",
    grid: theme === "dark" ? "#393639" : "#e5e5e5",
    font: "system-ui, sans-serif",
  };
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
        {summary?.(values)}
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
          {renderResult(result, values, theme)}
        </div>
      )}
    </Card>
  );
}
