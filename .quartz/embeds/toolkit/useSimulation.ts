import { useEffect, useState } from "react";
import type { Simulation } from "./worker-client";
/** UI lifecycle is independent of the solver, worker transport and circuit type. */
export function useSimulation<I, O>(
  simulate: Simulation<I, O>,
  input: I,
  debounceMs = 200,
  timeoutMs = 10000,
) {
  const [result, setResult] = useState<O>(),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    let active = true,
      timeout: ReturnType<typeof setTimeout>;
    setBusy(true);
    setError("");
    const timer = setTimeout(() => {
      timeout = setTimeout(() => {
        active = false;
        controller.abort();
        setError("Simulation timed out. Try resetting the values.");
        setBusy(false);
      }, timeoutMs);
      Promise.resolve()
        .then(() => simulate(input, controller.signal))
        .then(
          (value) => {
            if (active) {
              setResult(value);
              setBusy(false);
            }
          },
          (err) => {
            if (active) {
              setError(
                err instanceof Error ? err.message : "Simulation failed",
              );
              setBusy(false);
            }
          },
        )
        .finally(() => clearTimeout(timeout));
    }, debounceMs);
    return () => {
      active = false;
      clearTimeout(timer);
      clearTimeout(timeout);
      controller.abort();
    };
  }, [simulate, input, debounceMs, timeoutMs]);
  return { result, error, busy };
}
