---
tags:
  - gases
module: Engineering Principles
component: Gases
permalink: fy/engineering-principles/gases
---
## Gas Equations

**[[#Pressure]]**, **[[#Pressure In a Liquid|Pressure with Depth]]**, **Atmospheric Pressure**

$$
P=\frac{F}{A} \qquad P=P_{atm}+\rho gh \qquad P_{atm}=101 \text{ kPa}
$$

**Pressure measure by [[#Spring|Piston]]** , **[[#Piezometer]]**, **[[#U-tube Manometer]]**, **[[#Barometer]]**

$$
PA=k(x_{0}-x) \qquad P=\rho gh \qquad P-P_{atm}=\rho gh \qquad P_{atm}=\rho_{mercury}gh
$$

**[[#Boyle's Law]]**, **[[#Charles's Law]]**, **[[#Constant Volume Law]]**
Temperature constant (*isothermal*), pressure constant (*isobaric*), volume constant (*isochoric*). $T$ must be measured in Kelvin.

$$
P_{1}V_{1}=P_{2}{V}_{2} \qquad \frac{V_{1}}{T_{1}}=\frac{V_{2}}{T_{2}} \qquad \frac{P_{1}}{T_{1}}=\frac{P_{2}}{T_{2}}
$$

**[[#Combined Gas Law]]**

$$
\frac{P_{1}V_{1}}{T_{1}}=\frac{P_{2}V_{2}}{T_{2}}
$$

**[[#Ideal Gas Equation]]**

$$
PV=nRT \qquad R=8.31\text{ JK}^{-1}\text{mol}^{-1}
$$

$$
n=\frac{\text{number of molecules}}{\text{Avogadro number}}=\frac{N}{N_{A}} \qquad N_{A}=6.022\times 10^{23}\text{ molecules/mole}
$$

$$
n=\frac{\text{mass [g]}}{\text{mass number }\left[ \frac{\text{g}}{mol} \right]}=\frac{m}{M}
$$

> [!NOTE] Moles vs molecules vs mass
> * $N$ = number of molecules (a count)
> * $n$ = number of moles (a count in “mole units”)
> * $m$ = mass of gas (kg or g depending on what you’re doing)
> * $M$ = molar mass (g/mol or kg/mol)  
> The conversion links are: $n=\frac{N}{N_A}$ and $n=\frac{m}{M}$.

**[[#Specific Gas Constant]]**
Where:
* $M$ is the mass number ($\frac{kg}{mol}$) **in kilograms**
* $c_{v}$ is the specific heat capacity
$$
R_{gas}=\frac{R}{M} \qquad R_{gas}=c_{v}(\gamma-1) \qquad PV=mR_{gas}T \qquad P=\rho R_{gas}T
$$

**Specific Heat Capacity at [[#Heat Capacity at Constant Volume|Constant Volume]]**, **[[#Heat Capacity at Constant Pressure|Constant Pressure]]**
Energy required to raise the temperature of 1 kg of gas by 1 K, when either volume or pressure is held constant.

* $c_v$ tells you how $U$ changes with $T$ for an ideal gas: $\Delta U = mc_v \Delta T$.
* $c_p$ tells you how much heat is needed to raise $T$ at constant pressure: $\Delta Q = mc_p \Delta T$.
* Because gas expands at constant pressure, $c_p>c_v$.
$$
c_{v,p} = \left(\frac{\text{energy added}}{\text{mass}\cdot\Delta T}\right)
$$

**[[#First Law of Thermodynamics]]**, **[[#Energy Conversion|Energy Conversion in Gasses]]**

$$
\Delta Q=\Delta U+\Delta W \qquad \Delta Q=\Delta U+p\Delta V
$$

**First Law at [[#Constant Volume Law|Constant Volume]]**, **[[#Constant Pressure (Isobaric)|Constant Pressure]]**

$$
\Delta Q = mc_v\Delta T \qquad mc_p\Delta T = mc_v\Delta T + p\Delta V
$$

**[[#Work Done by Gas]]**

$$
\Delta W=PA\cdot\Delta x=P\cdot\Delta V
$$

**[[#Adiabatic Processes]]**

$$
P_{1}V_{1}^{\gamma}=P_{2}V_{2}^{\gamma} \qquad T_{1}V_{1}^{\gamma-1}=T_{2}V_{2}^{\gamma-1} \qquad T_{1}^{\gamma}P_{1}^{1-\gamma}=T_{2}^{\gamma}P_{2}^{1-\gamma}
$$

$$
mc_v\Delta T = -P\Delta V
$$
## Pressure

Density, $\rho$, is mass per unit volume.

$$
\rho=\frac{m}{V} \qquad \text{kg/m}^3
$$

Pressure, $p$ is a normal force F exerted by a gas/liquid per unit area A.

$$
P=\frac{F}{A} \qquad \text{N/m}^2 \text{ or Pascal, Pa}
$$

Other common units for pressure include *bar* and *standard atmosphere (atm)*:

$$
\text{1 bar = } 10^5 \text{ Pa = } 0.1 \text{ MPa = } 100 \text{ kPa}
$$
$$
\text{1 atm = } 101.325 \text{ kPa = } 1.01325 \text{ bar}
$$

Pressure can either be measured as an **absolute pressure**, relative to absolute zero pressure (eg. the pressure at an absolute vacuum where there is no gas).

It can also be measured as the difference between a system and the surrounding atmosphere pressure. This pressure is called **relative** or **gauge pressure**.

> [!NOTE] Absolute vs gauge (common exam wording)
> * Absolute pressure: measured from vacuum (0 Pa).
> * Gauge pressure: measured relative to the atmosphere.
> 
> Relationship: $P_{abs}=P_{atm}+P_{gauge}$.
> This matches the manometer equation $P-P_{atm}=\rho gh$.

### Pressure In a Liquid

We use pressure and density equations to calculate the pressure experienced by an object under liquid. The deeper the object is, the more pressure the object will experience. 

$$
P=\frac{F}{A} \qquad \rho=\frac{m}{V}
$$

We can rearrange mass to be the product of density, area and height (depth) of the liquid.

$$
m=\rho V=\rho Ah
$$

> [!figure] ![[Pressure in a liquid.png]]
> © University of Southampton [^1]

Substituting this into our pressure equation, it simplified to the product of density, height and gravity (as both area terms cancel). 

$$
P=\frac{F}{A}=\frac{mg}{A}=\frac{\rho Ah\ g}{A}=\rho hg \qquad \boxed{P=\rho hg}
$$


Imagine an object is at a certain depth inside a liquid. Pressure at a given depth in liquid is given by the depth of the object, and the pressure on the surface of the liquid

$$
P=P_{0}+\rho gh
$$

> [!figure] ![[Pressure on object in a liquid.png]]
> © University of Southampton [^1]

> [!NOTE] What $P_0$ is in practice
> $P_0$ is the pressure at the surface of the liquid. Often this is atmospheric pressure, so $P_0=P_{atm}$, giving $P=P_{atm}+\rho gh$.

### Measuring Pressure

#### Piezometer

The weight of a liquid can be used to balance its own pressure. Support a liquid in a pipe has pressure P. If a hole is made in the top of the pipe and a vertical tube affixed to it, the liquid will rise up the tube until it's weight balances the force due to pressure.


> [!figure] ![[Piezometer.png]]
> © University of Southampton [^1]

Let the cross-sectional area of the tube be A. The force upwards on the bottom of the liquid in the tube is:

$$
F=PA
$$

This must be equal to the weight of the liquid in the tube, as the two forces are in equilibrium. 

$$
F=ma=\rho Ahg
$$

Therefore, pressure is given by:

$$
\uparrow PA = \rho Ahg \downarrow \qquad \boxed{P=\rho hg}
$$

> [!NOTE] When a piezometer works / fails
> A piezometer only works when the fluid is a liquid and the pressure is not so large that the column height becomes impractical.

#### Barometer

![[Barometer.png]]

A barometer is a device for measuring atmospheric pressure. Is a vertical tube like the piezometer, but sealed at the top. The barometer equation is:

$$
P_{atm}=\rho_{mercury} \times g \times h
$$

$\rho_{mercury}$ is the density of mercury, which is approximately $13600\ kgm^{-3}$.

> [!NOTE] Why the top can be “vacuum”
> The top of the sealed tube contains very low pressure (Torricelli vacuum), so the mercury column height directly balances atmospheric pressure.

#### U-tube Manometer

> [!figure] ![[U-tube manometer.png]]
> © University of Southampton [^1]

A U-tube manometer consists of a U-shaped tube partially filled with a liquid. A gas pressure is applied to one side of the tube, and the other is open to the atmosphere. The pressure difference is calculated from the height difference of the liquid surface. 

$$
P-P_{atm}=\rho gh
$$

The liquid is chosen according to the range of pressures expected. Mercury is often used for high pressures, water, alcohol or oil for lower pressures.

> [!NOTE] Sign convention / which side is higher
> The side with the higher pressure pushes the liquid down, making the liquid level lower on that side and higher on the other side.

#### Spring

> [!figure] ![[Spring.png]]
> © University of Southampton [^1]

The simplest pressure gauge has a piston backed by a spring. The force exerted on the piston by the gas is $F_{1}=PA$, while the force exerted by the spring is given by $F_{2}=k(x_{0}-x)$ where $k$ is a spring stiffness constant and $x_{0}$ is the unstretched length of the spring (see [[Foundation Year/Mechanical Science/Elasticity#Hooke's Law|Elasticity]]).

These two forces must be equal, so: 

$$
PA=k(x_{0}-x) \qquad P=\frac{k(x_{0}-x)}{A}
$$

> [!NOTE] What this gauge is really measuring
> It measures pressure by converting it into a force ($PA$) and then into a displacement using Hooke’s law.

## The Gas Laws

### Boyle's Law

If temperature is constant, squeezing a gas into a smaller space makes pressure increase. Gas pressure comes from molecules hitting the container walls. Smaller volume means molecules hit walls more often, resulting in higher pressure.

$$
P\propto \frac{1}{V}\qquad\text{(T = constant)}
$$
$$
P_{1}V_{1}=P_{2}V_{2}
$$

> [!NOTE] The process should be close to isothermal for Boyle's Law to apply (slow enough for heat to flow so $T$ stays constant).

### Charles's Law

When a gas is heated at constant pressure, it expands. Higher temperature means molecules move faster, pushing the walls outwards, increasing volume.

$$
V\propto T \qquad \text{(P = constant)}
$$

$$
\frac{V_{1}}{T_{1}}=\frac{V_{2}}{T_{2}}
$$


> [!WARNING] Temperature must be in Kelvin, because volume would be zero at $T=0\text{K}$ (absolute zero)


### Constant Volume Law

If a gas is heated in a rigid container, pressure rises. Hotter molecules move faster, hitting walls harder and more often, so pressure increases.

$$
P \propto T \qquad \text{(V = constant)}
$$

$$
\frac{P_{1}}{T_{1}}=\frac{P_{2}}{T_{2}}
$$

### Combined Gas Law

Putting these three experimental laws together gives:

$$
\frac{PV}{T}=\text{constant} \qquad \frac{P_{1}V_{1}}{T_{1}}=\frac{P_{2}V_{2}}{T_{2}}
$$

> [!NOTE] How to use the combined law quickly
> If one variable is constant, cancel it and you immediately recover Boyle/Charles/constant volume law.

## Avogadro's Hypothesis

Avogadro's hypothesis states that equal volumes of different gases at the same pressure and temperature contain the same number of molecules.  From the ideal gas equation:

$$
PV=nRT
$$

If two gasses have the same:

* Pressure, $P$
* Volume, $V$
* Temperature, $T$
* Gas constant, $R=8.31\text{ JK}^{-1}\text{mol}^{-1}$

Then $n_{1}=n_{2}$. So both gases contain the same number of moles. Since one mole of any substance contains $N_{A}$ (Avogadro's Number) molecules, the number of molecules must also be equal.

$$
n=\frac{\text{number of molecules}}{\text{Avogadro number}}=\frac{N}{N_{A}} \qquad N_{A}=6.022\times 10^{23}\text{ molecules/mole}
$$

$$
n=\frac{\text{mass [g]}}{\text{mass number }\left[ \frac{\text{mol}}{g} \right]}=\frac{m}{M}
$$

> [!NOTE] What Avogadro’s hypothesis is really giving you
> It justifies using volume as a proxy for “amount of gas” when $P$ and $T$ are fixed, because $V \propto n$ at fixed $P,T$.

## Ideal Gas Equation

To include the amount of gas, Avogadro's hypothesis is added:

$$
PV=nRT
$$
Where:

* $P=$ pressure (Pa)
* $V=$ volume ($m^3$)
* $T=$ temperature (K)
* $n=$ number of moles
* $R=8.31\text{ JK}^{-1}\text{mol}^{-1}$


> [!NOTE] This explains why gas volumes are a useful way of comparing chemical amounts
> At constant temperature and pressure, volume becomes a measure of particle number

From the equation above, we can obtain many other forms. For a given mass $m$ of gas with molar mass $M$, or the number of molecules $N$, the number of moles in the gas is:

$$
n=\frac{N}{N_{A}}=\frac{m}{M}
$$

So the equation of state can be written as:

$$
PV=\left( \frac{N}{N_{A}} \right)RT \qquad PV=\left( \frac{m}{M} \right)RT
$$

Also, since $\rho=\frac{m}{V}$ (where $\rho$ is the density of the gas), we can get another form:

$$
P=\frac{\rho}{M}RT
$$
### Specific Gas Constant

$R$ is the universal molar gas constant for all gasses. It is often useful to define a specific gas constant $R_{gas}$, which is defined as:

$$
R_{gas}=\frac{R}{M}
$$

Where:

* $M$ is the molar mass of the gas
* The unit for $R_{gas}$ is $\text{Jkg}^{-1}\text{K}^{-1}$ (joules of energy per kilogram of gas per kelvin of temperature)

For example, for air, since molar mass is $28.8 \text{ g/mol}$, it's specific gas constant is:

$$
R_{air}=\frac{8.31\text{ JK}^{-1}\text{mol}^{-1}}{28.8\text{ g/mol}}=0.287\text{ Jg}^{-1}\text{K}^{-1}=287\text{ Jkg}^{-1}\text{K}^{-1}
$$

By using:

$$
R_{gas}=\frac{R}{M} \qquad \implies \qquad R=R_{gas}M
$$

And replacing $R$ in the ideal gas equation, it can be rewritten as:

$$
PV=nRT=n(R_{gas}M)T
$$

Since $n=\frac{m}{M}$, the $n$ and $M$ terms cancel out:

$$
PV=mR_{gas}T \qquad P=\rho R_{gas}T
$$

> [!WARNING] Note that the mass, $m$, must be in the unif of kg

> [!NOTE] What this density form is used for
> $P=\rho R_{gas}T$ is used a lot in fluids/thermo because it links macroscopic properties (pressure, density, temperature) without explicitly counting moles.

#### Heat Capacity at Constant Volume

This is the energy required to raise the temperature of **1 kg of gas** by **1 K** when **volume is constant**.

$$
c_v = \left(\frac{\text{energy added}}{\text{mass}\cdot\Delta T}\right)_V
$$

Units: $\text{J kg}^{-1}\text{K}^{-1}$

At constant volume, all added energy increases the **internal energy** (molecular kinetic energy).

#### Heat Capacity at Constant Pressure

This is the energy required to raise the temperature of **1 kg of gas** by **1 K** when **pressure is constant**.

$$
c_p = \left(\frac{\text{energy added}}{\text{mass}\cdot\Delta T}\right)_P
$$

Here, energy increases internal energy **and** does work as the gas expands, so:

$$
c_p > c_v
$$

#### Relationship Between Heat Capacities and Gas Constant

For an ideal gas:

$$
c_p - c_v = R_{\text{gas}}
$$

This links thermal properties of the gas to the gas constant.

#### Alternative Form

Using:

$$
c_p - c_v = R_{\text{gas}}, \qquad c_p = \gamma c_v
$$

We obtain:

$$
R_{\text{gas}} = c_v(\gamma - 1)
$$

Rearranging:

$$
c_v = \frac{R_{\text{gas}}}{\gamma - 1}, \qquad
c_p = \frac{\gamma R_{\text{gas}}}{\gamma - 1}
$$

> [!NOTE] Heat capacity ratio (what $\gamma$ is)
> $\gamma=\frac{c_p}{c_v}$ is dimensionless and shows up in adiabatic processes because adiabatic changes link $P,V,T$ through how the gas stores energy and does work.

## First Law of Thermodynamics

> In a closed system, energy cannot be created or destroyed, only transferred or converted.

The first law of thermodynamics is a statement of conservation of energy. Energy cannot be created or destroyed, only transferred or converted between forms.

For a system, the change in its total energy equals the energy transferred across its boundary as heat and work. In a closed system, energy may enter or leave the system as heat or work, but no mass crosses the system boundary.

This is expressed with the equation:

$$
\Delta Q=\Delta U+\Delta W
$$

where:
* $Q$ is the heat energy
* $W$ is an amount of mechanical work
* $U$ is the internal energy stored

This tells us that if we add a small amount of heat energy to a system, we will increase its internal energy, or some work will be done (or a combination of the two).


> [!NOTE] What is *work*?
> Work means any energy transfer that is not caused by a temperature difference. If energy crosses the system boundary because of motion, force, electricity, magnetism, etc. The most common form, *boundary work*, is where gas expands or contracts inside a piston.

The sum of the increase in internal energy and the work done will always be exactly equal to the amount of heat supplied. Either of these may be negative in a particular case.

| Condition    | Process                                                                   |
| ------------ | ------------------------------------------------------------------------- |
| $\Delta Q=0$ | [[#First Law of Thermodynamics for an Adiabatic Process\|Adiabatic]]      |
| $\Delta V=0$ | [[#Constant Volume Law\|Isochoric (Constant Volume)]]                     |
| $\Delta P=0$ | [[#Constant Pressure (Isobaric)\|Isobaric (Constant Pressure)]]           |
| $\Delta T=0$ | [[#Constant Temperature (Isothermal)\|Isothermal (Constant Temperature)]] |

### Energy Conversion

For gas under constant pressure, $\Delta W=p\Delta V$, so:

$$
\Delta Q=\Delta U+p\Delta V
$$

This, if an amount of heat $\Delta Q$ is supplied to the gas, then it must either:

* Be stored as an increase in energy
* Make the gas do work (ie expand)
* Or a combination of the two

Negative values mean an energy flow the other way: heat removed, temperature falls, gas compressed.

### Constant Volume (Isochoric)

For a constant volume process, the volume does not change:

$$
\Delta V = 0
$$

Since work done by a gas is $\Delta W = p\Delta V$, no work is done:

$$
\Delta W = 0
$$

Substituting into the First Law:

$$
\Delta Q = \Delta U
$$

For an ideal gas, the change in internal energy is proportional to temperature change:

$$
\Delta U = mc_v\Delta T
$$

So:

$$
\Delta Q = mc_v\Delta T
$$

### Constant Pressure (Isobaric)

For a constant pressure process:

$$
p = \text{constant}
$$

Work done by the gas is:

$$
\Delta W = p\Delta V
$$

From the First Law:

$$
\Delta Q = \Delta U + p\Delta V
$$

Using $\Delta U = mc_v\Delta T$:

$$
\Delta Q = mc_v\Delta T + p\Delta V
$$

From the ideal gas law at constant pressure:

$$
p\Delta V = mR_{\text{gas}}\Delta T
$$

So:

$$
\Delta Q = m(c_v + R_{\text{gas}})\Delta T
$$

Since:

$$
c_p = c_v + R_{\text{gas}}
$$

We obtain:

$$
\Delta Q = mc_p\Delta T
$$

### Constant Temperature (Isothermal)

For a constant temperature process:

$$
\Delta T = 0
$$

For an ideal gas, internal energy depends only on temperature, so:

$$
\Delta U = mc_v\Delta T = 0
$$

Substituting into the First Law $\Delta Q=\Delta U+\Delta W$ gives:

$$
\Delta Q = \Delta W
$$

For boundary work:

$$
\Delta W = p\Delta V
$$

So at constant temperature:

$$
\Delta Q = p\Delta V
$$

## Work Done by Gas

Consider a tube of gas at pressure p closed by a piston of area A. 

> [!figure] ![[Gas piston.png]]
> © University of Southampton [^2]

Suppose the gas is allowed to expand a little, without a significant change in pressure.  The piston moves out by a small distance $\Delta x$. To hold the piston in place, an equal and opposite force must be applied externally. The force exerted by a gas on the piston is $F=PA$.

The work done by the gas against the restraining force $F$ is:

$$
\Delta W=F\cdot\Delta x = PA\cdot\Delta x
$$

But, $A\cdot\Delta x=\Delta V$, therefore:

$$
\Delta W=PA\cdot\Delta x=P\cdot\Delta V
$$

if the volume increases from $0.1m^3$ to $0.102m^3$ at the pressure of $10^5 Pa$, then the work done by the gas is:

$$
\Delta W=P\Delta V=10^5\cdot(0.102-0.1)=200J
$$

The gas does 200J of work, which is energy transferred to something else (e.g the piston).

If the volume decreases, we can say that the gas does negative work. If the volume decreases from 0.1 to 0.098, then the work done to compress the gas is:

$$
\Delta W=P\Delta V=10^5\cdot(0.098-0.1)=-200J
$$

In general:

* Work done by a gas on its surroundings is positive **(expansion)**
* Work done to/on a gas by its surroundings is negative (**compression)**

## Internal Energy

Kinetic theory shows that heat energy stored within a perfect gas is the kinetic energy of the molecules.

$$
KE=\frac{1}{2}mc^2=\frac{3}{2}nRT
$$

Where:
* $m$ is the mass of one gas molecule
* $c$ is molecular speed
* $n$ is number of molecules of gas
* $R$ is the universal gas constant
* $T$ is the absolute temperature

This energy is known as internal energy, symbol $U$. We do not usually need to know the exact value of U, generally we are only interested in how it changes. A change in internal energy always implies a change in temperature in the same direction (in the absence of a change of phase).


## Adiabatic Processes

An **adiabatic process** is one in which **no heat is transferred** between the system and its surroundings:

$$
\Delta Q = 0
$$

This does **not** mean temperature stays constant. Temperature can change because energy is transferred **as work**, not heat.

| Process    | Heat Transfer                          | Temperature Change |
| ---------- | -------------------------------------- | ------------------ |
| Isothermal | Heat flows in/out to keep $T$ constant | No                 |
| Adiabatic  | No heat transfer                       | Yes                |
| Isobaric   | Pressure constant                      | Usually            |
| Isochoric  | Volume constant                        | Usually            |

Adiabatic processes occur when:

* The system is well insulated  
* The process happens so quickly that heat cannot flow  

Examples:

* Aerosol spray cans cool during spraying (rapid expansion)  
* Cloud or fog formation during sudden air expansion  
* Mist when opening a champagne bottle  
* A bicycle pump warms during rapid compression  

### Behaviour of a Gas During Expansion

For a general change where $P$, $V$, and $T$ all change:

Initially:
$$
PV = mR_{\text{gas}}T
$$

Finally:
$$
(P+\Delta P)(V+\Delta V) = mR_{\text{gas}}(T+\Delta T)
$$

Expanding and ignoring second-order small terms:

$$
P\Delta V + V\Delta P = mR_{\text{gas}}\Delta T
$$

Using:
$$
R_{\text{gas}} = c_v(\gamma - 1)
$$

Where:

* $c_v$ = specific heat capacity at constant volume  
* $\gamma = \dfrac{c_p}{c_v}$ = heat capacity ratio  

So:
$$
P\Delta V + V\Delta P = mc_v(\gamma - 1)\Delta T
$$

### First Law of Thermodynamics for an Adiabatic Process

For an adiabatic process, there is no change in heat energy ($Q$), so the change in internal energy ($U$) is the negative of the work done ($W$).

$$
\Delta Q = 0 \quad \Rightarrow \quad \Delta U = -\Delta W
$$

For an ideal gas, [[#Work Done by Gas|work done]] is pressure multiplied by the change in volume, and the internal energy change is the product of mass, specific heat capacity at constant volume, and the change in temperature.

$$
\Delta W = P\Delta V \qquad \Delta U = mc_v\Delta T
$$

Where:
* $m$ is mass of the gas
* $c_{v}$ is the [[#Heat Capacity at Constant Volume|specific heat capacity at constant volume]]
* $\Delta T$ is change in temperature

Therefore:
$$
\Delta W=-mc_{v}\Delta T \qquad mc_v\Delta T = -P\Delta V
$$

### Adiabatic Relations

Combining the above results leads to the standard adiabatic equations:

$$
PV^\gamma = \text{constant}
$$

$$
TV^{\gamma-1} = \text{constant}
$$

$$
T^\gamma P^{1-\gamma} = \text{constant}
$$

These describe how pressure, volume, and temperature change when no heat transfer occurs.

### Example: Adiabatic Expansion of Air

1 litre of air at 20C and 100kPa expands adiabatically to a volume of 2 litres. What is its final temperature and pressure?

**Given:**

* Initial volume, $V_1 = 1\,\text{L} = 0.001\,\text{m}^3$  
* Final volume, $V_2 = 2\,\text{L} = 0.002\,\text{m}^3$  
* Initial pressure, $P_1 = 100\,\text{kPa} = 1.0\times10^5\,\text{Pa}$  
* Initial temperature, $T_1 = 20^\circ\text{C} = 293\,\text{K}$  
* Air: $\gamma = 1.4$

#### Final Pressure

$$
P_1 V_1^\gamma = P_2 V_2^\gamma
$$

$$
P_2 = P_1 \left(\frac{V_1}{V_2}\right)^\gamma
$$

$$
P_2 = (1.0\times10^5)\left(\frac{0.001}{0.002}\right)^{1.4}
= 3.78\times10^4\,\text{Pa}
$$

#### Final Temperature

$$
T_1 V_1^{\gamma-1} = T_2 V_2^{\gamma-1}
$$

$$
T_2 = T_1 \left(\frac{V_1}{V_2}\right)^{\gamma-1}
$$

$$
T_2 = 293\left(\frac{0.001}{0.002}\right)^{0.4}
= 222\,\text{K}
$$


## Processes & Cycles



[^1]: https://blackboard.soton.ac.uk/ultra/courses/_232725_1/outline/edit/document/_7643483_1?courseId=_232725_1&view=content&state=view
[^2]: https://blackboard.soton.ac.uk/ultra/courses/_232725_1/outline/edit/document/_7696885_1?courseId=_232725_1&view=content&state=view