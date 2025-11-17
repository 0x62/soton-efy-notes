---
tags:
  - circuit-theory
module: Electricity & Electronics
component: Circuit Theory
permalink: electricity-electronics/circuit-theory-6
---

## Resistor-Capacitor Circuits

The charge on a capacitor cannot change instantaneously, as a sudden change in voltage would require infinite current. The current through a capacitor is the rate of change of charge:

$$
I=\frac{dQ}{dt}
$$

At the start of charging ($t=0$), the capacitor is uncharged ($Q=0$) and current is at its maximum. As charge builds up on the plates, the voltage across the capacitor increases, reducing the current over time.

Eventually the capacitor becomes fully charged, and no current flows:

$$
V_{c}=\frac{Q}{C}
$$

At this point, the capacitor voltage balances the supply voltage and the current falls to zero. 

This transient behaviour is used in timing circuits, filters and smoothing networks. The rate at which a capacitor charges or discharges determines how quickly the circuit responds to changes in voltage.

When a capacitor charges through a resistor, the change in **voltage** and **current** over time follows an exponential pattern. The voltage across the capacitor increases exponentially, approaching the supply voltage asymptotically:

$$
V_{C}(t)=E(1-e^{-t/RC})
$$

The current and voltage across the resistor both decrease exponentially as the capacitor charges:

$$
I(t)=\frac{E}{R}e^{-t/RC}
$$

### RC Time Constant

When a constant DC voltage is applied to an RC circuit, the capacitor voltage $V_{C}$ rises along an exponential curve. The time constant of the circuit describes how quickly this voltage changes, and is given by:

$$
\tau=RC
$$

The time constant $\tau$ represents the time taken for the capacitor voltage to reach **63.2%** of its final value during charging, or call to **36.8%** of its initial value during discharging.


> [!WARNING] It **does not** represent the total time to fully charge the capacitor
> Practically, full charge is reached after about $5 \tau$


### RC Charging Transient Curves

In an RC charging circuit, both voltage and current change exponentially over time:

- The capacitor voltage increases from 0 to the supply voltage $E$
- The resistor voltage and current decrease from their initial maximum values to 0

At any instant during charging:

$$
V_{C}=E(1-e^{-t/\tau}) \qquad V_{R}=Ee^{-t/\tau} \qquad i_{C}=I_{0}e^{-t/\tau} \qquad i_{T}= \frac{E-V_{c}}{R}
$$

Where:

- $V_{C}$ is the voltage across the capacitor
- $V_{R}$ is the voltage across the resistor
- $i_{C}$ is the instantaneous capacitor current
- $i_{T}$ is the instantaneous total current
- $I_{0} = \frac{E}{R}$ is the initial charging current
- $\tau=RC$ is the time constant

### RC Discharging Transient Curves

Discharging also occurs exponentially over time. At any instant during discharging:

$$
V_{C}=V_{0} \cdot e^{\frac{-t}{\tau}} \qquad V_{R}=V_{0} \cdot e^{\frac{-t}{\tau}}  \qquad i_{C}=-I_{0}\cdot e^{\frac{-t}{\tau}} \qquad i_{T}=\frac{V_{0}}{R}e^{\frac{-t}{\tau}}
$$

Where:

- $V_{0}$ is the initial voltage

> [!TIP] Note that the formulas for $V_{C}$ and $V_{R}$ are the same during discharge

### Step by Step

> [!figure] ![[RC circuits.png]]
> © University of Southampton [^1]

#### Step 1

When switch $S$ is closed, [[Electricity & Electronics/Circuit Theory (3)#Kirchhoff's Voltage Law|KVL]] states that

$$
E=V_{C}(t) + V_{R}(t)
$$

The battery voltage $E$ is constant, and the capacitor voltage is given by $V_{C}=\frac{Q}{C}$. The voltage drop across $V_{R}$ is given by Ohm's Law. Hence, **at all times**:

$$
E=\frac{Q}{C}+IR
$$

#### Step 2

At the instance the switch $S$ is closed, we assume the capacitor is uncharged so $Q=0$ (and therefore $V_{C}=0$). Applying [[Electricity & Electronics/Circuit Theory (3)#Kirchhoff's Voltage Law|KVL]]:

$$
E=V_{C}(t)+IR \qquad E=0+IR
$$

This shows that the resistance to the current is solely due to $R$ and the initial current $I_{o}$ is:

$$
I_{o}=\frac{E}{R}
$$

#### Step 3

A short time after switch $S$ is closed, at time $t_{1}$ seconds, the capacitor has begun to charge. A charge $Q_{1}$ has built up on its plates, so the voltage across the capacitor is now:

$$
V_{C}=\frac{Q_{1}}{C}
$$

Since part of the supply voltage now appears across the capacitor, the voltage drop across the resistor has decreased to:

$$
V_{R}=I_{t_{1}}R
$$

Applying KVL at this moment:

$$
E=V_{C}+I_{t_{1}}R
$$

As the capacitor continues to charge, $V_{C}$ increases while $I_{t_{1}}$ decreases - the resistor drop gradually falls to zero as the capacitor approaches full charge.

#### Step 4

After a little more time, at $t_{2}$ seconds, the capacitor has stored more charge, $Q_{2}$ and the voltage has increased to:

$$
V_{C}=\frac{Q_{2}}{C}
$$
Since the supply voltage is $E$ is constant and

$$
E=V_{C}+V_{R}
$$

An increase in $V_{C}$ means the voltage across the resistor $V_{R}=I_{t_{2}}R$ must decrease, so at this moment:

$$
E=\frac{Q_{2}}{C}+I_{t_{2}}R
$$

#### Step 5

After a few seconds, once enough time has passed for the circuit to reach it's steady state, the capacitor becomes fully charged. At this point:

- Current has fallen to zero, since no more charge is flowing onto the plates
- The voltage across the resistor is therefore zero
- The voltage across the capacitor equals the supply voltage

The charging process is complete. The capacitor now holds its maximum charge and no further current is drawn from the source.



[^1]: https://sotonac.sharepoint.com/:p:/t/ElectricalElectronicEngineering2021-22/EZ192ooUKwlNhmFnyEXdcCgBq49Q0TchhxiGG34dETV3zA?e=tro2Uv
