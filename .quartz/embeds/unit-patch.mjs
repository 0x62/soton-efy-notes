// @spice-ts/ui 0.3.1 hardcodes volts for all transient signals. Keep the
// upstream renderer/interactions, but infer A for explicit I(...) probes.
// Fail closed on upgrades so the patch cannot silently stop applying.
export function patchTransientUnits(code) {
  const start = code.indexOf("// src/core/renderer.ts"),
    end = code.indexOf("// src/core/bode-renderer.ts");
  if (start < 0 || end < start)
    throw new Error("SPICE transient renderer boundary changed");
  let part = code.slice(start, end);
  for (const [from, to] of [
    ['unit: "V",', 'unit: s.name.startsWith("I(") ? "A" : "V",'],
    [
      "formatVoltage(tick)",
      '(this.signalStates.length && this.signalStates.every(s => s.name.startsWith("I(")) ? formatCurrent(tick) : formatVoltage(tick))',
    ],
  ]) {
    if (part.split(from).length !== 2)
      throw new Error("SPICE unit patch target changed: " + from);
    part = part.replace(from, to);
  }
  return code.slice(0, start) + part + code.slice(end);
}
export function spiceUnits() {
  return {
    name: "notes-spice-current-units",
    enforce: "pre",
    transform(code, id) {
      if (
        id.includes("/@spice-ts/ui/dist/") &&
        code.includes("// src/core/renderer.ts")
      )
        return { code: patchTransientUnits(code), map: null };
    },
  };
}
