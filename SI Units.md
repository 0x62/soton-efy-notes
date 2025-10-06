
SI (Système International) units form the standard measurement system used in engineering. The base units relevant to electrical engineering include the meter (m), kilogram (kg), second (s), ampere (A), and kelvin (K).

## Common SI Units

| Property                                      | SI Unit | Unit Symbol | Property Symbol |
| --------------------------------------------- | ------- | ----------- | --------------- |
| Time                                          | second  | $s$         | $t$             |
| [[Circuit Theory (1)#Current\|Current]]       | ampere  | $A$         | $I$             |
| [[Circuit Theory (1)#Voltage\|Voltage]]       | volt    | $V$         | $V$             |
| [[Circuit Theory (1)#Resistance\|Resistance]] | ohm     | $\Omega$    | $R$             |
| [[Circuit Theory (1)#Energy\|Energy]]         | joule   | $J$         | $E$             |
| [[Circuit Theory (1)#Power\|Power]]           | watt    | $W$         | $P$             |
| [[Circuit Theory (1)#Charge\|Charge]]         | coulomb | $C$         | $Q$             |
| Capacitance                                   | farad   | $F$         | $C$             |
| Frequency                                     | hertz   | $Hz$        | $f$             |
| Inductance                                    | henry   | $H$         | $L$             |

## SI Prefixes

SI prefixes allow us to express very large or small quantities concisely by scaling the base unit by powers of ten.

| Prefix | Symbol | Power of 10 | Decimal           |
| ------ | ------ | ----------- | ----------------- |
| tera   | T      | $10^{12}$   | 1,000,000,000,000 |
| giga   | G      | $10^9$      | 1,000,000,000     |
| mega   | M      | $10^6$      | 1,000,000         |
| kilo   | k      | $10^3$      | 1,000             |
| (base) | -      | $10^0$      | 1                 |
| milli  | m      | $10^{-3}$   | 0.001             |
| micro  | μ      | $10^{-6}$   | 0.000001          |
| nano   | n      | $10^{-9}$   | 0.000000001       |
| pico   | p      | $10^{-12}$  | 0.000000000001    |

### Common Conversions

* $1\ mA = 10^{-3}\ A = 0.001\ A$
* $1\ μA = 10^{-6}\ A = 0.000001\ A$
* $1\ kV = 10^3\ V = 1000\ V$
* $1\ MΩ = 10^6\ Ω = 1,000,000\ Ω$
* $1\ kΩ = 10^3\ Ω = 1000\ Ω$
* $1\ mW = 10^{-3}\ W = 0.001\ W$
* $1\ nF = 10^{-9}\ F = 0.000000001\ F$
* $1\ μF = 10^{-6}\ F = 0.000001\ F$

### Converting Between Prefixes

To convert between prefixes, determine the power of 10 difference and multiply accordingly.

### Assumptions on Ranges [^1]

In electrical engineering, using the correct SI units and knowing the typical ranges is essential. It helps check if your answer makes sense.

| Property                                      | Unit   | Typical Values                            | Description                                                              |
| --------------------------------------------- | ------ | ----------------------------------------- | ------------------------------------------------------------------------ |
| [[Circuit Theory (1)#Current\|Current]]       | Amps   | $A,\ mA,\ \micro A$                       | Power grid currents in $kA$ down to sensors in $\micro A$                |
| [[Circuit Theory (1)#Voltage\|Voltage]]       | Volts  | $kV,\ V,\ mV$                             | High-voltage transmission vs digital signals                             |
| [[Circuit Theory (1)#Resistance\|Resistance]] | Ohms   | $M \Omega,\ k \Omega,\ \Omega,\ m \Omega$ | Insulators in $M \Omega$, resistors in $k \Omega$, busbars in $m \Omega$ |
| Capacitance                                   | Farads | $\micro F,\ nF,\ pF$                      | Power supply capacitors in $\micro F$, digital in $nF,\ pF$              |
| Inductance                                    | Henrys | $mH,\ \micro H$                           | Transformers in $mH$, high-frequency chokes in $\micro H$                |
| [[Circuit Theory (1)#Power\|Power]]           | Watts  | $MW, kW, W, mW$                           | Power stations in $MW$, household devices in $kW$, circuits in $mW$      |

> [!TIP] If you get 100 MV across a resistor in a lab, something is wrong!

[^1]: Content from UoS slides, © Josh Robertson
