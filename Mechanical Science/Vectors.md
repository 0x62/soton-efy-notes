---
tags:
  - vectors
module: Mechanical Science
component: Vectors
permalink: mechanical-science/vectors
---
## Scalars
A **scalar** is a quantity which can be represented by a single number, its **magnitude**. These include factors like:

* Mass
* Temperature
* Speed

Crucially, scalars don't have a direction component.

## Overview
A **vector** has both a magnitude and **direction**. It can have 2, 3 or more dimensions. For example, velocity has a magnitude (speed), but you also have to know the direction it is traveling in. Other examples include:

* Displacement
* Velocity
* Acceleration
* Force

Some vector quantities like velocity or displacement have a name for it's magnitude, as the scalar component can also be used by itself in certain situations. These include velocity, whose magnitude is **speed**, or displacement, whose magnitude is **distance**.


### Representation & Notation

Consider vector A in two-dimensional space which connects the origin with point P.

> [!figure] ![[Two-dimensional vector.png]]
> © University of Southampton [^1]

The angle is taken from the horizontal line $x$ and anti-clockwise to the line of the vector (towards $y$). The vector has a length and a direction, normally represented graphically with an arrow. 

Some vectors may be represented as an arrow between its two end points $\overrightarrow{AB}$. Vector quantities are designed in **bold** in text books, **underlined** or with an **arrow or caret** over the letter.

Angles are typically represented with an angle symbol $\angle$.

Magnitudes are represented with vertical bars either side, $|AB|$

$$
\text{Vector of } \overrightarrow{OP}=A=\vec{A}=\widehat{A}=\underline{A}
$$

$$
\text{Angle of }\overrightarrow{OP}=\angle\overrightarrow{OP}=\theta
$$

$$
\text{Magnitude of }\overrightarrow{OP}=|OP|
$$

## Pythagoras's Theorem & Trigonometric Ratios

> [!figure] ![[Pythagoras theorem.png]]
> © University of Southampton [^1]

Pythagoras's theorem shows the relationship between the lengths of a right angle triangle:

$$
a^2+b^2=h^2
$$

$$
h=\sqrt{a^2+b^2}
$$

We can also the trigonometric ratios of $\sin\theta$, $\cos\theta$ and $\tan\theta$ to calculate side lengths:

$$
\sin\theta=\frac{opposite}{hypotenuse}
$$

$$
\cos\theta=\frac{adjacent}{hypotenuse}
$$

$$
\tan\theta=\frac{opposite}{adjacent}
$$


> [!TIP] When working with vectors, consider the hypotenuse to be the **magnitude**

### Vector Magnitude and Components

> [!figure] ![[Vectors with pythagoras theorem.png]]
> © University of Southampton [^1]

We can calculate the magnitude of a vector using Pythagoras theorem:

$$
A_{x}=|A|\cos\theta \qquad A_{y}=|A|\sin\theta
$$

$$
|A|=\sqrt{ A_{x}^2 + A_{y}^2 }
$$

$$
\angle\overrightarrow{OP}=\angle\vec{A}=\theta
$$

$$
\tan\theta=\frac{A_{y}}{A_{x}}
$$

$$
\theta=\tan^{-1}(\frac{A_{y}}{A_{x}})
$$

### 3-dimensional vectors

You can also calculate the magnitude of 3-dimensional vectors using Pythagoras theorem.

> [!figure] ![[3-dimensional vectors.png]]
> © University of Southampton [^1]

In three dimensions, $|A|$ becomes:

$$
|A|=\sqrt{ A_{x}^2+A_{y}^2+A_{z}^2}
$$

## Negative Vectors

Let's say we start at $P$ and we want to go to $O$. The magnitude is the same, but the direction is different.

> [!figure] ![[Negative vectors.png]]
> © University of Southampton [^1]
 

Take the angle from the horizontal, and rotate in anti clockwise direction:

$$
\text{Angle of } \overrightarrow{PO}=\angle\overrightarrow{PO}=180+\theta
$$

$$
|\overrightarrow{PO}| = -|\overrightarrow{OP}| = -|A|
$$


> [!TIP] A negative vector has the same magnitude but pointing the opposite direction

## Unit Vector

A unit vector is simply a vector that points in a particular direction and has a magnitude of 1. You can think of it as a substitution for $x$ and $y$, where the position along the axis is represented as a vector rather than a scalar.

$$
|i|=|j|=1
$$

> [!figure] ![[Unit vectors.png]]
> © University of Southampton [^1]

You'll see this in the form:

$$
A=(A_{x}i+A_{y}j)
$$
Where $i$ and $j$ is are unit vectors in $x$ and $y$ cartesian coordinate system.

[^1]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456121_1?courseId=_232721_1&view=content&state=view
