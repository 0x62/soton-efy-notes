import { execFileSync } from "node:child_process";
import { mkdir, copyFile, writeFile, readFile } from "node:fs/promises";
import { resolve, dirname, extname } from "node:path";
import { installCompactEmbedPreviews } from "./popover-embeds.mjs";
import { normalizeDisplayMath } from "./math.mjs";
import { installPermalinks } from "./permalinks.mjs";
import { normalizeFigureImages } from "./figures.mjs";
import { fileURLToPath } from "node:url";

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

function withBriefPermalink(path, text) {
  const date = path.match(/^Year 1\/Daily Brief\/(\d{4}-\d{2}-\d{2})\.md$/)?.[1];
  if (!date || /^permalink:/m.test(text)) return text;
  const frontmatter = `permalink: y1/daily-brief/${date}\n`;
  return /^---\r?\n/.test(text)
    ? text.replace(/^---\r?\n/, "---\n" + frontmatter)
    : "---\n" + frontmatter + "---\n\n" + text;
}

// Copy only Git-tracked public source files. Never scan the working directory
// for private files, Obsidian settings, credentials or uncommitted notes.
for (const path of files) {
  const target = resolve(content, path);
  await mkdir(dirname(target), { recursive: true });
  if (extname(path) === ".md") {
    const source = withBriefPermalink(path, await readFile(resolve(root, path), "utf8"));
    await writeFile(
      target,
      normalizeDisplayMath(
        normalizeFigureImages(source, path, files),
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
  "sidebar-labels.json",
  "NotesFooter.tsx",
]) {
  await copyFile(resolve(root, ".quartz", name), resolve(engine, name));
}
// Quartz expects an index at build time. Publishing replaces this stub with the
// rendered README, whose source slug stays intact for the explorer and GitHub link.
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
      .map(async (p) => [p, withBriefPermalink(p, await readFile(resolve(root, p), "utf8"))]),
  ),
);

await installCompactEmbedPreviews(engine);
