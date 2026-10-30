---
permalink: y1/elec1311/ac-power
---
#### AC Power

- [[#Instantaneous and average power]]
- [[#Complex power and RMS phasors]]
- [[#Worked sinusoidal example]]
- [[#Power in resistors capacitors and inductors]]
- [[#Power from impedance or admittance]]
- [[#Maximum power transfer]]
- [[#Decibels and the half-power point]]

**[[#Instantaneous and average power|Average sinusoidal power]]**
$$P=V_{\mathrm{rms}}I_{\mathrm{rms}}\cos\phi=\frac{V_mI_m}{2}\cos\phi$$
**[[#Complex power and RMS phasors|Complex power]]**
$$S=\underline V\underline I^*=P+jQ,\qquad |S|=V_{\mathrm{rms}}I_{\mathrm{rms}}$$
**[[#Maximum power transfer|Conjugate matching]]**
$$Z_L=Z_s^*,\qquad P_{L,\max}=\frac{|\underline V_s|^2}{4R_s}$$
**[[#Decibels and the half-power point|Gain in decibels]]**
$$G_P=10\log_{10}\frac{P_o}{P_i},\qquad G_V=20\log_{10}\left|\frac{V_o}{V_i}\right|$$

Here $V_m,I_m$ denote **peak** amplitudes; underlined phasors in the complex-power and matching formulas use **RMS** amplitudes. Positive absorbed power uses the passive sign convention: current enters the terminal marked positive.[^1]

## Instantaneous and average power

The instantaneous rate of energy transfer is
$$p(t)=\frac{dW}{dt}=v(t)i(t).$$
It can vary within a cycle even when the source has a fixed amplitude. Positive $p$ means energy enters the component; negative $p$ means energy is being returned.

For a periodic waveform,
$$P=\frac1T\int_{t_0}^{t_0+T}p(t)\,dt.$$
Take cosine-reference sinusoids
$$v(t)=V_m\cos(\omega t+\theta_v),\qquad i(t)=I_m\cos(\omega t+\theta_i).$$
Using $2\cos A\cos B=\cos(A-B)+\cos(A+B)$ gives
$$p(t)=\frac{V_mI_m}{2}\left[\cos(\theta_v-\theta_i)+\cos(2\omega t+\theta_v+\theta_i)\right].$$
The second term oscillates at twice the source frequency and averages to zero over a complete source period. With $\phi=\theta_v-\theta_i$,
$$\boxed{P=\frac{V_mI_m}{2}\cos\phi=V_{\mathrm{rms}}I_{\mathrm{rms}}\cos\phi.}$$
If both waveforms are expressed as **sines**, the double-frequency term has a minus sign instead; the average-power formula is unchanged.[^1]

For in-phase sinusoids of $8\,\mathrm V$ peak and $4\,\mathrm A$ peak,
$$p(t)=32\cos^2\omega t=16(1+\cos2\omega t)\,\mathrm W.$$
Thus instantaneous power ranges from $0$ to $32\,\mathrm W$, while the average is $16\,\mathrm W$. Multiplying the two peak amplitudes gives the maximum instantaneous power in this in-phase example, **not** the average.

### Why the oscillating term averages to zero

Let $\alpha=\theta_v+\theta_i$ and use $T=2\pi/\omega$. Integrating the oscillating term explicitly gives
$$\int_0^T\cos(2\omega t+\alpha)\,dt
=\left[\frac{\sin(2\omega t+\alpha)}{2\omega}\right]_0^T
=\frac{\sin(4\pi+\alpha)-\sin\alpha}{2\omega}=0.$$
The two sine values are equal because their arguments differ by two complete cycles. The constant term instead gives
$$\frac1T\int_0^T\cos\phi\,dt
=\frac{T\cos\phi-0}{T}=\cos\phi.$$
Thus the average retains the phase-difference term, not the double-frequency term. This derivation is for a single-frequency sinusoidal steady state; the integral definition of average power still applies to other waveforms.[^4]

## Complex power and RMS phasors

![[AC Theory (3)#Power components]]

The component picture uses RMS current magnitude. The sign of the quadrature component depends on whether current leads or lags; complex power makes that sign explicit.

The complex-power description retains the distinction between irreversible energy transfer and reversible energy storage. With RMS phasors,
$$\underline V=V_{\mathrm{rms}}e^{j\theta_v},\qquad \underline I=I_{\mathrm{rms}}e^{j\theta_i},$$
$$S=\underline V\underline I^*=V_{\mathrm{rms}}I_{\mathrm{rms}}e^{j(\theta_v-\theta_i)}=P+jQ.$$
The conjugate is essential: it produces the **phase difference**, not the phase sum. In rectangular form, $(a+jb)^*=a-jb$; in polar form, $(I\angle\theta)^*=I\angle(-\theta)$.

For example, with $\underline V=10+j0\,\mathrm V$ RMS and $\underline I=3-j4\,\mathrm A$ RMS:

1. Conjugate the current: $\underline I^*=3+j4$.
2. Multiply: $S=10(3+j4)=30+j40\,\mathrm{VA}$.
3. Read off $P=30\,\mathrm W$ and $Q=40\,\mathrm{var}$.
4. Find $|S|=\sqrt{30^2+40^2}=50\,\mathrm{VA}$ and $\mathrm{PF}=30/50=0.6$, lagging.

$S$ is a complex summary of power; it is **not** the instantaneous waveform $p(t)$ and is not inserted into $\Re\{S e^{j\omega t}\}$ to obtain power. The real instantaneous power generally contains a constant part and a component at $2\omega$.[^5]

| Quantity | Expression | Unit | Meaning |
|---|---|---|---|
| Real or active power $P$ | $VI\cos\phi$ | watt (W) | Average energy transferred per second |
| Reactive power $Q$ | $VI\sin\phi$ | var | Signed measure of cyclic energy exchange |
| Apparent power $|S|$ | $VI=\sqrt{P^2+Q^2}$ | volt-ampere (VA) | Product of RMS voltage and current |

Here the unadorned $V,I$ in the table are RMS magnitudes. For sinusoidal voltage and current,
$$\mathrm{power\ factor}=\frac{P}{|S|}=\cos\phi.$$
For a passive load, positive $Q$ indicates an inductive, **lagging-current** load; negative $Q$ indicates a capacitive, **leading-current** load. Saying only “power factor 0.8” does not distinguish leading from lagging.

If peak phasors are used instead, the correct expression is
$$S=\frac12\underline V_m\underline I_m^*.$$
The factor of $1/2$ disappears only when **both** phasors are RMS. These sinusoidal formulas do not make displacement factor $\cos\phi$ a universal description of power factor for distorted waveforms.[^1]

## Worked sinusoidal example

Consider
$$v(t)=120\cos(377t+\pi/4)\,\mathrm V,\qquad i(t)=10\cos(377t-\pi/18)\,\mathrm A.$$
The phase angles are $45^\circ$ and $-10^\circ$, so the phase difference is $55^\circ$:
$$V_{\mathrm{rms}}=\frac{120}{\sqrt2},\qquad I_{\mathrm{rms}}=\frac{10}{\sqrt2},$$
$$S=600\angle55^\circ\,\mathrm{VA}=344.15+j491.49\,\mathrm{VA}.$$
Therefore
$$P=344.15\,\mathrm W,\qquad Q=491.49\,\mathrm{var},\qquad \mathrm{PF}=0.574\text{ lagging}.$$
Direct multiplication gives the independent time-domain check
$$p(t)=600\left[\cos55^\circ+\cos(754t+7\pi/36)\right]\,\mathrm W.$$
Its average is $344.15\,\mathrm W$. The instantaneous power becomes negative during part of each cycle even though the net energy absorbed per cycle is positive.[^1]

## Power in resistors capacitors and inductors

| Ideal component | Voltage relative to current | Average power | Reactive power |
|---|---|---|---|
| Resistor | In phase | $I_{\mathrm{rms}}^2R$ | $0$ |
| Inductor | Leads by $90^\circ$ | $0$ | $+V_{\mathrm{rms}}I_{\mathrm{rms}}$ |
| Capacitor | Lags by $90^\circ$ | $0$ | $-V_{\mathrm{rms}}I_{\mathrm{rms}}$ |

A resistor converts electrical energy into heat. An ideal inductor stores magnetic energy $W_L=Li^2/2$; an ideal capacitor stores electric energy $W_C=Cv^2/2$. Each returns its stored energy later in the cycle. **Zero average power does not mean zero current, zero instantaneous power or zero stored energy.** Real components can also dissipate power through resistance and other losses.[^1]

### Deriving the component power waveforms

Choose the same cosine voltage reference $v(t)=V_m\cos\omega t$ in each case. The component equations determine the current; all amplitudes below are **peak** values.

**Resistor**

1. $i(t)=v(t)/R=(V_m/R)\cos\omega t$, so $I_m=V_m/R$.
2. Multiply: $p_R(t)=V_mI_m\cos^2\omega t$.
3. Use $\cos^2x=(1+\cos2x)/2$:
   $$p_R(t)=\frac{V_mI_m}{2}(1+\cos2\omega t).$$
4. Therefore $P_R=V_mI_m/2=V_{\mathrm{rms}}^2/R$ and $Q_R=0$. The waveform never becomes negative.

**Capacitor**

1. $i(t)=C\,dv/dt=-\omega CV_m\sin\omega t$.
2. Since $-\sin x=\cos(x+90^\circ)$, the current leads voltage and $I_m=\omega CV_m$.
3. Multiply and use $2\sin x\cos x=\sin2x$:
   $$p_C(t)=-\frac{V_mI_m}{2}\sin2\omega t.$$
4. Its average is zero; $Q_C=-V_mI_m/2=-\omega C V_{\mathrm{rms}}^2$.

**Inductor**

1. $v=L\,di/dt$, so the steady-state current is $i(t)=V_m\sin\omega t/(\omega L)$.
2. Since $\sin x=\cos(x-90^\circ)$, the current lags voltage and $I_m=V_m/(\omega L)$.
3. Therefore
   $$p_L(t)=+\frac{V_mI_m}{2}\sin2\omega t.$$
4. Its average is zero; $Q_L=+V_mI_m/2=V_{\mathrm{rms}}^2/(\omega L)$.

The signs of the sine expressions above use this explicitly chosen **voltage** reference. Shifting the time origin changes the displayed waveform phase, but not the average power or the sign of $Q$. Positive and negative areas of an ideal reactive component's power waveform are equal over a cycle.[^1]

### Energy check

For the capacitor,
$$\frac{d}{dt}\left(\frac12Cv^2\right)=Cv\frac{dv}{dt}=vi=p_C.$$
For the inductor,
$$\frac{d}{dt}\left(\frac12Li^2\right)=Li\frac{di}{dt}=vi=p_L.$$
Positive power increases stored energy; negative power decreases it. After a full steady-state cycle the stored energy has returned to its initial value, so net absorbed energy and average real power are zero.

## Power from impedance or admittance

For a load $Z=R+jX$, use $\underline V=Z\underline I$:
$$S=\underline V\underline I^*=Z|\underline I|^2.$$
Hence
$$P=I_{\mathrm{rms}}^2R,\qquad Q=I_{\mathrm{rms}}^2X.$$
Alternatively, if $Y=1/Z=G+jB$,
$$S=\frac{|\underline V|^2}{Z^*}=|\underline V|^2Y^*,\qquad P=V_{\mathrm{rms}}^2G,\quad Q=-V_{\mathrm{rms}}^2B.$$
In general $G\ne1/R$: for $Z=R+jX$,
$$G=\frac{R}{R^2+X^2}.$$
Thus $V_{\mathrm{rms}}^2/R$ is not the power formula for the voltage across an arbitrary complex impedance.[^1]

For example, $Z=6+j8\,\Omega$ with $I_{\mathrm{rms}}=2\,\mathrm A$ gives
$$S=4(6+j8)=24+j32\,\mathrm{VA},\qquad |S|=40\,\mathrm{VA}.$$
Since $|Z|=10\,\Omega$, the voltage is $20\,\mathrm V$ RMS. The same real power follows from $G=6/100=0.06\,\mathrm S$: $P=20^2(0.06)=24\,\mathrm W$.

## Maximum power transfer

Model the source by its Thévenin voltage $\underline V_s$ and series impedance $Z_s=R_s+jX_s$, with $R_s>0$. Connect an adjustable passive load $Z_L=R_L+jX_L$. The same current flows through both:
$$\underline I=\frac{\underline V_s}{Z_s+Z_L}.$$
Only the load resistance absorbs average load power, so
$$P_L=|\underline I|^2R_L=\frac{|\underline V_s|^2R_L}{(R_s+R_L)^2+(X_s+X_L)^2}.$$
For fixed $R_L$, the denominator is minimised by cancelling reactance:
$$X_L=-X_s.$$
Then
$$P_L=|\underline V_s|^2\frac{R_L}{(R_s+R_L)^2},\qquad
\frac{dP_L}{dR_L}=|\underline V_s|^2\frac{R_s-R_L}{(R_s+R_L)^3}.$$
The derivative changes from positive to negative at $R_L=R_s$, giving
$$\boxed{Z_L=Z_s^*,\qquad P_{L,\max}=\frac{|\underline V_s|^2}{4R_s}.}$$
The source voltage is RMS here. With a **peak** source amplitude $V_{s,m}$, the maximum is $V_{s,m}^2/(8R_s)$.[^1]

### Worked complex matching example

Let $\underline V_s=20\angle0^\circ\,\mathrm V$ RMS and $Z_s=4+j3\,\Omega$.

1. Cancel the reactance and match the resistance: $Z_L=4-j3\,\Omega$.
2. Total impedance is $(4+j3)+(4-j3)=8\,\Omega$.
3. Current is $\underline I=20/8=2.5\angle0^\circ\,\mathrm A$ RMS.
4. Load power is $P_L=|\underline I|^2R_L=2.5^2(4)=25\,\mathrm W$.
5. Check the maximum-power expression: $20^2/(4\times4)=25\,\mathrm W$.

The load's complex power is $S_L=2.5^2(4-j3)=25-j18.75\,\mathrm{VA}$. The source impedance absorbs $25+j18.75\,\mathrm{VA}$, so the reactive powers cancel while both resistances dissipate real power.

### Worked resistive matching example

A source has a $10\,\mathrm V$ **peak** amplitude and $R_s=8\,\Omega$, with no source reactance. For a resistive load,
$$V_{L,m}=10\frac{R_L}{8+R_L},\qquad P_L=\frac{V_{L,m}^2}{2R_L}.$$

| $R_L$ | $V_{L,m}$ | Average load power |
|---|---|---|
| $2\,\Omega$ | $2.00\,\mathrm V$ | $1.00\,\mathrm W$ |
| $4\,\Omega$ | $3.33\,\mathrm V$ | $1.39\,\mathrm W$ |
| $8\,\Omega$ | $5.00\,\mathrm V$ | $1.5625\,\mathrm W$ |
| $16\,\Omega$ | $6.67\,\mathrm V$ | $1.39\,\mathrm W$ |

A larger load voltage need not mean larger load power: increasing resistance also reduces current. Matching maximises delivered power for this fixed source model, not efficiency. At the matched point equal real power is dissipated in $R_s$ and $R_L$, so the load receives half the total resistive dissipation. The conjugate-match result assumes both load resistance and reactance can be selected; it cannot be applied unchanged when the load is constrained to be purely resistive and $X_s\ne0$.[^1]

### When only the load resistance is adjustable

If the load must be purely resistive, set $X_L=0$ from the start. Then
$$P_L=\frac{|\underline V_s|^2R_L}{(R_s+R_L)^2+X_s^2}.$$
Differentiation gives a numerator proportional to
$$(R_s+R_L)^2+X_s^2-2R_L(R_s+R_L)
=R_s^2+X_s^2-R_L^2.$$
Therefore the optimum is $R_L=\sqrt{R_s^2+X_s^2}=|Z_s|$, not generally $R_s$. This is a different constraint from conjugate matching.

**Voltage transfer is a different objective.** A high input impedance can preserve a signal voltage by drawing very little current. That is not maximum-power matching. Likewise, an amplifier's permitted speaker impedance is a design/rating constraint; it should not automatically be equated to the amplifier's small-signal output impedance.

## Decibels and the half-power point

Decibels express a **ratio** logarithmically:
$$G_P=10\log_{10}\left(\frac{P_o}{P_i}\right)\,\mathrm{dB}.$$
For voltages measured across equal resistances, $P=V_{\mathrm{rms}}^2/R$, so
$$G_P=10\log_{10}\left|\frac{V_o}{V_i}\right|^2=20\log_{10}\left|\frac{V_o}{V_i}\right|.$$
A voltage gain can always be stated using $20\log_{10}|V_o/V_i|$, but interpreting it as the corresponding **power** gain requires the impedance conditions. With unequal resistive loads,
$$G_P=20\log_{10}\left|\frac{V_o}{V_i}\right|+10\log_{10}\left(\frac{R_i}{R_o}\right).$$

| Ratio | Power ratio in dB | Voltage-amplitude ratio in dB |
|---|---|---|
| $0.1$ | $-10$ | $-20$ |
| $0.5$ | $-3.010$ | $-6.021$ |
| $1$ | $0$ | $0$ |
| $2$ | $+3.010$ | $+6.021$ |
| $10$ | $+10$ | $+20$ |

For the [[AC Impedance#Frequency response|RL high-pass response]], the cutoff amplitude ratio is $1/\sqrt2$, giving
$$20\log_{10}\frac1{\sqrt2}=-3.0103\,\mathrm{dB}.$$
The squared amplitude ratio is $1/2$: this is the **half-power** point relative to the passband under the same power-reference conditions. Half the voltage is instead approximately $-6\,\mathrm{dB}$. A negative gain in dB means attenuation, not negative physical power.[^2][^3]

### Converting a dB value back to a ratio

Undo the logarithm with a power of ten:
$$\frac{P_o}{P_i}=10^{G_P/10},\qquad
\left|\frac{V_o}{V_i}\right|=10^{G_V/20}.$$
For $G_V=-12\,\mathrm{dB}$, the amplitude ratio is $10^{-12/20}=0.2512$. A $4\,\mathrm V$ RMS input therefore gives approximately $1.005\,\mathrm V$ RMS output. Under equal-resistance power-reference conditions, the power ratio is $0.2512^2=0.0631$, also $10^{-12/10}$.

Zero dB means a ratio of one, not zero volts or zero watts. An **absolute** decibel level requires a stated reference; a bare gain in dB is a ratio.[^2]

[^1]: Neil White, [AC Power](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43977), pp. 3–10, 14–35, published under [Week 6: AC Power](https://moodle.ecs.soton.ac.uk/course/section.php?id=13905). Published Week 6 material.
[^2]: [Decibels](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43978), one-page power/voltage gain and half-power explanation; AC Power slides 11–13.
[^3]: [23 October 2026 Circuits lecture](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=6648bca7-8084-44fc-bfe4-b4ec0083b0a1), 18:25–32:17 RL frequency response, 32:17–39:41 decibels; formulas aligned with the accompanying slides.

[^4]: [26 October 2026 Circuits lecture](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=1bcca3da-14f4-474a-bc82-b4ef00f72c61), 12:09–30:40 instantaneous/average-power derivation, 30:46–38:26 complex-power and RMS conventions, 38:34–45:37 decibels.

[^5]: [28 October 2026 Circuits lecture](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=71c6e62d-4081-42de-a7fa-b4f100aaf13f), 0:44–6:54 real/reactive power, 7:13–17:37 time-domain example, 17:42–21:31 resistor power and waveform distinction; equations checked against AC Power slides.
