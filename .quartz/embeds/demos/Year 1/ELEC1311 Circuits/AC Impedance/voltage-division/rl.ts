import { runTransientWorker } from "~/toolkit/worker-client";
import type { simulateTransient } from "~/toolkit/simulation";
export const schema = {
  peak: {
    default: 20,
    min: 1,
    max: 100,
    step: 1,
    label: "Source peak voltage",
    unit: "V",
  },
  resistance: {
    default: 60,
    min: 10,
    max: 200,
    step: 1,
    label: "Resistance",
    unit: "Ω",
  },
  inductance: {
    default: 0.31831,
    min: 0.01,
    max: 1,
    step: 0.001,
    label: "Inductance",
    unit: "H",
  },
  frequency: {
    default: 50,
    min: 10,
    max: 500,
    step: 1,
    label: "Frequency",
    unit: "Hz",
  },
} as const;
export type Values = Record<keyof typeof schema, number>;
export function phasors(v: Values) {
  const reactance = 2 * Math.PI * v.frequency * v.inductance;
  const lag = Math.atan2(reactance, v.resistance);
  const currentPeak = v.peak / Math.hypot(v.resistance, reactance);
  const resistorPhase = -Math.PI / 12 - lag;
  return {
    reactance,
    currentPeak,
    resistorPhase,
    inductorPhase: resistorPhase + Math.PI / 2,
    resistorPeak: currentPeak * v.resistance,
    inductorPeak: currentPeak * reactance,
  };
}
export function request(v: Values) {
  const p = phasors(v),
    step = 1 / (v.frequency * 400);
  // SIN phase 75 degrees is COS phase -15 degrees. Initialise the inductor
  // to the periodic solution so this lesson plots phasors, not switch-on decay.
  const i0 = p.currentPeak * Math.cos(p.resistorPhase);
  return {
    netlist: `Series RL voltage divider
V1 in 0 SIN(0 ${v.peak} ${v.frequency} 0 0 75)
R1 in out ${v.resistance}
L1 out 0 ${v.inductance} IC=${i0}
.tran ${step} ${2 / v.frequency} 0 ${step} UIC
.end`,
    signals: [
      {
        id: "resistor",
        quantity: "voltage" as const,
        source: "in",
        reference: "out",
      },
      { id: "inductor", quantity: "voltage" as const, source: "out" },
    ],
    initial: {
      time: 0,
      values: {
        resistor: p.resistorPeak * Math.cos(p.resistorPhase),
        inductor: p.inductorPeak * Math.cos(p.inductorPhase),
      },
    },
  };
}
export type Result = Awaited<ReturnType<typeof simulateTransient>>;
export const simulate = (v: Values, signal: AbortSignal) =>
  runTransientWorker(request(v), signal);
