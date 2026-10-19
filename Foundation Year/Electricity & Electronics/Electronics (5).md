---
tags:
  - electronics
module: Electricity & Electronics
component: Electronics
permalink: fy/electricity-electronics/electronics-5
---
## Sequential Logic

Sequential logic circuits build on combinatorial logic circuits but they have the ability to form the basis of memory circuits, and therefore their output not only depend son the input state but also the previous input state.

> [!figure] ![[Combinational logic block diagram.png]]
> © University of Southampton [^1]

Sequential circuits are dependent on past values of the input along with present values. Therefore, feedback is required in the form of a feedback loop. The feedback loops are memory elements and the circuit behaviour depends on both the current inputs and the values stored in the loops.

> [!figure] ![[Combinational logic gates.png]]
> © University of Southampton [^1]

Where $C$ is the output of the AND gate.

| $A$ | $B$ | $C^{A\cdot Q}$ | $\overline{B}$ | $Q$ |
| --- | --- | -------------- | -------------- | --- |
| 0   | 0   | 0              | 1              | 1   |
| 0   | 1   | 0              | 0              | 0   |
| 1   | 0   | 1              | 1              | 1   |
| 1   | 1   | 0              | 0              | 0   |

## SR Latch

The basic building block of a sequential system is a sub-system called a __ (or bistable). It is so called because it has two stable states, and it flips (or flops) between the two. 

The simplest is a Set-Reset Latch (or $\overline{S}$ or $\overline{R}$ latch):

* Both inputs have a bar above them, indicating that they are active low inputs. They are activated when the input signal is logic 0.
* Both outputs are labelled as Q, but one $\overline{Q}$ is the inverse of the others. The outputs should always be at opposite logic levels
* When output Q is logic 1, it is 'set'. When it is logic 0, it is 'reset'


The $\overline{S}\overline{R}$ flip-flop can be implemented using two NAND gates.

> [!figure] ![[SR flip flop.png]]
> © University of Southampton [^1]

Recall the NAND truth table below:

| A   | B   | Q   |
| --- | --- | --- |
| 0   | 0   | 1   |
| 0   | 1   | 1   |
| 1   | 0   | 1   |
| 1   | 1   | 0   |

Here is the sequence as a truth table:

| State | $\overline{S}$ | $\overline{R}$ | $Q$  | $\overline{Q}$ | Action               |
| ----- | -------------- | -------------- | ---- | -------------- | -------------------- |
| 1     | 0              | 1              | 1    | 0              | Sets the bit to 1    |
| 2     | 1              | 1              | 1    | 0              | None, output still 1 |
| 3     | 1              | 0              | 0    | 1              | Resets the bit to 0  |
| 4     | 1              | 1              | 0    | 1              | None, output still 0 |
| 5     | 0              | 0              | 1 ⚠️ | 1 ⚠️           |                      |

### Sequence Step 1

- As $\overline{S}=0$, the output (Q) of the upper NAND gate must be logic 1
- This feeds back into the input of the lower NAND gate. As a result, both its inputs are logic 1 giving its output ($\overline{Q}$) of logic 0.
- This feeds back into the input of the upper NAND gate. As a result, both its inputs are logic 0 giving it an output of logic 1.

**Result:** $Q=1,\ \overline{Q}=0$

### Sequence Step 2

- From the previous conditions, $Q=1$ and $\overline{Q}=0$ and these signals are fed back into the inputs of the NAND gates as before
- The upper NAND gate therefore has inputs 1 and 0, giving it and output $Q$ of logic 1.
- The lower NAND gate has inputs 1 and 1, keeping its output $\overline{Q}$ at logic 0.

**Result:** $Q=1,\ \overline{Q}=0$

### Sequence Step 3

* As $\overline{R}=0$, the output $\overline{Q}$ of the lower NAND gate must be logic ?
* This feeds back into the input of the upper NAND gate. As a result, both its inputs are logic 1 giving it an output ($Q$) of logic 0
* This feeds back into the input of the lower NAND gate. As a result, both its inputs are logic 0 giving it an output of logic 1

**Result:** $Q=0,\ \overline{Q}=1$
### Sequence Step 4

* From the previous conditions, $Q=0$ and $\overline{Q}=1$, and these signals are fed back into the inputs of the NAND gates as before.
* The upper NAND gate therefore has inputs 1 and 1, giving it an output $Q$ of logic 0 (still)
* The lower NAND gate has inputs 1 and 0, keeping its output $\overline{Q}$ at logic 1 (still)

**Result:** $Q=0,\ \overline{Q}=1$
### Sequence Step 5

* At $\overline{S}=0$, the output $Q$ of the upper NAND gate must be logic 1
* As $\overline{R}=0$, the output $\overline{Q}$ of lower gate must also be logic 1

**Result:** $Q=1,\ \overline{Q}=1$


> [!WARNING] Problem state
> In this state, both outputs sit at logic 1, which should not happen.

## Propagation Delay

In logic circuits so far, we have assumed that the changes in output occur at the same instance as the changes in input, however this does not happen in reality. There is a small delay between these changes (typically 5-10ns), called the *propagation delay*.

When one signal has to pass through many gates, propagation delays mean they get out of step with each other and can produce unexpected results.

## Gated Flip Flop

The gated SR flip-flop is an asynchronous circuit but can be used as a building block for synchronous sequential circuits. In this system the output of a clocked SR flip-flop are controlled by the clock signal.

> [!figure] ![[Clock flip flop.png]]
> © University of Southampton [^1]

If the clock is at logic 1, the flip-flop operates as normal. The outputs can be frozen by forcing the clock to logic 0, whereby the inputs are deactivated and the current output state is 'memorised'. Any positive pulse on the S and R inputs are only transferred to stage 2 when the clock input is high.

### D Flip Flop

One of the main disadvantages of the SR Flip Flop is that the indeterminate input when S and R are both logic 0 is forbidden. To prevent this from happening, a NOT gate can be connected between the S and R inputs. By adding an inverter, the S and R inputs become complements of each other ensuring that they are never the same.

> [!figure] ![[Clock flip flop 2.png]]
> © University of Southampton [^1]

D-type flip-flops are available in a 14-pin dual-in-line DIL packages as they contain two identical but completely separate D-type flip-flop circuits. 

[^1]: https://sotonac.sharepoint.com/:p:/t/ElectricalElectronicEngineering2021-22/EXPo3gepfFlPl_H4DxYmHagBXGcWQXyzKgupVnZp-MHscA?e=dVaeBw
