---
permalink: y1/elec1310/applications-derivatives
---
#### Applications of Derivatives

- [[#Extrema and critical points]]
- [[#First and second derivative tests]]
- [[#Concavity and inflection]]
- [[#Taylor and Maclaurin approximations]]
- [[#Rolle and mean value theorems]]
- [[#Functions of several variables]]
- [[#Partial derivatives]]
- [[#Parametric derivatives]]
- [[#Newton's method]]
- [[#State-dependent devices]]

**[[#Taylor and Maclaurin approximations|Taylor polynomial]]**
$$
P_N(x)=\sum_{n=0}^N\frac{f^{(n)}(a)}{n!}(x-a)^n
$$
**[[#Parametric derivatives|Parametric derivatives]]**
$$
\frac{dy}{dx}=\frac{y'(t)}{x'(t)},\qquad
\frac{d^2y}{dx^2}=\frac1{x'(t)}\frac d{dt}\left(\frac{dy}{dx}\right)
$$
**[[#Newton's method|Newton iteration]]**
$$
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}
$$

## Extrema and critical points

A local maximum or minimum compares a point with nearby points. An absolute maximum or minimum compares it with every point in the specified domain.[^1]

A **critical number** is an interior domain value $c$ at which $f'(c)=0$ or the derivative is undefined. The point $(c,f(c))$ is a critical point. The function itself must exist there: a missing point is not a critical point of that function.

If a differentiable function has an interior local extremum, then $f'(c)=0$. The converse fails: $x^3$ has zero derivative at zero but continues increasing through it.

A continuous function on a closed, bounded interval $[a,b]$ has absolute maximum and minimum values. To find them:
1. Find all critical numbers in $(a,b)$.
2. Evaluate $f$ at those numbers and at both endpoints.
3. Compare the function values, not the derivative values.

Endpoints can provide the absolute extrema even without zero derivative.

## First and second derivative tests

Positive $f'$ means increasing; negative $f'$ means decreasing. Across a critical point:[^1]
- $+\to-$: local maximum.
- $-\to+$: local minimum.
- No sign change: neither.

For
$$
f(x)=\frac{x^3}3-\frac{5x^2}2+4x,
\qquad f'(x)=(x-1)(x-4),
$$
the derivative signs are $+$ for $x<1$, $-$ for $1<x<4$, and $+$ for $x>4$. Thus $x=1$ is a local maximum and $x=4$ a local minimum.

The second derivative gives a shorter test when $f'(c)=0$:
- $f''(c)>0$: local minimum.
- $f''(c)<0$: local maximum.
- $f''(c)=0$: inconclusive, not “no extremum”.

Here $f''=2x-5$, so $f''(1)=-3$ and $f''(4)=3$, agreeing with the sign-change test. At zero, $x^4$, $-x^4$ and $x^3$ all have first and second derivatives zero but have different behaviour.

## Concavity and inflection

$f''>0$ means the gradient is increasing, so the graph is concave up. $f''<0$ means the gradient is decreasing, so it is concave down. Concavity is independent of whether the function itself is increasing: a negative gradient becoming less negative is concave up.[^1]

An inflection point requires continuity and an actual change of concavity. Solve $f''=0$ and consider places where $f''$ is undefined to find candidates, then test both sides.

For $f(x)=x^3-6x^2+9x+30$,
$$
f''(x)=6(x-2).
$$
It changes from negative to positive at $x=2$, where $f(2)=32$. The inflection point is $(2,32)$.

## Taylor and Maclaurin approximations

A Taylor polynomial matches a function's value and successive derivatives at a chosen centre $a$:[^1]
$$
f(x)\approx f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots+\frac{f^{(N)}(a)}{N!}(x-a)^N.
$$
Maclaurin means $a=0$. The first-order approximation is the tangent line used in small-signal models. Higher terms capture local curvature and further variation.

Useful expansions are collected in [[Sequences & Series#Power series|Power series]]. For $\sin x$ about $a=\pi/2$,
$$
f(a)=1,\quad f'(a)=0,\quad f''(a)=-1,\quad f'''(a)=0,
$$
so the polynomial through cubic order is
$$
\sin x\approx1-\frac12\left(x-\frac\pi2\right)^2.
$$
The cubic coefficient vanishes; “third order” does not require a non-zero cubic term. A truncated Taylor polynomial is a local approximation. An infinite Taylor series equals the function only where its remainder tends to zero; smoothness alone does not justify equality everywhere.

## Rolle and mean value theorems

If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a)=f(b)$, **Rolle's theorem** guarantees at least one interior point with $f'(c)=0$.[^1]

Under the same continuity and differentiability assumptions, the **mean value theorem** guarantees some $c\in(a,b)$ such that
$$
f'(c)=\frac{f(b)-f(a)}{b-a}.
$$
Some instantaneous rate equals the overall average rate. Equal endpoint values reduce this to Rolle's theorem. Both hypotheses matter; a sharp corner can prevent the required derivative from existing.

## Functions of several variables

A function $z=f(x,y)$ maps each permitted ordered pair to one real output. Its domain lies in $\mathbb R^2$, its graph is a surface, and its range lies in $\mathbb R$.[^2]

For $f(x,y)=\sqrt{9-x^2-y^2}$:
$$
D=\{(x,y):x^2+y^2\le9\},\qquad 0\le f\le3.
$$
The domain is a filled disk of radius $3$ and the graph the upper hemisphere.

- A **level curve** holds the output constant: $f(x,y)=c$.
- A **vertical trace** holds one input constant: $z=f(a,y)$ or $z=f(x,b)$.
- A **level surface** for three inputs is $f(x,y,z)=c$.

For $f(x,y)=\sin x\cos y$, fixing $x=a$ gives a scaled cosine in $y$; fixing $y=b$ gives a scaled sine in $x$.

## Partial derivatives

A partial derivative varies one input while holding the others fixed:[^2]
$$
f_x=\lim_{h\to0}\frac{f(x+h,y)-f(x,y)}h,\qquad
f_y=\lim_{h\to0}\frac{f(x,y+h)-f(x,y)}h.
$$
Use ordinary differentiation rules, treating the other variable as a constant. For
$$
f(x,y)=x^2y+3xy^2,
$$
$$
f_x=2xy+3y^2,\qquad f_y=x^2+6xy.
$$
The second derivatives are
$$
f_{xx}=2y,\quad f_{yy}=6x,\quad f_{xy}=f_{yx}=2x+6y.
$$
Here $f_{xy}$ means differentiate $f_x$ with respect to $y$. Mixed derivatives agree when the relevant second partial derivatives are continuous in a neighbourhood; do not assume equality without suitable regularity.

For a voltage and temperature dependent device current $I(V,T)$, $\partial I/\partial V$ means the voltage response at fixed temperature, not the full response along an experiment in which temperature also changes.

## Parametric derivatives

![[Mathematics A Cheat Sheet#Rules of Parametric to Cartesian]]

For a curve $x=x(t),y=y(t)$, the chain rule gives $dy/dt=(dy/dx)(dx/dt)$. Hence, where $x'(t)\ne0$,[^2]
$$
\frac{dy}{dx}=\frac{y'(t)}{x'(t)}.
$$
To differentiate again with respect to $x$, differentiate the first slope with respect to $t$ and divide by $x'(t)$:
$$
\frac{d^2y}{dx^2}=\frac{d(dy/dx)/dt}{dx/dt}.
$$
It is generally **not** $y''(t)/x''(t)$.

For $x=t^2+1$, $y=t^3-3t$ on $0\le t\le2$,
$$
\frac{dy}{dx}=\frac{3t^2-3}{2t},\qquad
\frac{d^2y}{dx^2}=\frac{3(t^2+1)}{4t^3}\quad(t\ne0).
$$
The only interior stationary value in the allowed interval is $t=1$, giving $(x,y)=(2,-2)$ and second derivative $3/2>0$, a local minimum. The algebraic solution $t=-1$ is outside the domain. At $t=0$, $x'=0$ and $y'=-3$, so the finite-slope formula fails and the curve has a vertical tangent there. Endpoints must be checked separately for absolute extrema.

## Newton's method

Newton's method approximates a root of $f(x)=0$ by repeatedly replacing the function with its tangent at the current estimate.[^2]

Set the tangent's output to zero:
$$
0=f(x_n)+f'(x_n)(x_{n+1}-x_n)
\implies x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}.
$$
Choose an initial estimate, calculate the next estimate, and repeat until a suitable residual tolerance such as $|f(x_n)|<\varepsilon$ is met. A small residual measures equation error; it need not imply a small position error when the slope is tiny.

For $f(x)=x^2-2$, Newton's iteration simplifies to
$$
x_{n+1}=x_n-\frac{x_n^2-2}{2x_n}
=\frac12\left(x_n+\frac2{x_n}\right).
$$
Starting with $x_0=1$ gives
$$
x_1=1.5,\qquad x_2\approx1.4166667,\qquad x_3\approx1.4142157.
$$
At the third iterate, the residual is $x_3^2-2\approx6.01\times10^{-6}$. Compare the residual with the chosen tolerance rather than relying on the number of displayed decimal places. A step-size condition such as $|x_{n+1}-x_n|<\varepsilon_x$ checks a different quantity; robust implementations also limit iterations and guard against a near-zero denominator.

The method is not guaranteed to converge. It can fail at zero derivative, jump far from the root when the derivative is small, cycle, or approach a different root. For $f(x)=-x^3+4x^2-4$, starting at $x_0=0$ fails immediately because $f'(0)=0$ while $f(0)=-4$.

## State-dependent devices

A memristive device can be modelled with a resistance-like quantity depending on voltage and an internal state:
$$
i=\frac{v}{M(v,w)},
$$
where $w$ evolves with time. Its response therefore depends on its state as well as its instantaneous voltage, unlike an ideal constant resistor.[^2]

This motivates multivariable descriptions and partial derivatives. Neuromorphic computing uses electronic devices to represent neural-network operations such as a weighted sum $z=\sum_k w_kx_k+b$, with weights $w_k$ and bias $b$.

[^1]: University of Southampton, ELEC1310, Philip Calado, [Lecture 9: Differentiation Techniques notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45472), sections 5–13; [slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45419). Rolle's theorem and the mean value theorem are marked non-examinable in the notes.
[^2]: University of Southampton, ELEC1310, Philip Calado, [Lecture 10: Applications of Derivatives notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45484), §§2–5; [slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45565); [lecture recording, 23 October 2026](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=22ceb36f-8495-4f8d-8cee-b4ec00f64c14), 9:51–19:13 and 31:03–46:10. State-dependent-device context: [Applications of Derivatives 2 slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42824).
