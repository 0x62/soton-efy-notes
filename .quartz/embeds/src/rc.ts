import { parse, createTransientSim } from "@spice-ts/core";
import type { Values } from "./params";
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
  const text = netlist(values),
    circuit = parse(text),
    sim = await createTransientSim(circuit);
  const time = [0],
    voltage = [0],
    current = [values.voltage / values.resistance];
  try {
    while (!sim.isDone) {
      const point = sim.advance();
      time.push(point.time);
      voltage.push(point.voltages.get("out")!);
      // Source-current convention is opposite the capacitor's charging direction.
      current.push(-point.currents.get("V1")!);
    }
  } finally {
    sim.dispose();
  }
  return { time, voltage, current, circuit: circuit.toIR() };
}
export type Result = Awaited<ReturnType<typeof calculate>>;
