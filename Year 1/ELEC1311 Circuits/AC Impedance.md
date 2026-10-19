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
- [[#Combining impedances]]
- [[#Admittance]]
- [[#Complex voltage division]]
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
so the output leads the input by $45^\circ$ at cutoff.[^1]

[^1]: [ELEC1311, Phasor impedances](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43975), pp. 1–23; [AC Circuits](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43974).

[^2]: [Neil White, AC Circuits](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43974); [RMS derivation](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=43976).

[^3]: [14 October AC analysis](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=efc3e99a-0872-4db4-a084-b4e3009443ae), sinusoidal RL derivation and time/frequency examples; [16 October phasor derivation](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=7438f6b2-daa3-459c-9044-b4e50083b039), complex exponential cancellation, magnitude and phase.
