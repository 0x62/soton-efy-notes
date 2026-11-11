// Obsidian accepts display delimiters on the same lines as a multi-line
// expression. remark-math requires standalone delimiters for block math.
// Normalize only disposable build copies, outside fenced code blocks.
export function normalizeDisplayMath(source) {
  const fence = /^[ \t]*(`{3,}|~{3,})[^\n]*\n[\s\S]*?^[ \t]*\1[ \t]*(?:\n|$)/gm;
  const normalize = text => text.replace(/^([ \t]{0,3})\$\$([\s\S]*?)\$\$[ \t]*(?=\r?$)/gm,
    (all, indent, math) => `\n${indent}$$\n${math.trim().split('\n').map(line => indent + line.trimStart()).join('\n')}\n${indent}$$\n`);
  let result = '', start = 0;
  for (const match of source.matchAll(fence)) {
    result += normalize(source.slice(start, match.index)) + match[0];
    start = match.index + match[0].length;
  }
  return result + normalize(source.slice(start));
}
