import { Latex, latexNumber } from "~/toolkit/Latex";
import {
  MathsCard,
  useMathsModel,
  Choices,
  Reading,
} from "~/toolkit/MathsCard";
import { HoleFormula, HolePlot } from "../HolePlot";
import { rule } from "../models";
const schema = { point: rule("Value at two", 0, 0, 2, 1) };
export function Demo() {
  const { values, set, theme } = useMathsModel(schema);
  return (
    <MathsCard>
      <HoleFormula />
      <Choices
        label="Value assigned at x = 2"
        value={values.point}
        options={["Leave the hole", "Fill at 4", "Put the point at 1"]}
        onChange={(x) => set("point", x)}
      />
      <HolePlot
        values={{ distance: 0, point: values.point, samples: false }}
        theme={theme}
      />
      <Reading>
        <p>
          <Latex latex={String.raw`\lim_{x\to2}f(x)=4`} />
        </p>
        <p>
          <Latex
            latex={
              values.point === 0
                ? String.raw`f(2)\text{ is undefined}`
                : `f(2)=${values.point === 1 ? 4 : 1}`
            }
          />
        </p>
        <p>
          {values.point === 1
            ? "The extended function is continuous at 2."
            : "The function is not continuous at 2."}
        </p>
      </Reading>
    </MathsCard>
  );
}
