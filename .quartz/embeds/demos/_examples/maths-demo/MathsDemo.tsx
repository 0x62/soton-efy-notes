import { MathsBoard } from "~/toolkit/MathsBoard";
import { Card } from "~/toolkit/ui";
import { useTheme } from "~/toolkit/runtime";
export function MathsDemo() {
  const theme = useTheme();
  const foreground = theme === "dark" ? "#d4d4d4" : "#4e4e4e";
  const axis = {
    strokeColor: foreground,
    ticks: { strokeColor: foreground, label: { strokeColor: foreground } },
  };
  return (
    <Card>
      <h1 className="text-xl font-semibold">Exponential response</h1>
      <p>y = 1 − e⁻ˣ. Drag to pan and scroll to zoom.</p>
      <MathsBoard
        options={{
          boundingbox: [-1, 2, 6, -1],
          axis: true,
          defaultAxes: { x: axis, y: axis },
          grid: true,
        }}
        label="Graph of one minus e to the negative x"
        setup={(board) => {
          board.create("functiongraph", [(x: number) => 1 - Math.exp(-x)], {
            strokeWidth: 2,
            strokeColor: theme === "dark" ? "#7b97aa" : "#284b63",
          });
        }}
      />
    </Card>
  );
}
