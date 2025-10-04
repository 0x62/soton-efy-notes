
## Hooke's Law

### Overview

Hooke's Law states that if you take an un-stretched spring and apply a tensile (stretching) force $F$ then the extension $x$ is given by:

$$
x=\frac{F}{k}
$$

where $k$ is the spring constant. The spring constant is an specific value unique to each spring based on it's size and composition.

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

 