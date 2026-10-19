---
permalink: y1/elec1311/impedance-triangles-to-complex-numbers
---
#### From Impedance Triangles to Complex Numbers

- [[#The same triangle in a different notation]]
- [[#What j actually does]]
- [[#Magnitude and angle are two parts of one answer]]
- [[#Worked RL example by both methods]]
- [[#The familiar RC example with complex numbers]]
- [[#RLC cancellation and resonance]]
- [[#Why complex numbers help with parallel circuits]]
- [[#Voltage division and the familiar filter formula]]
- [[#Where the j comes from physically]]
- [[#A reliable calculation routine]]

**[[#The same triangle in a different notation|Triangle and complex impedance]]**
$$Z=R+j(X_L-X_C),\qquad |Z|=\sqrt{R^2+(X_L-X_C)^2}$$
**[[#Magnitude and angle are two parts of one answer|Ohm's law with phase]]**
$$\underline I=\frac{\underline V}{Z},\qquad |\underline I|=\frac{|\underline V|}{|Z|},\qquad \phi_I=\phi_V-\arg Z$$
**[[#Where the j comes from physically|Component impedances]]**
$$Z_R=R,\qquad Z_L=j\omega L,\qquad Z_C=\frac1{j\omega C}=-\frac j{\omega C},\qquad\omega=2\pi f$$

## The same triangle in a different notation

**Complex impedance does not replace the Pythagoras method. It keeps both the length and direction of the triangle in one number.**

The starting point is the voltage triangle in [[AC Theory (2)#RL series]] and [[AC Theory (2)#RC series]]. In a series circuit, use the common current as the horizontal reference:

- The resistor voltage points right: it is in phase with current.
- The inductor voltage points up: it leads current by $90^\circ$.
- The capacitor voltage points down: it lags current by $90^\circ$.

Dividing every side of the voltage triangle by the same current gives an impedance triangle. Its horizontal side is $R$ and its signed vertical side is $X_L-X_C$.

The CIVIL mnemonic below gives the phase ordering. Its displayed square-root formula is the **series RC special case**, with no inductor; the general series RLC formula uses $X_L-X_C$.

![[AC Theory (1)#CIVIL & Impedance]]

In a formula such as $Z=\sqrt{R^2+X_C^2}$, the answer is the **length** of the impedance arrow. In complex notation, distinguish the arrow $Z$ from its length $|Z|$:

$$\underbrace{Z=R-jX_C}_{\text{horizontal and vertical components}},\qquad
\underbrace{|Z|=\sqrt{R^2+X_C^2}}_{\text{Pythagoras: length only}}.$$

Here $X_C=1/(\omega C)$ is a **positive magnitude**. The minus sign in $-jX_C$ supplies its downward direction. The signed total reactance is $X=X_L-X_C$, which can be positive or negative.

> [!TIP] Nothing physical has become imaginary
> The measured voltage and current are real. Complex numbers are a bookkeeping system for two pieces of information: amplitude and phase. A negative imaginary component does not mean a negative resistance.

Continue with [[AC Impedance#Component impedances]] for the compact general notation.

## What j actually does

Mathematics usually writes $i^2=-1$; circuit calculations use $j^2=-1$ to avoid confusing the imaginary unit with current $i(t)$. They are the same mathematical object. See [[Complex Algebra#Imaginary unit and Argand plane]].

A complex number $a+jb$ is a point with horizontal coordinate $a$ and vertical coordinate $b$. Thus $3+j4$ is exactly the pair of perpendicular components used in a $3$–$4$–$5$ triangle.

Multiplication by $j$ rotates an arrow $90^\circ$ anticlockwise:
$$1\ \xrightarrow{\times j}\ j\ \xrightarrow{\times j}\ -1\ \xrightarrow{\times j}\ -j\ \xrightarrow{\times j}\ 1.$$
Multiplication by $-j$ rotates it $90^\circ$ clockwise. Also,
$$\frac1j=-j\qquad\text{because}\qquad j(-j)=-j^2=1.$$
This is why the capacitor formulas $1/(j\omega C)$ and $-j/(\omega C)$ are identical.

Rectangular form is best for addition:
$$ (3+j4)+(2-j7)=5-j3.$$
Add horizontal components to horizontal components and vertical components to vertical components. This is ordinary vector addition, not a new circuit law.

## Magnitude and angle are two parts of one answer

For $Z=R+jX$, the magnitude and direction are
$$|Z|=\sqrt{R^2+X^2},\qquad \theta=\operatorname{atan2}(X,R).$$
For the passive series examples here, $R>0$, so $\theta=\tan^{-1}(X/R)$ gives the correct quadrant. For general complex numbers, check the quadrant rather than blindly using a one-argument inverse tangent.

Polar form writes the same number as
$$Z=|Z|\angle\theta=|Z|(\cos\theta+j\sin\theta).$$
See [[Complex Algebra#Polar and exponential forms]]. Rectangular and polar forms are like Cartesian coordinates and distance/bearing: two descriptions of the same arrow.

Division in polar form divides lengths and subtracts angles:
$$\frac{A\angle\alpha}{B\angle\beta}=\frac AB\angle(\alpha-\beta).$$
Consequently, if the voltage is the reference $\underline V=V\angle0^\circ$,
$$\underline I=\frac{V\angle0^\circ}{|Z|\angle\theta}
=\frac V{|Z|}\angle(-\theta).$$

- Inductive $Z$: $\theta>0$, so current has a negative phase and **lags** voltage.
- Capacitive $Z$: $\theta<0$, so current has a positive phase and **leads** voltage.

The impedance angle is $\phi_V-\phi_I$, **not** the current angle itself.

### RMS, peak, sine and cosine

[[AC Theory (1)#Waveforms]] uses RMS values for supply calculations. The worked circuit examples below use **RMS phasors** throughout. [[AC Impedance#Sinusoids and phasors]] instead uses peak phasors. Both are valid:
$$\frac{V_{\mathrm{rms}}}{I_{\mathrm{rms}}}=\frac{V_m}{I_m}=|Z|.$$
For a sinusoid $V_m=\sqrt2V_{\mathrm{rms}}$. Never divide a peak voltage by an RMS current to calculate impedance.

Using a cosine reference, an RMS phasor $\underline V=V_{\mathrm{rms}}\angle\phi$ means
$$v(t)=\sqrt2V_{\mathrm{rms}}\cos(\omega t+\phi).$$
The complex phasor is constant; the real waveform varies with time. A sine convention describes the same physics, but conversion requires $\sin x=\cos(x-90^\circ)$. Changing the reference shifts all absolute phases together, not their differences.

## Worked RL example by both methods

A series circuit has $R=30\,\Omega$, $X_L=40\,\Omega$ and $V_s=100\,\mathrm{V_{rms}}$. At $f=50\,\mathrm{Hz}$ this reactance would require
$$L=\frac{40}{2\pi(50)}=0.1273\,\mathrm H.$$

### Method 1: the triangle

Following [[AC Theory (2)#RL series]],
$$|Z|=\sqrt{30^2+40^2}=50\,\Omega,$$
$$I_{\mathrm{rms}}=\frac{100}{50}=2\,\mathrm A,\qquad
\theta=\tan^{-1}(40/30)=53.13^\circ.$$
The circuit is inductive, so current lags voltage by $53.13^\circ$.

### Method 2: the complex number

$$Z=30+j40=50\angle53.13^\circ\,\Omega,$$
$$\underline I=\frac{100\angle0^\circ}{50\angle53.13^\circ}
=2\angle(-53.13^\circ)\,\mathrm A.$$
The magnitude is the same $2\,\mathrm A$. The angle already carries the lag information.

To divide without polar form, multiply top and bottom by the conjugate:
$$\underline I=\frac{100}{30+j40}\frac{30-j40}{30-j40}
=\frac{3000-j4000}{30^2+40^2}=1.2-j1.6\,\mathrm A.$$
Check: $\sqrt{1.2^2+1.6^2}=2$. See [[Complex Algebra#Conjugates and division]].

### Checking all the voltages

$$\underline V_R=30(1.2-j1.6)=36-j48\,\mathrm V,$$
$$\underline V_L=j40(1.2-j1.6)=64+j48\,\mathrm V.$$
Adding gives $\underline V_R+\underline V_L=100+j0\,\mathrm V$, exactly the source. Their individual magnitudes are $60\,\mathrm V$ and $80\,\mathrm V$, but $60+80\ne100$: magnitudes cannot be added as if they peaked simultaneously.

**KVL always holds** for instantaneous voltages and for common-frequency phasors. It is the addition of unsigned amplitudes that fails.

With the cosine reference,
$$v_s(t)=141.42\cos(100\pi t)\,\mathrm V,$$
$$i(t)=2.828\cos(100\pi t-53.13^\circ)\,\mathrm A.$$
The larger waveform coefficients are peaks, not a change in the circuit answer.

## The familiar RC example with complex numbers

Use the same circuit as [[AC Theory (2)#Example]]: $R=25\,\Omega$, $C=45\,\mu\mathrm F$, $f=50\,\mathrm{Hz}$, and a $240\,\mathrm{V_{rms}}$ supply.

**1. Convert frequency and capacitance.**
$$\omega=2\pi f=314.159\,\mathrm{rad\,s^{-1}},\qquad C=45\times10^{-6}\,\mathrm F.$$
**2. Calculate the capacitor's reactance magnitude.**
$$X_C=\frac1{\omega C}=70.7355\,\Omega.$$
**3. Put direction back into the impedance.**
$$Z=25-j70.7355\,\Omega.$$
**4. Recover the familiar Pythagoras answer.**
$$|Z|=\sqrt{25^2+70.7355^2}=75.0234\,\Omega,$$
$$\arg Z=\tan^{-1}(-70.7355/25)=-70.5351^\circ.$$
**5. Divide voltage by impedance.**
$$\underline I=\frac{240\angle0^\circ}{75.0234\angle(-70.5351^\circ)}
=3.1990\angle70.5351^\circ\,\mathrm A.$$

The triangle method gives the same current magnitude. Complex division additionally makes it explicit that the **current leads** the source voltage by $70.5351^\circ$.

Taking the source as $v_s(t)=240\sqrt2\cos(100\pi t)\,\mathrm V$,
$$i(t)=3.1990\sqrt2\cos(100\pi t+70.5351^\circ)\,\mathrm A.$$

Alternatively, taking current as the horizontal reference gives $\underline I=3.1990\angle0^\circ$ and source phase $-70.5351^\circ$. That is the same phase difference, drawn with a different reference.

## RLC cancellation and resonance

The series RLC triangle in [[AC Theory (3)]] subtracts $X_C$ from $X_L$ before using Pythagoras. In complex form the reason is visible:
$$Z=R+jX_L-jX_C=R+j(X_L-X_C).$$

#### Worked example: a net capacitive circuit

At the chosen operating frequency let $R=6\,\Omega$, $X_L=10\,\Omega$, $X_C=18\,\Omega$, and $\underline V_s=20\angle0^\circ\,\mathrm{V_{rms}}$.
$$Z=6+j10-j18=6-j8=10\angle(-53.13^\circ)\,\Omega,$$
$$\underline I=2\angle53.13^\circ\,\mathrm A.$$
The current leads. Using current as reference, the component voltages are $12$, $j20$ and $-j36$ volts, so
$$\underline V_s=12+j20-j36=12-j16\,\mathrm V,$$
whose magnitude is $\sqrt{12^2+16^2}=20\,\mathrm V$. The $36\,\mathrm V$ capacitor voltage exceeds the $20\,\mathrm V$ source magnitude without violating KVL because the reactive voltages partly cancel.

### At resonance

When $\omega L=1/(\omega C)$, the imaginary terms cancel:
$$Z=R,\qquad \omega_0=\frac1{\sqrt{LC}},\qquad f_0=\frac1{2\pi\sqrt{LC}}.$$
Voltage and current are in phase. The inductor and capacitor voltages need not be zero; their phasors are equal and opposite.

If $L=0.1\,\mathrm H$ and $C=100\,\mu\mathrm F$,
$$\omega_0=316.23\,\mathrm{rad\,s^{-1}},\qquad f_0=50.33\,\mathrm{Hz}.$$
Each reactance magnitude is $31.62\,\Omega$ at resonance. With $R=10\,\Omega$ and $V_s=10\,\mathrm{V_{rms}}$, current is $1\,\mathrm A$ and each reactive voltage magnitude is $31.62\,\mathrm V$.

This cancellation is specific to the **series** topology. Do not apply a series impedance triangle unchanged to a parallel network.

## Why complex numbers help with parallel circuits

For parallel components, voltage is shared and **currents** add. See [[AC Impedance#Admittance]] and [[AC Impedance#Combining impedances]].

#### Worked example: resistor parallel with capacitor

At a particular frequency, put $R=100\,\Omega$ in parallel with $Z_C=-j100\,\Omega$, across $\underline V=10\angle0^\circ\,\mathrm{V_{rms}}$.
$$\underline I_R=\frac{10}{100}=0.1\,\mathrm A,$$
$$\underline I_C=\frac{10}{-j100}=j0.1\,\mathrm A.$$
The total is
$$\underline I=0.1+j0.1=0.14142\angle45^\circ\,\mathrm A,$$
not $0.2\,\mathrm A$. Pythagoras still works, now on the **current** triangle.

The equivalent impedance is
$$Z_{\mathrm{eq}}=\frac{10}{0.1+j0.1}
=50-j50=70.71\angle(-45^\circ)\,\Omega.$$
Its real part is $50\,\Omega$, not the physical branch resistor's $100\,\Omega$. Equivalent series components need not equal the components of the original parallel circuit.

## Voltage division and the familiar filter formula

The low-pass circuit in [[AC Theory (4)#Passive Low Pass Filter]] uses a series resistor and capacitor, with output across the capacitor. Complex voltage division gives
$$H=\frac{\underline V_o}{\underline V_s}
=\frac{Z_C}{R+Z_C}=\frac1{1+j\omega RC}.$$
Taking its magnitude,
$$|H|=\frac1{\sqrt{1+(\omega RC)^2}}
=\frac{X_C}{\sqrt{R^2+X_C^2}}.$$
That is the familiar Pythagoras formula. The complex form also supplies the phase:
$$\arg H=-\tan^{-1}(\omega RC).$$

#### Worked example: cutoff

Let $R=1\,\mathrm{k\Omega}$ and $C=1\,\mu\mathrm F$. Then $RC=1\,\mathrm{ms}$ and
$$f_c=\frac1{2\pi RC}=159.15\,\mathrm{Hz}.$$
At this frequency $\omega RC=1$:
$$H=\frac1{1+j}=\frac{1-j}{2}=0.7071\angle(-45^\circ).$$
For $10\,\mathrm{V_{rms}}$ input, output is $7.071\,\mathrm{V_{rms}}$ and lags by $45^\circ$.

> [!NOTE] Cutoff is not resonance here
> A first-order RC low-pass filter has a cutoff where $X_C=R$. It has no inductor and no inductive/capacitive cancellation. Series RLC resonance is a different phenomenon.

See [[AC Impedance#Complex voltage division]] and [[AC Impedance#Frequency response]] for further divider and filter calculations.

## Where the j comes from physically

The deeper connection is [[From Capacitor Formulas to Calculus#From calculus to capacitor impedance]]: differentiating a sinusoid shifts it by $+90^\circ$ and multiplies its amplitude by $\omega$.

Using $v_C(t)=V_m\cos\omega t$,
$$i_C(t)=C\frac{dv_C}{dt}=-\omega CV_m\sin\omega t
=\omega CV_m\cos(\omega t+90^\circ).$$
The current leads the voltage. In phasor form, that $+90^\circ$ rotation is multiplication by $j$:
$$\underline I_C=j\omega C\underline V_C
\quad\Rightarrow\quad Z_C=\frac{\underline V_C}{\underline I_C}=\frac1{j\omega C}.$$
For the inductor, $v_L=L\,di_L/dt$ similarly gives $\underline V_L=j\omega L\underline I_L$.

Thus the chain is:

**charge/current law → derivative → sinusoidal phase shift → complex impedance → Pythagoras magnitude.**

Phasors apply to common-frequency sinusoidal steady state. They do not by themselves describe the initial switch-on charging curve; use [[RC Transients]] or [[RL and Complete Response]] for that part.

## A reliable calculation routine

1. State frequency, RMS or peak convention, and sine or cosine reference.
2. Write each complex impedance, including its sign and units.
3. Combine by actual topology, adding rectangular components rather than magnitudes.
4. Use polar form for convenient multiplication/division.
5. Interpret magnitude **and** phase; current phase is voltage phase minus impedance phase.
6. If required, turn the phasor back into a real waveform, converting RMS to peak.
7. Check KVL/KCL with phasors and inspect limiting behaviour: does increasing frequency make an ideal capacitor's impedance smaller and an inductor's larger?

The next bridge, [[From Capacitor Formulas to Calculus]], develops the derivative and integral laws without assuming that the calculus is already intuitive.
