---
permalink: y1/elec1312/structures-dynamic-memory
---
#### Structures & Dynamic Memory

- [[#Structures as records]]
- [[#Members and pointers]]
- [[#Enumerated states]]
- [[#Memory layout]]
- [[#Allocating an array]]
- [[#Ownership and lifetime]]
- [[#Two-dimensional storage]]

**[[#Members and pointers|Member access]]** `record.member` accesses a member directly; `pointer->member` is equivalent to `(*pointer).member`.

**[[#Allocating an array|Allocation]]** `malloc(n * sizeof *p)` requests space for $n$ objects of the pointed-to type. Check size arithmetic and the returned pointer; initialise the objects before reading them.

**[[#Ownership and lifetime|Release]]** Match each successful allocation with one `free` after its last use. Never access freed storage.

**[[#Two-dimensional storage|Flat matrix index]]**
$$
\text{index}=\text{row}\times\text{column count}+\text{column}
$$

## Structures as records

An array groups elements of one type. A structure groups named members that can have different types, allowing a program to represent a coherent object rather than maintain several unrelated variables.[^1]

```c
typedef struct {
    double value;
    int channel;
    int valid;
} Measurement;
```

`Measurement` becomes a type name. Its members describe a measurement's value, origin and validity. Declare objects and initialise them using that type:

```c
Measurement first = {2.5, 3, 1};
Measurement second = first;
```

Structure assignment copies member values. Structures can also be passed to and returned from functions, so a related collection of data can travel through one interface. This reduces the need for many separate arguments, but changes to the type still require dependent code to be checked and rebuilt.

A typedef names a type; it does not create an instance of that type. Define the complete structure type before code that needs its size or members.

## Members and pointers

Use the dot operator for an object and the arrow operator for a pointer:

```c
first.value = 3.0;
Measurement *p = &first;
p->valid = 0;
```

`(*p).valid` has the same meaning as `p->valid`. The parentheses in the former are necessary because member access binds more tightly than unary dereference.

Passing a structure by value gives the function a copy. Pass a pointer when the function should modify the original, or a pointer to `const` when it should read the original without making a full value copy.

```c
void invalidate(Measurement *measurement)
{
    measurement->valid = 0;
}
```

This interface requires a valid pointer to a writable `Measurement`.

## Enumerated states

An enumeration gives meaningful names to integer constants, making a small set of states easier to read than unexplained numeric codes.[^1]

```c
typedef enum {
    SENSOR_IDLE,
    SENSOR_SAMPLING,
    SENSOR_FAULT
} SensorState;

int sensor_is_busy(SensorState state)
{
    return state == SENSOR_SAMPLING;
}
```

Here the constants have values `0`, `1` and `2`: without explicit initialisers, the first starts at zero and each subsequent constant increments by one. Explicit values can be assigned when a particular representation is needed. Names within an enumeration need not have distinct values if aliases are deliberately assigned.

`SensorState state = SENSOR_IDLE;` declares a state variable; `state = SENSOR_SAMPLING;` changes it. A structure can contain such a member alongside measurements and identifiers. The names document intended states, but a C enumeration does not automatically validate incoming integer data or enforce valid state transitions. Check external values before using them as states.

## Memory layout

Members appear in declaration order, but implementations may insert **padding** between members and at the end to satisfy alignment requirements. Therefore, `sizeof(Measurement)` is not necessarily the sum of the individual member sizes.

Use `sizeof` rather than hard-coded byte counts when allocating or copying objects. A structure's layout can differ between platforms because type sizes and alignment rules differ.

`FILE` is an example of a library-provided type accessed through a pointer. Its internal representation is implementation-specific; use `fopen`, `fgetc`, `fclose` and the other documented functions instead of relying on supposed internal fields.

## Allocating an array

Dynamic allocation obtains storage at runtime, useful when an input determines how much space is required. `<stdlib.h>` declares `malloc` and `free`.

`malloc` receives a byte count and returns a `void *`, which converts to an object-pointer type in C without a cast. It returns `NULL` when the allocation fails. Successful allocation does not initialise the contents.

```c
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    size_t length = 6;
    double *values;
    if (length > SIZE_MAX / sizeof *values) {
        return EXIT_FAILURE;
    }
    values = malloc(length * sizeof *values);
    if (values == NULL) {
        return EXIT_FAILURE;
    }
    for (size_t i = 0; i < length; i++) {
        values[i] = (double)i / 2.0;
    }
    printf("Last value: %.1f\n", values[length - 1]);
    free(values);
    return EXIT_SUCCESS;
}
```

This prints `Last value: 2.5`. The multiplication check avoids wrapping the requested byte count. In a general function, define what a zero-length request means before allocating or indexing; the example's length is deliberately positive.

The expression `sizeof *values` is based on the pointed-to type; it does not read uninitialised allocated data. Keeping the allocation tied to the pointer's type avoids accidentally allocating the size of the pointer instead of the elements.

## Ownership and lifetime

The pointer variable and allocated object have different lifetimes. A local pointer variable disappears when a function returns, but dynamically allocated storage persists until it is freed. A function can therefore return a pointer to allocated storage, provided the caller takes responsibility for releasing it.

This is a lifetime property, not global scope: an allocation has no globally accessible variable name. Some valid pointer must still be available to reach it.

Common faults:

- **Memory leak:** the allocation remains reserved after the program loses its last usable pointer or no longer needs it.
- **Use after free:** a pointer is used after its target storage has been released.
- **Double free:** the same allocation is released more than once.
- **Invalid free:** a stack object, interior array pointer or other non-allocation address is passed to `free`.
- **Shallow-copy confusion:** copying a structure containing pointers copies the addresses, not separate copies of their targets.

`free(NULL)` is allowed. Setting one pointer to `NULL` after freeing can prevent accidental reuse through that pointer, but does not repair other aliases still holding the old address.

## Two-dimensional storage

A rectangular grid can use one contiguous allocation with row-major indexing:

```c
size_t rows = 3;
size_t columns = 4;
/* Allocate rows * columns elements after checking size arithmetic. */
/* Element (row, column) is grid[row * columns + column]. */
```

For row `1`, column `2`, the index is `1 * 4 + 2 = 6`. The valid conditions are `row < rows` and `column < columns`. Check both `rows * columns` and the subsequent byte-size multiplication for overflow when sizes come from input.

Alternatively, `int **grid` can point to an array of row pointers, each of which points to its own separately allocated row. Then `grid[row][column]` uses two dereferences. This representation permits different row lengths but needs multiple allocations and cleanup steps.

These layouts are not interchangeable: a flat `int *` allocation cannot simply be cast to `int **` and indexed as rows. It does not contain the required row pointers.

For separate rows, release each successfully allocated row before releasing the row-pointer array. If allocation fails partway through, release the rows already created as well. A contiguous block needs only one release and keeps neighbouring rows together in memory.

[^1]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36216 — Data Structures & Dynamic Memory Allocation, Steve Gunn, structures and dynamic allocation sections.
