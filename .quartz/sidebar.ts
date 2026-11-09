import { Options } from "./quartz/components/Explorer";
import { slugifyFilePath, FilePath } from "./quartz/util/path";
import originalOrder from "./sidebar-order.json";

// Quartz serializes these functions and runs them in the browser. Embed the
// observed ordering as literals, rather than capturing build-time variables.
const ranks = Object.fromEntries(
  originalOrder.map((path, index) => [
    slugifyFilePath(path as FilePath),
    index,
  ]),
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
    // Root and the custom electronics sequence follow the original site.
    if (!ak.includes("/") && !bk.includes("/") ||
        ak.startsWith("Foundation-Year/Electricity--and--Electronics/") &&
        bk.startsWith("Foundation-Year/Electricity--and--Electronics/")) {
      const diff = (ranks[ak] ?? 10000) - (ranks[bk] ?? 10000);
      if (diff) return diff;
    }
    if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1;
    return a.displayName.localeCompare(b.displayName, "en", { numeric: true, sensitivity: "base" });
  `,
  ) as Options["sortFn"],
  filterFn: new Function(
    "node",
    `
    const roots = ${JSON.stringify(rootOrder)};
    const key = node.slug.replace(/\\/index$/, "");
    return roots.includes(key.split("/")[0]) &&
      !key.split("/").includes("Template");
  `,
  ) as Options["filterFn"],
};
