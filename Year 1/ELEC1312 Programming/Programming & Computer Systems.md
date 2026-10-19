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

Week 1 (21–25 September 2026): Lecture 1, Introduction, delivered by Steve Gunn on 21 September, plus Xu Fang's assigned recording, Programming in C.[^1][^3][^4] The live introduction explicitly assigns the second recording within the same week (31:06–31:31 and 43:54–44:03), so its lecture number does not imply a second teaching week.

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

The spoken explanation (6:11–6:59) describes an FPGA **bitstream** configuring the device's internal logic and connections. Different configurations can implement different digital circuits, including a processor design. Configuring logic is distinct from supplying machine instructions to an already implemented CPU.[^3]

The useful question is not simply which option is fastest, but whether the design meets its timing, cost, power, memory and update requirements.

#### Example 2

As an original illustration, a controller can calculate a desired output in software while a hardware timer maintains a regular timing signal. This splits decision-making from repetitive timing rather than forcing every operation into software.

## Why C

The lectures motivate C as a relatively high-level language that still connects closely to the machine:[^1][^2]

- It permits low-level memory access when needed.
- Its operations can map efficiently to processor instructions.
- It can work with relatively little runtime infrastructure, useful on constrained devices.
- Learning its program structure and translation process helps explain what the processor actually executes.

Steve Gunn connects low-level access to **memory-mapped peripherals** (10:10–11:25): a peripheral's registers can be accessed through designated addresses, for example reading a register associated with an ADC result. These addresses and meanings are device-specific. This is not permission to read or overwrite arbitrary memory; accessing memory incorrectly can break a program.[^3]

These are capabilities, not automatic guarantees. A C program can still be inefficient or incorrect; access to low-level details makes understanding the program more important.

Lecture 2 uses a self-balancing robot as motivation: sensor readings and motor updates are needed approximately every $10\,\mathrm{ms}$. That is an update rate of
$$
f=\frac1{0.010\,\mathrm{s}}=100\,\mathrm{Hz}.
$$
The recording explains the feedback mechanism (4:45–5:54): sensors report the robot's angle and acceleration, the controller uses those measurements to decide on a correction, and motors move the wheels to counter a tilt.[^4]

The point is predictable, sufficiently fast responses, not just eventually producing the right answer. At 6:11–6:51, the lecturer contrasts a motor command taking $2\,\mathrm{ms}$ on one occasion and $10\,\mathrm{ms}$ on another. This variation is **timing jitter**: even accurate sensing is not enough if corrections arrive inconsistently. The example motivates timing guarantees, rather than the simplistic claim that choosing C alone guarantees real-time behaviour.[^4]

## Hosted and embedded systems

A **hosted** program runs on a general-purpose computer with a supporting environment. A simple command-line program may perform a task and terminate, returning a status to that environment.

An **embedded** program forms part of a larger device and performs specific control functions. It is often called **firmware** and commonly runs for as long as the device remains powered, waiting for or responding to events.

An **interrupt** allows an event to divert execution to a handler. The introduction previews this as a reason embedded control flow can be more involved; it does not yet teach interrupt code.

The same language can serve both settings, but the available input/output, startup process and resources differ. A desktop printing example does not imply that a microcontroller has a terminal attached.

## Microcontroller resources

The introductory deck's AVR example lists a $12\,\mathrm{MHz}$ clock, 64 K of program memory, 4 K of SRAM, Harvard architecture, a RISC instruction set and peripherals such as ADCs, timers and serial interfaces.[^1] These are the example platform's specifications, not properties of all microcontrollers.

The live architecture explanation (7:38–9:05) adds how these pieces fit together:[^3]

- **Program memory** stores instructions; **SRAM** holds working data. Flash program memory is nonvolatile, so its contents survive power-off; this does not imply that all working data survives.
- The **program counter** tracks instruction execution, while **registers** hold small amounts of readily accessible processor data.
- The **ALU** performs arithmetic and logic operations.
- **I/O ports** connect digital inputs and outputs, such as switches and indicators.
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

[^3]: https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=2cdd445d-36c4-490f-82a4-b4cc00f86721 — Lecture 1: Introduction, 21 September 2026, Steve Gunn. Spoken explanations and first-week mapping are identified by timestamps above.
[^4]: https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=db9ffe17-c2c1-431e-8ace-b4cb013c2d0a — ELEC1312_Week1, Xu Fang's second lecture recording, explicitly identified as recorded in September 2026 (1:17–1:21). Robot feedback and timing discussion: 3:08–7:36. Automatic captions were interpreted alongside the slides, not copied literally.
