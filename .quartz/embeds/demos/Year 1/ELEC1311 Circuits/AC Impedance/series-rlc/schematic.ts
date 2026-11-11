import type { SchematicLayout } from "@spice-ts/ui";
import type { Result } from "./rlc";
export function schematic({
  circuit,
}: Pick<Result, "circuit">): SchematicLayout {
  const component = (name: string) => {
    const c = circuit.components.find((c) => c.name === name);
    if (!c) throw new Error(`Missing ${name}`);
    return c;
  };
  return {
    components: [
      {
        component: component("V1"),
        x: 20,
        y: 40,
        rotation: 0,
        pins: [
          { net: "in", x: 40, y: 40 },
          { net: "0", x: 40, y: 80 },
        ],
      },
      {
        component: component("R1"),
        x: 70,
        y: 30,
        rotation: 0,
        horizontal: true,
        pins: [
          { net: "in", x: 70, y: 40 },
          { net: "a", x: 110, y: 40 },
        ],
      },
      {
        component: component("L1"),
        x: 140,
        y: 30,
        rotation: 0,
        horizontal: true,
        pins: [
          { net: "a", x: 140, y: 40 },
          { net: "out", x: 200, y: 40 },
        ],
      },
      {
        component: component("C1"),
        x: 210,
        y: 40,
        rotation: 0,
        pins: [
          { net: "out", x: 230, y: 40 },
          { net: "0", x: 230, y: 80 },
        ],
      },
    ],
    wires: [
      { net: "in", segments: [{ x1: 40, y1: 40, x2: 70, y2: 40 }] },
      { net: "a", segments: [{ x1: 110, y1: 40, x2: 140, y2: 40 }] },
      { net: "out", segments: [{ x1: 200, y1: 40, x2: 230, y2: 40 }] },
    ],
    junctions: [],
    bounds: { width: 260, height: 110 },
  };
}
