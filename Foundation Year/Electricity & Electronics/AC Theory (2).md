---
tags:
  - ac-theory
module: Electricity & Electronics
component: AC Theory
permalink: fy/electricity-electronics/ac-theory-2
---

## RL series

A simple RL circuit contains a resistor $R$ and inductor $L$ connected in series with a voltage supply of $V$. Since both resistor and inductor are connected in series, the current in both elements remain the same. 

Recall the relationship for these components from [[AC Theory (1)#Pure AC Circuits|Pure AC Circuits]]:

1. For **resistors**, the voltage and current are in the same phase (the phase angle is zero)
2. For an **inductor**, the voltage and current are not in phase. The voltage leads the current by $90^{\circ}$.

As the current lags the voltage in a pure inductance circuit by $90^{\circ}$, the resultant phasor diagram drawn from the individual voltage drops $V_{R}$ and $V_{L}$ represents a right-angled voltage triangle. We can use Pythagoras theorem to find the value of this resultant voltage.

> [!figure] ![[Screenshot 2026-03-10 at 11.19.03.png]]
> © University of Southampton [^1]

Deriving the phasor diagram:

1. The current is the same (e.g $I_{R}=I_{L}=I$, there is no phase difference). This is the **current phasor** and can be used as reference. Show the reference on the **horizontal axis** in the diagram.
2. In the case of a resistor, both voltage and current are in the same phase, so draw the voltage phasor $V_{R}$ along the same axis as the current phasor (the horizontal axis).
3. In the inductor, voltage leads current by $90^{\circ}$, so draw $V_{L}$ perpendicular to current phasor

> [!figure] ![[Screenshot 2026-03-10 at 11.23.00.png]]
> © University of Southampton [^1]

Completing the phasor diagrams shows us the relationship between these voltages, and we can derive a voltage triangle:

$$
V=\sqrt{ V^2_{R}+V^2_{L} }
$$
$$
\tan\theta=\frac{V_{L}}{V_{R}}\qquad \theta=\tan^{-1}(\frac{V_{L}}{V_{R}})
$$

When a sine wave is applied to an RL series circuit, the initial opposition to current flow is a series combination of $R$ and $X_{L}$. This total opposition is known as **impedance**, symbolised by $Z$. 

> [!figure] ![[Screenshot 2026-03-10 at 11.26.28.png]]
> © University of Southampton [^1]

Impedance is the ratio of applied voltage $V$ and current $I$ in an RL circuit, ie: $Z=\frac{V}{I}$. If each side of the voltage triangle is divided by current $I$ then the impedance triangle is derived as:

$$
Z=\sqrt{ R^2+X_{L}^2}
$$

$$
\tan\theta=\frac{X_{L}}{R}\qquad \sin\theta=\frac{X_{L}}{Z} \qquad \cos\theta=\frac{R}{Z}
$$


## RC series

In an AC series circuit containing capacitance $C$ and resistance $R$, the applied voltage $V$ is the phasor sum of $V_{R}$ and $V_{C}$, and thus the current $I$ leads the applied voltage $V$ by an angle lying between 0 and 90 degrees (depending on the value of $V_{R}$ and $V_{C}$)

As before, the current can be taken as a reference:

$$
i=I_{max}\sin(\omega t)
$$

Also, as before the the voltage across the resistor $R$ is in phase with the current $I$ so:

$$
V_{R}=V_{Rmax}\sin\omega t=I_{max}R\sin(\omega t)
$$

But the voltage across the capacitor lags the current by $90^{\circ}$ or $\pi/2$

$$
V_{C}=V_{Cmax}\sin(\omega t-\frac{\pi}{2})
$$

1. We take current $I$ (the RMS value) as the reference vector as we did for RL series circuits
2. Voltage drop in resistance $V_{R}=IR$ and is in phase with the current vector
3. Voltage drop in capacitive reactance $V_{C}=IX_{C}$ and is drawn 90 degrees behind the current vector, as current leads voltage by 90 degrees in a pure capacitive circuit
4. The vector sum of the two voltage drops is equal to the applied V (RMS value)

The phasor diagram therefore shows the voltage triangle refived for the RC circuit, and we can determine that:

$$
V=\sqrt{ V_{R}^2+V_{C}^2 } \qquad \text{and} \qquad V=I\sqrt{R^2+X_{C}^2 }
$$

The ratio of applied voltage $V$ and current $I$ is called the impedance $Z$ ($Z=\frac{V}{I}$) as we saw previously. For the RC circuit:

$$
Z=\sqrt{ R^2+X_{C}^2 }
$$

So:

$$
\tan\theta=\frac{X_{C}}{R} \qquad \text{or} \qquad \sin\theta=\frac{X_{C}}{Z} \qquad \text{or} \qquad \cos\theta=\frac{R}{Z}
$$


### Example 

A resistor of 25 Ohms is connected in series with a capacitor of 45uF. Calculate the impedance and the current taken from a 240V 50Hz supply. Also find the phase angle between the voltage and the current.

- R = 25 Ohms
- C = 45uF
- V = 240 V
- f = 50 Hz

$$
Z=\sqrt{ 25^2+\left( \frac{1}{2\pi \cdot 50 \cdot 45\times 10^{-6}} \right)^2 }=75.03\ \Omega
$$

$$
I=\frac{V}{Z}=3.19\text{ A}
$$



[^1]: https://sotonac.sharepoint.com/:p:/t/ElectricalElectronicEngineering2021-22/EcpnYJUtrnpJpSDF3H3RvXgBq9XZqaGLjmCGdF8z0_F1Aw?e=uxs0cQ
