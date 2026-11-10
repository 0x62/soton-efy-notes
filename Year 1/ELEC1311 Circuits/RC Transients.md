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
	- [[#Why the exponential trial works]]
	- [[#Steady value plus transient]]
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
Reversing the reference current arrow gives $i=-C\,dv_C/dt$. This is a change of reference, not a different capacitor law. Both choices give the same discharge equation when used consistently.[^2]

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

### Why the exponential trial works

**Forming** the circuit equation with KCL/KVL and **solving** it are separate steps.[^5] For source-free discharge, substitute $v=Ae^{\lambda t}$ into $dv/dt+v/(RC)=0$:
$$
\lambda Ae^{\lambda t}+\frac{Ae^{\lambda t}}{RC}
=Ae^{\lambda t}\left(\lambda+\frac{1}{RC}\right)=0.
$$
For a nonzero initial voltage, $A\ne0$, and the exponential is nonzero at finite time, so the bracket must vanish:
$$
\lambda=-\frac{1}{RC},\qquad A=v(0)=V_0.
$$
The equation determines the **shape and decay rate**; the initial condition determines its **amplitude**. The special case $V_0=0$ gives the identically zero source-free response, not a charging curve.

The alternative separation-of-variables method gives the same result: for a nonzero discharge voltage,
$$
\int_{V_0}^{v(t)}\frac{du}{u}=-\frac{1}{RC}\int_0^t ds
\quad\Rightarrow\quad
\ln\left|\frac{v(t)}{V_0}\right|=-\frac{t}{RC}.
$$
The sign remains that of $V_0$, hence $v(t)=V_0e^{-t/(RC)}$. The exponential trial avoids explicit integration.[^5]

### Steady value plus transient

Both charging and discharging responses can be written as
$$
v_C(t)=A+Be^{-t/\tau}.
$$
Here $A=v_C(\infty)$ is the **steady value**, and $B=v_C(0^+)-A$ is the initial difference from it. For the simple series circuit already solved, $A=V_S$, $B=V_0-V_S$ and $\tau=RC$. A source-free discharge has $A=0$; charging from zero has $B=-V_S$.[^5]

These $A$ and $B$ belong to the steady-plus-transient form; the $A$ in the source-free trial above was its single exponential amplitude. Do not mix constants from different trial expressions.

![[Circuit Theory (6)#RC Time Constant]]

More generally, after one time constant the **difference from the final value** has fallen to $e^{-1}\approx36.8\%$ of its initial value. It is not necessarily 63.2% of the final voltage if the capacitor started precharged. After $5\tau$, about 0.67% of the initial difference remains.

#### Example: charging towards 10 V

Consider a $10\,\mathrm{V}$ source, $10\,\Omega$ resistor and $0.2\,\mathrm{F}$ capacitor.[^3] For an initially uncharged capacitor:
$$
\tau=10(0.2)=2\,\mathrm{s}
$$
$$
v_C(t)=10(1-e^{-t/2})\,\mathrm{V},\qquad i_C(t)=e^{-t/2}\,\mathrm{A}
$$
At $t=1\,\mathrm{s}$, the exact values are approximately $3.93\,\mathrm{V}$ and $0.607\,\mathrm{A}$. At $t=2\,\mathrm{s}$, the voltage is approximately $6.32\,\mathrm{V}$.

## Approximating the response in time steps

A numerical approximation holds the current constant for a short interval, then recalculates it.[^3][^4] At step $n$:
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

[^4]: https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=db939b1a-8117-481f-a528-b4d500943396 (Daniel Spencer, Lecture #5 30-Sep-2026, 19:37–29:33 capacitor combinations; 31:12–41:51 numerical charging and time-step size; 42:03–44:13 discharge).
[^5]: https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=36a18691-b55e-4052-a15a-b4d700842930 (Daniel Spencer, DCS Lecture #6 02-Oct-2026, 5:08–20:44 signs and circuit equations; 21:18–27:04 integration; 27:10–35:29 exponential trial and initial condition; 36:04–39:30 steady-plus-transient form; 43:00–43:31 next-lecture boundary. Auto-generated captions checked against the lecture deck and dated board notes.)
