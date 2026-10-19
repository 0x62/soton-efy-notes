---
permalink: y1/elec1311/rc-transients
---
#### RC Transients

- [[#Capacitor combinations]]
- [[#Initial conditions and current direction]]
- [[#Building the RC differential equation]]
	- [[#Source-free discharge]]
	- [[#Charging from a DC source]]
- [[#Time constant and response]]
- [[#Approximating the response in time steps]]
- [[#Checking a solution]]

**[[#Capacitor combinations|Equivalent capacitance]]**
$$
C_{\parallel}=\sum_k C_k \qquad \frac{1}{C_{\mathrm{series}}}=\sum_k\frac{1}{C_k}
$$

**[[#Building the RC differential equation|A series RC circuit with constant supply]]**
$$
RC\frac{dv_C}{dt}+v_C=V_S
$$

**[[#Time constant and response|Initial value, final value and time constant]]**
$$
\tau=RC \qquad v_C(t)=V_S+(V_0-V_S)e^{-t/\tau}
$$
Here $V_0=v_C(0^+)$; set $V_S=0$ for discharge through $R$.

> [!NOTE] Coverage
> Continues [[Circuit Basics]] for teaching week 2, 28 September–2 October 2026. The dated board notes show capacitor combinations and the charging/discharging differential equations.[^1][^2] The response formula and time-step explanation below connect these equations to the RC material in the shared lecture deck; that deck also serves later teaching, so its RL and later sections are not included.[^3]

## Capacitor combinations

The physical capacitor relation and integration of a prescribed current are already in [[Circuit Basics#Capacitors]]. Here the current is determined by the surrounding circuit rather than supplied as a known graph.

### Parallel capacitors

![[Circuit Theory (5)#Capacitors in Parallel]]

To derive that result from the Y1 current law, add the branch currents by KCL:
$$
i=i_1+i_2+\cdots=C_1\frac{dv}{dt}+C_2\frac{dv}{dt}+\cdots
$$
Therefore:
$$
i=C_{\parallel}\frac{dv}{dt},\qquad C_{\parallel}=C_1+C_2+\cdots
$$
This establishes the equivalent capacitance directly from $i=C\,dv/dt$.[^1]

### Series capacitors

The **same current** passes through each capacitor. KVL adds the individual voltage drops:
$$
v=v_1+v_2+\cdots
$$
Differentiate and use $dv_k/dt=i/C_k$:
$$
\frac{dv}{dt}=i\left(\frac{1}{C_1}+\frac{1}{C_2}+\cdots\right)=\frac{i}{C_{\mathrm{series}}}
$$
So two capacitors give:
$$
C_{\mathrm{series}}=\frac{C_1C_2}{C_1+C_2}
$$
This is smaller than either individual capacitance. See [[Circuit Theory (5)#Capacitors in Series]] for the existing examples. The derivative argument concerns changes of voltage; retain the actual initial capacitor voltages when analysing a precharged circuit.[^1]

## Initial conditions and current direction

For a finite current, an ideal capacitor voltage is **continuous** at a switching instant:
$$
v_C(0^+)=v_C(0^-)
$$
The circuit can change its current immediately, but cannot change capacitor voltage by a finite amount in zero time without an impulse of current.

Use the passive reference direction: current entering the capacitor's labelled positive terminal gives
$$
i_C=C\frac{dv_C}{dt}
$$
Reversing the reference current arrow gives $i=-C\,dv_C/dt$. This is a change of reference, not a different capacitor law. The 2 October board notes derive the same discharge equation using both choices.[^2]

> [!TIP] Initial and final are different calculations
> At the instant after switching, use the known capacitor voltage. In DC steady state, $dv_C/dt=0$, so capacitor current is zero. Do not replace the capacitor with an open circuit throughout the transient.

## Building the RC differential equation

### Source-free discharge

Consider a charged capacitor discharging through a resistor, with no source connected. Let $v_C$ be positive at its initially positive terminal, and let $i_C$ enter that terminal. KVL gives
$$
v_C+Ri_C=0
$$
Substitute the capacitor law:
$$
v_C+RC\frac{dv_C}{dt}=0
$$
Hence:
$$
\boxed{\frac{dv_C}{dt}+\frac{v_C}{RC}=0}
$$
For $v_C>0$, its derivative is negative: the voltage decreases. The chosen $i_C$ is negative because the actual discharge current leaves the positive terminal.[^2]

### Charging from a DC source

Connect a constant voltage $V_S$ through a resistor $R$ to capacitor $C$. Take current from the source through the resistor into the capacitor's positive terminal:
$$
V_S-Ri_C-v_C=0
$$
Using $i_C=C\,dv_C/dt$ gives
$$
\boxed{\frac{dv_C}{dt}+\frac{v_C}{RC}=\frac{V_S}{RC}}
$$
The voltage slope is proportional to the **remaining difference** between supply and capacitor voltage:
$$
\frac{dv_C}{dt}=\frac{V_S-v_C}{RC}
$$
A large initial difference produces a large current and rapid change; the change slows as $v_C$ approaches $V_S$.[^2][^3]

## Time constant and response

The familiar zero-initial-voltage charging and discharge curves are already described in [[Circuit Theory (6)#RC Charging Transient Curves]] and [[Circuit Theory (6)#RC Discharging Transient Curves]]. The differential equation explains why they are exponential.

For a constant source, define the remaining error $e(t)=v_C(t)-V_S$. Then
$$
\frac{de}{dt}=-\frac{e}{RC}
$$
An exponential $e(t)=Ae^{\lambda t}$ satisfies this when $\lambda=-1/(RC)$. Applying $v_C(0)=V_0$ sets $A=V_0-V_S$, giving
$$
\boxed{v_C(t)=V_S+(V_0-V_S)e^{-t/(RC)}}
$$
This is the steady value $V_S$ plus a decaying transient. In this simple series circuit:
$$
i_C(t)=\frac{V_S-V_0}{R}e^{-t/(RC)}
$$
An initially uncharged capacitor has $V_0=0$. A source-free discharge has $V_S=0$. If $V_0>V_S$, the voltage falls towards the supply instead of rising.[^3]

![[Circuit Theory (6)#RC Time Constant]]

More generally, after one time constant the **difference from the final value** has fallen to $e^{-1}\approx36.8\%$ of its initial value. It is not necessarily 63.2% of the final voltage if the capacitor started precharged. After $5\tau$, about 0.67% of the initial difference remains.

#### Example: charging towards 10 V

The lecture deck uses a $10\,\mathrm{V}$ source, $10\,\Omega$ resistor and $0.2\,\mathrm{F}$ capacitor.[^3] For an initially uncharged capacitor:
$$
\tau=10(0.2)=2\,\mathrm{s}
$$
$$
v_C(t)=10(1-e^{-t/2})\,\mathrm{V},\qquad i_C(t)=e^{-t/2}\,\mathrm{A}
$$
At $t=1\,\mathrm{s}$, the exact values are approximately $3.93\,\mathrm{V}$ and $0.607\,\mathrm{A}$. At $t=2\,\mathrm{s}$, the voltage is approximately $6.32\,\mathrm{V}$.

## Approximating the response in time steps

The deck first builds intuition by holding the current constant for a short interval, then recalculating it.[^3] At step $n$:
$$
i_n=\frac{V_S-v_n}{R},\qquad v_{n+1}\approx v_n+\frac{i_n}{C}\Delta t
$$
This is a numerical approximation, not an exact charging law. For the example above and $\Delta t=1\,\mathrm{s}$:

| Time / s | Approximate capacitor voltage / V | Current at start of next interval / A |
| --- | --- | --- |
| 0 | 0 | 1 |
| 1 | 5 | 0.5 |
| 2 | 7.5 | 0.25 |
| 3 | 8.75 | 0.125 |

The approximation overestimates charging because it holds each interval's initially higher current constant while the true current is already falling. Smaller time steps give a closer approximation; do not confuse the table's $5\,\mathrm{V}$ at one second with the exact $3.93\,\mathrm{V}$.

## Checking a solution

- At $t=0$, does the expression reproduce the actual initial voltage?
- As $t\to\infty$, does it approach the DC steady-state voltage?
- Is the exponent dimensionless? $RC$ has units of seconds.
- Does the sign of $dv_C/dt$ match charging or discharge?
- Does the current satisfy both $i_C=C\,dv_C/dt$ and KVL?
- If switching happens at $t=t_s$ instead of zero, use elapsed time $t-t_s$ and the voltage at that switching instant.

[^1]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=44748 (30 September 2026 board notes); capacitor-combination derivations also appear in https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43962 (Electric Circuits, final slides).
[^2]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=44770 (2 October 2026 board notes).
[^3]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43963 (The Complete Response of RC & RL Circuits, Dr Daniel Spencer; RC sections only).
