import { useId } from "react";
import { Latex, latexNumber } from "./Latex";
import { polar, phasorExtent, type Complex } from "./phasor";
export type Phasor = { label: string; value: Complex; start?: Complex; color: string };
/** Static complex vectors; angles refer to the positive real axis, never animation time. */
export function PhasorDiagram({ vectors, reference, unit, convention, theme, angleIndex = vectors.length - 1 }: {
  vectors: readonly Phasor[]; reference: string; unit: string;
  convention: "peak" | "RMS"; theme: "light" | "dark"; angleIndex?: number;
}) {
  const id = useId().replace(/:/g, ""), extent = phasorExtent(vectors);
  const ink = theme === "dark" ? "#ebebec" : "#2b2b2b";
  const muted = theme === "dark" ? "#777777" : "#aaaaaa";
  const pos = ({ real, imaginary }: Complex) => [160 + real / extent * 112, 160 - imaginary / extent * 112];
  const angle = vectors[angleIndex] ? polar(vectors[angleIndex].value).degrees : null;
  const theta = (angle ?? 0) * Math.PI / 180;
  const arc = `M194 160 A34 34 0 0 ${theta >= 0 ? 0 : 1} ${160 + 34 * Math.cos(theta)} ${160 - 34 * Math.sin(theta)}`;
  return <figure className="m-0 space-y-3">
    <figcaption className="text-sm">Phasors relative to {reference} ({unit}, {convention})</figcaption>
    <svg viewBox="0 0 320 320" className="block w-full mx-auto" style={{ maxWidth: "24rem" }} role="img"
      aria-label={`Complex plane with positive and negative real and imaginary axes. Angles are relative to ${reference}. Numerical magnitudes and signed phases follow.`}>
      <defs>{vectors.map((v, i) => <marker key={i} id={`${id}-${i}`} markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="10" refX="8" refY="5" orient="auto">
        <path d="M1 1L8 5L1 9" fill="none" stroke={v.color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      </marker>)}</defs>
      <g stroke={muted} strokeWidth="1"><line x1="22" y1="160" x2="298" y2="160" /><line x1="160" y1="22" x2="160" y2="298" /></g>
      <g fill={ink} fontSize="12"><text x="286" y="177">+Re</text><text x="10" y="177">−Re</text><text x="168" y="24">+j</text><text x="168" y="300">−j</text><text x="146" y="176">0</text></g>
      {vectors.map((v, i) => {
        const start = v.start ?? { real: 0, imaginary: 0 };
        const [x1, y1] = pos(start), [x2, y2] = pos({ real: start.real + v.value.real, imaginary: start.imaginary + v.value.imaginary });
        const length = Math.hypot(x2-x1,y2-y1);
        return <g key={i} data-phasor={v.label}><line x1={x1} y1={y1} x2={x2} y2={y2} stroke={v.color} strokeWidth="2.5" markerEnd={length >= 12 ? `url(#${id}-${i})` : undefined} />
          {length > 0 && length < 12 && <circle cx={x2} cy={y2} r="2" fill={v.color} />}</g>;
      })}
      {angle !== null && Math.abs(angle) > 0.05 && <path d={arc} fill="none" stroke={ink} strokeWidth="1.2" />}
      {angle !== null && <text x="24" y="42" fill={ink} fontSize="12" textAnchor="start">{vectors[angleIndex].label}: {angle > 0 ? "+" : ""}{angle.toFixed(1)}°</text>}
    </svg>
    <div className="space-y-2 text-sm" aria-label="Phasor magnitudes and signed phases">
      {vectors.map((v, i) => { const p = polar(v.value); return <div key={i} className="flex flex-wrap items-center gap-2">
        <span style={{ borderTop: `3px solid ${v.color}`, width: 20 }} aria-hidden="true" />
        <span>{v.label}</span><Latex latex={`${latexNumber(Number(p.magnitude.toPrecision(4)))}\\,\\mathrm{${unit}}${p.degrees === null ? "\\quad \\text{(phase undefined)}" : `\\quad \\angle(${p.degrees > 0 ? "+" : ""}${latexNumber(Number(p.degrees.toFixed(2)))}^\\circ)`}`} />
      </div>; })}
    </div>
  </figure>;
}
