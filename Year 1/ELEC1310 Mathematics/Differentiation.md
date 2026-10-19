---
permalink: y1/elec1310/differentiation
---
#### Differentiation

- [[#First principles]]
- [[#Differentiability and continuity]]
- [[#Derivative rules]]
- [[#Standard functions]]
- [[#Logarithmic differentiation]]
- [[#Implicit differentiation]]
- [[#Derivatives of inverse functions]]
- [[#Electronic applications]]

**[[#First principles|Instantaneous rate]]**
$$
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}h
$$
**[[#Derivative rules|Product, quotient and chain rules]]**
$$
(fg)'=f'g+fg',\qquad\left(\frac fg\right)'=\frac{f'g-fg'}{g^2},\qquad
\frac d{dx}f(g(x))=f'(g(x))g'(x)
$$
**[[#Standard functions|Standard derivatives]]**
$$
(x^n)'=nx^{n-1},\quad(e^x)'=e^x,\quad(\ln x)'=\frac1x,\quad
(\sin x)'=\cos x,\quad(\cos x)'=-\sin x
$$

## First principles

The average rate of change between $(a,f(a))$ and $(a+h,f(a+h))$ is the gradient of the secant joining them. Its limit as $h\to0$ is the tangent gradient, or derivative, at $a$:[^1]
$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h.
$$
The difference quotient must be simplified for $h\ne0$ before taking the limit. Simply setting $h=0$ gives $0/0$.

For $f(x)=x^2$,
$$
f'(a)=\lim_{h\to0}\frac{(a+h)^2-a^2}h
=\lim_{h\to0}(2a+h)=2a.
$$
Thus the derivative function is $f'(x)=2x$, and the tangent at $x=3$ has slope $6$. The tangent-line equation at any differentiable point is
$$
y=f(a)+f'(a)(x-a).
$$

Common notation: $f'(x)$, $dy/dx$ and $\frac d{dx}f(x)$. If $s(t)$ is displacement, $s'(t)$ is velocity and $s''(t)=d^2s/dt^2$ is acceleration. Derivative units are output units divided by input units; second derivatives divide by the input units twice.

### Numerical differentiation

A derivative does not require a familiar closed-form function such as a polynomial or sine. For sampled measurement data, a finite difference approximates the local slope:
$$
f'(x)\approx\frac{f(x+h)-f(x)}h.
$$
A computer uses non-zero sample spacing rather than an actual limit. Finer sampling can improve the approximation for a smooth signal, but increases data/computation requirements; measurement noise and floating-point cancellation also limit how small a useful step can be. The numerical estimate and the exact derivative are distinct.[^3]

## Differentiability and continuity

Differentiability at a point implies [[Limits & Continuity#Continuity|continuity]] there, but continuity alone is insufficient.[^1]

For $f(x)=|x|$, the graph is continuous at zero but the left slope is $-1$ and the right slope $1$. There is no unique tangent slope. Corners, discontinuities and vertical tangents therefore need care: a finite derivative need not exist.

Higher derivatives measure changes in previous derivatives. In particular, $f''$ measures how the gradient changes, not whether the original function is positive or negative.

## Derivative rules

For differentiable functions and constant $c$:[^1]
$$
(c)'=0,\qquad (cf)'=cf',\qquad(f\pm g)'=f'\pm g'.
$$
The power rule gives $d(x^n)/dx=nx^{n-1}$ wherever the real-valued expression is differentiable. Rewrite roots and reciprocals as powers, retaining their domain restrictions:
$$
\frac d{dx}\sqrt{x}=\frac1{2\sqrt{x}}\quad(x>0),\qquad
\frac d{dx}\frac1x=-\frac1{x^2}\quad(x\ne0).
$$

### Product and quotient

Differentiate one factor at a time in a product; $(fg)'$ is not $f'g'$.
$$
\frac d{dx}[(x^2+2)(3x^3-5x)]
=2x(3x^3-5x)+(x^2+2)(9x^2-5).
$$
For a quotient, the denominator must be non-zero:
$$
\frac d{dx}\left(\frac{e^{2x}}{3x^2}\right)
=\frac{3x^2(2e^{2x})-6xe^{2x}}{9x^4}
=\frac{2e^{2x}(x-1)}{3x^3},\quad x\ne0.
$$

The quotient rule can be reconstructed by writing $f/g=f\,g^{-1}$ and using the product and chain rules:
$$
(fg^{-1})'=f'g^{-1}-fg^{-2}g'=\frac{f'g-fg'}{g^2}.
$$
This also explains why the order of subtraction matters.[^3]

### Chain rule

Differentiate the outer function at the unchanged inner expression, then multiply by the inner derivative:
$$
\frac d{dx}\sin(x^2)=\cos(x^2)\cdot2x.
$$
Combining the chain and product rules,
$$
\frac d{dx}[x^2\sin(3x)]=2x\sin(3x)+3x^2\cos(3x).
$$
For a composite power, the same rule gives
$$
\frac d{dx}[g(x)]^n=n[g(x)]^{n-1}g'(x),
$$
where the power is defined and differentiable. The inner derivative is not optional.[^3]

For $y=f(u)$ and $u=g(x)$, the notation $dy/dx=(dy/du)(du/dx)$ expresses the same rule.[^2]

## Standard functions

Trigonometric derivative formulas assume **radian measure**:[^2]
$$
\begin{aligned}
(\sin x)'&=\cos x,&(\cos x)'&=-\sin x,\\
(\tan x)'&=\sec^2x,&(\cot x)'&=-\csc^2x,\\
(\sec x)'&=\sec x\tan x,&(\csc x)'&=-\csc x\cot x.
\end{aligned}
$$
Exponential and logarithmic derivatives:
$$
\begin{aligned}
\frac d{dx}e^{g(x)}&=g'(x)e^{g(x)},\\
\frac d{dx}a^x&=a^x\ln a\quad(a>0),\\
\frac d{dx}\ln(g(x))&=\frac{g'(x)}{g(x)}\quad(g(x)>0),\\
\frac d{dx}\log_bx&=\frac1{x\ln b}\quad(x>0,\ b>0,\ b\ne1).
\end{aligned}
$$
For example,
$$
\frac d{dx}\ln(x^3+\sin x)=\frac{3x^2+\cos x}{x^3+\sin x},
$$
on intervals where the logarithm's argument is positive. On an interval where $g\ne0$, $d\ln|g|/dx=g'/g$ also applies.

## Logarithmic differentiation

![[Mathematics A Cheat Sheet#Rules of Exponential Equations]]

Taking logs turns products into sums and powers into multipliers. This is especially useful when both the base and exponent vary.[^2]

For $y=(x^2+1)^x$,
$$
\ln y=x\ln(x^2+1).
$$
Differentiate both sides, remembering the chain rule on $\ln y$:
$$
\frac{y'}y=\ln(x^2+1)+\frac{2x^2}{x^2+1}.
$$
Substitute back for $y$:
$$
y'=(x^2+1)^x\left[\ln(x^2+1)+\frac{2x^2}{x^2+1}\right].
$$
For a general positive base $u(x)$ and variable exponent $v(x)$,
$$
\frac d{dx}u^v=u^v\left(v'\ln u+v\frac{u'}u\right).
$$

## Implicit differentiation

An equation can define $y$ in terms of $x$ without isolating it. Differentiate both sides with respect to $x$, treat $y$ as $y(x)$, collect the terms containing $y'$, then solve.[^2]

For the ellipse
$$
(x-1)^2+4(y+1)^2=16,
$$
$$
2(x-1)+8(y+1)y'=0
\implies y'=\frac{1-x}{4(y+1)}.
$$
This finite-slope expression requires $y\ne-1$; the exceptional points must be examined separately.

Logarithms and implicit differentiation can be combined. If $y^x=x^y$ with $x,y>0$,
$$
x\ln y=y\ln x
\implies \ln y+\frac xy y'=\frac yx+y'\ln x,
$$
so, where the denominator is non-zero,
$$
y'=\frac{y/x-\ln y}{x/y-\ln x}.
$$

## Derivatives of inverse functions

If $g=f^{-1}$ is a differentiable local inverse and $f'(g(x))\ne0$, differentiating $f(g(x))=x$ gives
$$
f'(g(x))g'(x)=1\implies g'(x)=\frac1{f'(g(x))}.
$$
The reciprocal slope must be evaluated at the corresponding input of the original function, not simply at $x$.[^2]

For $f(x)=e^x$, $g(x)=\ln x$, so $g'(x)=1/e^{\ln x}=1/x$ for $x>0$. If the original slope vanishes, a finite derivative of the inverse is not guaranteed.

## Electronic applications

For a nonlinear current–voltage characteristic, **static resistance** $V/I$ is the slope from the origin to an operating point; **differential resistance** $dV/dI$ is the local tangent slope. They need not be equal. Differential conductance is $dI/dV$, reciprocal to differential resistance where the local inverse exists.[^1][^2]

For ideal constant-valued components,
$$
i_C=C\frac{dv_C}{dt},\qquad v_L=L\frac{di_L}{dt}.
$$
A capacitor responds to voltage rate of change and an inductor to current rate of change. A constant capacitor voltage implies zero ideal capacitor current; a constant inductor current implies zero ideal inductor voltage.

The constant-component laws follow from $Q=CV$, $i=dQ/dt$ and magnetic flux linkage $\lambda=Li$. For nonlinear devices the corresponding local quantities are
$$
C_{\mathrm{diff}}=\frac{dQ}{dV},\qquad L_{\mathrm{diff}}=\frac{d\lambda}{dI}.
$$
A device can also have positive static resistance but negative differential resistance over part of its characteristic: increasing its voltage then decreases its current locally.[^2]

For a diode model $I(V)=I_S(e^{V/(nV_T)}-1)$ at fixed temperature,
$$
g_d=\frac{dI}{dV}=\frac{I_S}{nV_T}e^{V/(nV_T)}.
$$
Around an operating point $V_Q$, a sufficiently small perturbation gives
$$
I(V_Q+\Delta V)\approx I(V_Q)+g_d(V_Q)\Delta V.
$$
This replaces a nonlinear curve locally with its tangent, not with a global straight-line model.

Spatial derivatives also connect the electrostatic potential, electric field and charge density in a one-dimensional junction model:
$$
E(x)=-\frac{dV}{dx},\qquad \rho(x)=\varepsilon\frac{dE}{dx}
=-\varepsilon\frac{d^2V}{dx^2}
$$
for constant permittivity $\varepsilon$. A piecewise quadratic potential therefore corresponds to a piecewise linear electric field and piecewise constant charge density. The minus sign means the field points toward decreasing potential.[^1]

[^1]: University of Southampton, ELEC1310, Philip Calado, *An Introduction to Derivatives*, [notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45013); [slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45181), including slide 87 for the junction example.
[^2]: University of Southampton, ELEC1310, Philip Calado, [Applications of Derivatives 1 notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=44799), sections 2–4 and 13; [slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42825).

[^3]: Philip Calado, [Introduction to Derivatives recording, 13 October 2026](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=9e301411-9437-4c05-9cec-b4e201067422), 6:55–7:26, 20:10–21:19, 39:31–40:59 and 44:17–45:01.
