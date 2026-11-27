import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

// Runs on the detached parsed document, before popover content enters the DOM.
export const compactEmbedPreviews = `
      // notes: do not instantiate interactive iframes inside hover previews
      html.querySelectorAll('iframe[data-notes-embed]').forEach((frame) => {
        const link = html.createElement('a')
        link.href = frame.getAttribute('src') ?? targetUrl.href
        link.textContent = frame.getAttribute('title') ?? 'Interactive example'
        frame.replaceWith(link)
      })`;
export async function installCompactEmbedPreviews(engine) {
  const path = resolve(engine, "quartz/components/scripts/popover.inline.ts");
  const source = await readFile(path, "utf8");
  if (source.includes("// notes: do not instantiate")) return;
  const marker = "      normalizeRelativeURLs(html, targetUrl)";
  if (source.split(marker).length !== 2)
    throw new Error("Quartz popover structure changed");
  await writeFile(path, source.replace(marker, marker + compactEmbedPreviews));
}
