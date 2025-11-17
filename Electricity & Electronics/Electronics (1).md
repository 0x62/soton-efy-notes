---
tags:
  - electronics
module: Electricity & Electronics
component: Electronics
permalink: electricity-electronics/electronics-1
---
## Introduction to Electronics

Electronics is the field that studies/uses systems which actively control the flow of electricity, through the use of semiconductors, sensors, switches and logic circuits. Most electronic systems follow a simple pattern:

- They start with an input (e.g sensor, switch, button, signal)
- They process or manipulate that information
- They create an output action (lighting an LED, moving a motor etc)

Electronic systems are used for 2 major purposes:

- Controlling and processing information
- Converting, distributing or conditioning electrical power

They can broadly be divided into **analogue** and **digital** systems, though most devices use a mix of both. 

### Analogue

- Continuous range of voltages
- Signals vary smoothly over time
- They rely heavily on the fundamental components we've seen so far
- Common in audio processing, sensors, power and RF circuits

### Digital

- Use discrete voltage levels (usually *high* and *low*, essentially binary "1" and "0")
- Built from transistors and logic gates
- Combined together to form microcontrollers and digital ICs

Digital circuits tend to be easier to design, however they are often a bit more expensive than an equally tasked analogue circuit. At the core of many digital circuits is a **microcontroller**, which is essentially a tiny computer containing one of more CPUs, memory, programmable input/output and built in peripherals like timers, ADCs and DACs.

Microcontrollers often need to interact with analogue circuits, and they do this through tools like:

- ADCs (Analog-to-Digital Converters)
- DACs (Digital-to-Analogue Converters)
- PWM (Pulse-Width Modulation)

ADCs and DACs convert analog signals (a continuous waveform) into a sampled stream of binary numbers. These digital values can then be analysed and processed by digital systems. 

## Digital Electronics

Digital electronics often uses components like **transistors** to act as digital switches. Transistors function exactly like a regular switch, controlling flow of current from one terminal to another, but instead of being physically actuated they are turned on or off by flow of current to a 3rd terminal.

The ability to switch on or off form the basics of digital logic - on representing "1" and off representing "0", where the voltage purely indicates the **state**. Usually the current through these devices is very low, as the purpose is to transfer *information* rather than power.

We can combine these boolean states ("1" or "0") with logic gates (AND, OR, NOT, XOR) to perform operations on binary signals. By combining multiple logic gates, we can build more complex systems up to and including the core of a microcontroller or CPU.

### Integrated Circuits & Packages

Digital electronics often come as integrated circuits (ICs), meaning all resistors, transistors and internal connections are built on a single piece of semiconductor. The semiconductor is then sealed inside a housing, with external pins available for connections.

> [!figure] ![[DIP package.jpg]]
> 14-pin DIP package (Wikimedia Commons) [^1]

We will likely be dealing with DIP packages, as they are convenient for breadboards, but most modern PCBs use SMD packages like QFN, BGA etc, but these packages are not convenient for prototyping.

> [!figure] ![[QFN-16 package.jpeg]]
> Battery management IC ([BQ24074](https://www.ti.com/product/BQ24074)) I use in lots of handheld projects, 16-pin QFN package (3x3mm). Good luck using this on a breadboard!


## Logic Gates

Logic gates are the basic building block of all digital electronics and microprocessors. Basic logic gates perform the logical operations of AND, OR and NOT on binary numbers.

- **AND**: 1 if all of the inputs are 1, otherwise 0
- **OR**: 1 if any of the inputs are 1, otherwise 0
- **XOR**: 1 if exclusively one of the inputs is 1, otherwise 0
- **NOT**: 1 if the input is 0, 0 if the input is 1 (single input, inverts the value)

We can create a **truth table** which gives the output for each possible input. Note that while there are two inputs below, A and B, many of these gates can have more than two inputs.

|         | A   |   B | Output |
| ------- | --- | --: | -----: |
| **AND** | 0   |   0 |      0 |
| **AND** | 0   |   1 |      0 |
| **AND** | 1   |   0 |      0 |
| **AND** | 1   |   1 |      1 |
| **OR**  | 0   |   0 |      0 |
| **OR**  | 0   |   1 |      1 |
| **OR**  | 1   |   0 |      1 |
| **OR**  | 1   |   1 |      1 |
| **XOR** | 0   |   0 |      0 |
| **XOR** | 0   |   1 |      1 |
| **XOR** | 1   |   0 |      1 |
| **XOR** | 1   |   1 |      0 |
| **NOT** | 0   |   – |      1 |
| **NOT** | 1   |   – |      0 |

From a truth table, we can create a boolean algebra expression which summarises the logic function, and allows us to mathematically combine these components.

### Logic Gate Symbols

Common logic gate symbols are defined by [MIL-STD-806B](https://bitsavers.org/pdf/mil-std/MIL-STD-806B_Graphical_Symbols_For_Logic_Diagrams_19620226.pdf) (1962). 

> [!figure] ![[Logic gate symbols.png]]
> Military Standard Graphic Symbols for Logic Diagrams - © Spinning Numbers [^2]

There are also variants defined by [IEEE Standard 91-1984](https://www.ti.com/lit/ml/sdyz001a/sdyz001a.pdf) which you may also see, but these are less common.

### Combining Logic Gates

Usually you will see logic gates as a circuit, where each gate combines to form a more complex output. Below are three AND gates. The circuit has four inputs (A, B, C and D), and one output Y.

> [!figure] ![[AND gate combination circuit.png]]
> © University of Southampton [^3]

We can represent the functionality of this circuit with boolean algebra.

#### Operator Notation

There are several ways to express each boolean operation in mathematical notation. 

| **AND**  | $Y=A\land B \qquad Y=A\cdot B \qquad Y=A \& B$  |
| -------- | ----------------------------------------------- |
| **OR**   | $Y=A\lor B \qquad Y=A+B$                        |
| **NOT**  | $Y=\neg A \qquad Y=\bar{A} \qquad Y=A'$         |
| **XOR**  | $Y=A \oplus B \qquad Y=A \veebar B$             |
| **NAND** | $Y=\overline{A \land B} \qquad Y=A\uparrow B$   |
| **NOR**  | $Y=\overline{A \lor B} \qquad Y=A \downarrow B$ |
#### Example

To represent the circuit above, we can combine the notation of $Y_{1}$ and $Y_{2}$, like an equation.

$$
Y_{1} = A \land B \qquad Y_{2}=C \land B
$$
$$
Y= (A \land B) \land (C \land D)
$$

You could also write this using the dot notation:

$$
Y_{1}=A\cdot B \qquad Y_{2}=C \cdot B
$$
$$
Y=(A \cdot B) \cdot (C \cdot D)
$$

In order for $Y$ to be true (or "1", or high – these all mean the same thing), all inputs must also be true.

### Sum of Products

If we have a truth table, showing the boolean output of each possible states like below:

| A   | B   | C   | Y   |
| --- | --- | --- | --- |
| 0   | 0   | 0   | 0   |
| 0   | 1   | 1   | 1   |
| 1   | 0   | 1   | 1   |
| 1   | 1   | 1   | 0   |

We can represent the value of $Y$ as s sum of products (SOP):

- A **product** means a boolean AND (e.g $A \cdot B$ or $A\land B$)
- A **sum** means a boolean OR (e.g $A+B$ or $A \lor B$)

For this table, $Y$ is true when either:

- $\bar{A}\cdot B \cdot C$
- $A \cdot \bar{B} \cdot C$

Therefore:

$$
Y=(\bar{A}\cdot B \cdot C) + (A \cdot \bar{B} \cdot C)
$$


[^1]: https://commons.wikimedia.org/wiki/File:Three_IC_circuit_chips.JPG
[^2]: https://spinningnumbers.org/a/logic-gates.html
[^3]: https://sotonac.sharepoint.com/:p:/t/ElectricalElectronicEngineering2021-22/EdZwaxjQv3ZEoyhAIVQX3XgBY8L39_w4k0a_Hai8R0YNKg?e=bvcANO
