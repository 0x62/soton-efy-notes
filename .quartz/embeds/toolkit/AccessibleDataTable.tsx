import { formatNumber } from "./format";
export type DataColumn = {
  label: string;
  values: readonly number[];
  format?: (value: number) => string;
};
/** Select representative rows on any sample grid; callers choose the relevant coordinates. */
export function nearestSampleIndices(
  samples: readonly number[],
  targets: readonly number[],
) {
  if (!samples.length) return [];
  return [
    ...new Set(
      targets.map((target) =>
        samples.reduce(
          (best, value, i) =>
            Math.abs(value - target) < Math.abs(samples[best] - target)
              ? i
              : best,
          0,
        ),
      ),
    ),
  ];
}
export function AccessibleDataTable({
  caption,
  columns,
  indices,
}: {
  caption: string;
  columns: readonly DataColumn[];
  indices?: readonly number[];
}) {
  const length = columns[0]?.values.length ?? 0;
  if (!columns.length || columns.some((c) => c.values.length !== length))
    throw new Error("Table columns must share a sample count");
  const rows = indices ?? Array.from({ length }, (_, i) => i);
  if (rows.some((i) => !Number.isInteger(i) || i < 0 || i >= length))
    throw new Error("Table row index is outside the sample grid");
  return (
    <div className="sr-only">
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i} scope="col">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((i) => (
            <tr key={i}>
              {columns.map((c, j) => (
                <td key={j}>{(c.format ?? formatNumber)(c.values[i])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
