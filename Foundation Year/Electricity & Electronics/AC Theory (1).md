---
tags:
  - ac-theory
module: Electricity & Electronics
component: AC Theory
permalink: fy/electricity-electronics/ac-theory-1
---
## AC vs DC

In DC circuits, electrons move in one direction. The negatively charged electrons flow through from the negatively charged side, down the wire, towards the positively charged side.

In AC circuits, electrons alternate between pushing and pulling. The direction moves in one direction and then reverses. The rate of change that AC electricity is alternating back and forth is usually 50 to 60 times per second. This is called the frequency, and is designated as either 50 Hz or 60 Hz.

The regular back and forth motion of electrons is period motion, similar to a pendulum. Voltage and current follow a sine waveform, alternating between positive and negative (as measured by a volt meter).

When DC is needed, devices called rectifiers are used for conversion.
### Ohm's Law

In AC, the relationship between current and voltage is not the same as DC. We can't apply Ohm's Law.

In AC, current and voltage can be out of phase with each other. There are situations where there is current but no voltage, and voltage but no current. This typically happens in circuits with capacitors and inductors.

## Rectification

AC power supply is taken from the AC mains supply. A transformer reduces the 240V mains supply to a lower value.

## Waveforms

A typical waveform shape is the sine wave. One complete series of values is called a cycle. THe time taken for an alternating quantity to complete one cycle is called a period, or the periodic time $T$ of the waveform.

The number of cycles completed in one second is the frequency, measured in Hz. The standard frequency in UK is 50Hz.

$$
f=\frac{1}{T}\text{ Hz}
$$

An alternating current completes 5 cycles in 8ms. It's frequency is 625 Hz.

Instantaneous values are the values of alternating quantities of any instant of time. They are represented by lowercase letters.

Average value of a sinusoidal voltage or current is zero over a complete cycle as the two halves cancel each other out.

The effective or root mean square (RMS) value of an AC is that current which will produce the same effect as an equivalent direct current (DC). **Whenever an alternating quantity is given, it is assumed to be the RMS value.**

The domestic mains supply in the UK is 230V, and it assumed to mean 230V RMS. The actual peak value is much higher.

For a sine wave:

$$
V_{RMS}=\frac{V_{max}}{\sqrt{ 2 }} \qquad V_{max}=V_{RMS}\times \sqrt{ 2 }
$$

An AC signal has a peak voltage of 20V and periodic time of 10ms. What is its RMS voltage and frequency?

$$
V_{RMS}=14.14\text{ V} \qquad f=\frac{1}{0.01}=100\text{ Hz}
$$


## Insulation and Fuses

Insulation is used to prevent 'leakage' and when determining what type of insulation should be used, the maximum voltage present must be taken into account. For this reason, **the peak values are always considered when choosing insulation materials**.

Fuses are the weak link in a circuit and are used to break the circuit if excessive current is drawn. Excessive current could lead to fires and other dangers. Fuses rely on a heating effect fo the current ($I^2R$, which is power), and for this reason **the RMS value is always used when calculating fuse size**.

## Equation for Sinusoidal Waveform

Single sinusoidal waveform at an instant time $t$ as:

$$
v(t)=V_{max}\sin (\omega t)
$$

When representing two or more sine waves of the same frequency, we need to consider phase difference $\phi$ between the two waveforms:

$$
v(t)=V_{max}\sin(\omega t+\phi)
$$

> [!figure] ![[Screenshot 2026-03-10 at 10.47.56.png]]
> © University of Southampton [^1]
### Examples

#### Example 1

With reference to the figure below, find the instantaneous values of $v$ and $i$ at $t=2.5\text{ ms}$ taking $V_{max}=10V$ and $I_{max}=5A$.

$$
f=250Hz \qquad \phi=\frac{\pi}{2}
$$
$$
v(t)=10\sin(2\pi f \cdot0.0025) \qquad i(t)=5\sin\left( 2\pi f \cdot 0.0025 -\frac{\pi}{2} \right)
$$

$$
v(t)=-7.07V \qquad i(t)=3.54A
$$

#### Example 2

An alternating voltage is given by $v=75\sin(200\pi t-0.25)$. Determine the:

- Amplitude = $75V$
- Peak-to-peak voltage = $150V$
- RMS value = $\frac{75}{\sqrt{ 2 }}=53V$
- Periodic time = $T=\frac{2\pi}{\omega}=\frac{2\pi}{200\pi}=0.01s$
- Frequency = $\frac{1}{0.01}=100Hz$
- Phase angle in degrees = $0.25 \times \frac{180}{\pi}=14.3^{\circ}$

## Phasors

Phase shift means that the current and voltage are out of step with each other.

Think of charging a capacitor. When the voltage across the capacitor is zero, the current is at maximum. When the capacitor has charged, the voltage is at maximum and current is at minimum. The charging and discharging occurs continually with AC, and the current reaches its maximum shortly before the voltage reaches its maximum, so we say **the current leads the voltage**.

### Phasor Diagrams

> [!figure] ![[Phasor diagrams 1.png]]
> © University of Southampton [^1]

A phasor diagram represents the phasors as open arrows, which rorate counter clockwise with an angular frequency of $\omega$ about the origin.

Phasors have the following properties:

- The length of a phasor is proportional to the maximum value of the alternating quantity involved
- The projection of a phasor on the vertical axis gives an instantaneous value of the alternating quantity involved.

Phasor vectors have an arrowhead on one end which signifies the maximum value of the quantity (voltage or current). Generally, vectors are assumed to pivot at one end around a fixed zero point (the "point of origin"), with the arrow end rotating anti-clockwise at an angular velocity $\omega$ of one full revolution for each cycle.

## Pure AC Circuits

### Resistive

In purely resistive AC circuits, the current and applied voltage are **in phase**.

> [!WARNING] This is the only time in AC circuits you can apply Ohm's Law

> [!figure] ![[Resistive phasors.png]]
> © University of Southampton [^1]
### Inductors

In a purely inductive AC circuit, the current $I_{L}$ lags the applied voltage by $90^{\circ}$ (i.e. $\frac{\pi}{2} rads$)

> [!figure] ![[Inductive phasors.png]]
> © University of Southampton [^1]


The opposition to the flow of alternating current is called the **inductive resistance**, $X_{L}$.

$$
X_{L}=\frac{V_{L}}{I_{L}}=2\pi fL \text{ Ohms}
$$

### Capacitive

In a purely capacitive AC circuit, the current $I_{C}$ leads the applied voltage $V_{C}$ by $90^{\circ}$

> [!figure] ![[Capacitive phasors.png]]
> © University of Southampton [^1]

The opposition to the flow of alternating current is the capacitive reactance $X_{C}$

$$
X_{C}=\frac{V_{C}}{I_{C}}=\frac{1}{2\pi fC} \text{ Ohms}
$$



## Reactance

Reactance is used to compute amplitude and phase changes of sinusoidal alternating current going through a circuit element.

Like resistance, reactance is measured in Ohms, with positive values indicating inductive resistance and negative values indicating capacitive reactance. It is denoted by $X$.

An ideal resistor has zero reactance, whereas ideal inductors and capacitors have zero resistance. As frequency increases, inductive reactance increases and capacitive reactance decreases. 

## CIVIL & Impedance

The relationship between voltage and current for inductive and capacitive circuits can be summarised:

> In a capacitor (C), the current (I) is ahead of the voltage (V), which is ahead of the current (I) for the inductor (L)

When combining the effects of resistors, capacitors and inductors, impedance is combined given the Z symbol and measured in Ohms:

$$
Z=\sqrt{ R^2+X_{C}^2 }
$$

[^1]: https://sotonac.sharepoint.com/:p:/t/ElectricalElectronicEngineering2021-22/EVqUSqZrJLBPl081lgz5BcABi7L_DQEO_iOI_yd15mHeGA?e=fwnA1K
