import { useEffect, useId, useRef, useState } from "react";
import { formatCurrent, formatTime, formatVoltage } from "@spice-ts/ui";
import type { Result } from "./rc";
import { chartPalette } from "./palette";

const niceMaximum = (value: number) => {
  if (value <= 0) return 1;
  const scale = 10 ** Math.floor(Math.log10(value));
  return Math.ceil(value / scale) * scale;
};

export function ResponseChart({
  result,
  theme,
}: {
  result: Result;
  theme: "light" | "dark";
}) {
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
      setWidth(ref.current!.clientWidth),
    );
    observer.observe(ref.current!);
    setWidth(ref.current!.clientWidth || 640);
    return () => observer.disconnect();
  }, []);
  useEffect(() => setCursor(null), [result]);
  const height = 280,
    left = 52,
    right = 52,
    top = 22,
    bottom = 42;
  const plotWidth = Math.max(1, width - left - right),
    plotHeight = height - top - bottom;
  const end = result.time.at(-1)!;
  const vMax = niceMaximum(Math.max(...result.voltage));
  const iMax = niceMaximum(Math.max(...result.current));
  const palette = chartPalette[theme];
  const x = (time: number) => left + (time / end) * plotWidth;
  const y = (value: number, max: number) =>
    top + (1 - value / max) * plotHeight;
  const path = (values: number[], max: number) =>
    values
      .map(
        (value, index) =>
          `${index ? "L" : "M"}${x(result.time[index]).toFixed(2)},${y(value, max).toFixed(2)}`,
      )
      .join(" ");
  const nearest = (time: number) =>
    result.time.reduce(
      (best, t, index) =>
        Math.abs(t - time) < Math.abs(result.time[best] - time) ? index : best,
      0,
    );
  const inspect = (clientX: number, clientY: number) => {
    const rect = ref.current!.getBoundingClientRect();
    const localX = Math.max(left, Math.min(width - right, clientX - rect.left));
    setCursor({
      index: nearest(((localX - left) / plotWidth) * end),
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };
  const showAt = (index: number) =>
    setCursor({ index, x: x(result.time[index]), y: top + 20 });
  const active = cursor?.index ?? 0;
  const reading = `${formatTime(result.time[active])}, capacitor voltage ${formatVoltage(result.voltage[active])}, charging current ${formatCurrent(result.current[active])}`;
  return (
    <div ref={ref} className="relative min-w-0">
      <div
        className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm mb-2"
        aria-label="Chart legend"
      >
        <span className="inline-flex items-center gap-2">
          <svg width="24" height="8" aria-hidden="true">
            <path d="M0 4H24" stroke={palette.voltage} strokeWidth="2" />
          </svg>
          Voltage (V)
        </span>
        <span className="inline-flex items-center gap-2">
          <svg width="24" height="8" aria-hidden="true">
            <path
              d="M0 4H24"
              stroke={palette.current}
              strokeWidth="2"
              strokeDasharray="5 3"
            />
          </svg>
          Current (A)
        </span>
      </div>
      <p id={help} className="sr-only">
        Voltage uses the left axis, current the right. Use left and right arrows
        to inspect time; Home and End select the endpoints. Numeric readings
        follow the chart. Zooming is disabled.
      </p>
      <svg
        className="block w-full"
        style={{ height, touchAction: "pan-y" }}
        viewBox={`0 0 ${width} ${height}`}
        role="slider"
        tabIndex={0}
        aria-label="RC transient readings at time"
        aria-describedby={help}
        aria-valuemin={0}
        aria-valuemax={end}
        aria-valuenow={result.time[active]}
        aria-valuetext={reading}
        onPointerMove={(e) => inspect(e.clientX, e.clientY)}
        onPointerDown={(e) => {
          e.currentTarget.focus();
          inspect(e.clientX, e.clientY);
        }}
        onPointerLeave={(event) => {
          if (event.pointerType !== "touch") setCursor(null);
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
          const step = Math.max(1, Math.round(result.time.length / 100));
          let index = active;
          if (e.key === "ArrowRight")
            index = Math.min(result.time.length - 1, active + step);
          else if (e.key === "ArrowLeft") index = Math.max(0, active - step);
          else if (e.key === "Home") index = 0;
          else if (e.key === "End") index = result.time.length - 1;
          else return;
          e.preventDefault();
          showAt(index);
        }}
      >
        <text x={left} y={12} fontSize="11" fill={palette.voltage}>
          V
        </text>
        <text
          x={width - right}
          y={12}
          fontSize="11"
          textAnchor="end"
          fill={palette.current}
        >
          A
        </text>
        {[0, 1, 2, 3, 4].map((n) => (
          <g key={n}>
            <line
              x1={left}
              x2={width - right}
              y1={top + (n / 4) * plotHeight}
              y2={top + (n / 4) * plotHeight}
              stroke="var(--lightgray)"
            />
            <text
              x={left - 7}
              y={top + (n / 4) * plotHeight + 4}
              textAnchor="end"
              fontSize="11"
              fill="var(--darkgray)"
            >
              {formatVoltage((1 - n / 4) * vMax)}
            </text>
            <text
              x={width - right + 7}
              y={top + (n / 4) * plotHeight + 4}
              fontSize="11"
              fill="var(--darkgray)"
            >
              {formatCurrent((1 - n / 4) * iMax)}
            </text>
            <text
              x={left + (n / 4) * plotWidth}
              y={height - 22}
              textAnchor="middle"
              fontSize="11"
              fill="var(--darkgray)"
            >
              {formatTime((n / 4) * end)}
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
          Time
        </text>
        <path
          data-series="voltage"
          d={path(result.voltage, vMax)}
          fill="none"
          stroke={palette.voltage}
          strokeWidth="2"
        />
        <path
          data-series="current"
          d={path(result.current, iMax)}
          fill="none"
          stroke={palette.current}
          strokeWidth="2"
          strokeDasharray="5 3"
        />
        {cursor && (
          <g pointerEvents="none">
            <line
              x1={x(result.time[active])}
              x2={x(result.time[active])}
              y1={top}
              y2={height - bottom}
              stroke="var(--gray)"
              strokeDasharray="3 3"
            />
            <circle
              cx={x(result.time[active])}
              cy={y(result.voltage[active], vMax)}
              r="3"
              fill={palette.voltage}
            />
            <circle
              cx={x(result.time[active])}
              cy={y(result.current[active], iMax)}
              r="3"
              fill={palette.current}
            />
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
          <div>{formatTime(result.time[active])}</div>
          <div>Voltage: {formatVoltage(result.voltage[active])}</div>
          <div>Current: {formatCurrent(result.current[active])}</div>
        </div>
      )}
    </div>
  );
}
