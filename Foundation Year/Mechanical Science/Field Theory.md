---
tags:
  - field-theory
module: Mechanical Science
component: Field Theory
permalink: fy/mechanical-science/field-theory
---
## Introduction

Classical field theory is a way of thinking about how forces interact with matter. The matter might be macroscopic (large, e.g planets) or microscopic (e.g electrons). It could be discrete, separate objects, or continuous like gases or fluids.


## Newton's Law of Universal Gravitation

Let us consider two point masses, $m_{1}$ and $m_{2}$, separated by some distance $r$. Then the force acting on each mass is given by:

$$
F=\frac{Gm_{1}m_{2}}{r^2}
$$

Here G is the gravitational constant (also referred to as the Newton constant) given by $G=6.673\times 10^{-11}m^3kg^{-1}s^{-2}$.

If the mass of one object is doubled, the force between them doubles. If the distance between the objects doubles, the force between them is divided by 4. Newton's law is an empirical law, worked out by thinking and tested by experiment. 

If we think if $r$ as a vector distance from mass 1 to mass 2, then the vector distance from mass 2 to mass 1 will be $-r$ and the force on mass 1 due to mass 2 will be equal and opposite to the force on mass 2 due to mass 1.

This is in agreement with Newton's Third Law of Motion: "For every action, there is an equal and opposite reaction".

The forces act along a straight line that joins the two masses. This line passes through the centre of mass of the two objects. So there is no torque on either of the masses as a result of gravitational attraction.

Newton's 2nd Law tells us that because there is a force acting on mass 1 it must accelerate in the direction of that force. With an equal and opposite force on mass 2, it must be accelerating towards mass 1. In the absence of any other forces, the two bodies fall towards each other. If one object is much larger than the other, we can think of that object as stationary and assume that the other object moves towards it (e.g a tennis ball falling towards the earth)

## Principle of Superposition

> [!figure] ![[Principle of superposition.png]]
> © University of Southampton [^1]

Consider a particle mass $m_{0}$ surrounded by three other particles of masses $m_{1}$ $m_{2}$  and $m_{3}$. According to the laws of gravitation:

1. First force on mass $m_{0}$ exerted by the mass $m_{1}$ will be $F=\frac{Gm_{1}m_{0}}{r^2_{1}}$
2. Second force on mass $m_{0}$ exerted by the mass $m_{2}$ will be $F=\frac{Gm_{2}m_{0}}{r^2_{2}}$
3. Third force on mass $m_{0}$ exerted by the mass $m_{3}$ will be $F=\frac{Gm_{3}m_{0}}{r^2_{3}}$

The resultant force $F_{R}$ acting on mass $m_{0}$ will be the vector sum of the forces:

$$
F_{R}=\overrightarrow{F_{1}}+\overrightarrow{F_{2}}+\overrightarrow{F_{3}}
$$

$$
|F_{R}|=\sqrt{ \left( \sum F_{i} \right)^2+\left( \sum F_{j} \right)^2 }
$$

$$
\tan\theta=\frac{\sum F_{j}}{\sum F_{i}}
$$

> [!figure] ![[Principle of superposition 2.png]]
> © University of Southampton [^1]

### Examples

#### Example 1

Calculate the acceleration due to gravity at the Earth's surface. The mass of the Earth is $5.9736 \times 10^{24}$. The radius of the Earth is $6,371 \text{ km}$. 

$$
G=6.673\times 10^{-11}\text{m}^3\text{kg}^{-1}\text{s}^{-2}
$$
Given:

- $m_{E}=5.9736 \times 10^{24}\text{ kg}$
- $r_{E}=6,371\times 10^{3}\text{ m}$
- $G=6.673\times 10^{-11}\text{m}^3\text{kg}^{-1}\text{s}^{-2}$

We know that the force on object mass $m$ on the Earth surface is given as:

$$
F=\frac{Gm_{E}m_{o}}{r^2}
$$

We also know from Newton's law that:

$$
F=m_{o}a
$$

So:

$$
\frac{Gm_{E}m_{o}}{r^2}=m_{o}a
$$

$$
a=\frac{Gm_{E}m_{o}}{m_{o}r^2}=\frac{Gm_{E}}{r^2}
$$

$$
a=\frac{()6.673 \times 10^{-11}) \times (5.9736\times 10^{24})}{(6371\times 10^{3})^2}=9.8\text{ms}^{-2}
$$

#### Example 2

Two planets have masses $7.55\times 10^{24}\text{ kg}$ and $9.04 \times 10^{24}\text{ kg}$ respectively. If the force due to gravity between the two planets is $6.99 \times 10^{17}\text{ N}$, how far apart are the planets?

Given:

- $m_{1}=7.55 \times 10^{24}\text{ kg}$
- $m_{2}=9.04 \times 10^{24} \text{ kg}$
- $F=6.99 \times 10^{17} \text{ N}$
- $r=\ ?$
- $G=6.673\times 10^{-11}\text{m}^3\text{kg}^{-1}\text{s}^{-2}$

We know that the force on object mass $m$ on the Earth surface is given as:

$$
F=\frac{Gm_{E}m_{o}}{r^2}
$$

We want to find $r$, so start by rearranging:

$$
r=\sqrt{ \frac{Gm_{1}m_{2}}{F} }
$$

So:

$$
r=\sqrt{ \frac{(6.673\times 10^{-11})(7.55 \times 10^{24})(9.04 \times 10^{24})}{6.99 \times 10^{17}} }
$$

$$
r=8.2491\times 10^{10} \text{ m}
$$


## Orbits

Let's consider two objects with masses $m_{1}$ and $m_{2}$ which are in orbit. A system like this orbits around its centre of mass so both objects are in motion.

> [!figure] ![[Orbit example.png]]
> © University of Southampton [^2]

If $m_{1}\gg m_{2}$ then the orbit of $m_{1}$ about the CoM will be very small and we can consider it to be stationary. Note also that orbits are generally elliptical but we will take the special case of a circular orbit.

### Gravitational & Centripetal Force

Let us consider some much smaller body, mass $m$, in a circular orbit, radius $r$ about some much heavier body of mass $M$. The attraction force of gravity provides the centripetal force that keeps smaller mass $m$ in orbit around the heavier body, $M$.

The gravitational force between two masses, $M$ and $m$, is given by:

$$
F=\frac{GMm}{r^2}
$$

$F$ is also the centripetal force, therefore:

$$
F=\frac{GMm}{r^2}=mr\omega^2=\frac{mv^2}{r}
$$


### Gravitational Field Strength

The gravitational field strength, $g$ at a distance $r$ from a body of mass $M$ is given by the equation:

$$
g=\frac{GM}{r^2}
$$

By multiplying both side with the mass of orbiting body $m$:

$$
mg=\frac{GMm}{r^2}=\frac{mv^2}{r}
$$

Finally, we can find an equation for the gravitational field strength for particular orbital speeds and radii:

$$
g=\frac{v^2}{r}
$$

### Speed of Orbiting Object

Equating the two expressions for gravitational and centripetal force:

$$
\frac{GMm}{r^2}=\frac{mv^2}{r}\qquad \rightarrow \qquad \frac{GM}{r}=v^2
$$

So the speed of orbiting body, mass $m$ is given by:

$$
v=\sqrt{ \frac{GM}{r} }
$$

The equation for orbital velocity is independent of the mass of the orbiting body. The orbital velocity depends on the radius of orbit, it decreases as radius increases. The orbital velocity depends on the mass of the body it is orbiting.

### Period of Orbits

The force due to gravity acting on $m$ is

$$
F=\frac{GMm}{r^2}
$$

But the force is the cause of the circuar motion of the orbit, the centripetal force, and we know for circular motion:

$$
F=mr\omega^2
$$

So equating the expressions for $F$ and rearranging:

$$
mr\omega^2=\frac{GMm}{r^2}\qquad \omega^2=\frac{GM}{r^3}
$$

$$
\omega=\frac{2\pi}{T} \qquad T=\frac{2\pi}{\omega}\qquad T=2\pi \sqrt{ \frac{r^3}{GM} }
$$

And since all terms except for $r^3$ is a constant, we can say:

$$
T=kr^{\frac{3}{2}}
$$

This is Kepler's Third law of Planetary Motion. It is often simplified to:

$$
T\propto r^{3/2} \qquad \text{or} \qquad T^2\propto r^3
$$


### Examples

#### Example 1

Give that the period of the Moon is approximately 27 days, calculate its distance from the centre of the earth, given:

- $T=27\text{ days}$
- $m_{E}=5.9736\times 10^{24}\text{ kg}$
- $G=6.673\times 10^{-11}\text{m}^3\text{kg}^{-1}\text{s}^{-2}$

We know that:

$$
mr\omega^2=\frac{GMm}{r^2}
$$

We can say that:

$$
r^3=\frac{GM}{\omega^2}\dots
$$

We know that:

$$
T=\frac{2\pi}{\omega} \qquad \rightarrow \qquad \omega=\frac{2\pi}{T}
$$
$$
\omega=\frac{2\pi}{27\times 24 \times 60 \times 60}=2.69 \times 10^{-6}\text{rads}^{-1}
$$

Therefore:

$$
r^3=\frac{(6.673\times 10^{-11})(5.9736\times 10^{24})}{2.69 \times 10^{-6}}=5.5\times 10^{25}\text{m}^3
$$

$$
r=\sqrt[3]{5.5\times 10^{25}}=380\times 10^6\text{ m}
$$

#### Example 2

A satellite is on a highly elliptical orbit around the earth, where its closest distance from the Earth is 1000km (perigee) and its furthest distance is 1500 km (apogee), both measured from the centre of the Earth. What is the ratio of its linear velocities at perigee and apogee?

So we will have two values of $r$:

$$
r_{P}=1000\text{ km} \qquad r_{A}=1500\text{ km}
$$

We know that:

$$
\frac{GMm}{r^2}=\frac{mv^2}{r} \qquad \rightarrow \qquad v^2=\frac{GM}{r}
$$

At perigee:

$$
v^2_{P}=\frac{GM}{r_{P}}
$$

At apogee:

$$
v_{A}^2=\frac{GM}{r_{A}}
$$

To get that ratio we can say:

$$
\frac{v_{A}^2}{v_{P}^2}=\frac{GM}{r_{A}}\div \frac{GM}{r_{P}}=\frac{GM}{r_{A}}\times \frac{r_{P}}{GM}=\frac{r_{P}}{r_{A}}
$$

Therefore:

$$
\left( \frac{v_{A}}{v_{P}} \right)^2=\frac{r_{P}}{r_{A}}
$$
$$
\frac{v_{A}}{v_{P}}=\sqrt{ \frac{r_{P}}{r_{A}} }=\sqrt{ \frac{1000\times 10^3}{1500 \times 10^3} }=0.82
$$

The ratio is $0.82$, or we can say that:

$$
v_{A}=0.82 v_{P}
$$

So when the satellite is apogee it goes slower than when it is at perigee.

#### Example 3

A planet has two satellites. The satellite closest to the planet has orbital period 42 hours and orbital radius $3.95 \times 10^{5}\text{ km}$. The satellite furthest from the planet has orbital radius $4.84 \times 10^{5}\text{ km}$. Calculate the orbital period of the satellite furthest from the planet, giving your answer in hours.

Given:

- $r_{c}=3.95 \times 10^{5}\text{ km}$
- $T_{c}=42\text{ hours}$
- $r_{f}=4.84 \times 10^{5}\text{ km}$
- $T_{f}=\ ?$

We know that:

$$
T^2 \propto r^3
$$

So:

$$
\frac{T^2_{c}}{r^3_{c}}=\frac{T^2_{f}}{r^3_{f}} \qquad \rightarrow \qquad T^2_{f}=\frac{T^2_{c}f^3_{f}}{r^3_{c}}
$$

$$
T_{f}=\sqrt{ \frac{T^2_{c}r^3_{f}}{r^3_{c}} }=\sqrt{ \frac{(42^2)(4.84 \times 10^{5} \times 10^3)^3}{(3.95 \times 10^{5})^3} }=\sqrt{ 3265.37 }
$$

$$
T_{f}=57\text{ hours}
$$


## Electric Fields

Electric charge, $Q$, is a physical property of nature and is measured in Coulombs (C) (see [[Foundation Year/Electricity & Electronics/Circuit Theory (1)#Charge|Circuit Theory]]). Some particles are charged, such as protons (positive charged) and electron (negative charged).

Like charges repeal, while opposite charges attract.

We have discussed gravity and found that two point masses are attracted to each other with a force given by:

$$
F=\frac{GM_{1}M_{2}}{r^2}
$$

Where $G$ is the gravitational constant, $M$ are the two masses, and $r$ is the separation. We will now consider the forces between two particles due to their electrical charge.

### Coulomb's Law

We can express the magnitude of the force between two charged particles by:

$$
F=\frac{1}{4\pi\epsilon} \frac{Q_{1}Q_{2}}{r^2}
$$

Where $Q$ is the magnitude of the electric charges of the two particles and $r$ is their separation. 

$\epsilon$ is a quantity referred to as the permittivity of the medium separating the two bodies. It is a measure of the ability of the medium to amplify or attenuate electric fields. We often discuss electric fields in a vacuum, where $\epsilon$ has a value of:

$$
\epsilon_{o}=8.854 \times 10^{-12}\text{kg}^{-1}\text{m}^{-3}\text{s}^4
\text{A}^2$$

The formula for the magnitude of forces between two particles looks similar to the formula for two masses due to gravity, however there is a major difference when we think about the direction of force. 

Gravitational forces are always attractive, while electric charges and be attractive or repulsive.

### Electric Force

If we are to account for the different behaviour of different charge fields, we need to be able to describe the direction of the force as well as its magnitude. 

Consider two point charges at locations $r_{1}$ and $r_{2}$ (relative an an arbitrary origin), with different signs.

> [!figure] ![[Screenshot 2026-03-17 at 14.18.38@2x.png]]
> © University of Southampton [^3]


The force $F_{12}$ on charge 1 due to charge 2 aligns with the vector $r_{12}$. It pulls charge 1 towards charge 2. The force $F_{21}$ on charge 2 due to charge 1 aligns with the vector $r_{21}$. It pulls charge 2 towards charge 1.

Vector $r_{21}=-r_{12}$ and we can write:

$$
r_{21}=|r_{21}|\widehat{r}_{21} \qquad r_{12}=|r_{12}|\widehat{r}_{12}
$$


> [!NOTE] Recap: Vector notation
> Vectors have $|\text{magnitude}|$ and $\widehat{\text{direction}}$. Therefore, $r_{21}$ is made up of its length times its direction

$$
F_{12}=-F_{21}
$$

$$
=\frac{1}{4\pi\epsilon} \frac{Q_{1}Q_{2}}{|r_{12}|^3} |r_{12}|\widehat{r}_{12}=\frac{1}{4\pi\epsilon} \frac{Q_{1}Q_{2}}{|r_{12}|^2} \widehat{r}_{12}=-\frac{1}{4\pi\epsilon} \frac{Q_{1}Q_{2}}{|r_{21}|^2} \widehat{r}_{21}
$$


Now consider two identical charges (both positive, or negative).

> [!figure] ![[Screenshot 2026-03-19 at 10.08.31@2x.png]]
> © University of Southampton [^3]

The force $F_{12}$ on charge 1 due to charge 2 aligns with the vector $r_{12}$. It pushes charge 1 away from charge 2. The force $F_{21}$ on charge 2 due to charge 1 aligns with the vector $r_{12}$. It pushes charge 2 away from charge 1.

So again:

$$
F_{12}=\frac{1}{4\pi\epsilon} \frac{Q_{1}Q_{2}}{|r_{12}|^3} |r_{21}|\widehat{r}_{21}=\frac{1}{4\pi\epsilon} \frac{Q_{1}Q_{2}}{|r_{12}|^2} \widehat{r}_{21}=-\frac{1}{4\pi\epsilon} \frac{Q_{1}Q_{2}}{|r_{21}|^2} \widehat{r}_{12}=-F_{21}
$$

Note that:

1. $F_{12}=-F_{21}$ **always holds**, whether the force is attractive or repulsive
2. $|r_{12}|=|r_{21}|$ and they are used interchangeably


### Electric Fields

Electric fields are defined by the direction in which a positive test charge experiences a force. They "flow" from a positive charge towards a negative charge. Electric fields from nearby objects add a combine.

The acceleration due to gravity on a mass $m$ resulting from an object of mass $M$ is given by

$$
\frac{GMm}{r^2}=ma \qquad \rightarrow \qquad a=\frac{GM}{r^2}
$$

Similarly, the electric field strength at position $r$ due to an object with charge $Q$ at the origin is given by:

$$
E=\frac{1}{4\pi\epsilon} \frac{Q}{|r|^2}=\widehat{r}
$$

The units of $E$ are $\text{N C}^{-1}$ (nNewtons per Coulomb).

If the electric field is due to two oppositely charged parallel plates, or we are very close to a point charge, then the field lines are evenly spaced and parallel, indicating that the field is uniform. This is similar to gravitational fields very close to a planet's surface.

The strength of the electric field at a point in the space around a charged body determines the size of the force exerted on it. Electric field strength, $E$, is defined as the force $F$ per unit charge $Q$ at a point in the field:

$$
E=\frac{F}{Q} \qquad \text{ Units: N/C}
$$

Compare this with gravitational field strength:

$$
g=\frac{F}{m} \qquad \text{Units: N/kg}
$$

### Examples

#### Example 1

> [!figure] ![[Screenshot 2026-03-19 at 10.32.17@2x.png]]
> © University of Southampton [^3]

Suppose that two small objects each have an electric charge of $1 \micro C$. If they are 1 metre apart, in a vacuum, what is the electric force between them?

To find force, we can use:

$$
F_{e}=\frac{1}{4\pi\epsilon} \frac{Q_{1}Q_{2}}{r^2}
$$

And because it is in a vacuum:

$$
\epsilon=8.854 \times 10^{-12}\text{kg}^{-1}\text{m}^{-3}\text{s}^4\text{A}^2
$$
Therefore:

$$
F_{e}=\frac{1}{4\pi(8.854\times 10^{-12})} \times \frac{(1\times 10^{-6})(1 \times 10^{-6})}{1^2}
$$
$$
F_{e}=9 \times 10^{-3}\text{ N}
$$

#### Example 2

Suppose that two small objects each have an electric charge of $1.6 \times 10^{-19}\text{ C}$ and a mass of $1.67 \times 10^{-27} \text{ kg}$. If they are 1 metre apart, in a vacuum, which force (electric or gravitational) is stronger?

$$
F_{e}=\frac{1}{4\pi(8.854 \times 10^{-12})} \times \frac{(1.6 \times 10^{-19})(1.6 \times 10^{-19})}{1^2}
$$

$$
\boxed{F_{e}=2.2 \times 10^{-28} \text{ N}}
$$

$$
F_{G}=\frac{GM_{1}M_{2}}{r^2}
$$

$$
F_{G}=\frac{(6.673\times 10^{-11})(1.67 \times 10^{-27})(1.67 \times 10^{-27})}{1^2}
$$

$$
\boxed{F_{G}=1.86 \times 10^{-64} \text{ N}}
$$

Electric forces are around 36 orders of magnitude stronger than gravitational forces. Yet the universe, on a large scale, appears to be governed by gravity. On a large scale, most objects contain close to the same number of protons and electrons, to are electrically neutral. 

#### Example 3

Calculate the electric force between two bodies carrying charges $1.5 \times 10^{-10}\text{ C}$ and $6.5 \times 10^{-10} \text{ C}$ respectively. The bodies are 0.004m apart.

Compare the electric force with the gravitational force given that the masses of the two bodies are $5.0 \times 10^{-2}$ and $3.0 \times 10^{-2} \text{ kg}$ respectively.

Take $\epsilon=8.854 \times 10^{-12}$
Take $G=6.673 \times 10^{-11}$

First, find electric force:

$$
F_{e}=\frac{1}{4\pi(8.854 \times 10^{-12})}\times \frac{(1.5 \times 10^{-10})(6.5 \times 10^{-10})}{0.004^2}
$$
$$
F_{e}=5.4\times 10^{-5} \text{ N}
$$

Then find gravitational force:

$$
F_{G}=\frac{(6.673 \times 10^{-11})(5 \times 10^{-2})(3 \times 10^{-2})}{0.004^2}
$$

$$
F_{G}=6.2 \times 10^{-9} \text{ N}
$$

#### Example 4

Three small electric charges, each having $Q=2\micro C$, are held at the corners of an equilateral triangle whose sides are 0.1 metres in length.

What is the magnitude of the electrostatic force felt by each of the charges?

- $Q=2\micro C$
- $Q_{12,23,31}=0.1m$
- $\angle=60^{\circ}$
- $\epsilon=8.85 \times 10^{-12}$

Charge $Q_{1}$ will have two repelling forces from $Q_{2}$ and $Q_{3}$. So the total force on $Q_{1}=F_{21}+F_{31}$

> [!figure] ![[Screenshot 2026-03-19 at 11.53.34@2x.png]]
> © University of Southampton [^4]

Remember:

$$
F_{e}=\frac{1}{4\pi\epsilon} \frac{Q_{1}Q_{2}}{r^2}=\frac{1}{4\pi\epsilon} \frac{Q^2}{r^2} \qquad (Q_{1}=Q_{2})
$$
In $i$ direction:

$$
F_{e}i=F_{21}\cos 60^{\circ}i + F_{31}i
$$
$$
F_{e}i=\frac{1}{4\pi\epsilon} \frac{Q^2}{r^2}\cos 60^{\circ}i+\frac{1}{4\pi\epsilon} \frac{Q^2}{r^2}i
$$
$$
=\frac{1}{4\pi(8.85\times 10^{-12})} \frac{(2 \times 10^{-6})^2}{0.1^2}\cos 60^{\circ}i+\frac{1}{4\pi\epsilon} \frac{(2 \times 10^{-6})^2}{0.1^2}i
$$
$$
=1.8i+3.6i=5.4i \text{ N}
$$

In $j$ direction:

$$
F_{e}j=F_{21}\sin 60^{\circ}j
$$
$$
F_{e}j=\frac{1}{4\pi\epsilon} \frac{Q^2}{r^2}\sin 60^{\circ}j
$$
$$
=\frac{1}{4\pi(8.85 \times 10^{-12})} \frac{(2 \times 10^{-6})^2}{0.1^2}\sin 60^{\circ}j
$$
$$
=3.1j\text{ N}
$$

Therefore, the electrostatic force felt by each charge is:

$$
F_{e}=5.4i + 3.1j
$$
$$
|F_{e}|=\sqrt{ 5.3^2+3.1^2 }=6.2\text{ N}
$$

#### Example 5

> [!figure] ![[Screenshot 2026-03-19 at 12.08.18@2x.png]]
> © University of Southampton [^4]

Two point charges in a vacuum, one of $8 \text{ nC}$ and the other of $-8 \text{ nC}$ are placed 4 metres apart. What is the electric field E half way along the line between the two charges? What about if the charges have the same magnitude and are both positive?

> [!figure] ![[Screenshot 2026-03-19 at 12.22.46@2x.png]]
> © University of Southampton [^4]

Both fields are pointing in the $x$ direction, so both are positive. Therefore, the total field at point $O$ is given as:

$$
E=\frac{1}{4\pi\epsilon} \frac{Q^+}{r^2}+\frac{1}{4\pi\epsilon} \frac{Q^-}{r^2}
$$

$$
E=\frac{1}{4\pi\epsilon}\left[ \frac{2Q}{r^2} \right]
$$

$$
E=\frac{1}{4\pi(8.85\times 10^{-12})^2}\times \frac{2(8\times 10^{-9})}{2^2}
$$

$$
E=36 \text{ NC}^{-1}
$$

If the two points have the same charge, the the forces repeal each other.

> [!figure] ![[Screenshot 2026-03-19 at 12.27.31@2x.png]]
> © University of Southampton [^4]

So the total electric field at point O is:

$$
E=\frac{1}{4\pi\epsilon} \frac{Q^+}{r^2}-\frac{1}{4\pi\epsilon} \frac{Q^+}{r^2}
$$


#### Example 6

Calculate the size of the electric field at a distance $5.3 \times 10^{-11}\text{ m}$ from a point charge of $+1.6 \times 10^{-19} \text{ C}$. What is the force acting on a charge of $-1.6 \times 10^{-19} \text{ C}$ at this distance from the positive charge?

> [!figure] ![[Screenshot 2026-03-19 at 12.33.50@2x.png]]
> © University of Southampton [^4]

By using:

$$
E=\frac{1}{4\pi\epsilon} \frac{Q}{r^2}
$$
$$
E=\frac{1}{4\pi(8.85 \times 10^{-12})} \times \frac{1.6\times 10^{-19}}{(5.3 \times 10^{-11})^2}
$$

$$
E=5.12 \times 10^{11}\text{ Nm}^{-1}
$$

> [!figure] ![[Screenshot 2026-03-19 at 12.37.48@2x.png]]
> © University of Southampton [^4]

$$
E=\frac{F}{Q} \qquad \rightarrow \qquad F=QE
$$

$$
F=QE=()1.6 \times 10^{-19})(5.12 \times 10^{11})
$$

$$
F=8.192 \times 10^{-9} \text{ N}
$$



[^1]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456252_1?courseId=_232721_1&view=content&state=view
[^2]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456253_1?courseId=_232721_1&view=content&state=view
[^3]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456260_1?courseId=_232721_1&view=content&state=view
[^4]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456261_1?courseId=_232721_1&view=content&state=view
