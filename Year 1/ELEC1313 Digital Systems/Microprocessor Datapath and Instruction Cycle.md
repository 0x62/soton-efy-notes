---
permalink: y1/elec1313/microprocessor-datapath-and-instruction-cycle
---
#### Microprocessor Datapath and Instruction Cycle

- [[#What each block does]]
- [[#Instructions and the operand field]]
- [[#Released material: fetch, decode and execute]]
- [[#Worked register trace]]

A processor repeatedly chooses an instruction and makes the datapath carry it out. Its control signals select where values come from and which registers or memory locations get updated. This builds on [[Controller and Datapath]] and [[Signed Numbers and Binary Arithmetic#ALU and status flags]].[^mp1]

## What each block does

| Block | Role in the teaching CPU |
| --- | --- |
| Program counter (PC) | Holds the address of the current instruction; normally advances to the next address |
| Instruction memory | Returns the instruction stored at the PC address |
| Instruction fields | Separate the instruction into opcode and operand |
| Decoder | Translates the opcode and status flags into control signals |
| Operand multiplexer | Selects a literal operand or the value read at a data-memory address |
| ALU and working register | Calculate or store the current data value; expose status such as zero |
| Data memory | Holds variables; write-enable decides whether the addressed location changes at the edge |

Instruction memory and data memory have different jobs. For example, instruction address 6 identifies a program step, while data address 6 identifies a value; the two addresses need not refer to the same storage.

## Instructions and the operand field

The lecture's **teaching CPU**, not a general instruction format, uses eight bits per instruction: three opcode bits and five operand bits. Three opcode bits allow at most eight unique codes; the five operand bits can represent 32 patterns, from 0 to 31 as unsigned integers.[^mp1]

An operand field of 00111 does not by itself tell you what 7 means. With ADD in **direct** mode, it selects data-memory address 7, and the value stored there is added. With ADDI in **immediate** mode, the ALU adds the literal 7. The opcode changes the mux selection; the same field bits can be used in both instructions.

## Released material: fetch, decode and execute

In the model in the second deck, one instruction completes per clock cycle. The current PC addresses instruction memory, the instruction fields and decoder select the data path, and the clock edge commits the designated updates. Fetch and execute name work performed within that cycle, not necessarily two separate edges; real processor timing need not match this example.[^mp2]

For a conditional branch, compute the next PC explicitly. In this model, BNE uses the zero status of the **current working register**: zero clear means take the target; zero set means fall through to PC + 1. Other instructions normally advance by one. This follows the decoder and PC logic in the slides, rather than the inconsistent sentence alongside the PC listing.[^mp2]

## Worked register trace

Suppose data-memory address 7 contains 11. Start with a working register of 3 and trace the two **alternative** instructions from that same initial state:

| Instruction | Operand sent to ALU | Working register after edge |
| --- | ---: | ---: |
| ADD 7 | 11, read from address 7 | 14 |
| ADDI 7 | Literal 7 | 10 |

Neither instruction writes to data memory. To save the result in address 8, a subsequent STORE 8 enables a memory write; the working register supplies the data and the address field selects the destination. This is a small independent trace, not a D11 task.

[^mp1]: Mark Zwolinski, [Microprocessor 1](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36383), parts list, machine code and direct/immediate operands. The [dated teaching schedule](https://moodle.ecs.soton.ac.uk/pluginfile.php/85680/mod_label/intro/Screenshot%202026-09-21%20at%2013.08.01.png) lists this for 17 November 2026.
[^mp2]: Mark Zwolinski, [Microprocessor 2](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36384), instruction cycle, decoder and datapath. This is released material, not attributed to the 23 November lecture; the [lecturer announcement](https://moodle.ecs.soton.ac.uk/mod/forum/discuss.php?d=2856) replaced that timetabled session with a Q&A.
