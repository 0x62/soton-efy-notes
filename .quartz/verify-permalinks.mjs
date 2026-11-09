import assert from 'node:assert/strict';
import { readFile, access, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
const out = resolve(process.argv[2]);
const { routes, navigation } = JSON.parse(await readFile(resolve(out, 'permalinks.json'), 'utf8'));
const base = new URL(`https://${process.env.QUARTZ_BASE_URL ?? '0x62.github.io/soton-efy-notes'}/`);
const covers = JSON.parse(await readFile(resolve(out, 'social-covers.json'), 'utf8'));
const decode = s => s.replace(/&amp;/g, '&');
assert.equal(routes['Year-1/Year-1'], 'y1');
assert.equal(routes['Foundation-Year/Foundation-Year'], 'fy');
for (const [source, target] of Object.entries(routes)) {
  const page = await readFile(resolve(out, target + '.html'), 'utf8');
  assert(page.includes(`data-slug="${source}"`), `Missing content identity ${target}`);
  assert(!page.includes('http-equiv="refresh"'), `Permalink still redirects: ${target}`);
  assert(page.includes(`rel="canonical" href="${new URL(target, base)}"`));
  assert(page.includes(`property="og:url" content="${new URL(target, base)}"`));
  assert(page.includes(covers.find(c => c.page === source + '.html').image), `Cover changed: ${target}`);
  assert(page.includes('Ben Lewis</p>'));
  const fetch = page.match(/const fetchData = fetch\("([^"]+)"\)/)?.[1];
  assert.equal(new URL(fetch, new URL(target, base)).href, new URL('static/contentIndex.json', base).href);
  for (const match of page.matchAll(/\b(href|src)="([^"]+)"/g)) {
    const url = new URL(decode(match[2]), new URL(target, base));
    if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) continue;
    const local = decodeURIComponent(url.pathname.slice(base.pathname.length));
    const key = local.replace(/\.html$/, '').replace(/\/$/, '/index');
    assert(!navigation[key], `Legacy navigation on ${target}: ${local}`);
    if (match[1] === 'src' || /\.(css|js|png|svg|json)$/.test(local)) await access(resolve(out, local));
  }
}
for (const [source, target] of Object.entries(navigation)) {
  const page = await readFile(resolve(out, source + '.html'), 'utf8');
  assert(page.includes(`rel="canonical" href="${new URL(target, base)}"`));
  assert(page.includes('location.search + location.hash'));
}
for (const file of await readdir(out, {recursive:true})) {
  if (!file.endsWith('.html')) continue;
  const page = await readFile(resolve(out, file), 'utf8');
  if (!page.includes('data-slug=')) continue;
  for (const match of page.matchAll(/href="([^"]+)"/g)) {
    const url = new URL(decode(match[1]), new URL(file, base));
    if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) continue;
    const key = decodeURIComponent(url.pathname.slice(base.pathname.length)).replace(/\.html$/, '').replace(/\/$/, '/index');
    assert(!navigation[key], `Old path linked from ${file}: ${key}`);
  }
}
console.log(`Verified ${Object.keys(routes).length} canonical content pages, assets, covers, metadata and ${Object.keys(navigation).length} legacy redirects; all static navigation uses permalinks`);
