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

## Complex power and RMS phasors

![[AC Theory (3)#Power components]]

The component picture uses RMS current magnitude. The sign of the quadrature component depends on whether current leads or lags; complex power makes that sign explicit.

The complex-power description retains the distinction between irreversible energy transfer and reversible energy storage. With RMS phasors,
$$\underline V=V_{\mathrm{rms}}e^{j\theta_v},\qquad \underline I=I_{\mathrm{rms}}e^{j\theta_i},$$
$$S=\underline V\underline I^*=V_{\mathrm{rms}}I_{\mathrm{rms}}e^{j(\theta_v-\theta_i)}=P+jQ.$$
The conjugate is essential: it produces the **phase difference**, not the phase sum.

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

Consider the lecture example
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

[^1]: Neil White, [AC Power](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43977), pp. 3–10, 14–35, published under [Week 6: AC Power](https://moodle.ecs.soton.ac.uk/course/section.php?id=13905). Week-wide source coverage, not a claim that all sections were delivered on 26 October.
[^2]: [Decibels](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43978), one-page power/voltage gain and half-power explanation; AC Power slides 11–13.
[^3]: [23 October 2026 Circuits lecture](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=6648bca7-8084-44fc-bfe4-b4ec0083b0a1), 18:25–32:17 RL frequency response, 32:17–39:41 decibels; formulas aligned with the accompanying slides.
