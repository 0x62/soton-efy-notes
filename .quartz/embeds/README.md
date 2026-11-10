# Notes embeds — plan and authoring

1. Build independent Vite HTML entries at `/_embed/<route>/index.html`. Import only
   the card each entry needs; Rollup splits shared React/UI modules and hashes assets.
   Use relative asset URLs so root domains and GitHub Pages subpaths both work.
2. Keep React isolated from Quartz/Preact in same-origin iframes. A small host bridge
   sets URLs relative to the site base, forwards theme plus CSS tokens, and resizes
   only known iframe windows. Native `loading=lazy` defers the whole runtime; avoid
   loading every iframe just to defer rendering. Once loaded, keep state on scroll.
   Every iframe still owns a React heap; HTTP caching saves transfers, not execution.
3. Use bounded, finite numeric URL schemas, SI units, defaults and serialization.
   Only validated numbers enter generated netlists. Debounce controls, run SPICE in
   a worker, terminate superseded work and time out stuck simulations.
4. Render schematic using @spice-ts/ui and actual @spice-ts/core transient results.
   Plot capacitor voltage and charging current on one chart with separate axes;
   provide numeric table equivalents for canvas accessibility. No netlist editor.
5. Share Tailwind controls and design tokens. Maths entries import JSXGraph through
   a lifecycle-safe adapter; the circuit must not fetch JSXGraph or its stylesheet.
6. Integrate the first RC example only into the disposable Quartz build copy,
   preserving the Obsidian note. Build embeds after canonical permalink processing.
7. Check simulator values against the analytic solution, URL validation, production
   bundle graphs, root/subpath serving, mobile layouts, theme and SPA cleanup.

Run `npm ci`, `npm test`, `npm run build`. Pass `EMBED_OUT=/absolute/public/_embed`
for deployment. Add an HTML entry under `entries/` and import its component directly.
The build discovers entries; there is no eager registry importing all cards.
`maths-demo` demonstrates the JSXGraph adapter and shared React caching.

The host uses a same-origin, source-checked `notes-embed:v1` postMessage protocol.
It sends only an allowlist of CSS tokens, theme and font family. Standalone embeds
follow system theme unless `theme=light|dark` is supplied. URL values are SI units:
`voltage=10&resistance=10&capacitance=0.2`. Reset restores these lesson defaults.
Hashed assets allow browser/CDN reuse across routes; Pages controls cache headers.
Changing a dependency can invalidate that dependency chunk. Do not set immutable
cache headers on HTML. This toolkit uses native TypeScript SPICE, no WASM backend.

## Integration and extension

The first route is `/_embed/y1/elec1311/rc-transients/charging/`. The iframe
is inserted after the worked mathematics by `.quartz/prepare.mjs`, only in its
build copy. No teaching-note or `publish.css` changes are required.

For another entry, add `entries/<route>/index.html` with a module script importing
`/src/<entry>.tsx`. Import `./style.css` in that entry. Mount its component with `mount()` from `src/runtime.tsx` and
call `useTheme()` once in the card. Reuse `Card`, `Button`, and `Parameter` (number
input plus slider). `MathsBoard` accepts JSXGraph setup/options and frees the board
on unmount. Keep specialised library imports in their entry/card modules.
`readNumericParams(rules, location.search)` is schema-generic; `writeParams()`
serializes numeric values while preserving unrelated query parameters.

In the Quartz build copy, use an iframe with `data-notes-embed="<route>"`, optional
`data-notes-params="voltage=10&resistance=10&capacitance=0.2"`, a descriptive title,
`loading="lazy"`, and an estimated height. `publish.mjs` resolves its URL relative
to each final HTML page. Run it after permalink processing; it is idempotent and
installs the host bridge on all pages so SPA navigation into a note also works.

After the ordinary Quartz build and permalink checks:

```sh
cd .quartz/embeds
npm ci
npm test
EMBED_OUT=/absolute/path/to/quartz/public/_embed npm run build
node --experimental-vm-modules tests/build.mjs /absolute/path/to/quartz/public/_embed
node publish.mjs /absolute/path/to/quartz/public
```

The preview workflow now performs these steps. For standalone development use
`npm run dev`, then open `/y1/elec1311/rc-transients/charging/` or `/maths-demo/`.

## Validation and known limits

- Twelve tests cover defaults/invalid parameters, analytic RC agreement at 0.5, 1,
  2 and 5 time constants across four parameter sets, structured-clone schematic
  rendering, current units, invalid-draft resets at unchanged defaults, and host
  origin/source/height/theme/SPA handling, plus light/dark trace contrast, minimal UI, dual axes and pointer/keyboard tooltips.
- The production-worker smoke test executes the built worker in a browser-like
  VM context, checks returned numerical data and structured cloning, and verifies
  shared runtime imports plus relative asset resolution at root and Pages subpaths.
- Quartz typecheck/build and its existing checks passed: 71 canonical routes,
  73 legacy redirects, 5,183 SPA route pairs, 436 Year 1 heading destinations.
- Live Chromium QA on the public Pages preview verified circuit simulation,
  voltage/resistance/capacitance edits, invalid-draft reset, keyboard sliders,
  keyboard access to the numeric table, theme propagation, and SPA navigation
  away and back. The card fits desktop (823 px inner width), narrow (468 px)
  and phone-size (301 px) frames without horizontal overflow. Native window
  resizing plus browser zoom supplied an effective 333 px phone viewport.
  Light-mode trace contrast and dark JSXGraph axis labels were corrected during QA.
- Local headless-browser launch remains restricted by the workspace OS. For a
  repeatable local browser suite, run `npx playwright install chromium`, then
  `QUARTZ_PUBLIC=/absolute/path/to/quartz/public npm run test:browser` in a normal
  environment, or set `CHROMIUM_PATH` to an existing browser. Live checks were
  performed through the available browser UI; this local suite was not claimed
  as passed. Safari/Firefox and touch-device testing remain future checks.
- The existing Quartz Graph View reports `CanvasRenderer is not yet implemented`
  in the cloud browser after navigation (outside the React iframe); the circuit
  SVG plot renders successfully. Browser-extension metadata errors are also
  unrelated to the embed. No Quartz Graph View change is included here.
- `@spice-ts/ui@0.3.1` hardcodes volts for transient axes/cursors. `unit-patch.mjs`
  applies a narrowly checked build transform so explicit `I(...)` probes use A.
  Tests exercise the patched renderer. An upstream layout change fails the build;
  revisit this patch when upgrading SPICE UI. The RC card uses its own SVG dual-axis
  renderer so it can show both units correctly and avoid chart zoom/scroll handlers.
- Observed gzip sizes: shared React/runtime/UI ≈69 KB, circuit UI ≈23 KB,
  SPICE worker ≈312 KB, maths/JSXGraph ≈259 KB. The circuit HTML does not import
  JSXGraph or its stylesheet. SPICE's published core is a large bundled module;
  it also causes an optional sweep worker to be emitted, although this card never
  requests it. Full device-level tree shaking requires an upstream modular build.
  Vite reports upstream Node-backend externalization, chunk size and JSXGraph eval
  warnings. Native transient execution passes the production-worker test.
- The site palette, font and light/dark state are matched; host CSS tokens are
  forwarded. Browser caching reuses hashed URLs, but each iframe executes its own
  React runtime. Debouncing and worker termination bound simulation work; native
  lazy loading avoids initializing every card at page load. Charts remain mounted
  while recalculating so inputs do not cause large height jumps.

Published with explicit approval to the existing `experiment/quartz-pages` preview
branch and PR #15. No merge or production-domain change was performed.

## RC card presentation

`CircuitCard` accepts optional `title` and `description`; both default to absent.
The compact default shows controls, a netlist-derived schematic and a dual-axis
SVG chart. Voltage is a solid blue trace (left axis); current is a solid amber
trace (right axis), with a visible legend. Charts do not intercept wheel events,
zoom or pan. Pointer/touch inspection puts a tooltip next to the contact point;
arrow keys and Home/End inspect the same data. Escape dismisses tooltips.
`CircuitSchematic` wraps the pinned SPICE SVG with component-name/value tooltips
and focusable component targets; its DOM-shape contract is regression tested.
Numeric readings and simulation status are screen-reader-only. Physical touch
hardware testing remains distinct from DOM pointer-event and browser emulation.

## Reusable circuit API

`CircuitCard<S, R>` owns parameter controls, URL round trips, reset, debouncing,
worker cancellation/timeouts, theme and schematic. Supply `schema`, a stable
`createWorker` factory, and `renderResult(result, values, theme)`; optional
`summary(values)`, title and description default to absent. Workers receive the
schema's values and reply with `{ result }` (including a `circuit` IR) or `{ error }`.
Keep schema and worker factory stable for the lifetime of an embed.

`simulateTransient({ netlist, signals, initial? })` accepts any transient netlist.
Signals specify a unique ID, voltage node/current branch and optional scale.
It returns `{ time, series, circuit }` and disposes the solver even on failure.
Known initial conditions belong to the demo. Other analyses can supply their own
worker/result type without changing CircuitCard.

`ResponseChart` accepts an arbitrary increasing x grid with label/formatter,
one or two named axes with units/formatters and optional domains, and any number
of series referencing those axes. Colors and optional dash styles are supplied
by the caller; both RC traces are solid. Automatic domains include negative data.
The chart has no SPICE, RC, voltage/current or time-specific assumptions.

`readNumericParams(schema, query)` and `writeParams(values, query)` are shared;
there is no global parameter schema or resistance limit. `rc-params.ts` owns the
RC demo's SI-unit ranges. `RCTransientCircuit.tsx` composes the generic pieces,
RC summary, trace mapping and accessible sample table; `rc.ts` owns its netlist,
initial state and current sign convention.

`tests/generic.test.ts` demonstrates a distinct -12 V resistor divider with
10 kΩ/20 kΩ resistors and three signals, verifies analytic divider results, and
checks frequency/gain plotting with explicit signed dB axes. Shared modules are
also checked for accidental imports of the RC demo.
