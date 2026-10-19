---
tags:
  - ac-theory
module: Electricity & Electronics
component: AC Theory
permalink: fy/electricity-electronics/ac-theory-3
---

The series RLC circuit has a single loop with the instantaneous current flowing through the loop being the same for each circuit element. 

Since the inductive and capacitive reactance $X_{L}$ and $X_{C}$ are a function of the supply frequency, the sinusoidal response of a series RLC circuit will vary with frequency $f$.

The instantaneous voltage across:

- A pure resistor $V_{R}$ is in phase with current
- A pure inductor $V_{L}$ leads the current by 90 degrees
- A pure capacitor $V_{C}$ lags the current by 90 degrees

Because of the phase relationships, we cannot add together $V_{R}$ $V_{L}$ and $V_{C}$ to find the supply voltage, $V_{S}$, using KVL. All three voltage vectors point in different directions with regards to the current vector.

Therefore, we will have to find the supply voltage $V_{S}$ as the phasor sum of the three component voltages combined together vectorially.

In AC circuit series containing R, L, and C in series, the applied voltage $V_{S}$ is the phasor sum of $V_{R}$, $V_{L}$ and $V_{C}$:

$$
V_{S}=\sqrt{ V_{R}^2+(V_{L}-V_{C})^2 }
$$

The current $I$ may lead or lag the supply voltage depending on the relative magnitudes of $V_{L}$ and $V_{C}$

If the current **lags** the supply voltage, the circuit is **inductive**. This occurs when $X_{L}>X_{C}$

$$
Z=\sqrt{ R^2+(X_{L}-X_{C})^2 }
$$

If the current **leads** the supply voltage, the circuit is **capacitive**. This occurs when $X_{L}<X_{C}$

$$
Z=\sqrt{ R^2+(X_{C}-X_{L})^2 }
$$

The magnetic field in the inductor is built by the current, which is provided by the dischargin capacitor. Similarly, the capacitor is charged by the current produced by collapsing magnetic field of the inductor, and this process continues back and forth causing electrical energy to oscillate between the magnetic field and the electric field. 

In some cases, a certain frequency called resonance occurs. This happens when the inductive reactance $X_{L}$ of the circuit becomes equal to capacitive reactance $X_{C}$ which causes the electrical energy to oscillate between the electric field of the capacitor and magnetic field of the inductor.

This process is known as resonance frequency. In an RLC circuit, the presence of the resistor causes this oscillation to die out over a period of time and is known as the damping effect of the resistor.

When $X_{L}=X_{C}$, the applied voltage $V$ and the current $I$ are in phase. Series resonance is found in various forms such as AC mains filters, noise filters and also in radio and television tuning circuits, producing a very selective tuning circuit for the receiving of the different frequency. channels. 

A series resonant circuit has the capability to draw heavy current and power from the mains; it is also called the acceptor circuit.

These two reactance's become equal and cancel each other out at resonance, so the only opposition to the flow of current is due to resistance, so $Z=R$. So, in a series resonant circuit, voltage across the resistor is equal to supply voltage.

Since $X_{L}=X_{C}$, then at resonance:

$$
V_{L}=V_{C} \qquad V_{S}=V_{R} \qquad Z=R \qquad 2\pi fL=\frac{1}{2\pi fC}
$$
$$
f=\frac{1}{2\pi \sqrt{ LC }} \text{ Hz}
$$



## Power in AC

For a purely resistive AC circuit, voltage and current are in phase so electrical energy is continuously converted into heat. Therefore, the average power dissipated, $P$ is given by:

$$
P=VI=I^2R=\frac{V^2}{R}\text{ Watts}
$$

For a purely inductive or purely capacitive AC circuit, the voltage and current are $90^{\circ}$ out of phase. This means energy is stored temporarily in magnetic fields (inductors) or electrical fields (capacitors) and then returned to the source during each cycle.

**Therefore, the average power dissipated over a full cycle is zero**.

### Power factor

The power in an AC RL, RC, or RLC circuit is described by its **average (real) power**, given as:

$$
P=VI\cos\theta \text{ Watts}
$$

Where $\theta$ is the phase angle between the supply current and voltage, and where $V$ and $I$ are understood to be the RMS values of the supply current and voltage.

The term $\cos\theta$ is known as the **power factor**.

In an RLC circuit, the real power is dissipated only by the resistor (because the capacitor/inductor charge and discharge - but there is no power lost).
### Power components

The total supply current $I$ can be resolved into two components:

$$I\cos\theta$$

This component is in phase with the supply voltage. It represents the real (power) component of the supply current responsible for transferring electrical energy to the load.

$$
I\sin\theta
$$

This component is $90^{\circ}$ out of phase with the supply voltage. It represents the reactive component of current, associated with energy being stored and returned by the inductive and capacitive elements in the circuit.

### Power triangle

The power can be described using three quantities, which form the power triangle:

- **True Power**: $P=VI\cos\theta \text{ Watts}$
- **Apparent Power**: $S=VI \text{ Volt Amperes (VA)}$
	- This represents the total power supplied by the source and is often used when sizing electrical equipment and wiring
- **Reactive Power**: $Q=VI\sin\theta \text{ Volt-Amperes Reactive (VAr)}$
	- This represents the power associated with energy stored and returned by inductors and capacitors

These are related by:

$$
S^2=P^2+Q^2
$$
The ratio of true power to aparanent power is known as the **Power Factor** (Pf).

$$
\text{Power Factor (Pf) } = \frac{\text{True Power (W)}}{\text{Apparaent Power (VA)}}=\frac{VI\cos\theta}{VI}=\boxed{\cos\theta}
$$

For an RLC circuit, this can also be written as $Pf=\cos\theta=\frac{R}{Z}$

Therefore, power factor is equal to the cosine of the circuit phase angle. If the current lags the supply voltage, the power factor is lagging. If the current leads the supply voltage, the power factor is leading.

> [!WARNING] There will be a power factor question
> Heavily hinted by Josh. Note that power factor equations are not given on the formula sheet.

## Bandwidth

In a series RLC circuit, the current $I$ depends on the circuit impedance ($Z$). At resonant frequency $X_{L}=X_{C}$ impedance $Z$ is at its minimum (equal to just $R$, since inductive and capacitive reactance's cancel out).

This means that current $I$ is at its maximum, so $P=I^2Z=I^2R$

If the frequency moves away from resonance, the impedance increases and the current decreases. The half-power points occur at two frequencies, $f_{1}$ and $f_{2}$.

**Bandwidth is the range of frequencies around resonance where the circuit still responds significantly**.

The resonant frequency can be determined from the critical frequencies using:

$$
f_{r}=\sqrt{ f_{1}f_{2} }\text{ Hz} \qquad f_{r}=\frac{1}{2\pi \sqrt{ LC }}\text{ Hz}
$$

And bandwidth $\Delta f$ is therefore:

$$
\text{Bandwidth}=\Delta f=f_{2}-f_{1} \text{ Hz}
$$

## Q Factor

The **quality factor (Q)** of a resonant circuit is a measure of how selective or sharp the resonance is. The quality factor is dimensionless.

A higher Q factor corresponds to a narrower bandwidth, meaning the circuit responds strongly to a small range of frequencies around the resonant frequency. This behaviour is desirable in applications like tuned circuits and filters.

At resonance, if the resistance R is small compared with the reactance's, the voltage across the inductor and capacitor can be much larger than the supply voltage. This effect is known as voltage magnification.

$$
\text{Voltage magnification at resonance}=\frac{\text{Voltage across L or C}}{\text{Supply Voltage}}
$$



This ratio is know as the voltage magnification factor or Q factor, and it can be worked out from many formulas:

$$
Q=\frac{V_{L}}{V}=\frac{IX_{L}}{IR}=\frac{X_{L}}{R}=\frac{2\pi f_{r}L}{R}
$$

$$
Q=\frac{V_{C}}{V}=\frac{IX_{C}}{IR}=\frac{X_{C}}{R}=\frac{1}{2\pi f_{r}CR}
$$



## Resonant Frequency Cheat Sheet

At resonance:

$$
f_{r}=\frac{1}{2\pi \sqrt{ LC }} \qquad 2\pi f_{r}=\frac{1}{\sqrt{ LC }}
$$

So:

$$
Q=\frac{2\pi f_{r}L}{R}=\frac{1}{\sqrt{ LC }}\left( \frac{L}{R} \right)=\frac{1}{R}\sqrt{ \frac{L}{C} }
$$

If we have the bandwidth...

$$
Q=\frac{\text{Resonant Frequency}}{\text{Bandwidth}}=\frac{f_{r}}{\Delta f}
$$

