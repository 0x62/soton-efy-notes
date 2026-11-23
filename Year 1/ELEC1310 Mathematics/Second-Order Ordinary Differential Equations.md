---
permalink: y1/elec1310/second-order-odes
---
#### Second-Order Ordinary Differential Equations

- [[#Homogeneous equations with constant coefficients]]
- [[#Using two initial conditions]]
- [[#Euler–Cauchy equations]]
- [[#Forced equations]]
- [[#Free and forced oscillation]]
- [[#Series LC and RLC circuits]]

## Homogeneous equations with constant coefficients

For $ay''+by'+cy=0$ with constant real coefficients and $a\ne0$, substitute $y=e^{rt}$. Since $e^{rt}$ is nonzero, the equation reduces to the characteristic quadratic
$$
ar^2+br+c=0.
$$
The roots determine two independent solutions, hence the complementary function $y_c$:[^1]

| Roots | Real complementary function |
| --- | --- |
| $r_1\ne r_2$, both real | $C_1e^{r_1t}+C_2e^{r_2t}$ |
| Repeated real root $r$ | $(C_1+C_2t)e^{rt}$ |
| $\alpha\pm j\beta$, $\beta>0$ | $e^{\alpha t}(C_1\cos\beta t+C_2\sin\beta t)$ |

A repeated root still needs two independent solutions: $te^{rt}$ supplies the second. For complex roots, $\alpha$ gives the exponential envelope and $\beta$ gives the angular frequency. The real form comes from Euler's formula; see [[Complex Functions]].

![[Foundation Year/Mathematics A Cheat Sheet#Rules of Quadratics]]

Writing $D=d/dt$, the differential operator is $L=aD^2+bD+c$. For distinct roots it factors as $L=a(D-r_1)(D-r_2)$; for a repeated root $L=a(D-r)^2$. In the latter case $(D-r)(te^{rt})=e^{rt}$, so applying $(D-r)$ again gives zero.

## Using two initial conditions

For a second-order equation, normally specify both $y(t_0)$ and $y'(t_0)$. Write down the complete solution first, differentiate it, and substitute both initial values. For example,
$$
y''+4y'+4y=0,\qquad y(0)=1,\qquad y'(0)=1
$$
has repeated root $r=-2$. Then $y=(C_1+C_2t)e^{-2t}$ and
$$
y'=e^{-2t}\bigl(C_2-2C_1-2C_2t\bigr).
$$
Thus $C_1=1$ and $C_2-2=1$; the result is $y=(1+3t)e^{-2t}$. Both initial conditions hold, and $(D+2)^2y=0$ checks the equation.

## Euler–Cauchy equations

In $ax^2y''+bxy'+cy=0$, the coefficients are variable, so a constant-coefficient quadratic in the time derivative is not appropriate. On $x>0$, use $y=x^r$:
$$
ar(r-1)+br+c=0.
$$
Equivalently set $z=\ln x$ and write $y(x)=Y(z)$. Then $xy'=Y'$ and $x^2y''=Y''-Y'$, so the transformed equation is $aY''+(b-a)Y'+cY=0$.[^1]

The three types give $C_1x^{r_1}+C_2x^{r_2}$, $x^r(C_1+C_2\ln x)$, or $x^\alpha(C_1\cos(\beta\ln x)+C_2\sin(\beta\ln x))$. For example, $x^2y''-3xy'+4y=0$ gives $(r-2)^2=0$ and $y=x^2(C_1+C_2\ln x)$. Work on an interval not crossing $x=0$; for negative $x$ the analogous substitution uses $\ln|x|$.

## Forced equations

For $L[y]=g(t)$, the general solution is
$$
y=y_c+y_p,
$$
where $L[y_c]=0$ and $L[y_p]=g(t)$. Linearity makes the sum work, and the difference of any two particular solutions satisfies the homogeneous equation. Apply initial conditions to the **sum**, not to $y_c$ alone.[^1]

With constant coefficients, match a trial to the forcing: a polynomial of the same degree, an exponential of the same rate, or both sine and cosine at the input frequency. If the trial overlaps $y_c$, multiply by $t$ once per multiplicity of the matching characteristic root.

**Example.** Solve $y''-y=3e^t$, $y(0)=y'(0)=0$. Here $y_c=C_1e^t+C_2e^{-t}$, so a trial $Ae^t$ would give zero when substituted. Try $y_p=Ate^t$ instead. Then $L[y_p]=2Ae^t$, so $A=3/2$. Initial values give $C_1+C_2=0$ and $C_1-C_2+3/2=0$. Thus
$$
y(t)=\frac34(e^{-t}-e^t)+\frac32te^t.
$$
The homogeneous terms cancel under $L$, and $L[te^t]=2e^t$, confirming the forcing.

## Free and forced oscillation

For a mass $m$ with displacement $x$ measured from equilibrium, spring stiffness $k$, viscous damping $c$, and external force $F(t)$, Newton's law gives
$$
mx''+cx'+kx=F(t).
$$
For $m,k>0$, define $\omega_0=\sqrt{k/m}$ and $\zeta=c/(2\sqrt{mk})$. The free roots are $-\zeta\omega_0\pm\omega_0\sqrt{\zeta^2-1}$.[^2]

- **Undamped** ($\zeta=0$): pure sinusoidal motion at $\omega_0$.
- **Underdamped** ($0<\zeta<1$): a decaying sinusoid at $\omega_d=\omega_0\sqrt{1-\zeta^2}$.
- **Critically damped** ($\zeta=1$): a repeated negative root, with a $t e^{-\omega_0t}$ term.
- **Overdamped** ($\zeta>1$): two distinct negative roots and no sinusoidal oscillation.

![[Foundation Year/Engineering Principles/Sound & Vibration#Periodic Functions]]

A sinusoidal force $F_0\cos\omega t$ yields a sinusoidal particular solution unless the undamped equation is driven exactly at its natural frequency. To get its amplitude, write the real response as the real part of $X e^{j\omega t}$ and use
$$
(k-m\omega^2+jc\omega)X=F_0,\qquad
|X|=\frac{|F_0|}{\sqrt{(k-m\omega^2)^2+(c\omega)^2}}.
$$
The complex amplitude returns both the displacement amplitude and its phase relative to the force. With positive damping the homogeneous part decays; the long-time response is the forced part. For $c=0$ and $\omega=\omega_0$, the denominator vanishes, and the correct resonant trial produces a growing term proportional to $t\sin\omega_0t$. That growth belongs to the ideal undamped model, not a claim that a real device grows without limit.

## Series LC and RLC circuits

Let $q$ be capacitor charge and use the sign convention $i=q'$. In a series RLC, the voltage drops are $Lq''$, $Rq'$ and $q/C$. Therefore
$$
Lq''+Rq'+\frac{q}{C}=V_s(t).
$$
Charge plays the role of displacement, $L$ the role of mass, $R$ damping, and $1/C$ stiffness. Initial current supplies the derivative condition: $q'(0)=i(0)$, while $q(0)=Cv_C(0)$. If the source is removed while the loop remains closed, use $V_s=0$. For $R=0$ this becomes the ideal LC oscillator, with $\omega_0=1/\sqrt{LC}$.[^2]

For instance, if an ideal source-free LC circuit starts at $v_C(0)=V_0$ and $i(0)=0$, then $q=CV_0\cos(\omega_0t)$ and $i=-CV_0\omega_0\sin(\omega_0t)$ in this sign convention. The initial derivative is zero and $Lq''+q/C=0$.

[^1]: Bing Chu, [Second-order ODEs, Part A: Theory](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42858) and [second-order ODE tutorial sheet](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42862). The [Weeks 8–9 announcement](https://moodle.ecs.soton.ac.uk/mod/forum/discuss.php?d=2707) and [preparation page](https://moodle.ecs.soton.ac.uk/mod/page/view.php?id=44582) assign second-order ODEs to Week 9, corroborated by the 17 and 20 November 2026 teaching briefs. Worked examples in this note are original.
[^2]: Bing Chu, [Second-order ODEs, Part B: Engineering Applications](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42860), covering oscillation, damping, forcing, resonance and LC/RLC models.
