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
        className="block w-full mx-auto"
        style={{ maxWidth: "24rem" }}
        role="img"
        aria-label={`${realLabel} ${real.toPrecision(4)} volts along the current; ${imaginaryLabel} ${imaginary.toPrecision(4)} volts in quadrature. The diagonal is their source-voltage sum.`}
      >
        <defs>
          {[c.voltage, c.current, theme === "dark" ? "#ebebec" : "#2b2b2b"].map((color, index) => (
            <marker key={color} id={`${id}-${index}`} markerUnits="userSpaceOnUse"
              markerWidth="9" markerHeight="10" refX="8" refY="5" orient="auto">
              <path d="M1 1L8 5L1 9" fill="none" stroke={color}
                strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            </marker>
          ))}
        </defs>
        <line
          x1="40"
          y1={y}
          x2={x}
          y2={y}
          stroke={c.voltage}
          strokeWidth="2.5"
          markerEnd={`url(#${id}-0)`}
        />
        <line
          x1={x}
          y1={y}
          x2={x}
          y2={z}
          stroke={c.current}
          strokeWidth="2.5"
          markerEnd={`url(#${id}-1)`}
        />
        <line
          x1="40"
          y1={y}
          x2={x}
          y2={z}
          stroke="currentColor"
          strokeWidth="2"
          markerEnd={`url(#${id}-2)`}
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
