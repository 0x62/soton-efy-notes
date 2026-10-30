---
permalink: y1/elec1313/registers
---
#### Registers

- [[#Parallel registers]]
- [[#Shift registers]]
- [[#Bidirectional shifting]]
- [[#Tracing a register]]

**Parallel capture**, at the active clock edge:
$$Q_i^+=D_i,\qquad i=0,\ldots,n-1.$$
**Four-bit shift toward the least significant bit:**
$$Q_3^+=\mathrm{in},\quad Q_2^+=Q_3,\quad Q_1^+=Q_2,\quad Q_0^+=Q_1.$$
An $n$-bit register holds $n$ bits and has $2^n$ possible bit patterns.

## Parallel registers

![[Electronics (5)#Sequential Logic]]

A **register** groups storage elements to remember a multi-bit value. An $n$-bit parallel register consists of $n$ D-type flip-flops connected to a common clock. Each flip-flop captures one data bit at the same active clock edge.[^registers]

For a four-bit register,
$$\begin{aligned}
Q_3^+&=D_3,&Q_2^+&=D_2,&Q_1^+&=D_1,&Q_0^+&=D_0.
\end{aligned}$$
If the input word is $1011$ at the active edge, the stored word becomes $1011$ after the clock-to-output delay. Changes to the input between edges do not immediately change the stored word. All data bits must satisfy the timing requirements around the edge.

The common clock coordinates capture; it does not connect the data bits together. Each bit still has its own data input and stored output. A bank of transparent latches behaves differently from an edge-triggered register because its outputs can follow inputs throughout the active level. See [[Logic & Latches#Edge-triggered flip-flops]].

## Shift registers

A shift register connects the output of one storage stage to the input of the next. Each active edge moves the stored pattern by one position. The end stage receives a **serial input**, and the outgoing end bit can be used as a **serial output**.[^registers]

Define the word as $Q_3Q_2Q_1Q_0$, with $Q_3$ most significant. Shifting toward $Q_0$ means
$$\boxed{(Q_3Q_2Q_1Q_0)^+=(\mathrm{in},Q_3,Q_2,Q_1)}.$$

All right-hand-side values are the **old** values, just before the edge. The bits do not race through every flip-flop in one clock event.

For initial word $0000$ and successive serial inputs $1,0,1,1$:

| Active edge | Input sampled | New $Q_3Q_2Q_1Q_0$ |
|---|---|---|
| 1 | 1 | 1000 |
| 2 | 0 | 0100 |
| 3 | 1 | 1010 |
| 4 | 1 | 1101 |

The first inserted bit reaches $Q_0$ on the fourth edge. The pattern illustrates a serial-to-parallel conversion: four input samples are retained as four simultaneously readable bits. The displayed order depends on which end receives the incoming bit.

With zero fill, shifting an unsigned word toward its least significant end divides it by two and discards any remainder. Shifting toward the most significant end multiplies by two only if the discarded high bit does not cause overflow. A shift is fundamentally a bit movement; its numerical interpretation depends on the representation and fill bit.

### Serial input at the least significant end

For the opposite wiring, where the serial input enters $Q_0$ and each stage feeds the next higher-indexed stage,
$$Q_0^+=\mathrm{in},\quad Q_1^+=Q_0,\quad Q_2^+=Q_1,\quad Q_3^+=Q_2.$$
This is the convention in the handwritten four-bit shift register. Always distinguish the **left-to-right placement on a circuit diagram** from the numerical bit order $Q_3Q_2Q_1Q_0$.[^registerwhiteboard]

Starting at $0000$, sample the input sequence $1,1,0,0,0,1,0,0,0$ at nine rising edges:

| Edge | Sampled input | New $Q_3Q_2Q_1Q_0$ |
| --- | --- | --- |
| 1 | 1 | 0001 |
| 2 | 1 | 0011 |
| 3 | 0 | 0110 |
| 4 | 0 | 1100 |
| 5 | 0 | 1000 |
| 6 | 1 | 0001 |
| 7 | 0 | 0010 |
| 8 | 0 | 0100 |
| 9 | 0 | 1000 |

A short input pulse wholly between the sixth and seventh active edges is **not captured**. The pulse's existence is not enough: its value at the sampling edge, with setup and hold satisfied, is what matters. The waveform therefore cannot be traced simply by copying every input transition into the first stage.

After four captures, the first of those four serial bits is at $Q_3$ and the newest is at $Q_0$. Reading all four outputs together converts serial data to a parallel word. A continuing stream overwrites the oldest bit on each edge; a word boundary must therefore be defined by the surrounding system.

## Bidirectional shifting

A bidirectional shift register selects the source for each stage according to a direction control. Define $\mathrm{dir}=0$ as shifting toward $Q_0$ and $\mathrm{dir}=1$ as shifting toward $Q_3$:

| Direction | Next word |
|---|---|
| $\mathrm{dir}=0$ | $(\mathrm{in},Q_3,Q_2,Q_1)$ |
| $\mathrm{dir}=1$ | $(Q_2,Q_1,Q_0,\mathrm{in})$ |

These are explicit conventions, not universal meanings of 0 and 1. A circuit may instead use separate serial inputs at the two ends.

Multiplexers before the flip-flop data inputs select the required neighbour. For an interior bit,
$$D_i=\overline{\mathrm{dir}}\,Q_{i+1}+\mathrm{dir}\,Q_{i-1}.$$
At an end, the missing neighbour is replaced by the appropriate serial input. The direction and input must be stable for capture at the active edge.

## Tracing a register

1. Write the bit order and define the shift direction before drawing changes.
2. Mark active clock edges and the initial stored word.
3. At each edge, read the serial input and direction, then calculate the **whole next word from the old word**.
4. Keep the word constant between edges, apart from the finite output delay.
5. Track the bit leaving the register separately from the new end-stage value if serial output matters.

For $Q=1010$, a shift toward $Q_0$ with input 1 gives $1101$. A subsequent shift toward $Q_3$ with input 0 gives $1010$. Using already-updated bit values within one edge would incorrectly duplicate bits and lose the simultaneous-update behaviour.

[^registers]: Geoff Merrett, [Sequential Logic Part 3: Registers](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36336), parallel, shift and bidirectional register circuits.
[^registerwhiteboard]: Geoff Merrett, [L4 Registers handwritten notes](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=45558), pp. 1–3: parallel register, serial-input-at-$Q_0$ circuit and sampled waveform. [23 October 2026 registers recording](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=0feb236c-9e6e-48d2-a171-b4ec00b591f1). Recording 41:19–45:26 explains sampling and the missed between-edge pulse; 46:22–46:48 explains serial-to-parallel conversion. The word table follows the input samples in the handwritten waveform, using the stated $Q_3Q_2Q_1Q_0$ display order.
