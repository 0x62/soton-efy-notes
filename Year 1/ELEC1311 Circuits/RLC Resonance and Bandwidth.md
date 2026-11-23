---
permalink: y1/elec1311/rlc-resonance-and-bandwidth
---
#### RLC Resonance and Bandwidth

- [[#Reading a series-resonance curve]]
- [[#Power and stored energy at resonance]]
- [[#Half-power points and bandwidth]]
- [[#Quality factor]]
- [[#Worked example]]

Start with [[LC Resonance]] for the source-free oscillator and the difference between an ideal driven LC and a lossy one.[^series][^power][^q]

![[AC Theory (3)#Series RLC behaviour at a glance]]

## Reading a series-resonance curve

For a series $RLC$ driven by an AC voltage of fixed RMS magnitude, let $X=\omega L-1/(\omega C)$.

$$
Z=R+jX,\qquad |Y|=\frac{1}{\sqrt{R^2+X^2}},\qquad |I|=|V|\,|Y|.
$$

At low frequency the capacitor dominates: $X<0$ and current leads the source voltage. At high frequency the inductor dominates: $X>0$ and current lags. The magnitude of current peaks when $X=0$, at $\omega_0=1/\sqrt{LC}$. At that point $Z=R$, $|I|=|V|/R$, and the source voltage and current are in phase.

A series resonance is an **impedance minimum** and an **admittance maximum**. There is no contradiction: $|Y|=1/|Z|$. Real loss prevents a singular peak. Do not carry the same “impedance minimum” rule over to a parallel resonator without first choosing its topology and what is held constant.[^series]

## Power and stored energy at resonance

Using RMS phasors and passive sign convention, $\underline S=\underline V\underline I^*$; the real part is the cycle-average power, and the imaginary part is reactive power. For series $RLC$:

$$
P=I_\mathrm{rms}^2R,\qquad
Q_\mathrm{reactive}=I_\mathrm{rms}^2\left(\omega L-\frac{1}{\omega C}\right).
$$

At resonance the two reactive contributions cancel at the source, not inside the individual elements. If $i=I_\mathrm{pk}\cos\omega_0t$, choose $v_C=(I_\mathrm{pk}/\omega_0 C)\sin\omega_0t$ for the sinusoidal steady state. Then

$$
E_L(t)=\tfrac12 L I_\mathrm{pk}^2\cos^2\omega_0t,\qquad
E_C(t)=\tfrac12 L I_\mathrm{pk}^2\sin^2\omega_0t.
$$

The sum is constant because $1/(\omega_0^2C)=L$. Either element's **peak** energy equals that sum; do not add both peak energies, since they occur at different times. The resistor still dissipates energy: $E_\mathrm{loss/cycle}=P(2\pi/\omega_0)$. Equal reactive magnitudes do not imply zero stored energy or zero input power.[^power][^q]

## Half-power points and bandwidth

The half-power frequencies $\omega_1$ and $\omega_2$ flank the peak. At either point:

$$
P=\tfrac12 P_\mathrm{max}\quad\Longleftrightarrow\quad
|I|=\frac{|I_\mathrm{max}|}{\sqrt2}\quad\Longleftrightarrow\quad
|X|=R.
$$

This is the $-3.01$ dB amplitude level relative to the current peak, not half the peak current. Since the series reactance is increasing with $\omega$, solve $X=-R$ for the lower point and $X=+R$ for the upper point. Keeping only positive frequencies gives

$$
\omega_1=\frac{\sqrt{R^2+4L/C}-R}{2L},\qquad
\omega_2=\frac{\sqrt{R^2+4L/C}+R}{2L}.
$$

Thus $\Delta\omega=\omega_2-\omega_1=R/L$ and $\Delta f=\Delta\omega/(2\pi)$. Also $\omega_1\omega_2=\omega_0^2$, so the resonance lies at their geometric mean, not generally their arithmetic mean.[^q]

## Quality factor

Quality factor compares energy stored with energy lost in each cycle, with a $2\pi$ conversion:

$$
Q_\mathrm{factor}=2\pi\frac{E_\mathrm{stored}}{E_\mathrm{loss/cycle}}
 = \frac{\omega_0 L}{R}
 = \frac{\omega_0}{\Delta\omega}
 = \frac{f_0}{\Delta f}.
$$

The equalities after the energy definition apply to this series circuit and this half-power response. A higher $Q$ means a narrower relative bandwidth. $Q_\mathrm{factor}$ is dimensionless; $Q_\mathrm{reactive}$ is measured in var. An energy ratio *without* the $2\pi$ is $Q_\mathrm{factor}/(2\pi)$.[^q]

## Worked example

Take $L=12\,\mathrm{mH}$, $C=220\,\mathrm{nF}$, $R=15\,\Omega$ and $V=3\,\mathrm V$ RMS. Then $f_0\approx3.10\,\mathrm{kHz}$, $\Delta f\approx199\,\mathrm{Hz}$ and $Q\approx15.6$. The resonant current is $0.200\,\mathrm A$ RMS, and the half-power points have $0.141\,\mathrm A$ RMS.

At resonance $P=0.600\,\mathrm W$, $E_\mathrm{stored}=\tfrac12(0.012)(\sqrt2\times0.200)^2=480\,\mu\mathrm J$ and $E_\mathrm{loss/cycle}\approx194\,\mu\mathrm J$. The energy check gives $2\pi(480/194)\approx15.6$, agreeing with the bandwidth method.

See [[AC Power#Complex power and RMS phasors]] and [[AC Power#Decibels and the half-power point]] for the underlying conventions.

[^series]: Yoshi Tsuchiya, [YT04: Resonance in LC circuits](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45939) and [YT05: Resonance in RLC circuits](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45940), with dates from the [ELEC1311 schedule](https://moodle.ecs.soton.ac.uk/mod/page/view.php?id=43581). Graphical admittance and impedance discussion in YT05.
[^power]: Yoshi Tsuchiya, [YT06: Power in Resonance](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45941), complex power conservation, component energy and the limits of phasors at ideal LC resonance.
[^q]: Yoshi Tsuchiya, [YT07: Q factor and Bandwidth](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45942), stored energy, Q definition, half-power points, bandwidth derivation and series/parallel comparison.
