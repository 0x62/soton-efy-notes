---
permalink: y1/elec1310/complex-algebra
---
#### Complex Algebra

- [[#Imaginary unit and Argand plane]]
- [[#Cartesian arithmetic]]
- [[#Conjugates and division]]
- [[#Polar and exponential forms]]
- [[#Powers and roots]]
- [[#Polynomial roots and partial fractions]]
- [[#Engineering calculations in polar form]]
- [[#Complex logarithms]]
- [[#Trigonometric and hyperbolic identities]]

**[[#Polar and exponential forms|Equivalent representations]]**
$$
z=x+jy=r(\cos\theta+j\sin\theta)=re^{j\theta},\qquad j^2=-1
$$
**[[#Conjugates and division|Conjugate and modulus]]**
$$
\bar z=x-jy,\qquad z\bar z=|z|^2=x^2+y^2
$$
**[[#Powers and roots|Powers and all nth roots]]**
$$
(re^{j\theta})^n=r^ne^{jn\theta},\qquad
w_k=r^{1/n}e^{j(\theta+2\pi k)/n},\quad k=0,\ldots,n-1
$$

## Imaginary unit and Argand plane

The imaginary unit satisfies $j^2=-1$. Engineering commonly uses $j$ rather than $i$ to avoid confusion with current. Its powers cycle through $1,j,-1,-j$.[^1]

A complex number $z=x+jy$ has real part $\operatorname{Re}z=x$ and imaginary part $\operatorname{Im}z=y$; the imaginary part is the real coefficient $y$, not $jy$. On an Argand diagram, plot $x$ horizontally and $y$ vertically.

Multiplication by $j$ rotates a number $90^\circ$ anticlockwise without changing its modulus:
$$
j(x+jy)=-y+jx.
$$
Multiplication by $-j$ rotates clockwise. Two complex numbers are equal exactly when their real parts and their imaginary parts agree. Real numbers are included as the special case $y=0$.

## Cartesian arithmetic

Add and subtract corresponding components:[^1]
$$
(x_1+jy_1)\pm(x_2+jy_2)=(x_1\pm x_2)+j(y_1\pm y_2).
$$
Geometrically, addition is vector addition. For $z_1=3+2j$ and $z_2=2-j$, $z_1+z_2=5+j$ and $z_1-z_2=1+3j$.

Expand products and replace $j^2$ with $-1$:
$$
(x_1+jy_1)(x_2+jy_2)
=(x_1x_2-y_1y_2)+j(x_1y_2+x_2y_1).
$$
Addition and multiplication are commutative and associative. Subtraction and division are not generally commutative or associative.

## Conjugates and division

Conjugation reflects a number in the real axis:[^1]
$$
\overline{x+jy}=x-jy.
$$
It distributes over sums, differences and products without reversing subtraction:
$$
\overline{z_1-z_2}=\bar z_1-\bar z_2,\qquad
\overline{z_1z_2}=\bar z_1\bar z_2.
$$
Since $z\bar z=x^2+y^2$ is real, multiplying numerator and denominator by the denominator's conjugate removes its imaginary part:
$$
\frac{x_1+jy_1}{x_2+jy_2}
=\frac{(x_1x_2+y_1y_2)+j(x_2y_1-x_1y_2)}{x_2^2+y_2^2},\quad z_2\ne0.
$$
For example,
$$
\frac{3+2j}{2-j}=\frac{(3+2j)(2+j)}5=\frac45+\frac75j.
$$

## Polar and exponential forms

![[Mathematics A Cheat Sheet#Rules of Coordinate Geometry]]

The modulus and argument locate the same point by distance and angle:[^1]
$$
r=|z|=\sqrt{x^2+y^2},\quad x=r\cos\theta,\quad y=r\sin\theta.
$$
Choose the angle using both signs of $x,y$, for example with $\operatorname{atan2}(y,x)$. A bare $\tan^{-1}(y/x)$ loses quadrant information. All arguments $\theta+2\pi k$ represent the same non-zero complex number; zero has no defined argument.

Euler's formula connects the exponential and trigonometric forms:
$$
e^{j\theta}=\cos\theta+j\sin\theta.
$$
It follows by grouping even and odd powers in the exponential series and using the repeating powers of $j$. In particular $e^{j\pi}+1=0$.

For $z_1=r_1e^{j\theta_1}$ and $z_2=r_2e^{j\theta_2}$,
$$
z_1z_2=r_1r_2e^{j(\theta_1+\theta_2)},\qquad
\frac{z_1}{z_2}=\frac{r_1}{r_2}e^{j(\theta_1-\theta_2)}.
$$
Multiplication scales by $r_2$ and rotates by $\theta_2$. Cartesian form is usually simplest for addition; polar form for products, quotients, powers and roots.

![[AC Theory (1)#Phasor Diagrams]]

A phasor's complex amplitude records magnitude and phase while the common time dependence is handled separately. Peak or RMS magnitudes can be used, but one convention must be kept consistent. Complex algebra supplies the same magnitude-and-angle operations without repeatedly drawing the rotating vectors.

## Powers and roots

For integer $n$, De Moivre's theorem gives:[^1]
$$
(\cos\theta+j\sin\theta)^n=\cos(n\theta)+j\sin(n\theta).
$$
Expanding the left side and comparing real and imaginary parts produces multiple-angle identities. With $n=2$,
$$
\cos2\theta=\cos^2\theta-\sin^2\theta,\qquad
\sin2\theta=2\sin\theta\cos\theta.
$$
For $z=re^{j\theta}\ne0$, solving $w^n=z$ gives **all** $n$ distinct roots:
$$
w_k=r^{1/n}e^{j(\theta+2\pi k)/n},\quad k=0,1,\ldots,n-1.
$$
Their moduli are equal and their arguments are separated by $2\pi/n$. Reduce final arguments to a consistent principal interval, such as $(-\pi,\pi]$, by adding or subtracting $2\pi$.[^3] Further integer values of $k$ repeat the same roots, rather than producing additional ones.

For $z=2+2j=\sqrt8e^{j\pi/4}$, the cube roots are
$$
\sqrt2e^{j\pi/12},\qquad\sqrt2e^{j3\pi/4},\qquad\sqrt2e^{-j7\pi/12}.
$$
The $n$th roots of unity are $e^{j2\pi k/n}$. They lie equally spaced on the unit circle. There are two real roots ($1,-1$) when $n$ is even and only one ($1$) when $n$ is odd.

## Polynomial roots and partial fractions

![[Mathematics A Cheat Sheet#Rules of Quadratics]]

For real coefficients, a non-real root $a+jb$ is accompanied by $a-jb$. Their factors combine to a real quadratic:[^1]
$$
(s-a-jb)(s-a+jb)=(s-a)^2+b^2.
$$
Thus $s^2+2s+2=(s+1+j)(s+1-j)$, with roots $-1\pm j$. Conjugate pairing is guaranteed only for real-coefficient polynomials, not arbitrary complex coefficients.

A degree-$n$ polynomial has $n$ complex roots counting multiplicity. For a monic polynomial,
$$
\prod_{k=1}^n(z-z_k)=z^n+b_1z^{n-1}+\cdots+b_n,
$$
$$
b_1=-\sum_kz_k,\quad b_2=\sum_{i<j}z_iz_j,\quad
b_n=(-1)^n\prod_kz_k.
$$
The coefficient signs alternate. This provides a check when reconstructing a polynomial from its roots.

Complex factors can also be used in partial fractions:
$$
\frac{2s+4}{s^2+2s+2}
=\frac A{s+1+j}+\frac B{s+1-j}.
$$
Multiplying through and substituting $s=-1-j$ gives
$$
A=\frac{2(-1-j)+4}{-2j}=1+j.
$$
Similarly $B=1-j$, yielding conjugate coefficients. Multiplying the final expression back to a common denominator verifies the decomposition.

## Engineering calculations in polar form

### Impedance and phase

For a series resistor and ideal inductor in sinusoidal steady state,
$$
Z=R+j\omega L,\qquad \underline I=\frac{\underline V}{Z}.
$$
The reciprocal impedance is
$$
\frac1Z=\frac{R-j\omega L}{R^2+\omega^2L^2}.
$$
For $R,L,\omega>0$, current therefore lags voltage by $\tan^{-1}(\omega L/R)$ and has magnitude $|\underline V|/\sqrt{R^2+\omega^2L^2}$. The underlined quantities are phasors, not instantaneous real waveforms.[^2]

For pure components, $Z_L=j\omega L$ gives a $90^\circ$ current lag, while $Z_C=1/(j\omega C)$ gives a $90^\circ$ current lead. The rotation follows directly from multiplying or dividing by $j$.[^3]

### Factored frequency responses

Keeping factors separate can avoid a long Cartesian expansion. For $\omega>0$,
$$
F(\omega)=\frac{3+j\omega}{j\omega(1+j\omega)(5+j\omega)}
$$
has
$$
|F|=\frac{\sqrt{9+\omega^2}}{\omega\sqrt{1+\omega^2}\sqrt{25+\omega^2}},
$$
$$
\arg F=\tan^{-1}(\omega/3)-\frac\pi2-\tan^{-1}\omega-\tan^{-1}(\omega/5).
$$
Each denominator phase is subtracted. As $\omega\to0^+$, $|F|\sim3/(5\omega)$ and the phase approaches $-\pi/2$. As $\omega\to\infty$, $|F|\sim1/\omega^2$ and the continuously followed phase approaches $-\pi$.[^4]

### Real responses from conjugate pairs

Pairing conjugate exponential terms converts a complex expression into a real oscillation:
$$
e^{(-a+jb)t}+e^{(-a-jb)t}
=e^{-at}(e^{jbt}+e^{-jbt})=2e^{-at}\cos(bt).
$$
The real part $-a$ determines the exponential envelope, while the imaginary parts $\pm b$ determine the oscillation frequency. For $a>0$, the oscillation decays as time increases.[^4]

## Complex logarithms

Since $e^{j(\theta+2\pi k)}=e^{j\theta}$, the logarithm of a non-zero complex number is multivalued:[^1]
$$
\log z=\ln r+j(\theta+2\pi k),\quad k\in\mathbb Z.
$$
A principal value $\operatorname{Log}z=\ln r+j\operatorname{Arg}z$ requires a fixed argument convention, commonly $-\pi<\operatorname{Arg}z\le\pi$. For example,
$$
\log(-2)=\ln2+j(\pi+2\pi k).
$$
The principal value under that convention is $\ln2+j\pi$. Ordinary real logarithm identities require care with complex principal values because angles can cross the chosen branch boundary.

## Trigonometric and hyperbolic identities

Adding and subtracting Euler's formulas gives:[^1]
$$
\cos\theta=\frac{e^{j\theta}+e^{-j\theta}}2,\qquad
\sin\theta=\frac{e^{j\theta}-e^{-j\theta}}{2j}.
$$
Together with [[Functions#Hyperbolic functions|the hyperbolic definitions]], these yield
$$
\cos(j\theta)=\cosh\theta,\qquad\sin(j\theta)=j\sinh\theta,
$$
$$
\cosh(j\theta)=\cos\theta,\qquad\sinh(j\theta)=j\sin\theta.
$$
The signs follow directly from $1/j=-j$ and $j^2=-1$.

[^1]: University of Southampton, ELEC1310, [Complex Algebra notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42403), sections 1.1–1.5.6. Technical corrections incorporated: subtraction/conjugation order, quadrant-aware arguments, hyperbolic identity signs, and alternating signs in polynomial root–coefficient relations.

[^2]: Paul Lewin, [Complex Algebra 1 recording, 28 September 2026](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=6f70ac09-048c-4d57-a45f-b4d400eacd72), 10:38–19:08.
[^3]: Paul Lewin, [Complex Algebra 3 recording, 5 October 2026](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=9552bb28-e36f-4271-8dbb-b4db009060ba), 13:00–19:11 and 23:18–26:36; [Complex Algebra 2 recording, 29 September 2026](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=090a9cb3-dae1-464b-b602-b4d600ab559c), 27:24–36:47.
[^4]: Paul Lewin, [Complex Algebra 2 recording, 29 September 2026](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=090a9cb3-dae1-464b-b602-b4d600ab559c), 5:37–12:28 and 15:09–19:27.
