import {
  readFile,
  writeFile,
  mkdir,
  readdir,
  copyFile,
} from "node:fs/promises";
import { resolve, dirname, posix } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { createHash } from "node:crypto";

const out = resolve(process.argv[2] ?? ".quartz/engine/public");
const sourceDir = dirname(fileURLToPath(import.meta.url));
const require = createRequire(resolve(out, "../package.json"));
const satori = require("satori").default;
const sharp = require("sharp");
const base = `https://${process.env.QUARTZ_BASE_URL ?? "0x62.github.io/soton-efy-notes"}`;
const content = JSON.parse(
  await readFile(resolve(out, "static/contentIndex.json"), "utf8"),
);
const fonts = await Promise.all(
  [
    ["DejaVuSans.ttf", 400],
    ["DejaVuSans-Bold.ttf", 700],
  ].map(async ([file, weight]) => ({
    name: "Notes Sans",
    weight,
    style: "normal",
    data: await readFile(resolve(sourceDir, "fonts", file)),
  })),
);
const escape = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
const box = (style, children) => ({
  type: "div",
  props: { style: { display: "flex", ...style }, children },
});

function card(title, category) {
  return box(
    {
      width: "100%",
      height: "100%",
      background: "#f6f5f1",
      color: "#173748",
      fontFamily: "Notes Sans",
      flexDirection: "column",
      padding: "62px 76px",
      position: "relative",
    },
    [
      box({
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 16,
        background: "#557f8c",
      }),
      box({
        position: "absolute",
        right: -70,
        bottom: -125,
        width: 420,
        height: 420,
        border: "2px solid #dde5e4",
        borderRadius: 210,
      }),
      box({
        position: "absolute",
        right: -20,
        bottom: -75,
        width: 320,
        height: 320,
        border: "2px solid #dde5e4",
        borderRadius: 160,
      }),
      box(
        {
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        },
        [
          box({ fontSize: 30, fontWeight: 700 }, "Ben’s Notes"),
          box(
            { fontSize: 19, color: "#557f8c", letterSpacing: 2 },
            "ENGINEERING",
          ),
        ],
      ),
      box(
        { marginTop: 66, fontSize: 23, color: "#557f8c", fontWeight: 400 },
        category,
      ),
      box(
        {
          marginTop: 22,
          maxWidth: 1020,
          fontSize: title.length > 65 ? 55 : title.length > 40 ? 64 : 76,
          fontWeight: 700,
          lineHeight: 1.13,
          letterSpacing: -2,
          flexGrow: 1,
          alignItems: "flex-start",
        },
        title,
      ),
      box(
        {
          borderTop: "1px solid #d4dedd",
          paddingTop: 24,
          justifyContent: "space-between",
          fontSize: 19,
          color: "#526b75",
        },
        [
          box({}, "Aerospace Electronic Engineering"),
          box({}, "University of Southampton"),
        ],
      ),
    ],
  );
}

const folderLabels = new Map();
for (const [slug, data] of Object.entries(content)) {
  const slugs = slug.split("/");
  const parts = data.filePath.replace(/^content\//, "").split("/");
  for (let i = 1; i < slugs.length; i++) {
    folderLabels.set(slugs.slice(0, i).join("/"), parts.slice(0, i));
  }
}

const manifest = [];
const generated = new Set();
await mkdir(resolve(out, "static/social"), { recursive: true });
for (const entry of (await readdir(out, { recursive: true }))
  .filter((e) => e.endsWith(".html"))
  .sort()) {
  const path = resolve(out, entry);
  let html = await readFile(path, "utf8");
  const slug = entry.slice(0, -5);
  const canonical = html.match(
    /<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/,
  )?.[1];
  const canonicalSlug = canonical
    ? decodeURIComponent(
        new URL(canonical, "https://notes.invalid/" + entry).pathname,
      )
        .replace(/^\//, "")
        .replace(/\.html$/, "")
    : undefined;
  const effectiveSlug = content[slug] ? slug : (canonicalSlug ?? slug);
  const data = content[effectiveSlug];
  const home = effectiveSlug === "README" || effectiveSlug === "index";
  const folder = slug.endsWith("/index")
    ? folderLabels.get(slug.slice(0, -6))
    : undefined;
  const title = home
    ? "Engineering notes"
    : (data?.title ??
      folder?.at(-1) ??
      decode(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? "Ben’s Notes"));
  const originalPath = data?.filePath?.replace(/^content\//, "");
  const category = home
    ? "Ideas, explanations & worked examples"
    : folder
      ? folder.slice(0, -1).join(" · ") || "Engineering notes"
      : originalPath?.includes("/")
        ? posix.dirname(originalPath).split("/").join(" · ")
        : slug.includes("/")
          ? slug.split("/").slice(0, -1).join(" · ").replaceAll("-", " ")
          : "Engineering notes";
  const id = createHash("sha256")
    .update(JSON.stringify(["notes-cover-v1", title, category]))
    .digest("hex")
    .slice(0, 16);
  const image = `static/social/${id}.png`;
  const svgPath = `static/social/${id}.svg`;
  if (!generated.has(id)) {
    const svg = await satori(card(title, category), {
      width: 1200,
      height: 630,
      fonts,
    });
    await writeFile(resolve(out, svgPath), svg);
    await sharp(Buffer.from(svg)).png().toFile(resolve(out, image));
    generated.add(id);
  }
  // Replace all stock image tags, including Quartz’s placeholder and its alt text.
  html = html.replace(
    /<meta\b[^>]*(?:property|name)="(?:og:image(?::[^"]*)?|twitter:image(?::[^"]*)?)"[^>]*>/g,
    "",
  );
  const url = `${base}/${image}`;
  const metadata = `<meta property="og:image" content="${url}"><meta property="og:image:url" content="${url}"><meta property="og:image:type" content="image/png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="${escape(title + " — Ben’s Notes")}"><meta name="twitter:image" content="${url}"><meta name="twitter:image:alt" content="${escape(title + " — Ben’s Notes")}">`;
  html = html.replace("</head>", `${metadata}</head>`);
  if (!html.includes('name="twitter:card"'))
    html = html.replace(
      "</head>",
      '<meta name="twitter:card" content="summary_large_image"></head>',
    );
  html = html.replace(
    /<meta\b[^>]*(?:property|name)="(?:og:title|twitter:title)"[^>]*>/g,
    "",
  );
  html = html.replace(
    "</head>",
    `<meta property="og:title" content="${escape(title)}"><meta name="twitter:title" content="${escape(title)}"></head>`,
  );
  await writeFile(path, html);
  manifest.push({
    page: entry,
    title,
    category,
    image,
    svg: svgPath,
    width: 1200,
    height: 630,
  });
}
await writeFile(
  resolve(out, "social-covers.json"),
  JSON.stringify(manifest, null, 2) + "\n",
);
console.log(
  `Generated ${manifest.length} per-page Satori social covers with bundled fonts`,
);

const homeCover = manifest.find((item) => item.page === "README.html");
await copyFile(
  resolve(out, homeCover.image),
  resolve(out, "static/og-image.png"),
);
