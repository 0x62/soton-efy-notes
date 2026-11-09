import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { resolve } from "node:path";

const out = resolve(process.argv[2] ?? ".quartz/engine/public");
const index = JSON.parse(
  await readFile(resolve(out, "static/contentIndex.json"), "utf8"),
);
const home = await readFile(resolve(out, "README.html"), "utf8");
assert(home.includes("Experimental Quartz preview"), "Preview banner missing");
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
