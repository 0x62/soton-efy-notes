---
title: "Practice Questions"
permalink: y1/revision/elec1311/practice-questions
---

Original exam-style questions. Try each one before opening **Answer** to see the working. Marks shown are for practice, not an official scheme.

Use RMS phasor magnitudes and a cosine reference unless stated otherwise.

[[Year 1/Revision/Circuits/Formula Book|Formula Book]]

## C1. Nodal analysis, superposition, power balance

A node $v$ connects to a stiff $+12\,\mathrm V$ rail through $2\,\Omega$, to a stiff $+6\,\mathrm V$ rail through $3\,\Omega$, and to ground through $6\,\Omega$. Find $v$ by KCL and superposition. Find each branch current and verify power balance.

> [!answer]- Answer
>
> Take all resistor currents away from the node. KCL gives $(v-12)/2+(v-6)/3+v/6=0$; multiplying by six gives $6v-48=0$, hence $v=8\,\mathrm V$. Separately, an inactive ideal voltage source is a short: a $12$ V-only contribution is $(12/2)/(1/2+1/3+1/6)=6$ V, and a $6$ V-only contribution is $2$ V, so they add to $8$ V. An independent current source, by contrast, is opened when set to zero.
>
> The $12$ V source supplies $(12-8)/2=2$ A, the $6$ V source absorbs $(8-6)/3=2/3$ A, and ground receives $8/6=4/3$ A. The resistors absorb $2(2)^2+3(2/3)^2+6(4/3)^2=20$ W. The sources supply a net $24-4=20$ W. Find branch power from the **combined** circuit, not by summing source-by-source resistor powers.

## C2. Mesh equations

Two clockwise mesh currents $i_1,i_2$ share a $2\,\Omega$ resistor. The left mesh has an additional $4\,\Omega$ and a $10\,\mathrm V$ source giving a rise clockwise. The right mesh has an additional $6\,\Omega$ and a $4\,\mathrm V$ source giving a fall clockwise. Solve both currents, the shared current in the left-mesh direction, and its power.

> [!answer]- Answer
>
> The shared left-direction current is $i_1-i_2$, because clockwise mesh currents oppose in the shared branch. KVL gives
>
> $$
> 6i_1-2i_2=10,\qquad -2i_1+8i_2=-4.
> $$
>
> Adding four times the first to the second eliminates $i_2$, giving $22i_1=36$. Then $i_1=18/11$ A and $i_2=-1/11$ A; the latter actual current is anticlockwise. The shared resistor carries $19/11$ A in the left direction and absorbs $2(19/11)^2=722/121\approx5.97$ W.

## C3. Terminal equivalents

A $12\,\mathrm V$ ideal source feeds node A through $4\,\Omega$; $8\,\Omega$ connects A to ground. The load port is A-ground. Find Thévenin and Norton equivalents; connect $R_L=4\,\Omega$ and find its voltage and power.

> [!answer]- Answer
>
> With the port open but its internal $8\,\Omega$ resistor still present, $V_{\rm th}=12(8)/(4+8)=8$ V. With the voltage source replaced by a short, $R_{\rm th}=4\parallel8=8/3\,\Omega$. The Norton source sends $I_N=V_{\rm th}/R_{\rm th}=3$ A towards A, in parallel with $8/3\,\Omega$. Reconnect the load: $v_L=8(4)/(8/3+4)=4.8$ V and $P_L=(4.8)^2/4=5.76$ W.

## C4. RC with a precharged capacitor

At $t=0$ a capacitor $C=100\,\mu\mathrm F$ initially at $1\,\mathrm V$ connects to a node fed by a $12\,\mathrm V$ rail through $6\,\mathrm{k}\Omega$ and grounded through $3\,\mathrm{k}\Omega$. Derive $v_C(t)$, initial capacitor current entering the positive terminal, and time to reach $3\,\mathrm V$.

> [!answer]- Answer
>
> Viewed from the capacitor, $V_{\rm th}=12(3)/(6+3)=4$ V and $R_{\rm th}=6\parallel3=2\,\mathrm{k}\Omega$. Its voltage cannot jump under bounded current, so $v_C(0^+)=1$ V. The differential equation is $C\dot v_C=(4-v_C)/R_{\rm th}$, giving
>
> $$
> \tau=R_{\rm th}C=0.2\,\mathrm s,\qquad v_C(t)=4-3e^{-t/0.2}\ \mathrm V.
> $$
>
> The initial current is $(4-1)/(2000)=1.5$ mA entering its positive terminal. At $v_C=3$, $e^{-t/0.2}=1/3$ and $t=0.2\ln3\approx0.220$ s. The voltage rises monotonically to $4$ V, providing a quick sanity check.

## C5. RL continuity and the two end states

At $t=0$, a series $4\,\Omega$, $0.2\,\mathrm H$ RL branch carrying $1\,\mathrm A$ is connected to a $12\,\mathrm V$ source aligned with the current. Find $i(t)$ and the passive-polarity $v_L(t)$. In an alternative switch position the same branch is shorted through its resistor with no source; find its response instead.

> [!answer]- Answer
>
> The time constant is $L/R=0.05$ s. The current cannot jump under bounded voltage. With drive, $0.2\dot i+4i=12$ and $i(\infty)=3$ A; thus
>
> $$
> i=3-2e^{-20t}\ \mathrm A,\qquad v_L=L\dot i=8e^{-20t}\ \mathrm V.
> $$
>
> Across the source-free branch, KVL gives $0.2\dot i+4i=0$, so $i=e^{-20t}$ A and $v_L=-4e^{-20t}$ V. Inductor voltage can change abruptly across a switching edge even though current is continuous.

## C6. Two successive steps

A series RC has $\tau=1\,\mathrm{ms}$ and $v_C(0^-)=0$. The applied source jumps to $8\,\mathrm V$ at $t=0$, then to $2\,\mathrm V$ at $t=1\,\mathrm{ms}$. Write a piecewise response, find the value just after the second edge, and decide initially whether it charges or discharges following that edge.

> [!answer]- Answer
>
> Entering the first interval at $0$ V, $v_C(t)=8(1-e^{-t/\tau})$ for $0\le t<\tau$. At the second edge, continuity sets $v_1=8(1-e^{-1})\approx5.057$ V. Treat $t-\tau$ as the local time and use the new final value:
>
> $$
> v_C(t)=\begin{cases}
> 8(1-e^{-t/\tau}),&0\le t<\tau,\\
> 2+(v_1-2)e^{-(t-\tau)/\tau},&t\ge\tau .
> \end{cases}
> $$
>
> Since $v_1>2$ V, the derivative is negative on the second interval. The capacitor discharges towards $2$ V, not towards zero and not to $2$ V instantaneously.

## C7. Phasors, RMS and power

A source $v(t)=10\sqrt2\cos(1000t+30^\circ)\,\mathrm V$ drives a series $4\,\Omega$, $3\,\mathrm{mH}$ load. Find the RMS current phasor and time waveform, and real, reactive and apparent absorbed power. State the power factor.

> [!answer]- Answer
>
> The peak amplitude $10\sqrt2$ means $V=10\angle30^\circ$ V RMS. The resistor/inductor impedance is $Z=4+j3=5\angle36.87^\circ\,\Omega$. Hence
>
> $$
> I=2\angle(-6.87^\circ)\,\mathrm A,\qquad i(t)=2\sqrt2\cos(1000t-6.87^\circ)\ \mathrm A.
> $$
>
> Using RMS phasors, $S=VI^*=20\angle36.87^\circ=16+j12$ VA; $P=16$ W, $Q=+12$ var, $|S|=20$ VA. PF $=P/|S|=0.8$ lagging since current lags voltage. Equivalently, the ideal inductor alone has $P_L=0$, $Q_L=I^2X_L=12$ var.

## C8. AC lead/lag

A series RC with $R=1\,\mathrm{k}\Omega$ and $C=1\,\mu\mathrm F$ has output across the capacitor. A series RL with the same $R$ and $L=1\,\mathrm H$ has output across the inductor. Derive both voltage transfer ratios, and find magnitude and phase at $\omega=1000\,\mathrm{rad/s}$.

> [!answer]- Answer
>
> Use the impedance of the output element in the numerator of the divider. For RC,
>
> $$
> H_C=\frac{1/(j\omega C)}{R+1/(j\omega C)}
> =\frac1{1+j\omega RC}.
> $$
>
> For RL with output across its inductance,
>
> $$
> H_L=\frac{j\omega L}{R+j\omega L}
> =\frac{j\omega L/R}{1+j\omega L/R}.
> $$
>
> Both dimensionless frequency ratios equal one at $1000\ \mathrm{rad/s}$. Then $H_C=1/(1+j)=2^{-1/2}\angle-45^\circ$ and $H_L=j/(1+j)=2^{-1/2}\angle45^\circ$. Low frequency sends the capacitor-output gain to one and the inductor-output gain to zero; the opposite holds at high frequency.

## C9. Parallel AC and power-factor correction

A $12\angle0^\circ\,\mathrm V$ RMS source at $\omega=1000\,\mathrm{rad/s}$ supplies parallel $6\,\Omega$ resistance and an inductive reactance of $8\,\Omega$. Find branch currents, input admittance and impedance, and total $P,Q$. Find the parallel capacitor giving unity power factor.

> [!answer]- Answer
>
> $Y=1/6+1/(j8)=1/6-j/8$ S. Thus $I_R=2$ A, $I_L=-j1.5$ A, and $I=2-j1.5$ A. Invert admittance by multiplying by its complex conjugate: $Z=3.84+j2.88\,\Omega$. $S=12(2+j1.5)=24+j18$ VA, so PF is $24/30=0.8$ lagging. Put $C$ in parallel so $+j\omega C$ cancels $-j/8$. Therefore $C=1/(8\omega)=125\,\mu$F. The current becomes $2$ A in phase; its real component and the resistor's $24$ W remain unchanged.

## C10. Conjugate matching

A linear two-terminal source has $V_{\mathrm{th}}=8\angle0^\circ\,\mathrm V$ RMS and $Z_{\mathrm{th}}=5-j10\,\Omega$ at $\omega=2000\,\mathrm{rad/s}$. Choose series R and L for maximum average load power and compute that power.

> [!answer]- Answer
>
> For a load $R_L+jX_L$,
>
> $$
> P_L=\frac{|V_{\rm th}|^2R_L}{(R_{\rm th}+R_L)^2+(X_{\rm th}+X_L)^2}.
> $$
>
> First set $X_L=-X_{\rm th}=10\,\Omega$ to minimise the denominator for any $R_L>0$. Then differentiate $R_L/(R_{\rm th}+R_L)^2$: its derivative is $(R_{\rm th}-R_L)/(R_{\rm th}+R_L)^3$, maximised at $R_L=R_{\rm th}=5\,\Omega$. Therefore $L=X_L/\omega=5$ mH and $P_L=8^2/(4\cdot5)=3.2$ W. Conjugating the entire impedance is not the same as simply setting $Z_L=Z_{\rm th}$.

## C11. Series RLC half power

In a series RLC let $R=10\,\Omega$, $L=20\,\mathrm{mH}$ and $C=50\,\mu\mathrm F$. Find $\omega_0,Q,\Delta\omega$, both exact half-power angular frequencies, and the current magnitude at resonance and at the half-power points for a $20\,\mathrm V$ RMS source.

> [!answer]- Answer
>
> $$
> \omega_0=1/\sqrt{LC}=1000\,\mathrm{rad/s},\qquad Q=\omega_0 L/R=2,\qquad \Delta\omega=R/L=500\,\mathrm{rad/s}.
> $$
>
> The net reactance is $\omega L-1/(\omega C)$. Half real power at fixed source voltage means half current-squared, hence $|Z|=\sqrt2R$ and $|\omega L-1/(\omega C)|=R$. Solving the resulting quadratics for positive frequencies gives
>
> $$
> \omega_{\rm low,high}=\frac{\sqrt{(R/L)^2+4\omega_0^2}\mp R/L}{2}
> \approx780.8,\ 1280.8\,\mathrm{rad/s}.
> $$
>
> Their difference is exactly 500 rad/s and their geometric mean is $\omega_0$; they need not be arithmetically symmetric. Resonant current $=20/10=2$ A; half-power current $=2/\sqrt2=1.414$ A RMS.

## C12. Parallel tank

An ideal parallel tank has $R_p=2\,\mathrm{k}\Omega$, $L=0.1\,\mathrm H$, and $C=10\,\mu\mathrm F$. A $10\,\mathrm V$ RMS source is directly across it. Find resonant frequency in rad/s, impedance at resonance, all branch-current phasors there, and the parallel-tank $Q$ based on component losses.

> [!answer]- Answer
>
> $$
> Y=1/R_p+j\left(\omega C-1/(\omega L)\right).
> $$
>
> At $\omega_0=1/\sqrt{LC}=1000\,\mathrm{rad/s}$ the susceptances cancel. Thus input impedance is its maximum, $R_p=2\,\mathrm{k}\Omega$, with $I_R=5$ mA, $I_C=j100$ mA, $I_L=-j100$ mA, and source current $I_s=5$ mA. Internal reactive current can be much larger than source current. The parallel-loss Q is $Q=\omega_0 C R_p=R_p/(\omega_0 L)=20$; it uses the *parallel* loss resistance, unlike C11.

## C13. Ideal LC, free and exactly driven

An ideal series LC has $L=0.1\,\mathrm H$, $C=10\,\mu\mathrm F$. Let $i=q'$. (a) With no source, $q(0)=20\,\mu\mathrm C$, $i(0)=0$, find $q(t)$ and $i(t)$. (b) Restart at zero state and drive with $v_s(t)=2\cos(1000t)\,\mathrm V$. Find the resonant charge response and explain its growing envelope.

> [!answer]- Answer
>
> Charge satisfies $q''+\omega_0^2q=v_s/L$ with $\omega_0=1000\,\mathrm{rad/s}$. (a) Two initial conditions select $q=20\,\mu\mathrm C\,\cos(1000t)$ and $i=-20\,\mathrm{mA}\sin(1000t)$. (b) For the drive, the right side is $20\cos(1000t)$. A bare cosine is already a homogeneous solution. Instead,
>
> $$
> (D^2+\omega_0^2)[t\sin(\omega_0t)]=2\omega_0\cos(\omega_0t).
> $$
>
> Thus $q=0.01t\sin(1000t)$ C, with $t$ in seconds; it satisfies both zero initial conditions. The growing envelope is ideal: no resistance removes energy while the drive excites at the natural frequency. It is not an indefinitely valid real-circuit prediction.

## C14. Mutual inductance and sign

Two windings have $L_1=9\,\mathrm{mH}$, $L_2=16\,\mathrm{mH}$, $M=6\,\mathrm{mH}$. Find coupling coefficient $k$ and series equivalent inductance when fluxes aid and when they oppose. With secondary open, primary current entering its dot changes at $300\,\mathrm{A/s}$. Find secondary voltage from dot to undotted terminal.

> [!answer]- Answer
>
> $k=M/\sqrt{L_1L_2}=6/\sqrt{9\cdot16}=0.50$. If the shared series current enters both dots (or leaves both), the mutual contributions reinforce and $L_{\rm aid}=L_1+L_2+2M=37$ mH. If it enters one dot and leaves the other, $L_{\rm oppose}=L_1+L_2-2M=13$ mH. With the secondary open its self term is zero: $v_2=M\dot i_1=0.006(300)=+1.8$ V dot relative to undotted.

## C15. Coupled resonators and reflected loading

Two magnetically coupled series RLC loops have $R_1=R_2=4\,\Omega$, $L_1=L_2=10\,\mathrm{mH}$, $C_1=C_2=100\,\mu\mathrm F$, $M=2\,\mathrm{mH}$. Both reference currents enter dots. Drive loop 1 with $10\angle0^\circ\,\mathrm V$ RMS at $\omega=1000\,\mathrm{rad/s}$; loop 2 has no source. Find reflected resistance, both currents, and load power in loop 2. In the lossless symmetric case, give the two natural angular frequencies.

> [!answer]- Answer
>
> At the uncoupled tuning frequency the self reactances cancel, but the mutual reactance $j\omega M=j2\,\Omega$ remains:
>
> $$
> 4I_1+j2I_2=10,\qquad j2I_1+4I_2=0.
> $$
>
> Thus $I_2=-jI_1/2$. Substituting into loop 1 gives $(4+1)I_1=10$: $R_{\rm refl}=(\omega M)^2/R_2=1\,\Omega$, $I_1=2$ A and $I_2=-j1$ A. The secondary resistor absorbs $4|I_2|^2=4$ W. As a check, the input real power is $20$ W, of which $16$ W is absorbed in loop 1. For lossless symmetric loops the equal-sign and opposite-sign current modes yield $L_{\rm eff}=L\pm M$, so $\omega_\pm=1/\sqrt{(L\pm M)C}\approx912.9,\ 1118.0$ rad/s.

## C16. Star source and star load

A balanced star source has $V_{AN}=230\angle0^\circ\,\mathrm V$ RMS and ABC sequence. Its balanced star load is $20+j15\,\Omega$ per phase. Find $V_{AB}$, $I_A$, ideal neutral current, and total $P,Q$. If phase sequence reverses, say what happens to $V_{AB}$ and total power.

> [!answer]- Answer
>
> ABC gives $V_{BN}=230\angle-120^\circ$ V. Subtract phasors, not magnitudes:
>
> $$
> V_{AB}=V_{AN}-V_{BN}=230\sqrt3\angle30^\circ\approx398.4\angle30^\circ\,\mathrm V.
> $$
>
> $I_A=230\angle0^\circ/(25\angle36.87^\circ)=9.2\angle-36.87^\circ$ A. The balanced phase currents are spaced by $120^\circ$, so their phasor sum and the neutral current are zero. $S_{\rm total}=3V_{AN}I_A^*=5078.4+j3808.8$ VA. For reversed sequence $V_{BN}$ has $+120^\circ$, so $V_{AB}$ changes to $-30^\circ$ with the same magnitude. Total $P$ and $Q$ stay the same because the per-phase voltage magnitudes and load impedances do not change.

## C17. Delta branch and line currents

At the terminals of a balanced delta load, $V_{AB}=400\angle0^\circ\,\mathrm V$ RMS, $V_{BC}=400\angle-120^\circ$, $V_{CA}=400\angle120^\circ$. Three $40\,\Omega$ resistors form the delta. Find $I_{AB}$, line current $I_A$ entering node A, and total real power.

> [!answer]- Answer
>
> Each branch sees its line-to-line voltage. $I_{AB}=10\angle0^\circ$ A and $I_{CA}=10\angle120^\circ$ A. Node A loses $I_{AB}$ towards B and gains $I_{CA}$ from C, so the external line supplies
>
> $$
> I_A=I_{AB}-I_{CA}=15-j8.660=\sqrt3(10)\angle-30^\circ\,\mathrm A.
> $$
>
> Total load power is $3(400^2/40)=12{,}000$ W. Using three times line-current squared times the **branch** resistance would incorrectly apply the line current to each resistor.

## C18. Diode load-line intersection

A $2\,\mathrm V$ source, $1\,\mathrm{k}\Omega$ resistance, and forward diode are in series. The diode curve has points $(V_D,I_D)=(0.60\,\mathrm V,1.0\,\mathrm{mA})$ and $(0.70\,\mathrm V,2.0\,\mathrm{mA})$. Use linear interpolation between those points only. Write the source load line, find the operating point, and find diode power.

> [!answer]- Answer
>
> With voltage in volts and current in milliamps, the source line is $I_D=2-V_D$; its intercepts are $(0,2)$ and $(2,0)$. In the specified segment, the diode interpolation is $I_D=1+10(V_D-0.60)=10V_D-5$. Equate them: $11V_D=7$, so $V_D=7/11\approx0.6364$ V, inside the interpolation segment. Then $I_D=15/11\approx1.364$ mA and $P_D=(7/11)(15/11)\approx0.868$ mW. The device and source lines describe the same $V_D,I_D$ only at their intersection.

## C19. Piecewise model and consistency

A diode anode is supplied by $V_s$ through $1\,\mathrm{k}\Omega$; its cathode is grounded. Use $v_D=0.65+20i_D$ in the on state (volts and amperes), $i_D=0$ off. Find $v_D,i_D$ for $V_s=0.40\,\mathrm V$, $5.0\,\mathrm V$, and $-3.0\,\mathrm V$. Compare the $5\,\mathrm V$ result with the ideal diode.

> [!answer]- Answer
>
> With the diode off, $i_D=0$ gives no resistor drop and $v_D=V_s$. This is consistent for $+0.40$ V and $-3.0$ V because both are below the turn-on boundary of $0.65$ V. For $+5$ V the off assumption fails. In the on state KVL gives $5=1000i_D+0.65+20i_D$, so $i_D=4.35/1020=4.265$ mA, $v_D=0.7353$ V. The positive $i_D$ confirms consistency. An ideal on diode predicts $v_D=0$ and $i_D=5$ mA instead.

## C20. Rectification and effective load heating

A $10\,\mathrm V$ peak sine drives a $100\,\Omega$ load through (a) an ideal half-wave rectifier and (b) an ideal full-wave bridge. Derive average voltage, RMS voltage and average load power for each, and give ripple frequency relative to input frequency. In the bridge, replace each ideal diode by a constant $0.7\,\mathrm V$ drop: find the peak load voltage and first conduction angle.

> [!answer]- Answer
>
> Let $\theta$ run through one full $2\pi$ input period. An ideal half-wave output equals $10\sin\theta$ for $0\le\theta\le\pi$ and zero for the other half. Hence
>
> $$
> V_{\rm avg}=\frac{10}{2\pi}\int_0^\pi\sin\theta\,d\theta=\frac{10}{\pi},\quad
> V_{\rm rms}=\sqrt{\frac{100}{2\pi}\int_0^\pi\sin^2\theta\,d\theta}=5\,\mathrm V.
> $$
>
> Average load power $=V_{\rm rms}^2/100=0.25$ W. The waveform repeats once per input period. The full-wave bridge folds the other half over: both integrals double, so $V_{\rm avg}=20/\pi$ V, $V_{\rm rms}=5\sqrt2$ V and $P_{\rm avg}=0.50$ W. The output repeats at twice the input frequency. With fixed drops, two diodes conduct at a time, so $v_{\rm out}=\max(0,10|\sin\theta|-1.4)$ V. Peak is $8.6$ V; first conduction begins at $\sin^{-1}(1.4/10)\approx8.05^\circ$.

## C21. Storage elements.

(a) The passive voltage of an unknown ideal element rises from 0 to $6\,\mathrm V$ in $3\,\mathrm{ms}$ at constant current $4\,\mathrm{mA}$, then holds, then falls from $6$ to $-2\,\mathrm V$ over $2\,\mathrm{ms}$. Identify the element and value and find its current in the final ramp. (b) A $10\,\mathrm V$ source feeds node A through $2\,\mathrm{k}\Omega$; two branches connect A to ground: $4\,\mathrm{k}\Omega$ in series with an ideal inductor, and $1\,\mathrm{k}\Omega$ in series with an ideal capacitor. Find source current after a long time. (c) Two series capacitors $6$ and $3\,\mu\mathrm F$ have signed drops along the left-to-right path of $8$ and $-2\,\mathrm V$. At zero a $1\,\mathrm{k}\Omega$ resistor connects across the outside terminals. Find the voltage of left relative to right at $2\,\mathrm{ms}$ and just after switching. (d) In a source-free series LC, $L=20\,\mathrm{mH}$, $C=5\,\mu\mathrm F$, $v_C(0)=2\,\mathrm V$, and $i(0)=0.1\,\mathrm A$ enters the positive capacitor terminal. Find $i(t)$.

> [!answer]- Answer
>
> (a) A constant nonzero current produces a voltage ramp, with no current to maintain its level. That is a capacitor: $i=C\,dv/dt$, hence $C=0.004/(6/0.003)=2\,\mu\mathrm F$. On the falling segment $i=2\times10^{-6}(-8/0.002)=-8\,\mathrm{mA}$. (b) At DC steady state, $v_L=L\,di/dt=0$ and $i_C=C\,dv/dt=0$. Replace the inductor by a short and the capacitor by an open **before** reducing the remaining network. The source current is $10/(2+4)\,\mathrm{mA}=1.667\,\mathrm{mA}$.
>
> (c) The terminal voltage initially is $8-2=6\,\mathrm V$. The two capacitor drops have equal rates of charge in series, so $C_{\rm eq}=(1/6+1/3)^{-1}=2\,\mu\mathrm F$. The differential terminal voltage cannot jump under finite resistor current, hence it is $6\,\mathrm V$ at $0^+$ and $6e^{-2/2}=2.207\,\mathrm V$ at $2\,\mathrm{ms}$. The individual capacitor voltages need not decay to zero: the floating midpoint can retain net charge, while the *terminal difference* decays to zero.
>
> (d) KVL is $L i'+v_C=0$, so $i'(0)=-2/0.02=-100\,\mathrm{A/s}$. Differentiating gives $i''+i/(LC)=0$. With $\omega_0=3162.28\,\mathrm{rad/s}$,
>
> $$
> i(t)=0.10\cos(3162.28t)-0.03162\sin(3162.28t)\quad\mathrm A.
> $$
>
> Both initial data matter; setting the sine term to zero would incorrectly make the initial inductor voltage zero.

## C22. Nonconstant excitation.

(a) A series RC has $R=1\,\mathrm{k}\Omega$, $C=2\,\mu\mathrm F$, and no initial capacitor voltage. At $t=0$ it is driven by $v_s=6e^{-200t}\,\mathrm V$. Derive $v_C(t)$ and its initial slope. (b) A series $4\,\Omega$, $10\,\mathrm{mH}$, $100\,\mu\mathrm F$ branch instead carries prescribed $i=200t\,\mathrm A$ for $0\le t<5\,\mathrm{ms}$, then $1\,\mathrm A$; capacitor starts uncharged. Give $v_R,v_L,v_C$ during both intervals.

> [!answer]- Answer
>
> (a) The time constant is $0.002\,\mathrm s$. Substituting $i_C=Cv_C'$ into KVL gives
>
> $$
> v_C'+500v_C=3000e^{-200t}.
> $$
>
> Test $v_p=Ae^{-200t}$. Then $(500-200)A=3000$, hence $v_p=10e^{-200t}$. Add $Ke^{-500t}$ and impose $v_C(0)=0$ to get $K=-10$. Therefore $v_C=10(e^{-200t}-e^{-500t})\,\mathrm V$ and $v_C'(0^+)=3000\,\mathrm{V/s}$. A constant final voltage in the one-step formula would not describe this forcing.
>
> (b) Using the defined current directly, $v_R=Ri$, $v_L=L\,di/dt$, $v_C(t)=v_C(0)+C^{-1}\int_0^t i(s)\,ds$. For $0<t<0.005\,\mathrm s$, $v_R=800t$, $v_L=2$, $v_C=10^6t^2$, all in volts with $t$ in seconds. At the join $v_C=25\,\mathrm V$ and $i=1\,\mathrm A$, so for $t>0.005\,\mathrm s$, $v_R=4$, $v_L=0$, $v_C=25+10^4(t-0.005)$. Since the derivative of $i$ changes discontinuously, use one-sided values for $v_L$ at the join.

## C23. AC nodal analysis and gains.

(a) Derive $V_L/V_s$ for a series RLC. (b) Node $V$ connects to $V_1=8\angle0^\circ$ via $j4\,\Omega$, to $V_2=2\angle90^\circ$ via $-j4\,\Omega$, and to ground via $4\,\Omega$. Sources are RMS at the same $\omega$. Find node phasor and time-domain current through the inductor from $V_1$ toward the node. (c) Find the input impedance if the two sources are shorted and the input port is now at $V$ to ground. Explain the result.

> [!answer]- Answer
>
> (a) The single series current gives
>
> $$
> H_L=\frac{j\omega L}{R+j\omega L+1/(j\omega C)}.
> $$
>
> This is a voltage divider in complex impedance, not a ratio of impedance magnitudes. (b) From KCL, with currents out of $V$,
>
> $$
> \frac{V-V_1}{j4}+\frac{V-V_2}{-j4}+\frac{V}{4}=0.
> $$
>
> The reactive coefficients of $V$ cancel, giving $V=j(V_2-V_1)=-2-j8\,\mathrm V$. Then $I_L=(8-V)/(j4)=2-j2.5=3.202\angle-51.34^\circ\,\mathrm A$ RMS. Thus $i_L(t)=4.528\cos(\omega t-51.34^\circ)\,\mathrm A$. (c) The input admittance is $1/4+1/(j4)+1/(-j4)=1/4\,\mathrm S$, so $Z_{\rm in}=4\,\Omega$. Equal and opposite branch susceptances cancel at that frequency; current can still flow in the reactive branches.

## C24. AC power forward and backward.

(a) A current $i(t)=2\sqrt2\cos(400t-30^\circ)\,\mathrm A$ enters the positive terminal of a parallel $4\,\Omega$ and $C=625\,\mu\mathrm F$ load. Find its absorbed complex power and instantaneous power. (b) At the same current phasor a *different* load absorbs $12+j8\,\mathrm{VA}$. Find its RMS voltage phasor and explain why this is not the same parallel RC.

> [!answer]- Answer
>
> (a) $I=2\angle-30^\circ\,\mathrm A$, $Y=0.25+j0.25\,\mathrm S$, $Z=2-j2\,\Omega$. Then $V=ZI=4\sqrt2\angle-75^\circ\,\mathrm V$ RMS and $S=|I|^2Z=8-j8\,\mathrm{VA}$. The instantaneous voltage is $8\cos(400t-75^\circ)\,\mathrm V$. Multiply the two waveforms and use $2\cos A\cos B=\cos(A-B)+\cos(A+B)$:
>
> $$
> p(t)=8+8\sqrt2\cos(800t-105^\circ)\quad\mathrm W.
> $$
>
> The $800\,\mathrm{rad/s}$ term averages to zero; the average is $8\,\mathrm W$. Pure ideal reactances can store and return energy but absorb no real average power; resistance, dielectric loss and mechanical work from a motor can absorb real input power.
>
> (b) $V=S/I^*=(12+j8)/(2\angle30^\circ)=7.211\angle3.69^\circ\,\mathrm V$ RMS. Positive $Q$ means net inductive behaviour under the absorbed-power convention; the original parallel RC had negative $Q$.

## C25. Resonance from a response curve and redesign.

A series RLC response has its maximum at $f_0=2.00\,\mathrm{kHz}$ with $I_{\mathrm{peak}}=80\,\mathrm{mA}$; the exact separation of the two half-power frequencies is $200\,\mathrm{Hz}$. Take $L=40.0\,\mathrm{mH}$. Find $Q,R,C$, source peak voltage, peak inductor voltage and average dissipated power at resonance. Calculate maximum inductor and capacitor stored energies and explain whether they occur together. Reduce bandwidth to $100\,\mathrm{Hz}$ without changing $f_0$ or resonant peak current, in two ways: (i) keep $L,C$ fixed and vary $R$ and source amplitude, (ii) keep $R$ and amplitude fixed and vary $L,C$. Also state how decreasing only $C$ changes $f_0,Q$.

> [!answer]- Answer
>
> Convert to angular units: $\omega_0=2\pi(2000)$ and $\Delta\omega=2\pi(200)$. Then
>
> $$
> Q=f_0/\Delta f=10,\quad R=L\Delta\omega=50.265\,\Omega,\quad C=1/(L\omega_0^2)=158.314\,\mathrm{nF}.
> $$
>
> At resonance the total impedance is $R$ and $V_{L,\rm peak}=I_{\rm peak}\omega_0L$; the source peak is $4.021\,\mathrm V$ and the inductor peak is $40.212\,\mathrm V$ (ten times larger, cancelled in the loop by the capacitor phasor). Average power is $\tfrac12 I_{\rm peak}^2R=0.16085\,\mathrm W$. Maximum stored energies are $W_{L,\max}=\tfrac12 L I_{\rm peak}^2=128\,\mu\mathrm J$ and $W_{C,\max}=\tfrac12 C V_{C,\rm peak}^2=128\,\mu\mathrm J$. Current/inductor energy peak when capacitor voltage is zero and vice versa; do not add the two maxima as if they happen together.
>
> To halve bandwidth, (i) fixed $L,C$ requires $R'=R/2=25.133\,\Omega$ and half source peak, $2.011\,\mathrm V$, to preserve peak current. (ii) Fixed $R$ requires $L'=2L=80\,\mathrm{mH}$, $C'=C/2=79.157\,\mathrm{nF}$ so that $LC$ and $f_0$ remain constant. Both designs double $Q$. Holding $R,L$ fixed and decreasing only $C$ instead increases both $\omega_0=1/\sqrt{LC}$ and $Q=\omega_0L/R$.

## C26. Three-phase feeder and power-factor correction.

An ABC star source has $V_{AB}=400\angle30^\circ\,\mathrm V$ RMS; per-phase feeder impedance is $0.5+j1.0\,\Omega$ and star load is $12+j9\,\Omega$ per phase. Calculate phase-A current, load-terminal phase voltage, real power in source, feeder and load, and efficiency. At $50\,\mathrm{Hz}$, size a capacitor per phase in parallel with the load to make the *load-terminal* power factor unity. Does that necessarily make the source power factor unity?

> [!answer]- Answer
>
> ABC gives $V_{AN}=400/\sqrt3\angle0^\circ\,\mathrm V$. Reduce to one phase:
>
> $$
> I_A=\frac{400/\sqrt3}{12.5+j10}=14.43\angle-38.66^\circ\,\mathrm A.
> $$
>
> At the load $V_{AN,\rm load}=I_A(12+j9)=216.40\angle-1.79^\circ\,\mathrm V$. Multiplying one-phase real powers by three gives $P_{\rm load}=3|I_A|^2(12)=7492.68\,\mathrm W$ and $P_{\rm line}=3|I_A|^2(0.5)=312.20\,\mathrm W$. Thus $P_{\rm source}=7804.88\,\mathrm W$ and $\eta=12/12.5=96.0\%$. This uses source **phase** voltage, not its $400\,\mathrm V$ line voltage, in the per-phase circuit.
>
> The uncorrected branch admittance is $Y_{\rm load}=(12-j9)/225=0.05333-j0.04000\,\mathrm S$. Add $j\omega C$ with $C=0.04000/(2\pi50)=127.32\,\mu\mathrm F$ per star phase. This removes the load's susceptance; the source still sees the positive feeder reactance, so its own power factor remains lagging rather than exactly one.

## C27. Fit a DC source and its unknown node.

An ideal emf in series with an internal resistance gives $7.2\,\mathrm V$ across a $12\,\Omega$ test load and $8.0\,\mathrm V$ across a $24\,\Omega$ test load. Identify the source equivalent. Separately, a $10\,\mathrm V$ rail connects through $10\,\Omega$ to node X and the current entering X from it is known to be $0.30\,\mathrm A$. X connects to ground through $35\,\Omega$ and to an unknown stiff rail Y through $20\,\Omega$. Find Y by KVL and KCL.

> [!answer]- Answer
>
> The measurements imply $I_1=7.2/12=0.600\,\mathrm A$ and $I_2=8/24=1/3\,\mathrm A$. From $E=V_L+rI_L$, subtract the two equations: $0.8=r(0.600-1/3)$, so $r=3.00\,\Omega$ and $E=9.00\,\mathrm V$. In the separate circuit, $V_X=10-0.30(10)=7\,\mathrm V$ by KVL. The $35\,\Omega$ branch takes $0.20\,\mathrm A$, leaving $0.10\,\mathrm A$ from X toward Y, so $V_Y=7-0.10(20)=5\,\mathrm V$.

## C28. Which quantity can jump?

(a) A $10\,\mu\mathrm F$ capacitor is at $5\,\mathrm V$ at $t=0^-$. A switch then connects its positive terminal through $1\,\mathrm{k}\Omega$ to an ideal $2\,\mathrm V$ source sharing the capacitor ground. Find passive capacitor current for $t>0$, $i_C(0^+)$ and whether it is legitimate to equate it to $i_C(0^-)$. Before switching the capacitor had been unexcited for a long time except for the charging DC network. (b) An inductor $L=10\,\mathrm{mH}$ initially at $0.10\,\mathrm A$ is connected at zero to a new Thévenin equivalent of $8\,\mathrm V$ and $20\,\Omega$, aligned with that current. Find $i_L$ and $v_L$ for $t>0$, and their right limits. Assume steady DC before the switch.

> [!answer]- Answer
>
> (a) Continuous capacitor voltage yields $v_C(t)=2+3e^{-100t}\,\mathrm V$ for $t>0$. The current entering its positive terminal is $(2-v_C)/1000=-3e^{-100t}\,\mathrm{mA}$. The right limit $-3\,\mathrm{mA}$ and the old DC current $0$ differ. The formula extends to the *right-hand value* at zero, not to the pre-switch value. (b) $\tau=L/R=0.5\,\mathrm{ms}$ and $i_\infty=8/20=0.40\,\mathrm A$. Continuity gives $i_L=0.40-0.30e^{-2000t}\,\mathrm A$. Then $v_L=L\,di_L/dt=6e^{-2000t}\,\mathrm V$ and $i_L(0^+)=0.10\,\mathrm A$, $v_L(0^+)=6\,\mathrm V$. Inductor current is continuous but its voltage can jump from the old steady-state zero.
