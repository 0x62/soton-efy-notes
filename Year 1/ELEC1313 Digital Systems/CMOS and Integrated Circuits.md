---
permalink: y1/elec1313/cmos-integrated-circuits
---
#### CMOS and Integrated Circuits

- [[#Integration and scaling]]
- [[#Transistors as switches]]
- [[#CMOS gates]]
- [[#Delay and power]]
- [[#Parallel computing and data movement]]

**[[#Delay and power|Dynamic switching power]]**
$$P_{\mathrm{dynamic}}\approx\alpha CV_{DD}^{2}f$$
**[[#Delay and power|Logic-path delay]]**
$$t_{\mathrm{path}}\approx\sum_k t_{pd,k},\qquad f\lesssim\frac1{t_{\mathrm{path}}}$$
**[[#Integration and scaling|Geometrical scaling]]**
$$\text{feature length }L\mapsto sL\quad\Rightarrow\quad\text{area}\mapsto s^2\text{area}$$

## Integration and scaling

An integrated circuit combines many transistors and connections on one chip. Small-scale integration provides individual gates; medium-scale integration provides building blocks such as decoders and multiplexers. Larger integration levels make complete processors and systems possible.[^1]

Reducing feature size can increase transistor density, shorten connections and reduce capacitance. An ideal geometric reduction of all linear dimensions by a factor $s$ reduces area by $s^2$, though practical chips also need routing, power delivery and other structures.

Moore's law describes a historical trend towards roughly doubling transistor counts over a period of about two years, not a physical law guaranteeing unlimited clock-speed growth. Heat, power and data movement constrain useful performance. More transistors can support more cores or specialised arithmetic rather than simply a faster single core. Manufacturing facilities can become more expensive even as the cost per transistor falls.[^1]

## Transistors as switches

![[Electronics (6)#Transistors]]

For digital logic, a simplified switch model is useful:
- An **NMOS** transistor conducts when its gate is high and is off when its gate is low.
- A **PMOS** transistor conducts when its gate is low and is off when its gate is high.

The gate controls whether a path exists between the other terminals. In this model, logic 0 is approximately ground and logic 1 approximately $V_{DD}$; actual valid input/output voltage ranges have finite tolerances.

Series switches require all their conducting conditions to hold. Parallel switches conduct if any branch is on. Always account for the opposite input polarity of PMOS when translating this into logic.[^2]

## CMOS gates

**Complementary metal-oxide-semiconductor (CMOS)** logic uses a PMOS pull-up network to connect the output to $V_{DD}$ and an NMOS pull-down network to connect it to ground.

### Inverter

A PMOS above the output and NMOS below it share input $A$:
- $A=0$: PMOS on, NMOS off, output pulled high.
- $A=1$: PMOS off, NMOS on, output pulled low.

Therefore $F=\bar A$. Ideally, neither stable input state creates a direct conducting path from supply to ground.

### NAND

Two NMOS devices in series pull the output low only when both inputs are high. Two PMOS devices in parallel pull the output high when either input is low:
$$F=\overline{AB}.$$

### NOR

Two NMOS devices in parallel pull the output low when either input is high. Two PMOS devices in series pull the output high only when both inputs are low:
$$F=\overline{A+B}.$$

The pull-up and pull-down networks are complementary. Using the same series/parallel arrangement for both does not produce a valid complementary gate.

A resistor-load inverter uses a resistor instead of one transistor network. When its transistor conducts, current flows continuously through the resistor. Complementary CMOS greatly reduces this ideal steady-state current, but real devices still have leakage and consume energy during switching.[^2]

## Delay and power

Propagation delay is the time from an input transition to the corresponding output transition. Delays along a dependent gate path accumulate. The longest relevant path limits the speed at which a system can operate correctly.[^3]

For example, delays of $80$, $120$ and $100\,\mathrm{ps}$ sum to $300\,\mathrm{ps}$. The reciprocal is approximately $3.33\,\mathrm{GHz}$. This is a logic-delay-only estimate: a real clock-period budget must also allow for register timing and clock uncertainty.

CMOS outputs charge and discharge capacitance. The switching-power model is
$$P_{\mathrm{dynamic}}\approx\alpha CV_{DD}^2f,$$
where $\alpha$ represents switching activity and $C$ the effective switched capacitance. At fixed other quantities, doubling frequency doubles dynamic power, whereas doubling supply voltage quadruples it. Lower voltage helps power but also affects switching speed and reliable voltage margins.

A design that is logically correct can still fail if signals do not settle in time or valid voltage levels are not maintained. Functional logic, timing and electrical reliability are separate requirements.[^3]

## Parallel computing and data movement

A CPU can coordinate tasks and prepare work while a GPU performs many arithmetic operations in parallel. Neural-network training repeatedly calculates predictions, evaluates error and updates numerical weights; this requires large numbers of multiply-and-add operations.

Compute capacity alone is not enough. Memory must provide weights, gradients and intermediate values, while distributed processors exchange results. A processing unit may be idle while waiting for data or communication, so doubling the number of processors need not halve execution time.

Storage requirements can be estimated independently of processing speed. For example, $405\times10^9$ parameters at 16 bits each require
$$405\times10^9\times2=810\times10^9\text{ bytes}=810\text{ GB}$$
for the weights alone, using decimal gigabytes. Training also needs other stored information.

Power and cooling limit system scale. Electrical CMOS provides logic and memory, while optical links can help move information at high bandwidth; practical optical links still need lasers, modulators, detectors and electronic interfaces, so optical transmission is not an energy-free system.[^3]

[^1]: [Circuits and devices](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36307).
[^2]: [CMOS logic circuits](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36318).
[^3]: [From CMOS to AI Hardware](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36319).
