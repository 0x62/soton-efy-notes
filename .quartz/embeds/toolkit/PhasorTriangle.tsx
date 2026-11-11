import { useId } from "react";
import { chartPalette } from "./palette";
/** Head-to-tail addition of real and imaginary phasor components.
 * Values share units and a common reference; this never rotates with time. */
export function PhasorTriangle({
  real,
  imaginary,
  realLabel,
  imaginaryLabel,
  theme,
}: {
  real: number;
  imaginary: number;
  realLabel: string;
  imaginaryLabel: string;
  theme: "light" | "dark";
}) {
  const id = useId().replace(/:/g, ""),
    c = chartPalette[theme];
  const scale = 140 / Math.max(1, Math.abs(real), Math.abs(imaginary));
  const x = 40 + real * scale,
    y = imaginary >= 0 ? 180 : 40,
    z = y - imaginary * scale;
  return (
    <figure className="m-0">
      <figcaption className="text-sm">
        Voltage phasors relative to current (V, peak)
      </figcaption>
      <svg
        viewBox="0 0 300 230"
        className="w-full max-w-sm mx-auto"
        role="img"
        aria-label={`${realLabel} ${real.toPrecision(4)} volts along the current; ${imaginaryLabel} ${imaginary.toPrecision(4)} volts in quadrature. The diagonal is their source-voltage sum.`}
      >
        <defs>
          <marker
            id={id}
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto-start-reverse"
          >
            <path d="M0 0L6 3L0 6Z" fill="context-stroke" />
          </marker>
        </defs>
        <line
          x1="40"
          y1={y}
          x2={x}
          y2={y}
          stroke={c.voltage}
          strokeWidth="2.5"
          markerEnd={`url(#${id})`}
        />
        <line
          x1={x}
          y1={y}
          x2={x}
          y2={z}
          stroke={c.current}
          strokeWidth="2.5"
          markerEnd={`url(#${id})`}
        />
        <line
          x1="40"
          y1={y}
          x2={x}
          y2={z}
          stroke="currentColor"
          strokeWidth="2"
          markerEnd={`url(#${id})`}
        />
        <g fill="currentColor" fontSize="13">
          <text x={(40 + x) / 2} y={y + 20} textAnchor="middle">
            {realLabel}
          </text>
          <text x={x + 9} y={(y + z) / 2}>
            {imaginaryLabel}
          </text>
          <text x={(40 + x) / 2 - 15} y={(y + z) / 2 - 10}>
            Vₛ
          </text>
          <text x="20" y={y + 4}>
            0
          </text>
        </g>
      </svg>
    </figure>
  );
}
