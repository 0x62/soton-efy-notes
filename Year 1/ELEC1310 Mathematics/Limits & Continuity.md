---
permalink: y1/elec1310/limits-continuity
---
#### Limits & Continuity

- [[#Meaning of a limit]]
- [[#One-sided limits and non-existence]]
- [[#Continuity]]
- [[#Limit laws]]
- [[#Algebraic evaluation]]
- [[#Squeeze theorem]]
- [[#Infinite limits and asymptotes]]
- [[#Intermediate value theorem]]
- [[#Formal definition]]

Suppose a formula refuses to give an answer at one input. Does that mean we know nothing about what happens nearby? This is the question that will lead us through limits, continuity and eventually a precise definition of “nearby”.

We will begin with a missing point on a simple graph. We will then ask whether both sides tell the same story, whether the missing point can be repaired, and how to justify what the graph suggests. Only after that will we use the ideas to locate a root and turn “getting close” into a guarantee.

The experiments are part of that argument. Before changing a value, make a prediction; afterwards, explain which feature changed and which stayed the same. A graph is evidence to interpret, not a substitute for a proof.

## Meaning of a limit

### A missing answer need not mean missing information

Consider $f(x)=(x^2-4)/(x-2)$. Substituting $x=2$ gives $0/0$, which is undefined. But $x=1.9$ gives $3.9$, $x=1.99$ gives $3.99$, and $x=2.01$ gives $4.01$. The missing answer at exactly $2$ has not stopped the surrounding outputs from pointing towards $4$.

Here are two different questions:

- **Point value:** what is the output at exactly $x=2$?
- **Limit:** what output can we make the nearby values approach by taking $x$ sufficiently close to $2$, without using $x=2$ itself?

Keep those questions separate. The first asks about one point; the second asks about an entire neighbourhood.

$\lim_{x\to a}f(x)=L$ means that the output approaches $L$ as the input approaches $a$. It describes nearby behaviour, not necessarily the value at $a$.[^1]

For example,
$$
f(x)=\frac{x^2-4}{x-2}=x+2\quad(x\ne2)
$$
has limit $4$ at $x=2$, although $f(2)$ is undefined. Changing or filling in the value at a single point does not change the limit there.

**First investigation — can a wrong target be rescued by moving closer?** Start with the proposed limit $L=3$. The shaded strip marks outputs within $0.2$ of that target. Move the two sample inputs towards $2$. Then try $L=4$. Which target allows both sides to stay inside the strip as the inputs get closer? Finally, assign different values to $f(2)$: does that alter the nearby points?

Numerical tables and graphs can suggest a limit, but finite samples cannot prove one: rapid oscillation and rounding can hide nearby behaviour. Algebra or a limiting argument establishes the result.

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/approaching-a-limit/" data-notes-embed="y1/elec1310/limits-continuity/approaching-a-limit" title="Point values and the limit at a hole" loading="lazy" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

The wrong target leaves a persistent gap. For the right target, the input distance and output error shrink together: $|f(x)-4|=|x-2|$ for $x\ne2$. That relationship explains why approaching works; the centre value plays no part in it. We will return to this “output strip” when we make the definition precise.

### Why a missing point is useful: instantaneous rate

This is not just a way to fill holes in formulas. Suppose a particle has position $s(t)=t^2$. Between times $1$ and $1+h$, its average velocity is
$$
\frac{(1+h)^2-1}{h}=2+h\qquad(h\ne0).
$$
At $h=0$ the average-velocity fraction is undefined: there is no elapsed time. Yet its values can approach a definite answer. The line through the two positions is a secant; the limiting line is the tangent.

**Predict before shrinking $h$:** will approaching through negative intervals give the same slope as approaching through positive intervals? Look for what happens to the *slope*, not merely to the distance between the points.

A secant slope,
$$
\frac{f(a+h)-f(a)}h,
$$
measures an average rate over a non-zero interval. Its limit as $h\to0$ gives the instantaneous rate used in [[Differentiation#First principles|differentiation]].

<details>
<summary>Explore the average-to-instantaneous rate</summary>

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/secant-slope/" data-notes-embed="y1/elec1310/limits-continuity/secant-slope" title="Secant slopes approaching a tangent" loading="lazy" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

</details>

The secant experiment gives slopes $2+h$, so both directions approach $2$. The moving point never needs to coincide with the fixed point. This is how a limit answers a question that direct substitution could not.

## One-sided limits and non-existence

### The two sides must agree

Our first two examples happened to agree from both sides. That agreement was a condition, not a coincidence we can assume for every function. Imagine approaching a step: getting closer to its edge does not make its two heights meet.

$\lim_{x\to a^-}f(x)$ approaches from smaller inputs; $\lim_{x\to a^+}f(x)$ approaches from larger inputs. A finite two-sided limit exists only when both one-sided limits exist and agree.[^1]

For $f(x)=|x-2|/(x-2)$, the left limit is $-1$ and the right limit is $1$, so there is no two-sided limit. At a domain endpoint, only the permitted side may be available: $\sqrt{x}\to0$ as $x\to0^+$.

The experiment below translates the jump from $x=2$ to $x=0$ so that the jump, square-root endpoint and oscillation can share the same input scale. Translating the graph changes its location, not the reason the limit fails.

**Compare the failures:** a jump has two settled but different answers; an oscillation has no settled answer even from the right. In the oscillation experiment, the two marked sequences always give $+1$ and $-1$, however close their inputs get to zero. An endpoint is different again: for $\sqrt{x}$ there are no real inputs to test on the left. Its limit is understood through its domain, here from the right.

Other ways a finite limit can fail:
- **Unbounded growth:** $1/x^2\to+\infty$ as $x\to0$. Infinity describes growth, not a finite real limit.
- **Persistent oscillation:** $\sin(1/x)$ moves between $-1$ and $1$ arbitrarily close to zero and approaches no single value.

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/one-sided-limits/" data-notes-embed="y1/elec1310/limits-continuity/one-sided-limits" title="One-sided limits and oscillation sequences" loading="lazy" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

## Continuity

### Does the actual value agree with the nearby behaviour?

We can now answer the question left open by our first experiment. The surrounding outputs approached $4$ whether the value at $2$ was absent, $1$, or $4$. Only the last assignment makes the function continuous there. **A limit describes an approach; continuity requires the actual value to match it.**

This gives us a useful diagnosis: first find what the surrounding graph demands, and only then compare the centre value. A missing or misplaced centre point is repairable. A jump is not: no single point value can equal two different one-sided limits.

Continuity at $a$ requires all three conditions:[^1]
1. $f(a)$ is defined.
2. $\lim_{x\to a}f(x)$ exists.
3. The limit equals $f(a)$.

Continuity on $[a,b]$ means continuity at every interior point, right-continuity at $a$, and left-continuity at $b$.

- **Removable discontinuity:** a finite common limit exists but the point is absent or assigned a different value. Set the point equal to the limit to remove the hole.
- **Jump discontinuity:** finite left and right limits differ. Changing one point cannot fix the jump.
- **Infinite discontinuity:** unbounded behaviour near the point.

For
$$
f(x)=\begin{cases}2x+1,&x<3,\\k,&x=3,\\x^2-2,&x>3,\end{cases}
$$
both side limits are $7$, so continuity requires $k=7$.

**A repair challenge:** first find the centre value that joins the two original pieces. Then raise the right-hand piece by $1$ in the experiment. Can any choice of $k$ repair that version? The extra case distinguishes a removable problem at one point from a disagreement throughout the surrounding neighbourhood.

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/continuity/" data-notes-embed="y1/elec1310/limits-continuity/continuity" title="Repairing a removable discontinuity" loading="lazy" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

The repair worked because the side limits agreed. Next we need ways to establish those limits without trusting a picture.

## Limit laws

### From observing a limit to calculating it

We now know what a limit is asking and what can go wrong. But checking points one by one cannot establish the behaviour of *all* nearby inputs. Calculation rules let us build a reliable answer from simpler limits, provided their conditions hold.

Think of a formula as a small computation: find the limits of its pieces, then combine those answers. For example, as $x\to1$, $x^2-1\to0$ and $x+1\to2$. Their sum tends to $2$, their product to $0$, and their quotient to $0/2=0$. The same inputs drive both pieces; we are not independently choosing their outputs.

If $f(x)\to L$ and $g(x)\to M$, with finite $L,M$, then:[^1]
$$
\lim(f\pm g)=L\pm M,\qquad \lim(cf)=cL,\qquad
\lim(fg)=LM,\qquad \lim\frac fg=\frac LM\quad(M\ne0).
$$
Positive integer powers can be taken after the limit. Roots can also be taken where the real root is defined; even roots require non-negative arguments.

For composition, if $g(x)\to L$ and $f$ is continuous at $L$, then
$$
\lim_{x\to a}f(g(x))=f(L).
$$
For example, to evaluate $\lim_{x\to1}e^{x^2-1}$, set $g(x)=x^2-1$. The limit laws give $g(x)\to0$; continuity of the exponential then gives $e^0=1$. Identifying the inner and outer functions makes the conditions explicit.[^3]

These conditions matter: a quotient law cannot be applied with a limiting denominator of zero. Polynomials are continuous everywhere, so direct substitution works; rational functions allow it where the denominator is non-zero.

<details>
<summary>Explore combinations of two limits</summary>

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/limit-laws/" data-notes-embed="y1/elec1310/limits-continuity/limit-laws" title="Combining limits and continuous composition" loading="lazy" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

</details>

## Algebraic evaluation

### When substitution exposes a problem rather than an answer

Return to the opening quotient. Its numerator and denominator both tend to zero, so the quotient law has said **nothing** about its limit. “The rule does not apply” is not the same as “the limit does not exist”. We need another argument.

The key is that a limit ignores the centre point. If two expressions agree at every sufficiently nearby permitted input, they have the same limit there, even if one is defined at the centre and the other is not. This is exactly the freedom that cancellation and rationalisation use.

For reference, the underlying algebra is collected here:

<details>
<summary>Algebra refresher: simplifying fractions</summary>

![[Mathematics A Cheat Sheet#Simplifying algebraic fractions]]

</details>

Start with substitution. An indeterminate result such as $0/0$ is not a limit value and does not establish that the limit fails.[^1]

### Factorisation

The opening example becomes $x+2$ away from $2$. Now transfer the same idea to a new hole, at $5$. Before simplifying, predict whether the resulting line should have a missing point and where it should be.

Since $x^2-25=(x-5)(x+5)$, we may divide out $x-5$ whenever $x\ne5$. We have changed the *expression used to calculate nearby values*, not retroactively defined the original fraction at $5$.

$$
\lim_{x\to5}\frac{x^2-25}{x-5}
=\lim_{x\to5}(x+5)=10.
$$
Cancelling $x-5$ is valid for nearby $x\ne5$, which is sufficient for the limit. It does not make the original expression defined at $5$.

<details>
<summary>Test the same argument at a new hole</summary>

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/factorisation/" data-notes-embed="y1/elec1310/limits-continuity/factorisation" title="Factorisation and the excluded point" loading="lazy" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

</details>

### Rationalisation

A square root hides the same removable factor in a different form. Direct substitution again gives $0/0$, but $\sqrt{x}-2$ is not a polynomial we can factor in the usual way. Multiplication by $\sqrt{x}+2$ exposes an $x-4$ that can cancel:
$$
\frac{\sqrt{x}-2}{x-4}\frac{\sqrt{x}+2}{\sqrt{x}+2}
=\frac{x-4}{(x-4)(\sqrt{x}+2)}
=\frac1{\sqrt{x}+2}\qquad(x\ge0,\ x\ne4).
$$
The transformed denominator tends to $4$, so the quotient law now applies. The original excluded point remains excluded.

Multiply by a conjugate to use $(A-B)(A+B)=A^2-B^2$:
$$
\lim_{x\to4}\frac{\sqrt{x}-2}{x-4}
=\lim_{x\to4}\frac1{\sqrt{x}+2}=\frac14.
$$
Similarly,
$$
\lim_{h\to0}\frac{\sqrt{9+h}-3}{h}
=\lim_{h\to0}\frac1{\sqrt{9+h}+3}=\frac16.
$$

<details>
<summary>Compare the two square-root examples</summary>

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/rationalisation/" data-notes-embed="y1/elec1310/limits-continuity/rationalisation" title="Rationalisation near a square root" loading="lazy" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

</details>

## Squeeze theorem

### Can an oscillation have a limit after all?

Earlier, $\sin(1/x)$ failed because it kept reaching $-1$ and $1$ arbitrarily close to zero. What if those oscillations are multiplied by $x^2$? Their frequency still increases, but their height can no longer remain large.

**Compare the same oscillation with and without the $x^2$ envelope.** Shrink the input strip in each case. Does the entire possible output range shrink too? The question is about every point inside the strip, including oscillations too fine for a screen to draw.

This is a different proof strategy from simplifying a quotient. We do not need the exact oscillating value if we can trap it between two bounds that close in on the same number.

If a function lies between two functions with the same limit, it must share that limit.[^1]

Since $-1\le\sin(1/x)\le1$ and $x^2\ge0$,
$$
-x^2\le x^2\sin(1/x)\le x^2.
$$
Both bounds approach zero, giving
$$
\lim_{x\to0}x^2\sin(1/x)=0.
$$
The sine still oscillates, but its amplitude shrinks to zero. A bounded signal multiplied by an envelope tending to zero therefore tends to zero.

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/squeeze-theorem/" data-notes-embed="y1/elec1310/limits-continuity/squeeze-theorem" title="An oscillation inside a shrinking envelope" loading="lazy" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

### Fundamental trigonometric limit

The same trapping idea resolves another apparent $0/0$: $\sin x/x$. Unlike the factorisation examples, this requires a geometric inequality. Think of the lower and upper bounds as two jaws closing on the unknown limit. Their separation must tend to zero; it is not enough for one graph to look close to another at a few inputs.

For angles in radians,
$$
\lim_{x\to0}\frac{\sin x}{x}=1.
$$
For $0<x<\pi/2$, the geometric inequality $\sin x<x<\tan x$ gives $\cos x<\sin x/x<1$. The bounds tend to $1$; the ratio is even, so the same limit holds from the left. This is a limiting result even though the original ratio is undefined at zero.[^2]

<details>
<summary>Explore the two trigonometric bounds</summary>

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/trigonometric-limit/" data-notes-embed="y1/elec1310/limits-continuity/trigonometric-limit" title="Squeezing sine x over x in radians" loading="lazy" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

</details>

## Infinite limits and asymptotes

### Which quantity is going far away?

So far the input has approached a finite point and we have looked for a finite output. There are two distinct extensions: a nearby input can make the **output** grow without bound, or an **input** can grow without bound while its output settles towards a finite value. Keep track of which quantity is tending to infinity.

A pole is not a hole that can be filled with one number. Compare $1/(x-2)$ with $1/(x-2)^2$: squaring changes the sign on the left, but neither graph settles towards a finite height. The plots have separate branches; a line drawn across the pole would falsely suggest values that are not part of the function.

For $1/(x-2)^2$, both sides tend to $+\infty$, so $x=2$ is a vertical asymptote. For $1/(x-2)$, the left side tends to $-\infty$ and the right to $+\infty$: the vertical asymptote remains, but the two sides do not have a common limit.[^1]

A horizontal asymptote $y=L$ describes $f(x)\to L$ as $x\to+\infty$ or $-\infty$. Check the directions separately. For a rational function, divide by the highest denominator power:
- Numerator degree smaller: limit $0$.
- Equal degrees: ratio of leading coefficients.
- Numerator degree larger: no finite horizontal asymptote.

For example,
$$
\lim_{x\to\infty}\frac{5x^2-2}{2x^2+7}
=\lim_{x\to\infty}\frac{5-2/x^2}{2+7/x^2}=\frac52.
$$
For an RC charging model with $R,C>0$,
$$
V_C(t)=V_0(1-e^{-t/(RC)})\implies\lim_{t\to\infty}V_C(t)=V_0.
$$
The steady-state voltage is approached asymptotically rather than reached at a finite time in the ideal model.

This is the same behaviour explored in [[RC Transients|RC charging]]. At $t=RC$ the capacitor is only about $63.2\%$ of the way to its final voltage; a horizontal asymptote describes the long-term target, not a finite-time arrival.

<details>
<summary>Compare vertical and horizontal asymptotes</summary>

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/asymptotes/" data-notes-embed="y1/elec1310/limits-continuity/asymptotes" title="Infinite limits and horizontal asymptotes" loading="lazy" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

</details>

## Intermediate value theorem

### What does continuity let us guarantee?

Continuity does more than make a graph look unbroken. If a continuous function starts below a level and finishes above it, it cannot skip that level on the way. This turns information at two endpoints into an existence result somewhere between them.

The opening limit experiments used nearby points to investigate a missing value. Here we use a whole continuous interval to establish a value that we have not located yet. The hypothesis is stronger, so the conclusion is stronger too.

If $f$ is continuous on $[a,b]$, it takes every value between $f(a)$ and $f(b)$ somewhere on that interval. In particular, if the endpoint values have opposite signs, at least one root lies in $(a,b)$.[^2]

For $f(x)=x^3-x-1$, $f(1)=-1$ and $f(2)=5$. Since a polynomial is continuous, a root exists between $1$ and $2$. The theorem guarantees existence, not the root's exact position or uniqueness. A discontinuous function can jump over zero, so opposite signs alone are insufficient.

**Find a smaller guaranteed interval.** The midpoint splits the current bracket in half. Compare its sign with the two endpoint signs and retain the half with opposite signs. Each correct choice halves the uncertainty without losing the existence guarantee. Then compare the discontinuous step: the endpoints still have opposite signs, but the guarantee disappears.

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/intermediate-value/" data-notes-embed="y1/elec1310/limits-continuity/intermediate-value" title="Intermediate value theorem and bisection" loading="lazy" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

## Formal definition

### Turn the opening experiment into a promise

Return to the output strip around a proposed limit. Moving two points into it was suggestive, but a limit demands much more: **every sufficiently close permitted input must produce an output inside any requested strip**, however narrow that strip is.

There are two choices, in a particular order:

1. Someone specifies an allowed output error $\varepsilon$ (epsilon).
2. We must supply an input radius $\delta$ (delta) that guarantees that error for all nearby inputs except the centre.

We do not get to choose a generous output tolerance after seeing our input radius, nor select only the inputs that happen to work. In the first example, $|f(x)-4|=|x-2|$, so $\delta=\varepsilon$ would suffice. For $f(x)=2x+1$ near $3$, output errors are twice input errors: expect the input strip to need to be narrower.

**Meet a tighter demand.** Start with an input radius that works, then reduce $\varepsilon$ while holding $\delta$ fixed. When the guarantee fails, the red point gives one actual counterexample. Repair the input radius and work out a rule that would succeed for *any* positive output tolerance, not just the slider's finite range.

For every desired output tolerance $\varepsilon>0$, there must be an input tolerance $\delta>0$ such that every allowed $x$ with $0<|x-a|<\delta$ satisfies $|f(x)-L|<\varepsilon$.[^1]

The exclusion $x\ne a$ is deliberate. The choice of $\delta$ may depend on $\varepsilon$, but must work for all inputs in the punctured neighbourhood, not just selected examples.

To prove $\lim_{x\to3}(2x+1)=7$, observe
$$
|(2x+1)-7|=2|x-3|.
$$
Given any $\varepsilon>0$, choose $\delta=\varepsilon/2$. Then
$$
0<|x-3|<\delta\implies |(2x+1)-7|<2\delta=\varepsilon.
$$
For a non-constant linear function $mx+b$, the same argument uses $\delta=\varepsilon/|m|$.

Notice why equality $2\delta=\varepsilon$ is allowed: the input condition is strict, $|x-3|<\delta$, so the output error is still strictly less than $\varepsilon$. Smaller positive radii also work. If $m=0$, the function is constant and any positive radius works; division by $|m|$ is neither needed nor valid.

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/epsilon-delta/" data-notes-embed="y1/elec1310/limits-continuity/epsilon-delta" title="An analytic epsilon-delta neighbourhood" loading="lazy" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

### The argument we have built

We started with an undefined fraction and learned to separate an input's actual value from its neighbours. Agreement from both sides gave a limit; agreement with the centre value gave continuity. Algebra and bounds justified what the experiments suggested. Continuity then guaranteed an intermediate value, and the epsilon–delta definition finally explained exactly what “can be made as close as we like” promises.

A useful final check is to explain why these three statements differ: “the function is undefined at $a$”, “the limit does not exist at $a$”, and “the function is not continuous at $a$”. The first does not imply the second; the third may be repairable at one point, or may reflect a deeper failure nearby.

### Reference: the three statements in symbols

**[[#Continuity|Continuity at a point]]**
$$
\lim_{x\to a}f(x)=f(a)
$$
**[[#Squeeze theorem|Squeeze theorem]]**
$$
g(x)\le f(x)\le h(x),\quad \lim_{x\to a}g(x)=\lim_{x\to a}h(x)=L
\implies\lim_{x\to a}f(x)=L
$$
**[[#Formal definition|Limit definition]]**
$$
\forall\varepsilon>0\ \exists\delta>0:\quad
0<|x-a|<\delta\implies |f(x)-L|<\varepsilon
$$

[^1]: University of Southampton, ELEC1310, Philip Calado, *Limits and Continuity*, sections 1–12, [notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45151); [slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45116).

[^2]: University of Southampton, ELEC1310, *Limits and Continuity*, slides 55 and 78, [Week 4 materials](https://moodle.ecs.soton.ac.uk/course/section.php?id=13654).

[^3]: Philip Calado, [Introduction to Derivatives recording, 13 October 2026](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=9e301411-9437-4c05-9cec-b4e201067422), 15:09–18:05. Limits foundations also reviewed against [12 October 2026 recording](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=67061739-a777-4600-a806-b4e1010681c4), 8:19–44:34.
