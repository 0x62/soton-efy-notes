---
permalink: y1/elec1312/structures-dynamic-memory
---
#### Structures & Dynamic Memory

- [[#Structures as records]]
- [[#Members and pointers]]
- [[#Enumerated states]]
- [[#Memory layout]]
- [[#Allocating an array]]
- [[#malloc and calloc]]
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

## malloc and calloc

Both functions obtain dynamic storage and return `NULL` on failure. Neither returns the array length; keep that separately.[^2]

| Call | Arguments | Initial contents |
| --- | --- | --- |
| `malloc(n * sizeof *p)` | One total byte count | Uninitialised: assign values before reading |
| `calloc(n, sizeof *p)` | Element count and bytes per element | All allocated bytes set to zero |

For an integer array, `calloc` therefore gives initial integer values of zero:

```c
size_t count = 10;
int *samples = calloc(count, sizeof *samples);
if (samples == NULL) {
    return EXIT_FAILURE;
}
samples[3] = 7;  /* Other elements are still zero. */
free(samples);
```

This fragment belongs inside a function with `<stdlib.h>` included. `calloc` zeroes the **bytes**; do not generalise that to a portable guarantee of null pointers or floating-point `0.0` on every C implementation. Explicit assignment is appropriate when those representations matter. On the usual course targets, zero bytes represent floating-point zero, but type-aware initialisation avoids that assumption.

Step by step, requesting ten integers means:

1. `sizeof *samples` gives the size of one `int` on this target.
2. `calloc` reserves room for ten such objects and clears their bytes.
3. `samples` stores the address of element zero, not all ten values inside the pointer itself.
4. Valid indices are `0` to `9`; the allocation does not perform bounds checking.
5. `free(samples)` releases the allocation once it is no longer needed.

Choose `malloc` when each element will be assigned before use; choose `calloc` when zero-initialisation is useful. Both allocations are released with `free`.

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

A complete example of the separate-row layout is:

```c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    const size_t rows = 3, columns = 4;
    int **grid = malloc(rows * sizeof *grid);
    if (grid == NULL) {
        return EXIT_FAILURE;
    }
    size_t built = 0;
    for (; built < rows; built++) {
        grid[built] = calloc(columns, sizeof *grid[built]);
        if (grid[built] == NULL) {
            break;
        }
    }
    if (built != rows) {
        for (size_t r = 0; r < built; r++) {
            free(grid[r]);
        }
        free(grid);
        return EXIT_FAILURE;
    }
    grid[1][2] = 7;
    printf("Element: %d\n", grid[1][2]);
    for (size_t r = 0; r < rows; r++) {
        free(grid[r]);
    }
    free(grid);
    return EXIT_SUCCESS;
}
```

This prints `Element: 7`. The sizes are small constants; input-derived sizes need the overflow checks described above. The first allocation holds **three pointers**, using `sizeof *grid`. Each later allocation holds **four integers**, using `sizeof *grid[built]`. `grid[1][2]` first retrieves row 1's pointer, then accesses integer 2 in that row. In this example there are four allocations, so successful execution needs four frees.

The outer allocation must remain alive until all row pointers have been used for cleanup. Freeing it first makes subsequent `grid[r]` accesses invalid, even if the old addresses appear unchanged. Separate rows do not guarantee better performance: indirection, allocation overhead and cache locality matter; the contiguous representation is often preferable for a rectangular numerical matrix.

For separate rows, release each successfully allocated row before releasing the row-pointer array. If allocation fails partway through, release the rows already created as well. A contiguous block needs only one release and keeps neighbouring rows together in memory.

[^1]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36216 — Data Structures & Dynamic Memory Allocation, Steve Gunn, structures and dynamic allocation sections.

[^2]: Steve Gunn, [Week 5 — 19 October 2026 recording](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=850012bc-558e-4a40-a7e3-b4e800f7537e), structures 5:49–13:44; allocation 15:49–20:06; flat and row-pointer matrices 27:50–35:20; allocation lifetime and `calloc` 35:27–37:21.
