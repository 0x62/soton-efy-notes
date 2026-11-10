import { simulateTransient } from "./simulation";
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
export async function calculate(values: Values) {
  const result = await simulateTransient({
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
  });
  return {
    time: result.time,
    voltage: result.series.voltage,
    current: result.series.current,
    circuit: result.circuit,
  };
}

export type Result = Awaited<ReturnType<typeof calculate>>;
