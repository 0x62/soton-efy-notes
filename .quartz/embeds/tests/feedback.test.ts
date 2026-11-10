import { test } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";

test("minimal card has dual axes, non-zooming pointer/keyboard chart and component tooltips", async () => {
  const dom = new JSDOM('<div id="root"></div>', {
      url: "https://notes.example/_embed/rc/",
    }),
    window = dom.window;
  const { calculate } = await import("../src/rc");
  const { readParams } = await import("../src/params");
  const result = await calculate(readParams(""));
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
      onmessage: any;
      postMessage() {
        queueMicrotask(() => this.onmessage?.({ data: { result } }));
      }
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
  const { createElement, act } = await import("react");
  const { createRoot } = await import("react-dom/client");
  const { CircuitCard } = await import("../src/CircuitCard");
  const root = createRoot(window.document.getElementById("root")!);
  try {
    await act(async () => root.render(createElement(CircuitCard)));
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 250));
    });
    const doc = window.document;
    assert.equal(doc.querySelector("h1"), null);
    for (const text of [
      "Circuit lab",
      "hover for readings",
      "Positive charging current",
      "scroll to zoom",
    ])
      assert.ok(!doc.body.textContent!.includes(text));
    assert.ok(doc.querySelector("table")!.closest(".sr-only"));
    assert.ok(
      doc.querySelector('[role="status"]')!.classList.contains("sr-only"),
    );
    assert.equal(doc.querySelectorAll("[data-series]").length, 2);
    const voltage = doc.querySelector('[data-series="voltage"]')!,
      current = doc.querySelector('[data-series="current"]')!;
    assert.notEqual(
      voltage.getAttribute("stroke"),
      current.getAttribute("stroke"),
    );
    assert.ok(current.getAttribute("stroke-dasharray"));
    const chart = doc.querySelector('svg[role="slider"]')!;
    await act(async () =>
      chart.dispatchEvent(
        new window.KeyboardEvent("keydown", { key: "End", bubbles: true }),
      ),
    );
    assert.equal(chart.getAttribute("aria-valuenow"), "10");
    assert.match(
      doc.querySelector('[role="tooltip"]')!.textContent!,
      /Voltage:.*Current:/,
    );
    const before = [voltage.getAttribute("d"), current.getAttribute("d")];
    const wheel = new window.WheelEvent("wheel", {
      deltaY: 100,
      bubbles: true,
      cancelable: true,
    });
    chart.dispatchEvent(wheel);
    assert.equal(wheel.defaultPrevented, false);
    assert.deepEqual(
      [voltage.getAttribute("d"), current.getAttribute("d")],
      before,
    );
    const pointer = new window.MouseEvent("pointerdown", {
      clientX: 220,
      clientY: 120,
      bubbles: true,
    });
    Object.defineProperty(pointer, "pointerType", { value: "touch" });
    await act(async () => chart.dispatchEvent(pointer));
    assert.ok(Number(chart.getAttribute("aria-valuenow")) < 10);
    assert.ok(doc.querySelector('[role="tooltip"]'));
    await act(async () =>
      chart.dispatchEvent(
        new window.KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
      ),
    );
    for (const name of ["V1", "R1", "C1"]) {
      const component = doc.querySelector(
        `[data-component="${name}"]`,
      )! as unknown as SVGElement;
      assert.equal(component.getAttribute("tabindex"), "0");
      await act(async () => component.focus());
      assert.ok(
        doc.querySelector('[role="tooltip"]')!.textContent!.includes(name),
      );
      await act(async () =>
        component.dispatchEvent(
          new window.KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
        ),
      );
      assert.equal(doc.querySelector('[role="tooltip"]'), null);
    }
    await act(async () =>
      root.render(
        createElement(CircuitCard, {
          title: "Optional title",
          description: "Optional description",
        }),
      ),
    );
    assert.equal(doc.querySelector("h1")!.textContent, "Optional title");
    assert.ok(doc.body.textContent!.includes("Optional description"));
  } finally {
    await act(async () => root.unmount());
    dom.window.close();
    for (const [key, descriptor] of previous) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else Reflect.deleteProperty(globalThis, key);
    }
  }
});
