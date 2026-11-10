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
6. Author iframes directly in teaching notes. Build embeds after canonical
   permalink processing and rewrite their URLs for the deployment base.
7. Check simulator values against the analytic solution, URL validation, production
   bundle graphs, root/subpath serving, mobile layouts, theme and SPA cleanup.

Run `npm ci`, `npm test`, `npm run build`. Pass `EMBED_OUT=/absolute/public/_embed`
for deployment. Add `demos/<note path without .md>/<demo>/index.tsx`.
The build generates HTML entries from these files and the note’s permalink; there
is no eager registry importing all cards.
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
is authored directly after the worked mathematics in the Markdown note.
`prepare.mjs` has no demo-specific insertion logic.

For another entry, mirror the actual note directories under `demos/`, including
spaces and capitalization, and add a demo folder with `index.tsx`. Import the
shared `toolkit/style.css` and mount the component with `toolkit/runtime.tsx`;
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

`CircuitCard<S, R>` owns parameter controls, URL round trips, reset, theme and
schematic. Supply `schema`, a stable `simulate(values, signal)` function and
`renderResult(result, values, theme)`; optional `summary(values)`, title and
description default to absent. `useSimulation` handles debounce, timeout and stale
results. `runWorker` owns construction, error propagation, cancellation and
termination; `runTransientWorker` supplies the shared SPICE worker. Demos only
build requests. Other analyses may use the same transport with their own worker.

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

## Source layout and filesystem routes

- `toolkit/`: shared UI, charts, maths board, formats, accessible table, parameters,
  worker transport/lifecycle, simulation and iframe runtime.
- `demos/Year 1/ELEC1311 Circuits/RC Transients/charging/`: RC component, schema,
  netlist/request builder and mounting entry, matching the actual teaching note.
- `demos/_examples/maths-demo/`: standalone toolkit example, preserving its URL.
- `.generated/`: ignored HTML entries regenerated by Vite from `routes.mjs`.

`RC Transients.md` declares `permalink: y1/elec1311/rc-transients`, so the adjacent
`charging/index.tsx` becomes `/_embed/y1/elec1311/rc-transients/charging/`.
Adding another demo needs no route registry or hand-written HTML. Note-associated
demos require an explicit note permalink; missing notes, unsafe routes and route
collisions fail the build. Keeping that permalink stable preserves URLs when note
folders are renamed. Changing a permalink intentionally changes the route and
requires a separately planned redirect. `_examples` is reserved for demos without
a teaching-note association and strips that prefix from their public path.
Generated entries use ordinary multi-page Vite builds, retaining per-entry tree
shaking, relative URLs and shared hashed chunks; no client router loads every demo.
Restart the dev server after adding or moving demo folders or changing permalinks.

`AccessibleDataTable` takes arbitrary labeled columns, optional formatters and
selected row indices, renders scoped column headers and is screen-reader-only.
`nearestSampleIndices` is shared; the choice of six time constants remains RC
logic. `formatNumber` and SI formatters live in `toolkit/format.ts`. Tests exercise
a frequency/gain table, worker success/error/abort/clone-failure cleanup and an
independent note/permalink route, in addition to the resistor-divider simulation.

## Imports and direct Markdown embeds

`~` resolves to `.quartz/embeds`, the React project root, in Vite and TypeScript.
The `tsx` test runner reads the same tsconfig paths. Use imports such as
`~/toolkit/CircuitCard` and `~/toolkit/format`; keep local sibling imports relative.

The initial experiment injected the iframe into Quartz’s disposable note copy to
avoid editing the Obsidian source. This was not a Quartz requirement. The iframe
now lives directly in the Markdown, where its placement is visible and editable.
Obsidian documents native iframe HTML: https://obsidian.md/help/embed-web-pages.
The note supplies an absolute published `src` so Obsidian can load it; it needs
network access, and without the website host bridge it uses system theme and its
fixed initial height. Native Obsidian rendering has not been verified here.

Quartz preserves the iframe and its data attributes. `publish.mjs` generically
rewrites `data-notes-embed` URLs relative to each output page and preserves the
query in `src` (legacy `data-notes-params` remains supported). Thus local hosting,
root domains and GitHub Pages subpaths stay same-origin. The host script remains
on every page for SPA navigation, theme propagation and automatic resizing.
The absolute Obsidian fallback must be updated if the published site moves.

## RL complex voltage division

`demos/Year 1/ELEC1311 Circuits/AC Impedance/voltage-division/` implements the
note's 20 V peak, −15° source, 60 Ω resistor and j100 Ω inductor. Since the note
specifies reactance rather than frequency, defaults use 50 Hz and 318.31 mH.
Controls vary resistance, inductance and frequency. The
source's cosine phase stays at −15°. Both solid voltage traces share one axis.

The shared transient worker now supports differential voltage probes via
`reference`. V_R = V(in) − V(out), V_L = V(out) − V(0), following passive polarity.
The demo initializes inductor current to the analytical periodic solution, then
SPICE integrates two cycles with at most T/400 steps. This suppresses switch-on
transients without a long warm-up and keeps phasor comparison meaningful. The
source uses SIN phase +75°, equivalent to COS phase −15°. Tests compare all
samples with signed analytic waveforms, KVL and the note's amplitudes/phases,
including low/high-reactance control extremes. Initial samples are explicitly
supplied, as with the RC demo. Existing notes and RC behavior stay independent.

### Teaching-note prose

Do not overexplain demo controls or interface use. Readers can infer how inputs,
sliders and reset work. Keep surrounding prose to essential physical assumptions,
units, polarity and interpretation that are not evident from the figure.

### Authored schematic layouts

`CircuitCard.schematicLayout` optionally supplies a `SchematicLayout` for a demo;
`CircuitSchematic.layout` exposes the same hook directly. Components, pins and
wires must describe the same electrical nets as the simulation. The RL demo uses
this to place the normal resistor and inductor horizontally with ground after L.

`patch-spice-ui.mjs` adds a small opt-in layout hook to `@spice-ts/ui@0.3.1`, which
exports layout types but does not accept authored layouts. All upstream symbols
and default automatic layouts remain unchanged. The idempotent install/build/test
hook checks the pinned version and exact code; review it when upgrading. Tests
check rendered path endpoints and the connected downward ground wire.

The RL example fixes the source at the worked example's 20 V peak; only R, L and
frequency are adjustable.

## Maths cards and Limits & Continuity

`MathsCard` uses the same `Card` shell as circuits, with optional headings and no
mandatory inputs. Compose `MathsSlider` (slider-only by default, optional numeric
input), `Choices`, `Reading` and `Approach` as the lesson needs. `useMathsModel`
uses the shared bounded URL-parameter API; integer choices are normalized.
`Reading` debounces screen-reader announcements while the visible values update.

`MathsPlot` accepts a typed scene, values and bounding box. Scenes use callbacks
to read current values, so moving controls updates one JSXGraph board rather than
recreating it. A resize observer fits the container. Initialization is deferred
until near the viewport; cleanup releases the board. Graphs are visual companions
to semantic readings and keyboard controls, with no wheel zoom or panning that
would intercept scrolling through notes. `Approach` is opt-in, one-shot animation;
it stops when offscreen/hidden and becomes a discrete step with reduced motion.

The twelve entries under `demos/Year 1/ELEC1310 Mathematics/Limits & Continuity/`
cover nearby values, secants, one-sided limits, limit laws, factorisation,
rationalisation, squeezing, sin(x)/x, asymptotes, continuity, IVT and epsilon-delta.
Each entry imports only its scene, with shared JSXGraph/runtime chunks. Notes
contain direct lazy iframes; no build-time content injection is involved.

Pedagogical invariants: excluded points stay open; oscillation sequences are
exact; poles have separate branches; trig angles are radians with the inequality
restricted to its valid domain; IVT promises existence rather than uniqueness;
epsilon-delta uses an analytic bound and a strict interior counterexample.
Finite graphs are not proofs. Hidden high-frequency curve portions are explicitly
identified. Tests check these models, controls, routing and production isolation.

Quartz hover previews replace demo iframes with their titled links before inserting
preview content, avoiding duplicate React/JSXGraph instances in hidden popovers.

### Lesson progression and iframe sizing

The opening quotient uses one approach action and a visible value table. The same
`HolePlot` and original fraction return in continuity and epsilon–delta; the
piecewise continuity example and slope-two proof remain in the notes as worked
extensions. Put explanations in the lesson rather than adding question panels or
controls without a clear mathematical purpose.

`installEmbedSizing` observes the intrinsic `#root` box independently of theme
and React error-boundary lifecycle. A same-origin, parent-window handshake enables
`overflow: clip`; the host sets `scrolling="no"` and the reported content height.
Resize, disclosure and font changes trigger measurement; unchanged heights are
not reposted. Zero-width hidden cards are ignored and remeasured when opened.
Host messages must match both origin and the currently mounted iframe window.
The published iframe URL includes a content hash of its HTML entry so a new note
cannot silently load a stale card. React, JSXGraph and other hashed chunks remain
shared and cacheable.
