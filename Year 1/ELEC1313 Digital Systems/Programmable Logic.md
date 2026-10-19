---
permalink: y1/elec1313/programmable-logic
---
#### Programmable Logic

- [[#From truth tables to programmable hardware]]
- [[#PALs and CPLDs]]
- [[#FPGA architecture]]
- [[#Hardware description languages]]
- [[#Design flow]]
- [[#Resource-aware design]]

**[[#From truth tables to programmable hardware|Truth-table storage]]**
$$n\text{ inputs},\ m\text{ outputs}\ \Rightarrow\ 2^n\text{ words of }m\text{ bits}$$
**[[#FPGA architecture|LUT capacity]]**
$$k\text{-input LUT}\ \Rightarrow\ 2^k\text{ stored output bits for one Boolean function}$$

## From truth tables to programmable hardware

![[Electronics (1)#Sum of Products]]

A Boolean function can be implemented using individual gates, but the same truth table can also be stored in a memory. The input combination acts as an address, and the selected word supplies the output bits. For example, three binary inputs select one of eight entries; each entry stores the desired output for that combination.[^1]

A ROM implementation makes any finite truth table possible, but its capacity grows exponentially with the number of inputs. An extra input doubles the number of entries, even when the function has a compact logical expression. Unused input combinations and inflexible memory dimensions can waste resources.

Programmable logic provides configurable hardware structures rather than requiring a separate physical gate for every term written by hand. Programming such a device determines its logic and connections; it is not necessarily a processor executing a sequence of instructions.

## PALs and CPLDs

A **programmable array logic (PAL)** device uses a configurable logic matrix, with registered outputs available in suitable devices. It suits comparatively small combinational or sequential systems.

A **complex programmable logic device (CPLD)** combines multiple programmable logic macrocells and interconnections. A macrocell provides a small logic function, often with a register, rather than being a general-purpose processor core.[^1]

## FPGA architecture

An **FPGA**, or field-programmable gate array, combines many configurable logic blocks with programmable routing. A typical block contains a **look-up table (LUT)** and a register.

- The LUT implements a combinational function by storing its truth table.
- A register stores a result across clock events, allowing sequential behaviour.
- Routing connects block outputs to other blocks and device input/output pins.

A $k$-input LUT can implement any single-output Boolean function of those $k$ inputs, provided it has one stored bit for each of the $2^k$ input combinations. Larger functions are decomposed across multiple blocks. “Any function” therefore means within that LUT's input capacity, not an arbitrarily large circuit in one block.[^1]

The implementation tools must decide which logic goes into which blocks, where those blocks are placed, and how connections are routed. Two logically equivalent descriptions can produce different resource usage or timing.

## Hardware description languages

A **hardware description language (HDL)** describes a circuit. SystemVerilog can describe signals, combinational logic and clocked state, and can be used for both simulation and synthesis.

Hardware is inherently concurrent: independent gates and registers operate at the same time. The order of statements in a description must not be interpreted as if every statement were an instruction executed by one CPU. Dependencies, clocking and the kind of HDL construct determine behaviour.[^1]

**Simulation** evaluates a model's behaviour. **Synthesis** converts a supported subset of the description into implementable hardware. A construct being legal to simulate does not guarantee that it represents hardware which the target can implement.

File operations and unrestricted dynamic structures may be useful in verification but do not directly describe ordinary FPGA logic. Hardware widths and resource sizes must be determined for the implemented circuit; a bus is a set of physical signal paths, not a software container that can grow during execution.

## Design flow

1. **Specification:** define inputs, outputs, required behaviour and timing constraints.
2. **HDL entry:** express the design at register-transfer level, describing data transformations and state updates.
3. **RTL simulation:** check the intended functional behaviour using representative input sequences.
4. **Synthesis:** convert the HDL into a netlist of implementable logic and registers.
5. **Netlist simulation:** check the resulting structural implementation where appropriate.
6. **Placement and routing:** assign resources to physical locations and connect them.
7. **Timing verification/simulation:** check the effect of implementation delays and timing requirements.
8. **Device configuration and testing:** load the implementation and verify its behaviour on the hardware.[^1]

These stages answer different questions. Correct RTL behaviour does not by itself show that a routed circuit meets its required clock speed. Conversely, a circuit can meet timing while implementing the wrong function.

## Resource-aware design

FPGA resources are finite: LUTs, registers and routing all matter. Clear HDL makes the intended hardware apparent and helps avoid unnecessary logic or unintended storage.

A register is not simply a variable name. Stored state needs an intentional update rule. Accidentally retaining an old value can infer storage when combinational logic was intended; unintentionally creating storage without the intended clocking makes behaviour and timing harder to reason about.

Useful checks are therefore:
- Does each signal represent combinational logic or stored state?
- Are state changes associated with the intended clock/control condition?
- Are bus widths appropriate for all possible values?
- Can the design fit the available logic and routing resources?
- Have both functional behaviour and implementation timing been checked?[^1]

[^1]: [Mark Zwolinski, Introduction and Programmable Logic](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36352), pp. 1–23.
