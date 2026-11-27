import { useMemo } from "react";
import katex from "katex";

/** Trusted application formulas; KaTeX's unsafe HTML/URL commands stay disabled.
 * MathML is the accessible representation; visual HTML is aria-hidden by KaTeX.
 * Inline output permits line breaks at relations on narrow cards. */
export function Latex({
  latex,
  display = false,
}: {
  latex: string;
  display?: boolean;
}) {
  const html = useMemo(
    () =>
      katex.renderToString(latex, {
        displayMode: display,
        output: "htmlAndMathml",
        trust: false,
        throwOnError: false,
        maxExpand: 1000,
        maxSize: 10,
      }),
    [latex, display],
  );
  return (
    <span
      className={display ? "latex latex-display" : "latex"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/** Round measured values without presenting scientific notation as a variable e. */
export function latexNumber(value: number, digits = 8): string {
  if (!Number.isFinite(value))
    throw new Error("Expected a finite mathematical value");
  const text = Number(value.toPrecision(digits)).toString();
  return text.replace(
    /e([+-]?\d+)$/,
    (_, exponent) => `\\times 10^{${Number(exponent)}}`,
  );
}
