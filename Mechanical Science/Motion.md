---
tags:
  - motion
module: Mechanical Science
component: Motion
permalink: mechanical-science/motion
---
## Motion Formula

**[[#Acceleration]], [[#Velocity]]**

$$
a=\frac{v-u}{t} \qquad v=u+at \qquad v^2-u^2=2as
$$

**[[#Distance & Displacement]]**

$$
s=t \cdot \frac{v+u}{2} \qquad s=ut+\frac{1}{2}at^2
$$

**[[#Newton's Second Law]]**

$$
F=ma
$$

## Kinematics

Kinematics is the study of motion of objects without considering what causes their motion (as opposed to dynamics, where we consider the forces and torques that cause the motion). 

There are five basic variables that we use in kinematics:

| Variable         | Symbol | Units                       |
| ---------------- | ------ | --------------------------- |
| Initial Velocity | u      | $m/s \text{ or } ms^{-1}$   |
| Final Velocity   | v      | $m/s \text{ or } ms^{-1}$   |
| Distance Covered | s      | $m$                         |
| Acceleration     | a      | $m/s^2 \text{ or } ms^{-2}$ |
| Time Taken       | t      | $s$                         |

To start with, we will consider kinematics in one spatial dimension only. Even through velocity, acceleration and displacement are vector quantities, in one dimension there are only two possible directions, "forwards" or "backwards", which we can represent using signs.

This allows us to work with scalers if we want, and talk about speed and distance instead of velocity and displacement.

### Acceleration

For now, we will only consider **constant acceleration**. That is, acceleration which does not change over time. We define acceleration as

$$
a=\frac{\text{change in speed}}{\text{time}} \qquad a=\frac{v-u}{t}
$$

If you drive to the shop 3km away, and return home in half an hour, then your total distance travelled was 6km and your **average speed was 12 km/hr**. However, the total displacement travelled away from your home is zero, so your **average velocity was zero**. This is obvious if you consider the velocities as vectors.

### Deceleration

Note in the equation for acceleration it is possible for the final speed $v$ to be smaller than the initial speed $u$. If the acceleration is negative, e.g in the $-i$ direction, the object is slowing down or decelerating.

### Velocity

With constant acceleration, the average velocity of a body is given by the average of the initial velocity $v$ and the final velocity $u$:

$$
\text{average velocity} = \frac{v+u}{2}
$$


We can also rearrange our acceleration equation to express final velocity in terms of initial velocity and acceleration:

$$
v=u+at
$$

### Distance & Displacement

The distance travelled $s$ is given by the average velocity, multiplied by time taken. If time and speed are graphed, the distance travelled is also represented by the area under the curve. 

$$
s=t \cdot \frac{v+u}{2}
$$

We can substitute $v$ here for based on our rearrangement of the [[#Acceleration|acceleration]] formula to express it in terms of initial velocity, acceleration and time:

$$
s=t\cdot\frac{(u+at)+u}{2} \qquad s=ut+\frac{1}{2}at^2
$$

We can also rearrange the the distance travelled $s$ equation to:

$$
v+u=\frac{2s}{t}
$$

And rearrange our acceleration formula to $v-u=at$, and multiply to give:

$$
(v+u)(v-u)=\frac{at\cdot_{2}s}{t} \qquad v^2-u^2=2as
$$

## Newton's Laws of Motion

### Newton's First Law

> An object will remain at rest or continue to move with constant velocity (constant speed in a straight line) unless a net external force acts upon it

This means that if all forces on an object are balanced, its motion will not change; a stationary object will stay stationary, and a moving object will keep moving at the same speed and direction

### Newton's Second Law

> The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass

This relationship is expressed by the formula $F=ma$ where $F$ is the net force, $m$ is the mass and $a$ s the acceleration. 

For a body in static equilibrium, the net force is zero. We can see that this is a special case of Newton's 2nd Law, where $a=0$

$$
\sum F=ma_{x} \qquad \sum F=ma_{y}
$$

### Newton's Third Law

> For every action there is an equal and opposite reaction.

We have already seen this in practice with the normal reaction for a body on a horizontal or incline plane, and the reaction force at a hinge.

## Equations of Motion for Particles

When a system of forces act on a particle, then Newton's 2nd law may be written in the form:

$$
F=ma
$$

Where $F$ is the free-body diagram, a sketch of the object free from its surroundings showing all the external forces acting on it, and $ma$ is a kinetic diagram representing the magnitude and direction of the vector $ma$

$$
\text{Free-body diagram } \left( \sum F \right)= \text{Kinetic diagram } (ma)
$$

## Free-body Diagram

To draw a free-body diagram, start with these steps:

1. Select a coordinate system
2. Identify the object to analyse, and draw it as a block
3. Draw all external forces acting on the particle and label them
4. The direction of forces having unknown magnitudes can be assumed (normally we take the direction of motion as a positive direction)
5. The direction of acceleration of the body's mass centre should be identified on the kinetic diagram

> [!figure] ![[Free-body and kinetic diagram.png]]
> © University of Southampton [^1]


## Kinetic Friction

[[Statics#Static Friction|Status friction]] is a model of how friction acts to prevent motion on things that aren't already moving. If there is no applied force $F$, then friction force $F_{s}$ will be zero.

As force $F$ gets gradually bigger, then friction force $F_{s}$ also gets gradually bigger to resist the motion. There comes a point where $F_{s}$ can't get any bigger, and at that point any increase in $F$ will cause the block to move.

Once the block starts moving, we must consider **kinetic friction**, which resists sliding between two planes. It acts in a direction opposite to that of the relative motion between the planes.

### Friction Force

The force of friction between an object and surface is related to the application of [[#Newton's Third Law]]. Consider an object being pushed along a rough surface, where friction is impeeding the motion.

> [!figure] ![[Friction force 1.png]]
> © University of Southampton [^2]

The object is subject to the force of gravity, following the equation $W=mg$ which is directed downwards. As Newton's Third Law states, there must be an equal but opposite force, known as the normal or normal reaction force, denoted as N or R and perpendicular to the friction surface.

$$
W=mg \qquad N=mg
$$

The friction force is defined as the **friction coefficient**, denoted by the greek letter $\micro_{k}$ and multiplied by this normal force:

$$
\text{Friction Force } F_{f}=\micro_{k}\cdot N
$$

The coefficient of friction $\micro_{k}$ has no units. The subscript $k$ indicates that this is the coefficient of **kinetic** friction. The friction force $F_{f}$ is always in the opposite direction.

> [!figure] ![[Friction force 2.png]]
> © University of Southampton [^2]

## Problem Solving Process

To solve these problems, there is a process to follow:

- [[#Free-body Diagram]]: determine what the object is that you are trying to analyse, and draw a free body fiagram of this object. If there are two objects moving, you must draw each separately
- Apply [[#Newton's Second Law]]: to each object in each direction as necessary

If there seems to be more unknowns than equations, don't forget to include things like friction and reaction forces.

[^1]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456165_1?courseId=_232721_1

[^2]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456170_1?courseId=_232721_1&view=content&state=view
