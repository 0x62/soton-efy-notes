import { useEffect, useId, useMemo, useRef, useState } from "react";
import { SchematicView } from "@spice-ts/ui/react";
import { layoutSchematic, type ThemeConfig } from "@spice-ts/ui";
import type { Result } from "./rc";

/** Add keyboard/touch inspection to the pinned UI's pointer-only component tooltips. */
export function CircuitSchematic({
  circuit,
  theme,
}: {
  circuit: Result["circuit"];
  theme: ThemeConfig;
}) {
  const ref = useRef<HTMLDivElement>(null),
    id = useId();
  const components = useMemo(
    () => layoutSchematic(circuit).components,
    [circuit],
  );
  const [tip, setTip] = useState<{
    label: string;
    x: number;
    y: number;
  } | null>(null);
  useEffect(() => {
    const root = ref.current!;
    for (const node of root.querySelectorAll('[role="button"]')) {
      node.removeAttribute("role");
      node.removeAttribute("tabindex");
      node.removeAttribute("aria-pressed");
    }
    for (const pc of components) {
      const node = [...root.querySelectorAll("svg > g[transform]")].find(
        (node) =>
          node.getAttribute("transform") === `translate(${pc.x},${pc.y})`,
      );
      if (!node) throw new Error("SPICE schematic component markup changed");
      const unit =
        pc.component.type === "R"
          ? " Ω"
          : pc.component.type === "V"
            ? " V"
            : "";
      const label = `${pc.component.name}: ${pc.component.displayValue || ""}${unit}`;
      node.setAttribute("data-component", pc.component.name);
      node.setAttribute("data-label", label);
      node.setAttribute("role", "button");
      node.setAttribute("tabindex", "0");
      node.setAttribute("aria-label", label);
      node.setAttribute("aria-describedby", id);
    }
    setTip(null);
  }, [components, id]);
  const show = (
    target: EventTarget | null,
    clientX?: number,
    clientY?: number,
  ) => {
    const group = (target as Element)?.closest?.("[data-component]");
    if (!group) {
      setTip(null);
      return;
    }
    const box = group.getBoundingClientRect(),
      root = ref.current!.getBoundingClientRect();
    setTip({
      label: group.getAttribute("data-label")!,
      x: Math.max(
        0,
        Math.min(
          root.width - 160,
          (clientX ?? box.x + box.width / 2) - root.x + 10,
        ),
      ),
      y: Math.max(0, Math.min(190, (clientY ?? box.y) - root.y + 12)),
    });
  };
  return (
    <div
      ref={ref}
      className="relative"
      onPointerMove={(e) => show(e.target, e.clientX, e.clientY)}
      onPointerLeave={() => setTip(null)}
      onPointerDown={(e) => {
        show(e.target, e.clientX, e.clientY);
        (e.target as Element).closest<SVGElement>("[data-component]")?.focus();
      }}
      onFocus={(e) => show(e.target)}
      onBlur={() => setTip(null)}
      onKeyDown={(e) => {
        if (e.key === "Escape") setTip(null);
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          show(e.target);
        }
      }}
    >
      <div className="schematic-renderer">
        <SchematicView circuit={circuit} theme={theme} height={220} />
      </div>
      {tip && (
        <div
          id={id}
          role="tooltip"
          className="pointer-events-none absolute z-10 rounded-md border border-[var(--gray)] bg-[var(--light)] p-2 text-xs shadow-md"
          style={{ left: tip.x, top: tip.y, maxWidth: 160 }}
        >
          {tip.label}
        </div>
      )}
    </div>
  );
}
