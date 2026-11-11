import { chartPalette } from "./palette";
import { PhasorDiagram } from "./PhasorDiagram";
/** Voltage addition with current as the 0-degree reference. */
export function PhasorTriangle({ real, imaginary, realLabel, imaginaryLabel, theme }: {
  real: number; imaginary: number; realLabel: string; imaginaryLabel: string; theme: "light" | "dark";
}) {
  const c = chartPalette[theme];
  return <PhasorDiagram reference="current (0°)" unit="V" convention="peak" theme={theme} vectors={[
    { label: realLabel, value: { real, imaginary: 0 }, color: c.voltage },
    { label: imaginaryLabel, start: { real, imaginary: 0 }, value: { real: 0, imaginary }, color: c.current },
    { label: "Vₛ", value: { real, imaginary }, color: theme === "dark" ? "#ebebec" : "#2b2b2b" },
  ]} />;
}
