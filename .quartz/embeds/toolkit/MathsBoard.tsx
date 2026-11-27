import { useEffect, useRef } from "react";
import JXG from "jsxgraph";
import "jsxgraph/distrib/jsxgraph.css";
import type { Board, BoardAttributes } from "jsxgraph";

/** Memoize setup/options in consumers; every board is freed on change/unmount. */
export function MathsBoard({
  setup,
  options,
  label,
}: {
  setup: (board: Board) => void;
  options: Partial<BoardAttributes>;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const board = JXG.JSXGraph.initBoard(ref.current!, {
      showCopyright: false,
      showNavigation: false,
      ...options,
    });
    setup(board);
    return () => JXG.JSXGraph.freeBoard(board);
  }, [setup, options]);
  return (
    <div
      ref={ref}
      className="jxgbox w-full h-80"
      style={{ background: "var(--light)" }}
      aria-label={label}
    />
  );
}
