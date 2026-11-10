import { test } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";

test("Reset example clears invalid drafts at unchanged default values", async () => {
  const dom = new JSDOM('<div id="root"></div>', {
    url: "https://notes.example/_embed/rc/",
  });
  const window = dom.window;
  const globals = {
    window,
    document: window.document,
    location: window.location,
    history: window.history,
    parent: window,
    matchMedia: () => ({
      matches: false,
      addEventListener() {},
      removeEventListener() {},
    }),
    ResizeObserver: class {
      observe() {}
      disconnect() {}
    },
    Worker: class {
      postMessage() {}
      terminate() {}
    },
    IS_REACT_ACT_ENVIRONMENT: true,
  };
  const previous = new Map(
    Object.keys(globals).map((key) => [
      key,
      Object.getOwnPropertyDescriptor(globalThis, key),
    ]),
  );
  for (const [key, value] of Object.entries(globals))
    Object.defineProperty(globalThis, key, {
      value,
      writable: true,
      configurable: true,
    });
  // Import after installing the DOM so React enables its input event handling.
  const { createElement, act } = await import("react");
  const { createRoot } = await import("react-dom/client");
  const { CircuitCard } = await import("../src/CircuitCard");
  const { schema } = await import("../src/params");
  const root = createRoot(window.document.getElementById("root")!);
  try {
    await act(async () => root.render(createElement(CircuitCard)));
    const reset = [...window.document.querySelectorAll("button")].find(
      (button) => button.textContent === "Reset example",
    )!;
    const setValue = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value",
    )!.set!;
    for (const [name, rule] of Object.entries(schema)) {
      const input = window.document.getElementById(name) as HTMLInputElement;
      for (const draft of ["", "0", String(rule.max + 1)]) {
        await act(async () => {
          setValue.call(input, draft);
          input.dispatchEvent(new window.Event("input", { bubbles: true }));
        });
        assert.equal(input.value, draft);
        assert.equal(
          input.getAttribute("aria-invalid"),
          "true",
          `${name}: draft must be invalid before reset`,
        );
        // Invalid edits have not changed the accepted/default value.
        assert.equal(
          new URLSearchParams(window.location.search).get(name),
          String(rule.default),
        );
        await act(async () => reset.click());
        assert.equal(
          input.value,
          String(rule.default),
          `${name}: reset must replace ${JSON.stringify(draft)}`,
        );
        assert.equal(input.getAttribute("aria-invalid"), "false");
        assert.equal(
          window.document
            .querySelector(`input[aria-label="${rule.label} slider"]`)!
            .getAttribute("value"),
          String(rule.default),
        );
      }
    }
  } finally {
    await act(async () => root.unmount());
    dom.window.close();
    for (const [key, descriptor] of previous) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else Reflect.deleteProperty(globalThis, key);
    }
  }
});
