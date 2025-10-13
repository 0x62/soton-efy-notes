---
tags:
  - circuit-theory
module: Electricity & Electronics
component: Circuit Theory
permalink: electricity-electronics/circuit-theory-3
---

## Terminal Voltage

All voltage sources have two parts – a source of electrical energy that has an [[Circuit Theory (1)#Electromotive Force|electromotive force]] (EMF), and an internal [[Circuit Theory (1)#Resistance|resistance]] $r$.

![[Circuit Theory (1)#Electromotive Force]]

EMF is the potential difference of a source, measured across the terminals when **no current is flowing**. The internal resistance $r$ affects the output voltage when there is a current ($V=IR$).

**Terminal voltage** ($V$) is the potential difference across the positive and negative terminals of a battery. When multiple voltage sources are in series, their internal resistances add and their EMFs sum algebraically.

$$
V = EMF-Ir
$$

> [!TIP] When there is no current $I=0$ and $EMF = V$. When there is current, $V < EMF$

## Maximum Power Transfer

A *load* in electrical terms is any component added to a circuit which consumes power (e.g a resistor). We can represent any load as a resistor having resistance $R_{l}\ \Omega$. 

The **maximum power transfer theorem** states that:

> DC voltage source will deliver maximum power only when the load resistance $R_{l}$ is equal to the source resistance $R_{s}$.

* When $R_{l}$ is too small: more current flows, but most voltage drops across the source resistance so the load gets less power
* When $R_{l}$ is too large: more voltage appears across the load, but very little current flows so again the load gets less power


> [!WARNING] Practical application
> At maximum power transfer ($R_{l}=R_{s}$) **the efficiency is only 50%** because half the power is dissipated in the source resistance


### But why?

Consider voltage source $V$, internal resistance $R_{s}$ and load resistance $R_{l}$. 

The current flowing through the circuit is $I=\frac{V}{R_{s}+R_{l}}$. The power delivered to the load is $P=I^2 \times R_{l}$. Substitute the current:

$$
P=\frac{V^2 \times R_{l}}{(R_{s}+R_{l})^2}
$$

Using calculus, we can prove $P_{max}$ is reached when $R_{s}=R_{l}$.

Take the derivative of $P$ with respect to $R_l$ and set it equal to zero:

$$
\frac{dP}{dR_l} = 0
$$

Using the quotient rule: 

$$
\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}
$$

Where $u = V^2 R_L$ and $v = (R_s + R_L)^2$

$$
\frac{dP}{dR_l} = \frac{(R_s + R_l)^2 \cdot V^2 - V^2 R_l \cdot 2(R_s + R_l)}{(R_s + R_l)^4}
$$

Simplifying the numerator:

$$
\frac{dP}{dR_l} = V^2 \cdot \frac{(R_s + R_l)^2 - 2R_l(R_s + R_l)}{(R_s + R_l)^4}
$$

Factor out $(R_s + R_l)$:

$$
\frac{dP}{dR_l} = V^2 \cdot \frac{(R_s + R_l) - 2R_l}{(R_s + R_l)^3}
$$

$$
\frac{dP}{dR_l} = V^2 \cdot \frac{R_s - R_l}{(R_s + R_l)^3}
$$
Setting the derivative equal to zero:

$$
\frac{V^2(R_s - R_l)}{(R_s + R_l)^3} = 0
$$

Since $V^2 \neq 0$ and $(R_s + R_L)^3 \neq 0$:

$$
R_s - R_l = 0 \qquad \boxed{R_{l}=R_{s}}
$$


## Measuring Devices

A multimeter is an instrument that can measure multiple electrical properties. There are three components:

* Voltmeter for measuring voltage
* Ohmmeter for resistance measurement
* Ammeter for measuring current

### Ammeter

The ammeter (also known as ampere meter) is used for measurement of current. It must be connected **in series**, breaking the circuit and inserting the ammeter in the gap. Connecting an ammeter adds resistance (from the device itself), which will change the current and affect your measurement.

> [!NOTE] An ideal ammeter would have **zero resistance**, so it doesn't affect the current being measured

Ammeters are protected from excessive current by a small fuse. If the ammeter is connected across a substantial voltage source, the resultant surge would blow the fuse. 

### Voltmeter

When using a voltmeter, the connection must be made **in parallel** with the part of the circuit across which the voltage measurement is to be taken (e.g across a resistor). Connecting a voltmeter also adds a resistance, which affects the circuit behaviour.

> [!NOTE] An ideal voltmeter would have **infinite resistance**, so no current flows through it and it only measures voltage without changing the circuit

Remember that resistors in parallel result in lower resistance than either node individually (see [[Circuit Theory (2)#Resistors in Parallel|resistors in parallel]]). This means when using a voltmeter the equivalent resistance is lower, resulting in more current flowing.

Say you're measuring voltage across a $1M\Omega$ resistor and your voltmeter has $10M\Omega$ internal resistance. With the voltmeter in parallel, $R_{eff}=\frac{1\times10}{1+10}=0.91M\Omega$.

### Ohmmeter

Resistance can only be accurately measured across components when they are **disconnected from the circuit**. If you attempt to measure the resistance across a component while in a circuit, you'll see the total effective resistance across all branches of the circuit connected to that component.

> [!TIP] Calculate $R$ across a component by measuring $V$ and $I$, then use [[Circuit Theory (2)#Ohm's Law|Ohm's Law]]


## Wheatstone Bridge

A Wheatstone Bridge is an alternative method of measuring resistance by using two [[Circuit Theory (2)#Voltage Divider|voltage dividers]]:

* One has two precisely known fixed resistors, $R_{1}$ and $R_{2}$
* The other has unknown resistor $R_{x}$ in series with an variable resistor $R_{s}$

![[Wheatstone bridge.png]]

By adjusting $R_{s}$ until $V_1$ and $V_{x}$ are **balanced**, we can determine $R_{x}$. To determine if the bridge is **balanced**, we measure the voltage $V_{out}$ between the two bridges (e.g with one probe between $R_{1}$ and $R_{2}$, and the other between $R_{x}$ and $R_{s}$).

**The bridge is balanced if $V_{out}=0V$**.

For a balanced bridge, the voltage across $R_{1}$ and $R_{2}$ is the same. This also applies to voltage across $R_{s}$ and $R_{x}$. Therefore:

$$
V_{R1}=V_{R2} \qquad V_{R3}=V_{R4}
$$

The ratios can be written as:

$$
\frac{V_{R1}}{V_{R3}}=\frac{V_{R2}}{V_{R4}}
$$

From Ohm's Law, we get:

$$
\frac{I_{1}R_{1}}{I_{3}R_{3}}=\frac{I_{2}R_{2}}{I_{4}R_{4}}
$$

Since $I_{1}=I_{3}$ and $I_{2}=I_{4}$ (from [[Circuit Theory (2)#Kirchhoff's Current Law|KCL]]) we get:

$$
\frac{R_{1}}{R_{3}}=\frac{R_{2}}{R_{4}}
$$

Any one of the resistors could be the unknown component. Let's call it $R_{x}$ and assume that it is $R_{1}$ in this circuit:

$$
\frac{R_{x}}{R_{3}}=\frac{R_{2}}{R_{4}}
$$

Since $\frac{R_{2}}{R_4}$ is fixed, we need to adjust $R_{3}$ as the variable resistor, $R_{s}$:

$$
R_{x}=R_{s}\times\frac{R_{2}}{R_4}
$$

The Wheatstone Bridge is often used with **transducers** to measure physical quantities like temperature, pressure and strain. They're commonly used in applications where small changes in resistance are to be measured in sensors. This is used to convert a change in resistance to a change in voltage of a transducer.

For example, to measure/use the change in resistance of a thermistor (a type of resistor whose resistance is dependant on temperature) by converting it to a change in voltage.


## Kirchhoff's Current Law

We briefly touched on Kirchhoff's Current Law (KCL) in [[Circuit Theory (2)#Kirchhoff's Current Law|week 2]]. To recap:

> The total current entering a circuits junction is exactly equal to the total current leaving the same junction

In other words, $I_{t}=I_{1}+I_{2}+I_{3}+\dots$

![[KCL T junction.png]]

In the diagram below, let all the currents entering the junction be positive values, and all the currents leaving the junction be negative values. 

![[KCL Y junction.png]]

$$
I_{1}+(-I_{2})+(-I_{3})=0
$$

## Kirchhoff's Voltage Law

KVL states that the sum of voltages in a loop is equal to the [[Circuit Theory (1)#Electromotive Force|EMF]] of that loop. Put formally:

> In a closed loop, the algebraic sum of the product of current and resistance in each part of the circuit is equal to the resultant EMF in the loop

The *product of current and resistance* is voltage. Translated, KVL simply states that the **sum of voltage drops around a closed loop is equal to the EMF**. We can express this as:

$$
EMF = IR_{1}+IR_{2}
$$

![[KVL example.png]]

**Another way to look at it is the sum of potential differences in any loop must equal 0V**. We can use this to get to [[Circuit Theory (2)#Ohm's Law|Ohm's Law]] from KVL.

$$
V_{R1}=I\times R_{1} \qquad V_{R2}=I\times R_{2}
$$

$$
V_{s}+(-IR_{1})+(-IR_{2})=0
$$

$$
V_{s}=IR_{1}+IR_{2}
$$

$$
V_{s}=I(R_{1}+R_{2})
$$

$$
V_{s}=IR_{t}
$$
