export type Complex = { real: number; imaginary: number };
export function polar({ real, imaginary }: Complex) {
  if (!Number.isFinite(real) || !Number.isFinite(imaginary)) throw new Error("Phasors must be finite");
  const magnitude = Math.hypot(real, imaginary);
  return { magnitude, degrees: magnitude === 0 ? null : Math.atan2(imaginary, real) * 180 / Math.PI };
}
/** One scale for every vector and translated endpoint. Zero has no phase. */
export function phasorExtent(vectors: readonly { value: Complex; start?: Complex }[]) {
  return Math.max(0, ...vectors.flatMap(({ value, start = { real: 0, imaginary: 0 } }) =>
    [Math.hypot(start.real, start.imaginary), Math.hypot(start.real + value.real, start.imaginary + value.imaginary)])) || 1;
}
