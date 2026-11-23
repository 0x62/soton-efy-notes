---
permalink: y1/elec1313/signed-numbers-and-binary-arithmetic
---
#### Signed Numbers and Binary Arithmetic

- [[#One bit pattern, multiple meanings]]
- [[#Two's complement]]
- [[#Carry and signed overflow]]
- [[#Half adders and full adders]]
- [[#An adder that can also subtract]]
- [[#ALU and status flags]]

For unsigned positional weights and base conversion, see [[Computer Arithmetic#Binary]].[^signed][^hardware]

## One bit pattern, multiple meanings

An $n$-bit pattern only has a numeric value after choosing a representation and a width. For example, 8-bit 11110011 means 243 unsigned, $-115$ in sign-magnitude and $-13$ in two's complement.

| 8-bit format | How to encode $-13$ | Result | Range |
| --- | --- | --- | --- |
| Sign-magnitude (slide label: sign-mantissa) | Set sign to 1, then store 13 in seven bits | 10001101 | $-127$ to $127$; two zeros |
| Offset binary (excess-128) | Store $-13+128=115$ unsigned | 01110011 | $-128$ to $127$; one zero |
| One's complement | Invert each bit of the eight-bit positive 13 | 11110010 | $-127$ to $127$; two zeros |
| Two's complement | Invert each bit of positive 13, then add 1 | 11110011 | $-128$ to $127$; one zero |

In offset binary the MSB is not a sign-magnitude sign bit: the stored unsigned value has a constant bias subtracted at decode. In one's complement, all ones encode negative zero. Two's complement has one zero and one extra negative value: 10000000 means $-128$ in eight bits.[^signed]

## Two's complement

For bits $b_{n-1}\dots b_0$, decode with a **negative** weight on the most significant bit:

$$
x=-2^{n-1}b_{n-1}+\sum_{k=0}^{n-2}2^k b_k.
$$

For 11110011, the sum is $-128+64+32+16+2+1=-13$. Alternatively, read the pattern as unsigned and subtract $2^n$ when its MSB is 1. Negation is inversion then addition of 1 at the same width; the most negative value cannot be negated representably in that width. To widen a signed value, repeat the sign bit; padding a negative number with zeros changes the value.

## Carry and signed overflow

The same $n$-bit addition circuitry is useful for both unsigned and two's-complement numbers. It delivers the low $n$ bits of the result. What counts as loss depends on the interpretation:

| Four-bit computation | Low result | Carry out | Interpretation |
| --- | --- | --- | --- |
| 0111 + 0011 | 1010 | 0 | Unsigned $7+3=10$ fits; signed $7+3$ does not |
| 1111 + 0001 | 0000 | 1 | Unsigned $15+1$ does not fit; signed $-1+1=0$ fits |
| 1000 + 1001 | 0001 | 1 | Signed $-8-7=-15$ does not fit |

For signed addition, overflow occurs when inputs have the **same sign** but the result sign differs. In hardware it can also be detected as carry into the sign bit XOR carry out of it. Carry out alone does not decide signed overflow.[^hardware]

## Half adders and full adders

A half adder combines $A,B$: its sum is $A\oplus B$ and carry is $AB$. It cannot receive a carry from a less significant column. A full adder includes that third input:

$$
S=A\oplus B\oplus C_\mathrm{in},\qquad
C_\mathrm{out}=AB+C_\mathrm{in}(A\oplus B).
$$

The plus sign in the carry expression denotes Boolean OR. A ripple-carry adder connects each stage's carry out to the next stage's carry in; this reuse makes the circuit straightforward but carry propagation can set the delay through the whole word. For a quick trace, $0110+0101$ generates a carry at bit 2, so the high bit becomes 1 and the result is 1011.[^hardware]

## An adder that can also subtract

Use a control $\mathrm{SUB}$ to XOR each bit of $B$ and drive the least significant carry-in. When $\mathrm{SUB}=0$, the input is $B$ and the operation is $A+B$. When $\mathrm{SUB}=1$, the input is $\overline B$ and the carry-in supplies the $+1$, so the operation is $A+\overline B+1$.

Example at four bits: $5-3$ is 0101 + 1100 + 1, giving low result 0010. The final carry is 1; for this unsigned subtraction convention it indicates **no borrow**. For two's-complement subtraction, an overflow can occur when the operands have **different signs** and the result sign differs from $A$.[^hardware]

## ALU and status flags

An arithmetic logic unit (ALU) selects an operation on its inputs, such as add, subtract or bitwise logic. A status output can describe the result without changing it: **Z** usually means all result bits zero, **N** is the result MSB, **C** is a carry or borrow convention, and **V** is signed overflow. Which instructions update which flags, and what carry means after subtraction, depend on the architecture. Do not treat a flag as another result bit unless the operation explicitly requires it.[^hardware]

[^signed]: Geoff Merrett, 20 November 2026, [L7 Signed Numbers slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36347) and [whiteboard notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=46352), sign-mantissa, negative excess, one's complement, two's complement and comparison.
[^hardware]: Geoff Merrett, 20 November 2026, [L8 Binary Arithmetic in Hardware slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36348) and [whiteboard notes, Part 1](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=46353), adders, subtracters, carry/overflow and ALU flags. Arithmetic examples here are independent of the whiteboard examples.
