---
tags:
  - motion
module: Mechanical Science
component: Motion
permalink: mechanical-science/motion
---
## Motion Formula

**[[#Kinematics|Variables]]**
Basic symbols used in Kinematics

$$
\text{Velocity}_{initial}=u \qquad \text{Velocity}_{final}=v \qquad \text{Distance}=s \qquad \text{Acceleration}=a \qquad \text{Time}=t
$$

**[[#Acceleration]], [[#Velocity]]**
Constant acceleration/deceleration equations

$$
a=\frac{v-u}{t} \qquad v=u+at \qquad v^2-u^2=2as
$$

**[[#Distance & Displacement]]**
Distance given time and  velocities or acceleration

$$
s=t \cdot \frac{v+u}{2} \qquad s=ut+\frac{1}{2}at^2
$$

**[[#Newton's Second Law]]**

$$
F=ma
$$

**[[#Projectile Velocity]]**, **[[#Projectile Distance]]**
Bodies acting only under the force of gravity, where:

- Air resistance is ignored
- $y_{0}$ is the starting height
- $H$ is the maximum height
- $\theta$  is the angle from the horizontal

$$
v_{y}=u_{y}-gt \qquad s_{y}=y_{0}+s_{x} \tan \theta-\frac{g}{2 |u|^2\cos^2\theta}x^2 \qquad H=\frac{u^2 \sin^2 \theta}{2g}
$$

**[[#Projectile ToF|Time of Flight]]**
Simple case where starting height is the same as ending height, and general case when launched from starting height $y_{0}$

$$
T=\frac{2U\sin\theta}{g} \qquad T = \frac{U \sin \theta \pm \sqrt{U^2 \sin^2 \theta + 2 g y_{0}}}{g}
$$
 
 **[[#Projectile Range|Range]]**
 Simple case where starting height is the same as ending height, and general case when launched from starting height $y_{0}$

$$
R=\frac{u^2 \sin 2\theta}{g} \qquad R = (U\cos\theta)\left(\frac{U \sin \theta \pm \sqrt{U^2 \sin^2 \theta + 2 g y_{0}}}{g}\right)
$$

**[[#Angular Displacement]]**
Distance moved in an arc when turning through angle $\theta$ about radius $r$
$$
s=r\theta
$$

**[[#Angular Velocity]]**
Change in angle over time, and proportionally related to radius and linear velocity

$$
\omega=\frac{\theta}{t} \qquad v=r\omega
$$

**[[#Angular Acceleration]]**, **[[#Tangential Acceleration]]**, **[[#Centripetal Acceleration (or Radial)|Centripetal Acceleration]]**
Rate of change of angular velocity, and proportional to radius

$$
\alpha=\frac{1}{r}\left(\frac{ v_{2}-v_{1}}{t_{2}-t_{1}} \right) \qquad a_{t}=r\alpha \qquad a_{c} = \omega^2 r
$$

**[[#Converting Degree to Radians|Converting Degrees & Radians]]**
To convert from degrees to radians, multiple the angle by

$$
\text{rad}=\frac{\pi}{180}\times \text{degrees} \qquad \text{degrees}=\text{rad} \times \frac{180}{\pi}
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

- [[#Free-body Diagram]]: determine what the object is that you are trying to analyse, and draw a free body diagram of this object. If there are two objects moving, you must draw each separately
- Apply [[#Newton's Second Law]]: to each object in each direction as necessary

If there seems to be more unknowns than equations, don't forget to include things like friction and reaction forces.

## Projectiles

A projectile is a moving body on which the only force acting is the force of gravity. Consider a body with mass $m$ that is launched from some point at angle $\theta$ to the horizontal. We'd like toe be able to predict:

- Where it will be, at any time $t$
- The maximum height it would reach
- How far from the starting point it would land
- How long that would take

### Symmetrical Flight

An important concept to remember is that the parabolic trajectory of a projectile is symmetrical. A the middle of its flight, it's vertical component is zero (as it reaches apogee), and it is only has a horizontal component. The direction of motion at any other time is found by considering the
horizontal and vertical components of the velocity.

### Projectile Velocity

Assume the object is launched with some initial velocity $u$, which is a vector with magnitude $|u|$ and direction $\theta$ to the horizontal. We know that any vector can be resolved into two components at $90^{\circ}$ to each other:

$$
u_{x}=|u|\cos \theta \qquad u_{y}=|u|\sin \theta
$$

> [!figure] ![[Projectile parabola.png]]
> © University of Southampton [^3]

To solve this, we will make some assumptions:

- We ignore air resistance
- We are not interested in how the body got its initial velocity
- The horizontal and vertical components do not affect each other

For the horizontal component, there is no force acting on the object. Since there is no force, acceleration will be zero:

$$
v_{x}=u_{x}+a_{x}t \qquad a_{x}t=0
$$

Since $v_{x}=u_{x}$, the horizontal component is a constant. 

For the vertical component, there is a force $mg$ acting downwards due to gravity. Therefore, there is vertical acceleration $g$ acting on the body. Initially it is a deceleration, slowing the body down, but once the body passes apogee it becomes an acceleration, speeding its fall back to the ground.

If we want to know the vertical velocity, we can calculate it using:

$$
v_{y}=u_{y}+a_{y}t \qquad a_{y}=-g \qquad \boxed{v_{y}=u_{y}-gt}
$$

Initially, $u_{y} > gt$ so $v_{y}$ is positive (ie. upwards). At some point $uy=gt$, which is the moment the vertical movement ends (apogee), and from then on $gt>u_{y}$ and velocity is negative (ie. downwards).

### Projectile Distance


> [!TIP] Distance refers to the total length of the path travelled by the projectile
> To find the straight line distance between $A$ and $B$, use [[#Projectile Range|Range]]


For the horizontal motion to stop, something has to happen to the body - e.g hit the ground. At that time. the body ceases to be a projectile, because gravity is no longer the only force acting on it.

Both the horizontal and vertical components of the motion have constant acceleration. Therefore, o work out how far the body travels before hitting the ground, we can use [[#Distance & Displacement]] equations.

$$
s=ut+\frac{1}{2}at^2
$$

In the horizontal component, $a_{x}=0$ so we are left with:

$$

s_{x}=u_{x}t

$$

In the vertical component, $a_{y}=-g$ so we are left with:

$$
s_{y}=u_{y}t-\frac{1}{2}gt^2
$$

At any time $t$ the straight line distance of the projectile will be given by:

$$
d=\sqrt{ s_{x}^2+s_{y}^2 }
$$

If we rearrange the horizontal component displacement equation $s_{x}=u_{x}t$, then:

$$
t=\frac{s_{x}}{u_{x}}
$$

We can substitute this into the vertical component equation:

$$
s_{y}=u_{y}t-\frac{1}{2}gt^2 \qquad \rightarrow \qquad s_{y}=u_{y} \frac{s_{x}}{u_{x}}-\frac{1}{2}g\left( \frac{x}{u_{x}} \right)^2
$$

Which rearranges to give:

$$
\boxed{s_{y}=\frac{u_{y}}{y_{x}}s_{x}-\frac{g}{2u_{x}^2}x^2}
$$

This equation is similar to a quadratic equation, and describes the parabola (the curve shape we see when objects move in projectile motion).

We know that:

$$
\frac{u_{y}}{u_{x}}=\tan \theta \qquad u_{x}=|u|\cos \theta
$$

Therefore, we have:

$$
s_{y}=s_{x} \tan \theta-\frac{g}{2 |u|^2\cos^2\theta}x^2
$$


> [!WARNING] This assumes that the projectile is launched and lands at the same vertical height
> if the projectile is launched from some height $y_{0}$ other than ground level, we can add this as a constant:
> 
> $$
> s_{y}=y_{0}+s_{x} \tan \theta-\frac{g}{2 |u|^2\cos^2\theta}x^2
> $$

This gives us a equation to describe the parabola of a projectile, allowing us to calculate the distance or maximum height reached, given the other. 

### Projectile ToF

The time of flight (ToF) is the time from when the object is projected to the time it takes for it to reach the surface. 

> [!figure] ![[Time of flight.png]]
> © University of Southampton [^4]


The general kinematic equation for displacement in the $y$ direction is:

$$
s_{y}=u_{y}t+\frac{1}{2}a_{y}t^2
$$

In projectile motion, assuming the initial point A and final point B are at the same vertical height, the new vertical displacement, $s_{y}$ is zero. 

The vertical components are defined as:

- Initial vertical velocity: $u_{y}=U \sin \theta$ where $U$ is the initial speed and $\theta$ is the launch angle
- Vertical acceleration: $a_{y}=-g$ ($g$ is acceleration due to gravity, in the down direction)
- Time of flight: $t=T$ where $T$ is the total flight time

Substituting these into the kinematic equation gives:

$$
0=(U\sin\theta)T+\frac{1}{2}(-g)T^2
$$

To find $T$, we solve this quadratic equation in $T$.  This equation will yield two possible solutions, for when the projectile is at height $s_{y}=0$. The first, at $T=0$ when the projectile is on the ground.

We rearrange to isolate $T$:

$$
0=T\left( U\sin\theta-\frac{1}{2}gT \right)
$$

For this equation to be valid, either $T=0$ (as in the first case), or $U\sin\theta-\frac{1}{2}gT=0$.

$$
U\sin\theta-\frac{1}{2}gT=0 \qquad U\sin\theta=\frac{1}{2}gT
$$

$$
\boxed{T=\frac{2U\sin\theta}{g}}
$$


> [!WARNING] This assumes that the projectile is launched and lands at the same vertical height
> If the projectile is launched from a height $y_{0}$ and lands on the ground (meaning $s_{y}=-y_{0}$), you cannot simply factor out $T$.
> 
> In this more general case, the equation becomes:
> 
> $$
> -y_{0}=(U\sin\theta)T-\frac{1}{2}gT^2
> $$
> 
> To solve for $T$, you must rearrange into the standard quadratic equation form:
> 
> $$
> \frac{1}{2}gT^2-(U\sin\theta)T-y_{0}=0
> $$
> 
> And then use the quadratic formula to find the two possible vales of $T$:
> 
> $$
> T = \frac{- \left( - U \sin \theta \right) \pm \sqrt{\left( - U \sin \theta \right)^2 - 4 \left( \frac{1}{2} g \right) \left( - y_{0} \right)}}{2 \left( \frac{1}{2} g \right)}
> $$
> 
> You can simplify the signs and the denominator:
> 
> $$
> T = \frac{U \sin \theta \pm \sqrt{U^2 \sin^2 \theta + 2 g y_{0}}}{g}
> $$


### Projectile Range

> [!TIP] Range refers to the straight line distance (horizontal displacement)
> To find the length of the parabolic arc, use [[#Projectile Distance|Distance]]

Consider the movement of the projectile from $A$ to $B$.

> [!figure] ![[Time of flight.png]]
> © University of Southampton [^4]

The horizontal range $R$ is the total horizontal distance traveled in the time $T$. The horizontal motion has $a_{x}=0$ (no acceleration), meaning the horizontal velocity $u_{x}$ is constant.

Start with the horizontal kinematic equation:

$$
s_{x}=u_{x}t+\frac{1}{2}a_{x}t^2
$$

The horizontal components are:

- Initial horizontal velocity: $u_{x}=U\cos\theta$ where $U$ is the initial speed and $\theta$ is the launch angle
- Horizontal displacement: $s_{x}=R$ where $R$ is the range we are solving for
- Horizontal acceleration: $a_{x} =0$ as there is no acceleration
- Time: $t=T$ where $T$ is the total flight time

Substitute and simplify the kinematic equation. Since $a_{x}=0$, the $\frac{1}{2}a_{x}t^2$ term is zero.

$$
R=(U\cos\theta)T+\frac{1}{2}(0)T^2 \qquad R=(U\cos\theta)T
$$

Substitute in $T$ based on the [[#Projectile ToF|Time of Flight]] equation:

$$
R=(U\cos\theta)\left( \frac{2U\sin\theta}{g} \right)
$$

Rearrange the terms and simplify using the trigonometric double-angle identity  $2\sin\theta \cos\theta=\sin(2\theta)$:

$$
R=\frac{U^2(2\sin\theta \cos\theta)}{g}
$$

$$
\boxed{R=\frac{U^2\sin 2\theta}{g}}
$$

> [!WARNING] This assumes that the projectile is launched and lands at the same vertical height
> If the projectile is launched from a height $y_{0}$ and lands on the ground (meaning $s_{y}=-y_{0}$), we must use the general solution for [[#Projectile ToF|Time of Flight]].
> 
> $$
> R = (U\cos\theta)\left(\frac{U \sin \theta \pm \sqrt{U^2 \sin^2 \theta + 2 g y_{0}}}{g}\right)
> $$


## Circular Motion

Angular or rotational motion describes motion of an object that rotates around an axis. For example, a rotating tyre, vehicle on a roundabout, CD disk. 

> [!figure] ![[Angular motion.png]]
> © University of Southampton [^5]

Angular motion has similar terms as with linear motion:

| Linear Motion | Circular Motion | Units |
| :--- | :--- | :--- |
| Displacement, $s$ | Angular displacement, $\theta$ | $\text{rad}$ |
| Initial velocity, $u$ | Initial angular velocity, $\omega_{1}$ | $\text{rad/s}$ |
| Final velocity, $v$ | Final angular velocity, $\omega_{2}$ | $\text{rad/s}$ |
| Acceleration, $\alpha$ | Angular acceleration, $a$ | $\text{rad/s}^{2}$ |

### Angular Displacement

Imagine a disk with radius $r$. Angular displacement (or arc length) is the angle turned through by a body undergoing circular motion.

> [!figure] ![[Angular displacement.png]]
> © University of Southampton [^5]

If the angle is measured in radians, and the radius of the motion is $r$, then the distance travelled around the arc is given by:

$$
s=r\theta \text{ (in metres)} \qquad \theta=\frac{s}{r} \text{ (in radians)}
$$

### Angular Velocity

Rate of change of $\theta$ with time is called angular velocity, $\omega$.

$$
\omega=\frac{\theta}{t} \text{ rad/s}
$$

> [!figure] ![[Angular velocity.png]]
> © University of Southampton [^5]

There is a relationship between linear velocity and angular velocity for a point on an object moving in a circle. The speed of a point on a rotating object is related to how fast the object is rotating, and how far that point is from the centre.

We know the arc length is $s=r\theta$. Differentiating it with respect to time:

$$
\frac{ds}{dt}=\frac{d}{dt}(r\theta)
$$

We assume that $r$ is constant, as the object isn't changing shape:

$$
\frac{ds}{dt}=r \frac{d\theta}{dt}
$$

We can substitute these terms:

* Linear velocity: $\frac{ds}{dt}=v$
* Angular velocity: $\frac{d\theta}{dt}=\omega$

$$
\boxed{v=r\omega}
$$

This equation shows that for a constant rotational speed $\omega$, the linear speed $v$ is directly proportional to the radius $r$.

* A point near the centre has a small linear speed ($v$)
* A point near the edge has a large linear speed, even though they are rotating at the same rate

### Angular Acceleration

If the angular velocity $\omega$ changes with time, then at $t_{1}$ we have $\omega_{1}$ and at $t_{2}$ we have $\omega_{2}$. We can define angular acceleration as:

$$
\alpha=\frac{w_{2}-w_{1}}{t_{2}-t_{1}} \text{ rad/s}^2
$$

> [!figure] ![[Angular acceleration.png]]
> © University of Southampton [^5]

Like velocity, there is a relationship between the linear acceleration of a point on the object, and the angular acceleration of the object. We can start with the linear and angular velocity relationship, and put it in terms of angular velocity:

$$
\omega=\frac{v}{r}
$$

By substituting this into our angular acceleration formula, we get:

$$
\alpha=\frac{\frac{v_{2}}{r}-\frac{v_{1}}{r}}{t_{2}-t_{1}}
$$

Factor out the common $\frac{1}{r}$:

$$
\alpha=\frac{1}{r}\left(\frac{ v_{2}-v_{1}}{t_{2}-t_{1}} \right)
$$

The term in the parenthesis is the definition of linear acceleration, $a$. We can substitute this into our equation, and then rearrange to solve for linear acceleration.

$$
\alpha=\frac{1}{r}a \qquad \boxed{a=r\alpha}
$$

This relationship means that the **linear acceleration** $a$ of a point on a rotating object is equal to the product of it's **angular acceleration** $\alpha$ and it's distance from centre $r$.

* If a wheel starts to speed up it's rotation, a point on the rim will experience a proportional linear acceleration
* The closer a point is to the centre, the less it accelerates linearly, even though every point has the same angular acceleration

#### Tangential and Centripetal Components

In circular motion, a particle's **linear acceleration** is typically a combination of two perpendicular components, one that handles turning and one that handles speeding up/slowing down.

> [!figure] ![[Tangential velocity 1.png]]
> © University of Southampton [^6]

Imagine a mass $P$ moving in a circle around a fixed central point. It has angular velocity $\omega$. At any instance we can also draw its linear velocity $v$ with magnitude $v=r\omega$. **Linear velocity is always at a right angle to the radius of the motion - we sometimes call it the tangential velocity.**

> [!figure] ![[Tangential velocity 2.png]]
> © University of Southampton [^6]


#### Centripetal Acceleration (or Radial)

This component $a_{c}$ is due to the change in the **direction** of the linear velocity $v$.

$$
a_c = \omega^2 r
$$

* If angular velocity $\omega$ is constant, the magnitude of linear velocity $v$ is also constant, but the direction of linear velocity changes all the time. **$v$ is never a constant vector** because the direction is always changing as it moves in a circle.
* **What it does:** Changes the **direction** of the velocity, keeping the mass on the circular path.
* **Direction:** Points towards the **centre** of the circle.

#### Tangential Acceleration

This component $a_{t}$ is due to the change in the **magnitude** (speed) of the linear velocity $v$.

$$
a_t = \alpha r
$$

* If $v$ is changing with time (speeding up or slowing down), there must be a **non-zero linear acceleration $a$** along the tangent, because acceleration is the change of velocity with time. There must also be **non-zero angular acceleration $\alpha$**.
* **What it does:** Changes the **magnitude** (speed) of the velocity.
* **Direction:** Tangent to the circle (same line as linear velocity $v$)

#### Total Acceleration

If $\omega$ is constant then the acceleration $a$ **cannot** be parallel with $v$ (or $v$'s magnitude would change with time as well as its direction). The total linear acceleration is the vector sum of these two components.

| Component       | Symbol | Caused By                | Effect                 |       Formula        |
| :-------------- | :----: | :----------------------- | :--------------------- | :------------------: |
| **Centripetal** | $a_c$  | Turning                  | Keeps object in circle | $$a_c = \omega^2 r$$ |
| **Tangential**  | $a_t$  | Speeding up/Slowing down | Changes rotation speed |  $$a_t = \alpha r$$  |

**Total Linear Acceleration ($a$)** is the vector sum of these two:

$$
a_{total} = \sqrt{a_c^2 + a_t^2}
$$

### Equivalence to Linear Mechanics

The linear mechanics equations have similar forms for rotational mechanics:

| Linear Motion | Circular Motion |
| :--- | :--- |
| Displacement, $s$ | Angular displacement, $\theta$ |
| Velocity, $v$ | Angular velocity, $\omega$ |
| Acceleration, $a$ | Angular acceleration, $\alpha$ |

$$
\text{Velocity} \qquad v=u+at \qquad \rightarrow \qquad \omega_{2}=\omega_{1}+\alpha t
$$
$$
\text{Velocity} \qquad v^2-u^2=2as \qquad \rightarrow \qquad \omega_{2}^2-\omega_{1}^2=2\alpha\theta
$$
$$
\text{Distance} \qquad s=t \cdot \frac{v+u}{2} \qquad \rightarrow \qquad \theta=t\cdot\frac{\omega_{1}+\omega_{2}}{2}
$$
$$
\text{Displacement} \qquad s=ut+\frac{1}{2}at^2 \qquad \rightarrow \qquad \theta=\omega_{1}t+\frac{1}{2}\alpha t^2
$$

### Angular Velocity, Frequency and RPM

The number of complete revolutions in a second is called the frequency, $f$:

$$
f=\frac{1}{T}
$$

The rate of rotation is sometimes given in terms of revolutions per minute. If a body makes $f$ complete revolutions in one second it turns through an angle of $2\pi f$. We know that $\theta=\omega t$, so $\omega=\frac{\theta}{t}$ and for $t=1\text{ second}$:

$$
\omega=\frac{\theta}{T}=\frac{2\pi f}{1}=2\pi f
$$
$$
f=\frac{\omega}{2\pi}
$$

Therefore, the revolutions per minute (or r.p.m.) is:

$$
\text{rpm}=60\times f=\frac{60\omega}{2\pi}
$$

### Converting Degree to Radians

One complete circle takes one revolution, which is $360^{\circ}$. Therefore, for one complete circle:

$$
360^{\circ}=2\pi \text{ rad}
$$

To convert from degrees to radians, multiple the angle by

$$
\frac{2\pi}{360}\qquad \text{or} \qquad \frac{\pi}{180}
$$


[^1]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456165_1?courseId=_232721_1
[^2]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456170_1?courseId=_232721_1&view=content&state=view
[^3]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456180_1?courseId=_232721_1&view=content&state=view
[^4]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456181_1?courseId=_232721_1&view=content&state=view
[^5]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456188_1?courseId=_232721_1&view=content&state=view
[^6]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456189_1?courseId=_232721_1&view=content&state=view
