---
tags:
  - elasticity
  - formula
module: Mechanical Science
component: Elasticity
permalink: mechanical-science/elasticity
---
## Summary

**[[Elasticity#Hooke's Law|Hooke's Law]]**
$$
x = \frac{F}{k}
$$
**[[Elasticity#Tensile & Compressive Stress|Normal Stress]], [[Elasticity#Shear Stress|Shear Stress]], [[Elasticity#Bulk Stress|Bulk Stress]]**

$$
Stress=\frac{Force}{Area} \qquad \sigma=\frac{F}{A} \qquad \tau=\frac{F}{A} \qquad P=\frac{F}{A}
$$

**[[Elasticity#Tensile & Compressive Strain|Normal Strain]], [[Elasticity#Shear Strain|Shear Strain]], [[Elasticity#Bulk Strain|Bulk Strain]]**

$$
Strain = \frac{Change}{Original\ State} \qquad \epsilon=\frac{\Delta x}{L} \qquad \tan \gamma=\frac{\Delta x}{L} \qquad \epsilon_{v}=\frac{\Delta V}{V}
$$

**[[Elasticity#Young Modulus|Young Modulus]], [[Elasticity#Shear Modulus|Shear Modulus]], [[Elasticity#Bulk Modulus|Bulk Modulus]]**

$$
Modulus=\frac{Stress}{Strain} \qquad E=\frac{\sigma}{\epsilon} \qquad G=\frac{\tau}{\gamma} \qquad B=\frac{P}{\Delta V \div V}
$$

## Hooke's Law

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


## Stress & Strain

**Stresses** $\sigma$ are forces applied to an elastic body that cause deformation. There are three main types of stresses:

- **Tensile & Compressive:** where the force is applied *perpendicular* to the surface
- **Shear:** where force is applied *parallel* to the surface
- **Bulk:** where force is applied equally, in all directions, but perpendicular to the surface

**Stress** $\sigma$ is a measure of the intensity of the force, while **strain** $\epsilon$ is a measure of how *much* a material deforms under stress. A soft metal bar (e.g lead) will deform more than a steel bar. It is a dimensionless quality, as it is essentially a ratio of unloaded size to stressed size.

Each type of stress has it's own modulus, which allows you to calculate how a given material will deform under that kind of stress, but they all use the same units – $N/m^2$ or pascals ($1\ N/m^2 = 1\ Pa$). 

| Stress                                                               | Modulus                                     | Symbol |
| -------------------------------------------------------------------- | ------------------------------------------- | ------ |
| [[Elasticity#Tensile & Compressional Stress\|Tensile & Compressive]] | [[Elasticity#Young Modulus\|Young Modulus]] | $E$    |
| [[Elasticity#Shear\|Shear]]                                          | [[Elasticity#Shear Modulus\|Shear Modulus]] | $G$    |
| [[Elasticity#Bulk\|Bulk]]                                            | [[Elasticity#Bulk Modulus\|Bulk Modulus]]   | $B$    |

### Tensile & Compressive

Tensile & compressive stresses are forces applied perpendicular to the surface of the body. For example, hanging a weight on a bar, or standing on a column. Tensile stress is a 'pulling' force, while compressional stress is a 'pushing' force. 

![[Tensile vs compressive force.png]]

#### Tensile & Compressive Strain

When dealing with tensile and compressive stresses, the **strain** $\epsilon$ is the relationship between the change in length $\Delta x$ and the original length $L$:

$$
\epsilon = \frac{Change\ in\ length}{Length} = \frac{\Delta x}{L}
$$

> [!figure] ![[Strain definition.png]]
> © University of Southampton [^1]

#### Tensile & Compressive Stress

**Stress** $\sigma$,  is the intensity of the force per unit area. A large amount of force in a small area will cause more deformation than the same force spread over a much larger area.

$$
\sigma=\frac{Force}{Area}=\frac{F}{A}
$$

#### Young Modulus

**Young Modulus** $E$ is a measure of how stiff a material is – how much it stretches/compresses when it is loaded. It is calculated in terms of **strain** and **stress**.  It uses the same units as stress, $N/m^2$.

$$
E=\frac{Stress}{Strain}=\frac{\sigma}{\epsilon}
$$

Expanding stress and strain gives you:

$$
E=\frac{F}{A} \div \frac{\Delta x}{L}
$$

#### Calculating extension

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

#### Combining Hooke's Law & Young Modulus

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


### Shear

Shear $\tau$ is force applied **tangent** (or parallel) to the surface. For example, or pushing on the top of a beam that is anchored to the ground.

> [!figure] ![[Shear force.png]]
> © University of Southampton [^2]

#### Shear Strain

Shear strain $\gamma$ is a measure of how much the beam has bent over.

$$
\tan \gamma = \frac{\Delta x}{L}
$$

Where $\Delta x$ is the distance that the beam has bent, $L$ is the original height/length of the beam, and $\gamma$ is the angle that the object has bent through.

#### Shear Stress

Shear stress $\tau$ is the intensity of the force per unit area, acting at a tangent to the area:

$$
\tau=\frac{F}{A}
$$


> [!NOTE] The definition is the same as [[Elasticity#Tensile & Compressive Stress|Normal Stress]], but parallel to the cross-sectional area

#### Shear Modulus

Like [[Elasticity#Young Modulus|Young Modulus]], shear modulus $G$ is stress per strain:

$$
G=\frac{F}{A} \div \frac{\Delta x}{L}=\frac{\tau}{\tan \gamma}
$$

For small $\gamma$, $\tan \gamma \approx \gamma$, therefore:

$$
G=\frac{\tau}{\gamma}
$$

#### Pure Shear

Suppose we have a cantilever beam that is fixed to the wall as below. The beam is jutting out, and only supported where it is bolted to the wall:

> [!figure] ![[Cantilever shear.png]]
> © University of Southampton [^2]

If the beam is very stiff and you apply a shearing force, $F$, down on the end of the beam, it will stay rigid. If you apply more force, the beam would lower it's end where the force is being applied.

At this stage the beam has been moved to the angle gamma $\gamma$, and if it breaks, it would break along the line $AB$. This is **pure shear** – as you push, the beam remains rigid and the sides parallel.

In this case, the forces vary according to the [[Elasticity#Shear Modulus|Shear Modulus]].

#### Pure Bending

Here we have a much more elastic kind of beam, and this case is different.

> [!figure] ![[Pure bending.png]]
> © University of Southampton [^2]

The force has caused the top of the beam into **tension** and the bottom of the beam into **compression**. The sides are no longer parallel.

> [!WARNING] Here the forces vary according to [[Elasticity#Young Modulus|Young Modulus]] because we are dealing with tensile and compressive stress

In a real beam, if you apply force at one end, you would see some bending and some shearing occur simultaneously. To get pure shear or pure bending is quite unusual.

The more **stiff** the material, the stronger the **shear**. The more **elastic** the material, the stronger the **bending**.

### Bulk

Bulk stress is when forces are acting equally around the entire object, with the force at each point normal to the surface. For example, a ball submerged in water.

![[Bulk stress.png]]

#### Bulk Strain

When forces act on the object, it will cause the object as a whole to be compressed (or expanded), resulting in a change of the internal volume. Similar to [[Elasticity#Tensile & Compressive Strain|Tensile & Compressive Strain]], the bulk strain is a ratio between the change in volume and the unstressed volume.

> [!figure] ![[Bulk strain.png]]
> © University of Southampton [^2]

We can calculate bulk strain $\epsilon_{v}$ with:

$$
\epsilon_{v} = \frac{\Delta V}{V}
$$
#### Bulk Stress

The equation for bulk stress is the same as for [[Elasticity#Tensile & Compressive Stress|Tensile & Compressive Stress]].

> [!TIP] Bulk stress is more commonly known as **pressure** $P$

$$
P = \frac{F}{A}
$$

#### Bulk Modulus

Like the other stress modulus, bulk modulus $B$ is a stress per strain:

$$
B=\frac{P}{\frac{\Delta V}{V}}
$$

### Ultimate Tensile Strength

The **strength** of a body is the maximum stress the body can bear. This will depend on whether it is undergoing a tensile, shear or bulk stress. 

Ultimate tensile strength (UTS), sometimes just called tensile strength or ultimate strength, is the maximum stretching stress you can apply before the body breaks. It is determined experimentally.

> [!NOTE] UTS occurs **after** an object has stopped behaving elastically 

> [!figure] ![[Stress-strain graph.png]]
> © University of Southampton [^2]

When we stretch an object, at first it will behave **elastically** (it returns to it's original shape once the force is removed). At some point it will get to the elastic limit or **yield point**, where starts behaving inelastically – if you remove the force, it will not return to it's original shape.

Eventually, it will break. UTS it the stress just before the breaking point.

#### Factors of Safety

Brittle materials have a UTS close to the yield point (they have very limited plastic behaviour). If a material has a large plastic range, it is known as **ductile**. For example, aluminium is ductile, whereas concrete is brittle.

If you're building a structure or mechanical system, we want to ensure that components do not come close to their UTS during normal operation, or there is a risk of breaking. We define a **factor of safety (FoS)** as a ratio of the UTS to the maximum allowed stress:

$$
FoS=\frac{UTS}{Max\ allowed\ stress}
$$

[^1]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456109_1?courseId=_232721_1&view=content&state=view

[^2]: https://blackboard.soton.ac.uk/ultra/courses/_232721_1/outline/edit/document/_7456115_1?courseId=_232721_1&view=content&state=view
