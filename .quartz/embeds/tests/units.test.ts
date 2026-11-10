import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { patchTransientUnits } from "~/unit-patch.mjs";
test("SPICE transient renderer labels current axes and cursor values in A", async () => {
  const dir = new URL("../node_modules/@spice-ts/ui/dist/", import.meta.url);
  const name = (await readdir(dir)).find(
    (x) => x.startsWith("chunk-") && x.endsWith(".js"),
  )!;
  let code = patchTransientUnits(await readFile(new URL(name, dir), "utf8"));
  for (const pkg of ["d3-array", "d3-scale"])
    code = code.replaceAll(
      '"' + pkg + '"',
      JSON.stringify(import.meta.resolve(pkg)),
    );
  const { TransientRenderer, LIGHT_THEME } = await import(
    "data:text/javascript;base64," + Buffer.from(code).toString("base64")
  );
  const labels: string[] = [];
  const canvas = {
    width: 600,
    height: 300,
    getContext: () => ({ fillText: (label: string) => labels.push(label) }),
  };
  for (const [name, unit] of [
    ["I(C1)", "A"],
    ["V(out)", "V"],
  ]) {
    labels.length = 0;
    const renderer = new TransientRenderer(canvas, { theme: LIGHT_THEME });
    renderer.setData(
      [{ time: [0, 1], signals: new Map([[name, [0, 1]]]), label: "" }],
      [name],
    );
    renderer.drawYAxis(canvas.getContext());
    assert.ok(labels.length > 0);
    assert.ok(
      labels.every((label) => label.endsWith(unit)),
      labels.join(","),
    );
    let cursor: any;
    renderer.on("cursorMove", (state: any) => (cursor = state));
    renderer.setCursorPixelX(100);
    assert.equal(cursor.values[0].unit, unit);
  }
});
