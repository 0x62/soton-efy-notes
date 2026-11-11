import { useEffect, useRef, useState, type ReactNode } from "react";
import JXG, { type Board, type Curve } from "jsxgraph";
import "jsxgraph/distrib/jsxgraph.css";
export type Bounds = [number, number, number, number];
export const mathsPalette = {
  light: {
    ink: "#334155",
    blue: "#1d4ed8",
    amber: "#92400e",
    green: "#047857",
    red: "#b91c1c",
    fill: "#faf8f8",
    grid: "#d8d5d5",
  },
  dark: {
    ink: "#d4d4d4",
    blue: "#60a5fa",
    amber: "#fbbf24",
    green: "#34d399",
    red: "#f87171",
    fill: "#161618",
    grid: "#393639",
  },
};
export type Palette = typeof mathsPalette.light;
export type Scene<V> = (
  board: Board,
  values: () => V,
  palette: Palette,
) => void;
/** Keep one board as controls change; defer initialization until near viewport. */
export function MathsPlot<V>({
  values,
  theme,
  scene,
  bounds,
  label,
  children,
  equalScale = false,
}: {
  values: V;
  theme: "light" | "dark";
  scene: Scene<V>;
  bounds: Bounds;
  label: string;
  children?: ReactNode;
  equalScale?: boolean;
}) {
  const host = useRef<HTMLDivElement>(null),
    board = useRef<Board | null>(null),
    latest = useRef(values),
    box = useRef(bounds);
  latest.current = values;
  box.current = bounds;
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(host.current!);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!ready) return;
    const c = mathsPalette[theme];
    const axis = {
      strokeColor: c.ink,
      highlight: false,
      ticks: {
        strokeColor: c.ink,
        minorTicks: 0,
        minTicksDistance: 55,
        label: { strokeColor: c.ink, fontSize: 11 },
        drawLabels: true,
      },
    };
    const b = JXG.JSXGraph.initBoard(host.current!, {
      boundingbox: box.current,
      axis: false,
      // All lesson interaction is in semantic controls; let touch gestures scroll the note.
      registerEvents: false,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: {
        wheel: false,
        pinchHorizontal: false,
        pinchVertical: false,
        factorX: 1,
        factorY: 1,
      },
      keepaspectratio: equalScale,
      showInfobox: false,
      renderer: "svg",
    });
    board.current = b;
    b.suspendUpdate();
    const axisX = () =>
      box.current[0] <= 0 && box.current[2] >= 0
        ? 0
        : box.current[0] + 0.12 * (box.current[2] - box.current[0]);
    const axisY = () =>
      box.current[3] <= 0 && box.current[1] >= 0
        ? 0
        : box.current[3] + 0.12 * (box.current[1] - box.current[3]);
    b.create(
      "axis",
      [
        [0, axisY],
        [1, axisY],
      ],
      axis,
    );
    b.create(
      "axis",
      [
        [axisX, 0],
        [axisX, 1],
      ],
      axis,
    );
    scene(b, () => latest.current, c);
    b.unsuspendUpdate();
    const resize = new ResizeObserver(() => {
      const { width, height } = host.current!.getBoundingClientRect();
      if (width > 0 && height > 0) {
        b.resizeContainer(width, height, true);
        b.setBoundingBox(box.current, equalScale);
      }
    });
    resize.observe(host.current!);
    return () => {
      resize.disconnect();
      board.current = null;
      JXG.JSXGraph.freeBoard(b);
    };
  }, [ready, scene, theme, equalScale]);
  useEffect(() => {
    board.current?.setBoundingBox(bounds, equalScale);
  }, [...bounds, equalScale]);
  useEffect(() => {
    board.current?.update();
  }, [values]);
  return (
    <figure className="math-figure">
      <div className="math-board" ref={host} aria-hidden="true" />
      <figcaption className="sr-only">{label}</figcaption>
      {children}
    </figure>
  );
}
export function graph(
  b: Board,
  f: (x: number) => number,
  color: string,
  from = -100,
  to = 100,
  dashed = false,
) {
  return b.create("functiongraph", [f, from, to], {
    strokeColor: color,
    strokeWidth: 2.5,
    dash: dashed ? 2 : 0,
    highlight: false,
    fixed: true,
    numberPointsHigh: 1200,
    numberPointsLow: 600,
  }) as Curve;
}
export function point(
  b: Board,
  x: () => number,
  y: () => number,
  color: string,
  fill: string,
  name = "",
  open = false,
) {
  return b.create("point", [x, y], {
    name,
    size: open ? 5 : 4,
    layer: open ? 10 : 9,
    strokeWidth: 2,
    strokeColor: color,
    fillColor: open ? fill : color,
    fixed: true,
    highlight: false,
    withLabel: !!name,
    label: {
      strokeColor: color,
      fontSize: 12,
      offset: name === "P" ? [-18, -18] : [8, 12],
    },
  });
}
export function segment(
  b: Board,
  a: () => [number, number],
  z: () => [number, number],
  color: string,
  dashed = false,
) {
  return b.create("segment", [a, z], {
    strokeColor: color,
    strokeWidth: 1.5,
    dash: dashed ? 2 : 0,
    highlight: false,
    fixed: true,
  });
}
export function band(
  b: Board,
  x1: () => number,
  y1: () => number,
  x2: () => number,
  y2: () => number,
  color: string,
) {
  return b.create(
    "polygon",
    [
      [x1, y1],
      [x2, y1],
      [x2, y2],
      [x1, y2],
    ],
    {
      fillColor: color,
      fillOpacity: 0.09,
      highlight: false,
      borders: {
        strokeColor: color,
        strokeWidth: 1,
        dash: 2,
        highlight: false,
      },
      vertices: { visible: false },
      hasInnerPoints: false,
    },
  );
}
export function Legend({
  items,
  theme,
}: {
  items: readonly (readonly [string, keyof Palette, boolean?])[];
  theme: "light" | "dark";
}) {
  return (
    <div
      className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs"
      aria-label="Graph legend"
    >
      {items.map(([label, color, dashed]) => (
        <span className="inline-flex items-center gap-2" key={label}>
          <span
            aria-hidden="true"
            style={{
              borderTop: `3px ${dashed ? "dashed" : "solid"} ${mathsPalette[theme][color]}`,
              width: 22,
              height: 0,
            }}
          />
          {label}
        </span>
      ))}
    </div>
  );
}
