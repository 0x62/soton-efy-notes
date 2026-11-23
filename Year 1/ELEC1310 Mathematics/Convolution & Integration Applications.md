---
permalink: y1/elec1310/convolution-integration-applications
---
#### Convolution & Integration Applications

- [[#Causal convolution]]
- [[#A step convolved with a decaying exponential]]
- [[#First-order response with zero initial state]]
- [[#An RL circuit driven by a voltage step]]
- [[#Optional introduction to Laplace transforms]]
- [[#Falling with quadratic drag]]

## Causal convolution

For suitable **causal** functions, meaning $f(t)=g(t)=0$ for $t<0$, their convolution is[^1]
$$
(f*g)(t)=\int_0^t f(\tau)g(t-\tau)\,d\tau\qquad(t\ge0).
$$
It is zero for $t<0$. The star denotes **convolution**, not ordinary pointwise multiplication.

- $t$ is the output time at which the answer is being evaluated.
- $\tau$ is the integration variable, running over earlier times from $0$ to $t$.
- $f(\tau)$ is multiplied by the shifted, reversed copy $g(t-\tau)$, and these products are accumulated.

During the integration, $t$ is fixed. Only after evaluating the integral do we treat the result as a function of $t$.

The causal assumption is what reduces the limits to $0$ and $t$. For general noncausal functions, the convolution uses the whole real line, when that integral exists.

## A step convolved with a decaying exponential

Define the unit step by
$$
u(t)=\begin{cases}0,&t<0,\\1,&t\ge0.\end{cases}
$$
For $g(t)=e^{-t}u(t)$, the convolution is[^1]
$$
\begin{aligned}
(u*g)(t)
&=\int_0^t 1\cdot e^{-(t-\tau)}\,d\tau\\
&=e^{-t}\int_0^t e^\tau\,d\tau\\
&=e^{-t}(e^t-1)\\
&=1-e^{-t}\qquad(t\ge0).
\end{aligned}
$$
The output starts at zero and approaches one. A constant input does not make the response jump instantly to its final value; the convolution accumulates the system's response over time.

## First-order response with zero initial state

Convolution can be used to solve
$$
y'(t)+ay(t)=u(t),\qquad y(0)=0.
$$
Using the causal kernel $g_a(t)=e^{-at}u(t)$,
$$
y(t)=(u*g_a)(t)
=\int_0^t e^{-a(t-\tau)}\,d\tau
=\frac{1-e^{-at}}a\qquad(a\ne0,\ t\ge0).
$$
For $a=0$, the integral is simply $y(t)=t$ for $t\ge0$. When $a>0$, the response approaches $1/a$.

To verify the case $a=1$,
$$
y(t)=1-e^{-t},\qquad y'(t)=e^{-t},\qquad -y(t)+1=e^{-t}.
$$
Thus the differential equation holds for $t>0$, and $y(0)=0$. The switch at $t=0$ is handled using the initial value and the right-hand response, rather than assuming the two-sided derivative is continuous there.

More generally, a causal linear time-invariant system with **zero initial state** has output equal to the convolution of its input with its impulse response.[^2]

If energy is already stored in the system at $t=0$, its initial-state response must also be included. The input convolution alone describes the zero-state response.

## An RL circuit driven by a voltage step

For a series resistor and inductor, [[RL and Complete Response|Kirchhoff's voltage law]] gives
$$
L\frac{di}{dt}+Ri=v(t),\qquad i(0)=0.
$$
With positive $R,L$ and a voltage step $v(t)=V_0u(t)$,
$$
\frac{di}{dt}+\frac RL i=\frac{V_0}{L}u(t).
$$
Keeping the step amplitude $V_0$ makes the units and scaling explicit.[^2] Applying the convolution above,
$$
\begin{aligned}
i(t)
&=\frac{V_0}{L}\int_0^t e^{-\frac RL(t-\tau)}\,d\tau\\
&=\boxed{\frac{V_0}{R}\left(1-e^{-Rt/L}\right)}\qquad(t\ge0).
\end{aligned}
$$

Checks:

- **Initial current:** $i(0)=0$, consistent with an initially unenergised inductor.
- **Final current:** $i(t)\to V_0/R$ as $t\to\infty$.
- **Time constant:** $\tau_L=L/R$, with units of seconds.
- **Initial slope:** $i'(0^+)=V_0/L$.
- **Original equation:** $Li'=V_0e^{-Rt/L}$ and $Ri=V_0(1-e^{-Rt/L})$, whose sum is $V_0$ for $t>0$.

For an arbitrary causal voltage input, the same system's voltage-to-current impulse response is
$$
h(t)=\frac1L e^{-Rt/L}u(t),\qquad i=v*h
$$
under zero initial current. The factor $1/L$ belongs in either the scaled input or the kernel, but not both.

## Optional introduction to Laplace transforms

This optional introduction collects transform identities for causal signals.[^3]

Write $F(s)=\mathcal L\{f(t)\}$ and $G(s)=\mathcal L\{g(t)\}$. Under the usual existence conditions, convolution becomes multiplication:
$$
\mathcal L\{f*g\}=F(s)G(s),\qquad
f*g=\mathcal L^{-1}\{FG\}.
$$
For the one-sided transform, using initial values at $0^+$,
$$
\mathcal L\{y'\}=sY(s)-y(0^+),
$$
$$
\mathcal L\{y''\}=s^2Y(s)-sy(0^+)-y'(0^+).
$$
The initial-value terms vanish only when the corresponding initial values are zero. The point of this introduction is that differentiation and convolution can become algebraic operations in the transform domain.

## Falling with quadratic drag

This model combines force balance, separation and [[Rational Functions & Improper Integrals#Partial fractions|partial fractions]].[^4]

Take downward as positive and consider a body released from rest. With mass $m>0$, gravitational acceleration $g>0$ and drag coefficient $k>0$, the forces during downward motion are:

- Weight $mg$, downward.
- Drag $kv^2$, upward.

Newton's **second** law gives
$$
m\frac{dv}{dt}=mg-kv^2,\qquad v(0)=0.
$$
This sign choice assumes $v\ge0$. For motion that can reverse, drag opposes velocity and its signed term is $-kv|v|$.

Define
$$
v_T=\sqrt{\frac{mg}{k}}.
$$
Then
$$
\frac{dv}{dt}=\frac{k}{m}(v_T^2-v^2).
$$
For the branch starting at rest, $0\le v<v_T$. Separating variables,
$$
\frac{dv}{v_T^2-v^2}=\frac{k}{m}\,dt.
$$
The useful decomposition is
$$
\frac1{v_T^2-v^2}
=\frac1{2v_T}\left(\frac1{v_T-v}+\frac1{v_T+v}\right).
$$
The first denominator differentiates to $-1$, so its integral has a minus sign:
$$
\frac1{2v_T}\ln\left|\frac{v_T+v}{v_T-v}\right|=\frac{k}{m}t+C.
$$
The initial condition gives $C=0$. Both numerator and denominator are positive on this branch, so
$$
\frac{v_T+v}{v_T-v}=e^{2kv_Tt/m}.
$$
Solving for $v$ gives
$$
\boxed{v(t)=v_T\frac{e^{2kv_Tt/m}-1}{e^{2kv_Tt/m}+1}}
\qquad(t\ge0).
$$
Equivalently, using [[Complex Algebra#Trigonometric and hyperbolic identities|hyperbolic functions]],
$$
v(t)=\sqrt{\frac{mg}{k}}\tanh\left(\sqrt{\frac{kg}{m}}\,t\right).
$$
The hyperbolic form is a compact equivalent of the exponential result.

### Checking the physical result

1. At release, $v(0)=0$.
2. The initial acceleration is $g$, because drag is zero at zero speed.
3. As $t\to\infty$, $v(t)\to v_T=\sqrt{mg/k}$.
4. At terminal speed, $kv_T^2=mg$, so the net force and acceleration are zero.
5. The exponent is dimensionless: $kv_T/m$ has units of inverse time.

For a direct substitution check, set $\beta=kv_T/m$. Then
$$
v'=v_T\beta\operatorname{sech}^2(\beta t)
=g\operatorname{sech}^2(\beta t)
$$
and
$$
g-\frac{k}{m}v^2
=g\left(1-\tanh^2(\beta t)\right)
=g\operatorname{sech}^2(\beta t).
$$

Dividing by $v_T^2-v^2$ excludes equilibrium solutions during the separation. Within the downward-motion model, $v(t)=v_T$ is also a solution, but it does not satisfy the release-from-rest condition. The rest solution approaches this speed without reaching it at any finite time.

[^1]: Huajie Yi, [Week 7 L2 Integration recording, 6 November 2026](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=b5b2ac39-bed4-494f-84fe-b4fa010811be), 0:33–9:24; [Integration Slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42929), PDF pages 22–23. The causal restriction and the roles of $t$ and $\tau$ are explained in the recording; formulas are checked against the slides and by differentiation.
[^2]: Same recording, 9:25–14:46, series RL circuit and zero-initial-state LTI interpretation; Integration Slides, PDF pages 24–25. $V_0$ is retained here to make the unit-step example's scaling explicit. The impulse-response notation is an explanatory restatement of the displayed convolution.
[^3]: Same recording, 14:47–16:26; Integration Slides, PDF page 26, explicitly labelled “Laplace transforms: (optional)”. No later second-order lecture content is included here.
[^4]: Same recording, 25:11–37:09; Integration Slides, ADQ8, PDF pages 34–35. The final slide mistakenly repeats the ADQ7 label. The derivation here is checked against the force equation, initial condition and terminal-speed limit; the hyperbolic expression and derivative check are equivalent explanatory working.
