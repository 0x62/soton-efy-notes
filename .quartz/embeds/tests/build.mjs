import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { SourceTextModule, createContext } from "node:vm";
const out = resolve(process.argv[2] || "dist");
const manifest = JSON.parse(
  await readFile(resolve(out, ".vite/manifest.json"), "utf8"),
);
const rl = manifest["y1/elec1311/ac-impedance/voltage-division/index.html"];
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
for (const route of [
  "y1/elec1311/rc-transients/charging",
  "y1/elec1311/ac-impedance/voltage-division",
  "maths-demo",
]) {
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
function assets(entry, seen = new Set()) {
  if (seen.has(entry)) return [];
  seen.add(entry);
  return [
    ...(entry.assets || []),
    ...(entry.imports || []).flatMap((key) => assets(manifest[key], seen)),
  ];
}
const workerFile = assets(circuit).find((x) => /\/worker-/.test(x));
assert.ok(workerFile);
assert.equal(
  assets(rl).find((x) => /\/worker-/.test(x)),
  workerFile,
  "Both circuit demos cache the same worker",
);
assert.ok(
  !assets(maths).includes(workerFile),
  "Maths does not load the SPICE worker",
);
assert.ok(
  rl.imports.some(
    (x) => circuit.imports.includes(x) && x.includes("worker-client"),
  ),
  "Circuit UI and transport share a hashed chunk",
);
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

const omega = 2 * Math.PI * 50,
  inductance = 0.31831;
const phase = -Math.PI / 12 - Math.atan2(omega * inductance, 60);
const i0 = (20 / Math.hypot(60, omega * inductance)) * Math.cos(phase);
await context.self.onmessage({
  data: {
    netlist: `RL divider\nV1 in 0 SIN(0 20 50 0 0 75)\nR1 in out 60\nL1 out 0 ${inductance} IC=${i0}\n.tran 0.00005 0.04 0 0.00005 UIC\n.end`,
    signals: [
      { id: "resistor", quantity: "voltage", source: "in", reference: "out" },
      { id: "inductor", quantity: "voltage", source: "out" },
    ],
  },
});
assert.ok(!response.error, response.error);
for (let i = 0; i < response.result.time.length; i++) {
  const t = response.result.time[i];
  assert.ok(
    Math.abs(
      response.result.series.resistor[i] +
        response.result.series.inductor[i] -
        20 * Math.cos(omega * t - Math.PI / 12),
    ) < 1e-6,
  );
}
assert.ok(response.result.series.inductor.some((v) => v < 0));
console.log(
  "PASS shared production worker runs RL differential probes and signed waveforms",
);
