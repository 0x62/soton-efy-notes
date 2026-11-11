import { test } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import { installEmbedSizing } from "~/toolkit/sizing";
test("intrinsic sizing reacts to wrapping and disclosures, shrinks, ignores forged requests and cleans up", () => {
  const dom = new JSDOM('<div id="root"></div>', {
      url: "https://notes.example/",
    }),
    w = dom.window;
  const messages: any[] = [],
    parent = { postMessage: (...a: any[]) => messages.push(a) };
  Object.defineProperty(w, "parent", { value: parent });
  let height = 900,
    width = 300,
    tick: FrameRequestCallback | undefined,
    resize: () => void = () => {};
  const globals = {
    window: w,
    document: w.document,
    location: w.location,
    parent,
    ResizeObserver: class {
      constructor(cb: () => void) {
        resize = cb;
      }
      observe() {}
      disconnect() {}
    },
    requestAnimationFrame: (cb: FrameRequestCallback) => {
      tick = cb;
      return 1;
    },
    cancelAnimationFrame: () => {
      tick = undefined;
    },
  };
  const old = new Map(
    Object.keys(globals).map((k) => [
      k,
      Object.getOwnPropertyDescriptor(globalThis, k),
    ]),
  );
  for (const [key, value] of Object.entries(globals))
    Object.defineProperty(globalThis, key, {
      value,
      configurable: true,
      writable: true,
    });
  const root = w.document.getElementById("root")!;
  root.getBoundingClientRect = () => ({ width, height }) as DOMRect;
  const flush = () => {
    const cb = tick;
    tick = undefined;
    cb?.(0);
  };
  const request = (source: any = parent, origin = w.location.origin) =>
    w.dispatchEvent(
      new w.MessageEvent("message", {
        source,
        origin,
        data: { type: "notes-embed:v1:measure" },
      }),
    );
  let dispose = () => {};
  try {
    dispose = installEmbedSizing(root);
    flush();
    assert.equal(messages.at(-1)[0].height, 900);
    request({}, w.location.origin);
    request(parent, "https://evil.example");
    assert.equal(w.document.documentElement.dataset.notesEmbedded, undefined);
    request();
    flush();
    assert.equal(w.document.documentElement.dataset.notesEmbedded, "true");
    const count = messages.length;
    resize();
    flush();
    assert.equal(messages.length, count);
    height = 1800;
    w.dispatchEvent(new w.Event("resize"));
    flush();
    assert.equal(messages.at(-1)[0].height, 1800);
    height = 450;
    resize();
    flush();
    assert.equal(messages.at(-1)[0].height, 450);
    width = 0;
    height = 0;
    resize();
    flush();
    assert.equal(messages.at(-1)[0].height, 450);
    width = 300;
    height = 700;
    w.document.dispatchEvent(new w.Event("toggle"));
    flush();
    assert.equal(messages.at(-1)[0].height, 700);
    dispose();
    const final = messages.length;
    request();
    flush();
    assert.equal(messages.length, final);
  } finally {
    dispose();
    dom.window.close();
    for (const [k, v] of old)
      if (v) Object.defineProperty(globalThis, k, v);
      else delete (globalThis as any)[k];
  }
});
