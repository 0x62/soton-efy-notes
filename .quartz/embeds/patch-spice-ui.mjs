import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

// @spice-ts/ui 0.3.1 has no layout/orientation override. Correct both layout
// geometry and the symbol used by its React renderer, rather than moving SVGs
// after rendering and leaving wire endpoints/tooltips behind.
const root = fileURLToPath(
  new URL("node_modules/@spice-ts/ui/", import.meta.url),
);
if (JSON.parse(readFileSync(root + "package.json", "utf8")).version !== "0.3.1")
  throw new Error(
    "Review the inductor orientation patch for the new spice-ts/ui version",
  );
const marker = "// notes: inductor orientation fix";
const edits = [
  [
    "function inductorSymbol() {",
    `${marker}
function inductorSymbol(horizontal = false) {
  if (!horizontal) {
    const symbol = inductorSymbol(true);
    return {
      elements: symbol.elements.map(element => ({
        ...element,
        attrs: { ...element.attrs, transform: \`translate(\${symbol.height},0) rotate(90) scale(0.6666666666666666,1)\` }
      })),
      pins: symbol.pins.map(pin => ({ dx: symbol.height - pin.dy, dy: pin.dx * 2 / 3 })),
      width: symbol.height,
      height: symbol.width * 2 / 3
    };
  }`,
  ],
  ["return inductorSymbol();", "return inductorSymbol(horizontal);"],
  [
    'const horizontal = pl.comp.type === "C" && sameRank',
    'const horizontal = pl.comp.type === "L" && sameRank && !pl.comp.ports.some(p => p.net === "0") || pl.comp.type === "C" && sameRank',
  ],
  [
    "return isFeedback(pl) ? base - RANK_SPACING : base;",
    'return isFeedback(pl) ? base - RANK_SPACING : pl.comp.type === "L" && pl.topRank === pl.bottomRank && pl.comp.ports.some(p => p.net === "0") ? base + GRID / 2 : base;',
  ],
];
let bundles = 0;
for (const name of readdirSync(root + "dist")) {
  if (!/\.(js|cjs)$/.test(name)) continue;
  const path = root + "dist/" + name;
  let source = readFileSync(path, "utf8");
  if (source.includes(marker)) {
    bundles++;
    continue;
  }
  if (!source.includes(edits[0][0])) continue;
  for (const [before, after] of edits) {
    if (source.split(before).length !== 2)
      throw new Error(`Upstream schematic code changed: ${name}: ${before}`);
    source = source.replace(before, after);
  }
  writeFileSync(path, source);
  bundles++;
}
if (bundles !== 3)
  throw new Error(`Expected three schematic bundles, found ${bundles}`);
