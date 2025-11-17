---
tags:
  - circuit-theory
module: Electricity & Electronics
component: Circuit Theory
permalink: electricity-electronics/circuit-theory-4
---

## Multiple Power Sources

When voltage sources are connected in series, their voltages combine algebraically. If oriented in the same direction, they add (e.g., $5V + 10V = 15V$). If oriented opposite to each other, they subtract (e.g., $10V - 5V = 5V$). The same current flows through all components since they're in series.

When voltage sources are connected in parallel, they **must have identical voltages** to prevent short circuits or damage. This is necessary because current varies between parallel components, which could cause current to flow directly between the sources themselves.

For parallel voltage sources, the total current is split between them according to their internal resistances.


> [!WARNING] Voltage source polarity affects the direction of current and voltage drops
> Incorrect polity may lead to opposing voltages. Make sure to keep track of source polarity when using branch current method.

## Branch Current Method

The **branch current method** is a systematic technique for analysing electrical circuits by determining the current flowing through each branch of the circuit. This method is based on applying [[Electricity & Electronics/Circuit Theory (3)#Kirchhoff's Current Law|KCL]] and [[Electricity & Electronics/Circuit Theory (3)#Kirchhoff's Voltage Law|KVL]] to solve for all unknown branch currents.

BCM assumes directions of currents in a network, and allows you to write simultaneous equations that describe their relationships to each other. 

The fundamental idea behind the branch current method is to:

1. **Identify each branch** in the circuit (a branch is any path between two nodes containing one or more circuit elements)
2. **Assign a current variable** to each branch (e.g., $I_1$, $I_2$, $I_3$, etc.)
3. **Follow each closed loop path** and apply KVL
4. **Apply KCL at each node** to establish relationships between currents

When following each path around a closed loop:

- **Choose a direction** (clockwise or counterclockwise) and stick with it
- **Sum all voltage rises and drops** around the complete loop
- **Apply KVL**: The algebraic sum of voltages around any closed loop equals zero

$$\sum V = 0$$

### Worked Example

The first step is to **choose a node** (junction of wires) to use a a reference point.

![[Branch current step 1.png]]

At this node, you make an educated guess about which directions the three wires' current take, labelling the currents as $I_{1}$, $I_{2}$, and $I_{3}$ respectively.

![[Branch current step 2.png]]

> [!WARNING] Remember these directions are **speculative** and **arbitrary** this point

The next step is to **label all voltage drop polarities** across resistors according to the assumed directions of the currents. The polarity is positive where current enters the resistor, and negative where it exits.

![[Branch current step 3.png]]

[[Electricity & Electronics/Circuit Theory (3)#Kirchhoff's Voltage Law|KVL]] tells us the algebraic sum of all voltages in a loop must equal zero, so we can create simultaneous equations with current terms. For each loop, we move in one direction (clockwise or counter-clockwise).

> [!TIP] The direction is arbitrary, it does not matter which you pick as long as you apply the voltage drops following algebraic laws

Starting with Loop 1, moving counter-clockwise then applying Ohm's Law:

$$
B_{1}\to R_{1}\to R_{2}\to B_{1}
$$

$$
-28+V_{R2}+V_{R3}=0
$$

$$
-28+2I_{2}+4I_{1}=0
$$

Starting with Loop 2, moving counter-clockwise:

$$
B_{2}\to R_{3}\to R_{2}\to B_{2}
$$

$$
7-V_{R3}-V_{R2}=0
$$

$$
7-I_{3}-2I_{2}=0
$$

Now we have a mathematical system of three equations, one KCL equation and two KVL equations, with three unknowns.

$$
I_{2}=I_{1}+I_{3}\implies I_{1}-I_{2}+I_{3}=0
$$

$$
7-I_{3}-2I_{2}=0\implies 2I_{2}+I_{3}=7
$$

$$
-28 + 2I_{2} + 4I_{1}=0\implies 4I_{1}+2I_{2}=28
$$

Let's try to reduce the number of unknowns with substitution. You could also use other algebraic methods of solving simultaneous equations (e.g multiplying to create common factors).

$$
2I_{2}+(I_{2}-I_{1})=7 \implies 3I_{2}-I_{1}=7
$$

$$
I_{1}=3I_{2}-7
$$

$$
4(3I_{2}-7)+2I_{2}=28 \implies 14I_{2}-28=28 \implies 14I_{2}=56
$$

$$
\boxed{I_{2}=\frac{56}{14}=4A}
$$

Now we can solve $I_{1}$:

$$
\boxed{I_{1}=3(4)-7=5A}
$$

Finally we can solve $I_{3}$:

$$
I_{3}=I_{2}-I_{1} \qquad \boxed{I_{3}=-1A}
$$

The result for $I_{3}$ is **negative**. This means out assumed direction of current for $I_{3}$ was opposite of it's real direction.

![[Branch current step 4.png]]

## Superposition Theorem

The superposition theorem states:

> A circuit with multiple voltage and current sources is equal to the sum of simplified circuits using just one of the sources

Put differently, if a circuit has two voltage sources, you can analyse it by breaking it into two separate circuits—each containing only one source with the other removed—and then adding the results together.

The method involves removing all power sources except one at a time, then using series/parallel analysis to calculate the voltage drops in each simplified circuit. This process is repeated for each source, and the results are combined to find the total circuit behaviour.

### Worked Example

Let's take the same circuit from Branch Current example, and first eliminate $B_{2}$.

![[Superposition step 1.png]]

We need to work out the current at $R_{1}$ before it splits at the first node. We have $28V$, and know that:

$$
R_{t}=R_{1}+\frac{1}{\frac{1}{R_{2}}+\frac{1}{R_{3}}}=4+0.667=\boxed{4.667\ \Omega}
$$

Therefore, $I_{1}=\frac{28}{4.667}=\boxed{6\ A}$

We can now work out the voltage drop at $R_{1}$:

$$
V_{R1}=I_{1}R_{1}=4\times 6=\boxed{24V}
$$

Now the current splits at the node, and we can use KCL to work out current at $R_{2}$ and $R_{3}$. We know that current in each loop must add up to $6A$, and from KCL $I_{1}=I_{2}+I_{3}$

$$
\text{Loop 1} = B_{1}\to R_{1}\to R_{2}\to B_{1}
$$

$$
28=4I_{1}+2I_{2}
$$

$$
28=4(I_{2}+I_{3})+2I_{2}
$$

$$
\boxed{28=6I_{2}+4I_{3}}
$$

Now the same for loop 2:

$$
\text{Loop 2 }= B_{1}\to R_{1}\to R_{3}\to B_{1}
$$

$$
28=4I_{1}+1I_{3}
$$

$$
28=4(I_{2}+I_{3})+I_{3}
$$

$$
\boxed{28=4I_{2}+5I_{3}}
$$

Now we have two simultaneous equations to solve.

$$
28=6I_{2}+4I_{3}
$$

$$
28=4I_{2}+5I_{3}
$$

Multiply the first by 2, and the 2nd by 3 to create common terms:

$$
56=12I_{2}+8I_{3}
$$

$$
84=12I_{2}+15I_{3}
$$

Subtract the first from the second:

$$
28=0+7I_{3}
$$

$$
\boxed{I_{3}=4\ A} \qquad \boxed{I_{1}=6A} \qquad \boxed{I_{2}=2\ A}
$$



> [!TIP] Did you see the shortcut we could have taken?
>Look back at the circuit again. $R_{2}$ and $R_{3}$ are parallel and form a [[Electricity & Electronics/Circuit Theory (2)#Voltage Divider|voltage divider]] with $R_{1}$

![[Superposition step 1.png]]

Let's make $R_{P1}$ the equivalent parallel resistance:

$$
R_{P1}=\frac{1}{\frac{1}{R_{2}}+\frac{1}{R_{3}}}=0.667\ \Omega
$$
$$
V_{P1}=28*\frac{0.667}{0.667+4}=\boxed{4\ V}
$$

Then apply Ohm's Law:

$$
I_{2}=\frac{4\ V}{2\ \Omega}=\boxed{2\ A} \qquad I_{3}=\frac{4\ V}{1\ \Omega}=\boxed{4\ A}
$$

We can now work out the voltage drop across $R_{2}$ and $R_{3}$:

$$
V_{R2}=I_{2}*R_{2}=2\times 2=\boxed{4\ V}
$$

$$
V_{R3}=I_{3}*R_{3}=V\times 1=\boxed{4\ V}
$$


> [!WARNING] But this is only for one circuit!
> Repeat the process with the other source

![[Superposition step 2.png]]

Once the voltage drop and current has been determined for each source working separately, the values are *superimposed* on top of each other (added algebraically) to find the voltage drops/currents with all the sources active.

$$
7=1I_{3}+4I_{1} \qquad 7=1I_{3}+2I_{2}
$$
$$
I_{3}=I_{1}+I_{2}
$$
$$
7=5I_{1}+I_{2} \qquad 7=3I_{2}+I_{1}
$$
$$
21=15I_{1}+3I_{2} \qquad 14=14I_{1} \qquad I_{1}=\boxed{1A}
$$
$$
I_{2}=\frac{21-15}{3}=\boxed{2A} \qquad I_{3}=\boxed{3A}
$$


> [!WARNING] Be very careful with polarity
> Consider the polarity of the voltage drop and the direction of current flow, as the values have to be added algebraically

![[Superposition - sum voltages.png]]

$$
24V-4V=20V \qquad 4V+4V=8V \qquad 4V-3V=1V
$$

Applying these, we get a final circuit voltage drop as:

![[Superposition step 3.png]]

Both current and voltage drops can be superimposed, or they can simply be calculated from the final voltage drops and respective resistances (Ohm's Law).

![[Superposition - sum current.png]]

![[Superposition step 4.png]]

