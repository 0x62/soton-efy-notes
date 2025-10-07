---
tags:
  - elasticity
  - formula
module: Mechanical Science
component: Elasticity
permalink: mechanical-science/elasticity
---
## Hooke's Law

### Overview

Hooke's Law states that if you take an un-stretched spring and apply a tensile (stretching) force $F$ then the extension $x$ is given by:

$$
x=\frac{F}{k}
$$

where $k$ is the spring constant measured in $N/m$ (newtons per meter). The spring constant is an specific value unique to each spring based on it's size and composition.

If you apply double the force, you will get double the extension *while remaining within elastic limits*. At some critical point, the spring will begin to deform *plastically*, and will no longer return to it's original length.

Hooke's Law only applies to elastic deformation. It also applies to compressive forces on solid bodies - for small values of $x$, the contraction caused by a force will be approximately the same as the extension given by a tensile force of the same magnitude.

**Related Formula**
* Given spring constant and extension: $F=k \times x$
* Given force and spring constant: $x=\frac{F}{k}$
* Given extension and force: $k=\frac{F}{x}$

### Springs in Series

When springs are connected end-to-end (in series), the same force acts on each spring but the total extension is the sum of individual extensions. This results in a more compliant (softer) combined spring.

For springs in series, the effective spring constant $k_{eff}$ is given by:

$$\frac{1}{k_{eff}} = \frac{1}{k_1} + \frac{1}{k_2} + \frac{1}{k_3} + ...$$

For two springs in series:
$$k_{eff} = \frac{k_1 \times k_2}{k_1 + k_2}$$

The total extension is: $x_{total} = x_1 + x_2 + x_3 + ...$

**Key Points:**
* The effective spring constant is always less than the smallest individual spring constant
* Springs in series create a weaker (more easily stretched) system

### Springs in Parallel

When springs are connected side-by-side (in parallel), each spring experiences the same extension but the total force is shared between them. This results in a stiffer combined spring.

For springs in parallel, the effective spring constant $k_{eff}$ is given by:

$$k_{eff} = k_1 + k_2 + k_3 + ...$$

The total force is: $F_{total} = F_1 + F_2 + F_3 + ...$

**Key Points:**
* The effective spring constant is always greater than the largest individual spring constant
* Springs in parallel create a stronger (harder to stretch) system
* For $n$ identical springs in parallel: $k_{eff} = n \times k$


## Young Modulus

**Young Modulus** $E$ is a measure of how stiff a material is – how much it stretches/compresses when it is loaded. It is calculated in terms of **strain** and **stress**.  It uses the same units as stress, $N/m^2$.

$$
E=\frac{Stress}{Strain}=\frac{\sigma}{\epsilon}
$$

### Strain

**Strain** $\epsilon$ is a measure of how much a material has stretched. It is dimensionless, as it is just a ratio of the change in length to the original length.

$$
\epsilon = \frac{Change\ in\ length}{Length} = \frac{\Delta x}{L}
$$

> [!figure] ![[Strain definition.png]]
> © University of Southampton [^1]

### Stress

**Stress** $\sigma$ is a measure of the intensity of force acting normal to an area. It is measured in $N/m^2$ (newtons per meter square). It can also be measured in Pascal, $1\ N/m^2 = 1\ Pascal$, as pascal is also force by area.

$$
\sigma=\frac{Force}{Area}=\frac{F}{A}
$$

### Calculating extension/contraction

Young Modulus enables us to calculate the extension or contraction of a body if we are given it's dimensions (length, cross-sectional area), it's Young's Modulus $E$ and the tensile force applied. To derive the formula to calculate $\Delta x$:

**1. Solve for** $\sigma$:

$$
\sigma=\epsilon E
$$
**2. Substitue stress and strain:**

$$
\frac{F}{A}=E \times \frac{\Delta x}{L}
$$
**3. Solve for** $\Delta x$:

$$
\Delta x=\frac{FL}{AE}
$$

### Combining Hooke's Law & Young Modulus

Both Hooke's Law and Young Modulus can be solved for $F$:

$$
F=k\Delta x
$$
$$
F=\frac{EA}{L} \ \times \Delta x
$$

By substitution, we can derive $k$ in terms of $E$, $A$ and $L$:

$$
k\Delta x=\frac{EA}{L} \times \Delta x
$$
$$
k=\frac{EA}{L}
$$

This gives us $k$, the spring constant, in terms of $E$ and area/length.


> [!TIP] Useful because $E$ is a property of the material, not geometry
> We can look up $E$ for a material in a data book, but if we tried to keep a table of values for $k$ we would need one for every possible shape and size of spring.



[^1]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456109_1?courseId=_232721_1&view=content&state=view
