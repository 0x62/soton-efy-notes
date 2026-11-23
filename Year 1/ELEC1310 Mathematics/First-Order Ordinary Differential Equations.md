---
permalink: y1/elec1310/first-order-odes
---
#### First-Order Ordinary Differential Equations

- [[#Recognising the equation]]
- [[#Initial values and Euler steps]]
- [[#Separation and substitution]]
- [[#Linear equations and integrating factors]]
- [[#Exact equations]]
- [[#RC and RL models]]

## Recognising the equation

An ordinary differential equation (ODE) relates a function of one independent variable to its derivatives. Its **order** is the highest derivative present. An equation is **linear in $y$** if $y$ and its derivatives appear only to the first power, with coefficients depending on the independent variable alone. For example, $y'+xy=x^2$ is linear, while $y'+xy^2=x^2$ is not.[^1]

| Form | First step |
| --- | --- |
| $y'=g(x)$ | Integrate directly. |
| $y'=g(x)h(y)$ | Check equilibria, then separate. |
| $y'=F(y/x)$ | Set $y=xu$ and use $y'=u+xu'$. |
| $y'+p(x)y=q(x)$ | Multiply by $\mu=e^{\int p(x)\,dx}$. |
| $M(x,y)\,dx+N(x,y)\,dy=0$ | Test $M_y=N_x$. |
| $y'+p(x)y=q(x)y^n$ | Where valid, use $u=y^{1-n}$ for $n\ne0,1$. |

An equation can fit more than one row. For example, $y'+p(x)y=0$ is both separable and linear. Here *homogeneous linear* means the right-hand side is zero. It is not the same use of *homogeneous* as a ratio substitution of the form $y'=F(y/x)$.

## Initial values and Euler steps

A general solution of a regular first-order equation contains one arbitrary constant. An initial value $y(x_0)=y_0$ picks a particular solution on an interval containing $x_0$. Keep the interval in view: the expression may encounter a singular coefficient, a zero denominator or a point where the chosen branch ceases to be defined.

For example, if $y'=3x^2-2$ and $y(1)=4$, then $y=x^3-2x+C$. The initial value gives $C=5$. Check both $y'=3x^2-2$ and $y(1)=4$.

A direction field shows the slope $f(x,y)$ for $y'=f(x,y)$ at each point. **Euler's method** walks along the current slope for a short step $h$:[^1]
$$
x_{k+1}=x_k+h,\qquad y_{k+1}=y_k+h f(x_k,y_k).
$$
For $y'=x-y$, $y(0)=1$, and $h=0.2$, the first step gives $y_1=1+0.2(0-1)=0.8$. The next slope is $0.2-0.8=-0.6$, so $y_2=0.68$ at $x_2=0.4$. These are approximations, not values established by solving the ODE exactly.

## Separation and substitution

If $y'=g(x)h(y)$, first record constant solutions $y=c$ for which $h(c)=0$. Where $h(y)\ne0$, write
$$
\int \frac{1}{h(y)}\,dy=\int g(x)\,dx.
$$
An implicit relation is enough if it gives the required solution locally and satisfies the initial value. For $y'=2x(y-3)$, $y(0)=1$, separation gives $\ln|y-3|=x^2+C$. Since $y-3=-2$ initially, the branch is $y=3-2e^{x^2}$. The equilibrium $y=3$ solves the ODE but not this initial-value problem.

A ratio can hide a separable equation. For $y'=y/x+x/y$, take $u=y/x$ where $x\ne0$ and $y\ne0$. Then $u+xu'=u+1/u$, hence $u\,du=dx/x$. Integrating gives
$$
\frac{u^2}{2}=\ln|x|+C,\qquad
\frac{y^2}{x^2}=2\ln|x|+C_1.
$$
Choose the sign of $y$ using the initial value and stay where the square-root argument is positive. No line of this calculation crosses $x=0$ or $y=0$.[^1]

## Linear equations and integrating factors

First put the coefficient of $y'$ equal to $1$. For $y'+p(x)y=q(x)$, choose any positive integrating factor $\mu$ satisfying $\mu'=\mu p$. The product rule gives
$$
(\mu y)'=\mu q,\qquad
y(x)=\frac{\int \mu(x)q(x)\,dx+C}{\mu(x)}.
$$

**Example.** On $x>0$, solve $xy'+2y=3x$, $y(1)=2$. Divide by $x$, then $\mu=e^{\int 2\,dx/x}=x^2$. The resulting equation is $(x^2y)'=3x^2$. Thus $x^2y=x^3+C$; the initial value sets $C=1$, so $y=x+x^{-2}$. Check: $xy'+2y=x(1-2x^{-3})+2(x+x^{-2})=3x$.

A Bernoulli equation is not linear in $y$, but $u=y^{1-n}$ makes it linear in $u$:
$$
y'+p(x)y=q(x)y^n
\quad\Longrightarrow\quad
u'+(1-n)p(x)u=(1-n)q(x).
$$
This follows by multiplying by $(1-n)y^{-n}$ on intervals where the powers and substitution are defined. Check $y=0$ separately if it is admissible in the original equation.[^1]

**Bernoulli example.** For $y'+y=e^x y^2$, let $u=1/y$ where $y\ne0$. Then $u'-u=-e^x$. Multiplying by $e^{-x}$ gives $(e^{-x}u)'=-1$, so $u=e^x(C-x)$ and
$$
y=\frac{e^{-x}}{C-x}.
$$
The nonzero solutions stay on intervals that avoid $x=C$. The lost branch $y=0$ also solves the original equation.

## Exact equations

An equation $M\,dx+N\,dy=0$ is exact when it has the form $d\Phi=0$ for some potential $\Phi$, with $\Phi_x=M$ and $\Phi_y=N$. If $M,N$ are continuously differentiable on a rectangle, the condition $M_y=N_x$ is sufficient there. Find $\Phi$ by integrating $M$ with respect to $x$, retaining an unknown function of $y$. Use $\Phi_y=N$ to recover that function, then set $\Phi=C$.[^1][^2]

**Example.** For $(2xy+1)\,dx+(x^2+2y)\,dy=0$, both cross-partials are $2x$. Integrate $M$ to obtain $\Phi=x^2y+x+h(y)$. Then $\Phi_y=x^2+h'(y)$, so $h'(y)=2y$. The implicit solution is $x^2y+x+y^2=C$. Through $(1,2)$ it has $C=7$.

If the equation is not exact, a factor depending on one variable may make it exact. If $(M_y-N_x)/N$ is a function of $x$ alone, use
$$
\mu(x)=\exp\left(\int \frac{M_y-N_x}{N}\,dx\right).
$$
If $(N_x-M_y)/M$ is a function of $y$ alone, use the analogous expression integrated in $y$. Apply the tests only where the respective denominator is nonzero. The signs follow by expanding $(\mu M)_y=(\mu N)_x$. If neither test fits, that does not prove no integrating factor exists.

**Nonexact example.** For $y\,dx+2x\,dy=0$ on $x>0$, $(M_y-N_x)/N=-1/(2x)$. Multiply by $\mu=x^{-1/2}$:
$$
\frac{y}{\sqrt{x}}\,dx+2\sqrt{x}\,dy=d(2\sqrt{x}\,y)=0.
$$
Thus $y=C/\sqrt{x}$ after absorbing the constant factor. Direct substitution into $y+2xy'=0$ verifies the solution.

## RC and RL models

For a series RC with constant input $V_s$, take current into the capacitor's positive terminal so $i=Cv_C'$. Kirchhoff's voltage law gives $RCv_C'+v_C=V_s$. With $v_C(0)=V_0$,
$$
v_C(t)=V_s+(V_0-V_s)e^{-t/(RC)}.
$$
At $t=0$ the voltage is $V_0$; for $R,C>0$ it tends to $V_s$. Source-free discharge is the case $V_s=0$.[^1]

![[Foundation Year/Electricity & Electronics/Circuit Theory (6)#RC Time Constant]]

For a series RL with constant input $V_s$, $Li'+Ri=V_s$, so for $R,L>0$,
$$
i(t)=\frac{V_s}{R}+\left(i(0)-\frac{V_s}{R}\right)e^{-t/(L/R)}.
$$
Both equations have the form **final value + initial deviation $\times$ decaying exponential**. The RC time constant is $RC$; the RL time constant is $L/R$. See [[RC Transients]] and [[RL and Complete Response]] for the circuit interpretation.

[^1]: Bing Chu, [First-order ODE slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42855), scope listed in the [Weeks 8–9 announcement](https://moodle.ecs.soton.ac.uk/mod/forum/discuss.php?d=2707) and [preparation page](https://moodle.ecs.soton.ac.uk/mod/page/view.php?id=44582). The 10 November 2026 teaching brief identifies Week 8 as first-order ODEs. Examples in this note are independently worked.
[^2]: [First-order ODE tutorial sheet](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42857), covering initial values, exactness and integrating factors.
