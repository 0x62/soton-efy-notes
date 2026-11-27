/** Common SI formatters and compact numeric text, without demo-specific units. */
export { formatCurrent, formatVoltage, formatTime } from "@spice-ts/ui";
export const formatNumber = (value: number) =>
  Number(value.toPrecision(4)).toString();
