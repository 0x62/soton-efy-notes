---
permalink: y1/elec1312/functions-control-flow
---
#### Functions & Control Flow

- [[#Function interfaces]]
- [[#Declarations and definitions]]
- [[#Scope and value parameters]]
- [[#Selection]]
- [[#Repetition]]
- [[#Combining functions and control flow]]

**[[#Function interfaces|Function]]** `return_type name(parameter_types)` describes an interface. A call supplies arguments; a return statement supplies the result.

**[[#Selection|Truth]]** Zero is false; any nonzero scalar value is true. Compare with `==`, not assignment `=`.

**[[#Repetition|Loops]]** `for (initialise; condition; update)` and `while (condition)` test before executing the body. Both can execute zero times.

## Function interfaces

A function groups a task under a name. This avoids repeated implementations, gives a large program smaller understandable parts, and permits tested behaviour to be reused. A clear interface specifies what inputs mean, what result is returned and any conditions the caller must satisfy.[^1]

```c
double metres_to_centimetres(double metres)
{
    return 100.0 * metres;
}
```

Here `double` before the name is the return type, `metres` is a parameter local to the function, and `return` ends the call with a value. A call such as `metres_to_centimetres(1.25)` evaluates to `125.0`.

A function can have several parameters but directly returns at most one value. That value may itself be a structure containing several members. A `void` return type means there is no returned value; `(void)` in the parameter list explicitly means there are no parameters.

A function should normally do one coherent task. Computing a result and printing it need not be coupled: returning the result lets a caller print it, store it or use it in another calculation.

## Declarations and definitions

A **declaration** introduces the interface; a **definition** supplies the body:

```c
double metres_to_centimetres(double metres); /* declaration */
```

Declare a function before calling it, either by putting its definition earlier in the file or by placing a prototype earlier and the definition later. Compatible declarations may be repeated. An ordinary externally linked function must have one definition across the program, not separate duplicate definitions in every source file.

Headers commonly contain prototypes; source files contain implementations. The compiler checks a call against the declaration. The linker must then find the corresponding implementation.

## Scope and value parameters

**Scope** is the region in which a name can be used. A local variable declared inside a block is visible from its declaration to the end of that block, subject to nested scopes. A variable inside one function is not automatically visible to another function.

Automatic local variables without an initialiser have indeterminate values. Initialise them before reading them. A parameter is initialised from its argument when the call occurs.

C passes arguments **by value**: the parameter receives a copy. Assigning a new value to that parameter does not replace the caller's variable. A pointer parameter is also a copied value, but can identify an object the function is allowed to modify. See [[Pointers, Strings & Files#Changing a caller's object]].

```c
int next_count(int count)
{
    count = count + 1;
    return count;
}
```

If a caller has `int n = 4;`, evaluating `next_count(n)` produces `5` but leaves `n` equal to `4`. Writing `n = next_count(n);` explicitly stores the result back into `n`.

## Selection

`if` selects a branch according to a condition:

```c
if (temperature < 5.0) {
    printf("Cold\n");
} else if (temperature < 20.0) {
    printf("Mild\n");
} else {
    printf("Warm\n");
}
```

Both branches still need valid C syntax and declarations even if one branch is never executed. Execution and compilation are different stages.

Only the first matching branch executes. The second condition is evaluated only if the first is false; thus the middle case already implies `temperature >= 5.0` for ordinary finite inputs.

Braces make the controlled statements explicit. Without braces, only the immediately following statement belongs to the branch, regardless of indentation. An `else` associates with the nearest unmatched `if`.

## Repetition

A `for` loop separates the starting state, continuation test and update:

```c
for (int step = 0; step < 4; step++) {
    printf("Step %d\n", step);
}
```

Execution order is: initialise once → test → body → update → test again. The printed values are `0`, `1`, `2`, `3`; the value `4` fails the test. The loop variable declared here is scoped to the loop.

A `while` loop expresses repetition until a condition changes:

```c
int remaining = 3;
while (remaining > 0) {
    printf("%d remaining\n", remaining);
    remaining--;
}
```

Make sure the body or an external event can change the condition. Otherwise a loop can run indefinitely. A condition tested before the body can be false immediately, so do not depend on the body having executed at least once.

For an array of length `n`, the usual index range is `0 <= i && i < n`. Using `i <= n` takes one extra iteration and accesses an invalid element if used for indexing.

A `for` loop is a natural choice when the number of repetitions is known, such as processing every element in an array. A `while` loop is natural when continuation depends on changing data, such as repeatedly sampling a sensor until a threshold is reached. They often express equivalent computations; choose the form that makes the stopping condition easiest to understand. A sensor-reading loop must acquire a fresh reading, not repeatedly test one old value.[^2]

## Combining functions and control flow

```c
#include <stdio.h>

int next_count(int count);

int main(void)
{
    int count = 0;
    for (int i = 0; i < 3; i++) {
        count = next_count(count);
        if (count == 3) {
            printf("Target reached: %d\n", count);
        }
    }
    return 0;
}

int next_count(int count)
{
    return count + 1;
}
```

This prints `Target reached: 3` once. Each iteration calls a small function, stores its returned value and tests the updated state. The prototype allows `main` to call a definition placed later in the file.

[^1]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=44563 — ELEC1312, Functions and Control Flow, Xu Fang, pp. 4–17.

[^2]: https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=fdbf75bc-ce7e-457f-9fe3-b4d300f8d836 — Functions and Control Flow, 31:14–35:03; https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=6200ab0d-f7fb-40cf-b9b6-b4da00f8f5d9 — Operators and Arrays, 8:32–11:50.
