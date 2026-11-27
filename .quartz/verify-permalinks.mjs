import assert from 'node:assert/strict';
import { readFile, access, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { publicPath } from './permalinks.mjs';
const out = resolve(process.argv[2]);
const { routes, navigation } = JSON.parse(await readFile(resolve(out, 'permalinks.json'), 'utf8'));
const base = new URL(`https://${process.env.QUARTZ_BASE_URL ?? 'uni.bl.je'}/`);
const covers = JSON.parse(await readFile(resolve(out, 'social-covers.json'), 'utf8'));
const decode = s => s.replace(/&amp;/g, '&');
assert.equal(routes.README, 'index');
assert.equal(navigation.notes, 'index');
const home = await readFile(resolve(out, 'index.html'), 'utf8');
assert(home.includes('These are my notes for'));
assert(home.includes('View on GitHub') && home.includes('/blob/master/README.md'));
assert(home.includes('href="./y1"'));
for (const source of ['notes', 'README']) {
  const legacy = await readFile(resolve(out, source + '.html'), 'utf8');
  assert(legacy.includes('content="0;url=./"'), `${source} must redirect directly to /`);
}
assert.equal(routes['Year-1/Year-1'], 'y1');
assert.equal(routes['Foundation-Year/Foundation-Year'], 'fy');
for (const year of ['fy', 'y1']) {
  assert.equal(navigation[`${year}/index`], year);
  const html = await readFile(resolve(out, year, 'index.html'), 'utf8');
  const refresh = html.match(/http-equiv="refresh" content="0;url=([^"]+)"/)?.[1];
  assert.equal(new URL(refresh, new URL(`${year}/`, base)).href, new URL(year, base).href);
}
const manifest = JSON.parse(await readFile(resolve(out, '../source-manifest.json'), 'utf8'));
assert.equal(Object.keys(routes).length, manifest.filter((path) => path.endsWith('.md')).length,
  'Every tracked published note needs a unique canonical permalink');
assert.equal(navigation['Year-1/ELEC1310-Mathematics/Maths-Formula-Book'],
  'y1/revision/elec1310/formula-book');
assert.equal(routes['Year-1/Daily-Brief/2026-11-26'], 'y1/daily-brief/2026-11-26');
const expectedPractice = {'elec1310': [null, 59], 'elec1311': ['C', 28],
  'elec1312': ['P', 24], 'elec1313': ['D', 29]};
const revision = await readFile(resolve(out, 'y1/revision.html'), 'utf8');
for (const [code, [prefix, count]] of Object.entries(expectedPractice)) {
  const target = `y1/revision/${code}/practice-questions`;
  assert(revision.includes(`href="./revision/${code}/practice-questions"`), `Missing revision link: ${code}`);
  const practice = await readFile(resolve(out, target + '.html'), 'utf8');
  let questions;
  if (code === 'elec1310') {
    const a = practice.indexOf('<h2 id="section-a"');
    const b = practice.indexOf('<h2 id="section-b"');
    assert(a >= 0 && b > a, 'Maths practice must have Section A then Section B');
    const short = practice.slice(a, b);
    const topics = [...short.matchAll(/<h4 id="([^"]+)"[^>]*>/g)];
    const rounds = [...short.matchAll(/<h3 id="round-[123]-20"[^>]*>/g)];
    assert.equal(topics.length, 15, 'Expected five one-mark groups in each of three rounds');
    assert.equal(rounds.length, 3);
    for (let i = 0; i < topics.length; i++) {
      const group = short.slice(topics[i].index, topics[i + 1]?.index ?? short.length);
      const prompt = group.split('class="callout answer is-collapsible is-collapsed"')[0];
      assert.deepEqual([...prompt.matchAll(/<p>\(([a-d])\)/g)].map(match => match[1]), ['a', 'b', 'c', 'd']);
      assert.equal((prompt.match(/<strong>\[1\]<\/strong>/g) ?? []).length, 4);
    }
    const longer = [...practice.matchAll(/<h3 id="([^"]+)"[^>]*>/g)].filter(match => match.index > b);
    assert.equal(longer.length, 44, 'The existing Section B bank must be preserved');
    assert(longer.every(match => !/^m\d{2}-/.test(match[1])), 'Maths titles must not keep M-numbers');
    questions = [
      ...[...practice.matchAll(/<h4 id="([^"]+)"[^>]*>/g)].filter(match => match.index > a && match.index < b),
      ...longer,
    ];
  } else {
    questions = [...practice.matchAll(new RegExp('<h2 id="(' + prefix.toLowerCase() + '[0-9]+)(?:-|")', 'g'))];
  }
  assert.equal(questions.length, count, 'Incorrect question count: ' + code);
  assert.equal(new Set(questions.map(match => match[1])).size, count, 'Duplicate IDs: ' + code);
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
console.log('Verified 140 question groups and their collapsed worked answers, module links, and formula books');

for (const [source, target] of Object.entries(routes)) {
  const page = await readFile(resolve(out, target + '.html'), 'utf8');
  assert(page.includes(`data-slug="${source}"`), `Missing content identity ${target}`);
  assert(!page.includes('http-equiv="refresh"'), `Permalink still redirects: ${target}`);
  assert(page.includes(`rel="canonical" href="${new URL(publicPath(target), base)}"`));
  assert(page.includes(`property="og:url" content="${new URL(publicPath(target), base)}"`));
  assert(page.includes(covers.find(c => c.page === source + '.html').image), `Cover changed: ${target}`);
  assert(page.includes('Ben Lewis</p>'));
  const fetch = page.match(/const fetchData = fetch\("([^"]+)"\)/)?.[1];
  assert.equal(new URL(fetch, new URL(publicPath(target), base)).href, new URL('static/contentIndex.json', base).href);
  for (const match of page.matchAll(/\b(href|src)="([^"]+)"/g)) {
    const url = new URL(decode(match[2]), new URL(publicPath(target), base));
    if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) continue;
    const local = decodeURIComponent(url.pathname.slice(base.pathname.length));
    const key = local.replace(/\.html$/, '').replace(/\/$/, '/index');
    assert(!navigation[key], `Legacy navigation on ${target}: ${local}`);
    if (match[1] === 'src' || /\.(css|js|png|svg|json)$/.test(local)) await access(resolve(out, local));
  }
}
for (const [source, target] of Object.entries(navigation)) {
  const page = await readFile(resolve(out, source + '.html'), 'utf8');
  assert(page.includes(`rel="canonical" href="${new URL(publicPath(target), base)}"`));
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
