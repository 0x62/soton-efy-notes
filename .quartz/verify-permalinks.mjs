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
const manifest = JSON.parse(await readFile(resolve(out, '../source-manifest.json'), 'utf8'));
assert.equal(Object.keys(routes).length, manifest.filter((path) => path.endsWith('.md')).length,
  'Every tracked published note needs a unique canonical permalink');
assert.equal(navigation['Year-1/ELEC1310-Mathematics/Maths-Formula-Book'],
  'y1/revision/elec1310/formula-book');
assert.equal(routes['Year-1/Daily-Brief/2026-11-26'], 'y1/daily-brief/2026-11-26');
const expectedPractice = {'elec1310': ['M', 44], 'elec1311': ['C', 28],
  'elec1312': ['P', 24], 'elec1313': ['D', 29]};
const revision = await readFile(resolve(out, 'y1/revision.html'), 'utf8');
for (const [code, [prefix, count]] of Object.entries(expectedPractice)) {
  const target = `y1/revision/${code}/practice-questions`;
  assert(revision.includes(`href="./revision/${code}/practice-questions"`), `Missing revision link: ${code}`);
  const practice = await readFile(resolve(out, target + '.html'), 'utf8');
  const questions = [...practice.matchAll(new RegExp(`<h2 id="(${prefix.toLowerCase()}[0-9]+)(?:-|")`, 'g'))];
  assert.equal(questions.length, count, `Incorrect question count: ${code}`);
  assert.equal(new Set(questions.map((match) => match[1])).size, count, `Duplicate IDs: ${code}`);
  for (let i = 0; i < questions.length; i++) {
    const section = practice.slice(questions[i].index, questions[i + 1]?.index ?? practice.length);
    assert.equal((section.match(/class="callout answer is-collapsible is-collapsed"/g) ?? []).length,
      1, `Expected one collapsed answer for ${questions[i][1]}`);
    assert(/class="callout-content">[\s\S]*?<\/(?:p|pre|table|div)>/.test(section),
      `Missing answer content: ${questions[i][1]}`);
  }
  assert(!practice.includes('class="katex-error"'), `Unrendered equation: ${code}`);
  if (code === 'elec1310' || code === 'elec1311') {
    assert(revision.includes(`href="./revision/${code}/formula-book"`), `Missing formula book: ${code}`);
    const book = await readFile(resolve(out, `y1/revision/${code}/formula-book.html`), 'utf8');
    assert(book.includes('class="katex"') && !book.includes('class="katex-error"'), `Formula rendering: ${code}`);
  }
}
console.log('Verified 125 question headings and their collapsed worked answers, module links, and formula books');

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
