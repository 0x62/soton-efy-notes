---
permalink: y1/elec1311/capacitor-formulas-to-calculus
---
#### From Capacitor Formulas to Calculus

- [[#Charge is the starting point]]
- [[#A derivative is an instantaneous slope]]
- [[#An integral adds up charge]]
- [[#Worked examples with specified current]]
- [[#Why resistor charging is exponential]]
- [[#Deriving the familiar charging formula]]
- [[#Worked charging and discharging examples]]
- [[#The inductor is the matching idea]]
- [[#From calculus to capacitor impedance]]
- [[#Choosing the right description]]

**[[#Charge is the starting point|Charge, current and voltage]]**
$$q=Cv_C,\qquad i_C=\frac{dq}{dt}=C\frac{dv_C}{dt}$$
**[[#An integral adds up charge|Voltage from accumulated current]]**
$$v_C(t)=v_C(t_0)+\frac1C\int_{t_0}^{t}i_C(s)\,ds$$
**[[#Deriving the familiar charging formula|Constant-source series RC response]]**
$$v_C(t)=V_S+(V_0-V_S)e^{-t/(RC)},\qquad i_C(t)=\frac{V_S-V_0}{R}e^{-t/(RC)}$$
**[[#The inductor is the matching idea|Inductor law]]**
$$v_L=L\frac{di_L}{dt},\qquad i_L(t)=i_L(t_0)+\frac1L\int_{t_0}^{t}v_L(s)\,ds$$

## Charge is the starting point

The basic relationship is still [[Circuit Theory (5)#Capacitance|charge equals capacitance times voltage]]:
$$q=Cv_C.$$
For an ideal fixed capacitor, $C$ is constant. The lowercase $q(t)$ and $v_C(t)$ simply emphasise that charge and voltage may change with time. Charge means the signed charge on the plate chosen as the positive voltage terminal; the other plate has equal and opposite charge.

#### Worked example: a snapshot

A $100\,\mu\mathrm F$ capacitor at $3\,\mathrm V$ stores plate charge
$$q=(100\times10^{-6})(3)=300\,\mu\mathrm C.$$
Add another $200\,\mu\mathrm C$ to that plate:
$$\Delta v_C=\frac{\Delta q}{C}=\frac{200\,\mu\mathrm C}{100\,\mu\mathrm F}=2\,\mathrm V.$$
The new voltage is $3+2=5\,\mathrm V$. This says nothing yet about **how long** the added charge took to arrive.

Current answers that question: it is the rate at which charge passes a point. For constant current,
$$\Delta q=I\Delta t.$$
For changing current, replace the single rectangle $I\Delta t$ by the accumulated area under the current curve. That is integration, not a different storage mechanism. Compare [[Circuit Theory (1)#Charge]] with [[Circuit Basics#Current & Charge]].

## A derivative is an instantaneous slope

Over a finite interval,
$$\text{average voltage slope}=\frac{\Delta v_C}{\Delta t}.$$
The derivative $dv_C/dt$ is the slope at a particular instant, obtained by shrinking the interval. It has units $\mathrm{V\,s^{-1}}$, not volts. See [[Differentiation#First principles]].

Differentiate $q=Cv_C$. Because $C$ is constant,
$$\frac{dq}{dt}=C\frac{dv_C}{dt}.$$
But $dq/dt$ is current, so
$$\boxed{i_C=C\frac{dv_C}{dt}}.$$

Use the **passive sign convention**: the reference current enters the terminal labelled positive for $v_C$.

- Rising voltage: $dv_C/dt>0$, so current is positive into that terminal.
- Falling voltage: $dv_C/dt<0$, so current is negative, meaning it actually leaves that terminal.
- Flat voltage: $dv_C/dt=0$, so current is zero, even if the voltage is not zero.

A capacitor at a steady $5\,\mathrm V$ can have zero current. A capacitor passing through $0\,\mathrm V$ can have nonzero current if its voltage is changing there.

#### Worked example: reading current from a slope

A $100\,\mu\mathrm F$ capacitor voltage rises linearly from $1\,\mathrm V$ to $4\,\mathrm V$ in $6\,\mathrm{ms}$:
$$\frac{dv_C}{dt}=\frac{4-1}{6\times10^{-3}}=500\,\mathrm{V\,s^{-1}},$$
$$i_C=100\times10^{-6}(500)=0.05\,\mathrm A=50\,\mathrm{mA}.$$
If it then stays at $4\,\mathrm V$, the current becomes zero. If it falls from $4\,\mathrm V$ to $1\,\mathrm V$ over the next $3\,\mathrm{ms}$,
$$i_C=100\times10^{-6}\frac{1-4}{3\times10^{-3}}=-100\,\mathrm{mA}.$$
The negative sign encodes direction; it does not imply that the capacitance changed.

See [[Circuit Basics#Calculating current]] for further voltage-graph examples.

> [!NOTE] Continuity is about the stored voltage
> Finite current produces a finite voltage slope, so capacitor voltage cannot make a finite jump in zero time. Current can jump between finite values, causing a corner in the voltage graph. An ideal voltage jump would require an impulse of current. See [[RC Transients#Initial conditions and current direction]].

## An integral adds up charge

A small rectangle under a current-time graph represents charge:
$$\Delta q\approx i(t)\Delta t.$$
Adding many rectangles and shrinking their width gives
$$\Delta q=\int_{t_0}^{t}i_C(s)\,ds.$$
The symbol $s$ is a dummy time variable measured in seconds, not a new physical quantity. It avoids confusing the running time inside the integral with its endpoint $t$.

Since a change in charge causes $\Delta v_C=\Delta q/C$,
$$\boxed{v_C(t)=v_C(t_0)+\frac1C\int_{t_0}^{t}i_C(s)\,ds}.$$

**The integral gives the voltage change, not necessarily the final voltage.** The initial voltage must be added because the capacitor may already contain charge.

Unit check:
$$\frac{\mathrm{A\,s}}{\mathrm F}=\frac{\mathrm{coulomb}}{\mathrm{coulomb/volt}}=\mathrm V.$$

This is the same relationship as $i_C=C\,dv_C/dt$, read backwards. Differentiating the integral returns the original current law. The full symbolic derivation is in [[Circuit Basics#Calculating voltage]].

## Worked examples with specified current

### Constant current gives a straight line

Let $C=100\,\mu\mathrm F$, $v_C(0)=2\,\mathrm V$, and $i_C=1\,\mathrm{mA}$ for $0\le t\le0.2\,\mathrm s$.

**Using charge directly:**
$$\Delta q=I\Delta t=(1\times10^{-3})(0.2)=200\,\mu\mathrm C,$$
$$v_C(0.2)=2+\frac{200\,\mu\mathrm C}{100\,\mu\mathrm F}=4\,\mathrm V.$$

**Using integration:**
$$v_C(t)=2+\frac1{100\times10^{-6}}\int_0^t10^{-3}\,ds
=2+10t,$$
with $t$ in seconds and voltage in volts. The slope is $10\,\mathrm{V\,s^{-1}}$.

The two methods are identical: integrating a constant gives the same rectangle $It$. If current stops at $0.2\,\mathrm s$ and there is no other discharge path, the ideal capacitor stays at $4\,\mathrm V$.

### Increasing current gives a curved voltage

Let $C=100\,\mu\mathrm F$ and $v_C(0)=1\,\mathrm V$. During the first $0.1\,\mathrm s$, current ramps from zero to $2\,\mathrm{mA}$:
$$i_C(t)=(0.02\,\mathrm{A\,s^{-1}})t.$$

**Area method:** the added charge is a triangle,
$$\Delta q=\tfrac12(0.1\,\mathrm s)(0.002\,\mathrm A)=100\,\mu\mathrm C.$$
Thus $v_C(0.1)=1+100/100=2\,\mathrm V$.

**Integration gives the entire curve:**
$$v_C(t)=1+\frac1{10^{-4}}\int_0^t0.02s\,ds
=1+100t^2,$$
with $t$ in seconds and voltage in volts. At $t=0.05\,\mathrm s$, voltage is $1.25\,\mathrm V$, not the $1.5\,\mathrm V$ that a straight-line interpolation would predict. Early current is smaller, so charge accumulates more slowly at first.

Check by differentiating:
$$C\frac{dv_C}{dt}=10^{-4}(200t)=0.02t\,\mathrm A.$$
The derivative reconstructs the specified current.

### Negative current removes charge without resetting the voltage

After that ramp, let current be $-1\,\mathrm{mA}$ from $t=0.1$ to $0.15\,\mathrm s$. Start from the existing $2\,\mathrm V$:
$$v_C(t)=2+\frac1{100\times10^{-6}}\int_{0.1}^{t}(-10^{-3})\,ds
=2-10(t-0.1).$$
At $t=0.15\,\mathrm s$, voltage is $1.5\,\mathrm V$. The negative area is $-50\,\mu\mathrm C$ and the voltage change is $-0.5\,\mathrm V$.

If current becomes zero next, voltage remains $1.5\,\mathrm V$. Each interval starts from the preceding interval's final voltage. See [[Circuit Basics#Example: a current ramp followed by constant current]].

## Why resistor charging is exponential

The examples above prescribe current independently of capacitor voltage. A voltage source charging a capacitor **through a resistor** is different: current depends on how much voltage remains across the resistor.

![[Circuit Theory (6)#RC Charging Transient Curves]]

For that circuit, [[Circuit Theory (6)#Step by Step]] applies KVL:
$$V_S=v_R+v_C=Ri_C+v_C.$$
Rearrange:
$$i_C=\frac{V_S-v_C}{R}.$$
As $v_C$ increases, the resistor voltage and charging current decrease. Now substitute $i_C=C\,dv_C/dt$:
$$\boxed{RC\frac{dv_C}{dt}+v_C=V_S}.$$

This differential equation says:

**The voltage's rate of increase is proportional to how far it is below the final voltage.**

For example, with $V_S=10\,\mathrm V$, $R=1\,\mathrm{k\Omega}$ and $C=100\,\mu\mathrm F$, $RC=0.1\,\mathrm s$:

- At $v_C=0$, current is $10\,\mathrm{mA}$ and slope is $100\,\mathrm{V\,s^{-1}}$.
- At $v_C=5\,\mathrm V$, current is $5\,\mathrm{mA}$ and slope is $50\,\mathrm{V\,s^{-1}}$.
- At $v_C=9\,\mathrm V$, current is $1\,\mathrm{mA}$ and slope is $10\,\mathrm{V\,s^{-1}}$.

Holding the initial current constant would incorrectly predict a straight line reaching $10\,\mathrm V$ after $0.1\,\mathrm s$. The actual current falls throughout; the actual voltage is only $6.321\,\mathrm V$ then.

See [[RC Transients#Building the RC differential equation]] and [[RC Transients#Approximating the response in time steps]].

## Deriving the familiar charging formula

### First solve the remaining gap

For constant $V_S$, define the gap to the supply as
$$u(t)=V_S-v_C(t).$$
Because $V_S$ is constant, $du/dt=-dv_C/dt$. The circuit equation becomes
$$\frac{du}{dt}=-\frac{u}{RC}.$$
The gap shrinks at a rate proportional to itself. An exponential has exactly that property:
$$\frac{d}{dt}e^{-t/(RC)}=-\frac1{RC}e^{-t/(RC)}.$$
The factor $-1/(RC)$ comes from the [[Differentiation#Chain rule|chain rule]]. Therefore
$$u(t)=u(0)e^{-t/(RC)}=(V_S-V_0)e^{-t/(RC)}.$$
Substitute back $v_C=V_S-u$:
$$\boxed{v_C(t)=V_S+(V_0-V_S)e^{-t/(RC)}}.$$

### The integration route gives the same result

For nonzero initial gap, separate the variables:
$$\frac{du}{u}=-\frac{dt}{RC}.$$
Integrate from the initial gap $u_0$ to the current gap $u(t)$, and from time zero to time $t$:
$$\int_{u_0}^{u(t)}\frac{d\xi}{\xi}=-\frac1{RC}\int_0^t ds,$$
$$\ln\left|\frac{u(t)}{u_0}\right|=-\frac t{RC}.$$
The gap retains its original sign, so $u(t)=u_0e^{-t/(RC)}$. If $u_0=0$, the capacitor already equals the supply voltage and stays there; no division by zero is needed.

The differential equation sets the curve's shape and time constant. The initial condition $V_0$ sets which member of that family of curves applies. See [[RC Transients#Why the exponential trial works]].

### Recovering the familiar special cases

- Initially uncharged, $V_0=0$:
  $$v_C=V_S(1-e^{-t/(RC)}).$$
- Source-free discharge, $V_S=0$:
  $$v_C=V_0e^{-t/(RC)}.$$
- Already charged to the supply, $V_0=V_S$: $v_C=V_S$ at all times.

The first two are the formulas in [[Circuit Theory (6)#RC Charging Transient Curves]] and [[Circuit Theory (6)#RC Discharging Transient Curves]]. Calculus explains where they come from and extends them to nonzero initial voltage.

Differentiate the general voltage to get current:
$$i_C=C\frac{dv_C}{dt}=\frac{V_S-V_0}{R}e^{-t/(RC)}.$$
For $V_0>V_S$, this is negative: the capacitor loses charge and approaches the lower supply voltage. See [[RC Transients#Steady value plus transient]].

## Worked charging and discharging examples

### Charging from zero, checked two ways

Take $V_S=10\,\mathrm V$, $R=1\,\mathrm{k\Omega}$, $C=100\,\mu\mathrm F$, $V_0=0$. Then $\tau=RC=0.1\,\mathrm s$:
$$v_C(t)=10(1-e^{-t/0.1})\,\mathrm V,$$
$$i_C(t)=0.01e^{-t/0.1}\,\mathrm A,$$
where $t$ is in seconds.

At $t=0.05\,\mathrm s$,
$$v_C=10(1-e^{-0.5})=3.9347\,\mathrm V,$$
$$i_C=0.01e^{-0.5}=6.0653\,\mathrm{mA}.$$
Check with ordinary Ohm's law across the resistor:
$$i_C=\frac{10-3.9347}{1000}=6.0653\,\mathrm{mA}.$$
Check with the capacitor derivative:
$$\frac{dv_C}{dt}=100e^{-t/0.1}\,\mathrm{V\,s^{-1}},$$
$$C\frac{dv_C}{dt}=10^{-4}(60.653)=6.0653\,\mathrm{mA}.$$
The formula, KVL and derivative law all agree.

To find when it first reaches $9\,\mathrm V$:
$$9=10(1-e^{-t/0.1})\Rightarrow e^{-t/0.1}=0.1,$$
$$t=-0.1\ln(0.1)=0.23026\,\mathrm s=2.3026\tau.$$
Use the natural logarithm because the charging formula uses base $e$.

### Charging from an existing voltage

For the same circuit but $V_0=4\,\mathrm V$,
$$v_C(t)=10-6e^{-t/0.1}\,\mathrm V.$$
After one time constant,
$$v_C(0.1)=10-\frac6e=7.7927\,\mathrm V.$$
It is not $6.32\,\mathrm V$. One time constant removes $63.2\%$ of the **initial gap**: the capacitor rises by $0.6321\times6=3.7927\,\mathrm V$ from its $4\,\mathrm V$ starting point.

Check the starting current:
$$i_C(0)=\frac{10-4}{1000}=6\,\mathrm{mA}.$$
This is smaller than the $10\,\mathrm{mA}$ for an uncharged capacitor because less voltage is available across the resistor. See [[Circuit Theory (6)#RC Time Constant]] and [[RC Transients#Time constant and response]].

### Discharge and the sign of current

Disconnect the source and connect a $100\,\mu\mathrm F$ capacitor initially at $5\,\mathrm V$ across a $2\,\mathrm{k\Omega}$ resistor. Then $\tau=0.2\,\mathrm s$ and
$$v_C(t)=5e^{-t/0.2}\,\mathrm V.$$
At $t=0.2\,\mathrm s$, $v_C=1.8394\,\mathrm V$.

Current referenced **into the capacitor's positive terminal** is
$$i_C=C\frac{dv_C}{dt}=-2.5e^{-t/0.2}\,\mathrm{mA},$$
so $i_C(0.2)=-0.9197\,\mathrm{mA}$.

Current in the resistor from its positive-voltage node towards the negative node is instead $+v_C/R=+0.9197\,\mathrm{mA}$. These arrows point in opposite directions around the discharge circuit. Both describe the same flow. This resolves the separate $i_C$ and positive discharge-current formulas in [[Circuit Theory (6)#RC Discharging Transient Curves]].

## The inductor is the matching idea

A capacitor stores energy in an electric field, with voltage as its state; an inductor stores energy in a magnetic field, with current as its state. With current entering the marked positive voltage terminal,
$$v_L=L\frac{di_L}{dt}.$$
Voltage tells you how fast current changes, just as capacitor current tells you how fast voltage changes. Integrating gives
$$i_L(t)=i_L(t_0)+\frac1L\int_{t_0}^{t}v_L(s)\,ds.$$

[[Circuit Theory (7)#Resistor-Inductor Circuits]] uses the opposing induced EMF $\mathcal E=-L\,di/dt$. The passive **terminal voltage drop** is $v_L=+L\,di/dt$. The signs differ because the voltage directions differ, not because the inductor laws disagree.

#### Worked example: constant inductor voltage

For $L=10\,\mathrm{mH}$ and constant $v_L=2\,\mathrm V$,
$$\frac{di_L}{dt}=\frac2{0.01}=200\,\mathrm{A\,s^{-1}}.$$
Starting from $0.1\,\mathrm A$, after $1\,\mathrm{ms}$,
$$i_L=0.1+200(0.001)=0.3\,\mathrm A.$$
This linear ramp assumes the **inductor voltage itself** remains $2\,\mathrm V$. If a resistor is in series with a constant-voltage source, the resistor drop grows and the inductor voltage falls, giving an exponential instead.

#### Worked example: resistor-limited current growth

For $V_S=5\,\mathrm V$, $R=10\,\Omega$, $L=20\,\mathrm{mH}$, and $i_L(0)=0$,
$$L\frac{di_L}{dt}+Ri_L=V_S,$$
$$I_\infty=\frac5{10}=0.5\,\mathrm A,\qquad \tau=\frac{0.02}{10}=2\,\mathrm{ms},$$
$$i_L(t)=0.5(1-e^{-t/(2\,\mathrm{ms})})\,\mathrm A.$$
After $2\,\mathrm{ms}$, current is $0.3161\,\mathrm A$. The initial slope is $V_S/L=250\,\mathrm{A\,s^{-1}}$, then decreases as current approaches $0.5\,\mathrm A$.

Compare [[Circuit Theory (7)#LR Time Constant]] with [[RL and Complete Response#Complete first-order response]]. Capacitor voltage and inductor current share the same initial-to-final exponential pattern, but their time constants are $RC$ and $L/R$ respectively.

## From calculus to capacitor impedance

The capacitor law is also what creates the $90^\circ$ AC phase relationship.

Let
$$v_C(t)=V_m\cos(\omega t).$$
Differentiate using the chain rule:
$$\frac{dv_C}{dt}=-\omega V_m\sin(\omega t)
=\omega V_m\cos(\omega t+90^\circ).$$
Therefore
$$i_C(t)=\omega CV_m\cos(\omega t+90^\circ).$$
The current's peak occurs a quarter cycle before the voltage's peak. At maximum voltage the slope is zero, so current is zero; at a zero crossing the slope magnitude, and hence current magnitude, is largest.

The amplitude relationship is
$$I_m=\omega CV_m\quad\Rightarrow\quad \frac{V_m}{I_m}=\frac1{\omega C}=X_C.$$
This is exactly the reactance formula in [[AC Theory (1)#Capacitive]]. Calculus supplies both the magnitude and the phase, rather than requiring the phase to be memorised separately.

### A numerical sinusoidal example

Let $C=10\,\mu\mathrm F$ and
$$v_C(t)=5\cos(1000t)\,\mathrm V.$$
Here $\omega=1000\,\mathrm{rad\,s^{-1}}$, so $f=1000/(2\pi)=159.15\,\mathrm{Hz}$, **not** $1000\,\mathrm{Hz}$.
$$i_C(t)=10^{-5}\frac{d}{dt}[5\cos(1000t)]
=-0.05\sin(1000t)\,\mathrm A,$$
$$i_C(t)=0.05\cos(1000t+90^\circ)\,\mathrm A.$$
The voltage peak is $5\,\mathrm V$ and the current peak is $50\,\mathrm{mA}$, giving
$$|Z_C|=\frac5{0.05}=100\,\Omega=\frac1{1000(10^{-5})}.$$
With peak, cosine-reference phasors, $\underline V_C=5$ and $\underline I_C=j0.05$, so
$$Z_C=\frac5{j0.05}=-j100\,\Omega.$$
RMS phasors would be $5/\sqrt2$ and $j0.05/\sqrt2$, leaving exactly the same impedance.

### Why differentiation becomes multiplication

Euler's identity lets a sinusoid be represented as the real part of a complex exponential:
$$v(t)=\Re\{\underline V e^{j\omega t}\}.$$
Because
$$\frac d{dt}e^{j\omega t}=j\omega e^{j\omega t},$$
a derivative becomes multiplication of the phasor by $j\omega$: multiply its amplitude by $\omega$ and rotate it by $+90^\circ$.

Thus
$$\underline I_C=j\omega C\underline V_C,\qquad
Z_C=\frac1{j\omega C}.$$
Similarly, $v_L=L\,di_L/dt$ becomes $Z_L=j\omega L$.

This shortcut applies to the **sinusoidal steady-state part** of the solution at a common nonzero frequency. It does not erase a precharged capacitor's initial condition or solve a switching transient by itself. For that, use the time-domain equations above. See [[AC Impedance#Sinusoids and phasors]] and [[From Impedance Triangles to Complex Numbers#Where the j comes from physically]].

## Choosing the right description

- **Known charge or voltage at one instant:** use $q=Cv$.
- **Known voltage graph or expression:** differentiate to find current, $i=C\,dv/dt$.
- **Known current graph or expression:** integrate to find the voltage change, then add the initial voltage.
- **Constant voltage source through a resistor:** use KVL plus the capacitor law, giving the RC exponential with its correct initial condition.
- **Common-frequency sinusoidal steady state:** use complex impedance; convert the final phasor back into a real waveform if needed.

> [!TIP] One physical law, several forms
> $q=Cv$, $i=C\,dv/dt$, the integral for voltage, the RC charging formula, and $Z_C=1/(j\omega C)$ are not five competing rules. They describe the same ideal capacitor with different information supplied and different circuit conditions.

For a more complicated first-order network, the effective resistance is the resistance seen by the storage element after switching, not necessarily a single labelled resistor. Continue with [[RL and Complete Response#Equivalent resistance]] and [[RL and Complete Response#Switching method]]. For AC calculations, return to [[From Impedance Triangles to Complex Numbers]] and [[AC Impedance]].
