import { runTransientWorker } from "~/toolkit/worker-client";
import type { simulateTransient } from "~/toolkit/simulation";
import { rlc } from "../models";
export const schema = {
  omega: {
    default: 1000,
    min: 300,
    max: 1800,
    step: 10,
    label: "Angular frequency",
    unit: "rad/s",
  },
};
export function request(v: { omega: number }) {
  const p = rlc(v.omega),
    f = v.omega / (2 * Math.PI),
    step = 1 / (f * 800);
  const i0 = p.currentPeak * Math.cos(p.currentPhase);
  const vc0 = p.currentPeak * p.xc * Math.cos(p.currentPhase - Math.PI / 2);
  return {
    netlist: `Worked series RLC
V1 in 0 SIN(0 12 ${f} 0 0 105)
R1 in a 30
L1 a out 0.065 IC=${i0}
C1 out 0 0.00004 IC=${vc0}
.tran ${step} ${2 / f} 0 ${step} UIC
.end`,
    signals: [
      { id: "source", quantity: "voltage" as const, source: "in" },
      {
        id: "current",
        quantity: "voltage" as const,
        source: "in",
        reference: "a",
        scale: 1 / 30,
      },
    ],
    initial: {
      time: 0,
      values: { source: 12 * Math.cos(Math.PI / 12), current: i0 },
    },
  };
}
export type Result = Awaited<ReturnType<typeof simulateTransient>>;
export const simulate = (v: { omega: number }, signal: AbortSignal) =>
  runTransientWorker(request(v), signal);
