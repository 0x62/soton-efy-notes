---
tags:
  - gases
module: Engineering Principles
component: Gases
permalink: engineering-principles/gases
---
## Pressure

Density, $\rho$, is mass per unit volume.

$$
\rho=\frac{m}{V} \qquad \text{kg/m}^3
$$

Pressure, $p$ is a normal force F exerted by a gas/liquid per unit area A.

$$
P=\frac{F}{A} \qquad \text{N/m}^2 \text{ or Pascal, Pa}
$$

Other common units for pressure include *bar* and *standard atmosphere (atm)*:

$$
\text{1 bar = } 10^5 \text{ Pa = } 0.1 \text{ MPa = } 100 \text{ kPa}
$$
$$
\text{1 atm = } 101.325 \text{ kPa = } 1.01325 \text{ bar}
$$

Pressure can either be measured as an **absolute pressure**, relative to absolute zero pressure (eg. the pressure at an absolute vacuum where there is no gas).

It can also be measured as the difference between a system and the surrounding atmosphere pressure. This pressure is called **relative** or **gauge pressure**.

### Pressure In a Liquid

We use pressure and density equations to calculate the pressure experienced by an object under liquid. The deeper the object is, the more pressure the object will experience. 

$$
P=\frac{F}{A} \qquad \rho=\frac{m}{V}
$$

We can rearrange mass to be the product of density, area and height (depth) of the liquid.

$$
m=\rho V=\rho Ah
$$

> [!figure] ![[Screenshot 2025-12-01 at 13.14.36@2x.png]]
> © University of Southampton [^1]

Substituting this into our pressure equation, it simplified to the product of density, height and gravity (as both area terms cancel). 

$$
P=\frac{F}{A}=\frac{mg}{A}=\frac{\rho Ah\ g}{A}=\rho hg \qquad \boxed{P=\rho hg}
$$


Imagine an object is at a certain depth inside a liquid. Pressure at a given depth in liquid is given by the depth of the object, and the pressure on the surface of the liquid

$$
P=P_{0}+\rho gh
$$

> [!figure] ![[Screenshot 2025-12-01 at 13.53.10@2x.png]]
> © University of Southampton [^1]

### Measuring Pressure

#### Piezometer

The weight of a liquid can be used to balance its own pressure. Support a liquid in a pipe has pressure P. If a hole is made in the top of the pipe and a vertical tube affixed to it, the liquid will rise up the tube until it's weight balances the force due to pressure.


> [!figure] ![[Screenshot 2025-12-01 at 13.56.53@2x.png]]
> © University of Southampton [^1]

Let the cross-sectional area of the tube be A. The force upwards on the bottom of the liquid in the tube is:

$$
F=PA
$$

This must be equal to the weight of the liquid in the tube, as the two forces are in equilibrium. 

$$
F=ma=\rho Ahg
$$

Therefore, pressure is given by:

$$
\uparrow PA = \rho Ahg \downarrow \qquad \boxed{P=\rho hg}
$$

#### Barometer

![[Screenshot 2025-12-01 at 14.07.03@2x.png]]

A barometer is a device for measuring atmospheric pressure. Is a vertical tube like the piezometer, but sealed at the top. The barometer equation is:

$$
P_{atm}=\rho_{mercury} \times g \times h
$$

$\rho_{mercury}$ is the density of mercury, which is approximately $13600\ kgm^{-3}$.

#### U-tube Manometer

> [!figure] ![[Screenshot 2025-12-01 at 14.27.37@2x.png]]
> © University of Southampton [^1]

A U-tube manometer consists of a U-shaped tube partially filled with a liquid. A gas pressure is applied to one side of the tube, and the other is open to the atmosphere. The pressure difference is calculated from the height difference of the liquid surface. 

$$
P-P_{atm}=\rho gh
$$

The liquid is chosen according to the range of pressures expected. Mercury is often used for high pressures, water, alcohol or oil for lower pressures.

#### Spring

> [!figure] ![[Screenshot 2025-12-01 at 14.30.46@2x.png]]
> © University of Southampton [^1]

The simplest pressure gauge has a piston backed by a spring. The force exerted on the piston by the gas is $F_{1}=PA$, while the force exerted by the spring is given by $F_{2}=k(x_{0}-x)$ where $k$ is a spring stiffness constant and $x_{0}$ is the unstretched length of the spring (see [[Mechanical Science/Elasticity#Hooke's Law|Elasticity]]).

These two forces must be equal, so: 

$$
PA=k(x_{0}-x) \qquad P=\frac{k(x_{0}-x)}{A}
$$




[^1]: https://blackboard.soton.ac.uk/ultra/courses/_232725_1/outline/edit/document/_7643483_1?courseId=_232725_1&view=content&state=view
