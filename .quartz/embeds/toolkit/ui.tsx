import { useEffect, useState, type ReactNode } from "react";
import type { NumericRule } from "./params";
export function Card({ children }: { children: ReactNode }) {
  return (
    <section className="rounded-xl border border-[var(--lightgray)] p-4 sm:p-6 space-y-5">
      {children}
    </section>
  );
}
export function Button({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}
export function Parameter({
  name,
  rule,
  value,
  onChange,
  resetVersion = 0,
}: {
  name: string;
  rule: NumericRule;
  value: number;
  onChange: (v: number) => void;
  resetVersion?: number;
}) {
  const [draft, setDraft] = useState(String(value));
  // Reset must discard invalid drafts even when the accepted value is unchanged.
  useEffect(() => setDraft(String(value)), [value, resetVersion]);
  const valid =
    draft.trim() !== "" &&
    Number.isFinite(Number(draft)) &&
    +draft >= rule.min &&
    +draft <= rule.max;
  return (
    <div className="min-w-0 space-y-2">
      <label className="block text-sm font-medium" htmlFor={name}>
        {rule.label} ({rule.unit})
      </label>
      <input
        className="w-full"
        id={name}
        type="number"
        min={rule.min}
        max={rule.max}
        step="any"
        value={draft}
        aria-invalid={!valid}
        aria-describedby={name + "-help"}
        onChange={(e) => {
          const s = e.target.value;
          setDraft(s);
          if (
            s.trim() &&
            Number.isFinite(+s) &&
            +s >= rule.min &&
            +s <= rule.max
          )
            onChange(+s);
        }}
      />
      <input
        className="w-full"
        type="range"
        aria-label={rule.label + " slider"}
        min={rule.min}
        max={rule.max}
        step={rule.step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
      />
      <p id={name + "-help"} className="text-xs">
        {valid
          ? `${rule.min}–${rule.max} ${rule.unit}`
          : "Enter a value within the range."}
      </p>
    </div>
  );
}
