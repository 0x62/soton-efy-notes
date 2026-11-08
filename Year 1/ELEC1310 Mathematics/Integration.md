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
- [[#Trigonometric integrals]]
- [[#Choosing and checking a method]]

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
For equal-width intervals, the common choices are
$$
c_i=a+(i-1)\Delta x\quad\text{(left)},\qquad
c_i=a+i\Delta x\quad\text{(right)},\qquad
c_i=a+\left(i-\frac12\right)\Delta x\quad\text{(midpoint)}.
$$
The choice affects a finite approximation, so state it explicitly.

The exact value is $8/3\approx2.6667$. A finite sum is an approximation, not the defining limit itself.

The integral gives **signed area**: portions below the horizontal axis subtract. Thus
$$
\int_0^{2\pi}\sin x\,dx=0,
\qquad
\int_0^{2\pi}|\sin x|\,dx=4.
$$
Zero net area does not imply that the function is zero. For total geometric area, split at sign changes and reverse the sign of each negative contribution, or integrate $|f|$.

Continuous functions, bounded monotone functions, and piecewise-continuous functions with finite one-sided limits on a closed interval are Riemann integrable. Integrability and having an antiderivative everywhere are different properties.

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

### A variable lower limit

Reversing the limits introduces a minus sign:[^2]
$$
B(x)=\int_x^a f(t)\,dt=-\int_a^x f(t)\,dt
\quad\Longrightarrow\quad B'(x)=-f(x).
$$
If both bounds vary, split at a fixed point and apply the chain rule to each term:
$$
\frac d{dx}\int_{g(x)}^{h(x)}f(t)\,dt
=f(h(x))h'(x)-f(g(x))g'(x).
$$
For example,
$$
\frac d{dx}\int_x^{x^2}\frac{dt}{1+t^2}
=\frac{2x}{1+x^4}-\frac1{1+x^2}.
$$
Substitute each bound into the **integrand**, then multiply by that bound's derivative. The lower-bound contribution is subtracted.

### An integral equation

Suppose
$$
f(x)=1+2\int_0^x f(t)\,dt.
$$
1. Differentiate both sides: $f'(x)=2f(x)$.
2. This suggests $f(x)=Ae^{2x}$, because differentiating $e^{2x}$ multiplies it by $2$.
3. Substitute $x=0$ into the original equation: $f(0)=1+0=1$, so $A=1$.
4. Check the proposed answer in the original equation:
   $$1+2\int_0^x e^{2t}\,dt
   =1+[e^{2t}]_0^x=1+e^{2x}-1=e^{2x}.$$

The lower limit sets the initial condition. With a lower limit of $a$ instead, the same calculation gives $f(x)=e^{2(x-a)}$.[^1]

### An integrable function need not have an antiderivative

Let $f(x)=0$ except at $x=0$, where $f(0)=1$. Its integral over any finite interval is zero: the nonzero sample contributions total at most two interval widths, which tends to zero. However, there is no differentiable $F$ with $F'=f$ everywhere. If there were, $F'=0$ on either side of zero would make $F$ constant on each side. Continuity at zero would force the constants to agree, making $F'(0)=0$, contradicting $f(0)=1$. Thus the continuity assumption in the fundamental theorem cannot simply be ignored.[^1]

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
The differential also identifies **which variable is changing**. If $t$ is independent of $x$, then
$$
\int t\,dx=tx+C,
$$
not $t^2/2+C$. If $t=t(x)$, it is not a constant and that answer generally fails. Similarly,
$$
\int\cos x\,d(\cos x)=\frac12\cos^2x+C,
$$
whereas $\int\cos x\,dx=\sin x+C$. In the first expression, set $u=\cos x$: it is simply $\int u\,du$.[^2]

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

### A trigonometric substitution with a negative sign

Find $\int\cos^4t\sin t\,dt$.[^2]

1. Set $u=\cos t$.
2. Differentiate: $du=-\sin t\,dt$, so $\sin t\,dt=-du$.
3. Replace both parts of the integrand:
   $$\int\cos^4t\sin t\,dt=-\int u^4\,du.$$
4. Apply the power rule and substitute back:
   $$-\frac{u^5}{5}+C=-\frac{\cos^5t}{5}+C.$$
5. Differentiate to check: $-\frac15(5\cos^4t)(-\sin t)=\cos^4t\sin t$.

### Initial conditions after substitution

Find an antiderivative of $\sin x\sqrt{\cos x}$ with $F(\pi/2)=1$.[^3]

1. Work on a real-valued interval where $\cos x\ge0$, such as $[-\pi/2,\pi/2]$.
2. Set $u=\cos x$, so $du=-\sin x\,dx$.
3. Integrate:
   $$F(x)=-\int u^{1/2}\,du=-\frac23u^{3/2}+C
   =-\frac23(\cos x)^{3/2}+C.$$
4. At $x=\pi/2$, $\cos x=0$, so $F(\pi/2)=C=1$.
5. Hence $F(x)=1-\frac23(\cos x)^{3/2}$ on that interval. Its derivative in the interior is $\sin x\sqrt{\cos x}$, and it has the required endpoint value.

A constant fixed on one connected interval does not determine independent constants on disconnected parts of the real domain.

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

### A polynomial times an exponential

Find $\int te^{2t}\,dt$.[^2]

1. Choose $u=t$ and $dv=e^{2t}\,dt$.
2. Then $du=dt$ and $v=\frac12e^{2t}$.
3. Substitute into $\int u\,dv=uv-\int v\,du$:
   $$\int te^{2t}\,dt=\frac12te^{2t}-\frac12\int e^{2t}\,dt.$$
4. Integrate the remaining exponential:
   $$\boxed{\int te^{2t}\,dt=\frac12te^{2t}-\frac14e^{2t}+C}.$$
5. Check by differentiating:
   $$\frac12e^{2t}+te^{2t}-\frac12e^{2t}=te^{2t}.$$

The factor $1/2$ appears each time $e^{2t}$ is integrated. Choosing the exponential as $u$ instead makes the remaining polynomial degree larger and the problem harder.

## Trigonometric integrals

![[Mathematics A Cheat Sheet#Rules of Trigonometric Identities]]

### Squared sine and cosine

Rearrange the double-angle identities before integrating:[^3]
$$
\sin^2x=\frac{1-\cos2x}{2},\qquad
\cos^2x=\frac{1+\cos2x}{2}.
$$
Therefore,
$$
\int\sin^2x\,dx
=\frac12\int1\,dx-\frac12\int\cos2x\,dx
=\frac x2-\frac{\sin2x}{4}+C,
$$
$$
\int\cos^2x\,dx=\frac x2+\frac{\sin2x}{4}+C.
$$
Since $\sin(-x)=-\sin x$, $\sin^2(-x)=\sin^2x$. These integrands have the same antiderivative family; the negative argument does not introduce a minus sign after squaring.

### Deriving the inverse-trigonometric primitives

For $|x|<1$, use $x=\sin\theta$ with $-\pi/2<\theta<\pi/2$. On this branch $\cos\theta>0$, so $\sqrt{1-\sin^2\theta}=\cos\theta$, rather than an unexplained cancellation of an absolute value.[^2]

1. Differentiate the substitution: $dx=\cos\theta\,d\theta$.
2. Replace the denominator and the differential:
   $$\int\frac{dx}{\sqrt{1-x^2}}
   =\int\frac{\cos\theta}{\cos\theta}\,d\theta
   =\theta+C.$$
3. Substitute back: $\theta=\arcsin x$, giving
   $$\boxed{\int\frac{dx}{\sqrt{1-x^2}}=\arcsin x+C}.$$

Alternatively choose $x=\cos\theta$ with $0<\theta<\pi$. Then $dx=-\sin\theta\,d\theta$ and the denominator is $\sin\theta>0$, giving $-\arccos x+C$. These are the same family because $\arcsin x+\arccos x=\pi/2$; their constants differ by a fixed amount.

For the other common primitive, use $x=\tan\theta$ with $-\pi/2<\theta<\pi/2$:

1. $dx=\sec^2\theta\,d\theta$.
2. $1+x^2=1+\tan^2\theta=\sec^2\theta$.
3. Thus
   $$\int\frac{dx}{1+x^2}=\int\frac{\sec^2\theta}{\sec^2\theta}\,d\theta
   =\theta+C=\boxed{\arctan x+C}.$$

### A finite sum and an exact integral

Consider $f(x)=\cos^2x\sin x$ over $[0,2\pi]$.[^3]

For eight **left-endpoint** rectangles:
$$
\Delta x=\frac{2\pi}{8}=\frac\pi4,\qquad
c_k=\frac{k\pi}4\quad(k=0,\ldots,7).
$$
The eight heights are
$$
0,\ \frac{\sqrt2}{4},\ 0,\ \frac{\sqrt2}{4},\ 0,\ -\frac{\sqrt2}{4},\ 0,\ -\frac{\sqrt2}{4}.
$$
Consequently $S_8=(\pi/4)(0)=0$. This cancellation is special to these sample points and symmetry; it is not a general reason to trust an eight-rectangle approximation.

For the exact integral, let $u=\cos x$, $du=-\sin x\,dx$:
$$
\int\cos^2x\sin x\,dx=-\frac13\cos^3x+C.
$$
Then
$$
\int_0^{2\pi}\cos^2x\sin x\,dx
=\left[-\frac13\cos^3x\right]_0^{2\pi}=0.
$$
Evaluating the antiderivative after returning to $x$ avoids confusion from the non-monotonic substitution over a full cycle. If keeping $u$, split at $x=\pi$: the first half runs $1\to-1$ and the second $-1\to1$, so they cancel. The **total unsigned area** is $2/3+2/3=4/3$, not zero.

## Choosing and checking a method

1. **Simplify first:** expand a simple polynomial, split a sum, or use a trigonometric identity.
2. **Look for a derivative pair:** $g'(x)f(g(x))$ suggests substitution. Carry along the differential, including its coefficient and sign.
3. **Look for a useful product:** a polynomial times an exponential or sine often suggests parts. Differentiate the factor that becomes simpler.
4. **Handle bounds consistently:** either transform every limit with the substitution or return completely to the original variable before evaluating.
5. **Check the result:** differentiate an indefinite answer, check any initial condition, and compare a definite result with sign, symmetry and size expectations.

For instance, $\int 3x^2(x^3+1)\,dx$ uses $u=x^3+1$ and $du=3x^2dx$, giving $\frac12(x^3+1)^2+C$. Expanding first gives $\frac12x^6+x^3+C$; the two answers differ only by the constant $1/2$, so both represent the same antiderivative family.[^3]

[^1]: Paolo Rapisarda, ELEC1310 [Integration Notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42928), §§3.1–3.4.3; Huajie Yi, [Integration Slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42929). Published Week 6 material: the [Week 6 scope](https://moodle.ecs.soton.ac.uk/mod/page/view.php?id=42927) specifies these sections through integration by parts.

[^2]: Huajie Yi, [Week 6 L1 Integration recording](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=f6a242a1-2559-4f89-917d-b4f00118948f), 5:13–6:54 (variable lower limit), 14:25–20:59 (differentials and substitution), 21:09–30:15 (parts), 30:22–39:16 (inverse-trigonometric primitives); formulas checked against the Integration Notes and Slides in footnote 1.
[^3]: ELEC1310, [Tutorial sheet week 6: Integration 1](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42930), questions 1–5.
