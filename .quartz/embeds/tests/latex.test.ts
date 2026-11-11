import { registerHooks } from "node:module";
import { test } from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { JSDOM } from "jsdom";
import { readFileSync, readdirSync } from "node:fs";
import { Latex, latexNumber } from "~/toolkit/Latex";

test("LaTeX produces accessible MathML and updates values without trusting commands", () => {
  for (const value of [2, 0.002, 1e-9, -2e12]) {
    const html = renderToStaticMarkup(
      createElement(Latex, {
        latex: String.raw`\tau=${latexNumber(value)}\,\mathrm{s}`,
      }),
    );
    const d = new JSDOM(html).window.document;
    assert.ok(d.querySelector("math"));
    assert.ok(d.querySelector('.katex-html[aria-hidden="true"]'));
    assert.equal(d.querySelector(".katex-error"), null);
    assert.ok(
      d.querySelector("annotation")!.textContent!.includes(latexNumber(value)),
    );
  }
  assert.equal(latexNumber(1e-9), String.raw`1\times 10^{-9}`);
  assert.throws(() => latexNumber(Infinity));
  const unsafe = renderToStaticMarkup(
    createElement(Latex, {
      latex: String.raw`\href{javascript:alert(1)}{click}`,
    }),
  );
  assert.equal(new JSDOM(unsafe).window.document.querySelector("a"), null);
});

test("all lesson readouts render valid LaTeX across modes and boundary parameters", async () => {
  // Browser CSS is covered by the production build; this test renders semantic markup.
  const hooks = registerHooks({
    resolve(specifier, context, next) {
      if (specifier.endsWith(".css"))
        return {
          url: "data:text/javascript,export default {}",
          shortCircuit: true,
        };
      return next(specifier, context);
    },
  });
  const w = new JSDOM("<body></body>").window;
  Object.assign(globalThis, {
    window: w,
    document: w.document,
    location: w.location,
    matchMedia: () => ({ matches: false }),
  });
  const base = "../demos/Year 1/ELEC1310 Mathematics/Limits & Continuity/";
  for (const name of readdirSync(new URL(base, import.meta.url), {
    withFileTypes: true,
  })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)) {
    const { Demo } = await import(
      new URL(base + name + "/Demo.tsx", import.meta.url).href
    );
    for (const query of [
      "",
      "?mode=1&point=1&operation=1",
      "?mode=2&point=2&operation=2",
      "?operation=3&iteration=12&epsilon=0.1&delta=1.2&p=4",
    ]) {
      Object.assign(globalThis, { location: { search: query } });
      const html = renderToStaticMarkup(createElement(Demo));
      const d = new JSDOM(html).window.document;
      assert.ok(d.querySelector("math"), name);
      assert.equal(d.querySelector(".katex-error"), null, name + query);
    }
  }
  hooks.deregister();
});

test("overview section contains the TOC and equations and introduction stays in the lesson", () => {
  const note = readFileSync(
    new URL(
      "../../../Year 1/ELEC1310 Mathematics/Limits & Continuity.md",
      import.meta.url,
    ),
    "utf8",
  );
  const overview = note
    .split("#### Limits & Continuity\n")[1]
    .split("## Introduction")[0];
  assert.equal(
    overview
      .replace(/\$\$[\s\S]*?\$\$/g, "")
      .replace(/^- \[\[[^\n]+$/gm, "")
      .trim(),
    "",
  );
  assert.ok(
    note.indexOf("#### Limits & Continuity") <
      note.indexOf("[[#Formal definition]]"),
  );
  assert.ok(
    note.includes("A limit describes what the values of a function approach."),
  );
});
