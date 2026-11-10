import assert from "node:assert/strict";
import { readFile, access, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const out = resolve(process.argv[2] ?? ".quartz/engine/public");
const index = JSON.parse(
  await readFile(resolve(out, "static/contentIndex.json"), "utf8"),
);
const home = await readFile(resolve(out, "README.html"), "utf8");
assert(
  !home.includes("Experimental Quartz preview"),
  "Old preview banner remains",
);
assert(!home.includes("· Quartz preview"), "Old preview title remains");
assert(home.includes("Ben Lewis</p>"), "Copyright attribution missing");
assert(home.includes("data-data-fns="), "Explorer configuration missing");
assert(
  !Object.keys(index).some((path) =>
    /(^|\/)(Private|\.obsidian|Template)(\/|$)/.test(path),
  ),
);
for (const slug of [
  "README",
  "Year-1/Year-1",
  "Foundation-Year/Foundation-Year",
  "Year-1/ELEC1311-Circuits/AC-Impedance",
  "Year-1/ELEC1313-Digital-Systems/Logic--and--Latches",
]) {
  assert(index[slug], `Expected page missing: ${slug}`);
  await access(resolve(out, slug + ".html"));
}
for (const alias of ["fy.html", "y1.html"]) await access(resolve(out, alias));
assert(
  (await readFile(resolve(out, "robots.txt"), "utf8")).includes("Disallow: /"),
);
const decode = (text) =>
  text
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
const opts = JSON.parse(decode(home.match(/data-data-fns="([^"]+)"/)[1]));
const sort = new Function(`return (${opts.sortFn})`)();
const filter = new Function(`return (${opts.filterFn})`)();
const node = (slug, name, isFolder = false) => ({
  slug,
  displayName: name,
  isFolder,
});
const roots = [
  node("Academic-Writing", "Academic Writing"),
  node("SI-Units", "SI Units"),
  node("Useful-Resources", "Useful Resources"),
  node("Year-1/index", "Year 1", true),
  node("Foundation-Year/index", "Foundation Year", true),
  node("README", "README"),
  node("Unsorted-Notes/index", "Unsorted Notes", true),
];
assert.deepEqual(
  roots.sort(sort).map((n) => n.displayName),
  [
    "README",
    "Foundation Year",
    "Year 1",
    "Unsorted Notes",
    "Useful Resources",
    "SI Units",
    "Academic Writing",
  ],
);
const prefix = "Foundation-Year/Electricity--and--Electronics/";
assert.deepEqual(
  [
    node(prefix + "AC-Theory-(1)", "AC Theory (1)"),
    node(prefix + "Electronics-(1)", "Electronics (1)"),
    node(prefix + "Circuit-Theory-(1)", "Circuit Theory (1)"),
  ]
    .sort(sort)
    .map((n) => n.displayName),
  ["Circuit Theory (1)", "Electronics (1)", "AC Theory (1)"],
);
assert(filter(node("Year-1/ELEC1310-Mathematics/New-Topic", "New Topic")));
assert(!filter(node("Clippings/index", "Clippings", true)));
assert(!filter(node("tags/index", "tags", true)));
assert(!filter(node("index", "index")));
console.log(
  `Verified ${Object.keys(index).length} content pages, root/custom sidebar order, aliases and preview safeguards`,
);

assert(
  (await readFile(resolve(out, "index.html"), "utf8")).includes(
    'rel="canonical" href="./README.html"',
  ),
  "SPA home redirect missing canonical target",
);

const arithmetic = await readFile(
  resolve(out, "Year-1/ELEC1313-Digital-Systems/Computer-Arithmetic.html"),
  "utf8",
);
assert(!arithmetic.includes("![["), "Unrendered figure image wikilinks");
assert(
  arithmetic.includes("Screenshot-2026-09-22-at-09.09.06@2x.png"),
  "Retina figure image missing",
);

let imageReferences = 0;
for (const entry of await readdir(out, { recursive: true })) {
  if (!entry.endsWith(".html")) continue;
  const html = await readFile(resolve(out, entry), "utf8");
  for (const match of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
    const src = decode(match[1]);
    if (/^(?:[a-z]+:|\/\/)/i.test(src)) continue;
    const path = decodeURIComponent(
      new URL(src, "https://notes.invalid/" + entry).pathname,
    );
    await access(resolve(out, "." + path));
    imageReferences++;
  }
}
console.log(`Verified ${imageReferences} local image references`);

const covers = JSON.parse(
  await readFile(resolve(out, "social-covers.json"), "utf8"),
);
assert(covers.length > 90, "Missing per-page social covers");
for (const cover of covers) {
  const html = await readFile(resolve(out, cover.page), "utf8");
  const png = await readFile(resolve(out, cover.image));
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
  assert(
    html.includes(cover.image),
    `Social metadata missing for ${cover.page}`,
  );
  assert(
    !html.includes(
      'content="https://0x62.github.io/soton-efy-notes/static/og-image.png"',
    ),
    "Stock image metadata remains",
  );
  assert.equal(
    (html.match(/property="og:image"/g) ?? []).length,
    1,
    "Duplicate image metadata",
  );
}
const postscript = await readFile(resolve(out, "postscript.js"), "utf8");
assert(postscript.includes("G-D40KX3W54H"), "Verified GA tag missing");
assert(postscript.includes("send_page_view"), "SPA analytics setup missing");
console.log(
  `Verified ${covers.length} social-cover metadata/image pairs and existing GA measurement ID`,
);

const homeSocial = covers.find((item) => item.page === "README.html");
assert.equal(
  covers.find((item) => item.page === "index.html").image,
  homeSocial.image,
);
assert.equal(
  covers.find((item) => item.page === "fy.html").image,
  covers.find((item) => item.page === "Foundation-Year/Foundation-Year.html")
    .image,
);
assert.deepEqual(
  await readFile(resolve(out, "static/og-image.png")),
  await readFile(resolve(out, homeSocial.image)),
);

assert(/<ul\b[^>]*aria-label="Notes navigation"[^>]*>/.test(home), 'Named keyboard-scrollable explorer missing');
assert(/<ul\b[^>]*tabindex="0"[^>]*>/.test(home), 'Explorer keyboard focus missing');
const sidebarStyles = await readFile(resolve(out, 'index.css'), 'utf8');
assert(sidebarStyles.includes('scrollbar-gutter:stable'), 'Bounded sidebar scroll styles missing');
console.log('Verified focusable notes navigation and sidebar scroll stylesheet');
