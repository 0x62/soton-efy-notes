import { writeFile, readFile, readdir, copyFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { resolve } from "node:path";

const out = resolve(process.argv[2] ?? ".quartz/engine/public");
await writeFile(
  resolve(out, "index.html"),
  `<!doctype html><html lang="en"><head>
<meta charset="utf-8"><link rel="canonical" href="./README.html"><meta name="robots" content="noindex,nofollow">
<meta http-equiv="refresh" content="0;url=./README.html"><title>Ben’s Notes</title>
</head><body><a href="./README.html">Open Ben’s Notes</a></body></html>\n`,
);
await writeFile(resolve(out, "robots.txt"), "User-agent: *\nDisallow: /\n");
await writeFile(resolve(out, ".nojekyll"), "");

// Pages/CDN/browser caches can otherwise mix newly deployed HTML with old CSS.
// A content-addressed stylesheet keeps every page on the matching design.
const css = await readFile(resolve(out, "index.css"));
const cssName = `index.${createHash("sha256").update(css).digest("hex").slice(0, 12)}.css`;
await copyFile(resolve(out, "index.css"), resolve(out, cssName));
for (const entry of await readdir(out, { recursive: true })) {
  if (!entry.endsWith(".html")) continue;
  const path = resolve(out, entry);
  const html = await readFile(path, "utf8");
  await writeFile(
    path,
    html.replace(/(href="[^"]*)index\.css"/g, `$1${cssName}"`),
  );
}

// Runtime routing must be deployed atomically with the new HTML too.
for (const name of ['prescript', 'postscript']) {
  const js = await readFile(resolve(out, name + '.js'));
  const hashed = `${name}.${createHash('sha256').update(js).digest('hex').slice(0, 12)}.js`;
  await copyFile(resolve(out, name + '.js'), resolve(out, hashed));
  for (const entry of await readdir(out, { recursive: true })) {
    if (!entry.endsWith('.html')) continue;
    const path = resolve(out, entry);
    await writeFile(path, (await readFile(path, 'utf8')).replaceAll(name + '.js"', hashed + '"'));
  }
}
