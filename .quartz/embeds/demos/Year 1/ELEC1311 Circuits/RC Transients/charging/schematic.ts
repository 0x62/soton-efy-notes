import type { SchematicLayout } from "@spice-ts/ui";
import type { Result } from "./rc";
export function schematic({ circuit }: Pick<Result, "circuit">): SchematicLayout {
  const component = (name: string) => {
    const found = circuit.components.find(c => c.name === name);
    if (!found) throw new Error(`Missing ${name}`);
    return found;
  };
  return {
    components: [
      { component: component("V1"), x: 20, y: 40, stretchH: 80, rotation: 0,
        pins: [{ net: "in", x: 40, y: 40 }, { net: "0", x: 40, y: 120 }] },
      { component: component("R1"), x: 70, y: 30, horizontal: true, rotation: 0,
        pins: [{ net: "in", x: 70, y: 40 }, { net: "out", x: 110, y: 40 }] },
      { component: component("C1"), x: 140, y: 40, stretchH: 80, rotation: 0,
        pins: [{ net: "out", x: 150, y: 40 }, { net: "0", x: 150, y: 120 }] },
    ],
    wires: [
      { net: "in", segments: [{ x1: 40, y1: 40, x2: 70, y2: 40 }] },
      { net: "out", segments: [{ x1: 110, y1: 40, x2: 150, y2: 40 }] },
    ], junctions: [], bounds: { width: 180, height: 150 },
  };
}
