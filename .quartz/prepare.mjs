import { execFileSync } from "node:child_process";
import { mkdir, copyFile, writeFile, readFile } from "node:fs/promises";
import { resolve, dirname, extname } from "node:path";
import { normalizeDisplayMath } from "./math.mjs";
import { installPermalinks } from "./permalinks.mjs";
import { normalizeFigureImages } from "./figures.mjs";
import { fileURLToPath } from "node:url";

function addNoteEmbed(source, path) {
  if (path !== "Year 1/ELEC1311 Circuits/RC Transients.md") return source;
  const marker = "## Approximating the response in time steps";
  if (!source.includes(marker))
    throw new Error("RC embed insertion heading changed");
  return source.replace(
    marker,
    `<iframe data-notes-embed="y1/elec1311/rc-transients/charging" data-notes-params="voltage=10&resistance=10&capacitance=0.2" title="Interactive RC charging circuit, voltage and current" loading="lazy" height="1100" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>\n\n${marker}`,
  );
}

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const engine = resolve(process.argv[2] ?? resolve(root, ".quartz/engine"));
const content = resolve(engine, "content");
const tracked = execFileSync("git", ["ls-files", "-z"], {
  cwd: root,
  encoding: "utf8",
})
  .split("\0")
  .filter(Boolean);
const allowed = new Set([
  ".md",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".svg",
  ".webp",
  ".pdf",
]);
const files = tracked.filter(
  (path) =>
    !path.startsWith(".") &&
    !/^(Private|Coursework)\//.test(path) &&
    !/(^|\/)Template\.md$/.test(path) &&
    allowed.has(extname(path).toLowerCase()),
);

// Copy only Git-tracked public source files. Never scan the working directory
// for private files, Obsidian settings, credentials or uncommitted notes.
for (const path of files) {
  const target = resolve(content, path);
  await mkdir(dirname(target), { recursive: true });
  if (extname(path) === ".md") {
    const source = await readFile(resolve(root, path), "utf8");
    await writeFile(
      target,
      normalizeDisplayMath(
        normalizeFigureImages(addNoteEmbed(source, path), path, files),
      ),
    );
  } else {
    await copyFile(resolve(root, path), target);
  }
}
for (const name of [
  "quartz.config.ts",
  "quartz.layout.ts",
  "sidebar.ts",
  "sidebar-order.json",
  "NotesFooter.tsx",
]) {
  await copyFile(resolve(root, ".quartz", name), resolve(engine, name));
}
// The source README stays untouched and remains first in the sidebar.
await writeFile(
  resolve(content, "index.md"),
  '---\ntitle: "Ben’s Notes"\n---\n\nSee [[README|the notes home page]].\n',
);
await writeFile(
  resolve(engine, "source-manifest.json"),
  JSON.stringify(files, null, 2) + "\n",
);
console.log(`Prepared ${files.length} tracked source files`);

await copyFile(
  resolve(root, ".quartz/custom.scss"),
  resolve(engine, "quartz/styles/custom.scss"),
);

await installPermalinks(
  engine,
  await Promise.all(
    files
      .filter((p) => extname(p) === ".md")
      .map(async (p) => [p, await readFile(resolve(root, p), "utf8")]),
  ),
);
