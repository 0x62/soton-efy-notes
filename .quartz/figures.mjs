// remark-gfm can interpret @2x image filenames as email autolinks before
// Quartz sees their wikilink. Standard Markdown image destinations avoid that.
// Only the disposable build copy changes; vault notes remain untouched.
export function normalizeFigureImages(source, sourcePath, trackedFiles) {
  return source.replace(/^([ \t]*>\s*\[!figure\][^\n]*)$/gim, (line) =>
    line.replace(
      /!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
      (match, target, alias) => {
        const candidates = trackedFiles.filter(
          (path) => path === target || path.endsWith("/" + target),
        );
        if (candidates.length !== 1)
          throw new Error(
            `Figure image ${target} in ${sourcePath}: expected one tracked asset, found ${candidates.length}`,
          );
        // Quartz resolves asset paths from the vault root.
        const relative = candidates[0];
        const alt = alias ?? "";
        return `![${alt.replace(/[\[\]]/g, "")}](${"<" + relative + ">"})`;
      },
    ),
  );
}
