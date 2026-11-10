---
permalink: y1/elec1311/ac-impedance
---
#### AC Impedance

- [[#Linear systems]]
- [[#RMS and sinusoidal measurements]]
- [[#Sinusoids and phasors]]
- [[#Deriving the sinusoidal RL response]]
- [[#Time and frequency descriptions]]
- [[#Component impedances]]
- [[#Deriving capacitor and inductor impedance]]
- [[#Combining impedances]]
- [[#Admittance]]
- [[#Complex voltage division]]
- [[#Worked RLC and dependent-source circuits]]
- [[#Frequency response]]

**[[#RMS and sinusoidal measurements|RMS]]**
$$V_{\mathrm{rms}}=\sqrt{\frac1T\int_0^T v^2(t)\,dt},\qquad V_{\mathrm{rms,sinusoid}}=\frac{V_m}{\sqrt2}$$

**[[#Sinusoids and phasors|Cosine-reference phasor]]**
$$v(t)=V_m\cos(\omega t+\phi)\quad\longleftrightarrow\quad\underline V=V_me^{j\phi},\qquad\omega=2\pi f$$
**[[#Component impedances|Impedance and Ohm's law]]**
$$\underline V=Z\underline I,\qquad Z_R=R,\quad Z_L=j\omega L,\quad Z_C=\frac{1}{j\omega C}$$
**[[#Combining impedances|Series and parallel]]**
$$Z_s=\sum_kZ_k,\qquad\frac{1}{Z_p}=\sum_k\frac{1}{Z_k}$$
**[[#Frequency response|RL high-pass response]]**
$$H(j\omega)=\frac{j\omega L}{R+j\omega L},\qquad \omega_c=\frac RL,\qquad f_c=\frac{R}{2\pi L}$$

## Linear systems

A system is **linear** when it obeys both scaling (homogeneity) and addition. If inputs $x_1,x_2$ produce outputs $y_1,y_2$, then input $a x_1+b x_2$ produces $a y_1+b y_2$. This is the basis of superposition. Time invariance means delaying an input delays its response by the same amount without changing its shape. Causality means the present output depends on current and past inputs, not future inputs.[^2]

Ideal fixed-value RLC networks are linear and time invariant. The sinusoidal steady-state response to one frequency has that same frequency, with a changed amplitude and phase. Different-frequency inputs can be analysed separately and their **time-domain** responses added; phasors at different frequencies cannot be treated as one common-frequency phasor calculation.

## RMS and sinusoidal measurements

![[AC Theory (1)#Equation for Sinusoidal Waveform]]

For $v(t)=V_m\cos(\omega t+\phi)$, the period is $T=1/f$, $\omega=2\pi f$ and the peak-to-peak voltage is $2V_m$. Phase is an angle, while $\omega t+\phi$ is the complete argument.

The root-mean-square value is
$$V_{\mathrm{rms}}=\sqrt{\frac1T\int_0^T v^2(t)\,dt}.$$
For a sinusoid, $\cos^2\theta=(1+\cos2\theta)/2$. The cosine term averages to zero over a whole period, leaving
$$V_{\mathrm{rms}}=\frac{V_m}{\sqrt2}.$$
RMS measures the equivalent DC heating effect in a resistor: $P_{\mathrm{avg}}=V_{\mathrm{rms}}^2/R$. The ordinary average of a centred sinusoid is zero, but its mean-square and RMS values are not. The factor $1/\sqrt2$ is specific to a sinusoidal waveform, not a universal peak-to-RMS conversion.[^2]

## Sinusoids and phasors

![[AC Theory (1)#Phasors]]

A phasor stores amplitude and phase while leaving out the common time dependence. Using a cosine reference,
$$v(t)=\Re\{\underline V e^{j\omega t}\}.$$
All phasors in a calculation must use the **same frequency, reference and amplitude convention**. Peak phasors are used here; RMS phasors give the same impedance relationships, but peak and RMS values must not be mixed. A sine can be converted using $\sin\theta=\cos(\theta-90^\circ)$.

Differentiation becomes multiplication by $j\omega$ because
$$\frac{d}{dt}e^{j\omega t}=j\omega e^{j\omega t}.$$
This turns differential equations into algebraic equations for sinusoidal steady state. It does not include the switch-on transient; [[RC Transients]] describes the decaying part separately.[^1]

## Deriving the sinusoidal RL response

For a series RL circuit driven by $v_s(t)=V_m\sin\omega t$, KVL gives
$$L\frac{di}{dt}+Ri=V_m\sin\omega t.$$
After the transient has decayed, try $i(t)=I_m\sin(\omega t+\phi)$. Substitution gives
$$\omega LI_m\cos(\omega t+\phi)+RI_m\sin(\omega t+\phi)=V_m\sin\omega t.$$
At $t=0$,
$$\omega L\cos\phi+R\sin\phi=0,\qquad \tan\phi=-\frac{\omega L}{R}.$$
For positive $R,L,\omega$, choose the current-lagging branch $-90^\circ<\phi<0$. At $t=\pi/(2\omega)$,
$$I_m(R\cos\phi-\omega L\sin\phi)=V_m.$$
Using $\cos\phi=R/\sqrt{R^2+(\omega L)^2}$ and $\sin\phi=-\omega L/\sqrt{R^2+(\omega L)^2}$ gives
$$I_m=\frac{V_m}{\sqrt{R^2+(\omega L)^2}},\qquad \phi=-\tan^{-1}\left(\frac{\omega L}{R}\right).$$

The phasor method reaches the same result immediately:
$$\underline I=\frac{\underline V_s}{R+j\omega L}.$$
Division reduces the amplitude by $|R+j\omega L|$ and subtracts the impedance angle from the source phase. A nonzero source phase is therefore carried through: if $v_s=V_m\cos(\omega t+\alpha)$, then $i=I_m\cos(\omega t+\alpha+\phi)$.

The complex exponential is a mathematical representation; the measurable waveform is its real part for a cosine reference, or its imaginary part for a sine reference. Cancelling $e^{j\omega t}$ does not mean the physical current has stopped varying. It removes a common factor so only amplitude and relative phase need to be solved.[^3]

## Time and frequency descriptions

A time-domain plot shows how a signal varies with time. A frequency-domain spectrum shows which frequencies contribute to it. An ideal single sinusoid gives one frequency component; a nonsinusoidal periodic waveform generally contains harmonics as well as its fundamental. A centred ideal square wave, for example, requires a series of odd harmonics rather than just one sine wave.

This gives sinusoidal analysis a wider purpose: determine each frequency's amplitude and phase response separately, then combine the resulting time-domain components. A logarithmic frequency axis spreads out ratios rather than equal frequency differences, allowing a large frequency range to fit on one graph.[^3]

## Component impedances

![[AC Theory (1)#Reactance]]

Impedance is the complex voltage-to-current ratio:
$$Z=\frac{\underline V}{\underline I}=R+jX.$$
$R$ is resistance and $X$ is reactance, both in ohms. The imaginary part describes phase shift rather than an additional real resistance.

- Resistor: $v=Ri$ gives $Z_R=R$. Voltage and current are in phase.
- Inductor: $v=L\,di/dt$ gives $Z_L=j\omega L$. Voltage leads current by $90^\circ$; $|Z_L|$ increases with frequency.
- Capacitor: $i=C\,dv/dt$ gives $Z_C=1/(j\omega C)=-j/(\omega C)$. Current leads voltage by $90^\circ$; $|Z_C|$ decreases with frequency.

For ideal components, the low-frequency limits are an inductor short circuit and capacitor open circuit. At very high frequency these roles reverse. These are limiting models, not permission to ignore finite impedance at an arbitrary frequency.[^1]

## Deriving capacitor and inductor impedance

Use $\widetilde v(t)=\underline V e^{j\omega t}$ and $\widetilde i(t)=\underline I e^{j\omega t}$ for the complex waveforms. The underlined quantities are **constant phasors**, not functions of time. The physical voltage/current are their real parts. The tilde distinguishes this temporary complex representation from the real waveform $v(t)$.

### Capacitor

Start with $i=C\,dv/dt$. Linearity allows the same equation for the complex waveforms:

1. Substitute the voltage representation:
   $$\widetilde i(t)=C\frac{d}{dt}\left(\underline V e^{j\omega t}\right).$$
2. $C$ and $\underline V$ are constant, so take them outside the derivative:
   $$\widetilde i(t)=C\underline V\frac{d}{dt}e^{j\omega t}.$$
3. Apply the chain rule. The derivative of the exponent $j\omega t$ is $j\omega$:
   $$\widetilde i(t)=j\omega C\underline V e^{j\omega t}.$$
4. Substitute $\widetilde i(t)=\underline I e^{j\omega t}$ and cancel the common nonzero exponential:
   $$\underline I e^{j\omega t}=j\omega C\underline V e^{j\omega t}
   \quad\Rightarrow\quad\underline I=j\omega C\underline V.$$
5. Impedance is voltage phasor divided by current phasor:
   $$\boxed{Z_C=\frac{\underline V}{\underline I}=\frac1{j\omega C}=-\frac{j}{\omega C}.}$$

Multiplication by $j$ gives the current a $+90^\circ$ phase relative to voltage. The impedance consequently has a $-90^\circ$ phase.

### Inductor

Start with $v=L\,di/dt$:
$$\underline V e^{j\omega t}
=L\frac{d}{dt}(\underline I e^{j\omega t})
=j\omega L\underline I e^{j\omega t}.$$
Cancel the exponential, then divide by $\underline I$:
$$\underline V=j\omega L\underline I
\quad\Rightarrow\quad\boxed{Z_L=j\omega L}.$$
Here voltage has the $+90^\circ$ phase relative to current. The cancellation removes common time dependence, not voltage/current phase information.[^1][^3]

## Combining impedances

KVL and KCL still apply to complex phasors. Series components carry the same current:
$$\underline V=\sum_k\underline V_k=\underline I\sum_kZ_k.$$
Parallel components share the same voltage:
$$\underline I=\sum_k\frac{\underline V}{Z_k}.$$
For two parallel impedances,
$$Z_p=\frac{Z_1Z_2}{Z_1+Z_2}.$$
Add impedances in rectangular form. For multiplication or division, polar form is often simpler: multiply/divide magnitudes and add/subtract angles. Do not add magnitudes in place of complex numbers.[^1]

The usual divider relationships become
$$\underline V_2=\underline V_s\frac{Z_2}{Z_1+Z_2},\qquad \underline I_1=\underline I_s\frac{Z_2}{Z_1+Z_2}.$$
The current-divider numerator is the **other** branch impedance. The result includes both amplitude and phase.

## Admittance

Admittance is the reciprocal of impedance:
$$Y=\frac1Z=G+jB,$$
where $G$ is conductance, $B$ is susceptance and the unit is the siemens (S). Parallel admittances add directly.

For $Z=R+jX$, multiply by the conjugate:
$$Y=\frac{R-jX}{R^2+X^2},\qquad G=\frac{R}{R^2+X^2},\qquad B=-\frac{X}{R^2+X^2}.$$
Thus $G=1/R$ only for a purely resistive impedance. It is not generally the reciprocal of the real part of $Z$.[^1]

## Complex voltage division

For a series combination $R=60\,\Omega$, $Z_L=j100\,\Omega$, with input $\underline V_s=20e^{-j15^\circ}\,\mathrm V$, the voltage across the inductor is
$$\underline V_L=\frac{j100}{60+j100}\,20e^{-j15^\circ}.$$
The denominator has magnitude $\sqrt{60^2+100^2}=116.62$ and angle $\tan^{-1}(100/60)=59.04^\circ$. Therefore
$$|\underline V_L|=\frac{100}{116.62}\times20=17.15\,\mathrm V,$$
$$\arg\underline V_L=90^\circ-59.04^\circ-15^\circ=15.96^\circ.$$
Hence $\underline V_L=17.15e^{j15.96^\circ}\,\mathrm V$. With peak, cosine-reference phasors, this is $v_L(t)=17.15\cos(\omega t+15.96^\circ)\,\mathrm V$.[^1]

The interactive example uses $f=50\,\mathrm{Hz}$ and $L=100/(2\pi f)\approx318.31\,\mathrm{mH}$ to realise the stated $j100\,\Omega$. The source is $20\,\mathrm V$ **peak** ($14.14\,\mathrm V$ RMS), with the same $-15^\circ$ cosine phase. The plot shows two steady-state cycles: $v_R$ is measured from the source to the R–L junction, and $v_L$ from that junction to ground, so $v_R+v_L=v_s$. Voltage across L leads voltage across R by $90^\circ$ (one quarter-cycle). Changing frequency or inductance changes $X_L=2\pi fL$; reset restores the worked example.

<iframe src="https://0x62.github.io/soton-efy-notes/_embed/y1/elec1311/ac-impedance/voltage-division/" data-notes-embed="y1/elec1311/ac-impedance/voltage-division" title="Series RL circuit and steady-state resistor and inductor voltages" loading="lazy" height="1000" style="width:100%;border:0" referrerpolicy="same-origin"></iframe>

## Worked RLC and dependent-source circuits

### Rectangular to polar form: check the quadrant

For $\underline V=-4+j3\,\mathrm V$:

1. Magnitude: $|\underline V|=\sqrt{(-4)^2+3^2}=5\,\mathrm V$.
2. The real part is negative and imaginary part positive, so the point lies in quadrant II.
3. The reference angle is $\tan^{-1}(3/4)=36.87^\circ$.
4. Therefore $\theta=180^\circ-36.87^\circ=143.13^\circ$ and
   $$\underline V=5\angle143.13^\circ\,\mathrm V.$$

A calculator's $\tan^{-1}(3/(-4))=-36.87^\circ$ alone selects the wrong quadrant. Use $\operatorname{atan2}(3,-4)$ or explicitly correct the angle. Keep a calculator in the appropriate degree/radian mode.[^5]

### Series RLC: from source waveform to current waveform

Let $v_s(t)=12\cos(1000t+15^\circ)\,\mathrm V$, $R=30\,\Omega$, $L=65\,\mathrm{mH}$ and $C=40\,\mu\mathrm F$ in series.

1. Read $\omega=1000\,\mathrm{rad\,s^{-1}}$ from the waveform. It is **not** $1000\,\mathrm{Hz}$.
2. Replace each component by its impedance:
   $$Z_R=30,\quad Z_L=j(1000)(0.065)=j65,\quad
   Z_C=\frac{-j}{1000(40\times10^{-6})}=-j25\quad[\Omega].$$
3. Add them: $Z=30+j65-j25=30+j40=50\angle53.13^\circ\,\Omega$.
4. The peak voltage phasor is $\underline V_s=12\angle15^\circ\,\mathrm V$. Divide magnitudes and **subtract** angles:
   $$\underline I=\frac{12\angle15^\circ}{50\angle53.13^\circ}
   =0.24\angle(-38.13^\circ)\,\mathrm A.$$
5. Return to the time domain:
   $$\boxed{i(t)=0.24\cos(1000t-38.13^\circ)\,\mathrm A.}$$

The current lags the source by $53.13^\circ$, not $38.13^\circ$: the latter is its phase relative to the chosen time origin. The net positive reactance is an independent check on the lag.[^5]

### Series inductor feeding a parallel RC load

Let $v_s(t)=48\cos(500t+75^\circ)\,\mathrm V$. A $100\,\mathrm{mH}$ inductor is in series with a parallel combination of $R=80\,\Omega$ and $C=25\,\mu\mathrm F$. Find the voltage $v_o$ across the parallel combination.

1. $Z_L=j(500)(0.1)=j50\,\Omega$ and $Z_C=-j/[500(25\times10^{-6})]=-j80\,\Omega$.
2. Both parallel elements have voltage $\underline V_o$. KCL at the junction gives
   $$\underline I=\frac{\underline V_o}{80}+\frac{\underline V_o}{-j80}
   =\frac{1+j}{80}\underline V_o.$$
3. KVL around the source–inductor–load loop gives
   $$48\angle75^\circ=j50\underline I+\underline V_o.$$
4. Substitute the KCL expression:
   $$48\angle75^\circ=\left[1+\frac{j50(1+j)}{80}\right]\underline V_o
   =(0.375+j0.625)\underline V_o.$$
5. The coefficient has magnitude $\sqrt{0.375^2+0.625^2}=0.72887$ and phase $59.04^\circ$. Thus
   $$\underline V_o=65.86\angle15.96^\circ\,\mathrm V,$$
   $$\boxed{v_o(t)=65.86\cos(500t+15.96^\circ)\,\mathrm V.}$$

An internal reactive-circuit voltage can exceed the source amplitude without creating energy. Voltage gain alone is not power gain. The $100\,\mathrm{mH}$ value used here is explicit; substituting $10\,\mathrm{mH}$ describes a different circuit and gives a different answer.[^5]

### A current-controlled voltage source

A source $v_s(t)=12\cos(1000t+45^\circ)\,\mathrm V$ is connected across a $25\,\Omega$ input resistor. Its downward current is $i_1$. A dependent voltage source, positive at its upper terminal, has voltage $100i_1$ and drives a separate series $25\,\Omega$ resistor and $20\,\mu\mathrm F$ capacitor. The output is across the capacitor, positive at the upper terminal.

1. The control current is $\underline I_1=12\angle45^\circ/25=0.48\angle45^\circ\,\mathrm A$.
2. The dependent-source voltage is $100\underline I_1=48\angle45^\circ\,\mathrm V$. The factor 100 has units $\mathrm{V/A}=\Omega$.
3. $Z_C=-j/[1000(20\times10^{-6})]=-j50\,\Omega$.
4. Output-loop KVL gives
   $$100\underline I_1=(25-j50)\underline I_2.$$
5. Since $25-j50=55.902\angle(-63.435^\circ)\,\Omega$,
   $$\underline I_2=0.85865\angle108.435^\circ\,\mathrm A.$$
6. Multiply by the capacitor impedance:
   $$\underline V_o=(-j50)\underline I_2=42.933\angle18.435^\circ\,\mathrm V.$$
7. Therefore $v_o(t)=42.933\cos(1000t+18.435^\circ)\,\mathrm V$.

The dependent source remains active: its value is calculated from the controlling quantity, not set to zero. The controlling current and output-loop current are different variables.[^5]

## Frequency response

![[AC Theory (4)#Filter Bands]]

A frequency response $H(j\omega)=\underline V_o/\underline V_i$ describes amplitude gain and phase shift as the input frequency changes. For a series RL circuit with output across $L$,
$$H(j\omega)=\frac{j\omega L}{R+j\omega L}.$$
Taking magnitudes gives
$$|H|=\frac{\omega L}{\sqrt{R^2+(\omega L)^2}}=\frac1{\sqrt{1+(R/\omega L)^2}}\quad(\omega>0).$$

- As $\omega\to0$, the inductor approaches a short circuit and $|H|\to0$.
- As $\omega\to\infty$, nearly all the input appears across the inductor and $|H|\to1$.
- At $\omega=R/L$, $|H|=1/\sqrt2\approx0.707$.

This is a **high-pass filter**. The cutoff is specified in radians per second by $\omega_c=R/L$, or in hertz by $f_c=R/(2\pi L)$. At cutoff, the output amplitude is not half the input: its square is half. The phase is
$$\arg H=90^\circ-\tan^{-1}(\omega L/R),$$
so the output leads the input by $45^\circ$ at cutoff.[^1][^4]

In decibels this amplitude ratio is $20\log_{10}(1/\sqrt2)=-3.0103\,\mathrm{dB}$. [[AC Power#Decibels and the half-power point|Decibels and the half-power point]] distinguishes the voltage-amplitude ratio from the corresponding power ratio.

[^1]: [ELEC1311, Phasor impedances](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43975), pp. 1–23; [AC Circuits](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43974).

[^2]: [Neil White, AC Circuits](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43974); [RMS derivation](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43976).

[^3]: [14 October AC analysis](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=efc3e99a-0872-4db4-a084-b4e3009443ae), sinusoidal RL derivation and time/frequency examples; [16 October phasor derivation](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=7438f6b2-daa3-459c-9044-b4e50083b039), complex exponential cancellation, magnitude and phase.

[^4]: [23 October 2026 Circuits lecture](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=6648bca7-8084-44fc-bfe4-b4ec0083b0a1), 18:25–32:17, RL frequency response and cutoff; 32:17–39:41, decibels.

[^5]: [Week 6 supplementary Problems](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43979), pp. 2–10. The series-RLC current phase is $-38.13^\circ$ as the handwritten correction indicates. The parallel-RC example explicitly uses $100\,\mathrm{mH}$, consistent with its annotated correction and $j50\,\Omega$ calculation; the printed $10\,\mathrm{mH}$ diagram is inconsistent. Examples re-derived with stated values and polarities.
