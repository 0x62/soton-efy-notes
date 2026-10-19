---
permalink: y1/elec1313/systemverilog-combinational-design
---
#### SystemVerilog Combinational Design

- [[#Modules and ports]]
- [[#Combinational procedural descriptions]]
- [[#Structural descriptions]]
- [[#Full-adder dataflow]]
- [[#Concurrency and checking]]

**[[#Full-adder dataflow|Full-adder equations]]**
$$S=A\oplus B\oplus C_{in},\qquad C_{out}=AB+AC_{in}+BC_{in}$$
**[[#Concurrency and checking|Arithmetic check]]**
$$2C_{out}+S=A+B+C_{in}$$

## Modules and ports

A `module` defines a hardware design unit with an interface and internal implementation. Ports specify the directions and types of its connections. A two-input NAND gate can be written as:[^1]

```systemverilog
module nand2 (
    output logic y,
    input  logic a, b
);
    always_comb
        y = ~(a & b);
endmodule
```

Use one module per `.sv` file with a matching name, such as `nand2.sv`. SystemVerilog is case-sensitive: `a` and `A` name different signals. Use clear identifiers and avoid spaces in file or folder names. `//` begins a line comment and `/* ... */` encloses a block comment.

The `logic` type is a four-state type representing 0, 1, unknown (`x`) and high impedance (`z`); declaring a signal `logic` does not by itself make it a physical register. Its driving behaviour determines the hardware. A resolved net such as `wire` is needed where multiple drivers must be resolved rather than treated as a single procedural driver.

## Combinational procedural descriptions

An `always_comb` block describes combinational behaviour and responds to changes in the values it reads. For multiple statements, enclose the body in `begin` and `end`.

The bitwise operators correspond directly to gates:
- `~` complements each bit.
- `&` is bitwise AND.
- `|` is bitwise OR.
- `^` is bitwise XOR.

These are not the same as the logical operators `!`, `&&` and `||` when operands have multiple bits. Parentheses make the intended gate grouping explicit.

Use blocking assignment `=` for these combinational calculations and ensure every output receives a value for every possible input path. Otherwise, retaining an old value can imply storage rather than the intended combinational circuit. Do not drive the same output from several procedural blocks.[^1]

## Structural descriptions

A structural model instantiates interconnected components. Built-in gate primitives list their output first, followed by inputs. Internal signals connect one instance to another:

```systemverilog
module full_adder_structural (
    output logic sum, co,
    input  logic a, b, ci
);
    logic ab_xor, ab, ac, bc;

    xor g0 (ab_xor, a, b);
    xor g1 (sum, ab_xor, ci);
    and g2 (ab, a, b);
    and g3 (ac, a, ci);
    and g4 (bc, b, ci);
    or  g5 (co, ab, ac, bc);
endmodule
```

The instance names identify gates; the signal connections specify the circuit. Moving `g5` before `g2` in the file does not make the OR gate physically run before its inputs are produced. The gate instances exist concurrently.[^1]

## Full-adder dataflow

The same Boolean functions can be expressed directly:

```systemverilog
module full_adder_dataflow (
    output logic sum, co,
    input  logic a, b, ci
);
    always_comb begin
        sum = a ^ b ^ ci;
        co  = (a & b) | (a & ci) | (b & ci);
    end
endmodule
```

`sum` is high when an odd number of inputs are high. `co` is high when at least two inputs are high. The two expressions use the inputs directly, so neither depends on the updated value of the other output.

A structural description emphasises connectivity; a dataflow/procedural description emphasises the required Boolean relationships. Both can represent the same hardware function, although the synthesis tool determines the eventual implementation.[^1]

## Concurrency and checking

Statements within a procedural block follow procedural semantics, but separate blocks and module instances describe concurrently operating hardware. A sequential-looking description is not automatically a processor executing a program.

For each of the eight possible one-bit input combinations, verify
$$2C_{out}+S=A+B+C_{in}.$$
For example, $A=B=C_{in}=1$ gives numerical total 3, represented by carry 1 and sum 1. If exactly two inputs are 1, the total is 2, so carry is 1 and sum is 0.

Useful checks include matching port order, declaring all internal signals, using the intended bit widths, and confirming that every combinational output has exactly one driver and a defined assignment. Functional truth-table checking complements, rather than replaces, syntax checking and simulation.

[^1]: [Mark Zwolinski, SystemVerilog for Combinational Design (1)](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36355), pp. 24–36.
