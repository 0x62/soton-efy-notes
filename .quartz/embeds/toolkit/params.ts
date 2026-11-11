export type NumericRule = {
  default: number;
  min: number;
  max: number;
  step: number;
  label: string;
  unit: string;
};
export function readNumericParams<S extends Record<string, NumericRule>>(
  rules: S,
  query: string,
): Record<keyof S, number> {
  const params = new URLSearchParams(query);
  return Object.fromEntries(
    Object.keys(rules).map((key) => {
      const raw = params.get(key),
        value = raw?.trim() ? Number(raw) : NaN,
        rule = rules[key];
      return [
        key,
        Number.isFinite(value) && value >= rule.min && value <= rule.max
          ? value
          : rule.default,
      ];
    }),
  ) as Record<keyof S, number>;
}
export function writeParams(values: Record<string, number>, query = "") {
  const params = new URLSearchParams(query);
  Object.entries(values).forEach(([key, value]) => {
    if (!Number.isFinite(value))
      throw new Error(`Non-finite parameter: ${key}`);
    params.set(key, String(value));
  });
  return params.toString();
}
