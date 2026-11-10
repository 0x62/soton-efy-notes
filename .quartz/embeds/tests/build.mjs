import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { SourceTextModule, createContext } from "node:vm";
const out = resolve(process.argv[2] || "dist");
const manifest = JSON.parse(
  await readFile(resolve(out, ".vite/manifest.json"), "utf8"),
);
const circuit = manifest["y1/elec1311/rc-transients/charging/index.html"],
  maths = manifest["maths-demo/index.html"];
assert.ok(
  circuit.imports.some((x) => maths.imports.includes(x)),
  "React/runtime must share an identical hashed chunk",
);
assert.notEqual(circuit.file, maths.file);
assert.ok(
  !(circuit.css || []).some((x) => (maths.css || []).includes(x)),
  "Maths stylesheet must stay isolated",
);
for (const route of ["y1/elec1311/rc-transients/charging", "maths-demo"]) {
  const html = await readFile(resolve(out, route, "index.html"), "utf8");
  for (const [, url] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    assert.ok(
      url.startsWith("."),
      "Assets must work under root and GitHub Pages subpaths",
    );
    assert.ok((await stat(resolve(out, route, url))).isFile());
    for (const base of [
      "https://example.org/",
      "https://example.org/soton-efy-notes/",
    ])
      assert.ok(
        new URL(url, base + "_embed/" + route + "/").pathname.startsWith(
          new URL(base).pathname + "_embed/assets/",
        ),
      );
  }
}
const workerFile = circuit.assets.find((x) => /\/worker-/.test(x));
let response;
const context = createContext({
  self: {
    postMessage: (data) => {
      response = structuredClone(data);
    },
  },
  console,
  performance,
  URL,
  TextEncoder,
  TextDecoder,
  setTimeout,
  clearTimeout,
  structuredClone,
});
const module = new SourceTextModule(
  await readFile(resolve(out, workerFile), "utf8"),
  {
    context,
    initializeImportMeta(meta) {
      meta.url = new URL(workerFile, "https://example.org/_embed/").href;
    },
  },
);
await module.link(() => {
  throw Error("Unexpected eager worker import");
});
await module.evaluate();
await context.self.onmessage({
  data: {
    netlist:
      "RC charging\nV1 in 0 DC 10\nR1 in out 10\nC1 out 0 0.2 IC=0\n.tran 0.01 10 0 0.01 UIC\n.end",
    signals: [
      { id: "voltage", quantity: "voltage", source: "out" },
      { id: "current", quantity: "current", source: "V1", scale: -1 },
    ],
    initial: { time: 0, values: { voltage: 0, current: 1 } },
  },
});
assert.ok(!response.error, response.error);
assert.ok(response.result.time.length > 900);
assert.ok(Math.abs(response.result.series.voltage.at(-1) - 9.93262) < 0.01);
assert.ok(Math.abs(response.result.series.current.at(-1) - 0.006738) < 0.001);
console.log(
  "PASS production worker execution, structured-clone result, shared runtime and root/subpath asset resolution",
);
