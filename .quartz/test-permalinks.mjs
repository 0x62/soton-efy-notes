import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { sourcePermalinks } from './permalinks.mjs';
const engine = resolve(process.argv[2] ?? '.');
const { routes, navigation } = JSON.parse(await readFile(resolve(engine, 'permalink-map.json')));
const { resolveRelative, normalizeHastElement } = await import(pathToFileURL(resolve(engine, 'quartz/util/path.ts')));
globalThis.document = {};
for (const [source, canonical] of Object.entries(routes)) {
  for (const [target, dest] of Object.entries(navigation)) {
    const url = new URL(resolveRelative(source, target), `https://example.test/notes/${canonical}`);
    assert.equal(url.pathname, '/notes/' + dest);
  }
}
delete globalThis.document;
const { fetchCanonical } = await import(pathToFileURL(resolve(engine, 'quartz/components/scripts/util.ts')));
const calls = [];
globalThis.fetch = async value => {
  const url = new URL(value); calls.push(url.href);
  const file = url.pathname.includes('Year-1/Year-1') ? 'Year-1/Year-1.html' : 'y1.html';
  return new Response(await readFile(resolve(engine, 'public', file)), { headers: {'content-type':'text/html'} });
};
const canonicalURL = new URL('https://local.test/notes/y1');
await fetchCanonical(canonicalURL);
assert.equal(calls.length, 1, 'Full canonical pages must not refetch production');
const old = new URL('https://local.test/notes/Year-1/Year-1?test=1#section');
await fetchCanonical(old);
assert.equal(old.href, 'https://local.test/notes/y1?test=1#section');
assert.equal(calls.at(-1), old.href);
assert.equal(calls.length, 3);
assert.throws(() => sourcePermalinks([['a.md','---\npermalink: b\n---\n'],['b.md','']]));
assert.throws(() => sourcePermalinks([['a.md','---\npermalink: a\n---\n']]));
assert.throws(() => sourcePermalinks([['a.md','---\npermalink: x\n---\n'],['b.md','---\npermalink: x\n---\n']]));
console.log(`Verified ${Object.keys(routes).length * Object.keys(navigation).length} SPA route pairs, canonical fetch isolation, legacy query/anchor redirects, and collision checks`);

const embedded = {type:'element', tagName:'a', properties:{href:'#target'},children:[]};
const rebased = normalizeHastElement(embedded, 'Year-1/Year-1', 'Year-1/ELEC1310-Mathematics/Functions');
assert.equal(rebased.properties.href, '../Year-1/ELEC1310-Mathematics/Functions#target');
assert.equal(embedded.properties.href, '#target', 'Source tree must remain unchanged');
const home = await readFile(resolve(engine, 'public/y1.html'), 'utf8');
assert(!home.includes('class="readermode"'));
assert(!home.includes('desktop-explorer'));
assert(home.includes('mobile-explorer'));
assert(home.includes('class="graph"'));
assert(home.includes('toc-content'));
assert(home.includes('View on GitHub'));
assert(home.includes('https://github.com/0x62/soton-efy-notes/blob/master/Year%201/Year%201.md'));
assert(!home.includes('Powered by'));
assert(!home.includes('Original notes site'));
assert(home.includes('./y1/elec1310/functions#'));
console.log('Verified embedded fragments, source immutability, sidebar controls, and source-file footer');
