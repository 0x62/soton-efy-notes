import { Latex, latexNumber } from "~/toolkit/Latex";
import {
  MathsCard,
  useMathsModel,
  Choices,
  Reading,
} from "~/toolkit/MathsCard";
import { MathsPlot, graph, point, band, type Scene } from "~/toolkit/MathsPlot";
import { correctBisectionHalf, rule, cubic, bracket, n } from "../models";
const schema = {
  iteration: rule("Bisection steps", 0, 0, 12, 1),
  mode: rule("Function", 0, 0, 1, 1),
};
type V = { iteration: number; mode: number };
const scene: Scene<V> = (b, v, c) => {
  const a = () => (v().mode === 0 ? bracket(v().iteration).a : 1),
    z = () => (v().mode === 0 ? bracket(v().iteration).b : 2);
  band(
    b,
    a,
    () => -1.5,
    z,
    () => 5.5,
    c.green,
  );
  graph(b, (x) => (v().mode === 0 ? cubic(x) : NaN), c.blue, 0.8, 2.2);
  graph(b, (x) => (v().mode === 1 ? -1 : NaN), c.blue, 0.8, 1.4);
  graph(b, (x) => (v().mode === 1 ? 5 : NaN), c.blue, 1.4, 2.2);
  for (const y of [-1, 5]) {
    const p = point(
      b,
      () => 1.4,
      () => y,
      c.blue,
      c.fill,
      "",
      y === -1,
    );
    p.setAttribute({ visible: () => v().mode === 1 });
  }
  point(
    b,
    () => (a() + z()) / 2,
    () => (v().mode === 0 ? cubic((a() + z()) / 2) : NaN),
    c.red,
    c.fill,
    "m",
  );
  point(b, a, () => (v().mode === 0 ? cubic(a()) : -1), c.amber, c.fill, "a");
  point(b, z, () => (v().mode === 0 ? cubic(z()) : 5), c.green, c.fill, "b");
};
export function Demo() {
  const { values: v, set, theme } = useMathsModel(schema),
    { a, b } = bracket(v.iteration);
  const m = (a + b) / 2;
  const previous = v.iteration > 0 ? bracket(v.iteration - 1) : null;
  const previousMidpoint = previous ? (previous.a + previous.b) / 2 : null;
  return (
    <MathsCard>
      <Choices
        label="Continuity hypothesis"
        value={v.mode}
        options={["Continuous polynomial", "Jump counterexample"]}
        onChange={(x) => {
          set("mode", x);
        }}
      />
      <MathsPlot
        values={v}
        theme={theme}
        scene={scene}
        bounds={[0.8, 6.2, 2.2, -1.8]}
        label="A continuous cubic crosses zero between opposite-signed endpoints; a discontinuous step can skip zero."
      />
      <Reading>
        {v.mode === 0 ? (
          <>
            <p>
              <Latex latex="f(x)=x^3-x-1" />
            </p>
            <p>
              <Latex
                latex={String.raw`a\approx ${latexNumber(a)},\quad b\approx ${latexNumber(b)}`}
              />
            </p>
            <p>
              <Latex
                latex={String.raw`f(a)\approx ${latexNumber(cubic(a))}<0`}
              />
            </p>
            <p>
              <Latex
                latex={String.raw`f(b)\approx ${latexNumber(cubic(b))}>0`}
              />
            </p>
            <p>
              <Latex
                latex={String.raw`m=\frac{a+b}{2}\approx ${latexNumber(m)}`}
              />
            </p>
            <p>
              <Latex latex={String.raw`f(m)\approx ${latexNumber(cubic(m))}`} />
            </p>
            <p>
              The next step keeps the {correctBisectionHalf(v.iteration)} half,
              whose endpoints have opposite signs.
            </p>
            <p>
              <Latex latex={String.raw`b-a\approx ${latexNumber(b - a)}`} />
            </p>
            <p>
              Continuity guarantees at least one root in this interval, not
              uniqueness.
            </p>
            {previousMidpoint !== null && (
              <p>
                Step {v.iteration}: the previous midpoint{" "}
                <Latex
                  latex={String.raw`m\approx ${latexNumber(previousMidpoint)}`}
                />{" "}
                replaced the {cubic(previousMidpoint) < 0 ? "left" : "right"}{" "}
                endpoint.
              </p>
            )}
          </>
        ) : (
          <>
            <p>
              <Latex latex="f(1)=-1,\quad f(2)=5" />
            </p>
            <p>
              The jump skips zero. Without continuity, the IVT does not apply.
            </p>
          </>
        )}
      </Reading>
      {v.mode === 0 && (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={v.iteration >= 12}
            onClick={() => set("iteration", v.iteration + 1)}
          >
            Step
          </button>
          <button
            type="button"
            disabled={v.iteration === 0}
            onClick={() => {
              set("iteration", 0);
            }}
          >
            Reset interval
          </button>
        </div>
      )}
    </MathsCard>
  );
}
