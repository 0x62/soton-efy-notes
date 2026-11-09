import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import { resolve, dirname, posix } from 'node:path';

export function sourcePermalinks(sources) {
  const routes = {}, owners = new Map();
  const slug = p => p.replace(/\.md$/, '').split('/').map(s => s.replace(/\s/g, '-').replace(/&/g, '-and-').replace(/%/g, '-percent').replace(/[?#]/g, '')).join('/');
  for (const [file, text] of sources) {
    const front = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1];
    const value = front?.match(/^permalink:\s*(.+)$/m)?.[1]?.trim();
    if (!value) continue;
    const target = value.replace(/^['"]|['"]$/g, '').replace(/^\/|\/$/g, '');
    if (!/^[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*$/.test(target)) throw new Error(`Unsupported permalink in ${file}: ${value}`);
    if (owners.has(target)) throw new Error(`Duplicate permalink ${target}: ${file} and ${owners.get(target)}`);
    owners.set(target, file);
    routes[slug(file)] = target;
  }
  const slugs = new Set(sources.map(([file]) => slug(file)));
  for (const [source, target] of Object.entries(routes)) {
    if (slugs.has(target)) throw new Error(`Permalink ${target} collides with an existing page (${source})`);
  }
  return routes;
}

export async function installPermalinks(engine, sources) {
  const routes = sourcePermalinks(sources);
  const navigation = { ...routes };
  for (const [source, target] of Object.entries(routes)) {
    const parts = source.split('/');
    if (parts.at(-1) === parts.at(-2)) navigation[parts.slice(0,-1).join('/') + '/index'] = target;
  }
  await writeFile(resolve(engine, 'permalink-map.json'), JSON.stringify({ routes, navigation }, null, 2));
  const fetchPath = resolve(engine, 'quartz/components/scripts/util.ts');
  let fetchCode = await readFile(fetchPath, 'utf8');
  const oldFetch = 'return redirect ? fetch(`${new URL(redirect, url)}`) : res';
  if (!fetchCode.includes('NOTES_PERMALINK_REDIRECT')) {
    if (!fetchCode.includes(oldFetch)) throw new Error('Pinned Quartz fetchCanonical changed');
    fetchCode = fetchCode.replace(oldFetch, `// NOTES_PERMALINK_REDIRECT: canonical metadata on full pages is not a redirect.
  const refresh = text.match(/http-equiv="refresh"[^>]*content="0;\\s*url=([^\"]+)"/)?.[1]
  if (!redirect || !refresh) return res
  const final = new URL(refresh, url)
  final.search = url.search
  final.hash = url.hash
  url.href = final.href // SPA history and popover assets must use the final location.
  return fetch(url)`);
    await writeFile(fetchPath, fetchCode);
  }
  const explorerPath = resolve(engine, 'quartz/components/Explorer.tsx');
  let explorer = await readFile(explorerPath, 'utf8');
  explorer = explorer.replace(/        <button\s+type="button"\s+class="title-button explorer-toggle desktop-explorer"[\s\S]*?<\/button>/, '{/* Notes tree has no redundant desktop root toggle; mobile menu stays. */}');
  explorer = explorer.replace('import { i18n } from "../i18n"\n', '').replace('({ cfg, displayClass }: QuartzComponentProps)', '({ displayClass }: QuartzComponentProps)');
  await writeFile(explorerPath, explorer);
  const path = resolve(engine, 'quartz/util/path.ts');
  let code = await readFile(path, 'utf8');
  if (!code.includes('NOTES_EMBED_ANCHORS')) {
    const marker = 'if (!isRelativeURL(String(el.properties[attr]))) {';
    if (!code.includes(marker)) throw new Error('Pinned Quartz transclusion rebasing changed');
    code = code.replace(marker, `// NOTES_EMBED_ANCHORS: fragments in embeds belong to the source note.
    if (attr === "href" && String(el.properties[attr]).startsWith("#")) {
      el.properties[attr] = resolveRelative(curBase, newBase) + String(el.properties[attr])
      return
    }
    ${marker}`);
    await writeFile(path, code);
  }
  if (!code.includes('NOTES_PERMALINKS')) {
    const marker = 'export function resolveRelative(current: FullSlug, target: FullSlug | SimpleSlug): RelativeURL {';
    if (!code.includes(marker)) throw new Error('Pinned Quartz resolveRelative signature changed');
    code = 'import notesPermalinks from "../../permalink-map.json"\n' + code.replace(marker, marker + `
  // NOTES_PERMALINKS: preserve source slugs for explorer/search/graph identity,
  // but navigate to the public permalink. Build output is relocated afterwards.
  if (typeof document !== "undefined") {
    const routes = notesPermalinks.navigation as Record<string, string>
    current = (routes[current] ?? current) as FullSlug
    target = (routes[target] ?? routes[target.replace(/\\/$/, "") + "/index"] ?? target) as FullSlug
  }
`);
    await writeFile(path, code);
  }
}

export async function publishPermalinks(out) {
  const { routes, navigation } = JSON.parse(await readFile(resolve(out, '../permalink-map.json'), 'utf8'));
  const files = (await readdir(out, { recursive: true })).filter(f => f.endsWith('.html'));
  const originals = Object.fromEntries(await Promise.all(files.map(async f => [f, await readFile(resolve(out, f), 'utf8')])));
  const base = new URL(`https://${process.env.QUARTZ_BASE_URL ?? '0x62.github.io/soton-efy-notes'}/`);
  function mapped(path) {
    const key = decodeURIComponent(path).replace(/\.html$/, '').replace(/\/$/, '/index');
    return navigation[key] ?? path;
  }
  function rewriteURL(value, old, dest) {
    if (!value || value.startsWith('#') || /^(?:mailto:|tel:|data:|javascript:)/i.test(value)) return value;
    const url = new URL(value.replace(/&amp;/g, '&'), new URL(old, base));
    if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) return value;
    const path = mapped(url.pathname.slice(base.pathname.length));
    // Absolute same-site metadata remains absolute. Relative assets are rebased.
    const suffix = url.search + url.hash;
    if (/^https?:/.test(value)) return new URL(path, base).href + suffix;
    const relative = posix.relative(posix.dirname(dest), path) || '.';
    return (relative.startsWith('.') ? relative : './' + relative) + suffix;
  }
  function relocate(html, old, dest) {
    return html.replace(/\b(href|src|action)="([^"]*)"/g, (_, attr, url) => `${attr}="${rewriteURL(url, old, dest)}"`)
      .replace(/(<meta\b[^>]*(?:property|name)="(?:og:url|twitter:url)"[^>]*content=")([^"]+)(")/g, (_, a, url, b) => a + rewriteURL(url, old, dest) + b)
      .replace(/(<meta\b[^>]*http-equiv="refresh"[^>]*content="0;\s*url=)([^"]+)(")/g, (_, a, url, b) => a + rewriteURL(url, old, dest) + b)
      .replace(/const fetchData = fetch\("([^"]+)"\)/g, (_, url) => `const fetchData = fetch("${rewriteURL(url, old, dest)}")`);
  }
  for (const [file, html] of Object.entries(originals)) {
    // Permalink aliases are replaced below with complete content, not redirects.
    if (Object.values(routes).some(p => p + '.html' === file)) continue;
    await writeFile(resolve(out, file), relocate(html, file, file));
  }
  for (const [source, target] of Object.entries(routes)) {
    const old = source + '.html', dest = target + '.html';
    if (!originals[old]?.includes('data-slug=')) throw new Error(`Missing source page ${old}`);
    await mkdir(dirname(resolve(out, dest)), { recursive: true });
    let html = relocate(originals[old], old, dest);
    const canonical = new URL(target, base).href;
    html = html.replace('</head>', `<link rel="canonical" href="${canonical}"></head>`);
    await writeFile(resolve(out, dest), html);
  }
  for (const [source, target] of Object.entries(navigation)) {
    const file = source + '.html';
    const href = rewriteURL(new URL(target, base).href, file, file);
    const redirect = './' + posix.relative(posix.dirname(file), target);
    const social = (originals[(Object.keys(routes).find(k => routes[k] === target) ?? source) + '.html']?.match(/<meta\b[^>]*(?:property|name)="(?:og:|twitter:)[^"]*"[^>]*>/g) ?? []).join('');
    // Preserve incoming fragment/query on legacy bookmarks, including SPA entry.
    await writeFile(resolve(out, file), `<!doctype html><html><head><meta charset="utf-8">${relocate(social, source + '.html', file)}<link rel="canonical" href="${href}"><meta http-equiv="refresh" content="0;url=${redirect}"><meta name="robots" content="noindex"><script>location.replace(${JSON.stringify(redirect)} + location.search + location.hash)</script></head><body><a href="${href}">Open note</a></body></html>`);
  }
  await writeFile(resolve(out, 'permalinks.json'), JSON.stringify({ routes, navigation }, null, 2));
  console.log(`Published ${Object.keys(routes).length} canonical permalinks and ${Object.keys(navigation).length} legacy redirects`);
}
if (process.argv[1]?.endsWith('/permalinks.mjs')) await publishPermalinks(resolve(process.argv[2]));
