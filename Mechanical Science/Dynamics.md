---
tags:
  - dynamics
module: Mechanical Science
component: Dynamics
permalink: mechanical-science/dynamics
---
## Dynamics Formula

**[[#Momentum]]**, **[[#Impulse]]**

$$
p=mv \qquad J=\Delta p \qquad J=F\Delta t \qquad J=m\Delta v
$$
## Momentum

Momentum is a measure of the quantity of motion possessed by a body. It is normally given as $p$ and has the units $kg\ m/s$ or $Ns$. It is a **vector**, because velocity is a vector.

$$
\text{Momentum}=\text{Mass}\times \text{Velocity}
$$
$$
p=mv
$$

Momentum helps explain some of the most important interactions in nature. If an object is standing still, it will have no momentum. When it begins to move, it will have momentum in the same direction as it is travelling. The faster the object, the larger its momentum.

For a body with constant mass, change in momentum is the product of mass and change in velocity. 

$$
\Delta p=m(\Delta v)
$$

The rate of change of momentum is the mass times the change of velocity, which is equivalent to mass times acceleration. Therefore, change in momentum over time is the $F$ in [[Motion#Newton's Second Law|Newton's Second Law]].

$$
\frac{\Delta p}{t}=\frac{m\Delta v}{t}=m\left( \frac{\Delta v}{t} \right)=ma
$$

$$
F=\frac{\Delta p}{t} \qquad kg\cdot ms^{-2}
$$

If a particle changes its momentum, a force must have acted upon it. If a force acts on a particle, it will change its momentum. 


> [!WARNING] Important: Conservation of Momentum
> If there are no external forces on a particle or system, there is no change in mometum. Therefore, for any system which is **closed**, the total momentum is conserved. 

### Impulse

When a force acts on an object, it will change its momentum. Impulse is used to describe or quantify the effect of force acting over time to change the momentum of an object. 

Impulse is represented by the symbol **J** is usually expressed in **Newton-seconds** or **kg m/s**.

$$
\text{Impulse, J}=\Delta p=p_{final}-p_{initial}
$$

If the force is constant, we can also represent it force over time:

$$
\text{Impulse, J}=F\Delta t
$$
So impulse is given as:

$$
J=F\Delta t=\Delta p=m\Delta v
$$
Therefore, a constant mass:

$$
F=m \frac{\Delta v}{\Delta t}=ma
$$
But if velocity is constant instead, then:

$$
F=v \frac{\Delta m}{\Delta t}=ma
$$

This new definition allows us to consider the pressure (force/area) on a surface from things like wind or a jet of water.

## Work

Work is the energy transferred to or from a body via the application of force that results in displacement. For example, pushing a ball up a hill. It is measured in $kg\ m^2\ s^{-2}$ or Joules ($J$).

Consider a particle lying in three-dimensional space. The work required to move the particle from one arbitrary point A to another point B is defined as:

$$
W_{AB}=\int_{A}^BF \cdot dr
$$

Where $F$ is the force required to move the particle, and $r$ is the position vector. Note that this process involves the [[Mechanical Science/Vectors#Dot Product|dot product]] of two vectors, which results in a scalar. The dot product is:

$$
W=F\cdot dr=|F| |dr| \cos\theta
$$

Where $\theta$ is the angle between the force and direction of travel.

Moving in a one-dimensional space, such as in x-axis, the force will be in line with the path of the particle, so $\cos \theta=\cos 0=1$. In this one dimensional problem, the work required to move the particle is $W=Fd$.

> [!TIP] The direction of displacement or travel is always in line with the direction of force applied

### Power

Power is the rate of doing work:

$$
\text{Power}=\frac{\text{Work done}}{\text{Time taken}}
$$
Therefore:

$$
\text{Power}=\frac{\text{Force} \times \text{Distance}}{Time}=F\cos\theta \frac{x}{t}=F\cos\theta \times v
$$


### Work against a spring

The force required to extend or compress a spring by length $x$ is $F=kx$ where $k$ is the spring constant (see [[Mechanical Science/Elasticity#Hooke's Law|Hooke's Law]]). When a force is applied to a spring, it is normally applied gradually, the force increasing from zero up to its maximum value $F$, producing maximum extension $x$.

The average force needed to compress the spring is based on a starting force of zero, and a final force $F$:

$$
F_{avg}=\frac{1}{2}(F_{0}+F_{x})=\frac{1}{2}F
$$

Hence, the work done against the spring is (where $x$ represents displacement instead of $d$):

$$
W_{s}=Fx
$$
$$
W_{s}=\frac{1}{2}F \times x \qquad W_{s}=\frac{1}{2}(kx) \times x \qquad \boxed{W_{s}=\frac{1}{2}kx^2}
$$

The work done by stretching a spring can also be calculated based on the area under the graph of $F$ against $x$. 

### Work against gravity

Suppose you have a mass $m$ and you want to lift it up. If you lift an object up, you need to overcome the gravitational force $-mg$ for the object to move in a vertical distance, $h$.

$$
W_{g}=Fd=mgh
$$

If the mass is released and the particle calls back to ground, then gravity does the work:

$$
W_{g}=-Fd=-mgh
$$

### Work against friction

The applied force $F$ to overcome friction is (see [[Statics#Coefficient of Static Friction|static friction]]):

$$
F=\micro N=\micro mg
$$

For a constant force, the work agains friction $W_{f}$ is applied force times the distance moved:

$$
W_{f}= \micro mg \Delta d
$$
