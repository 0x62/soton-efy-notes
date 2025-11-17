---
tags:
  - circuit-theory
module: Electricity & Electronics
component: Circuit Theory
permalink: electricity-electronics/circuit-theory-7
---

## Inductors

An inductor is a passive component which **opposes sudden changes in current**. It stores energy in a magnetic field, then releases that energy back when the current changes. Inductors are often called *coils* or *chokes* and are represented by the letter $L$ in circuits.

Inductors are made by wrapping insulated wire into a coil around code (typically iron, but there are others).

Calculations for inductance of multiple inductors in series/parallel have the same form as resistors (**calculations are non-examinable**). If joined in this way, they must be shielded, or their fields can interact, known as mutual inductance. Sometimes this can be desired (e.g transformers).

### Transient Behaviour

When current through an inductor increases, the magnetic field created induces a voltage that opposes the change in current, known as **back EMF**. Back EMF acts in the opposite direction to the applied voltage.

At this stage the inductor behaves like a load, because electrical energy is being converted and stored in its magnetic field. This phase is known as charging (like capacitors). As the inductor charges, it's magnetic energy increases proportional to current:

$$
E=\frac{1}{2}LI^2
$$

When the current decreases, the magnetic field collapses inducing a voltage which aids **in the current's direction**, effectively trying to keep current flowing. It acts as a temporary power source to the rest of the circuit. This phase is discharging. 

During this brief transient interval, the current and voltage cannot change instantaneously. Instead, they adjust gradually, resisting these sudden changes by generating an induced EMF according to:
$$
V=L \frac{di}{dt}
$$

The faster the current changes, the greater the induced EMF. The changing magnetic field induces an electrical property called **inductance** ($L$), defined as **the ratio of induced voltage to the rate of change of current**. 

When EMF is induced in the same circuit in which the current is changing, the effect is known as **self-inductance** (as opposed to transformers, where the EMF is induced in a nearby circuit).

### Inductance

Inductance measures how effectively an inductor can store energy and oppose changes in current. The unit of inductance is the Henry ($H$). 

An inductor has an inductance of 1 Henry if an EMF of 1 volt is induced when the current though it changes at a rate of 1 ampere per second. 

Typical inductors have values from $1 \micro H$ (high-frequency circuits) to around $20H$ (power and filter applications). 

## Resistor-Inductor Circuits

![[Resistor-inductor circuit.png]]

When switch $S$ is first closed at $t=0$, the entire supply voltage $V$ appears entirely across the coil. However, the current ($i$, instantaneous) cannot rise instantly to its final steady state (according to $V=IR$). 

This is because the inductor produces an opposing voltage, back EMF:

$$
e_{L}=-L \frac{di}{dt}
$$

The negative sign shows that this induced EMF opposes the change in current. As a result, the current builds up gradually, not instantaneously, following an exponential curve. Over time, the back EMF decreases as the current stabilises and the inductor reaches its steady state.

At the exact moment the switch is closed, the current cannot change instantly. This means the rate of change of current is extremely high, and the coil produces an induced EMF that is **equal in magnitude and opposite in direction** to the applied voltage. 

KVL states $V=v_{L} + v_{R}$, and at this instant $v_{L}=V$ and $v_{R}=0$. The entire supply voltage appears across the inductor, and no voltage across the resistor because **no current is flowing yet**.

Given that the voltage across the inductor is a transient, and thus the voltage across the resistor must also change, we can rewrite KVL (for $t\geq 0$) as:

$$
V=L \frac{di}{dt}+iR
$$

Where $iR$ is Ohm's Law using the instantaneous current.

After a few seconds, the circuit reaches its steady state where the inductor is storing the maximum energy it can, according to its inductance. At this point:

- Current has risen to its maximum value
- The rate of change is zero, so no EMF is induced in the inductor
- The entire supply voltage appears across the resistor (the inductor behaves like a wire)

Therefore the steady-state current is $I=\frac{V}{R}$.

### LR Time Constant

The time constant $\tau$ of an LR circuit defines how quickly the current builds up or decays when a voltage is applied or removed. It is given by:

$$
\tau=\frac{L}{R}\text{ seconds}
$$

If the current in the coil continued changing at its initial rate, it would reach its final value one time constant. However, as the current increases exponentially, it approaches its maximum value gradually and is considered to be reached after five time constants.

### LR Charging Transients 

At any instant during charging:

$$
V_{L}=V \cdot e^{\frac{-t}{\tau}} \qquad V_{R}=V(1-e^{\frac{-t}{\tau}}) \qquad i=I(1-e^{\frac{-t}{\tau}})
$$

Where $\tau=\frac{L}{R}$

### LR Discharging Transients

When the switch is opened, the current through the coil tries to drop to zero. However, the collapsing magnetic field induces a large EMF, in a direction that opposes the change, keeping the current flowing in the same direction. The induced voltage can be much greater than the original supply voltage.

The current decays rapidly, following an exponential decrease. From KVL, we know that $V=V_{L}+V_{R}$ so when the supply voltage is removed, $0=V_{L}+V_{R}$ so $V_{L}=-V_{R}$. 

This means that the inductor voltage and resistor voltage are equal in magnitude but opposite in direction. The inductor reverses polarity to maintain current $i$ flow in the same direction.

Since $V_{R}=iR$, the resistor voltage also decays exponentially, and the inductor voltage follows the same exponential decay but with opposite polarity.

At any instant during discharging:

$$
i=Ie^{\frac{-t}{\tau}} \qquad V_{R}=V_{0} \cdot e^{\frac{-t}{\tau}} \qquad V_{L}=-V_{R} \qquad e=iR
$$
Where:

- $I=\frac{V}{R}$ 
- $e$ is the instantaneous induced EMF across the inductor



## Thevenin's Theorem

Thevenin's Theorem states that it is possible to simplify any linear circuit, no matter how complex, to an equivalent circuit with a single voltage source and series resistance connected to a load. 

It is especially useful in the circuit analysis of power or battery systems, and other interconnected resistive circuits where it will have an effect on the adjoining part of the circuit.

### Applying Thevenin's Theorem

1. Remove the load resistor $R$ from the branch where the current is to be found
2. Deactivate all sources of EMF
	- Replace voltage sources with a short circuit
	- Replace current sources with an open circuit
	- Include any internal resistances, if given
3. Determine the Thevenin resistance $R_{th}$ by "looking in" at the open terminals
4. Determine the open-circuit voltage $E_{th}$ across those terminals
5. Reattach the load resistor $R$ and calculate current with:

$$
I=\frac{E_{th}}{R_{th}+R}
$$

### Worked Example

Use Thevenin's theorem to find the current flowing in $R_{L}$

> [!figure] ![[Thevenin theorem step 1.png]]
> © University of Southampton [^1]

#### Step 1

Remove $R_{L}$ and the power supply, then obtain Thevenin resistance $R_{th}$ by analysing the circuit between terminals A and B. If the supply has internal resistance, leave it there even through the source is removed.

> [!figure] ![[Thevenin theorem step 2.png]]
> © University of Southampton [^1]

We can see that this circuit forms a voltage divider, with another resistor in series.

$$
R_{th}=R_{3}+\frac{R_{1}R_{2}}{R_{1}+R_{2}}
$$

$$
R_{th}=18+\frac{30 \times 20}{30+20}=\boxed{30 \Omega}
$$

#### Step 2

Keep $R_{L}$ removed, and put the supply $V_{s}$ back to work out $V_{th}$. In this example, we can now determine $V_{t}$ between A and B $\rightarrow \ R_{3}$ carriest no current, therefore $V_{th}$ is equal to the voltage across $R_{2}$.

$$
V_{th}=V_{s}\left( \frac{R_{2}}{R_{1}+R_{2}} \right)
$$
$$
V_{th}=50\left( \frac{20}{30+20} \right)=\boxed{20V}
$$

> [!figure] ![[Thevenin theorem step 3.png]]
> © University of Southampton [^1]

#### Step 3

Draw the Thevenin equivalent circuit and replace the load resistor back in. Calculate load current and voltage.

> [!figure] ![[Thevenin theorem step 4.png]]
> © University of Southampton [^1]

$$
I=\frac{V_{T}}{R_{T}+R_{L}}=\frac{20}{30+10}=\boxed{0.5\ A}
$$

$$
V=IR_{L}=0.5 \times 10=\boxed{5V}
$$




[^1]: https://sotonac.sharepoint.com/:p:/t/ElectricalElectronicEngineering2021-22/EQdoZiigN85CgpNNHBH2F1oBcQe4Ukmih13bYV7yb82gtg?e=hCPDub
