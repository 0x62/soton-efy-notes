import { useSimulation } from "./useSimulation";
import type { Simulation } from "./worker-client";
import { useEffect, useState, type ReactNode } from "react";
import { CircuitSchematic } from "./CircuitSchematic";
import { DARK_THEME, LIGHT_THEME, type SchematicLayout } from "@spice-ts/ui";
import { readNumericParams, writeParams, type NumericRule } from "./params";
import type { ComponentProps } from "react";
import { useTheme } from "./runtime";
import { Button, Card, Parameter } from "./ui";
import { chartPalette } from "./palette";
export type CircuitCardProps<
  S extends Record<string, NumericRule>,
  R extends { circuit: ComponentProps<typeof CircuitSchematic>["circuit"] },
> = {
  schematicLayout?: (result: R) => SchematicLayout;
  title?: string;
  description?: string;
  schema: S;
  simulate: Simulation<Record<keyof S, number>, R>;
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
  schematicLayout,
  description,
  schema,
  simulate,
  renderResult,
  summary,
  debounceMs = 200,
  timeoutMs = 10000,
}: CircuitCardProps<S, R>) {
  const readParams = (query: string) => readNumericParams(schema, query);
  const keys = Object.keys(schema) as (keyof S & string)[];
  const theme = useTheme(),
    [values, setValues] = useState(() => readParams(location.search)),
    [resetVersion, setResetVersion] = useState(0);
  const { result, resultInput, error, busy } = useSimulation(
    simulate,
    values,
    debounceMs,
    timeoutMs,
  );
  useEffect(() => {
    history.replaceState(null, "", "?" + writeParams(values, location.search));
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
          <CircuitSchematic
            circuit={result.circuit}
            theme={plotTheme}
            layout={schematicLayout?.(result)}
          />
          {renderResult(result, resultInput ?? values, theme)}
        </div>
      )}
    </Card>
  );
}
