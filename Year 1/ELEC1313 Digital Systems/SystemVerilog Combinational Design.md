---
permalink: y1/elec1313/systemverilog-combinational-design
---
#### SystemVerilog Combinational Design

- [[#Modules and ports]]
- [[#Combinational procedural descriptions]]
- [[#Multiplexers and complete assignment]]
- [[#Four-input multiplexers]]
- [[#Vectors, literals and four-state values]]
- [[#One-hot decoders]]
- [[#Testbenches and simulation time]]
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

## Four-input multiplexers

A four-input mux has **four data inputs**, two select bits and one output. The select bits do not count as data inputs. For select word $s_1s_0=00,01,10,11$, choose $a,b,c,d$ respectively.[^sv3]

```systemverilog
module mux4 (
    input  logic a, b, c, d,
    input  logic [1:0] s,
    output logic y
);
    always_comb
        case (s)
            2'b00: y = a;
            2'b01: y = b;
            2'b10: y = c;
            2'b11: y = d;
            default: y = 1'bx;
        endcase
endmodule
```

A SystemVerilog `case` selects a matching branch and ends with `endcase`. It does **not** fall through into later branches and does not need C-style `break` statements. Nesting `if` statements is another way to describe the four choices, but a `case` becomes easier to inspect as the number of alternatives increases.

The `default` above makes unknown select values visible in simulation. With nested `if` statements, an `x` condition is not treated as true, so execution can take an `else` path and produce a seemingly valid output despite an unknown selector. This is **X optimism**. The binary-input behaviour may be correct while the unknown-input simulation behaviour hides a problem.

For $a=0,b=1,c=1,d=0$, selectors 00, 01, 10 and 11 produce 0, 1, 1 and 0. That is the XOR truth table of the select inputs. A mux can therefore implement a Boolean function by fixing its data inputs to that function's truth-table values; see [[Combinational Logic#Implementing a function with a mux or decoder]].

## Vectors, literals and four-state values

```systemverilog
logic [3:0] y;
logic [1:0] a;
```

`y` is a four-bit **packed vector**. Its bits are `y[3]`, `y[2]`, `y[1]` and `y[0]`. In this descending convention, bit 3 is the most significant bit and bit 0 is the least significant. The width is the difference between the bounds plus one: $3-0+1=4$.[^sv3]

An ascending declaration such as `[0:3]` is legal, but its leftmost bit is then index 0. It does not preserve the usual association between index $i$ and weight $2^i$. Keep direction consistent rather than reversing ranges accidentally.

A sized literal has the form **width, apostrophe, base, digits**:

| Expression | Meaning when assigned to four-bit `y` |
| --- | --- |
| `4'b0101` | Four binary bits, value 5 |
| `4'd8` | Four-bit decimal value 8, pattern `1000` |
| `4'hA` | Four-bit hexadecimal value A, pattern `1010` |
| `'0` | Fill the destination with zeros: `0000` |
| `'1` | Fill the destination with ones: `1111` |
| `1` | Numerical one: `0001` |
| `'x` | Fill the destination with unknowns: `xxxx` |

The `b` means **binary**, not a declaration that a literal must contain one bit. The unbased unsized literals `'0`, `'1`, `'x` and `'z` fill the receiving width. In particular, `'1` and the integer `1` are different.

SystemVerilog allows many implicit width/type conversions. Wider values may be truncated and narrower values extended, with signedness affecting the result. Explicit widths make the intended bit pattern easier to verify. For example, assigning `4'b1000` to a two-bit signal loses its two most significant bits and leaves `00`; a successful compilation does not establish a correct width.

The four states of `logic` mean:

- `0`, `1`: known logic levels.
- `x`: an unknown value, for example from uninitialised state or conflicting resolved drivers.
- `z`: high impedance, representing a driver that is not actively driving a net.

`x` is not a voltage level or a guaranteed physical output; `z` is not simply another name for `x`. Floating/contending hardware may be electrically unsafe even if a simulator conveniently represents it with a symbol. Two four-state input bits have $4^2=16$ simulation combinations, although only four are fully known binary patterns.

## One-hot decoders

An active-high 2-to-4 decoder turns a two-bit number into one selected high output:

| Input `a` | Output `y[3:0]` | Selected output |
| --- | --- | --- |
| `00` | `0001` | `y[0]` |
| `01` | `0010` | `y[1]` |
| `10` | `0100` | `y[2]` |
| `11` | `1000` | `y[3]` |

This is a **one-hot** pattern: exactly one bit is 1. The output's numerical value is $2^a$, not $a$.[^sv3]

```systemverilog
module decoder2to4 (
    input  logic [1:0] a,
    output logic [3:0] y
);
    always_comb
        case (a)
            2'b00: y = 4'b0001;
            2'b01: y = 4'b0010;
            2'b10: y = 4'b0100;
            2'b11: y = 4'b1000;
            default: y = 'x;
        endcase
endmodule
```

The ordinary `case` comparisons distinguish 0, 1, x and z. An input such as `2'b0x` matches none of the four known patterns, so `default` assigns `xxxx`. This intentionally exposes an unknown input during simulation rather than hiding it behind a selected valid output.

An assigned `x` is not a request to build hardware that generates an “unknown voltage”. Synthesis may treat it as a don't-care optimisation opportunity. Do not rely on it as a safe physical response to an invalid input. If an invalid **binary** condition must produce a defined safe output, explicitly assign that output.

To extend the decoder to 3-to-8:

1. Change the input to `[2:0]` and output to `[7:0]`.
2. Include eight binary input branches, 000 through 111.
3. For input $k$, set only output bit $k$.
4. Check that input `3'b101` (decimal 5) gives `8'b0010_0000`, not `0000_0101`.

## Testbenches and simulation time

A **testbench** creates the design instance, drives its inputs and checks its outputs. Simulating a module with undriven inputs does not test its function. The testbench is normally the simulation's top-level module and has no external ports; the hardware design is the top level for synthesis.[^testbench]

```systemverilog
module test_decoder2to4;
    timeunit 1ns;
    timeprecision 1ps;

    logic [1:0] a;
    logic [3:0] y;

    decoder2to4 dut (.a(a), .y(y));

    initial begin
        #10ns a = 2'b00;
        #10ns a = 2'b01;
        #10ns a = 2'b10;
        #10ns a = 2'b11;
        #10ns $finish;
    end
endmodule
```

Read it in order:

1. The `logic` declarations create signals within the testbench. A four-state variable without an initial value begins as `x`.
2. `decoder2to4` is the **module type**; `dut` is the name of this particular **instance** (device under test).
3. `.a(a)` connects the design port named `a` to the testbench signal named `a`; `.y(y)` similarly connects the output.
4. `initial` starts once at simulation time zero. It does not repeat like `always_comb`.
5. `#10ns` delays that process by 10 ns of **simulated time** before the following assignment. It is not a software sleep or a synthesised 10 ns hardware delay.
6. Changing `a` causes the decoder's combinational process to recalculate `y`. The testbench drives `a`, not `y`.

| Simulation time | Input after assignment | Expected output after combinational settling |
| --- | --- | --- |
| Before 10 ns | `xx` | `xxxx` |
| 10 ns | `00` | `0001` |
| 20 ns | `01` | `0010` |
| 30 ns | `10` | `0100` |
| 40 ns | `11` | `1000` |

Even a zero-delay functional model schedules events; checking an output in the same procedural instant as changing its input can read the old result. Allow combinational evaluation before checking.

### Port association

Named association makes the connections explicit:

```systemverilog
decoder2to4 dut (.y(result), .a(selection));
```

The port name is on the **left**, the connected signal is inside parentheses. Named connections may be written in any order. Positional connections must follow the module's declaration order; swapping them can miswire the model. `decoder2to4 dut (.*);` automatically connects matching names where the signals are available, but relies on those names and types being appropriate.

### Checking, not merely displaying

A waveform is useful, but a self-checking testbench can flag mismatches directly. For a separate exhaustive binary-input test, replace the earlier `initial` block with:

```systemverilog
initial begin
    for (int k = 0; k < 4; k++) begin
        a = k[1:0];
        #1ns;
        if (y !== (4'b0001 << k))
            $fatal(1, "Decoder mismatch for input %0d", k);
    end
    a = 2'b0x;
    #1ns;
    if (y !== 4'bxxxx)
        $fatal(1, "Unknown input was hidden");
    $finish;
end
```

`!==` is **case inequality**: it compares x and z explicitly and produces a known true/false result. Ordinary `!=` can itself produce `x`, which is unhelpful when the purpose of the check is to catch unknown output values.

For a 2-to-4 decoder, four binary input patterns exhaust the ordinary truth table. For a four-input one-bit mux, there are $2^4\times2^2=64$ binary combinations of data and selectors, not merely four: changing only the selector while all data inputs are equal cannot expose a swapped-input fault.

Compile the design and testbench, select the testbench as simulation top, run the simulation and inspect failures. Keep delay-based stimulus and checking code out of the synthesised hardware design. Simulation verifies the tested model/inputs; it does not by itself establish post-routing timing or electrical correctness.

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

[^sv3]: Mark Zwolinski, [SystemVerilog for Combinational Design (2)](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36359), multiplexers, vectors, literals and decoder sections; [MZ L3, 26 October 2026](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=fd51adde-8f36-4353-9c78-b4ef0117e47f), 7:17–34:23. Explicitly sized literals make the equivalent binary examples easier to check.
[^testbench]: [SystemVerilog for Combinational Design (2)](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36359), testbench and instantiation sections; [26 October recording](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=fd51adde-8f36-4353-9c78-b4ef0117e47f), 34:30–46:33. The time declarations, finish statement and self-checking loop are supplementary elaborations of the stimulus example.
