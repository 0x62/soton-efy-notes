import { test } from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  AccessibleDataTable,
  nearestSampleIndices,
} from "~/toolkit/AccessibleDataTable";
import { runWorker } from "~/toolkit/worker-client";
import { formatNumber } from "~/toolkit/format";
import { discoverRoutes } from "~/routes.mjs";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { resolve } from "node:path";

test("shared table supports a distinct frequency/gain configuration and selected samples", () => {
  const indices = nearestSampleIndices(
    [100, 1000, 10000],
    [110, 900, 1100, 9999],
  );
  assert.deepEqual(indices, [0, 1, 2]);
  const html = renderToStaticMarkup(
    createElement(AccessibleDataTable, {
      caption: "Frequency response",
      indices,
      columns: [
        {
          label: "Frequency (Hz)",
          values: [100, 1000, 10000],
          format: (v) => `${v} Hz`,
        },
        { label: "Gain (dB)", values: [0, -3, -20] },
      ],
    }),
  );
  assert.match(html, /class="sr-only"/);
  assert.match(html, /scope="col"/);
  assert.match(html, /1000 Hz/);
  assert.match(html, />-3</);
  assert.equal(formatNumber(1 / 3), "0.3333");
  assert.throws(
    () =>
      renderToStaticMarkup(
        createElement(AccessibleDataTable, {
          caption: "bad",
          columns: [{ label: "x", values: [1] }],
          indices: [2],
        }),
      ),
    /outside/,
  );
});

test("worker transport terminates on success, errors, cancellation and postMessage failure", async () => {
  for (const mode of ["success", "error", "abort", "throw", "runtime"]) {
    let terminated = 0;
    const controller = new AbortController();
    const worker = {
      onmessage: null as any,
      onerror: null as any,
      terminate() {
        terminated++;
      },
      postMessage(input: unknown) {
        assert.deepEqual(input, { frequency: 1000 });
        if (mode === "throw") throw new Error("clone failure");
        queueMicrotask(() => {
          if (mode === "abort") controller.abort();
          else if (mode === "runtime") this.onerror();
          else
            this.onmessage({
              data:
                mode === "error"
                  ? { error: "solver failure" }
                  : { result: { gain: -3 } },
            });
        });
      },
    };
    const promise = runWorker(
      () => worker as unknown as Worker,
      { frequency: 1000 },
      controller.signal,
    );
    if (mode === "success") assert.deepEqual(await promise, { gain: -3 });
    else await assert.rejects(promise);
    assert.equal(terminated, 1);
  }
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(
    runWorker(
      () => {
        throw new Error("must not construct");
      },
      {},
      controller.signal,
    ),
    /cancelled/,
  );
});

test("filesystem routing follows note permalinks and preserves existing public routes", () => {
  const routes = discoverRoutes(resolve("demos"), resolve("../.."));
  assert.deepEqual(
    routes.map((r) => r.route),
    ["maths-demo", "y1/elec1311/rc-transients/charging"],
  );
  const root = mkdtempSync(resolve(tmpdir(), "embed-routes-"));
  try {
    mkdirSync(resolve(root, "demos/Year 2/Signals/Gain/plot"), {
      recursive: true,
    });
    mkdirSync(resolve(root, "notes/Year 2/Signals"), { recursive: true });
    writeFileSync(
      resolve(root, "demos/Year 2/Signals/Gain/plot/index.tsx"),
      "",
    );
    const note = resolve(root, "notes/Year 2/Signals/Gain.md");
    writeFileSync(note, "---\npermalink: y2/signals/gain\n---\n");
    assert.equal(
      discoverRoutes(resolve(root, "demos"), resolve(root, "notes"))[0].route,
      "y2/signals/gain/plot",
    );
    writeFileSync(note, "No permalink");
    assert.throws(
      () => discoverRoutes(resolve(root, "demos"), resolve(root, "notes")),
      /explicit permalink/,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
