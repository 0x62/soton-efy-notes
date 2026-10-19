---
permalink: y1/elec1312/programming-computer-systems
---
#### Programming & Computer Systems

- [[#Programs and machine instructions]]
- [[#Hardware and software choices]]
- [[#Why C]]
- [[#Hosted and embedded systems]]
- [[#Microcontroller resources]]
- [[#Choosing a language]]

**[[#Programs and machine instructions|Translation]]**
Human-readable source must be translated for the target machine. Source portability does not imply that one executable runs on every processor.

**[[#Microcontroller resources|Time and resource budgets]]**
$$
f=\frac1T\qquad N_{\text{clock cycles}}=f_{\text{clock}}T
$$
A clock-cycle budget is not an instruction count: instructions and peripheral operations can take different amounts of time.

## Programs and machine instructions

First-week taught content from Lecture 1, Introduction, credited to Steve Gunn and Xu Fang.[^1] Lecture 2 is also included in this week's notes because the final task slide assigns that recording for the remainder of the same week. The files establish this first-week grouping, but do not independently establish an exact calendar date.

**Programming** expresses a task as instructions a machine can execute. Machines are useful for repeated operations, but the programmer must specify the operations and their order precisely.

A processor executes **machine code** defined by its instruction-set architecture, such as AVR or ARM. A higher-level language makes the program easier for people to express and understand, but requires translation by a compiler or interpreter.

A compiler translates source into a form the target can execute. An interpreter carries out program operations through another running program. These describe implementation approaches, not a guarantee that every language uses only one approach.

#### Example 1

A text-printing C program may be compiled for two different computers. The source can remain the same if it uses facilities supported on both, but the resulting machine code and executable format may differ. Copying a PC executable to a microcontroller does not translate it.

## Hardware and software choices

**Hardware/software co-design** decides which parts of a system should be physical circuitry and which should be instructions running on a processor.

- Dedicated circuitry can implement operations quickly and in parallel, but development and changes after manufacture can be expensive.
- Software can change behaviour without redesigning the whole circuit, but execution time and memory are finite resources.
- FPGAs and CPLDs provide configurable logic. A microcontroller usually changes behaviour by executing different software on an existing processor. These are different forms of flexibility, not interchangeable architectures.

The useful question is not simply which option is fastest, but whether the design meets its timing, cost, power, memory and update requirements.

#### Example 2

As an original illustration, a controller can calculate a desired output in software while a hardware timer maintains a regular timing signal. This splits decision-making from repetitive timing rather than forcing every operation into software.

## Why C

The lectures motivate C as a relatively high-level language that still connects closely to the machine:[^1][^2]

- It permits low-level memory access when needed.
- Its operations can map efficiently to processor instructions.
- It can work with relatively little runtime infrastructure, useful on constrained devices.
- Learning its program structure and translation process helps explain what the processor actually executes.

These are capabilities, not automatic guarantees. A C program can still be inefficient or incorrect; access to low-level details makes understanding the program more important.

Lecture 2 uses a self-balancing robot as motivation: sensor readings and motor updates are needed approximately every $10\,\mathrm{ms}$. That is an update rate of
$$
f=\frac1{0.010\,\mathrm{s}}=100\,\mathrm{Hz}.
$$
The point is predictable, sufficiently fast responses, not just eventually producing the right answer.

## Hosted and embedded systems

A **hosted** program runs on a general-purpose computer with a supporting environment. A simple command-line program may perform a task and terminate, returning a status to that environment.

An **embedded** program forms part of a larger device and performs specific control functions. It is often called **firmware** and commonly runs for as long as the device remains powered, waiting for or responding to events.

An **interrupt** allows an event to divert execution to a handler. The introduction previews this as a reason embedded control flow can be more involved; it does not yet teach interrupt code.

The same language can serve both settings, but the available input/output, startup process and resources differ. A desktop printing example does not imply that a microcontroller has a terminal attached.

## Microcontroller resources

The introductory deck's AVR example lists a $12\,\mathrm{MHz}$ clock, 64 K of program memory, 4 K of SRAM, Harvard architecture, a RISC instruction set and peripherals such as ADCs, timers and serial interfaces.[^1] These are the example platform's specifications, not properties of all microcontrollers.

- **Program memory** stores instructions; **SRAM** holds working data.
- **Harvard architecture** separates instruction and data storage/access paths conceptually.
- An **ADC** converts an analogue measurement into a digital value.
- Timers and serial interfaces provide hardware support for timing and communication.

#### Example 3

A $12\,\mathrm{MHz}$ clock gives
$$
T_{\text{clock}}=\frac1{12\times10^6}\approx83.3\,\mathrm{ns}.
$$
In a $10\,\mathrm{ms}$ interval there are $120{,}000$ clock cycles. This is only a scale comparison using the two lectures' examples, not a claim that the robot used this AVR or that its entire interval is available for one calculation.

## Choosing a language

The introduction contrasts different engineering tools:

- **C:** compiled software with access to low-level machine facilities.
- **MATLAB:** numerical modelling and simulation.
- **SystemVerilog:** a hardware description language, expressing digital hardware rather than merely a sequential software recipe.
- **C++:** supports object-oriented programming as well as other approaches.
- **Mathematica:** symbolic and numerical mathematics, including arbitrary-precision work.

The problem and execution environment guide the choice. The next topic, [[C Programs & Compilation]], follows C source through the toolchain into an executable.

[^1]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36211 — Lecture 1, Introduction. Taught concepts: slides 3–9, 22, 25–27; first-week Lecture 2 assignment: slides 23 and 34. Administrative and laboratory tasks are excluded from these notes.
[^2]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=44022 — Lecture 2, Programming in C, Dr Xu Fang, based on Klaus-Peter Zauner's slides; C motivation and robot example: slides 2–3. Worked calculations here are original explanations, not laboratory solutions.
