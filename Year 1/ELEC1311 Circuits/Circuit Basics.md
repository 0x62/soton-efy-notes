---
permalink: y1/elec1311/circuit-basics
---
#### Circuit Basics

- [[#Branches, Nodes and Loops]]
- [[#Current & Charge]]
- [[#Voltage]]
- Circuit analysis using
	- [[#Kirchhoff's Current Law (KCL)]]
	- [[#Kirchhoff's Voltage Law (KVL)]]
- [[#Ideal Sources]] (both constant and [[#Time-varying sources|time-varying]])
- [[#Resistors|Resistance]]
- [[#Power]]
- [[#Capacitors]]
	- [[#Example: a current ramp followed by constant current|Piecewise current integration]]

| **Symbol** | **Name** | **Unit**    | **Foundation Year**            |
| ---------- | -------- | ----------- | ------------------------------ |
| $t$        | Time     | s (seconds) |                                |
| $I$        | Current  | A (ampere)  | [[Circuit Theory (1)#Current]] |
| $Q$        | Charge   | C (coulomb) | [[Circuit Theory (1)#Charge]]  |
| $V$        | Voltage  | V (volt)    | [[Circuit Theory (1)#Voltage]] |
| W          | Work     | J (joule)   | [[Circuit Theory (1)#Energy]]  |
| $P$        | Power    | W (watt)    | [[Circuit Theory (1)#Power]]   |

**[[#Current & Charge|Current]]**, **[[#Voltage]]**
Conceptual equations linking charge, time and work.
$$
I=\frac{dQ}{dt} \qquad V=\frac{dW}{dQ}
$$
**[[#Resistors|Resistance]]**
For a PCB trace, given resistance of the track, length and cross-sectional area 
$$
R=\frac{\rho\times l}{A} \qquad R=\frac{V}{I}
$$
**[[#Power]]**
Deriving the power equation
$$
P=\frac{dW}{dt}=\frac{dW}{dq}\times \frac{dq}{dt}=VI
$$

**[[#Capacitors]]**, calculating **[[#Calculating current|Current]], [[#Calculating voltage|Voltage]]**:
Ideal capacitor equation, I and V general formula
$$
I=C \frac{dv}{dt} \qquad i(t)=C \frac{dv(t)}{dt} \qquad v(t)=v(t_0)+\frac{1}{C}\int_{t_0}^{t}i(\tau)\,d\tau
$$




## Branches, Nodes and Loops

An electronic circuit is a collection of electronic components connected in a loop, or series of loops. Circuits can be described by:

- **Branch** - any electrical component (resistor, diode, capacitor etc) which has two terminals
- **Node** - where two or more branches connect at the same point
- **Loop** - a closed path, starting and stopping at the same node, and only visiting a node once

You can trace nodes by following a wire - any point which can be reached along the wire without going *through* a branch (component) is part of the same node. Two branches connected in series form a node between them (an *essential* node), even through there is no junction where three things meet (a *junction* node).

> [!figure] ![[Screenshot 2026-09-20 at 15.45.57.png]]
> A circuit with two nodes &middot; © University of Southampton [^1]

Loops form a closed path in the circuit. Loops must start and stop at the same node, and only visit a node once.

**Independent** loops are loops which have at least one branch that is unique to each loop. A new loop is independent if you cannot build it by adding/subtracting the loops you already have. **Elementary loops** are the set of smallest possible independent loops, given by the formula:

$$
L=B-N+1
$$

Where $L$ is the number of loops, $B$ is the number of branches, and $N$ is the number of nodes. A set of independent loops doesn't necessarily mean "all elementary loops", however they are just a convenient choice for a complete independent set. A useful way to think of it is the dimension of the circuit's loop space. 

> [!figure] ![[Screenshot 2026-09-20 at 16.40.24.png]]
> One elementary loop, and one big loop going around elementary loops 2 &rarr; 4  &middot; © University of Southampton [^1]

In the circuit above the loop space is 4-dimensional. You can pick 1, 2, 3 or 4 independent loops, but you cannot make five independent loops. 

In the circuit above, there are 4 elementary loops, separated by the vertical resistors. The first loop shown is one of them. Both loops shown are still independent, and smaller one is elementary.

## Current & Charge

![[Circuit Theory (1)#Charge]]


![[Circuit Theory (1)#Current]]

Current is the rate at which charge is moving past a point, e.g the amount of charge moved past a point in a given time. It has both a magnitude, and direction.

$$
I=\frac{dQ}{dt}
$$

> [!figure] ![[Screenshot 2026-09-21 at 15.27.58@2x.png]]
> © University of Southampton [^1]

For example, if three electrons move through the imaginary plane in 1 second:

$$
I=\frac{dQ}{dt}=\frac{3\times-1.602\times10^{-19}}{1\text{ second}}=-4.806\times 10^{-19} \text{ coulombs per second}
$$

The unit of current is the Ampere ($A$), where $1A$ is 1 coulomb per second. A negative current means the charge is moving in the opposite direction (relative to charges around it, or equation values used to derive the result).

Charge cannot be created or destroyed. Along a single wire, the current is the same at all points.

### Kirchhoff's Current Law (KCL)

Also see [[Circuit Theory (2)#Kirchhoff's Current Law|Circuit Theory (2)]] and [[Circuit Theory (3)#Kirchhoff's Current Law|Circuit Theory (3)]] from FY, and tag #circuit-theory/kcl

Kirchhoff's current law states that **the algebraic sum of currents entering a node is zero.** 

It is important to consider the direction of current - add when the arrow points towards the node, subtract when the direction points away from the node. If you get a negative value, your arrow is pointing the wrong way.

## Voltage

![[Circuit Theory (1)#Voltage]]

Voltage is the *driving force*, or electrical potential difference. It is the work performed to move a unit charge between two points.

$$
V=\frac{dW}{dQ} \qquad V=IR
$$


> [!TIP] Voltage is a **difference**, it is always measured **between** two points


### Kirchhoff's Voltage Law (KVL)

Also see [[Circuit Theory (3)#Kirchhoff's Voltage Law|Circuit Theory (3)]] from FY, and tag #circuit-theory/kvl 

Kirchhoff's voltage law states that the **algebraic sum of the voltages around any loop in a circuit is zero.**

> [!figure] ![[Screenshot 2026-09-21 at 21.23.52@2x.png]]
> © University of Southampton [^1]

$$
a\rightarrow b \qquad \pm \qquad b\rightarrow c \qquad \pm \qquad c\rightarrow a \qquad =0
$$
$$
V_{1} \qquad \pm \qquad V_{2} \qquad \pm \qquad V_{3} \qquad =0
$$

Travel around the loop, add if the arrow labelling the voltage is in the same direction. Subtract if the arrow labelling the voltage is in the opposite direction.

$$
V_{1}+V_{2}-V_{3}=0
$$

## Ideal Sources

Ideal voltage sources provide a steady voltage, regardless of the load. The current through an ideal voltage source can change. An ideal current source provides a constant current regardless of the voltage across it. The voltage across an ideal current source can take whatever value is required to maintain that current.

**Real voltage sources (e.g a battery) do not behave this way**. Under higher load, the voltage supplied by the battery can 'sag' under load. These voltage sources can be modelled as an ideal voltage source in combination with other components.

> [!figure] ![[Screenshot 2026-09-21 at 21.40.38@2x.png]]
> Model of a real voltage source &middot; © University of Southampton [^1]

The above circuit model is also relevant for [[Circuit Theory (7)#Thevenin's Theorem|Thevenin's Theorem]] which allows you to simplify any linear circuit into a voltage source, series resistance, and load resistance as shown above (this will no doubt be covered later in the module).

We can also model real current sources, by using a parallel resistor:

> [!figure] ![[Screenshot 2026-09-21 at 21.50.55@2x.png]]
> Model of a real current source &middot; © University of Southampton [^1]

### Time-varying sources

Ideal sources do not need to have a constant value. We can set or change the voltage over time (for example, following a sine wave)

> [!figure] ![[Screenshot 2026-09-21 at 21.46.05@2x.png]]
> © University of Southampton [^1]

A constant ideal voltage source is indicated with $v$, while a time-varying voltage source uses $v(t)$ and a $\textasciitilde$ in the circuit component.

## Resistors

![[Circuit Theory (1)#Resistance]]


![[Circuit Theory (2)#Resistors]]

On a circuit board, components are connected with copper wires/tracks. In the real world, these traces have resistance. For 1 Oz copper, $35\times 10^{-6}$ thickness, 0.1mm wide track, 10mm long, and $1.7 \times 10^{-8} \Omega m$ resistance:

$$
R=\frac{\rho\times l}{A}= \frac{(1.7\times 10^{-8})(10*10^{-3})}{(0.1 \times 10^{-3})(35 \times 10^{-6})} \approx 0.049 \Omega
$$

## Power

![[Circuit Theory (1)#Power]]

Electrical power is the rate at which electrical energy is converted into other forms. For example, heat, mechanical energy, or stored in electric fields or magnetic fields.
$$
\text{Power, } P=\frac{dW}{dt}=\frac{dW}{dq}\times \frac{dq}{dt}
$$
And remember:
$$
V=\frac{dW}{dq} \qquad I=\frac{dq}{dt}
$$
Therefore:
$$
P=VI
$$
However, we need to distinguish between power being delivered to the circuit (from a voltage or current source), and power consumed or stored by the circuit itself.

By definition (called the **Passive Sign Convention**), power flowing from a component out of the circuit (e.g emitted as heat from a resistor) is positive.

> [!figure] ![[Screenshot 2026-09-22 at 15.25.31@2x.png]]
> © University of Southampton [^1]

In passive components, current and voltage arrows go in opposite directions. Active components have current and voltage in the same direction:

> [!figure] ![[Screenshot 2026-09-22 at 15.31.28@2x.png]]
> © University of Southampton [^1]

Note that this circuit diagram is slightly confusing, as it implies that all of these components are resistors. They are not, they're used as a symbol for a generic, two-terminal component. Resistors in real circuits are *always* passive.

You can think of it as **passive components absorb power** while **active components supply power**.

## Capacitors

![[Circuit Theory (5)#Capacitors]]

A capacitor is a circuit element which stores energy in an electric fields. You can think of it like a water tank:

> [!figure] ![[Screenshot 2026-09-26 at 15.34.54@2x.png]]
> © University of Southampton [^1]

Assume that water is pumped in at a constant rate (e.g 1 litre/minute). The water level rises linearly (i.e $\frac{dh}{dt}$ is a constant). If the pump stops pumping ($I=0$), the height does not change. The ratio between $\frac{dh}{dt}$ and $I$ depends on the size of the reservoir.

In this analogy, you can think of the **water level** as the voltage, and the **flow of water** as the current.
$$Q=CV$$
The charge on the plates can change with time, therefore $Q \rightarrow Q(t)$. If $Q$ varies, $V$ varies:
$$
Q(t)=CV(t)
$$
Differentiate:
$$
\frac{d}{dt}Q(t)=C \frac{d}{dt} V(t)
$$
Therefore the equation for an ideal capacitor:
$$
I=C \frac{dv}{dt}
$$
We also need to know the starting voltage (height of the water in the reservoir). Usually this is at $t=0$, e.g $v(t=0)=v(0)=0$. Or $v(0)=10V$ for a capacitor charged to 10V.

### Physical Construction

Capacitors consist of two plates, separated by a material. The capacitance of a physical component is given by:

$$
C=\frac{\epsilon_{0}\epsilon_{r}A}{d}
$$
Where:

- $\epsilon_{0}$ is the permittivity of free space
- $\epsilon_{r}$ is the relative permittivity of the material between the capacitor plates
- $A$ is the area of the two plates
- $d$ is the distance between the plates

### Calculating current

See also [[Circuit Theory (6)#Resistor-Capacitor Circuits|Circuit Theory (6) > RL Circuits]]  for common solved equations for transient behaviour in resistor-capacitor circuits.

#### Example 1

Find $i(t)$, assuming $C=2mF=0.002F$, given that:
- Voltage rises linearly from 0 to 5V from $t=0$ to $t=10$, then does not rise further
- Current starts at 0.001A, and drops to 0 instantaneously at $t=10$  

> [!figure] ![[Screenshot 2026-09-28 at 15.02.51@2x.png]]
> © University of Southampton [^1]


Therefore:
$$
v(t)=
\begin{cases}
\displaystyle \frac{5}{10}t = 0.5t, & 0<t\le 10\\[6pt]
5, & t>10
\end{cases}
$$

Differentiate:
$$
\frac{dv}{dt}=
\begin{cases}
\displaystyle \frac{5}{10}=0.5\ \text{V/s}, & 0<t<10\\[6pt]
0, & t>10
\end{cases}
$$
Using:
$$
i(t)=C\frac{dv}{dt}
$$
With:
$$
C=2\,\text{mF}=0.002\,\text{F}
$$
Gives:
$$
i(t)=
\begin{cases}
0.002(0.5), & 0<t<10\\
0.002(0), & t>10
\end{cases}
$$
Therefore:
$$
\boxed{
i(t)=
\begin{cases}
0.001\text{ A}=1\text{ mA}, & 0<t<10\\
0, & t>10
\end{cases}}
$$

#### Example 2

Find $i(t)$, assuming that $C=5mF=0.005F$

> [!figure] ![[Screenshot 2026-09-28 at 15.14.46@2x.png]]
> © University of Southampton [^1]

And the voltage across the capacitor follows:

> [!figure] ![[Screenshot 2026-09-28 at 15.21.40@2x.png]]
> © University of Southampton [^1]

Therefore:

$$
v(t)=
\begin{cases}
\displaystyle \frac{5-0}{10-0}t = 0.5t, & 0<t\le 10\\[6pt]
\displaystyle \frac{0-5}{30-10}t = -0.25t, & 10< t \le 30\\[6pt]
\displaystyle \frac{0-(-2.5)}{45-40}t = 0.5t, & 40< t \le 45\\[6pt]
\end{cases}
$$

Differentiate:

$$
\frac{dv}{dt}=
\begin{cases}
\displaystyle \frac{5}{10} = 0.5 \text{ V/s}, & 0<t\le 10\\[6pt]
\displaystyle \frac{-5}{20} = -0.25 \text{ V/s}, & 10< t \le 30\\[6pt]
\displaystyle \frac{2.5}{5} = 0.5 \text{ V/s}, & 40< t \le 45\\[6pt]
\end{cases}
$$

Therefore:

$$
i(t)=
\begin{cases}
\displaystyle 0.5 \times 0.005 = 0.0025 \text{}, & 0<t\le 10\\[6pt]
\displaystyle -0.25 \times 0.005 = -0.00125, & 10< t \le 30\\[6pt]
\displaystyle 0.5 \times 0.005 = 0.0025, & 40< t \le 45\\[6pt]
\end{cases}
$$


> [!figure] ![[Screenshot 2026-09-28 at 15.30.27@2x.png]]
> © University of Southampton [^1]

### Calculating voltage

The voltage of a capacitor is:

$$
\text{voltage}=\text{starting voltage} \pm \frac{\text{charge added/removed}}{\text{total capacitance}}
$$

Remember that the equation for current is:

$$
i(t)=C \frac{dv(t)}{dt}
$$
Rearrange:
$$
\frac{dv(t)}{dt}=\frac{i(t)}{C}
$$
Now integrate from starting time $t_{0}$ to current time $t$:
$$
\int_{t_0}^{t}\frac{dv(\tau)}{d\tau}\,d\tau
=
\frac{1}{C}\int_{t_0}^{t}i(\tau)\,d\tau
$$
Note that $\tau$ here is just used as another symbol for time, as we already use $t$ in the limits. The left side just becomes

$$
v(t)-v(t_0)
$$

so:

$$
v(t)-v(t_0)
=
\frac{1}{C}\int_{t_0}^{t}i(\tau)\,d\tau
$$

and therefore

$$
\boxed{
v(t)=v(t_0)+\frac{1}{C}\int_{t_0}^{t}i(\tau)\,d\tau
}
$$




#### Example: a current ramp followed by constant current

The 28 September lecture finishes by integrating a current which rises linearly from zero to $I_1$ over time $T_1$, then remains at $I_1$.[^2] This extends the integral form above rather than introducing a new capacitor law.

Assume $v(0)=V_0$ and current enters the positive terminal:
$$
i(t)=
\begin{cases}
\displaystyle \frac{I_1}{T_1}t, & 0\le t\le T_1,\\[4pt]
I_1, & t>T_1.
\end{cases}
$$
For the first interval:
$$
v(t)=V_0+\frac{1}{C}\int_0^t\frac{I_1}{T_1}\tau\,d\tau
=V_0+\frac{I_1t^2}{2CT_1}.
$$
At the boundary, retain the accumulated voltage:
$$
v(T_1)=V_0+\frac{I_1T_1}{2C}.
$$
For the next interval, start the new integral at $T_1$, not at zero:
$$
v(t)=v(T_1)+\frac{1}{C}\int_{T_1}^{t}I_1\,d\tau
=V_0+\frac{I_1T_1}{2C}+\frac{I_1}{C}(t-T_1).
$$
The first section is **quadratic** because the charging current is increasing; the second is **linear** because the current is constant. It is not exponential: exponential charging arises when the surrounding resistor circuit makes the current decrease with capacitor voltage, as in [[RC Transients]].

The 30 September lecture works a concrete version with $C=0.5\,\mathrm{F}$, initially discharged, current ramping from 0 to $1\,\mathrm{A}$ during the first second, remaining at $1\,\mathrm{A}$ during the second, then switching off.[^3] With $t$ in seconds, the voltage in volts is:
$$
v(t)=
\begin{cases}
t^2, & 0\le t\le1,\\
1+2(t-1)=2t-1, & 1<t\le2,\\
3, & t>2.
\end{cases}
$$
The boundary values are $v(1)=1\,\mathrm{V}$ and $v(2)=3\,\mathrm{V}$. Once the current becomes zero, **the voltage stays at 3 V**, not zero: $i=0$ means $dv/dt=0$. Restarting either interval from zero would incorrectly discard the stored charge.

[^2]: https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=0a226b70-8c2e-4aa7-af84-b4d300e6aede (Daniel Spencer, DCS L3 28-Sept-2026, 31:09–32:48 qualitative shape; 38:10–44:41 piecewise integration. Auto-generated captions checked against the capacitor equation.)

[^1]: https://moodle.ecs.soton.ac.uk/pluginfile.php/95038/mod_resource/content/1/ELEC1311_1_Electric_Circuits.pdf

[^3]: https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=db939b1a-8117-481f-a528-b4d500943396 (Daniel Spencer, Lecture #5 30-Sep-2026, 6:23–17:12 worked ramp/constant/zero-current example); see also the dated board notes https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=44748.
