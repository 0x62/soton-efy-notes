import { useEffect, useRef, useState, useId, type ReactNode } from "react";
import { Card } from "./ui";
import { readNumericParams, writeParams, type NumericRule } from "./params";
import { useTheme } from "./runtime";
import { formatNumber } from "./format";

/** Same shell as CircuitCard; maths controls are composed to suit the lesson. */
export function MathsCard({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title?: string;
  description?: string;
}) {
  return (
    <Card>
      {title && <h1 className="text-xl font-semibold">{title}</h1>}
      {description && <p>{description}</p>}
      {children}
    </Card>
  );
}
export function useMathsModel<S extends Record<string, NumericRule>>(
  schema: S,
) {
  const [values, setValues] = useState(() => {
    const parsed = readNumericParams(schema, location.search);
    for (const key in schema)
      if (schema[key].step === 1) parsed[key] = Math.round(parsed[key]);
    return parsed;
  });
  const theme = useTheme();
  useEffect(() => {
    const timer = setTimeout(
      () =>
        history.replaceState(
          null,
          "",
          "?" + writeParams(values, location.search),
        ),
      150,
    );
    return () => clearTimeout(timer);
  }, [values]);
  const set = (key: keyof S, value: number) => {
    const rule = schema[key];
    if (Number.isFinite(value) && value >= rule.min && value <= rule.max)
      setValues((old) => ({ ...old, [key]: value }));
  };
  return { values, set, theme };
}
export function MathsSlider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
  numeric = false,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  display?: string;
  numeric?: boolean;
}) {
  const id = useId();
  return (
    <div className="min-w-0 space-y-2">
      <div className="flex flex-wrap justify-between gap-2 text-sm">
        <label htmlFor={id}>{label}</label>
        <output className="font-mono tabular-nums" htmlFor={id}>
          {display ?? formatNumber(value)}
        </output>
      </div>
      <input
        id={id}
        className="w-full"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={display ?? formatNumber(value)}
        onChange={(e) => onChange(+e.target.value)}
      />
      {numeric && (
        <input
          type="number"
          aria-label={label + " numeric value"}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => {
            if (e.target.value !== "") onChange(+e.target.value);
          }}
        />
      )}
    </div>
  );
}
export function Choices({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: number;
  options: readonly string[];
  onChange: (v: number) => void;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="sr-only">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((text, i) => (
          <button
            key={text}
            type="button"
            aria-pressed={value === i}
            className="math-choice text-sm"
            onClick={() => onChange(i)}
          >
            {text}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
export function Reading({ children }: { children: ReactNode }) {
  const [announcement, setAnnouncement] = useState(children);
  useEffect(() => {
    const timer = setTimeout(() => setAnnouncement(children), 250);
    return () => clearTimeout(timer);
  }, [children]);
  return (
    <div className="math-reading text-sm">
      <div className="space-y-1" aria-hidden="true">
        {children}
      </div>
      <div
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {announcement}
      </div>
    </div>
  );
}

/** Explicit one-shot animation. Stop on hidden/offscreen, user change or unmount. */
export function Approach({
  value,
  target,
  onChange,
}: {
  value: number;
  target: number;
  onChange: (v: number) => void;
}) {
  const [playing, setPlaying] = useState(false),
    [reduced, setReduced] = useState(false);
  const ref = useRef<HTMLButtonElement>(null),
    callback = useRef(onChange),
    last = useRef(value);
  callback.current = onChange;
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(media.matches);
      if (media.matches) setPlaying(false);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!playing || reduced) return;
    const from = value,
      start = performance.now();
    let frame = 0;
    const stop = () => setPlaying(false);
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 4000),
        next = from + (target - from) * (1 - Math.pow(1 - t, 3));
      last.current = next;
      callback.current(next);
      if (t < 1) frame = requestAnimationFrame(tick);
      else stop();
    };
    const hidden = () => {
      if (document.hidden) stop();
    };
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) stop();
    });
    observer.observe(ref.current!.closest("section") ?? ref.current!);
    const input = (event: Event) => {
      if (event.target !== ref.current) stop();
    };
    document.addEventListener("pointerdown", input, true);
    document.addEventListener("keydown", input, true);
    document.addEventListener("visibilitychange", hidden);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener("pointerdown", input, true);
      document.removeEventListener("keydown", input, true);
      document.removeEventListener("visibilitychange", hidden);
    };
  }, [playing, reduced, target]);
  return (
    <button
      ref={ref}
      type="button"
      className="text-sm"
      disabled={Math.abs(value - target) < 1e-6 && !playing}
      onClick={() => {
        if (reduced) {
          last.current = Math.min(target, value + 0.5);
          onChange(last.current);
        } else setPlaying(!playing);
      }}
    >
      {reduced ? "Step closer" : playing ? "Pause" : "Animate approach"}
    </button>
  );
}
