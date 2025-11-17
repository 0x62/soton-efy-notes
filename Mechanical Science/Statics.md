---
tags:
  - statics
module: Mechanical Science
component: Statics
permalink: mechanical-science/statics
---
## Statics Formula

**[[#Equilibrium]]**
Force components in equilibrium

$$
\sum F_{x}=-Fi+Fi=0 \qquad \sum F_{y}=-mgj+Rj=0 \qquad \sum \tau=0
$$

**[[#Torque]]**, **[[#Oblique Forces|Oblique Torque]]**
Perpendicular and oblique torque
$$
\tau=F \times d \qquad \tau=F \sin\theta\times d
$$
**[[#Coefficient of Static Friction]]**
Relationship between friction force and normal/reaction force
$$
\micro=\frac{F_{s}}{R} \qquad F_{s}=\micro R
$$
**[[#Friction on a Sloped Surface]]**
Equilibrium condition
$$
\micro\geq \tan\theta
$$

## Equilibrium

Static analysis is the study of things that are not moving. Even if an object is not moving, it may still be subject to forces - they are just in equilibrium. When a subject is not moving in any direction, and is not rotating, the sum of their forces and [[#Torque|torque]] in each direction is equal:

$$
\sum F_{x}=ma_{x}=0 \qquad \sum F_{y}=ma_{y}=0 \qquad \sum \tau=0
$$

Static analysis, or statics, tell us what the forces are.

> [!figure] ![[Statics tug of war.png]]
> © University of Southampton [^1]

Suppose we decide to have a tug of war. If the net force is zero, we are in equilibrium and neither of us will move.

$$
-Fi+Fi=0 \implies \sum F_{z}=0
$$

When there are more forces acting on a body, or they are acting at different axis, we can use [[Mechanical Science/Vectors|vectors]] to analyse the resultant motion. In the equation above, force $F$ is represented in [[Mechanical Science/Vectors#Unit Vector|unit vector]] format.

> [!TIP] Remember: vectors in a closed loop sum to zero

![[Mechanical Science/Vectors#Closed Loop Vectors]]

If we represent the forces acting on a body as vectors, and they form a closed loop, there is no resultant force and the forces are in equilibrium. This also works when there are more than three vectors:

> [!figure] ![[4 vector loop.png]]
> © University of Southampton [^1]

Here we can imagine these forces as two pairs of three vectors (note the $-T$, as the vector is reversed):

$$
P+Q+T=0 \qquad R+S-T=0
$$

Therefore, by rearranging our first loop to $-T$ and substituting:

$$
R+S+P+Q=0
$$

 $T$ does not have to be explicit. In any closed loop of 4 vectors, we can draw an imaginary diagonal $T$ vector in an arbitrary direction which connects two opposite corners.

### Component Equilibrium

> [!figure] ![[Component equilibrium.png]]
> © University of Southampton [^1]

In this example, there are two forces in equilibrium, $F_{x}$ and $F_{y}$, however **they are independent of each other**. If the other party were to let go of the rope, the person would fall out of equilibrium in the horizontal direction, but would not suddenly fly up in the vertical direction.

$$
\sum F_{x}=-Fi+Fi=0 \qquad \sum F_{y}=-mgj+Rj=0
$$

If we write our vectors in terms of components of vectors, then a body in equilibrium will have a separate equilibrium of each of the component directions. It doesn't have to be horizontal and vertical - any two perpendicular (eg at right angles) directions will be in equilibrium independently. 

### Weight

The weight of an object on Earth's surface is the gravitational force exerted on ti by the Earth, $W=mg$. **Weight and mass are different!**

Weight is a gravitational force, measured in Newtons ($N$), while mass is a measure of the inertia of an object, and is given in kilograms ($kg$). These are [[SI Units]].

### Reaction Forces

The weight, $W$, of an object resting on a flat horizontal surface is counteracted by a reaction force $R$ (often written as $N$ or $F_{n}$) which is perpendicular (or normal) to the surface. For example, with a horizontal surface, the reaction force is vertical.

> [!figure] ![[Reaction forces.png]]
> © University of Southampton [^1]

### Action & Reaction

In the case of a tense rope, the weight $W$ of an object hanging on the rope is counteracted by a tension force $T$ which is at the opposite direction of the weight.

> [!figure] ![[Rope hanging weight.png]]
> © University of Southampton [^1]

Similarly, if force is exerted on the horizontal direction (e.g by pulling a box), there is an equal and opposite force at the other end resisting whatever is pulling the rope.

> [!figure] ![[Rope drag weight.png]]
> © University of Southampton [^1]

These are examples of Newton's Third Law: **to every action there is an equal but opposite reaction**. Every state of equilibrium there is an equal force but on the other direction.

We can also apply this same logic to a simple pulley, **as long as we can assume the pulley to have no friction**.

> [!figure] ![[Pulley load.png]]
> © University of Southampton [^1]

## Torque

Consider a door, as viewed from above. The door has a hinge at one end, and pivots around it.

> [!figure] ![[Hinge forces.png]]
> © University of Southampton [^2]

It is more efficient to open the door by pushing at $B$ instead of $A$. The closer to the hinge you push, the harder you have to push to get the same rotation of the door. 

We can say that the force creates a *torque* or *moment* about the hinge (put differently, the force makes the door rotate around the hinge). The unit of torque is the newton-meter ($Nm$).

For a given force $F$, the torque is proportional to the perpendicular distance from the point where the force is applied to the hinge. It is calculated as the magnitude of the force creating the torque, multiplied by the perpendicular distance from the fulcrum to the force.

$$
\text{Torque} = \text{Perpendicular force} \times \text{Perpendicular distance}
$$

We use the symbol tau $\tau$ for torque, and $\bot$ to indicate [perpendicularity](https://www.youtube.com/watch?v=BKorP55Aqvg).

$$
\tau=F_{\bot}\times d_{\bot }
$$

When using torque equations, we treat forces that create clockwise movement as positive and anti-clockwise as negative. 

### Oblique Forces

Often a force is not applied perpendicular to the object it is acting on.

> [!figure] ![[Oblique torque.png]]
> © University of Southampton [^2]

To visualise this, consider the forces acting parallel $F_{\|}$ and perpendicular $F_{\bot}$ to the object. The component parallel to the object $F_{\|}$ puts the object in tension, so has no turning effect. Only the perpendicular $F_{\bot}$ force has a turning effect.

Therefore, we can rewrite our torque formula as:

$$
\tau=F\sin\theta \times d_{\bot}
$$

This is easy to visualise if you consider the extremes. At $\theta=0$, there is no perpendicular component and the object is under pure tension. At $\theta=90$, there is no parallel component and the object is under pure torque. When $\theta=90$, $\sin\theta=1$, thus imparting the maximum amount of torque on the object because all force is acting to rotate it.

### Maximum Torque

The torque for a given force $F$ is at it's maximum when:

- The distance from the fulcrum is at it's maximum 
- The force is applied perpendicular to the line connecting the pivot and the point of application of the force

### Torque Equilibrium 

> [!figure] ![[Torque and rotation.png]]
> © University of Southampton [^2]

If two equal forces act on a body in opposite directions, but at different points, the horizontal forces will be in equilibrium, but torque will not. This causes the body to rotate. We can write the forces as:

$$
\tau_{1}=F_{1} \times \frac{d}{2} \qquad \tau_{2}=F_{2} \times \frac{d}{2} \qquad \tau_{total}=\tau_{1}+\tau_{2}\ Nm
$$

For an object to be in equilibrium, we also need rotational forces to be in balance.

## Static Friction

> [!figure] ![[Static friction.png]]
> © University of Southampton [^2]

Static friction is a model of how friction acts to prevent motion on things that aren't already moving (as opposed to dynamic or kinetic friction, which describes the effect of friction for surfaces that are moving against each other).

In the simple models of friction, we assume that the surface area of the block in contact with the floor doesn't affect the size of the friction force.

If there is no force F, then that static friction force $F_{s}$ will be zero. As force F gets gradually bigger, then the friction force $F_{s}$ gets gradually bigger to resist the motion and the block remains in equilibrium.

At some point the force applied will be greater than the friction force can resist, and the block will move. We call the value of $F_{s}$ just before the block starts moving the **limiting friction**. At limiting friction, the block is just about to stop being in horizontal equilibrium. 

### Coefficient of Static Friction

For each pair of services we can define a coefficient of friction: 

$$
0 \leq \micro \leq 1
$$

Where $\micro = 0$ describes a perfectly smooth surface, and $\micro=1$ describes a surface with infinite friction, stuck together by an unbreakable bond. Naturally, such values are only theoretical. Although the friction force doesn't depend on the contact area between the surfaces, it does depend on the mass of the block. Heavier blocks are harder to get moving. 

We can write the relationship between the coefficient of friction $\micro$, friction force $F_{s}$ and reaction force R as:

$$
\micro=\frac{F_{s}}{R} \qquad F_{s}=\micro R
$$

### Friction on a Sloped Surface

> [!figure] ![[Static friction sloped surfaces 1.png]]
> © University of Southampton [^2]

Consider an object on a slope in the extreme cases first.

**Flat Plane**: $\theta=0$ so $\sin\theta=0$ and the weight acts vertically down, balanced by $R$ vertically up. The block is in horizontal equilibrium.

**Vertical Cliff**: $\theta=90$ so $\sin\theta=1$ and the weight acts vertically down so the block will fall under it's own weight $mg$ unless friction force acting upwards between block and cliff exactly balances weight.

Now consider $0\lt\theta\lt90$. 

> [!figure] ![[Static friction sloped surfaces 2.png]]
> © University of Southampton [^2]

For the object to be at equilibrium (or limiting friction), the friction force $F_{s}$ must be greater than (or equal) to the force acting parallel to the plane due to the mass of the object. In other words, for the object not to slip:

$$
F_{s}\geq mg \cdot \sin\theta
$$

We can substitute $F_{s}$ for $\micro R$. This comes from the fact that static friction can be **at most** $\micro R$, where $\micro$ is the coefficient of static friction and $R$ is the normal (or reaction) force.

$$
\micro R\geq mg \cdot \sin\theta
$$

The object is at perpendicular equilibrium, therefore

$$
R-mg \cdot \cos\theta=0 \qquad R=mg \cdot \cos\theta
$$

Which we can substitute into our equation

$$
\micro(mg \cdot \cos\theta)\geq mg \cdot \sin\theta
$$

Rearrange for $\micro$ and cancel the $mg$ terms

$$
\micro\geq\frac{\sin\theta}{\cos\theta} \qquad \boxed{\micro\geq \tan\theta}
$$

This tells us that for an object to remain stationary on a slope, the coefficient of friction must be at least as large as the tangent of the angle. The steeper the slope, the larger $\micro$ needs to be.

[^1]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456145_1?courseId=_232721_1&view=content&state=view

[^2]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456152_1?courseId=_232721_1&view=content&state=view
