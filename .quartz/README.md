# Experimental Quartz publishing

This is an independent GitHub Pages preview. It does not change the Obsidian
vault, `publish.css`, `uni.bl.je`, DNS, or the default branch. Teaching-note
changes are not part of this experiment.

## Deployment

`.github/workflows/quartz-preview.yml` builds pushes to `experiment/quartz-pages`
and deploys them to the repository's GitHub Pages site. Pull requests build and
test without deploying. The `github-pages` environment only grants the deploy
job Pages/OIDC permissions; the build has read-only repository access.

Quartz is pinned to the released **4.5.2**, commit
`4923affa7722dfc751f1074348e6dad214fe0c08`. Its own lockfile is installed using
`npm ci`. This deliberately uses the established v4 TypeScript configuration
and Explorer API rather than the newer v5 plugin migration.

GitHub Pages must use **GitHub Actions** as its source. The workflow publishes
only this experimental branch, never unrelated PR heads. Do not enable a custom
domain for this preview. Before later switching the production site, review the
rendered notes, links, transclusions, diagrams and publishing scope.

## Sidebar

`sidebar-order.json` records every expanded navigation entry observed at
https://uni.bl.je/README on 9 November 2026. `sidebar.ts` reproduces the root
ordering and the custom Circuit Theory → Electronics → AC Theory sequence.
Other sections keep the original folders-first, natural alphabetical order.
New tracked notes in those sections appear automatically. Clippings, templates,
attachments and generated tag pages do not appear in the sidebar. Root-level
additions require an explicit entry in the navigation manifest.

## Content and preview safeguards

`prepare.mjs` copies Git-tracked Markdown and supported assets into a disposable
Quartz checkout, never untracked notes, `.obsidian`, credentials or private
folders. Vault source files and frontmatter are not edited. Figure-title image wikilinks
are normalized only in disposable build copies so @2x filenames render correctly.
Figure styling follows the original publish.css, with centered captions, no box
background or border, and a responsive 40rem maximum width. Existing `permalink`
frontmatter creates alias redirects (including `fy` and `y1`). Obsidian wikilinks,
section transclusions, callouts, KaTeX, syntax highlighting and Mermaid use
Quartz's native support. Referenced attachments retain their source paths.

The home URL redirects to README. The title and footer use Ben’s branding; Google Analytics uses the existing site’s verified `G-D40KX3W54H` property, and the preview has a disallow-all robots file with no sitemap or
RSS. This discourages indexing, but is **not access control**: Pages is public.

The current GitHub notes may be newer than the Obsidian published snapshot.
Missing links already present in the source and renderer differences require
content review; the generator does not silently rewrite teaching material.

## Reproduce locally (Node 22+, npm 10.9.2+)

```sh
git clone https://github.com/jackyzha0/quartz.git .quartz/engine
git -C .quartz/engine checkout 4923affa7722dfc751f1074348e6dad214fe0c08
rm -rf .quartz/engine/content
node .quartz/prepare.mjs
cd .quartz/engine
npm ci
npx tsc --noEmit
npx quartz build
node ../finish.mjs public
node ../social-covers.mjs public
node ../verify.mjs public
# Optional local development server:
npx quartz build --serve
```

The development command rebuilds `index.html`; the deployed post-build redirect
is reapplied by `finish.mjs`. To update the renderer, change the pinned commit in
the workflow and this document, then rerun build, typecheck and browser QA.

To stop the experiment, disable this workflow or stop pushing its branch. Do
not delete or change the production Obsidian site as part of that cleanup.


## Social previews and analytics

`social-covers.mjs` uses Vercel Satori (from the pinned Quartz lockfile) to render
1200×630 SVGs and PNGs for each output page, with its title and section. Bundled
DejaVu fonts and their license keep the build independent of font services.
Open Graph/Twitter tags use content-addressed image URLs; the stock fallback is
also replaced. No external image-rendering service receives the notes.

The Google Analytics measurement ID `G-D40KX3W54H` was verified from the rendered
Google tag script on https://uni.bl.je/README on 9 November 2026. Quartz’s native
GA integration records an initial page view and subsequent SPA navigations,
with automatic duplicate page views disabled. These visits go to the existing
Google Analytics property and may be distinguished by the preview hostname.
No credentials or Analytics account settings are changed. Existing visitor
privacy/consent obligations still apply; this does not install a consent manager.
