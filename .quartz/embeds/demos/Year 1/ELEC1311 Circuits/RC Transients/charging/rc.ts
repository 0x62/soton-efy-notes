import { runTransientWorker } from "~/toolkit/worker-client";
import type { simulateTransient } from "~/toolkit/simulation";
import type { Values } from "./rc-params";
export function netlist(v: Values) {
  const tau = v.resistance * v.capacitance;
  return `RC charging
V1 in 0 DC ${v.voltage}
R1 in out ${v.resistance}
C1 out 0 ${v.capacitance} IC=0
.tran ${tau / 200} ${5 * tau} 0 ${tau / 200} UIC
.end`;
}
export function request(values: Values) {
  return {
    netlist: netlist(values),
    signals: [
      { id: "voltage", quantity: "voltage", source: "out" },
      // SPICE source current is opposite the capacitor charging direction.
      { id: "current", quantity: "current", source: "V1", scale: -1 },
    ],
    initial: {
      time: 0,
      values: { voltage: 0, current: values.voltage / values.resistance },
    },
  } as const;
}

export type Result = Awaited<ReturnType<typeof simulateTransient>>;

export const simulate = (values: Values, signal: AbortSignal) =>
  runTransientWorker(request(values), signal);
