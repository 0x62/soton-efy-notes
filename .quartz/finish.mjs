import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const out = resolve(process.argv[2] ?? ".quartz/engine/public");
await writeFile(
  resolve(out, "index.html"),
  `<!doctype html><html lang="en"><head>
<meta charset="utf-8"><meta name="robots" content="noindex,nofollow">
<meta http-equiv="refresh" content="0;url=./README.html"><title>Ben’s Notes · Quartz preview</title>
</head><body><a href="./README.html">Open Ben’s Notes</a></body></html>\n`,
);
await writeFile(resolve(out, "robots.txt"), "User-agent: *\nDisallow: /\n");
await writeFile(resolve(out, ".nojekyll"), "");
