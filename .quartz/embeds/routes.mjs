import {
  readdirSync,
  readFileSync,
  mkdirSync,
  writeFileSync,
  rmSync,
} from "node:fs";
import { resolve, dirname, relative, sep } from "node:path";
export function discoverRoutes(demosRoot, notesRoot) {
  const routes = readdirSync(demosRoot, { recursive: true })
    .filter((p) => String(p).endsWith(`${sep}index.tsx`))
    .map((entry) => {
      const source = String(entry).split(sep).join("/");
      const folder = source.slice(0, -"/index.tsx".length);
      let route;
      if (folder.startsWith("_examples/"))
        route = folder.slice("_examples/".length);
      else {
        const note = dirname(folder),
          example = folder.slice(note.length + 1);
        const text = readFileSync(resolve(notesRoot, note + ".md"), "utf8");
        const frontmatter = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        const permalink = frontmatter?.[1]
          .match(/^permalink:\s*([^\r\n]+)$/m)?.[1]
          .trim()
          .replace(/^["']|["']$/g, "");
        if (!permalink)
          throw new Error(`Embed note needs an explicit permalink: ${note}.md`);
        route = `${permalink}/${example}`;
      }
      if (
        !/^[a-z0-9][a-z0-9/-]*$/.test(route) ||
        route.includes("//") ||
        route.endsWith("/")
      )
        throw new Error(`Unsafe embed route: ${route}`);
      return { route, source };
    })
    .sort((a, b) => a.route.localeCompare(b.route));
  if (new Set(routes.map((r) => r.route)).size !== routes.length)
    throw new Error("Duplicate embed route");
  return routes;
}
export function generateEntries(projectRoot, notesRoot) {
  const root = resolve(projectRoot, ".generated");
  const routes = discoverRoutes(resolve(projectRoot, "demos"), notesRoot);
  rmSync(root, { recursive: true, force: true });
  for (const { route, source } of routes) {
    const file = resolve(root, route, "index.html");
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(
      file,
      `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Interactive notes</title></head><body><main id="root"></main><script type="module" src="/demos/${source.replaceAll("&", "&amp;").replaceAll('"', "&quot;")}"></script></body></html>`,
    );
  }
  return routes.map((r) => resolve(root, r.route, "index.html"));
}
