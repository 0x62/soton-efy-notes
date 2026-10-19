---
permalink: y1/elec1311/rl-complete-response
---
#### RL and Complete Response

- [[#Inductor behaviour]]
- [[#Source-free RL response]]
- [[#Complete first-order response]]
- [[#Switching method]]
- [[#Equivalent resistance]]
- [[#Unit steps and successive switching]]

**[[#Inductor behaviour|Inductor voltage and energy]]**
$$v_L=L\frac{di_L}{dt},\qquad W_L=\frac12Li_L^2$$
**[[#Complete first-order response|Initial-to-final response]]**
$$x(t)=x_\infty+(x_0-x_\infty)e^{-t/\tau}$$
**[[#Equivalent resistance|Time constants]]**
$$\tau_{RC}=R_{\mathrm{eq}}C,\qquad\tau_{RL}=\frac{L}{R_{\mathrm{eq}}}$$
**[[#Unit steps and successive switching|Unit step]]**
$$u(t)=\begin{cases}0&t<0\\1&t>0\end{cases}$$

## Inductor behaviour

![[Circuit Theory (7)#Inductors]]

An ideal inductor stores energy in a magnetic field. With the passive sign convention, current enters the terminal marked positive and
$$v_L=L\frac{di_L}{dt},\qquad i_L(t)=i_L(t_0)+\frac1L\int_{t_0}^{t}v_L(s)\,ds.$$
A finite voltage can change current only at a finite rate, so $i_L(0^+)=i_L(0^-)$ at an ordinary switching event. The voltage may change abruptly. This is the dual of capacitor voltage continuity: a capacitor's current may change abruptly, but its voltage cannot do so without an impulse of current.[^1]

Since $p=vi=Li\,di/dt$, integrating from zero current gives $W_L=Li^2/2$. Current can remain nonzero when the voltage is zero: an ideal inductor carrying constant DC current has $di/dt=0$ and acts as a short circuit, not an open circuit.

For uncoupled inductors in series, $L_{\mathrm{eq}}=\sum L_k$; in parallel, $1/L_{\mathrm{eq}}=\sum1/L_k$. These simple expressions do not include magnetic coupling.

## Source-free RL response

![[Circuit Theory (7)#LR Discharging Transients]]

For an inductor discharging through a resistor, KVL gives
$$L\frac{di}{dt}+Ri=0.$$
Trying $i=Ke^{-at}$ gives $a=R/L$. Imposing $i(0)=I_0$ gives
$$i(t)=I_0e^{-Rt/L}=I_0e^{-t/\tau},\qquad\tau=\frac LR.$$
With voltage referenced by the passive convention across the inductor,
$$v_L=L\frac{di}{dt}=-RI_0e^{-t/\tau}.$$
The negative voltage is consistent with the inductor releasing energy while the resistor dissipates it. Reversing the chosen voltage reference reverses that sign, not the physical behaviour.[^1]

### Numerical current stepping

Over a short step $\Delta t$, approximate the inductor voltage as constant. Then
$$i_{n+1}\approx i_n+\frac{v_{L,n}}{L}\Delta t.$$
For a series driven RL circuit, $v_{L,n}=V_S-Ri_n$, so
$$i_{n+1}=i_n+\frac{V_S-Ri_n}{L}\Delta t.$$
Recalculate the resistor voltage and inductor voltage after every step: holding the initial slope for the entire response gives an incorrect straight line. Smaller steps relative to $L/R$ better approximate the exponential. This is the inductor counterpart of [[RC Transients#Approximating the response in time steps]].[^2]

## Complete first-order response

For a stable passive first-order circuit, take $a>0$. The constant-input equation
$$\frac{dx}{dt}+ax=b$$
has the solution
$$x(t)=\frac ba+Ke^{-at}.$$
The constant term is the forced steady-state response; the exponential is the natural transient. With $x(0)=x_0$, $K=x_0-b/a$. Therefore
$$x(t)=x_\infty+(x_0-x_\infty)e^{-t/\tau},\qquad x_\infty=\frac ba,\quad\tau=\frac1a.$$
For a series RL circuit driven by $V_S$,
$$L\frac{di}{dt}+Ri=V_S,\qquad i(t)=\frac{V_S}{R}+\left(I_0-\frac{V_S}{R}\right)e^{-Rt/L}.$$
For a series RC circuit, use $x=v_C$, $x_\infty=V_S$ and $\tau=RC$ instead. See [[RC Transients]] for the capacitor derivation.[^1]

## Switching method

1. Draw the circuit **before** switching and find the stored state. If it has reached DC steady state, replace capacitors with open circuits and inductors with short circuits.
2. Carry the state across the switch: $v_C(0^+)=v_C(0^-)$ or $i_L(0^+)=i_L(0^-)$.
3. Draw the **post-switch** circuit and calculate its eventual DC value $x_\infty$.
4. Find the post-switch time constant, then substitute into the initial-to-final expression.
5. Check the initial value, final value and initial slope against the actual circuit.[^1]

Do not use the final-state short/open replacement to calculate every quantity at $0^+$. At that instant the storage element must satisfy its carried-over state, which may be nonzero.

For example, let $L=20\,\mathrm{mH}$, $R=10\,\Omega$, $V_S=5\,\mathrm V$ and $I_0=0.1\,\mathrm A$. Then $\tau=2\,\mathrm{ms}$, $I_\infty=0.5\,\mathrm A$, and
$$i(t)=0.5-0.4e^{-t/(2\,\mathrm{ms})}\;\mathrm A.$$
At $0^+$, $v_L=5-10(0.1)=4\,\mathrm V$, so $di/dt=4/0.02=200\,\mathrm{A\,s^{-1}}$, agreeing with differentiation of the solution.

## Equivalent resistance

![[Circuit Theory (7)#Thevenin's Theorem]]

For a network containing one independent energy-storage state, replace the rest of the post-switch circuit by its equivalent as seen from that element. The resistance controlling the time constant is the resistance **seen at the storage element's terminals**, not necessarily a resistor placed next to it.

When finding this resistance in a network with independent sources, replace independent ideal voltage sources with shorts and current sources with opens. Leave resistors and the post-switch connections in place. Dependent sources, if present, remain active and require a test-source method.

For an RC network, $v_C(\infty)=V_{\mathrm{Th}}$ and $\tau=R_{\mathrm{Th}}C$. For an RL network, $i_L(\infty)=V_{\mathrm{Th}}/R_{\mathrm{Th}}$ and $\tau=L/R_{\mathrm{Th}}$. Larger resistance therefore slows RC settling but speeds RL current decay.[^1]

The source amplitude sets the scale of the response but not the time constant of a fixed linear circuit. Charging towards 2 V or 10 V can produce different slopes while reaching the same fraction of the final change after one time constant. A resistor in a branch with zero final current may leave the final capacitor voltage unchanged while still changing the transient resistance and settling time.[^3]

## Unit steps and successive switching

A DC source switched on at $t=t_s$ can be written $V_Su(t-t_s)$. A finite pulse can be written
$$V_S\big[u(t-t_1)-u(t-t_2)\big],\qquad t_2>t_1.$$
The step notation describes when a forcing term changes. It does not imply that capacitor voltage or inductor current jumps with the source.

For multiple switching events, solve one interval at a time. Evaluate the state immediately before the next switch, carry it through by continuity, then use the new final value and time constant. For $t\ge t_s$,
$$x(t)=x_{\infty,\mathrm{new}}+\big[x(t_s)-x_{\infty,\mathrm{new}}\big]e^{-(t-t_s)/\tau_{\mathrm{new}}}.$$
Using $t-t_s$ resets the elapsed time for that interval; it does not reset the stored energy to zero.[^1]

[^1]: [Daniel Spencer, The Complete Response of RC & RL Circuits](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43964), particularly pp. 19–28 and 29–48; [ELEC1311 Week 3](https://moodle.ecs.soton.ac.uk/course/section.php?id=13900).

[^2]: [9 October RL response](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=af783814-82bc-425f-a3d7-b4de008423ef), time stepping, natural response and unit steps.
[^3]: [5 October complete response](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=53c7abc7-c2eb-443a-9049-b4da00e729e4), three-circuit method and source-independent time constant; [7 October RC and inductors](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=0a900cf2-76f2-4d97-8be4-b4dc0094749f), resistor roles and current continuity.
