---
permalink: y1/elec1313/combinational-logic
---
#### Combinational Logic

- [[#Combinational versus sequential logic]]
- [[#Boolean expressions and truth tables]]
- [[#Translating a specification into logic]]
- [[#From a function to hardware]]
- [[#NAND and NOR]]
- [[#Making an inverter from NAND]]
- [[#Making an inverter from NOR]]
- [[#Checking an implementation]]
- [[#Decoders and multiplexers]]

**[[#Boolean expressions and truth tables|Basic operations]]**
$$
\text{AND}:\ AB \qquad \text{OR}:\ A+B \qquad \text{NOT}:\ \overline A
$$

**[[#NAND and NOR|Inverted outputs]]**
$$
\text{NAND}:\ \overline{AB} \qquad \text{NOR}:\ \overline{A+B}
$$

**[[#Making an inverter from NAND|NAND as NOT]]**
$$
\overline{AA}=\overline A \qquad \overline{A\cdot1}=\overline A
$$

## Combinational versus sequential logic

A **combinational circuit** has outputs determined by its current inputs. Once the circuit has settled, the same inputs give the same outputs; no stored history is needed to describe its logical function.

A **sequential circuit** has state: its behaviour can also depend on earlier inputs. A door-controlled light can be combinational, while an alarm clock must remember the alarm time and a washing-machine controller must remember which stage it has reached.[^1]

This distinction is about the information needed to determine the output, not whether the circuit contains software or whether its output changes over time. A combinational output can change whenever its inputs change. The existing introduction to stored state is in [[Logic & Latches#Sequential Logic]].

## Boolean expressions and truth tables

A Boolean variable takes one of two values, **0 or 1**. An expression describes how the inputs determine the output; a truth table enumerates every input combination. With $n$ independent binary inputs, a complete table has $2^n$ rows.[^1]

The operator notation already recorded in Foundation Year applies here:

![[Electronics (1)#Operator Notation]]

The basic gate definitions and symbols are in [[Electronics (1)#Logic Gates]] and [[Electronics (1)#Logic Gate Symbols]]. Key interpretation:

- AND requires **every** input condition to hold.
- OR requires **at least one**, including the case where both are true.
- NOT reverses one Boolean value.
- The bar in $\overline{AB}$ applies to the whole product. It is not the same expression as $\overline A B$.

> [!WARNING] Boolean addition is not ordinary arithmetic
> $1+1=1$ for logical OR. A '+' symbol in a Boolean expression means OR, not a numerical sum of two bits. Numerical binary addition belongs to [[Computer Arithmetic#Binary Addition]].

## Translating a specification into logic

Start by defining what **1** means for every input, then translate the requirements. In particular, distinguish “safe” from “fault present”: negating the wrong definition changes the function.[^1]

A reliable sequence is:

1. Name the inputs and define their true conditions.
2. Identify clauses joined by AND and OR.
3. Apply NOT to negative conditions such as “no fault”.
4. Use parentheses to preserve the intended grouping.
5. Test the expression against a complete truth table or representative cases before implementing it.

#### Example: an enabled device with two ways to request operation

Let $E$ mean the device is enabled, $M$ mean a manual request, and $A$ mean an automatic request. The device runs only if enabled and at least one request is active:
$$
Y=E(M+A)
$$
First calculate $Q=M+A$, then calculate $Y=EQ$:

| $E$ | $M$ | $A$ | $Q=M+A$ | $Y=EQ$ |
| --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 |

Notice that $EM+A$ would be wrong: an automatic request would bypass the enable condition. If a new input $F$ means “fault present”, the requirement “never run with a fault” gives
$$
Y=E(M+A)\overline F
$$
All clauses must still hold, so a fault forces the result to zero regardless of the other inputs.

## From a function to hardware

A **logic function** is the rule. A **logic gate** is a circuit that implements the rule. Digital electronics represents 0 and 1 using voltage levels; a $0\,\mathrm{V}$ and $5\,\mathrm{V}$ convention is one possible convention, not a requirement that all digital circuits use a 5 V supply.[^2]

As a useful physical analogy:

- Two switches in **series** implement the AND condition for a lamp: both must close to complete the path.
- Two switches in **parallel** implement OR: either path can supply the lamp.

For $Y=E(M+A)$, an OR gate takes $M$ and $A$; its output feeds an AND gate together with $E$. Work from inner expressions outwards rather than choosing gates just from their names.

A small circle, or **inversion bubble**, on a logic symbol denotes NOT. A triangle without the bubble is a buffer; adding a bubble at its output makes it an inverter.[^2]

## NAND and NOR

NAND and NOR combine a basic gate with inversion of its output:
$$
Y_{\mathrm{NAND}}=\overline{AB},\qquad Y_{\mathrm{NOR}}=\overline{A+B}
$$
Their complete two-input truth tables are:

| $A$ | $B$ | $AB$ | $\overline{AB}$ | $A+B$ | $\overline{A+B}$ |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 |
| 1 | 1 | 1 | 0 | 1 | 0 |

A NAND is low only when all its inputs are high. A NOR is high only when all its inputs are low. Calculate the AND/OR result first, then invert it, rather than independently inverting the inputs.[^2]

## Making an inverter from NAND

There are two ways to configure a two-input NAND as an inverter.[^2]

**Connect both inputs to the same signal:**
$$
Y=\overline{AA}=\overline A
$$
When $A=0$, the NAND sees $(0,0)$ and outputs 1; when $A=1$, it sees $(1,1)$ and outputs 0.

The full gate truth table still defines NAND, but wiring $A=B$ makes the $(0,1)$ and $(1,0)$ rows **unreachable**. Only two possible input combinations remain. This is why a two-input gate can implement a one-input function: the inputs are no longer independent.[^3]

**Hold one input at logic 1:**
$$
Y=\overline{A\cdot1}=\overline A
$$
This works because AND with 1 preserves the other input. Holding the spare input at 0 would instead force the NAND output permanently to 1.

Fixing $B=1$ similarly leaves only the $(0,1)$ and $(1,1)$ rows, which give the NOT truth table.[^3]

The existing Foundation Year diagrams for these constructions are in [[Electronics (2)#NOT function]]. Other universal-gate constructions are in [[Electronics (2)#Universal Logic]].

## Making an inverter from NOR

The same restricted-input reasoning applies to NOR.[^3] Reuse the gate definitions in [[Electronics (1)#Logic Gates]] and test the two possible values of $A$:

- **Tie both inputs together:** $Y=\overline{A+A}=\overline A$.
- **Hold the spare input at 0:** $Y=\overline{A+0}=\overline A$.

Both produce 1 when $A=0$ and 0 when $A=1$. Holding the spare input at 1 would force the NOR output to 0 instead. The required constant therefore differs: **NAND uses 1, NOR uses 0**.

## Checking an implementation

- Give each intermediate gate output a name and equation.
- Evaluate from inputs towards outputs, respecting inversion bubbles.
- Verify all $2^n$ input cases for a small circuit.
- Check limiting cases: disabled input, all-zero input, all-one input, and a fault condition if present.
- Two inversions cancel: $\overline{\overline X}=X$. An AND followed by two NOT gates therefore has the original AND truth table.
- If a NOR output is 1, every input must be 0; use such constraints to reason backwards through a circuit.

## Decoders and multiplexers

![[Electronics (2)#Digital Decoders]]

A decoder converts a binary input code into a selected output. For an active-high 2-to-4 decoder with input order $A,B$,
$$D_0=\bar A\bar B,\quad D_1=\bar AB,\quad D_2=A\bar B,\quad D_3=AB.$$
Exactly one output is high for each valid input combination. Device enables or active-low outputs can change the external convention, so signal polarity is part of the specification.

A **multiplexer** selects one data input and passes it to a common output. A 4-to-1 multiplexer with select inputs $A,B$ gives
$$Y=\bar A\bar BC_0+\bar ABC_1+A\bar BC_2+ABC_3.$$
The select code $00,01,10,11$ chooses $C_0,C_1,C_2,C_3$ respectively. A decoder selects an output line; a multiplexer selects an input signal. Their roles are related but not interchangeable.[^5]

For a 2-to-1 multiplexer,
$$Y=\bar S D_0+SD_1.$$
This is useful for choosing between alternative next values of a register, as well as routing ordinary combinational data. See [[Logic & Latches]] and [[Registers]].


[^1]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36304 (Jize Yan, Introduction to Combinational Logic / Boolean Algebra).
[^2]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36305 (Combinational Logic Implementation).

[^3]: https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=6f670132-5f02-4773-99cb-b4d000f81429 (Jize Yan, JY 2 Lecture: 23:55–26:33 restricting NAND inputs; 29:19–29:36 NOR analogy; 37:14–37:19 NOR with one input fixed at zero. Auto-generated captions checked against the gate truth tables.)

[^4]: https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=86ac05f9-e60c-4201-9ba3-b4d000e69820 (Jize Yan, JY 1 Lecture, recorded 25 September 2026; recording date verified in the Panopto listing).

[^5]: [Circuits and devices](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36307), decoder and multiplexer sections.
