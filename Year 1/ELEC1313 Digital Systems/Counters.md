---
permalink: y1/elec1313/counters
---
#### Counters

- [[#Counting and toggling]]
- [[#Asynchronous ripple counters]]
- [[#Synchronous counters]]
- [[#Timing constraints]]
- [[#Worked maximum-frequency calculation]]

**Binary count**: $Q^+=(Q+1)\bmod 2^n$ for an enabled $n$-bit up-counter.
**Toggle**: $Q^+=\overline Q$; using a D flip-flop, connect $D=\overline Q$.
**Ideal binary divider**: $f_{Q_i}=f_{\mathrm{clk}}/2^{i+1}$.
**Setup constraint**, neglecting skew:
$$T_{\mathrm{clk}}\geq t_{\mathrm{CQ,max}}+t_{\mathrm{logic,max}}+t_{\mathrm{setup}}.$$

## Counting and toggling

![[Electronics (5)#Sequential Logic]]

A counter stores a state representing a count and advances through a defined sequence. An $n$-bit binary up-counter cycles through $2^n$ states, from zero to $2^n-1$, before returning to zero.[^counters]

For two bits, the sequence is
$$00\to01\to10\to11\to00.$$
The least significant bit changes at every count; the next bit changes every second count. A **modulus-$N$** counter repeats after $N$ states. Modulus 4 uses all two-bit patterns; modulus 3 uses only three and requires a mechanism to skip or reset out of the unwanted state.

A D flip-flop with its inverted output fed back to its input toggles at every active clock edge:
$$D=\overline Q\quad\Longrightarrow\quad Q^+=\overline Q.$$
It takes two input clock periods for its output to complete one cycle, so it divides the input frequency by two.

A T-type flip-flop expresses the same behaviour with a toggle control:
$$Q^+=Q\oplus T.$$
With $T=0$ it holds; with $T=1$ it toggles. This can be implemented using a D flip-flop and $D=Q\oplus T$.

## Asynchronous ripple counters

A ripple counter clocks only the first stage directly from the input clock. Each later stage is clocked by a transition from the preceding stage. The state changes therefore **ripple** through the chain, rather than all stages responding to one common clock edge.[^counters]

For example, connect toggling **falling-edge** flip-flops so that each stage's $Q$ clocks the next stage. A falling transition of the lowest bit advances the next bit. With suitable initialisation, the settled outputs form a binary up-count. Changing the triggering edge or using $\overline Q$ instead changes which transitions advance the next stage; do not assume every cascade counts in the same direction.

For a full binary sequence, bit $Q_i$ divides the input frequency by $2^{i+1}$:
$$f_{Q_0}=\frac{f_{\mathrm{clk}}}{2},\qquad
f_{Q_1}=\frac{f_{\mathrm{clk}}}{4},\qquad
f_{Q_2}=\frac{f_{\mathrm{clk}}}{8}.$$

### Ripple delay

Each flip-flop has a clock-to-output propagation delay. Consider the three-bit transition from $011$ to $100$:

$$011\to010\to000\to100.$$

The intermediate patterns can briefly exist while successive stages respond. A combinational decoder connected to the count can therefore produce glitches even though the **settled** count sequence is correct. The output word should not be treated as an instantaneous, coherent update.

For $n$ cascaded stages, a rough worst-case settling estimate is
$$t_{\mathrm{settle}}\approx n\,t_{\mathrm{CQ,max}},$$
when the transition propagates through every stage and the stages have equal delay. Extra reset/decoding logic can add further delay. Frequency division on an individual output and reliable decoding of the whole word impose different requirements.

## Synchronous counters

All storage elements in a synchronous counter share the same clock. Combinational logic computes each next-state input from the present state. The flip-flops then capture these values together at the active edge.[^counters]

For a three-bit binary up-counter with enable $E$:
$$\begin{aligned}
D_0&=Q_0\oplus E,\\
D_1&=Q_1\oplus(EQ_0),\\
D_2&=Q_2\oplus(EQ_1Q_0).
\end{aligned}$$

- With $E=0$, every input equals its present output, so the count holds.
- With $E=1$, bit 0 toggles on every edge.
- Bit 1 toggles when the old bit 0 is 1.
- Bit 2 toggles when both old lower bits are 1.

This is the carry condition for adding one. More generally, a bit toggles when the counter is enabled and **all less significant bits are 1**. Use the state before the edge to calculate every input.

For $Q_2Q_1Q_0=011$ and $E=1$, the equations give $D_2D_1D_0=100$. These values are ready before the edge, so the flip-flops do not need to wait for a sequence of output changes to ripple through other clock inputs.

Synchronous does not mean zero delay or perfectly simultaneous physical outputs. Clock-to-output delays and skew still exist, and decoded outputs can still glitch. The advantage is that next-state logic has a defined interval in which to settle before the next capture.

## Timing constraints

![[Electronics (5)#Propagation Delay]]

Actual delay depends on the device, load, supply voltage and operating conditions. A generic numerical gate delay is not a substitute for the specified worst-case value.[^timing]

For a flip-flop:

- **Clock-to-output delay**, $t_{\mathrm{CQ}}$: time from the active clock edge to the corresponding change at $Q$.
- **Setup time**, $t_{\mathrm{setup}}$: the data input must be stable for this interval **before** the active edge.
- **Hold time**, $t_{\mathrm{hold}}$: the data input must remain stable for this interval **after** the active edge.

Low-to-high and high-to-low propagation delays can differ. Use the applicable worst-case bound when establishing the maximum clock rate. Violating setup or hold means the captured result is not guaranteed; the device may become metastable.

For a register-to-register path, ignoring clock skew and uncertainty,
$$\boxed{T_{\mathrm{clk}}\geq t_{\mathrm{CQ,max}}+t_{\mathrm{logic,max}}+t_{\mathrm{setup}}}.$$
The first term allows the launching flip-flop to update, the second allows the slowest combinational path to settle, and the third reserves setup time at the receiving flip-flop.

Consequently,
$$f_{\max}\leq\frac1{t_{\mathrm{CQ,max}}+t_{\mathrm{logic,max}}+t_{\mathrm{setup}}}.$$
The **longest relevant path** limits the frequency, not the total number of gates in the entire circuit.

Hold is a separate minimum-delay constraint. With the same ideal zero-skew assumptions,
$$t_{\mathrm{CQ,min}}+t_{\mathrm{logic,min}}\geq t_{\mathrm{hold}}.$$
Slowing the clock does not generally repair a hold violation because hold concerns changes just after the **same** edge. Real timing analysis must also account for clock skew and uncertainty.

## Worked maximum-frequency calculation

Suppose a synchronous counter has the following delays:[^timingexample]

- Flip-flop clock-to-output delay: $20\,\mathrm{ns}$.
- Setup time: $25\,\mathrm{ns}$.
- Hold time: $0\,\mathrm{ns}$.
- AND or XOR gate delay: $25\,\mathrm{ns}$.
- OR gate delay: $155\,\mathrm{ns}$.

If the longest next-state path passes through an AND gate followed by the OR gate,
$$t_{\mathrm{logic,max}}=25+155=180\,\mathrm{ns}.$$
Thus
$$T_{\min}=20+180+25=225\,\mathrm{ns},$$
$$\boxed{f_{\max}\approx\frac1{225\times10^{-9}}=4.44\,\mathrm{MHz}}.$$
A single-XOR path is shorter and does not determine this bound. Parallel AND terms feeding the same OR gate are not added serially to one another: only the gates traversed along one signal path contribute to that path's delay.

This is an idealised setup-limited calculation using the stated delay bounds. A practical operating frequency also allows for the specified clock uncertainties and verifies all hold paths.

[^counters]: Geoff Merrett, [Sequential Logic Part 4: Counters](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36340), including ripple/synchronous-counter topics, the toggle-flip-flop supplementary topic and the enabled-counter circuit on page 12. Explicit state sequences and equations above develop these circuit principles. The [published module schedule](https://moodle.ecs.soton.ac.uk/pluginfile.php/85680/mod_label/intro/Screenshot%202026-09-21%20at%2013.08.01.png) places this material on 23 October 2026; its recording was not yet available when these notes were prepared. Whiteboard-only worked examples are not transcribed here.
[^timing]: Geoff Merrett, [Sequential Logic Part 4: Counters](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36340), pages 6 and 9. The minimum-delay hold inequality states the corresponding zero-skew timing condition explicitly.
[^timingexample]: Geoff Merrett, [Sequential Logic Part 4: Counters](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36340), page 10: circuit image and numerical delay specification; calculation derived from its longest AND–OR path.
