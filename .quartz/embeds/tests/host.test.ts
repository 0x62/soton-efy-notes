import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";
test("host checks origin/window, bounds height and follows theme/SPA without duplicate listeners", async () => {
  const messages: any[] = [],
    listeners: any = {},
    style: any = {};
  const child = { postMessage: (...args: any[]) => messages.push(args) };
  let frame = { contentWindow: child, style },
    theme = "light",
    observer: () => void = () => {};
  const context = {
    window: {},
    location: { origin: "https://notes.example" },
    document: {
      documentElement: { getAttribute: () => theme },
      querySelectorAll: () => [frame],
      addEventListener: (name: string, fn: any) => (listeners[name] = fn),
    },
    getComputedStyle: () => ({
      getPropertyValue: (name: string) =>
        name === "--light" ? "#faf8f8" : "system-ui",
    }),
    matchMedia: () => ({ matches: false }),
    MutationObserver: class {
      constructor(fn: any) {
        observer = fn;
      }
      observe() {}
    },
    addEventListener: (name: string, fn: any) => (listeners[name] = fn),
  };
  const code = await readFile(new URL("../host.js", import.meta.url), "utf8");
  runInNewContext(code, context);
  assert.equal(messages.length, 1);
  assert.equal(messages[0][0].theme, "light");
  const height = { type: "notes-embed:v1:height", height: 1000 };
  listeners.message({
    origin: "https://evil.example",
    source: child,
    data: height,
  });
  assert.equal(style.height, undefined);
  listeners.message({
    origin: context.location.origin,
    source: {},
    data: height,
  });
  assert.equal(style.height, undefined);
  listeners.message({
    origin: context.location.origin,
    source: child,
    data: height,
  });
  assert.equal(style.height, "1002px");
  listeners.message({
    origin: context.location.origin,
    source: child,
    data: { ...height, height: Infinity },
  });
  assert.equal(style.height, "1002px");
  theme = "dark";
  observer();
  assert.equal(messages.at(-1)[0].theme, "dark");
  const count = messages.length;
  runInNewContext(code, context);
  assert.equal(messages.length, count);
  frame = { contentWindow: child, style: {} };
  listeners.nav();
  assert.equal(messages.length, count + 1);
});
