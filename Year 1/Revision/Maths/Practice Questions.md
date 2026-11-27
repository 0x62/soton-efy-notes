---
title: "Practice Questions"
permalink: y1/revision/elec1310/practice-questions
---

Original exam-style questions. Try each one before opening **Answer** to see the working. Marks shown are for practice, not an official scheme.

[[Year 1/Revision/Maths/Formula Book|Formula Book]]

## M01. Complex arithmetic [4]

(a) Expand $(2-3j)(-1+4j)$ in rectangular form. (b) Find the monic real quadratic whose roots are $2\pm5j$.

> [!answer]- Answer
>
> (a) $-2+8j+3j-12j^2=10+11j$. (b) Conjugate factors multiply to $[(s-2)-5j][(s-2)+5j]=(s-2)^2+25=s^2-4s+29$.

## M02. Roots and regions [8]

(a) Find all cube roots of $8j$ and all fourth roots of $-16$ in polar form. (b) Describe boundaries, centres and overlap for $|z-2|\le 2$ and $|z-2j|<2$. Decide if $1+j$ belongs to the intersection.

> [!answer]- Answer
>
> (a) Write $8j=8e^{j\pi/2}$. Radius is $2$ and the three angles are $\pi/6+2k\pi/3$, $k=0,1,2$ (equivalently $\pi/6,5\pi/6,3\pi/2$). The fourth roots have radius 2 and arguments $\pi/4+k\pi/2$ for $k=0,1,2,3$. (b) The first disc has centre $(2,0)$ and includes its circle; the second has centre $(0,2)$ and excludes its circle. Shade the common lens only. The two boundary circles meet at $(0,0)$ and $(2,2)$; these points are excluded by the second inequality. At $1+j$, both distances are $\sqrt2<2$, so it belongs.

## M03. Frequency response [6]

For positive $\omega$, write magnitude and a continuous phase for $H(j\omega)=(3+j\omega)/[j\omega(2+j\omega)(5+j\omega)]$. Give both limits as $\omega\to0^+$ and $\omega\to+\infty$. Distinguish a phase limit from the value at a pole.

> [!answer]- Answer
>
> For $\omega>0$,
>
> $$
> |H|=\frac{\sqrt{9+\omega^2}}{\omega\sqrt{4+\omega^2}\sqrt{25+\omega^2}},\qquad
> \angle H=\tan^{-1}(\omega/3)-\frac\pi2-\tan^{-1}(\omega/2)-\tan^{-1}(\omega/5).
> $$
>
> At $0^+$, gain behaves as $3/(10\omega)$ and diverges; phase tends to $-\pi/2$. There is no finite value or phase at the pole $\omega=0$. At infinity the gain behaves as $1/\omega^2$ and tends to zero; the displayed continuous phase tends to $-\pi$ (equivalent to $+\pi$ modulo $2\pi$).

## M04. Complex-pole decomposition [5]

With $p=-3+2j$, decompose $(5s+19)/[(s-p)(s-\bar p)]$ into first-order terms over $\mathbb C$. Write the coefficients in rectangular form.

> [!answer]- Answer
>
> The coefficient of $1/(s-p)$ is $(5p+19)/(p-\bar p)=(4+10j)/(4j)=5/2-j$. Real polynomial coefficients make the other coefficient its conjugate. Result: $(5/2-j)/(s+3-2j)+(5/2+j)/(s+3+2j)$. Multiplying out recovers numerator $5s+19$.

## M05. Analyticity [7]

For $f(z)=(2-j)/z$, find $u(x,y)$ and $v(x,y)$. Establish exactly where the Cauchy–Riemann conditions prove analyticity.

> [!answer]- Answer
>
> Multiplying by $x-jy$ gives $u=(2x-y)/r^2$, $v=-(x+2y)/r^2$, where $r^2=x^2+y^2$. Differentiating,
>
> $$
> u_x=v_y=\frac{-2x^2+2xy+2y^2}{r^4},\qquad
> u_y=-v_x=\frac{-x^2-4xy+y^2}{r^4}.
> $$
>
> These derivatives are continuous for $r>0$, so $f$ is analytic there. The origin is a pole and is not in the domain. The equalities alone at an isolated point would not suffice to prove analyticity.

## M06. Short calculus [6]

(a) Use a Maclaurin expansion to determine $\lim_{x\to0}(1-\cos 3x)/x^2$. (b) Differentiate $\cos(x^3)$. (c) Evaluate $\frac{d}{dx}(x^3e^{2x})$ at $x=1$. (d) Find $\partial_y(x^3y+2xy^3)$.

> [!answer]- Answer
>
> (a) $\cos3x=1-\frac92x^2+O(x^4)$, so the quotient tends to $9/2$. (b) Inner derivative is $3x^2$, hence $-3x^2\sin(x^3)$. (c) Product rule gives $e^{2x}(3x^2+2x^3)$, so $5e^2$. (d) Hold $x$ constant: $x^3+6xy^2$.

## M07. A variable exponent [7]

For $f(x)=(x^2+4)^{2x}$, find $f'(x)$ by logarithmic differentiation, evaluate it exactly at $x=0$, and state the domains of $f$ and $f'$.

> [!answer]- Answer
>
> The positive base makes $\ln f=2x\ln(x^2+4)$. Differentiate the product:
>
> $$
> \frac{f'}{f}=2\ln(x^2+4)+\frac{4x^2}{x^2+4}.
> $$
>
> Multiply by $f$ to get the derivative. At zero $f(0)=1$, so $f'(0)=2\ln4$. Both domains are all real numbers.

## M08. Parametric stationary points [10]

The curve is $x=t^2$, $y=\cos t$, $0\le t\le3\pi/2$. Find $dy/dx$ for $t>0$ and interior stationary points. Compute $d^2y/dx^2$ and classify each. Finally, decide whether the right-hand slope at $t=0$ really fails to exist. Compare with the right-hand slope of the different curve $(x,y)=(t^2,e^t)$ at its start.

> [!answer]- Answer
>
> For $t>0$, $y_x=-\sin t/(2t)$; the only interior zero is $t=\pi$, point $(\pi^2,-1)$. Differentiate the slope in $t$ and divide by $2t$ again:
>
> $$
> y_{xx}=\frac{\sin t-t\cos t}{4t^3}.
> $$
>
> At $\pi$ it is $1/(4\pi^2)>0$, so this is a minimum. At $t=0$ the parametric ratio is $0/0$, but the right-hand difference quotient is $(\cos t-1)/t^2\to-1/2$. A zero $x'(t)$ does not automatically mean there is no slope. For the second curve, $(e^t-1)/t^2=(1/t)[(e^t-1)/t]\to+\infty$ as $t\to0^+$, so the tangent is vertical and the finite derivative does not exist.

## M09. Recognise the integral [8]

(a) Integrate $\tan(2x)$. (b) Integrate $x/(x^2-9)$. (c) Integrate $3^{2x}$. (d) Find the antiderivative of $4x^3-3x^2+2$ that is zero at $x=2$.

> [!answer]- Answer
>
> (a) Set $u=\cos2x$, $du=-2\sin2x\,dx$. Result $-\frac12\ln|\cos2x|+C$. (b) Choose $u=x^2-9$ and $du=2x\,dx$: $\frac12\ln|x^2-9|+C$ on each interval without a pole. (c) $3^{2x}=e^{2x\ln3}$; its antiderivative is $3^{2x}/(2\ln3)+C$. (d) $F=x^4-x^3+2x+C$. At 2 the nonconstant part is $16-8+4=12$, so $C=-12$.

## M10. Approximation and convergence [8]

(a) Express the three-panel midpoint approximation to $\int_1^4\ln(2x)\,dx$ exactly. (b) Find an antiderivative by parts. (c) Split $\int_0^\infty\ln(2x)\,dx$ at 1 and determine separately what occurs at both ends.

> [!answer]- Answer
>
> (a) Width is 1, midpoints $1.5,2.5,3.5$: sum $\ln3+\ln5+\ln7=\ln105$. (b) Put $u=\ln(2x)$ and $dv=dx$; then $v=x$, $du=dx/x$. Thus $F=x\ln(2x)-x+C$ for $x>0$. (c) Near zero $x\ln(2x)\to0$, so the part from 0 to 1 converges to $\ln2-1$. The part from 1 to infinity diverges to $+\infty$, so the full integral diverges.

## M11. RMS as an integral [8]

A waveform is $+6$ V for the first third of a period and $-3$ V for the remaining two thirds. Calculate its RMS value and explain whether it is the same as its mean. Then show that $A\sin(\omega t+\phi)$ has RMS $|A|/\sqrt2$ across any complete period.

> [!answer]- Answer
>
> Mean square is $\frac13(6^2)+\frac23((-3)^2)=18\,\mathrm{V^2}$, giving $3\sqrt2$ V RMS. The mean is $\frac136+\frac23(-3)=0$ V; the positive and negative levels cancel in the mean, not in the mean square. For the sine use $\sin^2 u=(1-\cos2u)/2$. Across one full period, the cosine term integrates to zero regardless of phase; the mean square is $A^2/2$.

## M12. Identify the ODE method [8]

(a) Is $(2xy+3)\,dx+x^2\,dy=0$ exact? (b) Solve $y'=-6xy$ on $\mathbb R$. (c) Find a solution basis for $y''-y'-6y=0$. (d) Find the general solution of $y''-6y'+9y=0$.

> [!answer]- Answer
>
> (a) $M_y=2x=N_x$; yes. A potential is $x^2y+3x$. (b) Separate $dy/y=-6x\,dx$, so $\ln|y|=-3x^2+C$, hence $y=Ce^{-3x^2}$ (also includes $y=0$). (c) $(r-3)(r+2)=0$ yields basis $\{e^{3x},e^{-2x}\}$. (d) $(r-3)^2=0$ gives $(C_1+C_2x)e^{3x}$; simply duplicating $e^{3x}$ cannot accommodate two independent constants.

## M13. Approach to a steady state [8]

A probe temperature follows $T'+0.2T=12$ with $T(0)=30$. Find $T(t)$ and the time when $90\%$ of the change from initial to steady temperature has occurred.

> [!answer]- Answer
>
> The steady value is $12/0.2=60$. Multiply the ODE by $e^{0.2t}$: $(e^{0.2t}T)'=12e^{0.2t}$, so $T=60+Ce^{-0.2t}$. Initially $C=-30$. A $90\%$ change leaves 10% of the initial gap, so $e^{-0.2t}=0.1$ and $t=5\ln10\approx11.51$ time units. This is $T=57$, not 90% of 60.

## M14. Driven LC [8]

An ideal series LC has $L=2\,\mathrm H$, $C=0.5\,\mathrm F$ and source $E(t)=3\sin(2t)+\cos(2t)$ V. Starting with KVL and capacitor charge $q$, derive the current ODE and solve for its general sinusoidal-forced response.

> [!answer]- Answer
>
> KVL gives $Li'+q/C=E$ and $q'=i$, so $Li''+i/C=E'$. With given values, $i''+i=3\cos2t-\sin2t$. Homogeneous solution: $C_1\cos t+C_2\sin t$. Try $a\cos2t+b\sin2t$; the operator multiplies both terms by $-3$, so $a=-1$, $b=1/3$. Thus $i=C_1\cos t+C_2\sin t-\cos2t+\frac13\sin2t$. If initial capacitor charge were supplied, the undifferentiated KVL would constrain the initial slope; no such value is imposed here.

## M15. Matrices as maps [8]

(a) Calculate $\begin{pmatrix}2&-1\\1&3\end{pmatrix}(4,-2)^T$. (b) Write the standard matrix of $T(x,y)=(2x+y,-x+4y)$. (c) Find an image basis for $\begin{pmatrix}2&4\\3&6\end{pmatrix}$. (d) Find the kernel of $\begin{pmatrix}3&1\\2&1\end{pmatrix}$.

> [!answer]- Answer
>
> (a) Row dot products give $(10,-2)^T$. (b) The columns are $T(1,0)=(2,-1)^T$ and $T(0,1)=(1,4)^T$, so the matrix is $\begin{pmatrix}2&1\\-1&4\end{pmatrix}$. (c) Column two is twice column one; a basis is $\{(2,3)^T\}$. (d) Subtracting the two homogeneous equations gives $x=0$, then $y=0$, so the kernel is $\{\mathbf0\}$.

## M16. Construct maps from subspaces [8]

Let $U=\{(x,y,z):x-y=0\}$ and $V=\{(x,y,z):y+z=0\}$. Find a basis of $U\cap V$, a matrix with exactly that kernel, another with a strictly larger kernel containing it, and a matrix with precisely that image.

> [!answer]- Answer
>
> The constraints give $x=y=-z$, so use basis $\{(1,1,-1)^T\}$. The matrix $M=\begin{pmatrix}1&-1&0\\0&1&1\end{pmatrix}$ enforces both constraints. $M'=(1,-1,0)$ has all of the intersection in its kernel but also $(0,0,1)^T$, which is outside it. A matrix with precisely the required image is the single column $M''=(1,1,-1)^T$.

## M17. Coordinates, span and uniqueness [9]

(a) In the ordered basis $(E_{11}+E_{12},E_{12},E_{21}+E_{22},E_{22})$ of $2\times2$ matrices, find the coordinates of $\begin{pmatrix}3&5\\-2&1\end{pmatrix}$. (b) Give the dimension of the span of $(1,0,2),(3,1,0),(4,1,2)$. (c) For which $a$ does $2x+y=3$, $6x+ay=8$ have a unique solution?

> [!answer]- Answer
>
> (a) If coordinates are $(a,b,c,d)$, the entries are $\begin{pmatrix}a&a+b\\c&c+d\end{pmatrix}$. Therefore $(a,b,c,d)=(3,2,-2,3)$. (b) The third vector is the sum of the first two; the first two are independent from inspection of their second coordinates, so dimension 2. (c) Determinant $2a-6\ne0$ iff $a\ne3$. At $a=3$ the second left-hand side triples the first but $8\ne9$, so there is no solution.

## M18. Complex forms [8]

(a) Describe all values of $\log(-2j)$, including the principal value. (b) Use de Moivre's theorem to express $\cos(3\theta)$ in powers of $\cos\theta$. (c) Find $\cos(j\ln 2)$ using its exponential definition.

> [!answer]- Answer
>
> (a) $\log(-2j)=\ln2+j(-\pi/2+2k\pi)$ for $k\in\mathbb Z$; principal value uses $k=0$. (b) Real part of $(\cos\theta+j\sin\theta)^3$ is $\cos^3\theta-3\cos\theta\sin^2\theta=4\cos^3\theta-3\cos\theta$. (c) $\cos(ju)=(e^{-u}+e^u)/2=\cosh u$. At $u=\ln2$ this gives $(1/2+2)/2=5/4$.

## M19. Limits and continuity [8]

(a) Give both one-sided limits of $1/(x-2)$ at 2. (b) Choose $k$ to make $(x^2-9)/(x-3)$ for $x\ne3$, extended by $f(3)=k$, continuous at 3. (c) Prove $\lim_{x\to3}(4x-1)=11$ using an explicit $\delta(\varepsilon)$.

> [!answer]- Answer
>
> (a) From the left denominator is negative and approaches zero, giving $-\infty$; from the right $+\infty$. (b) For $x\ne3$ cancel the factor $x-3$ to get $x+3$, so $k=6$. (c) Pick $\delta=\varepsilon/4$; then $0<|x-3|<\delta$ implies $|(4x-1)-11|=4|x-3|<\varepsilon$.

## M20. Derivatives and tangents [7]

(a) Use the limit definition at $a$ to differentiate $x^2-3x$. (b) Find its tangent at $x=2$. (c) Find the first and second derivatives of $x/(1+x)$, for $x\ne-1$.

> [!answer]- Answer
>
> (a) The difference quotient is $[(a+h)^2-3(a+h)-a^2+3a]/h=2a+h-3$, tending to $2a-3$. (b) At 2 the slope is 1 and the point is $(2,-2)$, giving $y=x-4$. (c) Quotient rule gives $[(1+x)-x]/(1+x)^2=(1+x)^{-2}$. Chain rule gives second derivative $-2(1+x)^{-3}$.

## M21. Applications [10]

(a) On $x^2+xy+y^2=7$, find the slope at $(1,2)$. (b) If $g(x)=x+x^3$, find $(g^{-1})'(2)$. (c) Classify the stationary points and find the inflection point of $x^3-3x$. (d) Starting at $x_0=2$, perform one Newton iteration to solve $x^2-3=0$.

> [!answer]- Answer
>
> (a) Differentiation gives $2x+y+(x+2y)y'=0$, hence $y'=-4/5$ at $(1,2)$. (b) $g(1)=2$ and $g'(1)=4$, so the inverse slope is $1/4$. (c) $f'=3(x^2-1)$ and $f''=6x$: $(-1,2)$ is a local maximum, $(1,-2)$ a minimum, and $(0,0)$ an inflection point because $f''$ changes sign there. (d) $x_1=2-(4-3)/4=7/4$.

## M22. FTC, partial fractions and substitution [9]

(a) Differentiate $F(x)=\int_1^{x^2}\cos(t^2)\,dt$. (b) Find an antiderivative of $(3x+1)/(x(x+1)^2)$. (c) Use a substitution to obtain an antiderivative of $x/(1+x^2)^2$; then give the exact integral from 0 to 1.

> [!answer]- Answer
>
> (a) FTC evaluates the integrand at $x^2$ and chain rule multiplies by $2x$: $F'=2x\cos(x^4)$. No elementary antiderivative of $\cos(t^2)$ is needed. (b) With denominator factors $x,(x+1),(x+1)^2$, coefficient comparison gives $1/x-1/(x+1)+2/(x+1)^2$. Therefore $\ln|x|-\ln|x+1|-2/(x+1)+C$. (c) $u=1+x^2$, $du=2x\,dx$ gives $-1/[2(1+x^2)]+C$. The definite value is $(-1/4)-(-1/2)=1/4$.

## M23. Direction fields, Euler and existence [7]

For $y'=x-y$ with $y(0)=1$, locate the line where the direction field is horizontal, make two Euler steps of length $1/2$, and explain why the IVP is locally unique. Contrast with $y'=3y^{2/3}$, $y(0)=0$: give two solutions near zero.

> [!answer]- Answer
>
> Horizontal slopes occur on $y=x$. Euler uses $y_{n+1}=y_n+h(x_n-y_n)$. Starting at $(0,1)$ gives $(0.5,0.5)$, then $(1,0.5)$ since the second slope is zero. For $f=x-y$, both $f$ and $f_y=-1$ are continuous; local uniqueness holds. In the second IVP both $y=0$ and $y=x^3$ solve the equation and meet the initial condition, since $3(x^3)^{2/3}=3x^2$.

## M24. Exact equations and factors [7]

Find the implicit solution of $(2xy+1)\,dx+x^2\,dy=0$. For $y\,dx+2x\,dy=0$ on $x>0$, find a factor depending only on $x$ that makes the equation exact and solve it.

> [!answer]- Answer
>
> For the first equation $M_y=N_x=2x$. Integrating $M$ in $x$ gives $x^2y+x+g(y)$; comparison with $N$ makes $g$ constant. Thus $x^2y+x=C$. For the second equation want $(\mu y)_y=(2x\mu)_x$, or $\mu=2x\mu'+2\mu$. Then $\mu'/\mu=-1/(2x)$ and $\mu=x^{-1/2}$ works on $x>0$. A potential is $2\sqrt x\,y$, so $y=C/\sqrt x$.

## M25. Two first-order substitutions [8]

(a) Solve $y'=y/x+1$ for $x>0$ by setting $y=xu$. (b) Solve the Bernoulli equation $y'+y=xy^2$ for nonzero $y$, and identify the solution excluded by the substitution.

> [!answer]- Answer
>
> (a) From $y=xu$, $y'=u+xu'$; substituting cancels $u$ and leaves $xu'=1$. Thus $u=\ln x+C$ and $y=x(\ln x+C)$. (b) Set $v=1/y$, so $v'=-y'/y^2$. Divide the ODE by $y^2$ to get $v'-v=-x$. A particular solution is $v=x+1$, so $v=x+1+Ce^x$ and $y=1/(x+1+Ce^x)$ on intervals where the denominator is nonzero. The substitution excluded the valid solution $y=0$.

## M26. Free oscillation and complex roots [7]

A mass–spring model has $m=1$, damping coefficient 2 and spring constant 5, with displacement initially 1 and velocity initially 0. Write the ODE and solve it. State whether it is over-, critically or underdamped.

> [!answer]- Answer
>
> The equation is $x''+2x'+5x=0$, roots $-1\pm2j$. Hence $x=e^{-t}(C_1\cos2t+C_2\sin2t)$. At zero, $C_1=1$ and $-C_1+2C_2=0$, so $C_2=1/2$. The oscillation has a decaying envelope, hence underdamped.

## M27. Euler–Cauchy and Wronskian [7]

Solve $x^2y''-xy'+y=0$ on $x>0$. Use the Wronskian to show the two functions in the complementary solution are independent there.

> [!answer]- Answer
>
> For trial $x^r$ the root equation is $r(r-1)-r+1=(r-1)^2=0$. Hence $y=C_1x+C_2x\ln x$. The Wronskian is $x(1+\ln x)-x\ln x=x>0$. Both functions solve the equation on $x>0$ and their Wronskian verifies independence there.

## M28. Resonance and variation of parameters [9]

(a) Find a particular solution of $y''+4y=\cos2t$. (b) Use variation of parameters to find a particular solution of $y''-y=e^t$; state which integration constants can be omitted and why.

> [!answer]- Answer
>
> (a) $\cos2t$ is already homogeneous, so use $At\sin2t$. Applying $D^2+4$ gives $4A\cos2t$, hence $A=1/4$. (b) Take $y_1=e^t$, $y_2=e^{-t}$, with $W=-2$. Then $u_1'=-y_2 e^t/W=1/2$ and $u_2'=y_1e^t/W=-e^{2t}/2$. Thus $y_p=(t/2)e^t-(1/4)e^t$, and the last term can be dropped because $e^t$ is homogeneous. The arbitrary constants from integrating $u_1',u_2'$ are likewise absorbed into the complementary function.

## M29. Bases and map structure [9]

Let $B=((1,1),(1,-1))$. Find $[(5,1)^T]_B$. For $T(x,y)=(x-y,2x-2y)$, find kernel and image bases and decide injectivity/surjectivity over $\mathbb R^2$. Give the standard matrix for $R\circ T$, where $R(u,v)=(v,u)$.

> [!answer]- Answer
>
> Solve $c_1+c_2=5$, $c_1-c_2=1$: coordinates $(3,2)^T$. Kernel condition is $x=y$, so basis $\{(1,1)^T\}$. The output has second entry twice the first, so image basis $\{(1,2)^T\}$. The kernel is nontrivial and image proper; $T$ is neither injective nor surjective. The composite swaps the two output rows, giving $\begin{pmatrix}2&-2\\1&-1\end{pmatrix}$.

## M30. Matrices, determinants and inverse [8]

Let $A=\begin{pmatrix}2&1\\3&2\end{pmatrix}$ and $B=\begin{pmatrix}1&4\\0&-1\end{pmatrix}$. Compute $2A-B$, $\det A$, $A^{-1}$ and both $AB$ and $BA$.

> [!answer]- Answer
>
> Entrywise calculation gives $2A-B=\begin{pmatrix}3&-2\\6&5\end{pmatrix}$. Determinant $4-3=1$, so $A^{-1}=\begin{pmatrix}2&-1\\-3&2\end{pmatrix}$. Row-by-column gives $AB=\begin{pmatrix}2&7\\3&10\end{pmatrix}$ and $BA=\begin{pmatrix}14&9\\-3&-2\end{pmatrix}$. The different first entries alone disprove commutativity.

## M31. Foundation checks [7]

(a) Solve $|2x-1|\le5$. (b) State the domain of $1/\sqrt{3-x}$. (c) Evaluate $\sum_{k=0}^\infty 5(1/4)^k$ and state the condition on the ratio for a geometric series to converge. (d) Give the degree-three Maclaurin polynomial of $e^{-2x}$.

> [!answer]- Answer
>
> (a) $-5\le2x-1\le5$ implies $-2\le x\le3$. (b) Radical and denominator require $3-x>0$, hence $x<3$. (c) Geometric sum $5/(1-1/4)=20/3$; for nonzero starting value convergence requires $|r|<1$. (d) $e^{-2x}=1-2x+2x^2-\frac43x^3+O(x^4)$.

## M32. Conjugates and inverse complex logarithms [7]

(a) For $z\ne0$, can $\bar z/z=2-j$ hold? Justify using magnitudes. For comparison, describe all $z\ne0$ for which $\bar z/z=-j$. (b) Determine $z=x+jy$ if the full set of logarithm values is $\ln 3+j(-\pi/6+2k\pi)$, $k\in\mathbb Z$.

> [!answer]- Answer
>
> (a) $|\bar z|=|z|$ gives $|\bar z/z|=1$, but $|2-j|=\sqrt5$. To obtain $-j$, write $z=re^{j\theta}$, so $\bar z/z=e^{-2j\theta}$. This equals $-j$ iff $\theta=\pi/4$ modulo $\pi$, so $z$ is on the line $y=x$ with the origin excluded. (b) Exponentiating cancels all $2k\pi$ phases, so $z=3(\cos(-\pi/6)+j\sin(-\pi/6))=3\sqrt3/2-3j/2$.

## M33. Behaviour at infinity and general chain rules [8]

(a) Find $\lim_{x\to+\infty}(7x^4-x^2)/(2x^4+3x+1)$. (b) For differentiable $f,g$, find the derivative of $h(x)=f(x^2-g(2x))$. (c) Differentiate $\log_5(3+x^2)$ and $[\ln(3+x^2)]^3$.

> [!answer]- Answer
>
> (a) Divide numerator and denominator by $x^4$ and keep the constant limiting terms to get $7/2$. (b) Set $v=x^2-g(2x)$: then $v'=2x-2g'(2x)$ and $h'=f'(v)[2x-2g'(2x)]$. (c) Since $\log_5 u=\ln u/\ln 5$, the derivative is $2x/[(3+x^2)\ln5]$. For the cube, chain rule gives $6x[\ln(3+x^2)]^2/(3+x^2)$; a log base is not an outer exponent.

## M34. Join a piecewise function [8]

Let $p(x)=a+b\sin x$ for $x\ge0$, and $p(x)=4+3x+x^2$ for $x<0$. Determine the constraints on $a,b$ for continuity on $\mathbb R$ and separately for differentiability. Which values satisfy both?

> [!answer]- Answer
>
> The limits at zero are 4 on the left and $a$ on the right; continuity requires $a=4$, with $b$ unrestricted. Differentiability first requires continuity, then equality of the one-sided slopes $3$ and $b\cos 0=b$. Therefore $(a,b)=(4,3)$. Elsewhere both formulas are differentiable on their own open domains.

## M35. Mean value theorem [5]

Apply the mean value theorem to $f(x)=x^3+x$ on $[0,3]$. Check the hypotheses and find the interior point where the tangent slope matches the secant slope.

> [!answer]- Answer
>
> A polynomial is continuous on the closed interval and differentiable on its interior. The secant slope is $(f(3)-f(0))/3=(30-0)/3=10$. Setting $3c^2+1=10$ gives $c=\pm\sqrt3$, and only $c=\sqrt3$ lies in $(0,3)$.

## M36. Rational and radical integrals [9]

(a) Find an antiderivative of $(2x-1)/[(x-4)(x+2)]$. (b) Evaluate $\int_0^1 xe^{2x^2}\,dx$ by substitution. (c) Find an antiderivative of $1/\sqrt{7-2x}$ on $x<7/2$ and evaluate its integral from 0 to 3.

> [!answer]- Answer
>
> (a) Coefficients satisfy $A+B=2$, $2A-4B=-1$, so $A=7/6$, $B=5/6$. Integrate to get $(7/6)\ln|x-4|+(5/6)\ln|x+2|+C$. (b) With $u=2x^2$, $du=4x\,dx$, the antiderivative is $e^{2x^2}/4$; the definite value is $(e^2-1)/4$. (c) Set $u=7-2x$. The antiderivative is $-\sqrt{7-2x}+C$, giving $\sqrt7-1$. Differentiate this expression to check the factor of 2 and the sign.

## M37. Products by parts and an infinite interval [9]

(a) Find antiderivatives of $x\sin(3x)$ and $x^2\ln x$ (take $x>0$ in the second). (b) Determine whether $\int_0^\infty(x+2)e^{-x}\,dx$ and $\int_0^\infty(x+2)e^x\,dx$ converge.

> [!answer]- Answer
>
> (a) For the sine choose $u=x$, $dv=\sin3x\,dx$, so the result is $-x\cos3x/3+\sin3x/9+C$. For the logarithm choose $u=\ln x$, $dv=x^2dx$, giving $(x^3/3)\ln x-x^3/9+C$. (b) Integration by parts yields antiderivatives $-(x+3)e^{-x}$ and $(x+1)e^x$ respectively. For the first the boundary term at infinity tends to zero, so the value is 3. The second boundary term grows without bound, so it diverges to $+\infty$.

## M38. An IVP and reconstructing an equation [7]

(a) Solve $y'=-4xy$, $y(0)=5$. (b) Find $a,b$ so that $e^{-2x}$ and $e^{5x}$ form a basis for the solutions of $y''+ay'+by=0$.

> [!answer]- Answer
>
> (a) For nonzero $y$, integrate $dy/y=-4x\,dx$ to get $y=Ce^{-2x^2}$. The condition gives $C=5$. (b) The characteristic roots must be $-2,5$. Their product fixes $b=-10$ and minus their sum gives $a=-3$; equivalently $(r+2)(r-5)=r^2-3r-10$.

## M39. Bases, a nontrivial kernel and a rectangular map [8]

(a) Give a noncanonical basis for $\mathbb R^2$ and prove independence. (b) Find bases for the line $2x+y=0$ and the kernel of $\begin{pmatrix}2&1\\-6&-3\end{pmatrix}$. (c) Write the standard matrix of $T(x,y,z)=(2x-z,y+3z)$.

> [!answer]- Answer
>
> (a) $(1,1)$ and $(1,-1)$ have determinant $-2$, so are independent and span $\mathbb R^2$. (b) Both constraints reduce to $y=-2x$, so $\{(1,-2)\}$ is a basis for each space. (c) Images of the canonical basis are $(2,0)$, $(0,1)$ and $(-1,3)$. As columns they give $\begin{pmatrix}2&0&-1\\0&1&3\end{pmatrix}$.

## M40. Real-axis crossing at prescribed gain [10]

Let $H(j\omega)=K/[j\omega(1+j\omega)(4+j\omega)]$ with $\omega,K>0$. Expand the denominator and rationalise $H$ to find real and imaginary parts. Find the positive frequency where the imaginary part vanishes, then choose $K$ such that the complex point is $-1$. Give its polar form and verify $1+H=0$.

> [!answer]- Answer
>
> The denominator is $A+jB$, with $A=-5\omega^2$ and $B=\omega(4-\omega^2)$. Thus $\Re H=KA/(A^2+B^2)$ and $\Im H=-KB/(A^2+B^2)$. Since $K,\omega>0$, the imaginary part is zero when $\omega=2$. At that frequency $A=-20$, so $K=20$ gives $H=-1$. In polar form this is $e^{j\pi}$, and $1+e^{j\pi}=0$.

## M41. From a quadratic to complex quartic roots [10]

(a) Use de Moivre to express $\sin(5\theta)$ as a polynomial in $\sin\theta$. (b) Solve $u^2+4=0$ in polar form. (c) Hence solve $z^4+4=0$ by taking $u=z^2$ and give the rectangular locations of all roots.

> [!answer]- Answer
>
> (a) Write $s=\sin\theta$ and $c=\cos\theta$. The imaginary part of $(c+js)^5$ is $5c^4s-10c^2s^3+s^5$. Substitute $c^2=1-s^2$ and expand: $\sin5\theta=5s-20s^3+16s^5$. (b) $u=\pm2j=2e^{\pm j\pi/2}$. (c) Each $u$ gives two square roots with radius $\sqrt2$ and angles $\pi/4,3\pi/4,5\pi/4,7\pi/4$ in total. They lie at $(1,1),(-1,1),(-1,-1),(1,-1)$.

## M42. A singularity parameter [6]

For which real $\alpha$ does $A(\alpha)=\begin{pmatrix}\alpha+1&2\\1&\alpha-3\end{pmatrix}$ fail to be invertible? Explain why no parameter outside the ones found can make it singular.

> [!answer]- Answer
>
> The determinant is $(\alpha+1)(\alpha-3)-2=\alpha^2-2\alpha-5=(\alpha-1)^2-6$. It is zero exactly at $\alpha=1\pm\sqrt6$. A square matrix is invertible iff its determinant is nonzero.

## M43. Forced mechanical IVP [10]

A frictionless mass of 2 kg on a spring of stiffness 18 N/m is driven by $16\sin 2t+8\cos2t$ N. It starts at displacement 1 m and zero velocity. Derive the displacement equation and solve it subject to the initial conditions.

> [!answer]- Answer
>
> Newton's law gives $2y''+18y=16\sin2t+8\cos2t$, hence $y''+9y=8\sin2t+4\cos2t$. The homogeneous part is $C_1\cos3t+C_2\sin3t$. The operator multiplies both $\sin2t$ and $\cos2t$ by $9-4=5$, so $y_p=(8/5)\sin2t+(4/5)\cos2t$. At zero $C_1+4/5=1$, so $C_1=1/5$. The velocity equation is $3C_2+16/5=0$, so $C_2=-16/15$. Therefore
>
> $$
> y(t)=\tfrac15\cos3t-\tfrac{16}{15}\sin3t+\tfrac85\sin2t+\tfrac45\cos2t.
> $$

## M44. Derive and solve a mixing model [10]

A well-stirred tank holds 120 L. Inflow and outflow are 6 L/min, the inflow salt concentration is 0.3 kg/L, and the tank starts with 2 kg of salt. Use a mass balance to derive the salt-amount ODE, solve it and find the time to complete 90% of the change from initial to steady salt amount.

> [!answer]- Answer
>
> Rate in is $6(0.3)=1.8$ kg/min, rate out is $6(y/120)=y/20$ kg/min. Thus $y'+y/20=1.8$, with steady value 36 kg. Subtract the steady value (or use integrating factor $e^{t/20}$) to get $y=36-34e^{-t/20}$. A 90% transition leaves 10% of the initial gap: $t=20\ln 10\approx46.05$ minutes, when $y=32.6$ kg.
