import { useEffect, useRef } from "react";
import JXG from "jsxgraph";
import "jsxgraph/distrib/jsxgraph.css";
import { Card } from "./ui";
import { useTheme } from "./runtime";
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
export function MathsCard() {
  const theme = useTheme();
  return (
    <Card>
      <h1 className="text-xl font-semibold">Exponential response</h1>
      <p>y = 1 − e⁻ˣ. Drag to pan and scroll to zoom.</p>
      <MathsBoard
        options={{ boundingbox: [-1, 2, 6, -1], axis: true }}
        label="Graph of one minus e to the negative x"
        setup={(board) => {
          board.create("functiongraph", [(x: number) => 1 - Math.exp(-x)], {
            strokeColor: theme === "dark" ? "#7b97aa" : "#284b63",
          });
        }}
      />
    </Card>
  );
}
