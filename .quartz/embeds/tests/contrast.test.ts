import { test } from "node:test";
import assert from "node:assert/strict";
import { chartPalette } from "~/toolkit/palette";
const luminance = (hex: string) => {
  const rgb = hex
    .slice(1)
    .match(/../g)!
    .map((c) => parseInt(c, 16) / 255)
    .map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
};
for (const [mode, palette] of Object.entries(chartPalette)) {
  test(`${mode} chart trace has at least 3:1 non-text contrast`, () => {
    const values = [
      luminance(palette.background),
      luminance(palette.voltage),
    ].sort((a, b) => b - a);
    assert.ok((values[0] + 0.05) / (values[1] + 0.05) >= 3);
    const current = [
      luminance(palette.background),
      luminance(palette.current),
    ].sort((a, b) => b - a);
    assert.ok((current[0] + 0.05) / (current[1] + 0.05) >= 3);
  });
}
