import { test } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import { runInNewContext } from "node:vm";
import {
  compactEmbedPreviews,
  installCompactEmbedPreviews,
} from "../../popover-embeds.mjs";
import { mkdtemp, mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
test("hover previews link to embeds without instantiating duplicate frames; installation is idempotent", async () => {
  const dom = new JSDOM(
    '<article class="popover-hint"><iframe src="https://notes.test/_embed/example/?h=1" data-notes-embed="example" title="Secant slopes"></iframe><iframe src="ordinary.html"></iframe></article>',
  );
  runInNewContext(compactEmbedPreviews, {
    html: dom.window.document,
    targetUrl: new URL("https://notes.test/note"),
  });
  assert.equal(
    dom.window.document.querySelectorAll("iframe[data-notes-embed]").length,
    0,
  );
  const link = dom.window.document.querySelector("a")!;
  assert.equal(link.textContent, "Secant slopes");
  assert.equal(link.href, "https://notes.test/_embed/example/?h=1");
  assert.equal(dom.window.document.querySelectorAll("iframe").length, 1);
  const root = await mkdtemp(resolve(tmpdir(), "popover-embeds-"));
  const file = resolve(root, "quartz/components/scripts/popover.inline.ts");
  try {
    await mkdir(resolve(root, "quartz/components/scripts"), {
      recursive: true,
    });
    await writeFile(
      file,
      "      normalizeRelativeURLs(html, targetUrl)\n      appendContent()",
    );
    await installCompactEmbedPreviews(root);
    const first = await readFile(file, "utf8");
    await installCompactEmbedPreviews(root);
    assert.equal(await readFile(file, "utf8"), first);
    assert.ok(
      first.indexOf("frame.replaceWith") < first.indexOf("appendContent"),
    );
  } finally {
    await rm(root, { recursive: true, force: true });
    dom.window.close();
  }
});
