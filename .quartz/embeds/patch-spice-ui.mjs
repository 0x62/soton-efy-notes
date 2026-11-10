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
    // Match the height of other vertical two-terminal symbols. Generate actual
    // path coordinates: SchematicView discards element transform attributes.
    const width = GRID, height = GRID * 2, cx = width / 2;
    const lead = height / 6, arcH = (height - 2 * lead) / 4;
    let d = "M" + cx + ",0 L" + cx + "," + lead;
    for (let i = 0; i < 4; i++)
      d += " A5," + arcH / 2 + " 0 0,1 " + cx + "," + (lead + (i + 1) * arcH);
    d += " L" + cx + "," + height;
    return {
      elements: [{ tag: "path", attrs: { d, fill: "none" } }],
      pins: [{ dx: cx, dy: 0 }, { dx: cx, dy: height }],
      width,
      height
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
