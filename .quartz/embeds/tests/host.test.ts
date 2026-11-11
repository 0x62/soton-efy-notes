import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { JSDOM } from "jsdom";
test("host authenticates height messages, grows and shrinks, resyncs on theme/disclosure/SPA, and installs once", async () => {
  const dom = new JSDOM(
    '<html saved-theme="light"><body><details><summary>Example</summary><iframe data-notes-embed="example"></iframe></details></body></html>',
    { url: "https://notes.example/", runScripts: "outside-only" },
  );
  const w = dom.window,
    messages: any[] = [];
  Object.defineProperty(w, "matchMedia", { value: () => ({ matches: false }) });
  const frame = w.document.querySelector("iframe")!,
    child = frame.contentWindow!;
  child.postMessage = (...args: any[]) => messages.push(args);
  const code = await readFile(new URL("../host.js", import.meta.url), "utf8");
  const height = (
    value: any,
    origin = w.location.origin,
    source: any = child,
  ) =>
    w.dispatchEvent(
      new w.MessageEvent("message", {
        origin,
        source,
        data: { type: "notes-embed:v1:height", height: value },
      }),
    );
  try {
    w.eval(code);
    assert.equal(frame.getAttribute("scrolling"), "no");
    assert.equal(messages[0][0].theme, "light");
    assert.equal(messages[1][0].type, "notes-embed:v1:measure");
    height(800, "https://evil.example");
    height(800, w.location.origin, {});
    assert.equal(frame.style.height, "");
    height(1200.3);
    assert.equal(frame.style.height, "1203px");
    height(620);
    assert.equal(frame.style.height, "622px");
    height(6000);
    assert.equal(frame.style.height, "6002px");
    for (const bad of [Infinity, NaN, -1, 0, "800", 100001]) height(bad);
    assert.equal(frame.style.height, "6002px");
    const count = messages.length;
    w.eval(code);
    assert.equal(messages.length, count);
    w.document.documentElement.setAttribute("saved-theme", "dark");
    await new Promise((r) => setTimeout(r, 0));
    assert.equal(messages.at(-2)[0].theme, "dark");
    const before = messages.length;
    w.document.querySelector("details")!.open = true;
    await new Promise((r) => setTimeout(r, 5));
    assert.ok(messages.length > before);
    w.document.dispatchEvent(new w.Event("nav"));
    assert.equal(messages.at(-1)[0].type, "notes-embed:v1:measure");
    frame.remove();
    height(700);
    assert.equal(frame.style.height, "6002px");
  } finally {
    dom.window.close();
  }
});
