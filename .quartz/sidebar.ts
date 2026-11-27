import { Options } from "./quartz/components/Explorer";
import { slugifyFilePath, FilePath } from "./quartz/util/path";
import originalOrder from "./sidebar-order.json";
import friendlyLabels from "./sidebar-labels.json";

// Quartz serializes these functions and runs them in the browser. Embed the
// observed ordering as literals, rather than capturing build-time variables.
const ranks = Object.fromEntries(
  originalOrder.map((path, index) => [
    slugifyFilePath(path as FilePath),
    index,
  ]),
);
const labels = Object.fromEntries(
  Object.entries(friendlyLabels).map(([path, label]) => [slugifyFilePath(path as FilePath), label]),
);
const rootOrder = originalOrder
  .filter((path) => !path.includes("/"))
  .map((path) => slugifyFilePath(path as FilePath));

export const explorerOptions: Partial<Options> = {
  title: "Notes",
  folderDefaultState: "collapsed",
  folderClickBehavior: "collapse",
  useSavedState: true,
  sortFn: new Function(
    "a",
    "b",
    `
    const ranks = ${JSON.stringify(ranks)};
    const key = node => node.slug.replace(/\\/index$/, "");
    const ak = key(a), bk = key(b);
    // A manifest rank takes precedence wherever a teaching sequence is known.
    const diff = (ranks[ak] ?? Infinity) - (ranks[bk] ?? Infinity);
    if (diff) return diff;
    if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1;
    return a.displayName.localeCompare(b.displayName, "en", { numeric: true, sensitivity: "base" });
  `,
  ) as Options["sortFn"],
  mapFn: new Function(
    "node",
    `
    const labels = ${JSON.stringify(labels)};
    const label = labels[node.slug.replace(/\\/index$/, "")];
    if (label) node.displayName = label;
  `,
  ) as Options["mapFn"],
  filterFn: new Function(
    "node",
    `
    const roots = ${JSON.stringify(rootOrder)};
    const key = node.slug.replace(/\\/index$/, "");
    return roots.includes(key.split("/")[0]) &&
      key !== "Year-1/Daily-Brief" && !key.startsWith("Year-1/Daily-Brief/") &&
      !key.split("/").includes("Template");
  `,
  ) as Options["filterFn"],
};
