---
tags:
  - dynamics
module: Mechanical Science
component: Dynamics
permalink: fy/mechanical-science/dynamics
---
## Dynamics Formula

**[[#Momentum]]**
Measure of quantity of motion, measured in $kg\ m/s$ or $Ns$
$$
p=mv \qquad F=\frac{\Delta p}{t}
$$

**[[#Impulse]]**
Change in momentum
$$
J=\Delta p \qquad J=F\Delta t \qquad J=m\Delta v
$$

**[[#Work]]**
Three-dimensional, where $r$ is the relative positional vector

$$
W_{AB}=\int_{A}^BF \cdot \Delta r \qquad W=|F| |\Delta r| \cos\theta
$$

**[[#Work against a spring]]**, **[[#Work against gravity]]**, **[[#Work against friction]]**
One-dimensional
$$
W_{s}=\frac{1}{2}kx^2 \qquad W_{g}=mgh \qquad W_{f}= \micro mg \cdot \Delta d
$$

**[[#Elastic Collisions]]**
Where $m_{t}$ is the total mass
$$
m_{1}u_{1}+m_{2}u_{2}=m_{1}v_{1}+m_{2}v_{2} \qquad v_{1}=\frac{m_{1}-m_{2}}{m_{t}}u_{1}+\frac{2m_{2}}{m_{t}}u_{2} \qquad v_{2}=\frac{m_{2}-m_{1}}{m_{t}}u_{2}+\frac{2m_{1}}{m_{t}}u_{1}
$$

**[[#Inelastic Collisions]]**
Where $m_{t}$ is the total mass
$$
m_{1}u_{1}+m_{2}u_{2}=v\cdot m_{t} \qquad v=\frac{m_{1}u_{1}+m_{2}u_{2}}{m_{t}}
$$

**[[#Newton's Law of Restitution]]**

$$
v=-eu
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
W_{AB}=\int_{A}^BF \cdot \Delta r
$$

Where $F$ is the force required to move the particle, and $r$ is the position vector. Note that this process involves the [[Foundation Year/Mechanical Science/Vectors#Dot Product|dot product]] of two vectors, which results in a scalar. The dot product is:

$$
W=F\cdot \Delta r \qquad = \qquad |F| |\Delta r| \cos\theta
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

The force required to extend or compress a spring by length $x$ is $F=kx$ where $k$ is the spring constant (see [[Foundation Year/Mechanical Science/Elasticity#Hooke's Law|Hooke's Law]]). When a force is applied to a spring, it is normally applied gradually, the force increasing from zero up to its maximum value $F$, producing maximum extension $x$.

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

## Collisions

Consider a one dimensional collision between two bodies. The collision may be elastic (e.g two balls colliding), or inelastic (e.g a ball and a perfectly sticky floor). 

> [!figure] ![[2D collision.png]]
> © University of Southampton [^1]

For completely elastic collisions, the linear momentum and kinetic energy of the system are both conserved. No kinetic energy is lost in the collision, it is just redistributed between the two objects.

For completely inelastic collisions, only linear momentum is conserved. Kinetic energy is lost in the form of heat and sound. 

Perfectly elastic and inelastic collisions only exist in theory. In the real world, the elasticity of a collision depends on the bodies colliding, and will tend towards elasticity or inelasticity. This is represented by the *elasticity* or *coefficient of restitution*:

$$
C_{R}=\left|\frac{v_{1}-v_{2}}{u_{1}-u_{2}}\right|
$$

Where $u$ is the initial velocity of the bodies, and $v$ is the final velocity (see [[Motion]]). 

### Inelastic Collisions

Consider two bodies having masses $m_{1}$ and $m_{2}$.

> [!figure] ![[Collision before.png]]
> © University of Southampton [^1]

In an inelastic collision, we imagine these masses are covered with glue, such that after colliding they stick together and travel at the same velocity and direction. The total linear momentum is conserved:

$$
p_{before}=p_{after}
$$

> [!figure] ![[Inelastic collision after.png]]
> © University of Southampton [^1]

Just before the impact, each of the masses an independent momentum, which when combined makes up the total momentum of the system:

$$
p_{before}=m_{1}u_{1}+m_{2}u_{2}
$$

Immediately after the collision, the objects are traveling at the same velocity, with only independent mass:

$$
p_{after}=(m_{1}+m_{2})v
$$

If we know the initial velocity and the masses of the objects, the final velocity is therefore:

$$
v=\frac{m_{1}u_{1}+m_{2}u_{2}}{(m_{1}+m_{2})}
$$

In inelastic collisions, kinetic energy is lost (usually as heat and/or sound). We can calculate the kinetic energy loss by calculating the kinetic energy before and after the collision, with the lost energy being the difference.

$$
KE_{before}=\frac{1}{2}m_{1}u_{1}^2+\frac{1}{2}m_{2}u_{2}^2
$$

$$
KE_{after}=\frac{1}{2}(m_{1}+m_{2})v^2
$$

$$
\text{Energy Loss }= KE_{before}-KE_{after}
$$
### Elastic Collisions

Again we consider two bodies having masses $m_{1}$ and $m_{2}$.

> [!figure] ![[Collision before.png]]
> © University of Southampton [^1]

When the masses collide, they do not stick together like inelastic collisions. Each mass leaves the collision with it's own velocity (both magnitude and direction). A perfectly elastic collision conserves kinetic energy, as well as momentum.

> [!figure] ![[Collision before 2.png]]
> © University of Southampton [^1]

Just like inelastic collisions, the momentum before and after the collision is the same.

$$
p_{before}=m_{1}u_{1}+m_{2}u_{2}
$$

After the impact, each has it's own independent velocity.

$$
p_{after}=m_{1}v_{1}+m_{2}v_{2}
$$

Unlike inelastic collisions, there is no kinetic energy loss, so the total kinetic energy before and after the collision is the same.

$$
KE_{before}=\frac{1}{2}m_{1}u_{1}^2+\frac{1}{2}m_{2}u_{2}^2
$$

$$
KE_{after}=\frac{1}{2}m_{1}v_{1}^2+\frac{1}{2}m_{2}v_{2}^2
$$

If we combine the conservation of momentum and kinetic energy equations, we can find the velocity of each object after the collision.

$$
v_{1}=\frac{m_{1}-m_{2}}{m_{1}+m_{2}}u_{1}+\frac{2m_{2}}{m_{1}+m_{2}}u_{2}
$$

$$
v_{2}=\frac{m_{2}-m_{1}}{m_{1}+m_{2}}u_{2}+\frac{2m_{1}}{m_{1}+m_{2}}u_{1}
$$

The final velocity of each object is a weighted mix of both initial velocities, where the weights depend on how the masses compare. The equation is made of two parts, added together. The first half determines how much of the object's original velocity survives the collision.

$$
\frac{m_{1}-m_{2}}{m_{1}+m_{2}}u_{1}
$$

* If $m_{1} \gg m_{2}$, the fraction $\approx 1$ and it keeps almost all of its speed
* If $m_{1}=m_{2}$, the fraction $\approx 0$ and it loses it's original motion
* If $m_{1}<m_{2}$, the fraction becomes negative and it bounces backwards

This term shows how much the other mass affects whether the object keeps going , slows or reverses. In the second half of the equation, it determines how much motion it gains from the other object:

$$
\frac{2m_{2}}{m_{1}+m_{2}}u_{2}
$$

This is the velocity transferred from object 2 to object 1:

* The heavier object 2 is, the more motion it can give
* The bigger the total mass, the smaller the effect (harder to change the effect)

For example:

| Situation                   | Result                                             |
| --------------------------- | -------------------------------------------------- |
| Equal masses                | They swap velocities: $v_{1}=u_{2}$, $v_{2}=u_{1}$ |
| Hit a wall ($m_{2}=\infty$) | Bounce back at same speed: $v_{1}=-u_{1}$          |
| Tiny mass hits big mass     | Small object reverses, big one barely moves        |

### Newton's Law of Restitution

Imagine a ball dropped vertically on to a hard horizontal surface. Suppose it has velocity $u$ before the collision, and velocity $v$ after. It is found that:

$$
v=-eu
$$

Where $e$ is a constant independent of $u$ and $v$. This constant $e$ is called the *coefficient of restitution*.

Imagine a ball dropped at an angle in the vertical direction onto a hard horizontal surface. That object will have velocity in horizontal and vertical components. 

> [!figure] ![[Ball bounce.png]]
> © University of Southampton [^2]

Before the collision, it has velocity with components:

$$
u_{x} \text{ and } u_{y}
$$
After the collision, it has components:

$$
v_{x} \text{ and } v_{y}
$$

Each component of the collision may have it's own value of e, $e_{x}$ and $e_{y}$. According to the law of restitution, the final velocity is given by:

$$
v_{y}=eu_{y} \qquad v_{x}=eu_{x}
$$

Let's assume that $e_{x}=1$ and $e_{y}=e$. The velocity component perpendicular to the surface is changed, however the velocity component parallel to the surface remains unchanged. The force acts entirely in the normal direction:

> [!figure] ![[Ball bounce 2.png]]
> © University of Southampton [^2]

## Centre of Mass

When we have looked at problems where an object is moving (translating), we often draw it as a point. For example, when we considered collisions, we had something like this:

> [!figure] ![[2D collision.png]]
> © University of Southampton [^3]

We could have drawn the objects as a triangle, or a dot. In translation problems, the shape of the object doesn't make a difference. If we don't need to think about the shape of an object, we can replace it with a dot (or point) at the location called the *Centre of Mass*.

> [!figure] ![[Centre of mass.png]]
> © University of Southampton [^3]

We assume that all mass of the object is concentrated into that one location, and acts through that point. 

If an object is rotating freely, with no net linear velocity, then it must be rotation around an axis which passes through its centre of mass. For example, a spinning car tyre.

If an object is suspended by a string from any point on it's edge, it will hang so that the centre of mass is directly below the point of suspension.

> [!figure] ![[Centre of mass 2.png]]
> © University of Southampton [^3]

If an initially immobile object is struck along a line passing through its centre of mass, it will move off in a straight line but will not rotate. If it is struck along a line which does not pass through its centre of mass, it will acquire rotation as well as linear momentum. 

> [!figure] ![[Collision-induced moment.png]]
> © University of Southampton [^3]

### Revision: Torque

Torque is a turning force, and is the same as moment. Both are measured in Nm, and a torque of 50Nm is the same as a moment of 50Nm. Torque is force multiplied by it's perpendicular distance from the fulcrum.

When a number of forces act on a body, their moments can be added together. We use clockwise or anticlockwise to indicate positive or negative directions. 

> [!INFO]- More Torque Revision
> ![[Statics#Torque]]

### Torque & Centre of Mass

> [!figure] ![[Moment about fulcrum.png]]
> © University of Southampton [^3]

Anticlockwise torque around the fulcrum:

$$
\sum \nolimits_{i} m_{i}g(x_{F}-x_{i})
$$

If the masses are balanced, the pivot is at the centre of mass and there is no net torque.

$$
\sum \nolimits_{i} m_{i}g(x_{F}-x_{i})=0
$$

or

$$
\sum \nolimits_{i} m_{i}gx_{F}=\sum \nolimits_{i} m_{i}gx_{i} \rightarrow \sum \nolimits_{i} m_{i}x_{F}=\sum \nolimits_{i} m_{i}x_{i}
$$

But $x_{F}$ is constant:

$$
x_{F} \sum \nolimits_{i} m_{i}=\sum \nolimits_{i} m_{i}x_{i}
$$

And if we call the sum of the masses M, then:

$$
x_{F}=\frac{\sum\nolimits_{i}m_{i}x_{i}}{M}
$$

The position of the centre of mass (taking from the left hand end) is given by:

$$
x_{CM}=\frac{\sum\nolimits_{i}m_{i}x_{i}}{\sum\nolimits_{i}m_{i}}
$$

More generally, in three dimensions:

$$
r_{CM}=\frac{\sum\nolimits_{i}m_{i}r_{i}}{\sum\nolimits_{i}m_{i}}
$$

Where the vectors $r_{i}$ are the positions of all the parts of an object or system, and the $m_{i}$ are the masses of those parts.

### Centre of Gravity

The centre of mass of a body is its mass-averaged position:

$$
x_{CM}=\frac{\sum\nolimits_{i}m_{i}x_{i}}{\sum\nolimits_{i}m_{i}}
$$

An object's centre of gravity is the point through which its weight acts. Provided the gravitational field is constant, this is the same as the centre of mass.

$$
x_{CM}=\frac{\sum\nolimits_{i}m_{i}gx_{i}}{\sum\nolimits_{i}m_{i}g}
$$

### Centre of Volume

An objects centre of volume is the point around an object would balance if it had uniform density.

$$
x_{CM}=\frac{\sum\nolimits_{i}m_{i}x_{i}}{\sum\nolimits_{i}m_{i}}
$$

$$
m=\rho V
$$

$$
x_{CV}=\frac{\sum\nolimits_{i}\rho V_{i}x_{i}}{\sum\nolimits_{i}\rho V_{i}}=\frac{\sum\nolimits_{i}V_{i}x_{i}}{\sum\nolimits_{i}V_{i}}
$$

### Centre of Area (Centroid)

If an object has uniform thickness and density, we can talk about its centre of area or centroid. 

$$
x_{CV}=\frac{\sum\nolimits_{i}\rho V_{i}x_{i}}{\sum\nolimits_{i}\rho V_{i}}=\frac{\sum\nolimits_{i}V_{i}x_{i}}{\sum\nolimits_{i}V_{i}}
$$

$$
V=\text{Area} \times \text{Thickness}
$$

$$
x_{CA}=\frac{\sum\nolimits_{i}tA_{i}x_{i}}{\sum\nolimits_{i}tA_{i}}
$$

For plates and sections where the thickness is uniform, we can cancel the thickness leaving only:

$$
x_{CA}=\frac{\sum\nolimits_{i}A_{i}x_{i}}{\sum\nolimits_{i}A_{i}}
$$

### Symmetry

If a system or object is geometrically symmetrical, its centre of mass or centroid must be at its centre or along its axis of symmetry. The axis of symmetry is the line dividing the figure into two equal parts:

* The centre of mass of a uniform sphere is its centre
* The centre of mass of a uniform circular disc is its centre
* The centre of pass of two point-like objects with equal mass is in the middle of the straight line between them
* Even if they do not have equal masses, the centre of mass of two point-like objects is somewhere along the straight line between them

#### Uniform Shapes

Rectangles, circles, rods and equilateral triangles all have a centre of mass at the centre of the shape, as this is where the lines of symmetry intersect.

#### Triangles

If you have the coordinate of the vertex of a triangle, with respect to the origin, the centre of mass of the triangle is equal to the mean of the $x$ and $y$ coordinates.

> [!figure] ![[Centre of mass triangle.png]]
> © University of Southampton [^4]

$$
x_{CM}=\frac{\sum\nolimits^N_{1}x_{1\dots N}}{N}=\frac{x_{1}+x_{2}+x_{3}}{3}
$$

$$
y_{CM}=\frac{\sum\nolimits^N_{1}y_{1\dots N}}{N}=\frac{y_{1}+y_{2}+y_{3}}{3}
$$

#### Composite Lamina

Suppose the composite lamina is made up of $N$ individual components whose areas are $A_{i}$ and whose centroids have coordinates $x_{i}$ and $y_{i}$. We can find the centroid of the composite lamina by weighting the centroids of the individual components by their area.

$$
x_{CM}=\frac{\sum\nolimits^N_{i=1}A_{i}x_{i}}{\sum\nolimits^N_{{i=1}}A_{i}}
$$

$$
y_{CM}=\frac{\sum\nolimits^N_{i=1}A_{i}y_{i}}{\sum\nolimits^N_{{i=1}}A_{i}}
$$

> [!figure] ![[Centroid.png]]
> © University of Southampton [^4]

### Examples
#### Example 1

A 5kg mass is placed at the origin and a 9kg mass is placed at $x=2m$. What is the centre of mass?

> [!figure] ![[Centre of mass 3.png]]
> © University of Southampton [^3]

$$
x_{CM}=\frac{\sum\nolimits_{i}m_{i}x_{i}}{\sum\nolimits_{i}m_{i}}
$$

$$
x_{CM}=\frac{(5\times 0)+(9\times 2)}{5+9}=\frac{18}{14}=1.29
$$

#### Example 2

An 8kg mass is placed at $y = 3m$. Where should a 10 kg mass be placed along the y-axis so that the centre of mass will be located at $y = 4.5 m$?

> [!figure] ![[Centre of mass 4.png]]
> © University of Southampton [^3]

$$
y_{CM}=\frac{\sum\nolimits_{i}m_{i}y_{i}}{\sum\nolimits_{i}m_{i}}
$$

$$
y_{CM}=\frac{(m_{1}y_{1})+(m_{2}y_{2})}{m_{1}+m_{2}}
$$

$$
y_{2}=\frac{y_{CM}(m_{1}+m_{2})-(m_{1}y_{1})}{m_{2}}
$$

$$
y_{2}=\frac{4.5(8+10)-(8\times 3)}{10}=5.7
$$

#### Example 3

Where is the centre of mass of the solar system? 

It can be assumed that Jupiter is the only planet whose mass is large enough to be relevant.

$$
M_{s}=2\times 10^{30}\ kg \qquad M_{j}=2 \times 10^{27}\ kg \qquad R_{s-j}=800 \times 10^9\ m
$$

> [!figure] ![[Centre of mass planets.png]]
> © University of Southampton [^3]

$$
M_{s}x_{CM}=M_{j}(R_{s-j}-x_{CM})
$$

$$
x_{CM}=\frac{M_{j}R_{s-j}}{M_{s}+M_{j}}
$$

$$
x_{M}=\frac{2\times 10^{27} \cdot 800 \times 10^9}{2\times 10^{30}+2 \times 10 ^{27}}=800 \times 10^6\ m
$$


#### Example 4

An object consists of two straight uniform rods, each of length L, with mass L, at right angles to each other. Find the centre of mass of the object.

> [!figure] ![[Centre of mass 5.png]]
> © University of Southampton [^3]

$$
x_{CM}=\frac{\sum\nolimits_{i}m_{i}x_{i}}{\sum\nolimits_{i}m_{i}}
$$

$$
x_{CM}=\frac{\left( L\times \frac{L}{2} \right)+(L \times 0)}{L+L}=\frac{\frac{L^2}{2}}{2L}=\frac{L}{4}
$$

$$
y_{CM}=\frac{\left( L\times \frac{L}{2} \right)+(L \times 0)}{L+L}=\frac{\frac{L^2}{2}}{2L}=\frac{L}{4}
$$

$$
[x_{CM}, y_{CM}]=\left[ \frac{L}{4} , \frac{L}{4} \right]
$$

#### Example 5

Find the centroid for the lamina below:

> [!figure] ![[Centroid example 1.png]]
> © University of Southampton [^4]

* Draw $x$ and $y$ axis
* Lay the lamina on the axis
* Divide the dross-section up into rectangular pieces
* Get the coordinates for the centre of mass for each rectangular pieces (according to symmetry rules)
* Calculate the area of each rectangular piece 
* Find the coordinate of the centroid for the lamina

> [!figure] ![[Centroid example 2.png]]
> © University of Southampton [^4]

$$
x_{CM}=\frac{\sum\nolimits^N_{i=1}A_{i}x_{i}}{\sum\nolimits^N_{{i=1}}A_{i}} \qquad y_{CM}=\frac{\sum\nolimits^N_{i=1}A_{i}y_{i}}{\sum\nolimits^N_{{i=1}}A_{i}}
$$

$$
x_{CM}=\frac{(16\times 4)+(12\times 1.5)}{16+12}=2.9
$$

$$
y_{CM}=\frac{(16\times 1)+(12\times 4)}{16+12}=2.3
$$

#### Example 6

Find the centre of mass for the triangle below:

> [!figure] ![[Centroid example 3.png]]
> © University of Southampton [^4]

$$
x_{CM}=\frac{\sum\nolimits^N_{1}x_{1\dots N}}{N} \qquad y_{CM}=\frac{\sum\nolimits^N_{1}y_{1\dots N}}{N}
$$

$$
x_{CM}=\frac{2+2+5}{3}=3 \qquad y_{CM}=\frac{2+8+2}{3}=4
$$

## Rotational Dynamics

Rotational motion has equations which are similar to SUVAT, which allow us to link linear and rotational motion.

| LInear Motion          | Circular Motion                              |
| ---------------------- | -------------------------------------------- |
| Displacement, $s$      | Angular Displacement, $\theta$               |
| Velocity, $v$          | Angular Velocity, $\omega$                   |
| Acceleration, $a$      | Angular Acceleration, $\alpha$               |
| $v=u+at$               | $\omega_{2}=\omega_{1}+\alpha t$             |
| $s=\frac{1}{2}(u+v)t$  | $\theta=\frac{1}{2}(\omega_{1}+\omega_{2})t$ |
| $s=ut+\frac{1}{2}at^2$ | $\theta=\omega_{1}t+\frac{1}{2}\alpha t^2$   |
| $v^2=u^2+2as$          | $\omega_{2}^2=\omega_{1}^2+2\alpha\theta$    |

For a body to be in equilibrium, it has to meet two conditions:

- Translation Equilibrium (e.g no linear motion)
	- $\sum F_{x}=ma_{x}=0$ (sum of forces in x direction is zero)
	- $\sum F_{y}=ma_{y}=0$ (sum of forces in y direction is zero)
- Rotational Equilibrium (e.g no rotation)
	- $\sum M=\sum\tau=\sum F\times r=0$ (sum of torque = 0)

### Newton's Laws

![[Motion#Newton's First Law]]

Redefined for rotational motion:

**An object at rest remains at rest and an object moving with a constant angular velocity continues to do so unless acted on by an external torque**

![[Motion#Newton's Second Law]]

We have seen that (linear) force $F$ and (rotational) torque $\tau$ play equivalent roles. We also know that (linear) acceleration $a$ and (rotational) angular acceleration $\alpha$ correspond to each other. Newton's second law for linear motion can be rewritten for rotational motion:

$$
\tau=I\alpha
$$

Where $I$ is the **Moment of Inertia** of a body.

![[Motion#Newton's Third Law]]

Redefined for rotational motion:

**When two bodies interact, for every applied torque there is an equal and opposite reaction torque.**

## Moment of Inertia 

In electrical circuits, voltage and current are linked by Ohm's Law ($V=IR$), where $R$ is the resistance to current flow. For linear motion we have:

$$
F=ma \qquad m=\frac{F}{a}
$$

We might think of mass $m$ as a kind of resistance to linear motion. For rotational motion:

$$
\tau=I\alpha \qquad I=\frac{\tau}{\alpha}
$$

In a similar way, moment of inertia $I$ is a kind of resistance to rotational motion.
### Units

[[Statics#Torque|Torque]] $\tau$ is given by $\text{force}\times \text{perpendicular distance}$ of the point of action of the force from axis of rotation. It has units of Newton Meters:

$$
N\times m=\frac{kg\ m}{s^2}\times m=\frac{kg\ m^2}{s^2}
$$

Angular acceleration $\alpha$ has units $rads^{-2}$ or $s^{-2}$. Remember for rotations we work in radians, which have no units. So if we rearrange $\tau=I\alpha$ and write:

$$
I=\frac{\tau}{\alpha}
$$

Then the units for $I$ are:

$$
I=\frac{\tau}{\alpha}=\frac{kg\ m^2}{s^2}\div s^{-2}=\frac{kg\ m^2\ s^2}{s^2}=kg\ m^2
$$

### Concept

> [!figure] ![[Moments of inertia 1.png]]
> © University of Southampton [^5]

We said that the units of $I$ are $kg\ m^2$. It seems reasonable that $I$ depends directly on the mass of a body. The heaver it is, the harder it is to get it to start rotating. 

$$
\text{Linear acceleration, }a=\alpha r
$$
$$
F=ma=m\alpha r
$$
$$
\tau=F\times r=m\alpha r\times r=m\alpha r^2=mr^2\alpha
$$
$$
\tau=I\alpha=mr^2\alpha
$$
$$
\boxed{I=mr^2}
$$

Moment of Inertia $I$ of a mass $m$ is given by the product of the mass and the square of the distance of the mass from the axis of rotation.
### Multiple Mass

> [!figure] ![[Moments of inertia 2.png]]
> © University of Southampton [^5]

If we have more than one mass in a system, but the whole system rotates together with the same angular acceleration $\alpha$:

$$
\tau_{1}=m_{1}r_{1}^2\alpha \qquad \tau_{2}=m_{2}r_{2}^2\alpha \qquad \tau_{3}=m_{3}r_{3}^2\alpha
$$

$$
\tau=\sum^3_{i=1}\tau_{i}=m_{1}r_{1}^2\alpha+m_{2}r_{2}^2\alpha+m_{3}r_{3}^2\alpha
$$

$$
\tau=(m_{1}r_{1}^2+m_{2}r_{2}^2+m_{3}r_{3}^2)\alpha
$$
$$
\tau=\sum^3_{i=1}I_{i}\alpha
$$
### Solid Body

A rotating solid body with angular acceleration $\alpha$ can be through of as a very large number of equal point masses $m$. 

> [!figure] ![[Solid body moment of inertia.png]]
> © University of Southampton [^5]

$$
\tau=\sum^N_{i=1}\tau_{i}=m_{1}r_{1}^2\alpha+m_{2}r_{2}^2\alpha+\dots
$$
$$
\tau=\alpha(m_{1}r_{1}^2+m_{2}r_{2}^2+\dots)
$$
$$
\tau=\sum\nolimits^N_{i=1}I_{i}\alpha
$$

For most solid bodies, we need to split them into so many tiny masses that the best way to add all the little pieces of torque up is to use integral calculus.

You can look up the moment of inertia of many common solid bodies up in tables of values.

|                                               | Object                                                                                                                              | Moment of Inertia    |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| ![[Rod example.png]] | Rod of length $L$ and mass $m$ about an axis perpendicular to it's length at $\frac{L}{2}$ from one end                             | $I=\frac{1}{12}mL^2$ |
| ![[Disc example.png]] | Solid disk of radius $r$, mass $m$ with axis perpendicular to the circular face passing through the middle of the circle            | $I=\frac{1}{2}mr^2$  |
| ![[Sphere example.png]] | Hollow sphere of radius $r$ and mass $m$ with an infinitely thin surface (e.g internal and external radius may be considered equal) | $I=\frac{2}{3}mr^2$  |
|                                               |                                                                                                                                     |                      |
|                                               |                                                                                                                                     |                      |

### Examples

#### Example 1

A flywheel has a moment of inertia of $100\ kg\ m^2$. What angular deceleration is it given by a braking torque of $50\ Nm$?

> [!figure] ![[Moments of inertia 3.png]]
> © University of Southampton [^5]

$$
\tau=I\alpha \qquad \alpha=\frac{\tau}{I}=-\frac{50}{100}=-0.5\text{ rads}^{-2}
$$

#### Example 2

A heavy wheel has the shape of a solid disc with a mass of $8\ kg$. It is free to rotate about a horizontal axel through its centre. It is turned by a rope wound around the wheel, and the other end is attached to a mass of $1\ kg$ suspended below the edge of the wheel. 

What is the acceleration of the suspended mass?

> [!figure] ![[Moments of inertia 4.png]]
> © University of Southampton [^5]

For mass $m$:

$$
mg-T=ma \qquad T=m(g-a)
$$

For pulley with mass $M$:

$$
\tau=Tr=I\alpha \qquad \alpha=\frac{a}{r}
$$
Substituting:

$$
\tau=Tr=I\frac{a}{r}
$$

And substituting again:

$$
m(g-a)r=I\frac{a}{r}
$$

We know that for a solid disc, moment of inertia is:

$$
I=\frac{1}{2}Mr^2
$$

Replace $I$:

$$
m(g-a)r=\frac{Mr^2}{2} \frac{a}{r}
$$

$$
mgr-mar=\frac{Mra}{2} \qquad mgr=\frac{Mra}{2}+mar
$$
$$
mg=\left( \frac{m}{2}+m \right)a
$$
$$
mg=\left( \frac{M+2m}{2} \right)a
$$
$$
a=\frac{2mg}{M+2m}
$$

Substituting values for mass:

$$
a=\frac{2(1)10}{8+2(1)}=2\text{ ms}^{-2}
$$


#### Example 3

A shaft with its rotating parts has a moment of inertia of $20\text{ kgm}^2$. It is accelerated from rest by an accelerating torque of $45\text{ Nm}$. Determine the speed of the shaft in revolutions per minute after 15 seconds.

> [!figure] ![[Moments of inertia 5.png]]
> © University of Southampton [^5]


Given:
- $I=20\ kgm^2$
- $\omega=0\ rad/s$
- $\tau=45\ Nm$
- $t=15s$

Since torque:

$$
\tau=I\alpha \qquad \alpha=\frac{\tau}{I}=\frac{45}{20}=2.25\text{ rads}^{-2}
$$

Using constant acceleration equation:

$$
\omega_{2}=\omega_{1}+\alpha t
$$
$$
\omega_{2}=0+(2.25\times 15)=33.75\text{ rad}/s
$$

To convert to revolutions per minute:

$$
33.75 \times \left( \frac{60}{2\pi} \right)=322.3\text{ rev/min}
$$


### Radius of Gyration

Suppose our solid body is made up of $n$ particles, each of the same mass $m$.

$$
\sum^n_{i=1}m_{i}=nm=M
$$

Where $M$ is the total mass of the body.

$$
i=mr_{1}^2+mr_{2}^2+\dots mr_{i}^2+\dots mr_{n}^2
$$
$$
=m(r_{1}^2+r_{2}^2+\dots r_{i}^2+\dots r_{n}^2)
$$

And since $m=\frac{M}{n}$

$$
I=\frac{M}{n}(r_{1}^2+r_{2}^2+\dots r_{i}^2+\dots r_{n}^2)
$$
$$
=M\frac{(r_{1}^2+r_{2}^2+\dots r_{i}^2+\dots r_{n}^2)}{n}
$$
Now let our 2nd term be replaced with $k_{2}$, then:

$$
I=Mk^2
$$

$k^2$ is the average of the squared distances of the particles form the axis of rotation. $k$ is the root mean square average of the distances of the particles from the axis of rotation.

**We call $k$ the radius of gyration or the gyradius**.

The radius of gyration, $k$, is the distance from the axis of rotation you would need to place a single particle with mass $M$ if you wanted it to have the same moment of inertia about that axis as the solid body. 

For linear motion, we often replace the solid body with a point mass of the same mass, located at the position of the solid body's centroid. We do this when the real shape of the body doesn't have any effect on the body's motion.

Similarly for rotational motion, if the true shape of the body has no effect on how it rotates we can replace it with a point mass a distance $k$ from the axis of rotation.

#### For a flat disc

$$

I=\frac{1}{2}Mr^2=Mk^2 \qquad k^2
=\frac{Mr^2}{2M}=\frac{r^2}{2} \qquad k=\sqrt{ \frac{r^2}{2} }=\frac{r}{\sqrt{ 2 }}

$$

#### For a thin-walled hollow sphere

$$
I=\frac{3}{2}Mr^2=Mk^2 \qquad k^2=\frac{2Mr^2}{3M}=\frac{2r^2}{3} \qquad k=\sqrt{ \frac{2r^2}{3} }=\sqrt{ \frac{2}{3} }r
$$

### The Parallel Axis Theorem

All the moments of inertia we have looked at so far have related to an axis that passes through the centre of mass of the object. Parallel axis theorem allows us to look at moment of inertia changes if the axis doesn't pass through the centroid. 

> [!figure] ![[Parallel axis theorem 1.png]]
> © University of Southampton [^6]

Consider a barbell with an equal mass on each end:

> [!figure] ![[Parallel axis theorem 2.png]]
> © University of Southampton [^6]

We'll assume that the mass at each end, $m$, is large enough that we can neglect the mass of the bar in comparison. The total mass is then:

$$
M=m+m=2m
$$

> [!figure] ![[Parallel axis theorem 3.png]]
> © University of Southampton [^6]

And the centre of mass is in the middle of the bar at $O$. We can this of this as a two particle system, with each mass a distance $d$ from the centroid. The moment of inertia about the centre of mass is given by the sum of the moments of inertia due to the mass at the right end $I_{r}$ and at the left end $I_{l}$.

$$
I_{cm}=I_{r}+I_{l}=md^2+md^2
$$
$$
I_{cm}=2md^2
$$

> [!figure] ![[Parallel axis theorem 4.png]]
> © University of Southampton [^6]

The moment of inertia due to the mass at the right hand is:

$$
I_{r}=mr^2=m(2d)^2=4md^2
$$

The moment of inertia due to the mass at the left hand end is zero, because its distance from the axis of rotation is zero. We we have a total moment of inertia for an axis at one end:

$$
I_{e}=I_{r}+I_{l}=4md^2+0=4md^2
$$

Note that the moment of inertia about an axis at one end is bigger than the moment of inertia about the centroid. It will take more torque to get the bar to rotate about one end than to get it rotating about the middle.

- For the axis in the middle: $I_{cm}=2md^2$
- For the axis at one end: $I_{e}=4md^2=2md^2+2md^2=2md^2+Md^2$
- Where $M=m+m$ is the total mass of the system

So for an axis anywhere along the bar, the moment of inertia is made up from the sum of the moments of inertia of the system for an axis through the centroid + the moment of inertia that we would get about the new axis if all the mass of the system was located at the centroid.

$$
I_{e}=I_{cm}+Md^2
$$

Now assume that the barbel is rotated about an axis off-centre.

> [!figure] ![[Parallel axis theorem 5.png]]
> © University of Southampton [^6]

$$
I_{l}=m(d-a)^2=m(d^2-2da+a^2)=md^2-2mda+ma^2
$$
$$
I_{r}=m(d+a)^2=m(d^2+2da+a^2)=md^2+2mda+ma^2
$$
$$
I_{a}=md^2-2mda+ma^2+2mda+ma^2=2md^2+2ma^2
$$

And remembering that:

$$
M=m+m=2m \qquad  I_{a}=2md^2+Ma^2=I_{cm}+Ma^2
$$

So for an axis anywhere along the bar, the moment of inertia is made up from the sum of the moment of inertia of the system for an axis through the centroid + the moment of inertia we would get about the new axis if all the mass of the system was located at the centroid.

#### Example

$$
I_{parallel\ axis}=I_{cm}+Md^2
$$
$$
I_{cm}=\frac{1}{12}ml^2 \qquad M=m \qquad d=\frac{1}{2}
$$
$$
I_{parallel\ axis}=\frac{1}{12}ml^2+m\left( \frac{1}{2} \right)^2=\frac{1}{12}ml^2+\frac{1}{4}ml^2
$$
$$
I_{parallel\ axis}=\frac{1}{12}ml^2+\frac{3}{12}ml^2=\frac{4}{12}ml^2
$$
$$
I_{parallel\ axis}=\frac{1}{3}ml^2
$$

### Perpendicular Axis Theorem

This is applicable to objects that are thin and flat. Let's assume that the object is rotating round the $z$ axis. 

> [!figure] ![[Perpendicular axis theorem 1.png]]
> © University of Southampton [^6]

We would like to know how $I_{z}$ relates to $I_{x}$ and $I_{y}$. Consider one element of the object with mass $m_{i}$ a distance $r_{i}$ from the axis of rotation. From Pythagorus' theorem, $r^2_{i}=x^2_{i}+y^2_{i}$.

The moment of inertia of element $I$ about the $z$ axis is:

$$
I_{z}=m_{i}r^2_{i}=m_{i}(x_{i}^2+y_{i}^2)=mx_{i}^2+my_{i}^2
$$

But $mx_{i}^2$ and $my_{i}^2$ are the moments of inertia of the element about the $x$ and $y$ axes, so:

$$
I_{z}=I_{x}+I_{y}
$$

For a planar object, the moment of inertia about an axis perpendicular to the plane is the sum of the moments of inertia of any two perpendicular axes through the same point in the plane of the object.

$$
I_{z}=I_{x}+I_{y}
$$


### Examples

#### Example 1

Four thin uniform metal rods, each of length $L$ and with the same mass, are connected at their ends to form a square frame. The total mass of the frame is $M$. Find a formula for the moment of inertia of the frame when it rotates around an axis through its centre and perpendicular to it.

> [!figure] ![[Axis theorem 1.png]]
> © University of Southampton [^6]

If the frame has a total mass of $M$, then each rod has a mass of $m=\frac{M}{4}$. The moment of inertia of each rod about its own centre of mass is:

$$
I_{rod}=\frac{1}{12}mL^2 \qquad I_{rod}=\frac{1}{12} \frac{M}{4}L^2=\frac{M}{48}L^2
$$

The distance of each rod from the centre of the frame is $\frac{L}{2}$. Each rod has a moment of inertia about the centre of the frame equal to:

$$
I_{\parallel}=I_{rod}+md^2
$$
$$
I_{\parallel}=\frac{M}{48}L^2+\frac{M}{4}\left( \frac{L}{2} \right)^2
$$
$$
I_{\parallel}=ML^2\left( \frac{1}{48}+\frac{1}{16} \right)
$$
$$
I_{\parallel}=\frac{ML^2}{12}
$$
By symmetry, each rod makes the same contribution to the moment of inertia about the frames centre. So for 4 rods, the total moment of inertia is:

$$
I_{system}=4\times \frac{ML^2}{12}=\frac{ML^2}{3}
$$

#### Example 2

If the moment of inertia of a rod with mass $m$ and length $L$ is given as $\frac{1}{12}mL^2$, find the moment of inertia of a solid cube with mass $m$ and side length $L$.

> [!figure] ![[Axis theorem 2.png]]
> © University of Southampton [^6]

The length of each side is $L$ and the total mass is $M$. This is equivalent to a thinner but denser slab. 

> [!figure] ![[Axis theorem 3.png]]
> © University of Southampton [^6]

$$
I_{\parallel} \Rightarrow I_{z}=I_{x}+I_{y}
$$
$$
\text{Symmetry} \Rightarrow I_{x}=I_{y}
$$
$$
I_{z}=2I_{x}
$$

The length of each side is $L$ and the total mass is $M$. This is equivalent to a thinner but denser slab. 

> [!figure] ![[Axis theorem 4.png]]
> © University of Southampton [^6]

$$
I_{x}=\frac{1}{12}mL^2 \qquad I_{z}=2I_{x} \qquad I_{z}=2\left( \frac{1}{12}mL^2 \right) \qquad I_{z}=\frac{1}{6}mL^2
$$


## Rotational Kinetic Energy

For linear motion, to accelerate a body from velocity $v_{1}$ to $v_{2}$, a force $F$ must be applied.

$$
W=F\times d
$$

The work gives the body kinetic energy, $KE$, where:

$$
KE=W=F\times d=\frac{1}{2}mv^2
$$
and $v=v_{2}-v_{1}$.

For rorational motion, to accelerate a body from angular velocity $\omega_{1}$ to $\omega_{2}$ a torque $\tau$ must be applied. The torque does work:

$$
W=\tau \times\theta
$$

Where $\theta$ is the angle the body turns through in the direction of the applied torque. The work gives the body kinetic energy, KE, where:

$$
KE=W=\tau\times\theta
$$

We also konw that torque is equal to the moment of intertia of an object abouts its centre, $I$, multiplied with the angular acceleration $\alpha$:

$$
\tau=I\alpha
$$

So:

$$
KE=\tau \times \theta=I\alpha\theta
$$

If $\tau$ is constant, then $\alpha$ will also be constant and we can use:

$$
\omega_{2}^2=\omega_{1}^2+2\alpha \theta
$$

Rearrange that, we get:

$$
\alpha\theta=\frac{1}{2}(\omega_{2}^2-\omega_{1}^2)
$$

Combining this with the equation for kinetic energy, $KE=I\alpha\theta$, gives us:

$$
KE=\frac{1}{2}I(\omega^2_{2}-\omega_{1}^2)=\frac{1}{2}I\omega^2
$$

Where $\omega=\omega_{2}^2-\omega_{1}^2$.

### Kinetic Energy of a Rolling Object

> [!figure] ![[Rolling object.png]]
> © University of Southampton [^7]

Consider an object of mass $m$ and moment of inertia about its axis of rotation $I$, which is rolling. The object has two components to its motion - a linear and a rotational.

If we ignore the rotation, we can think of this was a point mass $m$ located at the centre of mass $O$ with a linear velocity $V_{O}$. If we ignore the translation, we can think if this a s a rotating body of radius $r$, mass $m$, with an axis of rotation through $O$.

The translation has an associated kinetic energy:

$$
KE_{trans}=\frac{1}{2}mV_{O}^2
$$

The rotation has an associated kinetic energy:

$$
KE_{rot}=\frac{1}{2}I\omega^2
$$

The total kinetic energy of the rolling body is:

$$
KE=KE_{trans}+KE_{rot}
$$

### Examples

#### Example 1

A boomerang is approximately a straight stick of mass 0.25kg, and length 0.3m. What is its kinetic energy of rotation if it spins at 15 revolutions per second?

The moment of inertia of a rod about its centre is given by:

$$
I=\frac{1}{12}ML^2
$$

$$
\omega=15\ rps \qquad \omega=15\times 2\pi=30\pi\ rad/s
$$

$$
KE_{rot}=\frac{1}{2}I\omega^2=\frac{1}{2}\left( \frac{1}{12}ML^2 \right)\omega^2
$$

$$
KE_{rot}=8.3J
$$


#### Example 2

![[Rotational kinetic energy.png]]

A ruler 15 cm long is pivoted at one end. Initially it is stationary in a vircually upwards position, the pivoted end bing at the bottom. If the ruler swings freely down, what angular velocity will it have when it is pointing downwards.

The moment of inertia of a rod about one end is given by:

$$
I=\frac{1}{3}ML^2
$$

$$
PE=KE_{rot}
$$

$$
mgh=\frac{1}{2}I\omega^2\qquad MgL=\frac{1}{2}\left( \frac{1}{3}ML^2 \right)\omega^2
$$
$$
\omega^2=\frac{6g}{L}\qquad \omega=\sqrt{ \frac{65}{L} }=\sqrt{ \frac{6(9.81)}{15\times 10^{-2}} }=19.81\ rad/s
$$

#### Example 3

![[Rotational kinetic energy 2.png]]

A solid cylindrical drum of diameter 0.6m rolls, without slipping, from rest down a $30^{\circ}$ slope. How fas t is it moving when it has travelled 5m?

The moment of inertia of a drum about its axis of symmetry is given by:

$$
I=\frac{1}{2}MR^2
$$

$$
\text{radius}=\frac{0.6}{2}=0.3m \qquad h=5\sin 30=2.5m
$$

$$
PE=KE_{trans}+KE_{rot}
$$
$$
mgh=\frac{1}{2}mv^2+\frac{1}{2}I\omega^2 \qquad \omega=\frac{v}{r} \qquad I=\frac{1}{2}MR^2
$$

$$
mgh=\frac{1}{2}mv^2+\frac{1}{2}\left( \frac{1}{2}mr^2 \right)\left( \frac{v}{r} \right)^2
$$
$$
gh=\frac{1}{2}v^2+\frac{1}{2}\left( \frac{1}{2}r^2 \right)\left( \frac{v}{4} \right)^2
$$
$$
gh=\frac{1}{2}v^2+\frac{1}{4}v^2
$$
$$
gh=\frac{2v^2+v^2}{4}=\frac{3v^2}{4}
$$
$$
v=\sqrt{ \frac{4gh}{3} }=\sqrt{ \frac{4(10)(2.5)}{3} }=5.8\ m/s
$$

## Angular Momentum

We know that for a mass $m$, the linear momentum $p$ is defined by: 

$$
p=mv  \qquad \text{(Units: kg m s}^{-1}\text{)}
$$

Correspondingly, the definition of the angular momentum of a mass $m$ which is usually given by the symbol $L$ is:

$$
L=I\omega \qquad \text{(Units: kg m}^{-2}\text{ s}^{-1}\text{)}
$$

We can also write:

$$
L=I\omega=mr^2\omega=m(r\omega)r=mvr
$$

For an extended object (or system of many small parts):

$$
L=\sum_{i}m_{i}r^2_{i}\omega_{i}
$$

But $\omega_{i}$ is the same for all parts of the object or system, so:

$$
L=\omega \sum_{i}m_{i}r_{i}^2
$$

And since $I=\sum_{i}m_{i}r_{i}^2$ is the moment of inertia for the system, $L=I\omega$ for an object or system as well.

### Rate of Change

If an object undergoes uniform angular acceleration $\alpha$, which changes its angular velocity from $\omega_{i}$ to $\omega_{f}$ over a time $t$, then:

$$
L_{f}-L_{i}=I\omega_{f}-I\omega_{i}=I(\omega_{f}-\omega_{i})
$$

If we divide both sides of the expression by $t$, then:

$$
\frac{L_{f}-L_{i}}{t}=\frac{I(\omega_{f}-\omega_{i})}{t}=I\alpha=\tau 
$$

The rate of change of angular momentum is equal to the torque applied to the system.

### Principle of Conservation

The principle of conservation of angular momentum is that in an isolated system, the angular momentum is constant. An isolated system is one where there are no external torques.

### Angular Impulse

Angular impulse is the change in angular momentum, given by:

$$
\tau \times t \qquad \text{(Units: kg m}^{2}\text{ s}^{-1}\text{)}
$$


> [!figure] ![[Angular impuse 1.png]]
> © University of Southampton [^8]

Imagine that we have some object that is initially stationary. The object's mass is $m$ and its moment of inertia about its centre of mass is $I$. The object receives an impulse, $J$, at some perpendicular distance $r$ from its centre of gravity. 

The change in linear momentum is given by $J=F\times t=mv$. The linear velocity of the object is $v=\frac{J}{m}$, but the object also undergoes angular impulse given by $Jr=I\omega$. So:

$$
\omega=\frac{Jr}{I}
$$

It is only the centre of mass of the object that has linear velocity $v$. If you consider **point A** on the objects surface a distance $r$ from the CoM it will have a linear velocity:

$$
v+\omega r=\frac{J}{m}+\left( \frac{Jr}{I} \right)r=\frac{J}{m}+\frac{Jr^2}{I}
$$

**Point B** on the object's surface also a distance $r$ from the CoM will have a linear velocity:

$$
v-\omega r=\frac{J}{m}-\frac{Jr}{I}r=\frac{J}{m}-\frac{Jr^2}{I}
$$

### Examples

#### Example 1

> [!figure] ![[Angular momentum 1.png]]
> © University of Southampton [^8]

A flywheel is rotating with an angular velocity of 200 radians per second, and its angular momentum is $4500\ kg\ m^2\ s^{-1}$

- What is its moment of inertia?
- What is its kinetic energy?
- How long will it take to stop if it is slowed down by a braking torque of 15Nm?

The moment of inertia is calculated as:

$$
L=I\omega \qquad I=\frac{L}{\omega}=\frac{4500}{200}=22.5kgm^2
$$

Knowing moment of inertia, we can calculate kinetic energy:

$$
KE=\frac{1}{2}I\omega^2 \qquad KE=\frac{1}{2}(22.5)200^2=450kJ
$$

Finally, we can calculate the time to stop:

$$
\tau=I\alpha \qquad \alpha=\frac{\tau}{I}=\frac{15}{22.5}=0.67\ rad\ s^{-2}
$$
$$
\alpha=\frac{\omega_{f}-\omega_{i}}{t} \qquad t=\frac{\omega_{f}-\omega_{i}}{\alpha}=\frac{200-0}{0.67}=300s
$$

#### Example 2

> [!figure] ![[Angular momentum 2.png]]
> © University of Southampton [^8]

A uniform stick of length 1m is lying on a frozen late. I kick one end, perpendicular to the stick, to make it spin. It moves off with its centre of mass having a speed of 2m/s. How quickly is it spinning?

Impulse is given as $J=mv$. The angular impulse is given as:

$$
Jr=I\omega \qquad J=\frac{I\omega}{r}
$$

The moment of inertia of the stick is given as:

$$
I=\frac{1}{12}mL^2
$$

We can say that impulse is equal in each case, so:

$$
mv=\frac{I\omega}{r}\qquad \omega=\frac{mvr}{I}
$$
So now we have:

$$
\omega=\frac{mvr}{\left( \frac{1}{12}mL^2 \right)}=\frac{12mvr}{mL^2}=\frac{12\cdot 2 \cdot 0.5}{1^2}=12\text{ rad/s}
$$




[^1]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456213_1?courseId=_232721_1&view=content&state=view
[^2]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456214_1?courseId=_232721_1&view=content&state=view
[^3]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456223_1?courseId=_232721_1&view=content&state=view
[^4]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456224_1?courseId=_232721_1&view=content&state=view
[^5]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456231_1?courseId=_232721_1&view=content&state=view
[^6]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456232_1?courseId=_232721_1&view=content&state=view
[^7]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456239_1?courseId=_232721_1&view=content&state=view
[^8]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456246_1?courseId=_232721_1&view=content&state=view
