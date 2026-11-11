---
permalink: y1/elec1310/limits-continuity
---
- [[#Meaning of a limit]]
- [[#One-sided limits and non-existence]]
- [[#Continuity]]
- [[#Limit laws]]
- [[#Algebraic evaluation]]
- [[#Squeeze theorem]]
- [[#Infinite limits and asymptotes]]
- [[#Intermediate value theorem]]
- [[#Formal definition]]

#### Limits & Continuity

$$
\lim_{x\to a}f(x)=L\iff\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L
$$
$$
f\text{ continuous at }a\iff\lim_{x\to a}f(x)=f(a)
$$
$$
\lim_{x\to0}\frac{\sin x}{x}=1\qquad(x\text{ in radians})
$$

## Introduction

A limit describes what the values of a function approach. It is especially useful when direct substitution fails: a formula can be undefined at one input while its nearby values still approach a definite number.

We will start with a fraction that gives $0/0$ at $x=2$. The same example will help distinguish a limit from a function value, explain continuity, and introduce the precise definition at the end. Along the way, other examples show where a limit fails and how algebra or bounds can establish one.

The graphs make the nearby behaviour visible. The calculations beside them explain why it holds; a finite collection of plotted points cannot prove a limit.

## Meaning of a limit

<span id="a-missing-answer-need-not-mean-missing-information"></span>

### The fraction at x = 2

Consider $f(x)=(x^2-4)/(x-2)$. Substituting $x=2$ gives $0/0$, which is undefined. But $x=1.9$ gives $3.9$, $x=1.99$ gives $3.99$, and $x=2.01$ gives $4.01$. The missing answer at exactly $2$ has not stopped the surrounding outputs from pointing towards $4$.

There are two quantities to keep separate:

- **Point value:** the output at exactly $x=2$, if it exists.
- **Limit:** the number approached by outputs at nearby inputs, without using $x=2$ itself.

The point value concerns a single input. The limit concerns the behaviour around it.

$\lim_{x\to a}f(x)=L$ means that the output approaches $L$ as the input approaches $a$. It describes nearby behaviour, not necessarily the value at $a$.[^1]

For example,
$$
f(x)=\frac{x^2-4}{x-2}=x+2\quad(x\ne2)
$$
has limit $4$ at $x=2$, although $f(2)$ is undefined. Changing or filling in the value at a single point does not change the limit there.

At the missing input itself,
$$
\frac{2^2-4}{2-2}=\frac00,
$$
so the original fraction has no value there. The open circle in the graph marks this missing point. The two other points show values on either side; the table keeps them distinguishable even when they look almost on top of the hole.

The graph looks straight because the fraction equals $x+2$ wherever it is defined. That does **not** make it the same function as the complete line: the fraction excludes $x=2$. The useful result is that its limit is $4$ despite the failed substitution. We will justify the cancellation in [[#Algebraic evaluation]].

Numerical tables and graphs can suggest a limit, but finite samples cannot prove one: rapid oscillation and rounding can hide nearby behaviour. Algebra or a limiting argument establishes the result.

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/approaching-a-limit/" data-notes-embed="y1/elec1310/limits-continuity/approaching-a-limit" title="Point values and the limit at a hole" loading="lazy" scrolling="no" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

Inputs $1.99$ and $2.01$ give outputs $3.99$ and $4.01$. Taking inputs ten times closer makes the output errors ten times smaller. In fact, $|f(x)-4|=|x-2|$ for $x\ne2$. This relationship will be useful again in the formal definition.

Limits are not restricted to functions with missing points. For a continuous function such as $x^2$, the limit at $2$ is simply $4$, which is also its value there. The fraction is a useful starting example because it shows why the limit and the point value are separate ideas.

### Why a missing point is useful: instantaneous rate

This is not just a way to fill holes in formulas. Suppose a particle has position $s(t)=t^2$. Between times $1$ and $1+h$, its average velocity is
$$
\frac{(1+h)^2-1}{h}=2+h\qquad(h\ne0).
$$
At $h=0$ the average-velocity fraction is undefined: there is no elapsed time. Yet its values can approach a definite answer. The line through the two positions is a secant; the limiting line is the tangent.

Positive intervals give slopes just above $2$; negative intervals give slopes just below it. As the interval shrinks from either side, the secant approaches the same tangent.

A secant slope,
$$
\frac{f(a+h)-f(a)}h,
$$
measures an average rate over a non-zero interval. Its limit as $h\to0$ gives the instantaneous rate used in [[Differentiation#First principles|differentiation]].

<details>
<summary>Explore the average-to-instantaneous rate</summary>

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/secant-slope/" data-notes-embed="y1/elec1310/limits-continuity/secant-slope" title="Secant slopes approaching a tangent" loading="lazy" scrolling="no" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

</details>

The secant experiment gives slopes $2+h$, so both directions approach $2$. The moving point never needs to coincide with the fixed point. This is how a limit answers a question that direct substitution could not.

## One-sided limits and non-existence

### The two sides must agree

Both sides of the original fraction approached $4$. That agreement matters. A different fraction can have a left-hand limit and a right-hand limit that disagree, even at the same input $x=2$.

$\lim_{x\to a^-}f(x)$ approaches from smaller inputs; $\lim_{x\to a^+}f(x)$ approaches from larger inputs. A finite two-sided limit exists only when both one-sided limits exist and agree.[^1]

For $f(x)=|x-2|/(x-2)$, the left limit is $-1$ and the right limit is $1$, so there is no two-sided limit. At a domain endpoint, only the permitted side may be available: $\sqrt{x}\to0$ as $x\to0^+$.

The jump below stays at $x=2$, as in the opening example. Now the left-hand outputs remain at $-1$ and the right-hand outputs remain at $1$. Getting closer does not remove their disagreement.

A domain boundary and an oscillation need different explanations. For $\sqrt{x}$ at zero, there are no real inputs on the left, so the approach is through its domain, from the right. For $\sin(1/x)$, even the right-hand approach fails to settle. The two marked sequences in that example have outputs $+1$ and $-1$ however close their inputs get to zero.

Other ways a finite limit can fail:
- **Unbounded growth:** $1/x^2\to+\infty$ as $x\to0$. Infinity describes growth, not a finite real limit.
- **Persistent oscillation:** $\sin(1/x)$ moves between $-1$ and $1$ arbitrarily close to zero and approaches no single value.

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/one-sided-limits/" data-notes-embed="y1/elec1310/limits-continuity/one-sided-limits" title="One-sided limits and oscillation sequences" loading="lazy" scrolling="no" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

## Continuity

<span id="does-the-actual-value-agree-with-the-nearby-behaviour"></span>

### Filling the original hole

Return to the original fraction. Its nearby outputs approach $4$, but it has no value at $2$. We can extend the function by assigning a value at that one input. Assigning $4$ fills the hole; assigning $1$ puts a point elsewhere and leaves the discontinuity. Neither assignment changes the limit. **Continuity requires the actual value to agree with the limit.**

This is why a missing or misplaced centre point can be repaired, but a jump cannot. At a jump there are two different one-sided limits, and no single assigned value can equal both.

Continuity at $a$ requires all three conditions:[^1]
1. $f(a)$ is defined.
2. $\lim_{x\to a}f(x)$ exists.
3. The limit equals $f(a)$.

Continuity on $[a,b]$ means continuity at every interior point, right-continuity at $a$, and left-continuity at $b$.

- **Removable discontinuity:** a finite common limit exists but the point is absent or assigned a different value. Set the point equal to the limit to remove the hole.
- **Jump discontinuity:** finite left and right limits differ. Changing one point cannot fix the jump.
- **Infinite discontinuity:** unbounded behaviour near the point.

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/continuity/" data-notes-embed="y1/elec1310/limits-continuity/continuity" title="Repairing a removable discontinuity" loading="lazy" scrolling="no" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

The same reasoning applies when the two sides use different formulas. For
$$
f(x)=\begin{cases}2x+1,&x<3,\\k,&x=3,\\x^2-2,&x>3,\end{cases}
$$
both side limits are $7$, so continuity requires $k=7$.

If the right-hand piece were raised by $1$, its limit would become $8$ while the left-hand limit stayed at $7$. No choice of $k$ could repair that jump. The difficulty would be in the nearby behaviour, not just in the centre value.

In both removable examples, the side limits agree before the centre value is assigned. We now turn to calculating those limits reliably.

## Limit laws

### From observing a limit to calculating it

We now know what a limit is asking and what can go wrong. But checking points one by one cannot establish the behaviour of *all* nearby inputs. Calculation rules let us build a reliable answer from simpler limits, provided their conditions hold.

We can often find the limits of the pieces of a formula and then combine them. For example, as $x\to1$, $x^2-1\to0$ and $x+1\to2$. Their sum tends to $2$, their product to $0$, and their quotient to $0/2=0$. The same inputs drive both pieces; we are not independently choosing their outputs.

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

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/limit-laws/" data-notes-embed="y1/elec1310/limits-continuity/limit-laws" title="Combining limits and continuous composition" loading="lazy" scrolling="no" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

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

The opening example becomes $x+2$ away from $2$. The same calculation works for a hole at $5$, with a different limiting value.

Since $x^2-25=(x-5)(x+5)$, we may divide out $x-5$ whenever $x\ne5$. We have changed the *expression used to calculate nearby values*, not retroactively defined the original fraction at $5$.

$$
\lim_{x\to5}\frac{x^2-25}{x-5}
=\lim_{x\to5}(x+5)=10.
$$
Cancelling $x-5$ is valid for nearby $x\ne5$, which is sufficient for the limit. It does not make the original expression defined at $5$.

<details>
<summary>Test the same argument at a new hole</summary>

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/factorisation/" data-notes-embed="y1/elec1310/limits-continuity/factorisation" title="Factorisation and the excluded point" loading="lazy" scrolling="no" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

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

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/rationalisation/" data-notes-embed="y1/elec1310/limits-continuity/rationalisation" title="Rationalisation near a square root" loading="lazy" scrolling="no" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

</details>

## Squeeze theorem

<span id="can-an-oscillation-have-a-limit-after-all"></span>

### A shrinking oscillation

Earlier, $\sin(1/x)$ kept reaching $-1$ and $1$ arbitrarily close to zero. Multiplying by $x^2$ changes this: the oscillations become faster near zero, but their height is forced to shrink.

The two versions below use the same oscillation. Without the envelope, its output range stays at $[-1,1]$. With the envelope, narrowing the input interval also narrows the range of possible outputs. The bound applies even to oscillations too fine for the screen to draw.

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

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/squeeze-theorem/" data-notes-embed="y1/elec1310/limits-continuity/squeeze-theorem" title="An oscillation inside a shrinking envelope" loading="lazy" scrolling="no" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

### Fundamental trigonometric limit

The same trapping idea resolves another apparent $0/0$: $\sin x/x$. Unlike the factorisation examples, this requires a geometric inequality. The separation of the upper and lower bounds tends to zero. This establishes the limit without relying on how close the curves happen to look on a screen.

For angles in radians,
$$
\lim_{x\to0}\frac{\sin x}{x}=1.
$$
For $0<x<\pi/2$, the geometric inequality $\sin x<x<\tan x$ gives $\cos x<\sin x/x<1$. The bounds tend to $1$; the ratio is even, so the same limit holds from the left. This is a limiting result even though the original ratio is undefined at zero.[^2]

<details>
<summary>Explore the two trigonometric bounds</summary>

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/trigonometric-limit/" data-notes-embed="y1/elec1310/limits-continuity/trigonometric-limit" title="Squeezing sine x over x in radians" loading="lazy" scrolling="no" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

</details>

## Infinite limits and asymptotes

<span id="which-quantity-is-going-far-away"></span>

### Infinite outputs and infinite inputs

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

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/asymptotes/" data-notes-embed="y1/elec1310/limits-continuity/asymptotes" title="Infinite limits and horizontal asymptotes" loading="lazy" scrolling="no" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

</details>

## Intermediate value theorem

<span id="what-does-continuity-let-us-guarantee"></span>

### Locating a root without solving the equation

Continuity does more than make a graph look unbroken. If a continuous function starts below a level and finishes above it, it cannot skip that level on the way. This turns information at two endpoints into an existence result somewhere between them.

Here continuity is needed throughout the interval, not just at its endpoints. It lets us establish that a value occurs before we know exactly where it occurs.

If $f$ is continuous on $[a,b]$, it takes every value between $f(a)$ and $f(b)$ somewhere on that interval. In particular, if the endpoint values have opposite signs, at least one root lies in $(a,b)$.[^2]

For $f(x)=x^3-x-1$, $f(1)=-1$ and $f(2)=5$. Since a polynomial is continuous, a root exists between $1$ and $2$. The theorem guarantees existence, not the root's exact position or uniqueness. A discontinuous function can jump over zero, so opposite signs alone are insufficient.

Bisection uses this result repeatedly. The midpoint splits the bracket into two halves; the half with opposite signs at its endpoints retains the guarantee of a root. Each step halves the interval. The discontinuous step provides the contrast: it has opposite signs at the endpoints but skips zero.

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/intermediate-value/" data-notes-embed="y1/elec1310/limits-continuity/intermediate-value" title="Intermediate value theorem and bisection" loading="lazy" scrolling="no" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

## Formal definition

<span id="turn-the-opening-experiment-into-a-promise"></span>

### Making “close” precise

In the first example, nearby inputs gave outputs close to $4$. To make that precise, we specify how close the output must be, then find an input interval small enough to guarantee it. The guarantee must hold for every permitted input in that interval, not just for the two plotted points.

There are two choices, in a particular order:

1. Someone specifies an allowed output error $\varepsilon$ (epsilon).
2. We must supply an input radius $\delta$ (delta) that guarantees that error for all nearby inputs except the centre.

We do not get to choose a generous output tolerance after seeing our input radius, nor select only the inputs that happen to work. In the first example, $|f(x)-4|=|x-2|$, so $\delta=\varepsilon$ would suffice. For $f(x)=2x+1$ near $3$, output errors are twice input errors: expect the input strip to need to be narrower.

The diagram returns to the original fraction and its hole at $(2,4)$. The green strip shows the allowed output error; the amber strip shows the chosen input interval. For this function, $\delta\le\varepsilon$ works. If the input interval is too wide, a red point shows a permitted input whose output misses the required tolerance. The identity $|f(x)-4|=|x-2|$ proves the rule for every positive tolerance, beyond the finite range illustrated here.

For every desired output tolerance $\varepsilon>0$, there must be an input tolerance $\delta>0$ such that every allowed $x$ with $0<|x-a|<\delta$ satisfies $|f(x)-L|<\varepsilon$.[^1]

The exclusion $x\ne a$ is deliberate. The choice of $\delta$ may depend on $\varepsilon$, but must work for all inputs in the punctured neighbourhood, not just selected examples.

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1310/limits-continuity/epsilon-delta/" data-notes-embed="y1/elec1310/limits-continuity/epsilon-delta" title="An analytic epsilon-delta neighbourhood" loading="lazy" scrolling="no" height="660" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

For comparison, the line $2x+1$ doubles input errors, so it needs a narrower input interval. To prove $\lim_{x\to3}(2x+1)=7$, observe
$$
|(2x+1)-7|=2|x-3|.
$$
Given any $\varepsilon>0$, choose $\delta=\varepsilon/2$. Then
$$
0<|x-3|<\delta\implies |(2x+1)-7|<2\delta=\varepsilon.
$$
For a non-constant linear function $mx+b$, the same argument uses $\delta=\varepsilon/|m|$.

Notice why equality $2\delta=\varepsilon$ is allowed: the input condition is strict, $|x-3|<\delta$, so the output error is still strictly less than $\varepsilon$. Smaller positive radii also work. If $m=0$, the function is constant and any positive radius works; division by $|m|$ is neither needed nor valid.

<span id="the-argument-we-have-built"></span>

### Putting the ideas together

We started with an undefined fraction and learned to separate an input's actual value from its neighbours. Agreement from both sides gave a limit; agreement with the centre value gave continuity. Algebra and bounds justified what the experiments suggested. Continuity then guaranteed an intermediate value, and the epsilon–delta definition finally explained exactly what “can be made as close as we like” promises.

“Undefined at $a$”, “no limit at $a$” and “not continuous at $a$” mean different things. The original fraction is undefined at $2$ but has a limit there. Filling its hole gives a continuous extension. A jump or persistent oscillation cannot be fixed by assigning a single point value.

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
