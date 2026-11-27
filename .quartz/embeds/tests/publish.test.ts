import { test } from "node:test";
import assert from "node:assert/strict";
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  rmSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
import { execFileSync } from "node:child_process";

test("direct Markdown iframe keeps query, relative URLs and SPA bridge when published", () => {
  const note = readFileSync(
    resolve("../../Year 1/ELEC1311 Circuits/RC Transients.md"),
    "utf8",
  );
  const iframe = note.match(
    /<iframe[^>]*data-notes-embed[^>]*><\/iframe>/,
  )?.[0];
  assert.ok(iframe);
  assert.equal(note.match(/data-notes-embed=/g)?.length, 1);
  assert.ok(
    note.indexOf(iframe!) <
      note.indexOf("## Approximating the response in time steps"),
  );
  const root = mkdtempSync(resolve(tmpdir(), "embed-publish-"));
  try {
    mkdirSync(resolve(root, "_embed/y1/elec1311/rc-transients/charging"), {
      recursive: true,
    });
    writeFileSync(
      resolve(root, "_embed/y1/elec1311/rc-transients/charging/index.html"),
      '<script src="shared.hash.js"></script>',
    );
    mkdirSync(resolve(root, "y1/elec1311"), { recursive: true });
    const file = resolve(root, "y1/elec1311/rc-transients.html");
    writeFileSync(file, `<html><body>${iframe}</body></html>`);
    writeFileSync(
      resolve(root, "index.html"),
      "<html><body>Home</body></html>",
    );
    const publish = () => execFileSync(process.execPath, ["publish.mjs", root]);
    publish();
    const html = readFileSync(file, "utf8");
    let src = html
      .match(/<iframe[^>]*src="([^"]+)"/)![1]
      .replaceAll("&amp;", "&");
    assert.match(html, /scrolling="no"/);
    const versioned = new URL(src, "https://example.org/");
    assert.match(versioned.searchParams.get("_v")!, /^[a-f0-9]{12}$/);
    src = src.replace(/&_v=[a-f0-9]{12}/, "");
    assert.equal(
      src,
      "../../_embed/y1/elec1311/rc-transients/charging/?voltage=10&resistance=10&capacitance=0.2",
    );
    for (const base of [
      "https://example.org/",
      "https://example.org/soton-efy-notes/",
    ])
      assert.equal(
        new URL(src, base + "y1/elec1311/rc-transients").href,
        base +
          "_embed/y1/elec1311/rc-transients/charging/?voltage=10&resistance=10&capacitance=0.2",
      );
    assert.match(
      readFileSync(resolve(root, "index.html"), "utf8"),
      /_embed\/host\.[a-f0-9]+\.js/,
    );
    publish();
    assert.equal(readFileSync(file, "utf8"), html);
    writeFileSync(
      resolve(root, "_embed/y1/elec1311/rc-transients/charging/index.html"),
      '<script src="shared.changed.js"></script>',
    );
    publish();
    assert.notEqual(readFileSync(file, "utf8"), html);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
