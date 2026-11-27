import type { TransientRequest, simulateTransient } from "./simulation";
export type Simulation<I, O> = (input: I, signal: AbortSignal) => Promise<O>;
/** Shared worker transport: one worker per job, cancellation and cleanup on every exit. */
export function runWorker<I, O>(
  createWorker: () => Worker,
  input: I,
  signal: AbortSignal,
): Promise<O> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(new Error("Simulation cancelled"));
      return;
    }
    let worker: Worker | undefined;
    const cleanup = () => {
      worker?.terminate();
      signal.removeEventListener("abort", abort);
    };
    const abort = () => {
      cleanup();
      reject(new Error("Simulation cancelled"));
    };
    try {
      worker = createWorker();
      signal.addEventListener("abort", abort, { once: true });
      worker.onmessage = (e) => {
        cleanup();
        e.data.error ? reject(new Error(e.data.error)) : resolve(e.data.result);
      };
      worker.onerror = () => {
        cleanup();
        reject(new Error("Unable to run simulation. Try reloading this card."));
      };
      worker.postMessage(input);
    } catch (error) {
      cleanup();
      reject(error);
    }
  });
}
const createTransientWorker = () =>
  new Worker(new URL("./worker.ts", import.meta.url), { type: "module" });
export const runTransientWorker: Simulation<
  TransientRequest,
  Awaited<ReturnType<typeof simulateTransient>>
> = (request, signal) => runWorker(createTransientWorker, request, signal);
