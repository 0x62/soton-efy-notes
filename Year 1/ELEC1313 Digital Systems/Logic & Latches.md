---
permalink: y1/elec1313/logic-latches
---
#### Logic & Latches

- [[#Sequential Logic]]
- [[#Feedback and one-bit memory]]
- [[#Active-high and active-low signals]]
- [[#Latches]]
	- [[#SR Latch]]
	- [[#D-Type Latch]]
- [[#Clocks and synchronisation]]
- [[#Edge-triggered flip-flops]]
- [[#Tracing timing diagrams]]

**State and next state**
$$Q^+=F(Q,\text{inputs})$$
**Positive-level D latch**, with enable $E$:
$$Q^+=ED+\overline E Q$$
**D flip-flop**: $Q^+=D$ at its active clock edge; otherwise hold.
**Clock**: $f=1/T$.

## Sequential Logic

![[Electronics (5)#Sequential Logic]]

A sequential circuit's behaviour depends on its **stored state**, not just its present inputs. Two identical input combinations can therefore produce different outputs if the circuits have different histories. A state is the information retained from that history that is needed to determine future behaviour.[^gvm2]

- A momentary call button must leave a request active after the button is released. The remembered state distinguishes “request pending” from “no request”.
- A pedestrian crossing must progress through an ordered sequence, rather than choose a lamp colour from the button position alone.
- A vending machine must remember the amount already inserted.
- A counter must remember its current count before it can produce the next one.

The two requirements are a way to **store the current state** and logic that determines **how to change it**. Write $Q$ for a present stored bit and $Q^+$ for its next value. A characteristic table includes the old state or explicitly says “hold”; an ordinary combinational truth table cannot describe memory completely.

## Feedback and one-bit memory

Two inverters connected in a loop have two stable logical states:

| $Q$ | $\overline Q$ |
|---|---|
| 0 | 1 |
| 1 | 0 |

Each output reinforces the other through the two inversions. This is **positive feedback**: once a state has been established, feedback maintains it. A circuit with two stable states is bistable and can represent one bit.[^gvm2]

The loop alone has no controlled data input. Driving a wire in the loop directly would make the external driver compete with the gate already driving that wire. Replacing the inverters with gates that have additional inputs provides a controlled way to set and reset the memory.

Do not assume a predictable power-up state unless reset or another initialisation mechanism establishes one.

## Active-high and active-low signals

**Active-high** means a function is asserted at logic 1. **Active-low** means it is asserted at logic 0. An overbar or an inversion bubble commonly marks an active-low signal.

For example, $\overline{\mathrm{RESET}}=0$ requests reset, whereas $\overline{\mathrm{RESET}}=1$ releases reset. “Enabled”, “on” and “asserted” do not automatically mean a high voltage. The name describes the requested function as well as its polarity.[^gvm2]

## Latches

A latch stores one bit. A gated latch is **level-sensitive**: while its enable is active, changes can propagate through it; outside that interval it retains its state.

### SR Latch

![[Electronics (5)#SR Latch]]

For a cross-coupled **NAND** implementation, the inputs are active-low $\overline S$ and $\overline R$. Its characteristic table is:[^gvm2]

| $\overline S$ | $\overline R$ | $Q^+$ | $\overline Q^+$ | Operation |
|---|---|---|---|---|
| 0 | 1 | 1 | 0 | Set |
| 1 | 0 | 0 | 1 | Reset |
| 1 | 1 | $Q$ | $\overline Q$ | Hold |
| 0 | 0 | 1 | 1 | Invalid combination |

The feedback equations are
$$Q=\overline{\overline S\,\overline Q},\qquad
\overline Q=\overline{\overline R\,Q}.$$
These equations describe the gate connections, including their feedback. Physical outputs settle after propagation delays rather than updating instantaneously.

**Tracing a set operation:** $\overline S=0$ forces the first NAND output $Q$ to 1 regardless of its other input. With $\overline R=1$, the second NAND then has two high inputs, so $\overline Q=0$. Releasing $\overline S$ back to 1 does not undo the state: the low feedback input keeps $Q=1$.

**Tracing a reset operation:** $\overline R=0$ forces $\overline Q=1$. With $\overline S=1$, this makes $Q=0$. Returning both inputs to 1 preserves this reset state.

Thus the sequence $(\overline S,\overline R)=01\to11\to10\to11$ produces set, hold-set, reset, hold-reset. The same input pair $11$ supports either stored state.

**Why $00$ is invalid:** both NAND outputs become 1, so they are no longer complements. If both inputs are released together, unequal internal delays determine which state wins; a reliable final state is not specified. Do not use this as a legitimate way to select a stored bit. An idealised simulation's repeated switching is not a guaranteed physical operating mode.[^gvm3]

A NOR-based SR latch uses active-high inputs and has a different table: $00$ holds and $11$ is forbidden. Always identify the gates and signal polarity before using an SR table.

### D-Type Latch

![[Electronics (5)#D Flip Flop]]

A gated D circuit that is transparent throughout a clock level is a **D-type latch**, not an edge-triggered flip-flop. The distinction is whether a whole level or only an edge permits the state to change.

A data input $D$ and an enable $E$ control a NAND SR latch through
$$\overline S=\overline{ED},\qquad
\overline R=\overline{E\overline D}.$$

- If $E=0$, both internal SR inputs are 1, so the latch holds.
- If $E=1,D=1$, $\overline S=0,\overline R=1$, so the latch sets.
- If $E=1,D=0$, $\overline S=1,\overline R=0$, so the latch resets.

This avoids the forbidden SR input combination in the steady-state logical model while retaining a hold condition. Simply joining complementary data signals directly to the SR inputs would remove both the invalid combination **and the useful hold combination**; it would not provide controllable memory.[^gvm3]

| $E$ | $D$ | $Q^+$ |
|---|---|---|
| 0 | X | $Q$ |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

Here X means either data value, not an unknown stored output. The characteristic equation is
$$\boxed{Q^+=ED+\overline E Q}.$$

When $E=1$, the latch is **transparent**: $Q$ follows $D$ after propagation delay, including multiple data changes during that interval. When $E$ becomes 0, the last valid data value is retained.

The same physical enable may be named $\overline{\mathrm{LATCH}}$: low asserts the *hold* function, whereas high releases it and permits transparency. This naming does not make the circuit a transparent-low latch. Distinguish the named function from the level at which data passes through.

## Clocks and synchronisation

In an **asynchronous** circuit, changes propagate in response to input or state changes without a common sampling clock. Different path lengths and gate delays mean different signals can arrive at different times. Coordinating those changes requires care.

In a **synchronous** circuit, storage elements use a common clock to coordinate state changes. Combinational logic calculates values between active clock edges; the storage elements capture them at the next appropriate edge.[^gvm3]

A clock is a repeating waveform, often with approximately equal high and low intervals:
$$f=\frac1T,\qquad \text{duty cycle}=\frac{t_{\mathrm{high}}}{T}\times100\%.$$
A rising edge is $0\to1$; a falling edge is $1\to0$. A 50% duty cycle means $t_{\mathrm{high}}=t_{\mathrm{low}}=T/2$, not that all clocks must have this duty cycle.

## Edge-triggered flip-flops

A **D-type flip-flop** samples $D$ at an active clock edge and holds the result between edges. For a rising-edge device,
$$Q^+=D\quad\text{at }\uparrow\mathrm{clk}.$$
Data must meet the device's setup and hold requirements around that edge, and the output changes only after its clock-to-output delay. An edge is therefore not a physically zero-width opportunity for arbitrary data changes. See [[Counters#Timing constraints]].

| Symbol feature at the clock/control input | Meaning |
|---|---|
| No edge triangle | Level-sensitive control |
| Bubble on level-sensitive control | Active-low level |
| Triangle, no bubble | Rising-edge triggering |
| Triangle with bubble | Falling-edge triggering |

Two D latches with opposite transparency phases can isolate input sampling from output updating. With a transparent-high first latch and a transparent-low second latch, the first follows $D$ while the second holds. When the clock falls, the first closes and the second transfers the first latch's stored value. The overall output therefore updates around the falling transition. Reversing the phases gives rising-edge behaviour. This is the ideal two-phase principle; practical timing and internal implementation still matter.[^gvm3notes]

## Tracing timing diagrams

1. Identify whether the device is level-sensitive or edge-triggered and check its active polarity.
2. Establish the initial state. If it is not specified, do not invent it: it remains unknown until a valid set, reset or data-capture event establishes it.
3. For a latch, mark every transparent interval. During it, follow **all** changes in $D$; outside it, keep $Q$ constant.
4. For a flip-flop, mark only its active clock edges and sample the data value at each one, assuming timing requirements are satisfied.
5. Include propagation delay if given. Otherwise make clear that an ideal timing model is being used.

For example, a positive-level latch with $Q=0$ can change $0\to1\to0$ during one high clock interval if $D$ makes those changes. A rising-edge flip-flop sees only the data at the rising edge and does not follow the later changes in that same high interval.

[^gvm2]: Geoff Merrett, [Sequential Logic Part 1: Introduction and Latches](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36328); [16 October 2026 recording](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=960ae95d-cca9-4d21-8135-b4e500e6e4bb), approximately 04:05–37:50.
[^gvm3]: Geoff Merrett, [16 October 2026 continuation](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=65d7c3d4-e160-4102-98af-b4e500f8476e), approximately 00:39–17:50 for latch behaviour and 20:49–37:39 for clocks, timing and terminology.
[^gvm3notes]: Geoff Merrett, [Sequential Logic Part 2: Flip-Flops](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36332). The [16 October recording](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=65d7c3d4-e160-4102-98af-b4e500f8476e), 37:39–41:23, introduces the two-latch arrangement but stops before completing its timing analysis.
