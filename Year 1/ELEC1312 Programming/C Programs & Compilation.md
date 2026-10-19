---
permalink: y1/elec1312/c-programs-compilation
---
#### C Programs & Compilation

- [[#Anatomy of a C program]]
- [[#Building and running]]
- [[#Four translation stages]]
- [[#Headers and separate files]]
- [[#Cross-compilation]]
- [[#Writing and checking small programs]]

**[[#Anatomy of a C program|Program essentials]]**
`#include <stdio.h>` supplies declarations for standard input/output. `int main(void)` defines the entry function for this hosted example. Returning `0` reports success.

**[[#Four translation stages|Build pipeline]]**
Source → preprocessing → compilation → assembly → linking → executable.

**[[#Building and running|Minimal build command]]**
`gcc message.c -o message` builds the executable; it does not run it.

## Anatomy of a C program

Lecture 2, Programming in C, Dr Xu Fang, based on Klaus-Peter Zauner's slides.[^1] Lecture 1 explicitly assigns this recording for the remainder of its first week, so it belongs with the introduction rather than being assumed to be week 2.[^2]

This original illustration uses only the basic program structure introduced in the lecture. It is not a laboratory answer.

```c
/* A small hosted program that prints a status message. */
#include <stdio.h>

#define SUCCESS 0

int main(void)
{
    printf("Ready to learn C.\n");
    return SUCCESS;
}
```

- `/* ... */` encloses a comment for readers; it is not executed.
- `#include <stdio.h>` includes the standard input/output header. This declares `printf`; it does not itself contain the complete library implementation.
- `#define SUCCESS 0` defines a preprocessing macro. Later occurrences of the token `SUCCESS` are replaced with `0` before compilation. It is not a variable.
- `int` says `main` returns an integer. `(void)` explicitly says this version takes no parameters.
- `{` and `}` enclose the function body.
- `printf(...)` calls a library function. The double-quoted text is a string, and `\n` represents a newline rather than a literal backslash followed by `n`.
- The semicolons terminate these statements. Preprocessor directives do not take a trailing semicolon here.
- `return SUCCESS;` ends `main` and reports successful execution to the hosting environment. Returning zero is not the same as printing the character `0`.

## Building and running

Save the example as plain text in `message.c`. A text editor changes the source; a compiler toolchain translates it.

```sh
gcc message.c -o message
```

`message.c` is the input filename; `-o message` selects the output name. On a typical Linux shell, run it separately:

```sh
./message
```

Expected output is one line:

```text
Ready to learn C.
```

On Windows, the executable commonly has an `.exe` suffix and the invocation differs by shell; the lecture demonstrates Windows Command Prompt. The central distinction is unchanged: **editing**, **building** and **running** are separate actions. Rebuild after editing, or you may run an old executable.

As an additional checking practice, the example was compiled with warnings enabled:

```sh
gcc -std=c11 -Wall -Wextra -Werror -pedantic message.c -o message
```

These options select C11 and treat the enabled warnings as errors; they are a checking aid here, not a claim that these exact options were assigned in the lecture.

## Four translation stages

The word **compilation** is often used for the entire build. More precisely, the lecture separates four stages:[^1]

1. **Preprocessing:** processes directives such as `#include`, expands macros such as `SUCCESS` and removes comments from the token stream.
2. **Compilation:** analyses the C code and translates it into target assembly instructions.
3. **Assembly:** converts assembly into machine code in an object file.
4. **Linking:** combines object files and required library code/references into the executable.

The `gcc` command acts as a driver for the toolchain, so one command can arrange all four. Intermediate files need not be visible in a normal one-command build.

For the example, preprocessing makes `return SUCCESS;` effectively `return 0;`. The compiler then translates the program's operations. Linking resolves the reference to `printf` using the standard library. On systems using dynamic libraries, some library resolution is completed when the program is loaded/run rather than copying every library into the executable.

## Headers and separate files

The slide diagram shows larger programs divided into source files that can be compiled separately before linking.

| File type | Role |
| --- | --- |
| `.c` | C source, normally containing function definitions |
| `.h` | Header, commonly containing declarations and macros shared with source files |
| `.o` | Object file, containing translated code and information needed by the linker |
| `.exe` | Common Windows executable suffix |
| `.elf` | Executable/linkable format used in many toolchains, including embedded workflows |

A **declaration** tells the compiler about a function's interface. A **definition** supplies its implementation. Including the appropriate header allows the compiler to check calls, while linking connects the calls to implementations.

An object file is not generally a complete runnable program. It can still contain unresolved references that require other objects or libraries.

## Cross-compilation

The **host** is the system running the compiler. The **target** is the system that will run the compiled program.

A normal desktop build often targets the same kind of system as the host. A **cross-compiler** instead produces code for a different target, for example building AVR firmware on a PC. The introductory slides name `avr-gcc` alongside desktop `gcc`.[^2]

This changes the translation target, not the meaning of host and target. Hardware-specific code and available libraries also matter: successfully building a hosted `printf` example does not establish that the same program can use an embedded board's output devices unchanged.

## Writing and checking small programs

The lecture recommends understanding the task, planning small steps, making code readable, compiling frequently and reading diagnostics carefully.[^1]

A useful cycle is:

1. State the observable result, such as one line of output.
2. Write the smallest version that produces it.
3. Compile, read the earliest relevant diagnostic and correct its cause.
4. Run the new executable and compare actual output with the expected result.
5. Make one change and repeat.

As an original diagnostic example, deleting the semicolon after `printf(...)` creates a syntax error. The compiler may point to the next token rather than the exact place the semicolon should have been. Inspect the surrounding statement instead of treating the highlighted token as the only possible fault.

A successful build proves only that the translation checks passed. A program can still compute the wrong result or perform the wrong task, so testing and understanding remain necessary. Keep these illustrative examples separate from assessed work and write your own solutions in accordance with module guidance.

[^1]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=44022 — Lecture 2, Programming in C. Program anatomy: slides 4–5; translation and files: slides 6–13; development advice: slide 14. This note covers taught concepts, not the lab walkthrough or assessment tasks.
[^2]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36211 — Lecture 1, Introduction. Tools: slide 11; first-week recording assignment: slides 23 and 34. The introductory pair's exact calendar dates are not printed in these files.
