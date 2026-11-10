import { readNumericParams } from "~/toolkit/params";
export const schema = {
  voltage: {
    default: 10,
    min: 0.1,
    max: 100,
    step: 0.1,
    label: "Source voltage",
    unit: "V",
  },
  resistance: {
    default: 10,
    min: 0.1,
    max: 1000,
    step: 0.1,
    label: "Resistance",
    unit: "Ω",
  },
  capacitance: {
    default: 0.2,
    min: 0.001,
    max: 2,
    step: 0.001,
    label: "Capacitance",
    unit: "F",
  },
} as const;
export type Values = Record<keyof typeof schema, number>;
export const keys = Object.keys(schema) as (keyof Values)[];

export function readParams(query: string): Values {
  return readNumericParams(schema, query);
}
