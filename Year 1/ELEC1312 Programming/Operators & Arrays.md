---
permalink: y1/elec1312/operators-arrays
---
#### Operators & Arrays

- [[#Arithmetic and conversions]]
- [[#Comparison and assignment]]
- [[#Logical operators]]
- [[#Precedence]]
- [[#Array storage and initialisation]]
- [[#Traversing an array]]
- [[#Arrays as function arguments]]

**[[#Arithmetic and conversions|Division]]** Integer operands give integer division. Convert an operand before dividing to obtain a floating-point result: `(double)a / b`.

**[[#Logical operators|Conditions]]** `&&` means AND, `||` means OR and `!` means NOT. `==` compares; `=` assigns.

**[[#Array storage and initialisation|Array]]** A length-$n$ array has indices $0$ through $n-1$.
$$
\text{element byte offset}=\text{index}\times\operatorname{sizeof}(\text{element type})
$$

**[[#Arrays as function arguments|Function boundary]]** Pass a pointer and a length; the pointer alone does not carry the array size.

## Arithmetic and conversions

The arithmetic operators include `+`, `-`, `*`, `/` and `%`. The types of the operands affect the operation, not just the type of the variable receiving the result.[^1]

For `int a = 11, b = 4;`:

| Expression | Result | Reason |
| --- | --- | --- |
| `a + b` | `15` | Addition |
| `a * b` | `44` | Multiplication |
| `a / b` | `2` | Integer quotient, truncated towards zero |
| `a % b` | `3` | Integer remainder |
| `(double)a / b` | `2.75` | Floating-point division |
| `(double)(a / b)` | `2.0` | Conversion happens after truncation |

`double result = a / b;` still computes integer division first. The discarded fraction cannot be restored by assigning the quotient to a `double`.

`%` applies to integer operands. For defined integer division, `a == (a / b) * b + a % b`. With negative values, C's remainder is not necessarily the nonnegative mathematical modulo. Division or remainder by integer zero is invalid.

`x += 3` adds three to `x`; `x++` increments it by one. Prefer simple, separate updates over expressions with several changes to the same variable, whose evaluation rules can be easy to misuse.

## Comparison and assignment

Comparisons `<`, `<=`, `>`, `>=`, `==` and `!=` produce integer `1` for true and `0` for false.

Assignment changes an object and also produces the assigned value. Consequently, `if (a = b)` assigns `b` to `a` and then tests that value; it does not test equality. A nonzero assigned value selects the true branch. Compiler warnings help catch accidental assignments in conditions, but depend on the enabled warning options: successful compilation without a warning does not establish that the condition expresses the intended comparison.[^2]

A range check requires two comparisons: `x >= 0 && x <= 10`. The mathematical-looking `0 <= x <= 10` does not express the intended range in C: the first comparison produces `0` or `1`, which is then compared with `10`.

## Logical operators

- `a && b`: true when both operands are nonzero.
- `a || b`: true when either operand is nonzero.
- `!a`: true when `a` is zero.

`&&` and `||` **short-circuit**. The second operand is evaluated only if needed to determine the result. For example, `denominator != 0 && numerator / denominator > 2` avoids integer division by zero when the denominator is zero, provided the other arithmetic is valid.

Logical operators are not the same as bitwise `&` and `|`. Use the logical versions to combine truth conditions.

## Precedence

Precedence controls grouping: `a + b * c` means `a + (b * c)`, while `(a + b) * c` changes the calculation. Parentheses clarify intent, especially when arithmetic and comparisons are combined.

Precedence does not generally prescribe the order in which operands are evaluated. Do not rely on one side of an ordinary arithmetic expression being evaluated before the other.

## Array storage and initialisation

An array groups a fixed sequence of elements of one type. Elements occupy consecutive positions in memory, so an index and element type determine an element's location.

```c
int counts[4] = {3, 1, 4, 2};
double readings[8] = {0};
```

The first array has four integers. The second has eight doubles, all initialised to zero: omitted elements in an initialiser are zero-initialised. By contrast, an automatic local array declared without an initialiser has indeterminate contents.

`counts[0]` is the first element and `counts[3]` is the last. `counts[4]` is outside the array. C does not automatically prevent an out-of-bounds access; the result is undefined behaviour, not a reliable error message.

At the array's declaration, `sizeof counts / sizeof counts[0]` obtains its element count. This works because `sizeof counts` is the complete array size there; it does not work on a pointer parameter as a substitute for passing the length.

Character arrays can store strings, but a C string needs an extra `\0` terminator. A buffer with 20 characters can hold at most 19 non-null characters plus that terminator. See [[Pointers, Strings & Files#Strings and capacity]].

## Traversing an array

```c
#include <stdio.h>

int main(void)
{
    double readings[] = {2.0, 4.0, 9.0};
    size_t length = sizeof readings / sizeof readings[0];
    double sum = 0.0;
    for (size_t i = 0; i < length; i++) {
        sum += readings[i];
    }
    printf("Mean: %.1f\n", sum / (double)length);
    return 0;
}
```

The output is `Mean: 5.0`. Initialising the accumulator to zero is essential. A general mean function must also handle a zero-length input rather than divide by zero.

## Arrays as function arguments

In a function parameter list, `double values[]` is adjusted to `double *values`. The called function receives a copy of a pointer to the original elements, not an independent copy of the array.[^1]

```c
void add_offset(double values[], size_t length, double offset)
{
    for (size_t i = 0; i < length; i++) {
        values[i] += offset;
    }
}
```

The caller must supply a valid pointer and a length that fits the actual array. Element assignments modify the caller's array. Reassigning the local parameter itself would only change the function's pointer copy.

For a function that only reads the elements, a parameter such as `const double values[]` prevents modifications through that parameter. It documents the intended interface as well as catching accidental writes.

[^1]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=44809 — ELEC1312, Operators and Arrays, Xu Fang, pp. 4–19.

[^2]: https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=6200ab0d-f7fb-40cf-b9b6-b4da00f8f5d9 — Operators and Arrays, 12:15–16:01 and 29:05–33:24.
