---
permalink: y1/elec1312/embedded-programming-architecture
---
#### Embedded Programming & Architecture

- [[#Hosted and embedded programs]]
- [[#Microcontroller architecture]]
- [[#Harvard memory organisation]]
- [[#SRAM layout and capacity]]
- [[#Clock frequency and execution time]]
- [[#Build and deployment cycle]]

**[[#Hosted and embedded programs|Firmware]]** A program that performs a specific control function within a larger system, usually remaining active to respond to events.

**[[#Harvard memory organisation|Memory spaces]]** Program flash, SRAM and EEPROM have different purposes and addressing; a numerical address has meaning only within its memory space.

**[[#Clock frequency and execution time|Timing]]**
$$
T_{\mathrm{clock}}=\frac1{f_{\mathrm{clock}}},\qquad
T_{\mathrm{execution}}=\frac{\text{clock cycles}}{f_{\mathrm{clock}}}
$$

## Hosted and embedded programs

A hosted C program normally runs within an operating-system environment, uses facilities such as files and console streams, and can finish by returning from `main`. An **embedded** program performs specific functions as part of a larger system: reading inputs, controlling outputs and coordinating peripherals. Such software is often called **firmware**.[^1]

Firmware commonly runs continuously. Returning a result and terminating is not its normal operating model; it repeatedly responds to events. A minimal structural outline is:

```c
int main(void)
{
    /* Initialise the hardware and application state. */
    for (;;) {
        /* Observe inputs, update state, and control outputs. */
    }
}
```

This is a control-flow skeleton, not a hardware driver. The empty condition in `for (;;)` means the loop has no condition that terminates it.

A **polling** loop checks for work in program order. An **interrupt** allows an event to divert execution to a handler before the interrupted code resumes. Interrupts therefore complicate program flow: the next code executed need not be the next statement in the main loop. Ordinary C syntax still applies, but timing, memory limits and interaction with hardware become part of the design.

## Microcontroller architecture

A microcontroller integrates a processor, memory and peripherals on one device. The course hardware uses an AVR with a 12 MHz clock, 64 KiB program memory, 4 KiB SRAM and 3.3 V CMOS logic levels. The introductory memory map identifies the ATmega644P/PA family.[^1]

Its principal parts are:
- A CPU that fetches, decodes and executes instructions.
- General-purpose registers that hold operands for immediate processing.
- Non-volatile program flash containing instructions.
- SRAM holding mutable runtime data and the stack.
- I/O registers through which software controls and observes peripherals.
- Timers/counters, analogue-to-digital conversion and serial interfaces.

AVR is a **RISC** architecture: machine instructions operate on the device's registers and memory according to its instruction set. C expressions are translated into those instructions; one C statement is not necessarily one machine instruction.

## Harvard memory organisation

The AVR uses a **Harvard architecture**, separating program and data memory. The memory diagram distinguishes:[^1]

| Memory | Purpose | ATmega644P/PA range shown |
|---|---|---|
| Program flash | Application instructions and bootloader | Word addresses `0x0000`–`0x7FFF` |
| Data address space | CPU registers, I/O registers and SRAM | SRAM at byte addresses `0x0100`–`0x10FF` |
| EEPROM | Non-volatile data | Byte addresses `0x0000`–`0x07FF` |

An address range is inclusive. Thus the flash holds
$$
(\mathtt{0x7FFF}-\mathtt{0x0000}+1)\times2
=32768\times2=65536\text{ bytes}=64\text{ KiB}.
$$
The multiplier is essential: the slide's program addresses count **16-bit words**, not bytes. EEPROM contains $2048$ bytes, or $2$ KiB.

Flash retains its contents without power. SRAM does not. EEPROM provides persistent data storage distinct from program flash and ordinary runtime variables. Equal numerical addresses in these different spaces do not identify the same storage.

The flash also includes a boot section. A **bootloader** is a program that supports loading an application into flash; it consumes part of the device's program-memory capacity. The application cannot assume that the entire advertised flash capacity is free for its own instructions.

## SRAM layout and capacity

The data address space begins with 32 CPU registers, 64 I/O registers and 160 extended I/O registers. SRAM begins at `0x0100`, after these regions. Its capacity is therefore[^1]
$$
\mathtt{0x10FF}-\mathtt{0x0100}+1
=4096\text{ bytes}=4\text{ KiB}.
$$
Within SRAM:
- **`.data`** contains objects with static storage duration requiring non-zero initial data; their initial values must be available when the program starts.
- **`.bss`** contains zero-initialised static-storage objects.
- The **heap** provides dynamically allocated storage.
- The **stack** supports calls, return information and automatic storage as required by the compiled program.

The heap grows towards higher addresses and the stack towards lower addresses in the diagram. Both use the same finite SRAM: free space between them must accommodate runtime use. Successful compilation alone does not prove that worst-case stack use is safe.

For example, a buffer of 1000 `uint16_t` samples requires $1000\times2=2000$ bytes. It occupies about $48.8\%$ of a 4096-byte SRAM before other variables, stack or heap overhead. At 2000 samples the payload alone is 4000 bytes, leaving only 96 bytes for everything else—an unsuitable budget for most real applications.

See [[Structures & Dynamic Memory#Memory layout|structure layout]] for padding and [[Structures & Dynamic Memory#Ownership and lifetime|allocation lifetime]]. Desktop assumptions about abundant memory do not transfer to a small microcontroller; use `sizeof` and the actual target's type definitions rather than assumed sizes.

## Clock frequency and execution time

At 12 MHz, one clock period is
$$
T=\frac1{12\times10^6}\approx83.3\text{ ns}.
$$
If a particular execution path consumes 1200 clock cycles, it takes
$$
\frac{1200}{12\times10^6}=100\ \mu\text{s}.
$$
This calculation starts from a **cycle count**, not a C statement count. Instruction timing, branches and peripheral waiting determine the actual count. Compiler optimisation can change generated instructions, so an arbitrary empty loop is not automatically a reliable delay.

## Build and deployment cycle

The embedded development cycle separates building an executable from installing it on the target:[^1]

1. Write the C source and include the required declarations.
2. Build for the AVR target using `avr-gcc` and the appropriate target configuration.
3. Produce the hexadecimal-format program image required by the programming workflow.
4. Establish the target connection and enter the bootloader.
5. Transfer the image using `avrdude`.
6. Run the resulting firmware on the microcontroller.

`avr-gcc` is the compiler toolchain; `avrdude` communicates with the programmer or bootloader to transfer the image. A hex file represents program bytes and addresses for loading—it is not the C source text.

A program compiled for a desktop CPU is not interchangeable with one compiled for AVR. The compiler target, selected device, clock assumptions and peripheral definitions must agree with the hardware. Datasheets define the hardware interface; the AVR C library documents the software facilities available for that target.

[^1]: Steve Gunn, ELEC1312, [Lecture 7: Introduction to Embedded Programming](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45429), *Week 6 – EmbeddedIntro*, published lecture slides (not a completed-lecture transcript), pp. 2, 7–10 and 15–19; especially the ATmega644P/PA memory diagram on p. 18.
