---
title: "Formula Book"
permalink: y1/revision/elec1310/formula-book
---

ELEC1310 Mathematics · Year 1 · Semester 1

## What to memorise first

**The tables are a reference, not a list to memorise row by row.** The syllabus gives topics rather than a prescribed formula list. Some past-paper questions supplied a rule (the sine series, Cauchy–Riemann equations or RMS definition in 2025/26), but don't count on that next time.

| Topic | Recall first, then practise using it |
| --- | --- |
| Differentiation | Chain, product and quotient rules; derivatives of powers, $e^x$, $\ln x$, $\sin x$, $\cos x$ and $\tan x$. Practise applying the same rules to partial, implicit, logarithmic and parametric questions. |
| Integration | Power rule and its $1/x$ exception; primitives of $e^x$, $\sin x$, $\cos x$ and $\sec^2 x$; the two inverse-trig patterns $1/(1+x^2)$ and $1/\sqrt{1-x^2}$. Learn substitution and integration by parts, then practise choosing between them. |
| Series and limits | Taylor coefficient $f^{(n)}(a)/n!$; Maclaurin series for $e^x$, $\sin x$ and $\cos x$; matching left/right limits at a join. |
| Complex numbers | Conjugate division, Euler’s formula, the $n$th-root angle rule and the two Cauchy–Riemann comparisons. |
| ODEs and matrices | Recognise separable, linear and exact first-order equations; recall the integrating factor and three characteristic-root cases. Practise forming a matrix, finding its kernel and image, and testing invertibility. |
| RMS | Square, average over the interval, then take the square root. Derive the sine or square-wave result if needed. |

**Derive the variants.** For example, if you remember $\int\sec^2 x\,dx=\tan x+C$, you can work out $\int\sec^2(4x+1)\,dx=\tan(4x+1)/4+C$: differentiation would bring down a $4$, so dividing by $4$ cancels it. Don't memorise the shifted example as another rule. Likewise, get $\int\ln x\,dx$ by parts, and get the $\sin^2 x$ integral from the double-angle identity. Use the less common reciprocal, hyperbolic and quadratic forms below as reference until practice shows which ones you need.

### Jump to a topic

- [[#Differentiation]]
- [[#Integration]]
- [[#Taylor and Maclaurin series]]
- [[#Limits and continuity]]
- [[#Complex numbers and functions]]
- [[#Differential equations]]
- [[#Linear algebra]]
- [[#Wider syllabus reference]]
- [[#Past-paper coverage and sources]]

## Differentiation

In the tables, $u=u(x)$ and $u'=du/dx$. Use radians for trigonometric calculus. **Find the inside expression, then multiply by its derivative.** For $u=ax+b$, $u'=a$. For example, $d[\tan(ax+b)]/dx=a\sec^2(ax+b)$.

### Rules and standard derivatives

| Expression | Derivative with respect to $x$ |
| --- | --- |
| Constant $c$ | $0$ |
| $x$ or $ax+b$ | $1$ or $a$, respectively |
| $cu+dv$ | $cu'+dv'$ |
| $u^n$ | $nu^{n-1}u'$ where defined |
| $\sqrt{u}$ | $\dfrac{u'}{2\sqrt{u}}$ for $u>0$ |
| $1/u$ | $-u'/u^2$ |
| $uv$ | $u'v+uv'$ |
| $u/v$ | $\dfrac{u'v-uv'}{v^2}$ for $v\ne0$ |
| $f(u)$ | $f'(u)u'$ |
| $f^{-1}(x)$ | $\dfrac{1}{f'(f^{-1}(x))}$ if a local inverse exists and the denominator is non-zero |
| $e^u$ | $e^u u'$ |
| $A^u$ | $A^u\ln(A)\,u'$ for $A>0$ (zero if $A=1$) |
| $\ln u$ | $u'/u$ for $u>0$ |
| $\ln\lvert u\rvert$ | $u'/u$ for $u\ne0$ |
| $\log_A u$ | $\dfrac{u'}{u\ln A}$ for $u>0$, $A>0$, $A\ne1$ |
| $u^v$ | $u^v\left(v'\ln u+v\,u'/u\right)$ for $u>0$ |
| $\sin u$ | $\cos(u)\,u'$ |
| $\cos u$ | $-\sin(u)\,u'$ |
| $\tan u$ | $\sec^2(u)\,u'$ |
| $\cot u$ | $-\csc^2(u)\,u'$ |
| $\sec u$ | $\sec(u)\tan(u)\,u'$ |
| $\csc u$ | $-\csc(u)\cot(u)\,u'$ |
| $\sin^{-1} u$ | $\dfrac{u'}{\sqrt{1-u^2}}$ for $\lvert u\rvert<1$ |
| $\cos^{-1} u$ | $-\dfrac{u'}{\sqrt{1-u^2}}$ for $\lvert u\rvert<1$ |
| $\tan^{-1} u$ | $\dfrac{u'}{1+u^2}$ |
| $\sinh u$ | $\cosh(u)\,u'$ |
| $\cosh u$ | $\sinh(u)\,u'$ |
| $\tanh u$ | $\operatorname{sech}^2(u)\,u'$ |
| $\coth u$ | $-\operatorname{csch}^2(u)\,u'$ |
| $\operatorname{sech}u$ | $-\operatorname{sech}(u)\tanh(u)\,u'$ |
| $\operatorname{csch}u$ | $-\operatorname{csch}(u)\coth(u)\,u'$ |
| $\sinh^{-1}u$ | $\dfrac{u'}{\sqrt{1+u^2}}$ |
| $\cosh^{-1}u$ | $\dfrac{u'}{\sqrt{u^2-1}}$ for $u>1$ |
| $\tanh^{-1}u$ | $\dfrac{u'}{1-u^2}$ for $\lvert u\rvert<1$ |
| $\cot^{-1}u$ | $-\dfrac{u'}{1+u^2}$ for the branch taking values in $(0,\pi)$ |
| $\sec^{-1}u$ | $\dfrac{u'}{\lvert u\rvert\sqrt{u^2-1}}$ for $\lvert u\rvert>1$, using $\sec^{-1}u=\cos^{-1}(1/u)$ |
| $\csc^{-1}u$ | $-\dfrac{u'}{\lvert u\rvert\sqrt{u^2-1}}$ for $\lvert u\rvert>1$, using $\csc^{-1}u=\sin^{-1}(1/u)$ |

Here $\tan^{-1}(u)$ means the angle whose tangent is $u$. It is not $1/\tan(u)$, which is $\cot(u)$. The same convention applies to the other inverse functions. The reciprocal functions are $\sec u=1/\cos u$, $\csc u=1/\sin u$, $\cot u=\cos u/\sin u$, $\operatorname{sech}u=1/\cosh u$, $\operatorname{csch}u=1/\sinh u$, and $\coth u=\cosh u/\sinh u$.

### Derivative methods and applications

| When to use it | Formula or test |
| --- | --- |
| First principles | $f'(x)=\displaystyle\lim_{h\to0}\dfrac{f(x+h)-f(x)}h$ |
| Logarithmic differentiation | If $y\ne0$, differentiate $\ln\lvert y\rvert$ to get $y'/y$, then multiply by $y$. For variable powers use $\ln y=v\ln u$ if $y=u^v$, $u>0$. |
| Partial derivatives | $f_x=\partial f/\partial x$ holds $y$ fixed; $f_y=\partial f/\partial y$ holds $x$ fixed. For $f(x(t),y(t))$, $df/dt=f_x x'+f_y y'$, where primes here are with respect to $t$. |
| Implicit curve $F(x,y)=0$ | $F_x+F_y\,dy/dx=0$, so $dy/dx=-F_x/F_y$ when $F_y\ne0$. |
| Parametric curve $x(t),y(t)$ | $\dfrac{dy}{dx}=\dfrac{y'}{x'}$; $\dfrac{d^2y}{dx^2}=\dfrac{1}{x'}\dfrac{d}{dt}\left(\dfrac{y'}{x'}\right)=\dfrac{y''x'-y'x''}{(x')^3}$ if $x'\ne0$. |
| Tangent at $x=a$ | $y=f(a)+f'(a)(x-a)$. Normal slope is $-1/f'(a)$ if the tangent slope is finite and non-zero. |
| Stationary/critical points | Solve $f'(x)=0$; also check points in the domain where $f'$ is undefined. For absolute extrema on a closed interval, compare endpoints as well. |
| Second derivative test | At a stationary point: $f''>0$ gives a local minimum, $f''<0$ a local maximum. $f''=0$ is inconclusive; check the sign of $f'$ on both sides. |
| Inflection points | Look for a change in concavity, typically a sign change of $f''$; $f''=0$ alone is not enough. |
| Parametric critical points | If $x'\ne0$, $y'=0$ gives a horizontal tangent. If $x'=0$, inspect separately; if $y'\ne0$ the tangent is vertical. Report $(x(t),y(t))$, not just $t$. |
| Newton’s method | $x_{n+1}=x_n-f(x_n)/f'(x_n)$, with $f'(x_n)\ne0$. |

See [[Differentiation]] and [[Applications of Derivatives]].

## Integration

### How to use the scaled forms

In the tables below, $u=ax+b$, with $a\ne0$. Every result in the **antiderivative** column takes **$+C$**. Work on an interval where the integrand is defined. For example:

$$
\int \sec^2(ax+b)\,dx=\frac{\tan(ax+b)}a+C.
$$

The $1/a$ cancels the factor $a$ that differentiation would bring down. If $a=0$, the inside expression is constant; integrate the resulting constant, if it exists. For a nonlinear inside expression $u=g(x)$, the rule is instead $\int g'(x)F(g(x))\,dx=H(g(x))+C$ when $H'=F$. **You need the inside derivative in the integrand, up to a constant.** You cannot generally divide by a non-constant $g'(x)$. For instance, $\int 2x\cos(x^2)\,dx=\sin(x^2)+C$, but $\int\cos(x^2)\,dx$ does not have an elementary antiderivative.

### Standard antiderivatives: algebra, logs and exponentials

| Integrand | Antiderivative, before adding $C$ |
| --- | --- |
| $k$ | $kx$ |
| $u^n$, $n\ne-1$ | $\dfrac{u^{n+1}}{a(n+1)}$ |
| $1/u$ | $\dfrac{\ln\lvert u\rvert}{a}$ |
| $\sqrt u$ | $\dfrac{2u^{3/2}}{3a}$ |
| $1/\sqrt u$ | $\dfrac{2\sqrt u}{a}$ |
| $1/u^2$ | $-\dfrac{1}{au}$ |
| $e^u$ | $e^u/a$ |
| $A^u$, $A>0$, $A\ne1$ | $\dfrac{A^u}{a\ln A}$ |
| $\ln\lvert u\rvert$ | $\dfrac{u\ln\lvert u\rvert-u}{a}$ |
| $\log_A u$, $u>0$, $A>0$, $A\ne1$ | $\dfrac{u\ln u-u}{a\ln A}$ |
| $\dfrac{\ln\lvert u\rvert}{u}$ | $\dfrac{(\ln\lvert u\rvert)^2}{2a}$ |
| $\dfrac{(\ln\lvert u\rvert)^n}{u}$, $n\ne-1$ | $\dfrac{(\ln\lvert u\rvert)^{n+1}}{a(n+1)}$ where defined |
| $\dfrac{1}{u\ln\lvert u\rvert}$ | $\dfrac{\ln\lvert\ln\lvert u\rvert\rvert}{a}$ |
| $u^n\ln u$, $u>0$, $n\ne-1$ | $\dfrac{u^{n+1}}{a(n+1)}\left(\ln u-\dfrac{1}{n+1}\right)$ |

**Log recognition:** $\int g'(x)/g(x)\,dx=\ln\lvert g(x)\rvert+C$. For example, $\int x/(x^2-1)\,dx=\frac12\ln\lvert x^2-1\rvert+C$; the numerator is half the derivative of the denominator. Use integration by parts for $\ln x$ on its own or for $x^n\ln x$.

### Standard antiderivatives: trigonometric and hyperbolic

| Integrand | Antiderivative, before adding $C$ |
| --- | --- |
| $\sin u$ | $-\cos(u)/a$ |
| $\cos u$ | $\sin(u)/a$ |
| $\tan u$ | $-\ln\lvert\cos u\rvert/a$ |
| $\cot u$ | $\ln\lvert\sin u\rvert/a$ |
| $\sec^2 u$ | $\tan(u)/a$ |
| $\csc^2 u$ | $-\cot(u)/a$ |
| $\sec u\,\tan u$ | $\sec(u)/a$ |
| $\csc u\,\cot u$ | $-\csc(u)/a$ |
| $\sec u$ | $\ln\lvert\sec u+\tan u\rvert/a$ |
| $\csc u$ | $\ln\lvert\csc u-\cot u\rvert/a$ |
| $\sin^2 u$ | $x/2-\sin(2u)/(4a)$ |
| $\cos^2 u$ | $x/2+\sin(2u)/(4a)$ |
| $\sin u\cos u$ | $\sin^2(u)/(2a)$ |
| $\tan^2 u$ | $\tan(u)/a-x$ |
| $\cot^2 u$ | $-\cot(u)/a-x$ |
| $\sinh u$ | $\cosh(u)/a$ |
| $\cosh u$ | $\sinh(u)/a$ |
| $\tanh u$ | $\ln(\cosh u)/a$ |
| $\coth u$ | $\ln\lvert\sinh u\rvert/a$ |
| $\operatorname{sech}^2u$ | $\tanh(u)/a$ |
| $\operatorname{csch}^2u$ | $-\coth(u)/a$ |
| $\operatorname{sech}u\,\tanh u$ | $-\operatorname{sech}(u)/a$ |
| $\operatorname{csch}u\,\coth u$ | $-\operatorname{csch}(u)/a$ |
| $\operatorname{sech}u$ | $\tan^{-1}(\sinh u)/a$ |
| $\operatorname{csch}u$ | $\ln\lvert\tanh(u/2)\rvert/a$ |

### Standard antiderivatives: quadratics, roots and inverse functions

Here $c>0$ is a scale, independent of the slope $a$ in $u=ax+b$. In particular, **Use $\tan^{-1}$ for a sum of squares and $\sin^{-1}$ for a square root of a difference of squares.**

| Integrand | Antiderivative, before adding $C$ |
| --- | --- |
| $\dfrac{1}{c^2+u^2}$ | $\dfrac{1}{ac}\tan^{-1}(u/c)$ |
| $\dfrac{1}{\sqrt{c^2-u^2}}$ | $\dfrac{1}{a}\sin^{-1}(u/c)$, $\lvert u\rvert<c$ |
| $\dfrac{1}{\sqrt{c^2+u^2}}$ | $\dfrac{1}{a}\sinh^{-1}(u/c)=\dfrac{1}{a}\ln\big((u+\sqrt{u^2+c^2})/c\big)$ |
| $\dfrac{1}{\sqrt{u^2-c^2}}$ | $\dfrac{1}{a}\ln\big\lvert (u+\sqrt{u^2-c^2})/c\big\rvert$, $\lvert u\rvert>c$ |
| $\dfrac{1}{c^2-u^2}$ | $\dfrac{1}{2ac}\ln\left\lvert\dfrac{c+u}{c-u}\right\rvert$ |
| $\dfrac{1}{u^2-c^2}$ | $\dfrac{1}{2ac}\ln\left\lvert\dfrac{u-c}{u+c}\right\rvert$ |
| $\sqrt{c^2-u^2}$ | $\dfrac{u\sqrt{c^2-u^2}+c^2\sin^{-1}(u/c)}{2a}$ |
| $\sqrt{u^2+c^2}$ | $\dfrac{u\sqrt{u^2+c^2}+c^2\sinh^{-1}(u/c)}{2a}$ |
| $\sqrt{u^2-c^2}$ | $\dfrac{u\sqrt{u^2-c^2}-c^2\ln\big\lvert(u+\sqrt{u^2-c^2})/c\big\rvert}{2a}$ |
| $\sin^{-1} u$ | $\dfrac{u\sin^{-1} u+\sqrt{1-u^2}}a$ |
| $\cos^{-1} u$ | $\dfrac{u\cos^{-1} u-\sqrt{1-u^2}}a$ |
| $\tan^{-1} u$ | $\dfrac{u\tan^{-1} u-\frac12\ln(1+u^2)}a$ |
| $1/(1-u^2)$ | $\dfrac{1}{2a}\ln\left\lvert\dfrac{1+u}{1-u}\right\rvert$, equal to $\tanh^{-1}(u)/a$ for $\lvert u\rvert<1$ |

The first two rows include the familiar $1/(1+x^2)$ and $1/\sqrt{1-x^2}$ cases. For example, $\int dx/[9+(2x-1)^2]=\frac16\tan^{-1}((2x-1)/3)+C$: the $2$ comes from the inner slope and the $3$ from the quadratic scale.

### Method choice, bounds and numerical integration

| When to use it | Formula or procedure |
| --- | --- |
| Linearity | $\int(\alpha f+\beta g)\,dx=\alpha\int f\,dx+\beta\int g\,dx$ (combine arbitrary constants into one). |
| Substitution | If $u=g(x)$, $du=g'(x)dx$. For bounds $p,q$, $\displaystyle\int_p^q F(g(x))g'(x)\,dx=\int_{g(p)}^{g(q)}F(u)\,du$. Either change the bounds or return to $x$ before applying them. |
| By parts | $\int u\,dv=uv-\int v\,du$; with bounds, $\displaystyle\int_p^q u v'\,dx=[uv]_p^q-\int_p^q u'v\,dx$. Useful when differentiating a factor simplifies it. |
| Quadratic under a square root | For $\sqrt{c^2-u^2}$ try $u=c\sin\theta$; for $\sqrt{c^2+u^2}$ try $u=c\tan\theta$; for $\sqrt{u^2-c^2}$ on $u\ge c$ try $u=c\sec\theta$. Choose a range for $\theta$ that fixes the square-root sign. |
| Rational functions | Divide polynomials first if numerator degree $\ge$ denominator degree. Factor. For a repeated linear factor $(x-r)^m$, include $\sum_{k=1}^m A_k/(x-r)^k$. For repeated irreducible quadratics $q(x)^m$, include $\sum_{k=1}^m(B_kx+C_k)/q(x)^k$. |
| Simple partial-fraction factors (also complex) | If $R(x)=P(x)/[(x-r)Q(x)]$ with $Q(r)\ne0$, the coefficient of $1/(x-r)$ is $P(r)/Q(r)$. For two conjugate poles and real coefficients, the two coefficients are conjugates. |
| Complete the square | $Ax^2+Bx+C=A[(x+B/(2A))^2+(4AC-B^2)/(4A^2)]$ for $A\ne0$. Split a linear numerator into a multiple of the denominator derivative plus a constant. Then use log and $\tan^{-1}$ or log-root forms as appropriate. |
| Fundamental theorem | $\int_p^q f(x)\,dx=F(q)-F(p)$ when $F'=f$ and $f$ is continuous on the interval; an antiderivative subject to $F(x_0)=y_0$ is $F(x)=y_0+\int_{x_0}^{x} f(t)\,dt$. |
| Variable limits | $\dfrac{d}{dx}\int_{g(x)}^{h(x)} f(t)\,dt=f(h(x))h'(x)-f(g(x))g'(x)$. |
| Symmetry | $\int_{-L}^L f(x)\,dx=0$ for odd $f$; $=2\int_0^L f(x)\,dx$ for even $f$, when integrable. |
| Improper at infinity | $\displaystyle\int_a^\infty f(x)\,dx=\lim_{R\to\infty}\int_a^R f(x)\,dx$; similarly take the lower limit to $-\infty$ for a left tail. |
| Improper at a finite point | For a singularity at $a$ use $\lim_{\epsilon\downarrow0}\int_{a+\epsilon}^b f(x)\,dx$; at $b$ use $b-\epsilon$. For an interior singularity or two infinite tails, split and require **each** integral to converge independently. |
| Power tests | $\int_1^\infty x^{-p}\,dx$ converges iff $p>1$; $\int_0^1 x^{-p}\,dx$ converges iff $p<1$. |
| Riemann sum | $h=(b-a)/N$; $\displaystyle\int_a^b f(x)\,dx=\lim_{N\to\infty}h\sum_{i=0}^{N-1} f(x_i^*)$ for continuous $f$, where $x_i^*$ is in subinterval $i$. Midpoints: $x_i^*=a+(i+\frac12)h$. |
| Composite trapezium rule | With $x_i=a+ih$, $\displaystyle\int_a^b f(x)\,dx\approx h[\frac12 f(x_0)+\sum_{i=1}^{N-1}f(x_i)+\frac12 f(x_N)]$. |
| Composite Simpson’s rule | Even $N$ only: $\frac h3[f(x_0)+4f(x_1)+2f(x_2)+4f(x_3)+\cdots+4f(x_{N-1})+f(x_N)]$. |

### Trig identities, RMS and integral applications

$$
\begin{aligned}
&\sin^2\theta+\cos^2\theta=1,\quad 1+\tan^2\theta=\sec^2\theta,\quad 1+\cot^2\theta=\csc^2\theta,\\
&\sin(A\pm B)=\sin A\cos B\pm\cos A\sin B,\qquad
\cos(A\pm B)=\cos A\cos B\mp\sin A\sin B,\\
&\sin(2\theta)=2\sin\theta\cos\theta,\quad
\sin^2\theta=\frac{1-\cos(2\theta)}2,\quad
\cos^2\theta=\frac{1+\cos(2\theta)}2,\\
&\sin(3\theta)=3\sin\theta-4\sin^3\theta,\quad
\cos(3\theta)=4\cos^3\theta-3\cos\theta.
\end{aligned}
$$

| Quantity | Formula |
| --- | --- |
| Period and angular frequency | $\omega=2\pi f$, $T=1/f=2\pi/\omega$ for positive frequency. |
| Mean and RMS, interval $[a,b]$ | $\displaystyle\bar f=\frac{1}{b-a}\int_a^b f(t)\,dt$; $\displaystyle f_{\rm rms}=\sqrt{\frac{1}{b-a}\int_a^b [f(t)]^2\,dt}$. For periodic signals use any full period. |
| Sinusoid, amplitude $A$ | RMS $=\lvert A\rvert/\sqrt2$ over a full period. For offset $D$ plus a sinusoid, RMS $=\sqrt{D^2+A^2/2}$. |
| Square wave, levels $\pm A$ | RMS $=\lvert A\rvert$. For levels $A$ and $B$, high fraction $d$, RMS $=\sqrt{dA^2+(1-d)B^2}$. |
| Piecewise waveform | Square each piece first; integrate each square over its own interval. Add the integrals, divide by the total duration, then take one square root. |
| Area between curves $f\ge g$ | $S=\int_a^b (f-g)\,dx$; split where they cross if their order swaps. |
| Centroid of uniform area between $f\ge g$ | $\displaystyle\bar x=\frac{\int_a^b x(f-g)\,dx}{S}$; $\displaystyle\bar y=\frac{\int_a^b [f^2-g^2]\,dx}{2S}$. |
| Volume by washers | $V=\pi\int_a^b (R(x)^2-r(x)^2)\,dx$; $R,r$ are outer and inner radii, measured from the axis. |
| Volume by cylindrical shells | $V=2\pi\int_a^b (\text{radius})(\text{height})\,dx$ for vertical shells about a vertical axis. |
| Causal convolution (taught application) | $(f*g)(t)=\int_0^t f(\tau)g(t-\tau)\,d\tau$ for $t\ge0$ when both signals vanish at negative time. |

See [[Integration]], [[Rational Functions & Improper Integrals]] and [[Convolution & Integration Applications]].

## Taylor and Maclaurin series

Taylor is centred at $x=a$. Maclaurin is centred at $x=0$. For a finite approximation keep terms **through** the requested power, even if its coefficient is zero.

$$
P_N(x)=\sum_{n=0}^{N}\frac{f^{(n)}(a)}{n!}(x-a)^n,\qquad
f(x)=P_N(x)+\frac{f^{(N+1)}(\xi)}{(N+1)!}(x-a)^{N+1}
$$

Here $\xi$ is between $a$ and $x$ when Taylor’s theorem applies. $f^{(0)}=f$ and $0!=1$. The infinite expansion equals $f$ where the remainder tends to zero.

### Three core Maclaurin series to memorise

The course notes collect these three. They converge for all real $x$; use radians for trig functions.

$$
\begin{aligned}
e^x&=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\cdots
=\sum_{n=0}^{\infty}\frac{x^n}{n!},\\
\sin x&=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots
=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{(2n+1)!},\\
\cos x&=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots
=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n}}{(2n)!}.
\end{aligned}
$$

Replace **every** occurrence of $x$ by the inside expression. For example, $\sin(3x)=3x-27x^3/3!+243x^5/5!-\cdots$. The 2025/26 paper supplied the sine expansion and asked how to use it in a limit.

### Useful series you can derive

The public syllabus names Taylor and Maclaurin but does not list a required set of functions. These are useful extensions, not a separate official memorisation list.

| Function | Expansion and real interval |
| --- | --- |
| $\dfrac{1}{1-x}$ | $1+x+x^2+x^3+\cdots$, $\lvert x\rvert<1$ |
| $\dfrac{1}{1+x}$ | $1-x+x^2-x^3+\cdots$, $\lvert x\rvert<1$ |
| $\ln(1+x)$ | $x-x^2/2+x^3/3-x^4/4+\cdots$, $-1<x\le1$ |
| $\ln(1-x)$ | $-x-x^2/2-x^3/3-\cdots$, $-1\le x<1$ |
| $(1+x)^p$ | $1+px+\dfrac{p(p-1)}{2!}x^2+\dfrac{p(p-1)(p-2)}{3!}x^3+\cdots$ for $\lvert x\rvert<1$; terminates for non-negative integer $p$. |
| $\tan^{-1} x$ | $x-x^3/3+x^5/5-x^7/7+\cdots$, $-1\le x\le1$ |
| $\sinh x$ | $x+x^3/3!+x^5/5!+\cdots$ for all real $x$ |
| $\cosh x$ | $1+x^2/2!+x^4/4!+\cdots$ for all real $x$ |

Integrate the geometric series for $1/(1+x)$ from $0$ to $x$ to obtain $\ln(1+x)$ inside the radius of convergence; check endpoints separately. For the finite geometric sum, $\sum_{k=0}^{N-1}ar^k=a(1-r^N)/(1-r)$ when $r\ne1$, and $Na$ when $r=1$; the infinite sum is $a/(1-r)$ if $\lvert r\rvert<1$.

See [[Sequences & Series]] and [[Applications of Derivatives]].

## Limits and continuity

| Situation | Rule |
| --- | --- |
| Rational function at infinity | Divide by the highest power in the denominator. Lower numerator degree gives $0$; equal degrees gives the leading-coefficient ratio. Higher numerator degree: use the leading power after division and track its sign at the requested end. |
| Direct substitution gives $0/0$ | Try factoring and cancelling, rationalising with a conjugate, or using a standard limit/series. Do not cancel across addition. |
| Useful limits at zero | $\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1$; $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12$; $\displaystyle\lim_{x\to0}\frac{e^x-1}{x}=1$; $\displaystyle\lim_{x\to0}\frac{\ln(1+x)}{x}=1$. |
| Log at an improper endpoint | $\displaystyle\lim_{x\downarrow0}x^p\ln x=0$ for $p>0$. Useful for $\int_0^1\ln x\,dx$. |
| L’Hôpital, when permitted | For $0/0$ or $\infty/\infty$, differentiate numerator and denominator **separately** if the hypotheses hold: differentiable near the point, denominator derivative non-zero there, and the derivative ratio has a limit (possibly infinite). This is not the quotient rule. |
| Continuity at a join $x=a$ | $\lim_{x\to a^-} f(x)=\lim_{x\to a^+} f(x)=f(a)$. |
| Differentiability at a join | First check continuity; the two one-sided difference quotients at $a$ must then agree and be finite. For smooth pieces with one-sided slope limits, match those slopes. |
| Mean value theorem | If continuous on $[a,b]$ and differentiable on $(a,b)$, some $c\in(a,b)$ satisfies $f'(c)=[f(b)-f(a)]/(b-a)$. Rolle’s theorem is the case $f(a)=f(b)$. **Older paper only:** the current Lecture 9 notes label these theorems non-examinable. |

See [[Limits & Continuity]].

## Complex numbers and functions

### Rectangular form, polar form and roots

| Quantity | Formula |
| --- | --- |
| Conjugate and modulus | $z=x+jy$, $j^2=-1$, $\bar z=x-jy$, $z\bar z=x^2+y^2$, $\lvert z\rvert=\sqrt{x^2+y^2}$. In particular $z\bar z$ is always real and non-negative. |
| Division | $\dfrac{z_1}{z_2}=\dfrac{z_1\bar z_2}{\lvert z_2\rvert^2}$ for $z_2\ne0$; $1/j=-j$. |
| Polar form | $z=re^{j\theta}=r(\cos\theta+j\sin\theta)$, with $r=\lvert z\rvert$, $\theta=\operatorname{atan2}(y,x)$ modulo $2\pi$. This is the quadrant-aware angle calculation; using $\tan^{-1}(y/x)$ alone can give the wrong quadrant. $z=0$ has no argument. |
| Product and quotient | Multiply/divide moduli; add/subtract arguments. For $G=k\prod N_i/\prod D_i$ with non-zero factors: $\lvert G\rvert=\lvert k\rvert\prod\lvert N_i\rvert/\prod\lvert D_i\rvert$; $\arg G=\arg k+\sum \arg N_i-\sum \arg D_i$ modulo $2\pi$. A pole at $\omega=0$ can have a one-sided phase limit; that is not the value at the pole. |
| Exponentials and trig | $e^{x+jy}=e^x(\cos y+j\sin y)$; $\cos z=(e^{jz}+e^{-jz})/2$ and $\sin z=(e^{jz}-e^{-jz})/(2j)$. |
| Hyperbolic functions | $\cosh z=(e^z+e^{-z})/2$, $\sinh z=(e^z-e^{-z})/2$, $\tanh z=\sinh z/\cosh z$; $\cosh^2z-\sinh^2z=1$, $\cos(jz)=\cosh z$, $\sin(jz)=j\sinh z$. |
| Complex logarithm | $\log z=\ln r+j(\theta+2\pi k)$, $k\in\mathbb Z$, $z\ne0$. For a principal value use the chosen principal argument, usually $\theta\in(-\pi,\pi]$. |
| De Moivre and roots | $(re^{j\theta})^n=r^ne^{jn\theta}$. All roots of $w^n=re^{j\theta}$, $r>0$: $w_k=r^{1/n}e^{j(\theta+2\pi k)/n}$ for $k=0,\ldots,n-1$. |
| Quadratic formula and roots | If $As^2+Bs+C=0$, $s=(-B\pm\sqrt{B^2-4AC})/(2A)$, $A\ne0$. For a monic polynomial with roots $r_1,r_2$, use $(s-r_1)(s-r_2)$; roots $\alpha\pm j\beta$ give $s^2-2\alpha s+\alpha^2+\beta^2$. |
| Argand loci | $\lvert z-z_0\rvert=r$ is a circle centred at $z_0$. $<r$ is its interior, $\le r$ includes its edge. For overlap, a point must pass **both** inequalities. |

### Cauchy–Riemann

Write $f(x+jy)=u(x,y)+jv(x,y)$, where $u$ is the real part and $v$ is the coefficient of **$+j$**. If you factor out $-j$, the expression next to it is $-v$. To find $u,v$ for a complex fraction, multiply top and bottom by the denominator’s conjugate first.

$$
\boxed{\frac{\partial u}{\partial x}=\frac{\partial v}{\partial y},
\qquad
\frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x}}
$$

1. Differentiate each of $u$ and $v$ with respect to $x$ holding $y$ fixed, then with respect to $y$ holding $x$ fixed.
2. The first pair must be **equal**. The second pair must be **negatives** of one another.
3. If all four partial derivatives are continuous and both equations hold on an open region, $f$ is analytic there (complex differentiable throughout that region). Equations at an isolated point alone are not enough. Exclude points where $f$ is undefined.
4. Where it exists, $f'(z)=u_x+jv_x=v_y-ju_y$. In this notation $u_x=\partial u/\partial x$, not $dx/du$.

See [[Complex Algebra]] and [[Complex Functions]].

## Differential equations

A prime means differentiation with respect to the independent variable ($x$ or $t$). In a physical problem, define what $y$ measures before setting up the equation.

### First order

| Equation or situation | Formula or method |
| --- | --- |
| Separable $y'=g(x)h(y)$ | If $h(y)\ne0$, $\int dy/h(y)=\int g(x)\,dx+C$. Also test constant solutions $h(y)=0$ before dividing. |
| First-order homogeneous type $y'=F(y/x)$ | Put $v=y/x$, so $y=xv$ and $y'=v+xv'$. Hence $xv'=F(v)-v$; separate on intervals with $x\ne0$ and check constant-ratio solutions before dividing by $F(v)-v$. |
| Linear $y'+P(x)y=Q(x)$ | $\mu=e^{\int P(x)\,dx}$; $(\mu y)'=\mu Q$; $y=\dfrac{\int \mu Q\,dx+C}{\mu}$. Divide by the coefficient of $y'$ before identifying $P,Q$. |
| Exact $M\,dx+N\,dy=0$ | Test $M_y=N_x$ (with continuous partials on a simply connected region). Find $F$ with $F_x=M$, $F_y=N$; integrate $M$ in $x$ and add a function of $y$, then differentiate in $y$ to find that function. The solution is $F(x,y)=C$. |
| Constant coefficients $y'+ky=b$ | For $k\ne0$, $y(t)=y_\infty+[y(t_0)-y_\infty]e^{-k(t-t_0)}$, $y_\infty=b/k$. It tends to $y_\infty$ for $k>0$. For $k=0$, $y(t)=y(t_0)+b(t-t_0)$. |
| Time to reach target (stable $k>0$) | $\displaystyle t-t_0=\frac1k\ln\left(\frac{y(t_0)-y_\infty}{y_{\rm target}-y_\infty}\right)$ for a reachable finite-time target on a non-constant trajectory. From zero, reaching fraction $p$ of a non-zero steady state takes $-\ln(1-p)/k$, $0<p<1$; at 90% it is $\ln(10)/k$. |
| Well-mixed tank, amount $y$ | $y'=q_{\rm in}c_{\rm in}-q_{\rm out}y/V(t)$ with $V'=q_{\rm in}-q_{\rm out}$. Equal flow $q$ gives constant $V$ and decay coefficient $q/V$. |
| Euler’s numerical method | $x_{n+1}=x_n+h$, $y_{n+1}=y_n+h\,f(x_n,y_n)$ for $y'=f(x,y)$. |
| Series RC / RL | RC: $RC\,v_C'+v_C=E(t)$, $\tau=RC$. RL: $L i'+R i=E(t)$, $\tau=L/R$ for $R>0$. |

### Second order

For $ay''+by'+cy=g(t)$, $a\ne0$, solve the characteristic equation $ar^2+br+c=0$ to get the complementary solution $y_h$. Then find any particular solution $y_p$ and set $y=y_h+y_p$. Apply the two initial conditions to the full $y$ and $y'$.

| Characteristic roots | Complementary solution |
| --- | --- |
| Distinct real $r_1,r_2$ | $y_h=C_1e^{r_1t}+C_2e^{r_2t}$ |
| Repeated real $r$ | $y_h=(C_1+C_2t)e^{rt}$ |
| Complex $\alpha\pm j\beta$ | $y_h=e^{\alpha t}(C_1\cos\beta t+C_2\sin\beta t)$ |
| Build the monic ODE from roots | $y''-(r_1+r_2)y'+r_1r_2y=0$; expand $(r-r_1)(r-r_2)$. |

| Forcing or application | Formula or method |
| --- | --- |
| Polynomial $P_n(t)$ | Try a general degree-$n$ polynomial as $y_p$. |
| Exponential $e^{\lambda t}P_n(t)$ | Try $e^{\lambda t}$ times a general degree-$n$ polynomial. |
| Sinusoid $A\cos\omega t+B\sin\omega t$ | Try $C\cos\omega t+D\sin\omega t$. Keep both sine and cosine even if only one is on the right. For exponentially weighted sinusoids, multiply the trial by the same exponential. |
| Trial overlaps $y_h$ | Multiply the whole trial by $t^m$, where $m$ is the multiplicity of the matching root (check $0$ for polynomial forcing, $\lambda$ for exponential forcing, or $\lambda\pm j\omega$ for a weighted sinusoid). If there is no match, $m=0$. Substitute and match coefficients. |
| Mass–spring–damper | $my''+cy'+ky=F(t)$. $\omega_0=\sqrt{k/m}$, $\zeta=c/(2\sqrt{km})$, damped frequency $\omega_d=\omega_0\sqrt{1-\zeta^2}$ if $0\le\zeta<1$. An undamped sinusoidal drive at $\omega_0$ calls for the extra factor of $t$. |
| Series RLC / LC | With charge $q$ and current $i=q'$, $Lq''+Rq'+q/C=E(t)$. For current, differentiate: $Li''+Ri'+i/C=E'(t)$. For LC set $R=0$, giving $\omega_0=1/\sqrt{LC}$. If initial conditions are given, use original KVL to enforce consistency after differentiating. |
| Euler–Cauchy (taught extension) | $ax^2y''+bxy'+cy=0$: on $x>0$ try $y=x^r$, giving $ar(r-1)+br+c=0$. A repeated root adds $x^r\ln x$; complex roots $\alpha\pm j\beta$ give $x^\alpha\cos(\beta\ln x)$ and $x^\alpha\sin(\beta\ln x)$. |

See [[First-Order Ordinary Differential Equations]] and [[Second-Order Ordinary Differential Equations]].

## Linear algebra

| Task | Formula or test |
| --- | --- |
| Matrix product / image of one vector | $(AB)_{ij}=\sum_k A_{ik}B_{kj}$, row times column. For $A$ with columns $a_1,\ldots,a_n$, $Ax=x_1a_1+\cdots+x_na_n$. |
| Standard matrix of a linear map | $[T]=[T(e_1)\ \cdots\ T(e_n)]$, where $e_i$ is the vector with a $1$ in position $i$ and zeros elsewhere. |
| Determinant and inverse of $2\times2$ | For $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, $\det A=ad-bc$; if non-zero, $A^{-1}=\dfrac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$. |
| Larger determinants and inverse | $C_{ij}=(-1)^{i+j}\det A_{\widehat i,\widehat j}$ (delete row $i$, column $j$), $\det A=\sum_j a_{ij}C_{ij}$ along row $i$. $A^{-1}=C^{\mathsf T}/\det A$ if invertible, or row-reduce the augmented matrix $[A\ \ I]$ to $[I\ \ A^{-1}]$. |
| Unique solution to $Ax=b$, square $A$ | Exactly when $\det A\ne0$; then $x=A^{-1}b$. For general systems, an inconsistent row $[0\ \cdots\ 0\mid c]$ with $c\ne0$ means no solution. Free variables in a consistent system give infinitely many solutions. |
| Kernel / null space | $\ker A=\{x:Ax=0\}$. Row-reduce, assign one free variable at a time to $1$ and the others to $0$, and solve for the pivot variables. If there are no free variables the kernel is $\{0\}$; its basis is empty. |
| Image / column space | $\operatorname{im} A=\operatorname{span}\{a_1,\ldots,a_n\}$. Row-reduce to locate pivot columns, then take those columns from the **original** matrix, not the reduced one. |
| Rank and dimension | $\operatorname{rank}A$ is the number of pivots and the dimension of the image. For $n$ columns, $\dim\ker A=n-\operatorname{rank}A$. |
| Independence, span and basis | Columns $v_i$ are independent if $\sum_i c_iv_i=0$ forces all $c_i=0$. A basis is independent **and** spans the space. To find coordinates of $v$, solve $[v_1\ \cdots\ v_k]c=v$; for matrix-valued basis elements, equate corresponding entries. |
| Intersection of subspaces defined by equations | $\ker A\cap\ker B=\ker\begin{pmatrix}A\\B\end{pmatrix}$. Solve all equations at once. A matrix whose image is the intersection can use basis vectors of the intersection as its columns. To get a strictly larger kernel, keep fewer independent constraints and check the dimension increases. |

## Wider syllabus reference

The public module description also lists the topics below. They did not appear as dedicated questions in the two reviewed papers. Keep them separate from the paper-backed priorities rather than assuming they are either guaranteed or excluded.

### Multiple integrals and vectors

- $\int_a^b\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\,dx$: integrate in $y$ first, holding $x$ fixed. In polar coordinates $x=r\cos\theta$, $y=r\sin\theta$, $dA=r\,dr\,d\theta$. In cylindrical coordinates $dV=r\,dr\,d\theta\,dz$. In spherical coordinates $(\rho,\phi,\theta)$, with $\phi$ measured from the positive $z$-axis, $dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta$.
- Dot product $\mathbf a\cdot\mathbf b=\sum a_ib_i=\|\mathbf a\|\|\mathbf b\|\cos\theta$; projection onto non-zero $\mathbf b$ is $(\mathbf a\cdot\mathbf b)\mathbf b/(\mathbf b\cdot\mathbf b)$.
- Cross product $\mathbf a\times\mathbf b=(a_yb_z-a_zb_y,\ a_zb_x-a_xb_z,\ a_xb_y-a_yb_x)$; its magnitude is $\|\mathbf a\|\|\mathbf b\|\sin\theta$. Scalar triple product $\mathbf a\cdot(\mathbf b\times\mathbf c)$ gives signed volume; $\mathbf a\times(\mathbf b\times\mathbf c)=\mathbf b(\mathbf a\cdot\mathbf c)-\mathbf c(\mathbf a\cdot\mathbf b)$.
- Line: $\mathbf r=\mathbf r_0+t\mathbf d$; plane with normal $\mathbf n$: $\mathbf n\cdot(\mathbf r-\mathbf r_0)=0$. Differentiate and integrate vector functions component by component.
- Arc length $s=\int_a^b\|\mathbf r'(t)\|\,dt$; curvature $\kappa=\|\mathbf r'\times\mathbf r''\|/\|\mathbf r'\|^3$; torsion $\tau=(\mathbf r'\times\mathbf r'')\cdot\mathbf r'''/\|\mathbf r'\times\mathbf r''\|^2$ where the respective denominators are non-zero.
- Gradient $\nabla f=(f_x,f_y,f_z)$; directional derivative along a unit vector $\hat{\mathbf u}$ is $\nabla f\cdot\hat{\mathbf u}$. For $\mathbf F=(P,Q,R)$, divergence is $P_x+Q_y+R_z$ and curl is $(R_y-Q_z,\ P_z-R_x,\ Q_x-P_y)$ in Cartesian coordinates.

### Probability and statistics

- $P(A\cup B)=P(A)+P(B)-P(A\cap B)$; $P(A\mid B)=P(A\cap B)/P(B)$; Bayes: $P(A\mid B)=P(B\mid A)P(A)/P(B)$ if $P(B)>0$. Independence means $P(A\cap B)=P(A)P(B)$.
- Ordered selections $P(n,r)=n!/(n-r)!$; unordered selections $\binom nr=n!/[r!(n-r)!]$ without replacement. If $X\sim\operatorname{Bin}(n,p)$, $P(X=k)=\binom nk p^k(1-p)^{n-k}$, $\mathbb E[X]=np$, $\operatorname{Var}(X)=np(1-p)$.
- $\mathbb E[X]=\sum_x xP(X=x)$, or $\int x f_X(x)\,dx$ for a density. $\operatorname{Var}(X)=\mathbb E[X^2]-(\mathbb E[X])^2$. For a continuous variable, $P(a<X<b)=\int_a^b f_X(x)\,dx$.
- Sample mean $\bar x=\sum_i x_i/n$; sample variance $s^2=\sum_i(x_i-\bar x)^2/(n-1)$; estimated standard error of the mean $s/\sqrt n$ for an independent sample. For a normal variable, $Z=(X-\mu)/\sigma$.
- For a normal sample with unknown population standard deviation, a two-sided mean CI is $\bar x\pm t_{1-\alpha/2,n-1}s/\sqrt n$. The one-sample test statistic for $H_0:\mu=\mu_0$ is $t=(\bar x-\mu_0)/(s/\sqrt n)$ with $n-1$ degrees of freedom. If the population standard deviation $\sigma$ is known under the normal model, use $\sigma/\sqrt n$ and normal quantiles instead. Reject when the correctly sided $p$-value is at most the significance level $\alpha$.

## Past-paper coverage and sources

| Official ELEC1310 Semester 1 paper | Checks against this book |
| --- | --- |
| 2025/26 | A1 complex arithmetic, roots and loci; A2 Maclaurin limit, chain/product rule and partials; A3 standard integrals and an antiderivative condition; A4 exactness, separation and characteristic roots; A5 matrix representation, image and kernel. B1 transfer-function modulus/phase and complex partial fractions; B2 Cauchy–Riemann; B3 logarithmic differentiation; B4 parametric derivatives; B5 midpoint sums, log integration and improper limits; B6 RMS; B7 first-order step response and time to target; B8 LC forced response; B9–10 subspaces, bases and linear systems. |
| 2024/25 | A1 complex numbers/logarithms, rational limits and continuity, derivative and MVT questions, integration methods, ODE exactness and roots, and matrix basics. B1–2 complex response and De Moivre; B3 chain rule; B4 matching function values and slopes; B5 substitution; B6 improper convergence; B7–8 invertibility and matrix representation; B9–10 driven mass–spring and well-mixed flow. |

- [University of Southampton: ELEC1310 2026/27 syllabus](https://www.southampton.ac.uk/courses/2026-27/modules/elec1310). The public syllabus describes topics, not a prescribed formula list.
- [Functions, Sequences and Series lecture notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=44793), [[Sequences & Series#Power series|vault summary]], and [Differentiation Techniques lecture notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45472), including the current MVT/Rolle scope note.
- [Differentiation slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45419), [Integration notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42928), [Complex Algebra notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42403), [first-order ODE slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42855), and [second-order applications slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42860). Moodle links may require sign-in.
- Official past papers cross-checked by question number. The papers themselves are not reproduced here.
