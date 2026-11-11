import { PhasorTriangle } from "~/toolkit/PhasorTriangle";
import { CircuitCard } from "~/toolkit/CircuitCard";
import { Latex, latexNumber as n } from "~/toolkit/Latex";
import { schema, simulate, phasors, type Result } from "./rl";
import { schematic } from "./schematic";
import { RLResult } from "./RLResult";
import { degrees } from "../models";
export function RLVoltageDivider() {
  return (
    <CircuitCard<typeof schema, Result>
      schema={schema}
      simulate={simulate}
      schematicLayout={schematic}
      renderResult={(result, v, theme) => {
        const p = phasors(v);
        return (
          <>
            <PhasorTriangle
              real={p.resistorPeak}
              imaginary={p.inductorPeak}
              realLabel="Vᵣ"
              imaginaryLabel="Vₗ"
              theme={theme}
            />
            <div className="space-y-2 text-sm">
              <p>
                <Latex
                  latex={String.raw`Z=${n(v.resistance)}+j${n(p.reactance)}\,\Omega`}
                />
              </p>
              <p>
                <Latex
                  latex={String.raw`\underline I=\frac{20\angle(-15^\circ)}{Z}\approx ${n(p.currentPeak, 5)}\angle(${n(degrees(p.resistorPhase), 5)}^\circ)\,\mathrm A`}
                />
              </p>
              <p>
                <Latex
                  latex={String.raw`\underline V_R\approx ${n(p.resistorPeak, 5)}\angle(${n(degrees(p.resistorPhase), 5)}^\circ)\,\mathrm V`}
                />
              </p>
              <p>
                <Latex
                  latex={String.raw`\underline V_L\approx ${n(p.inductorPeak, 5)}\angle(${n(degrees(p.inductorPhase), 5)}^\circ)\,\mathrm V`}
                />
              </p>
              <p>
                <Latex
                  latex={String.raw`\underline V_R+\underline V_L=20\angle(-15^\circ)\,\mathrm V`}
                />{" "}
                (peak phasors)
              </p>
            </div>
            <RLResult result={result} v={v} theme={theme} />
          </>
        );
      }}
    />
  );
}
