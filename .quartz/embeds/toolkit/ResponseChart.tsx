import { useEffect, useId, useRef, useState } from "react";

export type ChartAxis = {
  id: string;
  label: string;
  side: "left" | "right";
  format: (value: number) => string;
  domain?: readonly [number, number];
};
export type ChartSeries = {
  id: string;
  label: string;
  axis: string;
  values: readonly number[];
  color: string;
  dash?: string;
};
export type ResponseChartProps = {
  label: string;
  x: {
    values: readonly number[];
    label: string;
    format: (value: number) => string;
  };
  axes: readonly ChartAxis[];
  series: readonly ChartSeries[];
  height?: number;
};

/** Validate the shared sample grid and resolve independent, signed axis domains. */
export function chartDomains({ x, axes, series }: ResponseChartProps) {
  if (
    !x.values.length ||
    x.values.some(
      (v, i) => !Number.isFinite(v) || (i > 0 && v <= x.values[i - 1]),
    )
  )
    throw new Error("Chart x samples must be finite and strictly increasing");
  if (
    !axes.length ||
    axes.length > 2 ||
    new Set(axes.map((a) => a.id)).size !== axes.length ||
    new Set(axes.map((a) => a.side)).size !== axes.length
  )
    throw new Error("Supply one or two uniquely named axes, one per side");
  if (
    !series.length ||
    new Set(series.map((s) => s.id)).size !== series.length ||
    series.some(
      (s) =>
        !axes.some((a) => a.id === s.axis) ||
        s.values.length !== x.values.length ||
        s.values.some((v) => !Number.isFinite(v)),
    )
  )
    throw new Error(
      "Chart series need unique IDs, a known axis and one finite value per x sample",
    );
  return Object.fromEntries(
    axes.map((axis) => {
      const samples = series
        .filter((s) => s.axis === axis.id)
        .flatMap((s) => [...s.values]);
      let lo = 0,
        hi = 0;
      for (const value of samples) {
        lo = Math.min(lo, value);
        hi = Math.max(hi, value);
      }
      const round = (value: number) => {
        if (!value) return 0;
        const scale = 10 ** Math.floor(Math.log10(Math.abs(value)));
        return Math.sign(value) * Math.ceil(Math.abs(value) / scale) * scale;
      };
      const domain = axis.domain ?? [round(lo), hi === lo ? lo + 1 : round(hi)];
      if (!domain.every(Number.isFinite) || domain[0] >= domain[1])
        throw new Error("Axis domain must be finite and increasing");
      return [axis.id, domain];
    }),
  ) as Record<string, readonly [number, number]>;
}

/** Fixed-domain chart: pointer/touch inspection and keyboard navigation, no zoom. */
export function ResponseChart(props: ResponseChartProps) {
  const { x: samples, axes, series, label, height = 280 } = props;
  const domains = chartDomains(props);
  const ref = useRef<HTMLDivElement>(null),
    help = useId();
  const [width, setWidth] = useState(640);
  const [cursor, setCursor] = useState<{
    index: number;
    x: number;
    y: number;
  } | null>(null);
  useEffect(() => {
    const observer = new ResizeObserver(() =>
      setWidth(ref.current!.clientWidth || 640),
    );
    observer.observe(ref.current!);
    setWidth(ref.current!.clientWidth || 640);
    return () => observer.disconnect();
  }, []);
  useEffect(() => setCursor(null), [samples.values]);
  const left = 52,
    right = 52,
    top = 22,
    bottom = 42;
  const plotWidth = Math.max(1, width - left - right),
    plotHeight = height - top - bottom;
  const start = samples.values[0],
    end = samples.values.at(-1)!;
  const span = end - start || 1;
  const x = (value: number) => left + ((value - start) / span) * plotWidth;
  const y = (value: number, axis: string) =>
    top +
    (1 - (value - domains[axis][0]) / (domains[axis][1] - domains[axis][0])) *
      plotHeight;
  const nearest = (value: number) =>
    samples.values.reduce(
      (best, v, i) =>
        Math.abs(v - value) < Math.abs(samples.values[best] - value) ? i : best,
      0,
    );
  const inspect = (clientX: number, clientY: number) => {
    const rect = ref.current!.getBoundingClientRect();
    const localX = Math.max(left, Math.min(width - right, clientX - rect.left));
    setCursor({
      index: nearest(start + ((localX - left) / plotWidth) * span),
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };
  const showAt = (index: number) =>
    setCursor({ index, x: x(samples.values[index]), y: top + 20 });
  const active = Math.min(cursor?.index ?? 0, samples.values.length - 1);
  const axisFor = (s: ChartSeries) => axes.find((a) => a.id === s.axis)!;
  const reading = [
    samples.format(samples.values[active]),
    ...series.map((s) => `${s.label}: ${axisFor(s).format(s.values[active])}`),
  ].join(", ");
  return (
    <div ref={ref} className="relative min-w-0">
      <div
        className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm mb-2"
        aria-label="Chart legend"
      >
        {series.map((s) => (
          <span key={s.id} className="inline-flex items-center gap-2">
            <svg width="24" height="8" aria-hidden="true">
              <path
                d="M0 4H24"
                stroke={s.color}
                strokeWidth="2"
                strokeDasharray={s.dash}
              />
            </svg>
            {s.label}
          </span>
        ))}
      </div>
      <p id={help} className="sr-only">
        {axes.map((a) => `${a.label} uses the ${a.side} axis.`).join(" ")} Use
        left and right arrows to inspect samples; Home and End select the
        endpoints. Numeric readings follow the chart. Zooming is disabled.
      </p>
      <svg
        className="block w-full"
        style={{ height, touchAction: "pan-y" }}
        viewBox={`0 0 ${width} ${height}`}
        role="slider"
        tabIndex={0}
        aria-label={label}
        aria-describedby={help}
        aria-valuemin={start}
        aria-valuemax={end}
        aria-valuenow={samples.values[active]}
        aria-valuetext={reading}
        onPointerMove={(e) => inspect(e.clientX, e.clientY)}
        onPointerDown={(e) => {
          e.currentTarget.focus();
          inspect(e.clientX, e.clientY);
        }}
        onPointerLeave={(e) => {
          if (e.pointerType !== "touch") setCursor(null);
        }}
        onPointerCancel={() => setCursor(null)}
        onFocus={() => {
          if (!cursor) showAt(0);
        }}
        onBlur={() => setCursor(null)}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setCursor(null);
            return;
          }
          const step = Math.max(1, Math.round(samples.values.length / 100));
          let index = active;
          if (e.key === "ArrowRight")
            index = Math.min(samples.values.length - 1, active + step);
          else if (e.key === "ArrowLeft") index = Math.max(0, active - step);
          else if (e.key === "Home") index = 0;
          else if (e.key === "End") index = samples.values.length - 1;
          else return;
          e.preventDefault();
          showAt(index);
        }}
      >
        {axes.map((a) => (
          <text
            key={a.id}
            x={a.side === "left" ? left : width - right}
            y={12}
            textAnchor={a.side === "left" ? "start" : "end"}
            fontSize="11"
            fill="var(--darkgray)"
          >
            {a.label}
          </text>
        ))}
        {[0, 1, 2, 3, 4].map((n) => (
          <g key={n}>
            <line
              x1={left}
              x2={width - right}
              y1={top + (n / 4) * plotHeight}
              y2={top + (n / 4) * plotHeight}
              stroke="var(--lightgray)"
            />
            {axes.map((a) => (
              <text
                key={a.id}
                x={a.side === "left" ? left - 7 : width - right + 7}
                y={top + (n / 4) * plotHeight + 4}
                textAnchor={a.side === "left" ? "end" : "start"}
                fontSize="11"
                fill="var(--darkgray)"
              >
                {a.format(
                  domains[a.id][1] -
                    (n / 4) * (domains[a.id][1] - domains[a.id][0]),
                )}
              </text>
            ))}
            <text
              x={left + (n / 4) * plotWidth}
              y={height - 22}
              textAnchor="middle"
              fontSize="11"
              fill="var(--darkgray)"
            >
              {samples.format(start + (n / 4) * (end - start))}
            </text>
          </g>
        ))}
        <text
          x={width / 2}
          y={height - 3}
          textAnchor="middle"
          fontSize="12"
          fill="var(--darkgray)"
        >
          {samples.label}
        </text>
        {series.map((s) => (
          <path
            key={s.id}
            data-series={s.id}
            d={s.values
              .map(
                (v, i) =>
                  `${i ? "L" : "M"}${x(samples.values[i]).toFixed(2)},${y(v, s.axis).toFixed(2)}`,
              )
              .join(" ")}
            fill="none"
            stroke={s.color}
            strokeWidth="2"
            strokeDasharray={s.dash}
          />
        ))}
        {cursor && (
          <g pointerEvents="none">
            <line
              x1={x(samples.values[active])}
              x2={x(samples.values[active])}
              y1={top}
              y2={height - bottom}
              stroke="var(--gray)"
              strokeDasharray="3 3"
            />
            {series.map((s) => (
              <circle
                key={s.id}
                cx={x(samples.values[active])}
                cy={y(s.values[active], s.axis)}
                r="3"
                fill={s.color}
              />
            ))}
          </g>
        )}
      </svg>
      {cursor && (
        <div
          role="tooltip"
          className="pointer-events-none absolute z-10 rounded-md border border-[var(--gray)] bg-[var(--light)] p-2 text-xs shadow-md"
          style={{
            left: Math.max(0, Math.min(width - 175, cursor.x + 12)),
            top: Math.max(0, Math.min(height - 55, cursor.y + 12)),
            width: 175,
          }}
        >
          <div>{samples.format(samples.values[active])}</div>
          {series.map((s) => (
            <div key={s.id}>
              {s.label}: {axisFor(s).format(s.values[active])}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
