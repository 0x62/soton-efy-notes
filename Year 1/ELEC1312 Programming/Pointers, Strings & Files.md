---
permalink: y1/elec1312/pointers-strings-files
---
#### Pointers, Strings & Files

- [[#Addresses and pointers]]
- [[#Pointer arithmetic and arrays]]
- [[#Changing a caller's object]]
- [[#Strings and capacity]]
- [[#String operations]]
- [[#Opening and closing files]]
- [[#Reading safely]]

**[[#Addresses and pointers|Address and value]]** `&x` obtains the address of `x`; `*p` accesses the object addressed by a valid pointer `p`.

**[[#Pointer arithmetic and arrays|Indexing]]** `a[i]` is equivalent to `*(a + i)`. Pointer addition counts elements, not bytes.

**[[#Strings and capacity|String length]]** Storage needed = characters + one terminating `\0`. `strlen` excludes the terminator.

**[[#Reading safely|File input]]** Check `fopen` for `NULL`; store `fgetc` in `int`; stop at `EOF`; check errors and close the stream.

## Addresses and pointers

Memory holds program instructions and data. C measures object sizes in bytes; a byte is the size of `char`, commonly eight bits. Other types can occupy several bytes, with sizes depending on the implementation.[^1]

A pointer stores an address-like value identifying an object or function. Its type determines how the pointed-to object can be accessed.

```c
int count = 7;
int *p = &count;
*p = 9;
```

`count` is now `9`. The declaration `int *p` declares a pointer to an integer; the expression `*p` dereferences it. These uses of `*` are related but grammatically different.

`p` is the pointer's value; `&p` is the address of the pointer object itself; `*p` is the integer object it points to. To print an object pointer, use `printf("%p\n", (void *)p)`.

Initialising a pointer to `NULL` gives it a known null value, not a usable object. Dereferencing `NULL`, an uninitialised pointer, an out-of-range pointer or a pointer to an object whose lifetime has ended is invalid. A pointer does not automatically allocate storage for the object it might later point to.

Pointers also support **memory-mapped hardware**: an embedded system can expose device registers at documented addresses. This is why direct address access matters beyond ordinary variables. Arbitrary addresses are not safe to access; the hardware platform and its interfaces determine which accesses are valid.[^2]

A `void *` can hold an object pointer without specifying the pointed-to object type. It is useful for generic storage interfaces such as `malloc`, but it does not make C dynamically typed or store a runtime type tag. Convert it to a suitable typed pointer before accessing an object; dereferencing or doing arithmetic on `void *` is not supported by standard C.

## Pointer arithmetic and arrays

For `int a[4]`, most uses of `a` convert it to a pointer to its first element. However, the array is not itself a pointer variable: its storage contains four integers, and the array cannot be reassigned to a new address.

If `p = a`, then `p + 1` points to the next integer, not necessarily the next byte. `*(p + 2)` and `a[2]` access the same element. Advancing one element adds `sizeof(int)` to the byte offset.

Pointer arithmetic is defined within an array and up to one position past its end. A one-past pointer is useful as an end marker but must not be dereferenced. Subtracting two pointers into the same array gives their distance in elements. Ordering unrelated object pointers is not a general way to compare arbitrary memory addresses.

Use an index or a pointer with an explicit end condition; do not assume a pointer remembers the length of its array.

## Changing a caller's object

C always passes arguments by value. Passing an address copies a pointer value, allowing the function to reach the original object through that pointer.

```c
void split_seconds(int total, int *minutes, int *seconds)
{
    *minutes = total / 60;
    *seconds = total % 60;
}
```

For nonnegative `total` and valid output pointers, a caller can write:

```c
int minutes;
int seconds;
split_seconds(125, &minutes, &seconds);
```

The outputs become `2` and `5`. The function writes through its pointer parameters. Assigning a different address to the local parameter `minutes` would not change the caller's pointer or variable.

The same principle explains why array elements can change inside a function. It is not a separate array pass-by-reference mechanism. See [[Operators & Arrays#Arrays as function arguments]].

Never return the address of an ordinary automatic local variable: its lifetime ends when the function returns. Returning a value is safe; returning dynamically allocated storage requires an ownership agreement about who will free it.

## Strings and capacity

A C string is a sequence of characters terminated by the **null character** `\0`. This is a character value equal to zero, not the same concept as the null pointer macro `NULL`.

```c
char label[] = "Valve";
```

The array contains six elements: `V`, `a`, `l`, `v`, `e`, `\0`. Its capacity is six bytes; its string length is five. A character literal such as `'V'` is distinct from a string literal such as `"V"`, which includes a terminator.

An array initialised from a string literal can be edited within its bounds. A string literal itself must not be modified, so use `const char *label = "Valve";` when storing a pointer to literal text.

Functions that expect strings generally search for the terminator. If a buffer has no terminator within its bounds, passing it as a string can read beyond the buffer. Keep capacity, current length and termination separate in reasoning.

## String operations

`<string.h>` declares common operations:[^1]

| Function | Meaning | Important condition |
| --- | --- | --- |
| `strlen(s)` | Number of characters before `\0` | `s` must be a valid terminated string |
| `strcmp(a, b)` | Lexicographic comparison | Zero means equal; negative/positive indicates order |
| `strcpy(dst, src)` | Copies characters including `\0` | Destination must be large enough; no overlap |

Use `strcmp(a, b) == 0` for content equality. `a == b` compares pointer values when these expressions are pointers, not the text stored at their destinations.

`strlen` returns `size_t`; print it with `%zu`. Repeatedly calling `strlen` in a loop condition can rescan the same text each iteration. For text that is not being resized, compute the length once or iterate to the terminator.

## Opening and closing files

A stream is represented by a `FILE *` from `<stdio.h>`. The usual sequence is **open → perform operations → close**.

The stream abstraction lets a program work with sequential data without implementing the physical storage device. A file can preserve simulation results or a checkpoint that lets a later run resume from a saved state. The saved data must contain the state needed to resume, not just a screen display of selected results.[^2]

Standard input `stdin`, standard output `stdout` and standard error `stderr` are also streams. `printf` writes to standard output; `scanf` reads from standard input. Explicit-stream functions make the destination or source visible, for example `fprintf(stderr, ...)` for diagnostics.

| Mode | Purpose | Existing contents |
| --- | --- | --- |
| `"r"` | Read an existing file | Preserved; opening fails if unavailable |
| `"w"` | Write, creating if necessary | Truncated immediately if opening succeeds |
| `"a"` | Append, creating if necessary | Preserved; writes go to the end |
| `"r+"` | Read and write an existing file | Preserved |
| `"w+"` | Read and write | Truncated or created |
| `"a+"` | Read and append | Preserved; writes go to the end |

Do not use `"w"` merely to inspect a file: opening it can erase its contents. Update streams also have rules for switching between reading and writing, requiring appropriate positioning or flushing operations; use a simple read-only or write-only stream when that is all the task needs.

`fopen` returns `NULL` on failure. Check before using the stream. `fclose` releases the stream and flushes pending output; check its return value when a write failure matters. The pointer must not be used as an open stream after closing.

`fprintf` and `fscanf` work like their terminal counterparts with an extra stream argument. `fscanf` returns the number of successfully assigned inputs, so verify that count rather than assuming every field was read.

## Reading safely

- `fgetc(stream)` returns a character converted to `int`, or `EOF` for end-of-file/error. Keep the result as an `int` until after comparison.
- `fgets(buffer, capacity, stream)` reads at most `capacity - 1` characters and terminates successful input. A newline is retained if it fits. Long lines may require multiple reads.
- `fread(buffer, size, count, stream)` returns the number of complete **elements** read, not generally bytes. When `size == 1`, these counts coincide.

`EOF` is a sentinel value, not an extra byte stored at the end of a file. The `int` result must represent every possible `unsigned char` value as well as that sentinel; storing it in `char` too early can lose the distinction.[^2]

A failed read can mean end-of-file or an error. `ferror` distinguishes an error; do not call `feof` before reading as a way of predicting whether the next read will succeed.

```c
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    if (argc != 2) {
        fprintf(stderr, "Supply one input filename\n");
        return EXIT_FAILURE;
    }
    FILE *input = fopen(argv[1], "r");
    if (input == NULL) {
        perror("Cannot open input");
        return EXIT_FAILURE;
    }
    size_t lines = 0;
    int ch;
    while ((ch = fgetc(input)) != EOF) {
        if (ch == '\n') {
            lines++;
        }
    }
    int failed = ferror(input);
    if (fclose(input) == EOF) {
        failed = 1;
    }
    if (failed) {
        fprintf(stderr, "Input operation failed\n");
        return EXIT_FAILURE;
    }
    printf("Newline characters: %zu\n", lines);
    return EXIT_SUCCESS;
}
```

This counts newline characters, not necessarily all logical lines: an unterminated final line adds no newline character. The distinction between the measurement and the desired result matters even when the program compiles and runs correctly.

[^1]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36215 — Strings, Pointers and Files, Steve Gunn, pp. 2–24.

[^2]: https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=7e5e6379-1568-4064-85f2-b4e100f757d5 — Strings, Pointers and Files, 2:19–5:15, 15:19–17:23, 29:45–32:44 and 38:58–40:36.
