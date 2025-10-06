---
tags:
  - heat
module: Engineering Principles
component: Heat
permalink: engineering-principles/heat
---

## Temperature

Temperature is one of the seven [[SI Units|SI base quantities]], measured on the Kelvin scale, which is based on the triple point of water ($273.16 K$). Other temperatures are defined using a constant-volume gas thermometer, relative to the triple point:

$$
T=273.16K \times (\lim_{ gas \to 0 } \frac{p}{p_3})
$$

Here $T$ is in kelvins and $p_{3}$ and $p$ are the pressures of the gas at $273.16K$ and the measured temperature, respectively.

### Zeroth Law of Thermodynamics

>If bodies $A$ and $B$ are each in thermal equilibrium with a third body $T$, then $A$ and $B$ are in thermal equilibrium with each other

In less formal language – "Every body has a property called **temperature**. When two bodies are in thermal equilibrium, their temperatures are equal. And vice versa". 

While it seems obvious, we use the zeroth law all the time. If we want to know if two beakers of liquids are at the same temperature, we measure each with a thermometer and compare the reading. We do not need to bring the two liquids into contact to observe whether they are in thermal equilibrium. 

## Thermal Expansion

Nearly every material expands when heated, but they do not all expand by the same amount. For example, you can loosen a metal jar lid by holding it under hot water – both the metal lid and glass jar expand, but the metal lid expands **more** and thus is loosened.

Expansion and contraction must be accounted for in engineering. For example:

* Bridges, affected by seasonal heat: expansion joints added between sections
* Dental cavities, affected by hot drinks must expand by the same amount as the tooth itself 
* Airplanes, leading edges will heat up more than trailing edges

### Linear Expansion

Change in any linear dimension (e.g length) is given by:

$$
\Delta L = L\alpha\Delta T
$$

Where $\alpha$ is a constant called the **coefficient of linear expansion**. The coefficient $\alpha$ has the unit "per degree" pr "per kelvin" and depends on the material. Although $\alpha$ varies somewhat with temperature, for most practical purposes it can be taken as a constant.

| Substance                 | $a(10^{-6} \\/ C\textdegree)$ |
| ------------------------- | ----------------------------- |
| Ice (at $0\textdegree C$) | 51                            |
| Lead                      | 29                            |
| Aluminum                  | 23                            |
| Brass                     | 19                            |
| Copper                    | 17                            |
| Concrete                  | 12                            |
| Steel                     | 11                            |
| Glass (ordinary)          | 9                             |
| Glass (Pyrex)             | 3.2                           |
| Diamond                   | 1.2                           |
| Invar                     | 0.7                           |
| Fused quartz              | 0.5                           |
### Volume Expansion

If all dimensions of a solid expand with temperature, the volume must also expand. For liquids, volume expansion is the only meaningful measure. If the temperature of a solid whose volume is $V$ is increased by an mount $\Delta T$, the increase in volume is:

$$
\Delta V=V\beta\Delta T
$$

Where $\beta$ is the **coefficient of volume expansion** of the solid of liquid. The coefficients of volume and linear expansion for a solid are related by:

$$
\beta=3\alpha
$$

## Absorption of Heat

The temperature of objects in an environment (and the environment itself) will rise or fall until all temperatures are equal and thermal equilibrium is reached. A hot cup of coffee left out will cool down (and raise the room temperature very slightly), and a glass of ice water will heat up, until both are at room temperature.

The SI unit for heat is the same one was for Energy, the joule ($J$). The calorie is now defined as $4.1867J$ (exactly).

$$
1\ cal = 3.968\times 10^{-3}\ Btu = 4.1867\ J
$$

> The "calorie" used in nutrition is really a kilocalorie

### Heat Capacity

The **heat capacity** $C$ of an object is the proportionality constant between the heat $Q$ that the object absorbs or loses, and the resulting temperature change $\Delta T$ of the object:

$$
Q = C\Delta T=C(T_{f}-T_{i})
$$

Where $T_{i}$ and $T_{f}$ are the initial and final temperatures. Heat capacity $C$ has the unit of energy per degree or energy per kelvin. For example, the heat capacity of a marble slab might be $179\ cal/C\textdegree$ or $179\ cal/K$ or $749 J/K$.


> [!WARNING] The word *Capacity* can be misleading as it implies there is a limit to heat transfer. There is not, provided the temperature difference is maintained

### Specific Heat

Two objects made of the same material will have heat capacities proportional to their masses. It is useful to define a "heat capacity per unit mass" or **specific heat** $c$ that refers not to an object but to the material. 

Our [[Heat#Heat Capacity|Heat Capacity]] equation then becomes:

$$
Q=cm\Delta T=cm(T_{f}-T_{i})
$$

The calorie and British thermal unit were originally defined based on the specific heat of water:

$$
c = 1\ cal/g\ \cdot C \textdegree = 1\ Btu/lb\ \cdot F \textdegree
$$

### Phase Change

When energy is absorbed by a sample as heat, the temperature does not necessarily rise. Instead, the sample may change from one phase to another. Matter can exist in three common states: solid, liquid and gas.

* **Melting**: to turn a solid to a liquid
* **Vaporising**: to turn a liquid to a gas

This phase change takes energy (e.g to free the molecules from their existing structure).

The amount of energy per unit mass that must be transferred is called the **heat of transformation** $L$. When a sample of mass $m$ undergoes a phase change, the total energy transferred is:

$$
Q=Lm
$$

When phase change is **from liquid to gas**, or from gas to liquid, the heat of transformation is called the **heat of vaporisation** $L_{V}$. For water at it's normal boiling point:

$$
L_{V}=539\ cal/g = 2256\ kJ/kg
$$

When phase change is **from solid to liquid** (or vice versa), it is called the **heat of fusion** $L_{F}$. For water, this is:

$$
L_{F}=79.5\ cal/g = 333\ kJ/kg
$$

## Heat Transfer

There are three transfer mechanisms that allow heat to be transferred between two objects: conduction, convection, and radiation.

### Conduction

If you leave the end of a metal poker in a fire for enough time, its handle will get hot. Energy is transferred from the fire to the handle by thermal **conduction** along the length of the poker.

The amplitude of the vibration of the atoms in the metal at the fire end become larger because of the high temperature. These vibrations are passed along the length of the poker from atom to atom during collisions with adjacent atoms. 

Consider a slab of face area $A$ and thickness $L$, whose faces are maintained at temperatures $T_{H}$ and $T_{C}$ by a hot reservoir and a cold reservoir.

> [!figure] ![[Heat transfer through slab.png]]
> © Fundamentals of Physics; Halliday, Resnick Walker - fig. 18.6.1

Let $Q$ be the energy that is transferred as heat through the slab, from its hot face to its cold face, in time $t$. The **conduction rate** $P_{cond}$ (amount of energy per unit time) is:

$$
P_{cond}=\frac{Q}{t}=kA\frac{T_{H}-T_{C}}{L}
$$

in which $k$, called **thermal conductivity** is a constant that depends on the material of which the slab is made. A material that readily transfers energy is a good conductor and has a high value of $k$.

#### Thermal Resistance (R-Value)

If you want to insulate something, you're more concerned with poor conductors than good ones. There is the concept of **thermal resistance** $R$. The $R$-value of a slab of thickness $L$ is defined as:

$$
R=\frac{L}{k}
$$

The lower the thermal conductivity $k$, the higher the $R$-value; so something that has a high $R$-value is a **poor conductor** and thus a good insulator.


> [!NOTE] Note that $R$ is a property attributed to a specified thickness, not to a material
> The commonly used unit for $R$ is the square foot-Fahrenheit degree-hour per British thermal unit ($ft^2 \cdot F \textdegree \cdot h/Btu$). The unit is rarely stated.

### Convection

When look at the flame of a candle, you are watching thermal energy being transported upward by **convection**. Such energy transfer happens when a fluid comes into contact with an object whose temperature is higher than that of the fluid.

The temperature of the liquid that is in contact with the hot object increases, and (in most cases) that fluid becomes less dense. Buoyant forces cause it to rise. Some of the surrounding cooler fluid flows to take its place, and the process can continue.

### Radiation

Objects and their environment can exchange energy as heat via electromagnetic waves. Energy transferred this way is called **thermal radiation** to distinguish it from electromagnetic signals (like a television broadcast) and from nuclear radiation (energy and particles emitted by atoms). 


> [!NOTE] Radiation is the only form of heat transfer that does not require a medium
> Because of this, it is the only way spacecraft and other objects in a vacuum can transfer energy

The rate $P_{rad}$ at which an object emits energy via electromagnetic radiation depends on the object's surface area $A$ and the temperature $T$ of the area in kelvins and is given by:

$$
P_{rad}=\sigma\epsilon AT^4
$$

Here $\sigma=5.6704 \times 10^-8\ W/m^2\ \cdot\ K^4$ is called the **Stefan-Boltzmann constant** after Josef Stefan who discovered the equation experimentally, and Ludwig Boltzmann who derived it theoretically after.

The symbol $\epsilon$ represents the emissivity of the object's surface, which has a value between 0 and 1. A surface with emissivity of 1.0 is said to be a *blackbody radiator*, but such a surface is an ideal limit and does not occur in nature.

> [!NOTE] Note that the temperature must be in kelvins, so that a temperature of absolute zero corresponds to no radiation

The rate at which an object absorbs energy via thermal radiation uses the same equation, where $T$ is the uniform temperature of the environment. 

An idealised blackbody radiator with $\epsilon=1$ will absorb all the radiated energy it intercepts. 

Because an object both emits and absorbs thermal radiation, it's net rate $P_{net}$ is:

$$
P_{net}=\sigma\epsilon A(T^4_{env} - T^4)
$$

$P_{net}$ is positive if net energy is being absorbed, and negative is energy is being lost by radition.