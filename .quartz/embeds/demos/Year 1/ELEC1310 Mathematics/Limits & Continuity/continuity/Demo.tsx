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
        <p>The nearby limit is always 4.</p>
        <p>
          {values.point === 0
            ? "f(2) is undefined: the function is not continuous at 2."
            : values.point === 1
              ? "Assigning f(2) = 4 makes the extended function continuous at 2."
              : "f(2) = 1 does not match the limit: the function is still discontinuous."}
        </p>
      </Reading>
    </MathsCard>
  );
}
