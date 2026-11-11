import { parse, createTransientSim } from "@spice-ts/core";

export type Signal = {
  id: string;
  quantity: "voltage" | "current";
  source: string;
  /** Voltage is source minus reference; omitted reference means ground. */
  reference?: string;
  scale?: number;
};
export type TransientRequest = {
  netlist: string;
  signals: readonly Signal[];
  /** Optional known initial state, supplied by the demo, not inferred by the runner. */
  initial?: { time: number; values: Record<string, number> };
};

/** Run a netlist's .tran analysis and extract caller-selected nodes/branches. */
export async function simulateTransient({
  netlist,
  signals,
  initial,
}: TransientRequest) {
  if (
    !signals.length ||
    new Set(signals.map((s) => s.id)).size !== signals.length
  )
    throw new Error("Simulation requires unique signal IDs");
  if (signals.some((s) => !Number.isFinite(s.scale ?? 1)))
    throw new Error("Signal scales must be finite");
  if (
    initial &&
    (!Number.isFinite(initial.time) ||
      signals.some((s) => !Number.isFinite(initial.values[s.id])))
  )
    throw new Error(
      "Initial state must provide finite values for every signal",
    );
  const circuit = parse(netlist),
    sim = await createTransientSim(circuit);
  const time: number[] = initial ? [initial.time] : [];
  const series = Object.fromEntries(
    signals.map((s) => [s.id, initial ? [initial.values[s.id]] : []]),
  ) as Record<string, number[]>;
  try {
    while (!sim.isDone) {
      const point = sim.advance();
      time.push(point.time);
      for (const signal of signals) {
        let raw = (
          signal.quantity === "voltage" ? point.voltages : point.currents
        ).get(signal.source);
        if (raw === undefined || !Number.isFinite(raw))
          throw new Error(
            `Missing or invalid ${signal.quantity} signal: ${signal.source}`,
          );
        if (signal.reference !== undefined) {
          if (signal.quantity !== "voltage")
            throw new Error("Only voltage signals can have a reference node");
          const reference =
            signal.reference === "0" ? 0 : point.voltages.get(signal.reference);
          if (reference === undefined || !Number.isFinite(reference))
            throw new Error(`Missing reference node: ${signal.reference}`);
          raw -= reference;
        }
        series[signal.id].push(raw * (signal.scale ?? 1));
      }
    }
  } finally {
    sim.dispose();
  }
  return { time, series, circuit: circuit.toIR() };
}
