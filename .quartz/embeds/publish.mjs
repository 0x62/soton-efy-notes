import { readFile, writeFile, readdir } from "node:fs/promises";
import { resolve, dirname, relative } from "node:path";
import { createHash } from "node:crypto";
const out = resolve(process.argv[2] || "../engine/public");
const host = await readFile(new URL("./host.js", import.meta.url));
const name = `host.${createHash("sha256").update(host).digest("hex").slice(0, 12)}.js`;
await writeFile(resolve(out, "_embed", name), host);
for (const file of await readdir(out, { recursive: true })) {
  if (!file.endsWith(".html") || file.startsWith("_embed/")) continue;
  const path = resolve(out, file);
  let html = await readFile(path, "utf8");
  html = html.replace(
    /<script[^>]*src="[^"]*\/_embed\/host\.[a-f0-9]+\.js"[^>]*><\/script>/g,
    "",
  );
  const prefix = relative(dirname(path), out).replaceAll("\\", "/") || ".";
  // Version the small HTML entry, while all iframes retain shared hashed assets.
  const versions = new Map();
  for (const match of html.matchAll(/data-notes-embed="([a-z0-9/-]+)"/g)) {
    const entry = await readFile(
      resolve(out, "_embed", match[1], "index.html"),
    );
    versions.set(
      match[1],
      createHash("sha256").update(entry).digest("hex").slice(0, 12),
    );
  }
  html = html.replace(
    /<iframe([^>]*?)data-notes-embed="([a-z0-9/-]+)"([^>]*?)>/g,
    (_, a, route, b) => {
      const attributes = a + b;
      const source = attributes
        .match(/\s+src="([^"]*)"/)?.[1]
        ?.replaceAll("&amp;", "&");
      const raw =
        attributes
          .match(/data-notes-params="([^"]*)"/)?.[1]
          ?.replaceAll("&amp;", "&") ??
        (source ? new URL(source, "https://notes.invalid/").search : "");
      const params = new URLSearchParams(raw);
      params.set("_v", versions.get(route));
      const query = params.toString().replaceAll("&", "&amp;");
      a = a.replace(/\s+scrolling="[^"]*"/g, "");
      b = b.replace(/\s+scrolling="[^"]*"/g, "");
      return `<iframe${a.replace(/\s+src="[^"]*"/g, "")}data-notes-embed="${route}"${b.replace(/\s+src="[^"]*"/g, "")} scrolling="no" src="${prefix}/_embed/${route}/${query ? "?" + query : ""}">`;
    },
  );
  html = html.replace(
    "</body>",
    `<script src="${prefix}/_embed/${name}" defer></script></body>`,
  );
  await writeFile(path, html);
}
