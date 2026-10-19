---
permalink: y1/elec1310/complex-functions
---
#### Complex Functions

- [[#Mapping between complex planes]]
- [[#Exponential mapping]]
- [[#Frequency-response mapping]]
- [[#Complex differentiation]]
- [[#Harmonic functions]]

**[[#Mapping between complex planes|Complex function]]**
$$
z=x+jy,\qquad w=f(z)=u(x,y)+jv(x,y)
$$
**[[#Complex differentiation|Cauchy–Riemann equations]]**
$$
u_x=v_y,\qquad u_y=-v_x
$$
**[[#Harmonic functions|Laplace's equation]]**
$$
u_{xx}+u_{yy}=0,\qquad v_{xx}+v_{yy}=0
$$

## Mapping between complex planes

A function of a complex variable maps an input point $z=x+jy$ to an output point $w=u+jv$. Both output components may depend on both input components. Separate input and output Argand planes make it possible to track how points, curves and regions transform.[^1]

For the reciprocal map,
$$
w=\frac1z=\frac{x-jy}{x^2+y^2},\qquad
u=\frac{x}{x^2+y^2},\quad v=-\frac{y}{x^2+y^2},\quad z\ne0.
$$
In polar form $z=re^{j\theta}$ maps to $w=r^{-1}e^{-j\theta}$: the radius is inverted and the angle changes sign.

For $w=z^2$,
$$
u=x^2-y^2,\qquad v=2xy.
$$
Equivalently, the radius is squared and the argument doubled.

## Exponential mapping

The exponential map separates into modulus and angle:[^1]
$$
w=e^z=e^{x+jy}=e^xe^{jy}.
$$
Thus $|w|=e^x$ and the output argument is $y$ modulo $2\pi$.

For the half-infinite strip $x\le0$, $0\le y\le\pi$:
- $x=0$ maps to the upper unit semicircle.
- $y=0$ maps to the positive real interval $(0,1]$.
- $y=\pi$ maps to the negative real interval $[-1,0)$.
- Interior points map inside the upper half of the unit disk.

The image has $0<|w|\le1$ and $\operatorname{Im}w\ge0$. The origin is approached as $x\to-\infty$, but never attained at finite $x$ because $e^x>0$.

## Frequency-response mapping

A curve in an input plane can map to a frequency-response locus in an output plane. For $K>0$, $\omega>0$, consider[^2]
$$
G(\omega)=\frac{K}{j\omega(2+j\omega)(3+j\omega)}.
$$
Its magnitude and continuously followed phase are
$$
|G|=\frac{K}{\omega\sqrt{4+\omega^2}\sqrt{9+\omega^2}},\qquad
\phi=-\frac\pi2-\tan^{-1}(\omega/2)-\tan^{-1}(\omega/3).
$$
As $\omega\to0^+$, the magnitude grows without bound and phase approaches $-\pi/2$. As $\omega\to\infty$, the magnitude tends to zero and phase approaches $-3\pi/2$. The angle $-3\pi/2$ is equivalent to $+\pi/2$ as a point direction, but keeping the continuous phase records the traversal. Arrows on the locus show increasing frequency.

To locate a crossing of the negative real axis, expand only the denominator:
$$
j\omega(2+j\omega)(3+j\omega)=-5\omega^2+j\omega(6-\omega^2).
$$
For non-zero positive $\omega$, the imaginary part of $G$ vanishes at $\omega=\sqrt6$. Then $G=-K/30$, so $G=-1$ when $K=30$. A positive change of $K$ scales every radius but leaves the phase at a given frequency unchanged.

The equation $1+G=0$ is equivalent to $G=-1$, or magnitude $1$ and phase an odd multiple of $\pi$. This algebraic crossing is useful in feedback analysis; a full stability conclusion also depends on the system and the complete contour, not on an isolated gain value alone.

When mapping a region, also check which side of its boundary is mapped and whether any singular points are excluded. For example, $w=1/z$ maps $0<|z|\le R$ to $|w|\ge1/R$: the punctured inside becomes the outside, not the inside of the mapped circle.

## Complex differentiation

A complex derivative is a limit
$$
f'(z)=\lim_{\Delta z\to0}\frac{f(z+\Delta z)-f(z)}{\Delta z}
$$
that must give the same answer for every direction of approach in the complex plane.[^1]

Approaching along the real direction gives $u_x+jv_x$. Approaching along the imaginary direction gives $v_y-ju_y$. Equating components gives the **Cauchy–Riemann equations**:
$$
u_x=v_y,\qquad u_y=-v_x.
$$
A function is **analytic** on an open region when it is complex differentiable throughout that region. It has a locally convergent power-series representation and derivatives of every order. A derivative may equal zero; zero slope does not prevent analyticity.

The Cauchy–Riemann equations are necessary for complex differentiability. If the first partial derivatives exist and are continuous in a neighbourhood and satisfy these equations there, they also establish analyticity in that neighbourhood. Satisfying the equations at an isolated point alone does not establish analyticity on a region.

For $f(z)=z^2$,
$$
u_x=2x=v_y,\qquad u_y=-2y=-v_x.
$$
The partial derivatives are continuous everywhere, so the function is analytic everywhere, with
$$
f'(z)=u_x+jv_x=2x+2jy=2z.
$$

## Harmonic functions

The real and imaginary parts of an analytic function satisfy the two-dimensional Laplace equation.[^1]

Differentiating the Cauchy–Riemann equations and using equality of the mixed second derivatives gives
$$
u_{xx}+u_{yy}=v_{yx}-v_{xy}=0,
$$
and similarly $v_{xx}+v_{yy}=0$. Functions satisfying Laplace's equation are **harmonic**.

For $z^2$, $u=x^2-y^2$ has $u_{xx}=2$, $u_{yy}=-2$, while $v=2xy$ has both pure second derivatives zero. Both are harmonic.

Many field and potential problems ask for a harmonic function inside a region subject to specified boundary conditions. Analytic complex functions provide pairs of such real-valued functions.

[^1]: University of Southampton, ELEC1310, [Complex Algebra notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42403), section 1.6. The exponential-map image excludes zero, which is a limiting point rather than an attained value.

[^2]: Paul Lewin, [Complex Algebra 4 recording, 6 October 2026](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=5ffc9081-c003-4089-966e-b4de00e18c4e), 10:40–28:09 and 30:26–35:50.
