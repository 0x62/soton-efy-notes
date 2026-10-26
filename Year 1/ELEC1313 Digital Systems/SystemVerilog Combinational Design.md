---
permalink: y1/elec1313/systemverilog-combinational-design
---
#### SystemVerilog Combinational Design

- [[#Modules and ports]]
- [[#Combinational procedural descriptions]]
- [[#Multiplexers and complete assignment]]
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

## Multiplexers and complete assignment

A two-input multiplexer selects a signal rather than calculating a numerical result. With $s=0$ it passes $a$; with $s=1$ it passes $b$:
$$y=\overline{s}a+sb.$$
The selection rule can be described directly without spelling out its individual gates:[^mux]

```systemverilog
module mux2 (
    output logic y,
    input  logic a, b, s
);
    always_comb
        if (s)
            y = b;
        else
            y = a;
endmodule
```

The `if` belongs inside the procedural `always_comb` block. Parentheses enclose the condition; `=` assigns a value, whereas `==` compares values. No `endif` keyword is used. A multi-statement branch would use `begin` and `end`.

### Why omitting `else` changes the hardware

Consider the incomplete description:

```systemverilog
always_comb
    if (s)
        y = b;       // no assignment when s is 0
```

When $s=0$, nothing assigns a new value to `y`; it retains its previous value. This is **storage**, not the required combinational selection of `a`. A tool may diagnose inferred latch behaviour or reject the incomplete `always_comb` description. The keyword is not a substitute for assigning every output on every path.

For example:

| Step | $a$ | $b$ | $s$ | Correct mux $y$ | Incomplete description $y$ |
| --- | --- | --- | --- | --- | --- |
| 1 | 0 | 1 | 1 | 1 | 1 |
| 2 | 0 | 1 | 0 | 0 | 1 (retained) |
| 3 | 1 | 0 | 0 | 1 | 1 (retained) |
| 4 | 0 | 0 | 0 | 0 | 1 (retained) |

Step 3 happens to agree, but that does not make the model correct: its output depends on the earlier selected value of `b`. Testing only one input combination can hide the unwanted memory. An uninitialised retained value may also remain unknown.

An equivalent complete style gives a default assignment and overrides it:

```systemverilog
always_comb begin
    y = a;
    if (s)
        y = b;
end
```

Here the default executes on every evaluation, so the unselected branch never needs to remember an old output. Both versions describe the same selection for binary input values. This is a functional hardware description, not a processor repeatedly executing an `if` instruction.

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

[^mux]: Mark Zwolinski, [SystemVerilog for Combinational Design (2)](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36359), two-input multiplexer model, p. 3; [MZ L2, 20 October 2026](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=f21a7659-c43d-4e9c-83fe-b4e90083def8), 37:06–42:26 (selection and syntax), 42:33–45:28 (omitted `else` and unintended storage).
