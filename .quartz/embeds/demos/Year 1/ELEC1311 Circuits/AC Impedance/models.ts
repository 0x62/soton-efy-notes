export const radians = (degrees: number) => (degrees * Math.PI) / 180;
export const degrees = (radians: number) => (radians * 180) / Math.PI;
export const rms = (peak: number, square: boolean) =>
  square ? peak : peak / Math.sqrt(2);
export const projection = (theta: number) => 20 * Math.cos(radians(theta - 15));
export function rlc(omega: number) {
  const R = 30,
    L = 0.065,
    C = 40e-6,
    peak = 12;
  const xl = omega * L,
    xc = 1 / (omega * C),
    x = xl - xc;
  const magnitude = Math.hypot(R, x),
    angle = Math.atan2(x, R);
  return {
    R,
    L,
    C,
    peak,
    xl,
    xc,
    x,
    magnitude,
    angle,
    currentPeak: peak / magnitude,
    currentPhase: radians(15) - angle,
  };
}
export const rlGain = (ratio: number) => ratio / Math.hypot(1, ratio);
export const rlPhase = (ratio: number) => Math.atan2(1, ratio);
