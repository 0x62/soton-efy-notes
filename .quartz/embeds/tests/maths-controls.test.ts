import { test } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";

test("math controls are slider-first; animation respects reduced motion and stops offscreen", async () => {
  const dom = new JSDOM('<div id="root"></div>', {
      url: "https://notes.test/?p=NaN&mode=1.4",
    }),
    w = dom.window;
  let reduced = true,
    frame: FrameRequestCallback | undefined,
    offscreen: IntersectionObserverCallback | undefined,
    cancelled = 0;
  const globals = {
    window: w,
    document: w.document,
    location: w.location,
    history: w.history,
    parent: w,
    matchMedia: (query: string) => ({
      matches: query.includes("reduced-motion") ? reduced : false,
      addEventListener() {},
      removeEventListener() {},
    }),
    ResizeObserver: class {
      observe() {}
      disconnect() {}
    },
    IntersectionObserver: class {
      constructor(cb: IntersectionObserverCallback) {
        offscreen = cb;
      }
      observe() {}
      disconnect() {}
    },
    requestAnimationFrame: (cb: FrameRequestCallback) => {
      frame = cb;
      return 1;
    },
    cancelAnimationFrame: () => {
      cancelled++;
      frame = undefined;
    },
    IS_REACT_ACT_ENVIRONMENT: true,
  };
  const previous = new Map(
    Object.keys(globals).map((k) => [
      k,
      Object.getOwnPropertyDescriptor(globalThis, k),
    ]),
  );
  for (const [key, value] of Object.entries(globals))
    Object.defineProperty(globalThis, key, {
      value,
      writable: true,
      configurable: true,
    });
  const { createElement: h, act } = await import("react");
  const { createRoot } = await import("react-dom/client");
  const { Approach, MathsSlider, useMathsModel } = await import(
    "~/toolkit/MathsCard"
  );
  const schema = {
    p: { default: 0, min: 0, max: 3, step: 0.01, label: "Approach", unit: "" },
    mode: { default: 0, min: 0, max: 2, step: 1, label: "Example", unit: "" },
  };
  function Demo() {
    const { values, set } = useMathsModel(schema);
    return h(
      "div",
      {},
      h("output", {}, values.p + "," + values.mode),
      h(MathsSlider, {
        label: "h",
        value: values.p,
        min: 0,
        max: 3,
        step: 0.01,
        onChange: (v: number) => set("p", v),
      }),
      h(Approach, {
        value: values.p,
        target: 3,
        onChange: (v: number) => set("p", v),
      }),
    );
  }
  const root = createRoot(w.document.getElementById("root")!);
  try {
    await act(async () => root.render(h(Demo)));
    assert.equal(w.document.querySelector("input[type=number]"), null);
    assert.equal(w.document.querySelector("output")!.textContent, "0,1");
    assert.equal(
      w.document.querySelector("button")!.textContent,
      "Step closer",
    );
    await act(async () => w.document.querySelector("button")!.click());
    assert.equal(w.document.querySelector("output")!.textContent, "0.5,1");
    assert.equal(frame, undefined);
    await act(async () => root.render(h("div")));
    reduced = false;
    await act(async () => root.render(h(Demo)));
    await act(async () => w.document.querySelector("button")!.click());
    assert.equal(w.document.querySelector("button")!.textContent, "Pause");
    assert.ok(frame);
    await act(async () =>
      offscreen!(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      ),
    );
    assert.equal(
      w.document.querySelector("button")!.textContent,
      "Animate approach",
    );
    assert.ok(cancelled > 0);
  } finally {
    await act(async () => root.unmount());
    dom.window.close();
    for (const [key, value] of previous)
      if (value) Object.defineProperty(globalThis, key, value);
      else delete (globalThis as any)[key];
  }
});
