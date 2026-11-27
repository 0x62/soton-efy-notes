import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

// The pinned UI exposes SchematicLayout but no way to render an authored one.
// Add an opt-in layout hook; retain every upstream symbol and default layout.
const root = fileURLToPath(
  new URL("node_modules/@spice-ts/ui/", import.meta.url),
);
if (JSON.parse(readFileSync(root + "package.json", "utf8")).version !== "0.3.1")
  throw new Error(
    "Review the authored layout hook for the new spice-ts/ui version",
  );
const before = "function layoutSchematic(circuit) {";
const after =
  before +
  "\n  // notes: authored schematic layout\n  if (circuit.notesSchematicLayout) return circuit.notesSchematicLayout;";
let bundles = 0;
for (const name of readdirSync(root + "dist")) {
  if (!/\.(js|cjs)$/.test(name)) continue;
  const path = root + "dist/" + name;
  const source = readFileSync(path, "utf8");
  if (source.includes(after)) {
    bundles++;
    continue;
  }
  if (!source.includes(before)) continue;
  if (source.split(before).length !== 2)
    throw new Error(`Upstream layout changed: ${name}`);
  writeFileSync(path, source.replace(before, after));
  bundles++;
}
if (bundles !== 3)
  throw new Error(`Expected three schematic bundles, found ${bundles}`);
