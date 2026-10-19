---
permalink: y1/elec1310/functions
---
#### Functions

- [[#Inputs and outputs]]
- [[#Domain and range]]
- [[#Inverse functions]]
- [[#Composition]]
- [[#Polynomial functions]]
- [[#Trigonometric and periodic functions]]
- [[#Exponential and logarithmic functions]]
- [[#Hyperbolic functions]]
- [[#Extension material]]

**[[#Inverse functions|Inverse and composition]]**
$$
f^{-1}(f(x))=x\qquad (g\circ h)(x)=g(h(x))
$$

**[[#Trigonometric and periodic functions|Sinusoidal signals]]**
$$
y=A\sin(\omega t+\phi),\qquad T=\frac{2\pi}{|\omega|},\qquad
\sin^2\theta+\cos^2\theta=1
$$

**[[#Hyperbolic functions|Hyperbolic functions]]**
$$
\sinh x=\frac{e^x-e^{-x}}2\qquad
\cosh x=\frac{e^x+e^{-x}}2\qquad \cosh^2x-\sinh^2x=1
$$

## Inputs and outputs

Week 1, lecture 2, Philip Calado: Functions, Sequences and Series. This file covers the functions portion; sequences are in [[Sequences & Series]]. The slide deck includes separately labelled extension and supplemental material, distinguished below.[^1][^2]

A **function** assigns exactly one output to each allowed input. Different inputs may share an output, but one input cannot have two outputs. $f(x)$ means “the output of $f$ at $x$”, not multiplication of $f$ by $x$.

A graph represents $y$ as a function of $x$ if any vertical line intersects it at most once. Thus $y=x^2$ is a function; the full circle $x^2+y^2=1$ is not a single-valued function of $x$.

#### Example 1

For $f(x)=3x-2$, $f(4)=3(4)-2=10$. In an engineering model, writing $I(V)=V/R$ states which quantity is varied and which is fixed.

## Domain and range

The **domain** is the set of permitted inputs. The **range** is the set of outputs actually attained, not necessarily the whole declared output set (codomain).

- $f(x)=x^2$ on $\mathbb R$ has range $[0,\infty)$.
- $g(x)=1/(x-2)$ excludes $x=2$ and never outputs zero.
- $h(x)=\sqrt{x-3}$ over the reals requires $x\geq3$, with range $[0,\infty)$.
- $\ln x$ requires $x>0$.

Physical models may impose further restrictions. A charging experiment starting at $t=0$ uses $t\geq0$, even if the formula can be evaluated at negative times.

#### Example 2

For $f(x)=1/(x^2+1)$ with real $x$, the denominator is at least 1. Hence $0<f(x)\leq1$: the range is $(0,1]$. Zero is approached for large $|x|$ but never attained.

## Inverse functions

An inverse undoes a function. To invert $y=f(x)$, solve for $x$ in terms of $y$, then rename the independent variable. Domain and range swap roles.

#### Example 3

$$
y=3x-2\quad\Rightarrow\quad x=\frac{y+2}{3}
\quad\Rightarrow\quad f^{-1}(x)=\frac{x+2}{3}.
$$
Check by composition: $f^{-1}(f(x))=(3x-2+2)/3=x$.

An inverse function requires a one-to-one mapping on the chosen domain. $x^2$ on all real numbers fails because $x$ and $-x$ give the same result. Restricting the domain to $[0,\infty)$ gives inverse $\sqrt{x}$. Restricting it instead to $(-\infty,0]$ gives inverse $-\sqrt{x}$.

> [!WARNING] Inverse is not reciprocal
> $f^{-1}(x)$ denotes an inverse function, whereas $1/f(x)$ denotes a reciprocal. They are generally different.

## Composition

$(g\circ h)(x)=g(h(x))$ means apply $h$ first, then apply $g$ to the result. In general $g\circ h\neq h\circ g$.

#### Example 4

Let $g(x)=x+1$ and $h(x)=x^2$:
$$
g(h(x))=x^2+1,\qquad h(g(x))=(x+1)^2.
$$
For $g(x)=\sqrt{x}$ and $h(x)=x-2$, $g(h(x))=\sqrt{x-2}$ requires $x\geq2$. An input must belong to the inner function's domain and its output must lie in the outer function's domain.

When both component inverses exist, the inverse composition reverses the order:
$$
(g\circ h)^{-1}=h^{-1}\circ g^{-1}.
$$
This last relation is supplemental in the slide deck.

## Polynomial functions

A polynomial is a finite sum of nonnegative integer powers:
$$
p(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0,\qquad a_n\neq0.
$$
The largest exponent is the **degree**: linear (1), quadratic (2), cubic (3). Functions such as $1/x$, $\sqrt{x}$ and $2^x$ are not polynomials.

A **root** satisfies $p(x)=0$. Reuse the Foundation Year methods and worked examples:

![[Mathematics A Cheat Sheet#Factoring quadratics]]

> [!WARNING] Square roots in the embedded example
> For unrestricted real variables, $\sqrt{16x^2}=4|x|$ and $\sqrt{25y^2}=5|y|$. The embedded example's $4x$ and $5y$ require nonnegative variables. Its difference-of-squares factorisation itself remains valid for all real $x,y$.

For Year 1, connect the algebra to the function: real roots are horizontal-axis intercepts. The discriminant $b^2-4ac$ distinguishes two distinct real roots, one repeated real root, and no real roots for positive, zero, and negative discriminant respectively. Having no real roots does not stop the polynomial being a real-valued function.

## Trigonometric and periodic functions

The Foundation Year identity toolkit remains useful:

![[Mathematics A Cheat Sheet#Rules of Trigonometric Identities]]

For Year 1, interpret these as functions of an angle, not only triangle manipulations. On the unit circle, the point at angle $\theta$ is $(\cos\theta,\sin\theta)$, extending the definitions beyond acute angles. Pythagoras explains the embedded identity $\sin^2\theta+\cos^2\theta=1$.

Sine and cosine have real domain and range $[-1,1]$. Tangent is undefined at $\theta=\pi/2+k\pi$, $k\in\mathbb Z$, where cosine is zero.

A periodic function satisfies $f(t+T)=f(t)$ for a positive period $T$. For a sinusoid $y=A\sin(\omega t+\phi)$:

- $|A|$ is peak amplitude about zero.
- $\omega$ is angular frequency in radians per second.
- $\phi$ is phase in radians; it is not itself a time delay.
- $T=2\pi/|\omega|$ and $f=1/T$ for nonzero $\omega$.
- Peak-to-peak amplitude is $2|A|$; RMS is $|A|/\sqrt2$ for a pure, zero-mean sinusoid.

#### Example 5

For $v(t)=4\sin(100\pi t+\pi/6)\,\mathrm V$, the amplitude is $4\,\mathrm V$, frequency is $50\,\mathrm{Hz}$, period is $20\,\mathrm{ms}$ and peak-to-peak voltage is $8\,\mathrm V$. Its RMS voltage is $2\sqrt2\,\mathrm V$.

## Exponential and logarithmic functions

In $a^x$, the variable is the exponent; in $x^n$, it is the base. For $a>1$, $a^x$ grows with $x$; for $0<a<1$ it decays. The natural exponential uses $e\approx2.71828$.

The inverse of $e^x$ is $\ln x$:
$$
\ln(e^x)=x,\qquad e^{\ln x}=x\quad(x>0).
$$
For arbitrary positive base $a$, $a^x=e^{x\ln a}$. See [[Numbers & Algebra#Powers and logarithms]] for manipulation rules.

The lecture notes use capacitor charging as an application:
$$
V(t)=V_0(1-e^{-t/(RC)}),\qquad t\geq0.
$$
At $t=0$ the voltage is zero; at $t=RC$ it is $(1-e^{-1})V_0\approx0.632V_0$; it approaches $V_0$ as time grows. The exponent is dimensionless because $RC$ has units of time.

## Hyperbolic functions

Hyperbolic functions combine exponentials rather than describing rotation around a circle:
$$
\cosh x=\frac{e^x+e^{-x}}2,\qquad
\sinh x=\frac{e^x-e^{-x}}2.
$$
At zero, $\cosh0=1$ and $\sinh0=0$. $\cosh$ is even and $\sinh$ is odd. Expanding the squares verifies
$$
\cosh^2x-\sinh^2x
=\frac{(e^x+e^{-x})^2-(e^x-e^{-x})^2}{4}=1.
$$
The minus sign distinguishes this identity from the circular trigonometric identity.

## Extension material

The following is explicitly extension/supplemental material in the same week 1 deck, not a claim that all of it was presented live.[^1]

### Polynomial division and roots

Dividing $p(x)$ by $x-a$ gives $p(x)=(x-a)q(x)+r$, where the remainder is $r=p(a)$. Thus $x-a$ is a factor exactly when $p(a)=0$.

For integer coefficients, a **rational** root written in lowest terms as $p/q$ must have numerator dividing the constant coefficient and denominator dividing the leading coefficient. This generates candidates, not guaranteed roots; irrational roots need not appear in that list.

#### Example 6

For $f(x)=x^3-2x^2-5x+6$, try the candidates $\pm1,\pm2,\pm3,\pm6$. Since $f(1)=0$, divide by $x-1$:
$$
f(x)=(x-1)(x^2-x-6)=(x-1)(x-3)(x+2).
$$
The roots are $1,3,-2$.

### Odd and even parts

On a domain symmetric about zero, even functions satisfy $f(-x)=f(x)$ and odd functions satisfy $f(-x)=-f(x)$. Any such function splits into
$$
f_E(x)=\frac{f(x)+f(-x)}2,\qquad f_O(x)=\frac{f(x)-f(-x)}2.
$$
For $f(x)=2x^2+3x$, the even part is $2x^2$ and the odd part is $3x$.

[^1]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=44402 — Lecture 2 slides, Functions, Sequences and Series. Functions: slides 17–44; extensions/appendices/supplemental sections are labelled in the deck.
[^2]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=44793 — Lecture 2 explanatory notes, sections 1–8. New worked examples are original illustrations; embedded Foundation Year examples retain the existing notes.
