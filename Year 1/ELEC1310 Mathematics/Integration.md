---
permalink: y1/elec1310/integration
---
#### Integration

- [[#Antiderivatives and initial conditions]]
- [[#Definite integrals and Riemann sums]]
- [[#Integral properties]]
- [[#Fundamental theorem of calculus]]
- [[#Differentials]]
- [[#Integration by substitution]]
- [[#Integration by parts]]

**[[#Fundamental theorem of calculus|Evaluation]]**
$$
\int_a^b f(x)\,dx=F(b)-F(a),\qquad F'=f
$$
**[[#Integration by substitution|Substitution]]**
$$
\int_a^b f(g(x))g'(x)\,dx=\int_{g(a)}^{g(b)}f(u)\,du
$$
**[[#Integration by parts|Parts]]**
$$
\int u\,dv=uv-\int v\,du
$$

## Antiderivatives and initial conditions

An **antiderivative** of $f$ is a function $F$ satisfying $F'(x)=f(x)$. On an interval, any two antiderivatives differ by a constant, so the indefinite integral denotes a family:[^1]
$$
\int f(x)\,dx=F(x)+C.
$$
The interval qualification matters: on disconnected domains, separate intervals can have independent constants.

An initial condition selects one member of the family. For example, if $F'(x)=6x^2$ and $F(1)=5$, then
$$
F(x)=2x^3+C,\qquad 2+C=5\implies F(x)=2x^3+3.
$$
Check both conditions: differentiating gives $6x^2$, and substituting $x=1$ gives $5$.

Useful antiderivatives include
$$
\begin{aligned}
\int x^r\,dx&=\frac{x^{r+1}}{r+1}+C &&(r\ne-1),\\
\int\frac1x\,dx&=\ln|x|+C &&(x\ne0),\\
\int e^{kx}\,dx&=\frac1k e^{kx}+C &&(k\ne0),\\
\int\sin(kx)\,dx&=-\frac1k\cos(kx)+C &&(k\ne0),\\
\int\cos(kx)\,dx&=\frac1k\sin(kx)+C &&(k\ne0),\\
\int\frac{1}{1+x^2}\,dx&=\arctan x+C,\\
\int\frac{1}{\sqrt{1-x^2}}\,dx&=\arcsin x+C &&(|x|<1).
\end{aligned}
$$
Each formula applies where its integrand and stated real-valued expression are defined. For powers of a positive base $b\ne1$,
$$
\int b^{kx}\,dx=\frac{b^{kx}}{k\ln b}+C\qquad(k\ne0).
$$
The extra factor reverses the chain rule; differentiating the answer is a direct check.

## Definite integrals and Riemann sums

Divide $[a,b]$ into $N$ equal subintervals of width $\Delta x=(b-a)/N$. Choose a point $c_i$ in each subinterval. The **Riemann sum** is
$$
S_N=\sum_{i=1}^{N}f(c_i)\Delta x.
$$
If these sums approach the same finite value for every choice of sample points as $N\to\infty$, that value is the definite integral $\int_a^b f(x)\,dx$.[^1]

For $f(x)=x^2$ on $[0,2]$, four midpoint samples give
$$
\Delta x=\frac12,\qquad c_i=\frac14,\frac34,\frac54,\frac74,
$$
$$
S_4=\frac12\left(\frac1{16}+\frac9{16}+\frac{25}{16}+\frac{49}{16}\right)=\frac{21}{8}=2.625.
$$
The exact value is $8/3\approx2.6667$. A finite sum is an approximation, not the defining limit itself.

The integral gives **signed area**: portions below the horizontal axis subtract. Thus
$$
\int_0^{2\pi}\sin x\,dx=0,
\qquad
\int_0^{2\pi}|\sin x|\,dx=4.
$$
Zero net area does not imply that the function is zero. For total geometric area, split at sign changes and reverse the sign of each negative contribution, or integrate $|f|$.

Continuous functions, and functions with only finitely many finite jump discontinuities on a closed interval, are Riemann integrable. Integrability and having an antiderivative everywhere are different properties.

## Integral properties

For integrable functions and constants $\alpha,\beta$,[^1]
$$
\int_a^b(\alpha f+\beta g)\,dx=\alpha\int_a^b f\,dx+\beta\int_a^b g\,dx.
$$
Also,
$$
\int_a^a f\,dx=0,\qquad \int_b^a f\,dx=-\int_a^b f\,dx,
$$
$$
\int_a^b f\,dx=\int_a^c f\,dx+\int_c^b f\,dx\qquad(a\le c\le b).
$$
If $f(x)\ge g(x)$ throughout $[a,b]$, with $a\le b$, their integrals have the same ordering. In particular, $m\le f(x)\le M$ implies
$$
m(b-a)\le\int_a^b f(x)\,dx\le M(b-a).
$$
This provides a useful magnitude check before any detailed calculation.

## Fundamental theorem of calculus

If $f$ is continuous on $[a,b]$ and $F'=f$, then[^1]
$$
\int_a^b f(x)\,dx=[F(x)]_a^b=F(b)-F(a).
$$
The constant in $F+C$ cancels. A definite integral is a number, whereas an indefinite integral is a family of functions.

For example,
$$
\int_1^2\left(\frac1x+e^{2x}\right)\,dx
=\left[\ln x+\frac12e^{2x}\right]_1^2
=\ln2+\frac12(e^4-e^2).
$$
Subtract the **whole** lower-endpoint expression.

Conversely, the accumulation function
$$
A(x)=\int_a^x f(t)\,dt
$$
satisfies $A'(x)=f(x)$ wherever $f$ is continuous. The integration variable $t$ is a dummy variable; $x$ is the varying upper limit. With a differentiable upper limit $g(x)$, the chain rule gives
$$
\frac d{dx}\int_a^{g(x)}f(t)\,dt=f(g(x))g'(x).
$$
For example, $\frac d{dx}\int_0^{x^2}\cos t\,dt=2x\cos(x^2)$.

## Differentials

For $y=f(x)$, the differential is
$$
dy=f'(x)\,dx.
$$
It describes the linear response to a change in the input. For a finite increment $\Delta x$,
$$
\Delta y=f(x+\Delta x)-f(x)\approx f'(x)\Delta x;
$$
the approximation is not generally exact. For $y=\sin x$, $dy=\cos x\,dx$, while for $y=x\cos x$,
$$
dy=(\cos x-x\sin x)\,dx.
$$
Differentials provide convenient notation for the chain rule underlying substitution.[^1]

## Integration by substitution

Substitution reverses the chain rule. Choose $u=g(x)$ and compute $du=g'(x)\,dx$. Rewrite the **entire** integrand in $u$ and $du$, integrate, then return to $x$ for an indefinite integral.[^1]

For example,
$$
\begin{aligned}
\int x\sin(x^2)\,dx
&=\frac12\int\sin u\,du &&(u=x^2,\ du=2x\,dx)\\
&=-\frac12\cos u+C\\
&=-\frac12\cos(x^2)+C.
\end{aligned}
$$
The factor $1/2$ compensates for the $2x$ in $du$.

For definite integrals, transform the endpoints too:
$$
\begin{aligned}
\int_0^1 2x e^{x^2}\,dx
&=\int_0^1 e^u\,du &&(u=x^2)\\
&=e-1.
\end{aligned}
$$
Here the numerical endpoints happen to stay the same. In contrast,
$$
\int_1^2 \frac{2x}{1+x^2}\,dx
=\int_2^5\frac1u\,du
=\ln\frac52,
\qquad u=1+x^2.
$$
Do not put original $x$-limits on an expression integrated with respect to $u$. Either use transformed limits or substitute back before evaluating.

A useful recognisable pattern is
$$
\int\frac{g'(x)}{g(x)}\,dx=\ln|g(x)|+C
$$
on an interval where $g$ is differentiable and non-zero.

## Integration by parts

Integrating the product rule $d(uv)=u\,dv+v\,du$ gives[^1]
$$
\int u\,dv=uv-\int v\,du.
$$
Choose $u$ so differentiation simplifies it, and $dv$ so its antiderivative is known. The new integral should be easier than the old one.

For $\int x\sin x\,dx$, take $u=x$ and $dv=\sin x\,dx$. Then $du=dx$ and $v=-\cos x$:
$$
\int x\sin x\,dx=-x\cos x+\int\cos x\,dx
=-x\cos x+\sin x+C.
$$
Differentiation gives $-\cos x+x\sin x+\cos x=x\sin x$, verifying the signs.

The definite version is
$$
\int_a^b u(x)v'(x)\,dx=[u(x)v(x)]_a^b-\int_a^b v(x)u'(x)\,dx.
$$
For example,
$$
\int_0^1 xe^x\,dx=[xe^x]_0^1-\int_0^1e^x\,dx=e-(e-1)=1.
$$
Parts can also handle a single apparent factor by treating it as a product with $1$. For $x>0$,
$$
\int\ln x\,dx=x\ln x-\int1\,dx=x\ln x-x+C.
$$
Substitution is usually effective for a composite function accompanied by its inner derivative; parts is useful when differentiating one factor reduces a product's complexity.

[^1]: Paolo Rapisarda, ELEC1310 [Integration Notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42928), §§3.1–3.4.3; Huajie Yi, [Integration Slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42929). Published Week 6 material: the [Week 6 scope](https://moodle.ecs.soton.ac.uk/mod/page/view.php?id=42927) specifies these sections through integration by parts.
