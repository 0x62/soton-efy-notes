---
tags:
  - electronics
module: Electricity & Electronics
component: Electronics
permalink: fy/electricity-electronics/electronics-6
---
## Conductive Materials

Materials may be classified as conductors, semiconductors, or insulators. THe classification depends on the value of resistivity of the material.

| Classification | Material   | Conductivity        |
| -------------- | ---------- | ------------------- |
| Conductors     | Aluminimum | $2.7\times 10^{-8}$ |
| Conductors     | Brass      | $8\times 10^{-8}$   |
| Conductors     | Copper     | $1.7\times 10^{-8}$ |
| Semiconductors | Silicon    | $2.3\times 10^{3}$  |
| Semiconductors | Germanium  | $0.45$              |
| Insulators     | Glass      | $10\times 10^{10}$  |
| Insulators     | PVC        | $10\times 10^{13}$  |
| Insulators     | Rubber     | $10\times 10^{12}$  |

In general, over a limited range of temperatures and with an increase of temperature:

- The resistance of a conductor increases
- The resistance of a semiconductor decreases
- The resistance of an insulator remains approximately constant

As the temperature of a semiconductor material is raised above room temperature, the resistivity is reduced and ultimately a point is reached where they become conductors. For this reason, silicon should not operate at a working temperature in excess of 150 to 200 degrees (C) and germanium should not operate in excess of 75 to 90 degrees (depending on purity).

## Doping of Semiconductors

Atoms contain both negative charge carriers (electronics) and positive charge carriers (protons). Electrons carry a single unit of negative electrical charge while protons carry out a single unit of positive charge. Since atoms normally contain an equal number of electrons and protons, the net charge present will be zero.

Electrons are in constant motion as they orbit around the nucleus of the atoms and are organised into shells. If the valence shells contain the maximum number of electronics possible, the electrons are rigidly bonded together, and the material is said to be an insulator.

If the valence shell does not have it's full complement of electrons, the electrons can be easily detached and the material has the properties associated with an electrical conductor.

In its pure state, silicon is an insulator. However, if an atom of a different element (e.g an impurity) is introduced which has give electrons in its valence shell, a surplus electron will be added and present. These free electrons become available for use as charge carriers and can be made to move through the lattice by applying an external potential difference to the material.

This addition of foreign atoms in the regular lattice of pure silicon produces changes in their electrical properties, and is known as doping.

When pure material is doped with an impurity with five electrons in its valence shell, it will become **negative (n-type)** semiconductor.  When doped with an impurity with three electrons, it becomes a **positive (p-type)** semiconductor.
### P-Type (Positive) Semiconductors

> [!figure] ![[Silicon doping 2.png]]
> © University of Southampton [^1]

If the structure is doped with 3 electrons in their valence band, there will be holes in the lattice where an electron is **missing**. The absence of an electron creates the effect of a positive charge. The holes can conduct current, as they can accept electrons from adjacent atoms, effectively moving the 'hole' over to the next atom. 

### N-Type (Negative) Semiconductors

> [!figure] ![[Silicon doping.png]]
> © University of Southampton [^1]

Conversely, if the structude is doped with atoms that have 5 electrons, there will be an 'extra' electron in the lattice which is available for conduction. A tiny amount of n-type or p-type doping turns a silicon crystal from a good insulator into a viable conductor. 

## Diodes

The diode is a two-terminal device, having an anode and a cathode terminal. There are three main diodes:

- Silicon diodes, used in rectification
- Zener diodes, used as voltage regulators
- Light-Emitting Diodes (LEDs), used as indicators

The most common diode is a **silicon diode**. The defining characteristic of a diode is that it has a small (ideally zero) resistance to current flow in one direction, and a very high (ideally infinite) resistance in the reverse direction.

> [!figure] ![[Diode.png]]
> © University of Southampton [^1]

The P-N junction is a piece of semiconductor in which part of the material is **p-type** and part is **n-type**. In this scenario, we assume that a hole is a positive charge carrier, and an electron is a negative charge carrier. 

> [!figure] ![[Transistor chemistry.png]]
> © University of Southampton [^1]

### Transfer Characteristic

A transfer characteristic describes how the output of an electronic component or circuit changes in response to its input. It is often represented as a graph showing the relationship between input voltage and output voltage (or current).

> [!figure] ![[Ttransfer characteristic.png]]
> © University of Southampton [^1]


> [!INFO] Possible exam questions
> - Describe how a diode works, and what is its forward voltage drop
> - Describe a half-wave rectifier, and explain how it works

## Half-wave Rectifier

The electricity supply in the UK is based on a 230V alternative current. Many electronic circuits require a much lower voltage direct current supply. If a alternative current supply is to be used with modern electronic circuits, they need a way of changing AC into DC.

> [!figure] ![[Attachments/Half wave rectifier 2.png]]
> © University of Southampton [^1]

In order to generate a steady DC output from one of the circuits shown in the figure above, it is necessary to add a capacitor to the basic rectifier:

> [!figure] ![[Half wave rectifier 2 1.png]]
> © University of Southampton [^1]

Each time the supply voltage goes through its positive cycle, it will charge the capacitor to almost its peak value. When the supply reverses, the capacitor will discharge, this maintaining the flow of current. The dotted line represents the continuous voltage across the load supplied by the discharging capacitor.

> [!figure] ![[Half wave rectifier.png]]
> © University of Southampton [^1]

## LEDs

Like power diodes and Zener diodes, light-emitting diodes (LEDs) are based on semiconductor P-N junctions, but use compound semiconductors based on elements such as gallium, indium and phosphorus. 

When they conduct a current, they emit light of a colour that depends on the exact composition of the compound semiconductor. They are used as highly efficient indicator lamps.

Use in forward-bias mode, the forward voltage drop across them depends on their chemical composition:

| Color  | Forward Voltage Drop |
| ------ | -------------------- |
| Red    | ~2.2V                |
| Yellow | ~2V                  |
| Blue   | ~3.2V                |

### Example

The LED acts as a power-on indicator for a system which operates on a 12V DC power supply. When lit, the LED should pass a maximum current of 10mA. It has a forward voltage drop of 2.2V.

> [!figure] ![[LED circuit example.png]]
> © University of Southampton [^1]

Calculate:

- The voltage drop over R
- The minimum value of resistance R to protect the LED from excess current
- The power dissipated in the LED when lit
- Choose a suitable preferred value for R from the E24 series of resistors

**Voltage drop over R**
[[Foundation Year/Electricity & Electronics/Circuit Theory (3)#Kirchhoff's Voltage Law circuit-theory/kvl|KVL]] states that the total voltage is shared between the resistor and the LED.

$$
V_{R}=V_{supply}-V_{LED} \qquad V_{R}=12-2.2=9.8V
$$

**Minimum value of resistance R**
To protect the LED, we need to make sure current does not exceed 10mA. Using [[Foundation Year/Electricity & Electronics/Circuit Theory (2)#Ohm's Law|Ohm's Law]]:

$$
R=\frac{V_{R}}{I_{LED}}=\frac{9.8}{0.01}=980\Omega
$$
**Power dissipated**
Power is the product of voltage and current.

$$
P_{LED}=V_{LED}\times I_{LED}=2.2\times 0.01=22\text{ mW}
$$

**Suitable preferred value for R**
Round up to the nearest standard value, which is $1k\ \Omega$.

## Transistors

Transistors are three terminal devices which can perform two functions, and a fundamental to electronic systems - *amplification* and *switching*. There are two main types of transistors, bipolar and *field effective*.

Each transistor has three regions, called *collector*, *base* and *emitter*. The NPN transistor looks like two diodes, as shown in the diagram:

> [!figure] ![[Transistor example.png]]
> © University of Southampton [^1]

The collector current, $I_{C}$ is typically around fifty times bigger than the base current, $I_{B}$. Emitter current, $I_{E}$, is equal to the cum of the base and collector currents. Since the base current is much smaller than the collector current, the emitter and collector currents are roughly equal.

The base current, $I_{B}$, controls the resistance between the collector and emitter, and hence the collector current $I_{C}$. The higher the base current, the lower the collector-emitter resistance and so the greater the collector current $I_{C}$.

The gradient of the graph in the linear region is known as the current gain, $h_{FE}$ of the transistor. Therefore, $I_{C}=h_{FE}\times I_{B}$.

### The Transistor Switch

A typical circuit may look like this, where the two voltages associated with the transistor are the base-emitter voltage $V_{BE}$ and the collector-emitter voltage $V_{CE}$, also known as $V_{OUT}$. It also usually uses a base resistor, to protect the transistor from excessive currents, and a load (shown as a resistor). It is connected between the positive supply rail and the collector.

> [!figure] ![[Transistor circuit example.png]]
> © University of Southampton [^1]


> [!NOTE] Low-side switch
> This is a form of low-side switch, as the power path being 'switched' is the connection to ground. 

### Voltage Transfer Characteristic

The graph below shows the relationship between $V_{OUT}$ and $V_{IN}$ for the transistor and describes a typical transistor behaviour.

> [!figure] ![[Voltage transfer chart.png]]
> © University of Southampton [^1]

In the "off region", for $V_{IN}$ between 0 and 0.7V:

- No base current flows
- No collector current flows
- The load voltage ~0V
- $V_{OUT}$ ~12V. The transistor is switched off.

In the linear region, so called due to the relationship between the base current and collector, when $V_{IN}$ incases above 0.7V:

- Base current starts to flow
- Larger collector current flows through the load
- Voltage across the load increases so $V_{OUT}$ decreases

In the "on" region, also known as saturation:

- As $V_{IN}$ continues to increase, $V_{OUT}$ continues to fall
- The collector current reaches a maximum value and further changes to $V_{IN}$ have no effect
- At this point the transistor is saturated
- In practice, $V_{OUT}$ is around 0.2V and so the load voltage is just less than the power supply voltage

When used a a switch, the transistor must operate only in the cut-off and saturation regions, avoiding the linear region. The linear region is avoided because:

- The load will not have the full supply voltage across it
- $V_{CE}$ is not zero and neither is $I_{C}$, meaning that power is dissipated in the collector-emitter junction, which can cause the transistor to overheat

To a good approximation, the following relationships are true and can be used in transistor calculations:

$$
V_{IN}<0.7V \qquad \Rightarrow \qquad V_{BE}=V_{IN} \qquad V_{CE}=V_{S}
$$
$$
V_{IN}>0.7V \qquad \Rightarrow \qquad V_{BE}=0.7 \qquad V_{CE}=0
$$

### Example

> [!figure] ![[Transistor circuit example 2.png]]
> © University of Southampton [^1]

The temperature-sensing circuit switches on a warning buzzer when the temperature in a greenhouse gets too high. The circuit uses a transistor with a current gain, $h_{FE}=400$. The resistance of the buzzer is $30\Omega$. When the transistor is just saturated, calculate:

- The collector current, $I_{C}$
- The base current, $I_{B}$
- At a different temperature, the base current $I_{B}=0.5mA$
	- Calculate the new value of the collector current, $I_{C}$
	- Calculate the voltage across the buzzer
	- The transistor became very hot and the buzzer was quiet. Why?

**Saturated Region**
When the transistor is saturated, it behaves like a closed switch. We assume the voltage across the transistor $V_{OUT}=0V$.

$$
I_{C}=\frac{V_{supply}}{R_{buzzer}}=\frac{9}{30}=300mA
$$
$$
I_{B}=\frac{I_{C}}{h_{FE}}=\frac{0.3}{400}=0.75mA
$$

**Linear Region**
At this lower current, the transistor is no longer saturated. It is partially open.

$$
I_{C}=h_{FE}\times I_{B}=400\times 0.0005=200mA
$$
$$
V_{buzzer}=I_{C}\times R_{buzzer}=0.2\times 30=6V
$$

The transistor is stuck in the linear region, which means the buzzer only receives 6V of the supply. The remaining voltage is dropped across the transistor, which is emitted as heat energy.


[^1]: https://sotonac.sharepoint.com/:p:/t/ElectricalElectronicEngineering2021-22/ER4x8rFp0iBPiYUMZhrq6hsBHmyZKSPDOo6AzxKneEALsg?e=PhpPux
