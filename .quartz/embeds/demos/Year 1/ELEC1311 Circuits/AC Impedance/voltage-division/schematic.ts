import type { SchematicLayout } from "@spice-ts/ui";
import type { Result } from "./rl";

/** Match the lesson's left-to-right series path using the UI's normal symbols. */
export function schematic({
  circuit,
}: Pick<Result, "circuit">): SchematicLayout {
  const component = (name: string) => {
    const found = circuit.components.find((c) => c.name === name);
    if (!found) throw new Error(`Missing schematic component ${name}`);
    return found;
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
          { net: "out", x: 110, y: 40 },
        ],
      },
      {
        component: component("L1"),
        x: 140,
        y: 30,
        rotation: 0,
        horizontal: true,
        pins: [
          { net: "out", x: 140, y: 40 },
          { net: "0", x: 200, y: 40 },
        ],
      },
    ],
    wires: [
      { net: "in", segments: [{ x1: 40, y1: 40, x2: 70, y2: 40 }] },
      { net: "out", segments: [{ x1: 110, y1: 40, x2: 140, y2: 40 }] },
    ],
    junctions: [],
    bounds: { width: 230, height: 110 },
  };
}
