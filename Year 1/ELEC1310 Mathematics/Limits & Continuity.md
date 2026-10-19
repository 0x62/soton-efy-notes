---
permalink: y1/elec1310/limits-continuity
---
#### Limits & Continuity

- [[#Meaning of a limit]]
- [[#One-sided limits and non-existence]]
- [[#Limit laws]]
- [[#Algebraic evaluation]]
- [[#Squeeze theorem]]
- [[#Infinite limits and asymptotes]]
- [[#Continuity]]
- [[#Intermediate value theorem]]
- [[#Formal definition]]

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

## Meaning of a limit

$\lim_{x\to a}f(x)=L$ means that the output approaches $L$ as the input approaches $a$. It describes nearby behaviour, not necessarily the value at $a$.[^1]

For example,
$$
f(x)=\frac{x^2-4}{x-2}=x+2\quad(x\ne2)
$$
has limit $4$ at $x=2$, although $f(2)$ is undefined. Changing or filling in the value at a single point does not change the limit there.

Numerical tables and graphs can suggest a limit, but finite samples cannot prove one: rapid oscillation and rounding can hide nearby behaviour. Algebra or a limiting argument establishes the result.

A secant slope,
$$
\frac{f(a+h)-f(a)}h,
$$
measures an average rate over a non-zero interval. Its limit as $h\to0$ gives the instantaneous rate used in [[Differentiation#First principles|differentiation]].

## One-sided limits and non-existence

$\lim_{x\to a^-}f(x)$ approaches from smaller inputs; $\lim_{x\to a^+}f(x)$ approaches from larger inputs. A finite two-sided limit exists only when both one-sided limits exist and agree.[^1]

For $f(x)=|x-2|/(x-2)$, the left limit is $-1$ and the right limit is $1$, so there is no two-sided limit. At a domain endpoint, only the permitted side may be available: $\sqrt{x}\to0$ as $x\to0^+$.

Other ways a finite limit can fail:
- **Unbounded growth:** $1/x^2\to+\infty$ as $x\to0$. Infinity describes growth, not a finite real limit.
- **Persistent oscillation:** $\sin(1/x)$ moves between $-1$ and $1$ arbitrarily close to zero and approaches no single value.

## Limit laws

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

## Algebraic evaluation

![[Mathematics A Cheat Sheet#Simplifying algebraic fractions]]

Start with substitution. An indeterminate result such as $0/0$ is not a limit value and does not establish that the limit fails.[^1]

### Factorisation

$$
\lim_{x\to5}\frac{x^2-25}{x-5}
=\lim_{x\to5}(x+5)=10.
$$
Cancelling $x-5$ is valid for nearby $x\ne5$, which is sufficient for the limit. It does not make the original expression defined at $5$.

### Rationalisation

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

## Squeeze theorem

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

### Fundamental trigonometric limit

For angles in radians,
$$
\lim_{x\to0}\frac{\sin x}{x}=1.
$$
For $0<x<\pi/2$, the geometric inequality $\sin x<x<\tan x$ gives $\cos x<\sin x/x<1$. The bounds tend to $1$; the ratio is even, so the same limit holds from the left. This is a limiting result even though the original ratio is undefined at zero.[^2]

## Infinite limits and asymptotes

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

## Continuity

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

## Intermediate value theorem

If $f$ is continuous on $[a,b]$, it takes every value between $f(a)$ and $f(b)$ somewhere on that interval. In particular, if the endpoint values have opposite signs, at least one root lies in $(a,b)$.[^2]

For $f(x)=x^3-x-1$, $f(1)=-1$ and $f(2)=5$. Since a polynomial is continuous, a root exists between $1$ and $2$. The theorem guarantees existence, not the root's exact position or uniqueness. A discontinuous function can jump over zero, so opposite signs alone are insufficient.

## Formal definition

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

[^1]: University of Southampton, ELEC1310, Philip Calado, *Limits and Continuity*, sections 1–12, [notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45151); [slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45116).

[^2]: University of Southampton, ELEC1310, *Limits and Continuity*, slides 55 and 78, [Week 4 materials](https://moodle.ecs.soton.ac.uk/course/section.php?id=13654).

[^3]: Philip Calado, [Introduction to Derivatives recording, 13 October 2026](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=9e301411-9437-4c05-9cec-b4e201067422), 15:09–18:05. Limits foundations also reviewed against [12 October 2026 recording](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=67061739-a777-4600-a806-b4e1010681c4), 8:19–44:34.
