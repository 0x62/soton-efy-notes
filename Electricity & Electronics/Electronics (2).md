---
tags:
  - electronics
module: Electricity & Electronics
component: Electronics
permalink: electricity-electronics/electronics-2
---
## Universal Logic

In digital electronics, certain log gates are **universal gates** because they can be used to implement any boolean function. This means all other basic logic gates (e.g AND, OR, NOT) can be composed using these universal gates.

The two universal gates used in practice is:

- NAND
- NOR

### NOT function

> [!figure] ![[Universal gates - NOT function.png]]
> © University of Southampton [^1]

### AND function

> [!figure] ![[Universal gates - AND function.png]]
> © University of Southampton [^1]

### OR function

> [!figure] ![[Universal gates - OR function.png]]
> © University of Southampton [^1]

### NOR function

> [!figure] ![[Universal gates - NOR function.png]]
> © University of Southampton [^1]


## Digital Decoders

A 2-to-4 binary decoder consists of an array of four AND gates. The 2 binary inputs labelled A and B are decoded into one of 4 outputs. Each output represents one of the minterms of the 2 input variables.

> [!figure] ![[Digital decoder.png]]
> © University of Southampton [^1]

Some types of binary decoders have an enable pin which controls the outputs from the device to be ON or OFF. These types of binary decoders are commonly used as "memory address decoders" in microprocessor memory applications.


[^1]: https://sotonac.sharepoint.com/:p:/t/ElectricalElectronicEngineering2021-22/Eaap8YkJ5gFGoAWtJWAaLlUBmJCf6B7xcvRKM0y_ozVHow?e=8IsaB3
