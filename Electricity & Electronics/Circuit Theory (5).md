---
tags:
  - circuit-theory
module: Electricity & Electronics
component: Circuit Theory
permalink: electricity-electronics/circuit-theory-5
---

## Capacitors

Capacitors are electronic components that store electrical energy in an electric field. They work similarly to batteries but can charge and discharge much more rapidly, though they typically store less total energy.

A capacitor consists of two conductive metal plates separated by an insulating material called a **dielectric**. Dielectrics are materials that become polarised when exposed to an electric field.

When you connect a power source to an uncharged capacitor, it separates equal amounts of opposite charge ($+Q$ and $-Q$) onto the two plates. Electrons accumulate on one plate, while an equivalent number of electrons on the other plate are removed.

The capacitor stores energy by keeping these opposite charges apart. Since positive and negative charges attract each other, separating them stores potential energy that gets released when they reunite. Once the capacitor is fully charged, its voltage matches the power supply voltage.

Capacitors are used to create energy storage banks, stabilise voltage levels across components, and filter out electrical noise.
## Capacitance

**Capacitance** ($C$) is the term for a capacitor's ability to store charge. Any two electrical conductors near each other (even wires) have some capacitance, but capacitors are specifically designed to provide a controlled amount of capacitance.

Capacitance is measured in **farads** ($F$). One farad is defined as the capacitance that stores one coulomb of charge when one volt of potential difference is applied across it.

> [!WARNING] You will **almost always** be dealing with $\micro F$ at most!
> $1F$ is a **lot** of charge. [This is what a 1F capacitor looks like...](https://u-mercari-images.mercdn.net/photos/m48235570049_1.jpg)

> [!figure] ![[XKCD 3106.png]]
> [xkcd 3106: Farads](https://xkcd.com/3106/)

For any given capacitor, the charge stored $Q$ is directly proportional to the potential difference across it.

$$
C=\frac{Q}{V} \qquad Q=CV
$$

The energy stored in a capacitor is stored as electric potential energy. The average voltage stored on the capacitor during the charging process is $\frac{V}{2}$, so the energy stored is:

$$
E=\frac{1}{2}QV
$$

You can rearrange these two equations to get the following substitutions:

$$
E=\frac{1}{2}CV^2 \qquad E=\frac{1}{2} \times \frac{Q^2}{C}
$$

## Capacitors in Series

> [!figure] ![[Capacitors in series.png]]
> © University of Southampton [^1]

In a series configuration, the charge on each capacitor must be equal ($Q$). This is because the charge stored on one capacitor can only come from the adjacent capacitor in the chain. You can reach this same conclusion by recognizing that current must be constant in a series circuit, and since $Q = I \times t$, the charge must be the same on each capacitor.

Consider the circuit: $C_{2}$ connects to the opposite plates of $C_{1}$ and $C_{3}$, which isolates it from the rest of the circuit. This effectively reduces the plate area to match the smallest capacitance in the series. As a result, the voltage drop across each capacitor varies depending on its individual capacitance value.

By using [[Electricity & Electronics/Circuit Theory (3)#Kirchhoff's Voltage Law|KVL]], we can work out:

$$
V_{AB}=V_{C1}+V_{C2}+V_{C3}
$$

Since $Q=CV$, rearranging for $V=\frac{Q}{C}$ and substituting:

$$
V_{C1}=\frac{Q_{T}}{C_{1}} \qquad V_{C2}=\frac{Q_{T}}{C_{2}} \qquad V_{C3}=\frac{Q_{T}}{C_{3}}
$$

$$
\frac{Q_{T}}{C_{T}}=\frac{Q_{T}}{C_{1}}+\frac{Q_{T}}{C_{2}}+\frac{Q_{T}}{C_{3}}
$$

Divide by $Q$:

$$
\frac{1}{C_{T}}=\frac{1}{C_{1}}+\frac{1}{C_{2}}+\frac{1}{C_{3}}
$$

And rearrange for $C_{T}$

$$
C_{T}=\frac{1}{\frac{1}{C_{1}}+\frac{1}{C_{2}}+\frac{1}{C_{3}}}
$$


> [!TIP] This is the same formula as for [[Electricity & Electronics/Circuit Theory (2)#Resistors in Parallel|resistors in parallel]]

When there are only two capacitors in series, we can also use the product over sum formula:

$$
C_{T}=\frac{C_{1}C_{2}}{C_{1}+C_{2}}
$$

## Capacitors in Parallel

Like resistors, when in parallel, the voltage across each capacitor is the same. Although voltage is the same, each capacitor can store a different amount of charge depending on it's capacitance. The total charge stored is **the sum of individual charges**.

When in parallel, the total (or effective) capacitance is the sum $C_{eff}=C_{1}+C_{2}+C_{3}$.


[^1]: https://sotonac.sharepoint.com/:p:/t/ElectricalElectronicEngineering2021-22/EUKAB752kAdKtgpg35ZhhwsBBa8Xyqk3qX84UXEpETQ3jw
