---
title: Formula Book
permalink: y1/revision/elec1311/formula-book
---

ELEC1311 reference.[^scope] Lowercase $v,i$ are instantaneous; uppercase $V,I$ in AC sections are **RMS phasors** unless labelled peak. Use a cosine reference and $j^2=-1$. Under the passive sign convention, current enters the terminal marked $+$, so positive power is absorbed.

## Elements and DC networks

| Quantity | Formula |
| --- | --- |
| Current and charge | $i=dq/dt$; $q(t)-q(t_0)=\int_{t_0}^{t}i(u)\,du$ |
| Voltage and energy per charge | $v=dW/dq$ |
| Resistor | $v=Ri$; $R=\rho\ell/A$; $p=vi=i^2R=v^2/R$ |
| Capacitor | $q=Cv_C$; $i_C=C\,dv_C/dt$; $W_C=Cv_C^2/2$ |
| Inductor | $v_L=L\,di_L/dt$; $W_L=Li_L^2/2$ |
| Energy transferred | $W(t)-W(t_0)=\int_{t_0}^{t}p(u)\,du$ |

$$
v_C(t)=v_C(t_0)+\frac1C\int_{t_0}^{t}i_C(u)\,du,\qquad
i_L(t)=i_L(t_0)+\frac1L\int_{t_0}^{t}v_L(u)\,du.
$$

- **KCL:** $\sum i_{\rm leaving}=0$ at a node, with entering currents negative. A branch from node $a$ to node $b$ carries $(v_a-v_b)/R$ in that reference direction.
- **KVL:** $\sum v_{\rm signed}=0$ around a loop. Two mesh currents flowing in opposite directions through a shared resistor give a drop $R(i_1-i_2)$ around mesh 1.
- **DC steady state:** an ideal capacitor is open ($i_C=0$); an ideal inductor is short ($v_L=0$). A finite capacitor voltage or inductor current can still be present.

| Connection | Resistance or uncoupled inductance | Capacitance |
| --- | --- | --- |
| Series | $R_{\rm eq}=\sum R_k;\ L_{\rm eq}=\sum L_k$ | $1/C_{\rm eq}=\sum 1/C_k$ |
| Parallel | $1/R_{\rm eq}=\sum 1/R_k;\ 1/L_{\rm eq}=\sum 1/L_k$ | $C_{\rm eq}=\sum C_k$ |

For two parallel resistors, $R_1\parallel R_2=R_1R_2/(R_1+R_2)$. For a series divider, and for a parallel split, respectively:
$$
v_k=v_{\rm in}\frac{R_k}{\sum R_m},\qquad
i_k=i_{\rm in}\frac{1/R_k}{\sum 1/R_m}.
$$

**Superposition:** add the signed voltages or currents from individual independent sources in a linear circuit. Set the other ideal voltage sources to zero by shorting them and current sources to zero by opening them. Leave dependent sources active. Calculate power from the resulting total voltage and current, not by adding individual powers.

**Terminal equivalents:** $V_{\rm th}=V_{\rm oc}$; $I_{\rm N}=I_{\rm sc}$ with the short current defined from the positive port terminal out into the short. $R_{\rm th}=V_{\rm th}/I_{\rm N}$ when the ratio is defined. Alternatively, kill independent sources and apply a test source: $R_{\rm th}=V_{\rm test}/I_{\rm test}$ with the test current entering the port. When fitting a source from measured load points, use $v_{\rm port}=V_{\rm th}-i_{\rm load}R_{\rm th}$. For a resistive load:
$$
I_L=\frac{V_{\rm th}}{R_{\rm th}+R_L},\quad V_L=I_LR_L,\quad
P_L=I_L^2R_L,\quad
R_L=R_{\rm th}\ \Rightarrow\ P_{L,\max}=\frac{V_{\rm th}^2}{4R_{\rm th}}.
$$

## RC and RL transients

Under finite current or voltage, the stored states are continuous at the switch:
$$
v_C(t_0^+)=v_C(t_0^-),\qquad i_L(t_0^+)=i_L(t_0^-).
$$
The capacitor current and inductor voltage **can** jump. For the new topology, find $x_\infty$ at DC, then find $R_{\rm seen}$ at the storage element with independent sources zero. For a stable first-order circuit with constant forcing after $t_0$:
$$
x(t)=x_\infty+[x(t_0^+)-x_\infty]e^{-(t-t_0)/\tau},\qquad t\ge t_0.
$$

| State | Differential equation with equivalent source | Time constant |
| --- | --- | --- |
| $x=v_C$ | $R_{\rm seen}C\,dv_C/dt+v_C=v_{\rm th}(t)$ | $\tau=R_{\rm seen}C$ |
| $x=i_L$ | $L\,di_L/dt+R_{\rm seen}i_L=v_{\rm th}(t)$ | $\tau=L/R_{\rm seen}$ |

For a target $x_\star$ strictly between the initial and final states:
$$
t-t_0=-\tau\ln\!\left[\frac{x_\star-x_\infty}{x(t_0^+)-x_\infty}\right].
$$
The remaining gap is $e^{-1}\approx36.8\%$ after one time constant. At a second switch, use the previous interval's ending state as the next starting state, with the **new** final value and time constant. The unit step $u(t-t_0)$ is zero before $t_0$ and one after it.

For a nonconstant source, normalise the equation to $x'+x/\tau=g(t)$ and integrate with the initial state:
$$
x(t)=x(t_0)e^{-(t-t_0)/\tau}
+\int_{t_0}^{t}e^{-(t-u)/\tau}g(u)\,du.
$$
For the RC equation above, $g=v_{\rm th}/\tau$; for RL, $g=v_{\rm th}/L$. If the problem gives $i_C(t)$ or $v_L(t)$ directly, use the element integrals instead.

## Phasors, impedance and filters

$$
\omega=2\pi f=\frac{2\pi}{T},\qquad
x_{\rm avg}=\frac1T\int_0^T x(t)\,dt,\qquad
x_{\rm rms}=\sqrt{\frac1T\int_0^T x^2(t)\,dt}.
$$
For a pure sine or cosine, $X_{\rm rms}=X_{\rm pk}/\sqrt2$; this shortcut does **not** apply to arbitrary waveforms. $X=|X|\angle\phi$ represents $x(t)=\sqrt2|X|\cos(\omega t+\phi)$. Convert a sine to a cosine by subtracting $90^\circ$ from its angle.

$$
a+jb=r(\cos\theta+j\sin\theta)=re^{j\theta},\quad
r=\sqrt{a^2+b^2},\quad
\theta=\operatorname{atan2}(b,a),\quad
(a+jb)^*=a-jb.
$$
Add/subtract in rectangular form. Multiply/divide in polar form: multiply/divide magnitudes and add/subtract arguments, respectively.

| Element | Impedance $Z=V/I$ | Admittance $Y=1/Z$ |
| --- | --- | --- |
| Resistor | $R$ | $1/R$ |
| Inductor | $j\omega L$ | $-j/(\omega L)$ |
| Capacitor | $1/(j\omega C)=-j/(\omega C)$ | $j\omega C$ |

$$
Z_{\rm series}=\sum Z_k,\quad Y_{\rm parallel}=\sum Y_k,\quad
V_k=V_{\rm total}\frac{Z_k}{\sum Z_m},\quad
I_k=I_{\rm total}\frac{Y_k}{\sum Y_m}.
$$
KCL and KVL still hold for phasors of a common frequency. If $\arg Z>0$, current lags voltage; if $\arg Z<0$, current leads.

For a first-order series divider, $H=V_{\rm out}/V_{\rm in}=Z_{\rm out}/\sum Z$. Let $\tau=RC$ for RC or $L/R$ for RL.
$$
H_{\rm LP}(j\omega)=\frac{1}{1+j\omega\tau},\qquad
H_{\rm HP}(j\omega)=\frac{j\omega\tau}{1+j\omega\tau}.
$$
RC low-pass is across $C$, high-pass across $R$. RL low-pass is across $R$, high-pass across $L$. With $a=\omega\tau>0$:
$$
|H_{\rm LP}|=\frac1{\sqrt{1+a^2}},\quad \angle H_{\rm LP}=-\tan^{-1}(a),\qquad
|H_{\rm HP}|=\frac{a}{\sqrt{1+a^2}},\quad \angle H_{\rm HP}=90^\circ-\tan^{-1}(a).
$$
Cutoff: $\omega_c=1/\tau$, $f_c=1/(2\pi\tau)$, $|H|=1/\sqrt2$. An amplitude ratio is $20\log_{10}|H|$ dB; a power ratio is $10\log_{10}(P_2/P_1)$ dB. Half power is approximately $-3.01$ dB.

## AC power and matching

With $\phi=\angle V-\angle I$, conjugate the current, **not** the voltage:
$$
S=VI^*=P+jQ,\quad
P=|V||I|\cos\phi,\quad Q=|V||I|\sin\phi,\quad
|S|=\sqrt{P^2+Q^2},\quad {\rm PF}=\frac P{|S|}.
$$

$P$ is in watts, $Q$ in var, $|S|$ in VA. Positive $Q$ is inductive (lagging current); negative $Q$ is capacitive (leading current). For $Z=R+jX$ and $Y=G+jB$:
$$
S=|I|^2Z=|V|^2Y^*,\qquad
P=|I|^2R=|V|^2G,\qquad
Q=|I|^2X=-|V|^2B.
$$
If the voltage and current phases are $\theta_v,\theta_i$, the instantaneous power is
$$
p(t)=P+|V||I|\cos(2\omega t+\theta_v+\theta_i).
$$

A shunt capacitor supplies $Q_C=-\omega C|V|^2$. Choose $C=(Q_{\rm old}-Q_{\rm target})/(\omega|V|^2)$ for an inductive load when the required correction is positive. For a target lagging power factor, $Q_{\rm target}=P\tan[\cos^{-1}({\rm PF}_{\rm target})]$.

For $Z_{\rm th}=R_{\rm th}+jX_{\rm th}$ with $R_{\rm th}>0$, and adjustable load $Z_L=R_L+jX_L$:
$$
P_L=\frac{|V_{\rm th}|^2 R_L}{(R_{\rm th}+R_L)^2+(X_{\rm th}+X_L)^2}.
$$
With unrestricted $R_L,X_L$, maximum average power is at $Z_L=Z_{\rm th}^*$; $P_{L,\max}=|V_{\rm th}|^2/(4R_{\rm th})$. If the load must be purely resistive, use $R_L=|Z_{\rm th}|$ instead. To realise $X_L>0$, $L=X_L/\omega$; for $X_L<0$, $C=-1/(\omega X_L)$.

## LC, resonance and bandwidth

With charge $q$ on the reference capacitor plate and $i=dq/dt$ in a series loop:
$$
Lq''+Rq'+\frac qC=v_s(t),\qquad
\omega_0=\frac1{\sqrt{LC}},\quad f_0=\frac{\omega_0}{2\pi}.
$$
For a source-free ideal LC, with $q_0=q(0)$ and $i_0=i(0)$:
$$
q(t)=q_0\cos(\omega_0t)+\frac{i_0}{\omega_0}\sin(\omega_0t),\qquad
W=\frac{q^2}{2C}+\frac{Li^2}{2}=\text{constant}.
$$
For an ideal LC driven by $V_{\rm pk}\cos(\omega_0t)$ from zero state, $q(t)=\frac{V_{\rm pk}}{2L\omega_0}t\sin(\omega_0t)$. The response grows with time; a finite sinusoidal steady-state phasor does not exist at exact lossless resonance.

**Series RLC, fixed RMS voltage drive.**
$$
Z=R+j\left(\omega L-\frac1{\omega C}\right),\quad
|I|=\frac{|V_s|}{|Z|},\quad
Q_{\rm s}=\frac{\omega_0L}{R}=\frac1{\omega_0CR}.
$$
At $\omega_0$, $Z=R$, $|I|_{\max}=|V_s|/R$, and $|V_C|=|V_L|=Q_{\rm s}|V_s|$. At half power, $|I|=|I|_{\max}/\sqrt2$, equivalently $\left|\omega L-1/(\omega C)\right|=R$:
$$
\omega_{1,2}=\sqrt{\omega_0^2+\left(\frac{R}{2L}\right)^2}
\mp\frac{R}{2L},\qquad
\Delta\omega=\omega_2-\omega_1=\frac RL=\frac{\omega_0}{Q_{\rm s}}.
$$
For design from measured edges, $\omega_0=\sqrt{\omega_1\omega_2}$, $Q_{\rm s}=\omega_0/\Delta\omega$, and $C=1/(L\omega_0^2)$. Use either all Hz or all rad/s when forming $Q$; $\Delta f=\Delta\omega/(2\pi)$.

**Parallel RLC, ideal parallel loss $R_p$.**
$$
Y=\frac1{R_p}+j\left(\omega C-\frac1{\omega L}\right),\qquad
Q_{\rm p}=\omega_0CR_p=\frac{R_p}{\omega_0L}.
$$
At $\omega_0$, $Z=R_p$ and $I_C=-I_L$ as phasors, each with magnitude $Q_{\rm p}$ times the supply current. For a **fixed current drive**, the half-power edges occur at $|Y|=\sqrt2/R_p$, so $\Delta\omega=1/(R_pC)=\omega_0/Q_{\rm p}$. With ideal voltage drive directly across the tank, $R_p$ power is constant, so that half-power measurement does not apply.

## Mutual inductance and coupled resonance

Let $M=k\sqrt{L_1L_2}$ with $0\le k\le1$. With both currents entering their dotted terminals and voltages measured dot to undotted terminal:
$$
v_1=L_1\frac{di_1}{dt}+M\frac{di_2}{dt},\qquad
v_2=M\frac{di_1}{dt}+L_2\frac{di_2}{dt}.
$$
If one port flips both its current and voltage references, both $M$ terms are negative. Series equivalent: $L_{\rm eq}=L_1+L_2\pm2M$, plus for aiding, minus for opposing.

For two coupled series loops with self-impedances $Z_1,Z_2$, passive secondary and both currents into dots:
$$
V_1=Z_1 I_1+j\omega M I_2,\qquad 0=j\omega M I_1+Z_2 I_2,
$$
$$
I_2=-\frac{j\omega M}{Z_2}I_1,\qquad
Z_{\rm in}=Z_1+\frac{(\omega M)^2}{Z_2}.
$$
At secondary series resonance, $Z_2=R_2$ and the reflected contribution is a positive resistance. For identical lossless loops $(L,C)$, in-phase and opposite-phase mode frequencies are respectively
$$
\omega_{\rm in\,phase}=\frac1{\sqrt{(L+M)C}},\qquad
\omega_{\rm opposite}=\frac1{\sqrt{(L-M)C}}\quad (M<L).
$$

## Balanced three-phase circuits

For ABC sequence, $V_{BN}=V_{AN}e^{-j2\pi/3}$ and $V_{CN}=V_{AN}e^{j2\pi/3}$. Reverse those relative angles for ACB. Always subtract phasors to form a line voltage or a delta line current:
$$
V_{AB}=V_{AN}-V_{BN},\qquad I_A=I_{AB}-I_{CA}.
$$

| Balanced connection | RMS magnitudes |
| --- | --- |
| Star (Y) | $\lvert V_{\rm line}\rvert=\sqrt3\lvert V_{\rm phase}\rvert$; $\lvert I_{\rm line}\rvert=\lvert I_{\rm phase}\rvert$ |
| Delta ($\Delta$) | $\lvert V_{\rm line}\rvert=\lvert V_{\rm phase}\rvert$; $\lvert I_{\rm line}\rvert=\sqrt3\lvert I_{\rm phase}\rvert$ |

In ABC sequence $V_{AB}$ leads $V_{AN}$ by $30^\circ$ and delta $I_A$ lags $I_{AB}$ by $30^\circ$ with the branch references above. Both offsets reverse in ACB. Balanced star neutral current is zero: $I_A+I_B+I_C=0$.

$$
S_{\rm total}=3V_{\rm phase}I_{\rm phase}^*,\qquad
P_{\rm total}=\sqrt3\lvert V_{\rm line}\rvert\lvert I_{\rm line}\rvert\cos\phi,\qquad
Q_{\rm total}=\sqrt3\lvert V_{\rm line}\rvert\lvert I_{\rm line}\rvert\sin\phi.
$$
Here $\phi$ is the **load power-factor angle**, not the angle between $V_{AB}$ and $I_A$. For per-line feeder resistance $R_{\rm line}$, copper loss is $3\lvert I_{\rm line}\rvert^2R_{\rm line}$. With a balanced shunt capacitor bank, $Q_{\rm bank}=-3\omega C_{\rm phase}\lvert V_{\rm phase}\rvert^2$, with the voltage across each capacitor set by its star or delta connection.

## Diodes and rectifiers

For a diode supplied by $V_{\rm th}$ and series $R_{\rm th}$, use the source load line $i_D=(V_{\rm th}-v_D)/R_{\rm th}$; the operating point is its intersection with the diode characteristic. On a straight segment from $(V_1,I_1)$ to $(V_2,I_2)$, write
$$
i_D=I_1+\frac{I_2-I_1}{V_2-V_1}(v_D-V_1),
$$
and check the intersection is inside the segment.

- **Ideal diode:** on means $v_D=0$ with $i_D\ge0$; off means $i_D=0$ with $v_D\le0$.
- **Fixed drop:** on means $v_D=V_\gamma$; off means $i_D=0$. Verify the fitted on current is nonnegative and the off voltage is no higher than $V_\gamma$.
- **Piecewise linear:** on means $v_D=V_\gamma+r_di_D$; then $i_D=(V_{\rm th}-V_\gamma)/(R_{\rm th}+r_d)$. Check the assumed region after solving. Diode power is $v_Di_D$.

For a sinusoidal input of peak $V_{\rm pk}$ and resistive load **without** a smoothing capacitor:

| Ideal rectifier | Average output | RMS output | Ripple frequency |
| --- | --- | --- | --- |
| Half-wave | $V_{\rm pk}/\pi$ | $V_{\rm pk}/2$ | $f$ |
| Full-wave | $2V_{\rm pk}/\pi$ | $V_{\rm pk}/\sqrt2$ | $2f$ |

Average resistor heating is $P=V_{\rm rms}^2/R$, not $V_{\rm avg}^2/R$. A constant-drop bridge has two conducting diode drops, so $v_o(t)=\max(0,|v_s(t)|-2V_\gamma)$. If $V_{\rm pk}>2V_\gamma$, the first conduction angle for a sine starting at zero is $\sin^{-1}(2V_\gamma/V_{\rm pk})$, and peak output is $V_{\rm pk}-2V_\gamma$.

[^scope]: [ELEC1311 module specification](https://www.southampton.ac.uk/courses/2026-27/modules/elec1311), plus [ELEC1311 course materials](https://moodle.ecs.soton.ac.uk/course/view.php?id=897) for balanced three-phase circuits.
