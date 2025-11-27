---
tags:
  - vectors
module: Mechanical Science
component: Vectors
permalink: mechanical-science/vectors
---
## Vectors Formula

**[[#Representation & Notation]]**
Notation for vectors, magnitudes and angles

$$
\text{Vector  } \overrightarrow{OP}=A=\vec{A}=\widehat{A}=\underline{A}
$$
$$
\text{Angle of }\overrightarrow{OP}=\angle\overrightarrow{OP}=\theta \qquad \text{Magnitude of }\overrightarrow{OP}=|OP|
$$

**[[#Pythagoras's Theorem & Trigonometric Ratios]]**
Solving right angled triangles

$$
a^2+b^2=h^2 \qquad h=\sqrt{a^2+b^2}
$$
$$
\sin\theta=\frac{\text{opposite}}{\text{hypotenuse}} \qquad \cos\theta=\frac{\text{adjacent}}{\text{hypotenuse}} \qquad \tan\theta=\frac{\text{opposite}}{\text{adjacent}}
$$

**[[#Vector Magnitude and Components]]**
Determining components, and calculating angle and magnitude

$$
\overrightarrow{OP}=A \qquad \angle\overrightarrow{OP}=\theta
$$
$$
A_{x}=|A|\cos\theta \qquad A_{y}=|A|\sin\theta \qquad |A|=\sqrt{ A_{x}^2 + A_{y}^2 }
$$
$$
\theta=\tan^{-1}(\frac{A_{y}}{A_{x}})
$$
**[[#Unit Vector]]**
Cartesian coordinates as vectors

$$
A=A_{x}i+A_{y}j+A_{z}k
$$
$$
\vec{A} = (5,\ 7,\ -1) \qquad A=5i+7j-k
$$

**[[#Adding & Subtracting Vectors]]**
Add or subtract each vector component

$$
\vec{A}\pm\vec{B}=(A_{x}\pm B_{x},\ A_{y}\pm B_{y},\ A_{z}\pm B_{z})
$$
$$
A=5i+7j-k \qquad B=-6i+2j+2k
$$
$$
A+B=(5+(-6),\ 7+2,\ -1+2)=(-1,\ 9,\ 1)
$$

**[[#Dot Product]]**
Multiplying to get a scalar product

$$
A\cdot B=A_{x}B_{x}+A_{y}B_{y}+A_{z}B_{z}
$$
$$
A\cdot B=|A|\cdot|B|\cdot \cos\theta
$$
$$
\theta=\cos^{-1}\left( \frac{A \cdot B}{|A|\times|B|} \right)
$$

**[[#Cross Product]]**
Multiplying to get a vector product

$$
A\times B=|A|\cdot|B|\cdot \sin\theta
$$
$$
\theta=\sin{-1}\left(\frac{A\times B}{|A|\times|B|} \right)
$$

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

> [!WARNING] The angle is always taken anti-clockwise from the $x+$ direction

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
\sin\theta=\frac{\text{opposite}}{\text{hypotenuse}} \qquad \cos\theta=\frac{\text{adjacent}}{\text{hypotenuse}} \qquad \tan\theta=\frac{\text{opposite}}{\text{adjacent}}
$$

> [!TIP] When working with vectors, consider the hypotenuse to be the **magnitude**

### Vector Magnitude and Components

> [!figure] ![[Vectors with pythagoras theorem.png]]
> © University of Southampton [^1]

We can calculate the magnitude and components of a vector using Pythagoras theorem and trigonometry. First, **calculate the $A_{x}$ and $A_{y}$ components**:

$$
A_{x}=|A|\cos\theta \qquad A_{y}=|A|\sin\theta
$$

Now you can calculate the magnitude using Pythagoras theorem.

$$
|A|=\sqrt{ A_{x}^2 + A_{y}^2 }
$$

$$
\angle\overrightarrow{OP}=\angle\vec{A}=\theta
$$

Finally, calculate angle $\theta$ with trigonometry. 

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
A=A_{x}i+A_{y}j
$$

Where $i$ and $j$ is are unit vectors in $x$ and $y$ cartesian coordinate system.

## Adding & Subtracting Vectors

> [!figure] ![[Vector addition and subtraction.png]]
> © University of Southampton [^2]

To add vectors, we use the **triangle law** which states:

> When two vectors are represented as two sides of the triangle with order of magnitude and direction, then the third side of the triangle represents the magnitude and direction of the resultant vector

In other words, we add the components of the vector, then use [[Mechanical Science/Vectors#Pythagoras's Theorem & Trigonometric Ratios|trigonometry]] to calculate the magnitude and direction of the resultant components (and the same for subtraction):

$$
\vec{A}+\vec{B}=(A_{x}+B_{x},\ A_{y}+B_{y},\ A_{z}+B_{z})
$$
$$
\vec{A}-\vec{B}=(A_{x}-B_{x},\ A_{y}-B_{y},\ A_{z}-B_{z})
$$

In this example, if we assign the values:

$$
\theta=\angle\overrightarrow{OA}=20\textdegree \qquad \gamma=\angle\overrightarrow{AB}=60\textdegree
$$

$$
|OA|=4 \qquad |AB|=5
$$

**Vector A** has a magnitude of 4 and a direction angle of $20\textdegree$. **Vector B** has a magnitude of 5 and a direction angle of $60\textdegree$. We can then add the vectors by adding the components of **vector A** and **vector B** together.

> [!figure] ![[Vector addition and subtraction 2.png]]
> © University of Southampton [^2]

$$
A_{x}=4\cdot \cos 20 \textdegree \qquad A_{y}=4\cdot\sin 20 \textdegree
$$
$$
B_{x}=5\cdot \cos 60 \textdegree \qquad B_{y}=4\cdot\sin 60 \textdegree
$$

Therefore, the components of $C$ (vector $\overrightarrow{OB}$) are:

$$
C_{x}=4\cdot \cos 20 \textdegree+5\cdot \cos 60 \textdegree=6.3
$$
$$
C_{y}=4\cdot\sin 20 \textdegree+4\cdot\sin 60 \textdegree=5.7
$$

We can now find the magnitude $|OB|$ and its direction $\psi$ (or $\angle\overrightarrow{OB}$):

$$
|OB|=\sqrt{C_{x}^2+C_{y}^2} =\sqrt{6.3^2+5.7^2}=8.5
$$
$$
\phi=\tan^{-1}\left( \frac{C_{y}}{C_{x}} \right) = \tan^{-1}\left( \frac{5.7}{6} \right)=42 \textdegree
$$
### Closed Loop Vectors

These vectors together form a **closed loop**. If you go from origin to A, then A to B, then B to origin, you get back to the same place and the sum of the vectors is zero.

$$
\overrightarrow{OA}+\overrightarrow{AB}=\overrightarrow{OB}
$$
$$
\overrightarrow{OA}+\overrightarrow{AB}+\overrightarrow{BO}=0
$$
$$
\overrightarrow{OA}+\overrightarrow{AB}=-\overrightarrow{BO}
$$

### Worked Example

If $\vec{A} = (5,\ 7,\ -1)$ and $\vec{B}=(-6,\ 2,\ 2)$ then calculate $A+B$ and $A-B$.

First, let's put the notation in [[Mechanical Science/Vectors#Unit Vector|unit vector]] form:

$$
A=5i+7j-k \qquad B=-6i+2j+2k
$$
Therefore:

$$
A+B=(5+(-6),\ 7+2,\ -1+2)=(-1,\ 9,\ 1)
$$
$$
A-B=(5-(-6),\ 7-2,\ -1-2)=(11,\ 5,\ -3)
$$

## Multiplying Vectors

There are two ways to multiply vectors: **dot product** (or scalar product) and **cross product** (or vector product).

### Dot Product

In **3-dimension space**, dot product is defined as:

$$
A\cdot B=A_{x}B_{x}+A_{y}B_{y}+A_{z}B_{z}
$$

$$
A\cdot B=|A|\cdot|B|\cdot \cos\theta
$$

The result is a **scalar**, it no longer has a direction. The coefficients ($i$, $j$, $k$) are multiplied together and the results are summed up. 


> [!TIP] Dot product tells you **how much two vectors point in the same direction**
> It's useful for finding angles between vectors and testing if they're perpendicular or parallel


> [!figure] ![[Dot product.png]]
> © University of Southampton [^2]

We can use dot product to find the angle $\theta$ between vectors $\vec{A}$ and $\vec{B}$. 

$$
A\cdot B=A_{x}B_{x}+A_{y}B_{y}+A_{z}B_{z}
$$

$$
A\cdot B=|A|\cdot|B|\cdot \cos \theta
$$

$$
\theta=\cos^{-1}\left( \frac{A \cdot B}{|A|\cdot|B|} \right)
$$

This gives us a simple method for determining if two vectors are perpendicular or parallel:

* If $A\cdot B=0$, the vectors must be **perpendicular**, as $\cos(90 \textdegree)=0$
* If $A \cdot B=|A|\cdot|B|=1$, the vectors must be **parallel**, as $\cos(0\textdegree)=1$

#### Worked Example

If $\vec{A}=-4i+2j+k$ and $\vec{B}=6j+k$, calculate $A\cdot B$ and the angle between $A\cdot B$.

First, calculate the dot product of $A\cdot B$:

$$
A\cdot B=A_{x}B_{x}+A_{y}B_{y}+A_{z}B_{z}
$$
$$
A\cdot B=(-4)(0)+(2)(6)+(1)(1)=13
$$

Then use [[Mechanical Science/Vectors#Pythagoras's Theorem & Trigonometric Ratios|Pythagoras Theorem]] for the lengths of each vector:

$$
\cos\theta=\frac{A\cdot B}{\sqrt{A_{x}^2+A_{y}^2+A_{z}^2}\cdot \sqrt{ B_{x}^2+B_{y}^2+B_{z}^2}}
$$

$$
\cos\theta=\frac{13}{\sqrt{-4^2+2^2+1^2}\cdot \sqrt{ 0^2+6^2+1^2 }}=0.467
$$

$$
\theta=\cos^{-1}(0.467)=62.2 \textdegree
$$

### Cross Product

The cross product of vectors $\vec{A}$ and $\vec{B}$ produces a third vector, $\vec{C}$, which is perpendicular to both $\vec{A}$ and $\vec{B}$ and has the magnitude $|A|\cdot|B|\cdot \sin\theta$, where $\theta$ is the angle between $\vec{A}$ and $\vec{B}$.

> [!WARNING] Exactly 3-dimensional vectors required for cross product

> [!TIP] Cross product gives you a **vector $\vec{C}$ that is perpendicular to both A and B**
> The area enclosed by the parallelogram formed by $A$ and $B$ is the magnitude $|C|$.
> 
> This is useful for finding perpendicular directions (e.g surface normals in graphics), calculating torque and determining rotational axes.


> [!figure] ![[Cross product.png]]
> © University of Southampton [^2]

The analytical method involves setting up a matrix and calculating the determinant:

$$
A \times B = C = \begin{vmatrix}
i & j & k\\
A_{x} & A_{y} & A_{z} \\
B_{x} & B_{y} & B_{z}
\end{vmatrix}
$$

After calculation, vector C is determined as below. **This is not needed for Mathematics A** and is only included for reference. Cross product will be a focus of Mathematics B.

$$
C=(A_{y}B_{z}-A_{z}B_{y})i+(A_{z}B_{x}-A_{x}B_{z})j + (A_{x}B_{y}-A_{y}B_{x})k
$$

However if we are only looking for the angle between $\vec{A}$ and $\vec{B}$ we can shortcut:

$$
A\times B=|A|\cdot|B|\cdot \sin\theta
$$

Therefore, you can calculate the angle $\theta$:

$$
\theta=\sin{-1}\left(\frac{A\times B}{|A|\times|B|} \right)
$$


[^1]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456121_1?courseId=_232721_1&view=content&state=view
[^2]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456127_1?courseId=_232721_1&view=content&state=view
