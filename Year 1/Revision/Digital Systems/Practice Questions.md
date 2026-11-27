---
title: "Practice Questions"
permalink: y1/revision/elec1313/practice-questions
---

Original exam-style questions. Try each one before opening **Answer** to see the working. Marks shown are for practice, not an official scheme.

## D1. Prove the law, then count functions (4 marks)

Verify NOT(A OR B) = (NOT A) AND (NOT B) by truth table. How many distinct 1-output functions have three Boolean inputs?

> [!answer]- Answer
>
> In row order 00, 01, 10, 11, OR gives 0,1,1,1, so the left is 1,0,0,0. Individual inversions give pairs 11,10,01,00, which AND to 1,0,0,0. Both sides agree in every row. Three inputs give \(2^3=8\) rows; each row independently takes 0 or 1, so \(2^8=256\) functions. (Also try the AND form by reversing the operators.)

## D2. Canonical and simplified SOP/POS (7 marks)

With \(F=A\overline B+C\), give canonical minterm/maxterm index sets, then a simplified POS and a Boolean verification.

> [!answer]- Answer
>
> In binary ABC order, all odd minterms have C=1, and the C=0 case AB=10 sets row 4. Therefore \(F=\Sigma m(1,3,4,5,7)=\Pi M(0,2,6)\). Example \(m_4=A\overline B\overline C\) is true at 100; \(M_2=A+\overline B+C\) is false at 010. Distributivity gives simplified \(F=(A+C)(\overline B+C)\). Expanding gives \(A\overline B+AC+\overline BC+C\), and C absorbs both terms containing C. Do not mistake the AND of the maxterms for an AND of minterms.

## D3. Fill a 4-input K-map (8 marks)

For \(F=\overline AB+\overline ACD+BC\overline D\), list the truth vector and minterms, then minimise.

> [!answer]- Answer
>
> The three supplied terms cover respectively {4,5,6,7}, {3,7} and {6,14}; union is {3,4,5,6,7,14}. Truth vector in decimal order 0–15: 0001111100000010. In a grid with AB columns and CD rows ordered 00,01,11,10, F is:
>
> ~~~text
>
>           AB  00  01  11  10
>        CD 00   0   1   0   0
>           01   0   1   0   0
>           11   1   1   0   0
>           10   0   1   1   0
>
> ~~~
>
> A quad down column 01 gives \(\overline AB\); pair 3/7 gives \(\overline ACD\); pair 6/14 gives \(BC\overline D\). Rows 4, 3 and 14 respectively force those terms, so the supplied SOP was already minimal. Circuit: three ANDs into an OR, with A and D inverters as required.

## D4. Is prime the same as essential? (6 marks)

For \(F=\Sigma m(0,1,2,3,5,7,8,10)\), list all prime implicants, essential groups and a minimal cover. A is the MSB.

> [!answer]- Answer
>
> The maximal quads are {0,1,2,3} → \(\overline A\overline B\), {1,3,5,7} → \(\overline AD\), and {0,2,8,10} → \(\overline B\overline D\). The last wraps first/last rows and columns on an AB/CD map. Cells 5 and 8 uniquely force \(\overline AD\) and \(\overline B\overline D\), respectively. These two groups already cover all 8 cells. The first quad is prime because no valid larger rectangle contains it but is not essential because each of its 1s is covered by another prime. Minimum is \(F=\overline AD+\overline B\overline D\).

## D5. Specification to equations (10 marks)

Four inputs ABCD represent an unsigned number, A most significant. Give (i) E for even parity, (ii) F for an odd number strictly greater than 8. Then design a separate three-bit saturating adder Y=min(X+2,7).

> [!answer]- Answer
>
> E is 1 on an even count of ones, not on an even numeric value: \(E=\overline{A\oplus B\oplus C\oplus D}\). F has set bits {9,11,13,15}, all four sharing A=D=1, so \(F=AD\). For \(X=ABC\), listing X=0 through 7 gives Y=(010,011,100,101,110,111,111,111). Thus \(Y_2=A+B\); \(Y_1=\overline B+A\) (only 2 and 3 output 0 for that bit); \(Y_0=C+AB\). Verify saturation by checking 6 and 7 both produce 111, not wraparound.

## D6. Gate restrictions (10 marks)

Implement \(F=AB+\overline AC\) (a) NAND only and (b) OR/NOT only. Give a NOR-only network for two-input XOR.

> [!answer]- Answer
>
> NAND: \(N_A=\operatorname{NAND}(A,A)\), \(X=\operatorname{NAND}(A,B)\), \(Y=\operatorname{NAND}(N_A,C)\), \(F=\operatorname{NAND}(X,Y)\). The outer NAND negates both complementary products and implements their OR. OR/NOT: \(AB=\overline{\overline A+\overline B}\), \(\overline AC=\overline{A+\overline C}\), then OR. XOR using NOR: let \(n=\operatorname{NOR}(A,B)\), \(p=\operatorname{NOR}(A,n)=\overline AB\), \(q=\operatorname{NOR}(B,n)=A\overline B\); \(r=\operatorname{NOR}(p,q)\) is XNOR, and \(\operatorname{NOR}(r,r)\) is XOR. If asked for circuits, label each of those gate connections, not merely the final expression.

## D7. Decoder/MUX realisations (7 marks)

Implement \(F=\Sigma m(1,2,7)\) of ABC via a 3-to-8 active-high decoder and a 4:1 MUX. Explain how decode logic appears inside a conventional MUX.

> [!answer]- Answer
>
> Connect A,B,C to the ordered decoder selectors, then OR outputs D1,D2,D7. For the 4:1 MUX use A,B as selectors: for AB=00, output follows C; 01 output follows \(\overline C\); 10 gives 0; 11 follows C. Thus connect (I0,I1,I2,I3)=(C,\(\overline C\),0,C). A MUX's one-hot select terms decode the selection into a single active gate-enable and combine enabled data; a stand-alone decoder instead exposes each enable output. For an active-low decoder selected lines require suitable inversion/NAND rather than the same OR network.

## D8. Mixed-base conversions and unknown radix (8 marks)

Convert \(52_{10}\) and \(2D_{16}\) into binary, add them as unsigned binary, and solve \(36_r+24_r=57_{10}\).

> [!answer]- Answer
>
> \(52=32+16+4=00110100_2\). Hex 2 and D are nibbles 0010 and 1101, hence \(00101101_2\). Alignment and carries:
>
> ~~~text
>
>     00110100
>   + 00101101
>   ----------
>     01100001
>
> ~~~
>
> Check \(64+32+1=97\). For radix, positional weights give \(3r+6+2r+4=57\), \(5r=47\). This is not an integer, so the equation as set has **no valid integer radix**. If RHS were 55, r=9, valid because the largest digit 6 is smaller than 9. A numerically solved r is not automatically a legal base.

## D9. Read a ternary waveform (5 marks)

At four rising edges, a line is sampled at +3 V, −3 V, 0 V, +3 V. These voltages represent ternary 2, 0, 1, in that order, with MS digit sent first. Find decimal; would an intermediate transition matter?

> [!answer]- Answer
>
> The digit sequence is \(2012_3\). Weight by powers \(3^3,3^2,3^1,3^0\): \(2(27)+0(9)+1(3)+2=59\). Ignore transitions not sampled at the specified edges, assuming the signal meets setup/hold. If the inverse order were specified, \(2102_3=65\); identify order before doing arithmetic.

## D10. Signed versus unsigned overflow (7 marks)

Add 1010 and 0111 in 4 bits and classify overflow for both interpretations. Encode −11 in 8-bit two's complement.

> [!answer]- Answer
>
> The full adder yields \(1\,0001\), so stored result is 0001. Unsigned operands 10 and 7 sum to 17, outside 0…15, and carry out=1. Signed operands −6 and +7 sum to +1, inside −8…+7; unlike-sign addition cannot overflow. Signed overflow is carry into sign bit XOR carry out or the same-sign/sign-change rule. For −11: write 00001011, invert 11110100, add one → 11110101. Check by giving MSB weight −128 and weighting remaining bits to obtain −11.

## D11. Annotate the adder/subtractor (8 marks)

For \(A=1101\), \(B=0011\), give each full adder's input carry, sum and output carry in 4-bit addition and subtraction. Mark unsigned carry/borrow and signed overflow.

> [!answer]- Answer
>
> Bit i gets \((A_i,B_i\oplus SUB,c_i)\); \(c_0=SUB\). For addition SUB=0:
>
> ~~~text
>
>  i   A_i B_i* c_i | s_i c_(i+1)
>  0    1    1   0  |  0    1
>  1    0    1   1  |  0    1
>  2    1    0   1  |  0    1
>  3    1    0   1  |  0    1
>
> ~~~
>
> Result 0000, unsigned carry 1, signed overflow \(c_3\oplus c_4=0\) (−3+3=0). For subtraction invert B=1100, c0=1:
>
> ~~~text
>
>  0    1    0   1  |  0    1
>  1    0    0   1  |  1    0
>  2    1    1   0  |  0    1
>  3    1    1   1  |  1    1
>
> ~~~
>
> Result 1010. Unsigned 13−3=10 with no borrow because c4=1 under invert-plus-one convention; signed −3−3=−6 with no overflow. Draw FA0→FA1→FA2→FA3 by following c1,c2,c3 if a schematic is requested.

## D12. Shift as arithmetic (5 marks)

Multiply 011 by 2 with a three-stage shift register. Give each new D input, then repeat with 101 and interpret the error.

> [!answer]- Answer
>
> For a left shift, wire D2=Q1, D1=Q0, D0=0, all stages sharing one clock. 011 → 110 so \(3\times2=6\). 101 → 010: top 1 shifted out, so unsigned result 2 is \(10\bmod8\), not 10; detect loss by Q2 before the shift or preserve a fourth stage. Interpreted as signed −3, 101 → 010 is also overflow (−6 cannot fit); with signed left shift compare old top bits Q2 and Q1; a sign change signals overflow of this single shift. A logical right shift fills left with zero, arithmetic right shift repeats the sign.

## D13. Trace a latch and a D flip-flop (6 marks)

Starting Q=0, here is a sequence; re-evaluate in the given order: t1 D→1, t2 enable/clock→1, t3 D→0, t4 D→1, t5 enable/clock→0, t6 D→0, t7 enable/clock→1. Give Q immediately after each event for active-high transparent latch and rising-edge FF.

> [!answer]- Answer
>
> Latch: t1 closed 0; t2 opens and copies 1; t3 copies 0; t4 copies 1; t5 closes holding 1; t6 holds 1; t7 opens copying 0. Sequence 0,1,0,1,1,1,0. FF: only t2 and t7 sample, so 0,1,1,1,1,1,0. A high clock level is not an instruction for an edge FF to keep copying D.

## D14. Why ripple decoding glitches (4 marks)

A 3-bit ripple counter changes from 011 to 100; toggles take 8 ns. Sketch intermediate words and explain what a detector for 000 would do. Assume falling output edges trigger higher stages.

> [!answer]- Answer
>
> At 8 ns bit 0 drops: 010. Its falling edge makes bit 1 drop at 16 ns: 000. Then bit 2 rises at 24 ns: 100. The detector emits a false pulse roughly 8 ns (plus its own delays). In a synchronous counter the same clock launches all Q changes, so the multi-stage ripple is removed, though output skew and logic hazards can remain; registering a decoded signal prevents a downstream synchronous system acting on a narrow combinational glitch.

## D15. Design a Gray counter (7 marks)

Design a continuously enabled counter with sequence 000 → 001 → 011 → 010 → 110 → 111 → 000. Is every transition genuinely Gray? Correct it if not, preserving six states.

> [!answer]- Answer
>
> The final \(111\to000\) changes all three bits. Replace 111 with 100, giving 000 → 001 → 011 → 010 → 110 → 100 → 000; pairwise XORs are 001,010,001,100,010,100, all single-bit. The ASM is six state boxes with one unconditional arrow to the successor. Transition table: \(000:001,\ 001:011,\ 010:110,\ 011:010,\ 100:000,\ 101:000,\ 110:100,\ 111:000\). The two invalid states explicitly return to zero. There are \(\lceil\log_2 6\rceil=3\) minimum binary-encoded DFFs, with D inputs as the three next-state bits.

## D16. Timing and longest path (5 marks)

DFF clock-to-Q is 14 ns, setup 9 ns, hold 4 ns. Critical feedback uses NOT→AND→OR, each max delay 6 ns; another path has two gates. Take the shortest feedback path contamination delay as 6 ns total and ignore skew. Find maximum frequency and check hold.

> [!answer]- Answer
>
> Use the longest path: \(T_{\min}=14+3(6)+9=41\,\mathrm{ns}\); \(f_{\max}=1/(41\,\mathrm{ns})\approx24.39\,\mathrm{MHz}\). Setup compares max delay to the *next* edge; hold uses the shortest (min) propagation after the *same* edge. Here 6≥4 ns, so hold passes; do not add hold to the setup sum. If a path starts at an external input rather than a DFF, input arrival timing must be stated separately.

## D17. Synchroniser (6 marks)

Give two DFF wiring and trace stage outputs at three clock edges for an asynchronous input safely high before the first edge, initially both zero. What problem remains?

> [!answer]- Answer
>
> \(D_1=async,\ D_2=Q_1\), same destination clock and reset. Edge 1 yields (Q1,Q2)=(1,0), edge 2 (1,1), edge 3 (1,1). The destination consumes Q2; do not consume Q1. The first stage can become metastable when the source changes close to its edge; an extra cycle reduces but never eliminates propagation probability. Too-short pulses can be missed; an unrelated multi-bit bus is not coherently synchronised by independently double-flopping its bits. In SystemVerilog instantiate two DFFs with Q1 as the intermediate named-port wire.

## D18. A Moore controller from prose (10 marks)

A status lamp can be Off, Full, or Dim. Start pulse turns it to Full from Off; dim pulse switches Full↔Dim. Stop pulse returns either on-state to Off and wins over dim on a simultaneous pulse. Outputs enable the lamp and select dim. Draw ASM-equivalent table, classify and count FFs.

> [!answer]- Answer
>
> ~~~text
>
>  State   Outputs (lamp,dim)    Decision in evaluation order
>  OFF          0,0             start ? FULL : OFF
>  FULL         1,0             stop ? OFF : (dim ? DIM : FULL)
>  DIM          1,1             stop ? OFF : (dim ? FULL : DIM)
>
> ~~~
>
> Draw one rectangular state box per row, outputs inside, diamonds in the order shown; unanswered conditions take the hold/self-loop. All outputs depend only on current state, so Moore. Three states require \(\lceil\log_2 3\rceil=2\) binary DFFs, or three in a one-hot implementation. Reset to OFF; assign unused code to go there.

## D19. Held-button toggling and Mealy event (12 marks)

An output RUN toggles once for every new press of B, even if B is held. PULSE must be 1 combinationally in the cycle when the new press is detected. Starting OFF/RELEASED, give the transition algorithm and output sequence immediately *before* each sampling edge for B=1,1,0,1,0.

> [!answer]- Answer
>
> Store RUN and HELD (last sampled B). Define \(p=B\overline{HELD}\), \(RUN^+=RUN\oplus p\), \(HELD^+=B\). This is the four-state ASM with held/released variants for each RUN state: released+B sets held and toggles; released+!B holds; held+B holds; held+!B clears held. Before edges the pairs (RUN,PULSE) are (0,1),(1,0),(1,0),(1,1),(0,0); after the final edge RUN remains 0. RUN is Moore but PULSE is Mealy because the current input affects it; an entirely Moore implementation would need output-pulse state(s) or a separately registered flag. Explicit B priority avoids a held level toggling every clock.

## D20. ASM table → minimised equations → gates (12 marks)

An encoded controller waits (00) until X=1, then enters Active (01). Active stays until X=1, then enters Done (10). Done always returns to wait; code 11 must return to wait. BUSY=1 in Active and OUT=1 only if Done and X=1. Derive equations and gate-level implementation.

> [!answer]- Answer
>
> ~~~text
>
>  Q1 Q0 | X | Q1+ Q0+ | BUSY OUT
>   0  0 | 0 |  0   0  |  0    0
>   0  0 | 1 |  0   1  |  0    0
>   0  1 | 0 |  0   1  |  1    0
>   0  1 | 1 |  1   0  |  1    0
>   1  0 | 0 |  0   0  |  0    0
>   1  0 | 1 |  0   0  |  0    1
>   1  1 | 0 |  0   0  |  0    0
>   1  1 | 1 |  0   0  |  0    0
>
> ~~~
>
> K-map \(Q_1^+\) singleton 3 gives \(\overline Q_1Q_0X\); \(Q_0^+\) has minterms 1 and 2, not adjacent, giving \(\overline Q_1\overline Q_0X+\overline Q_1Q_0\overline X\). BUSY groups 2 and 3: \(\overline Q_1 Q_0\); OUT singleton 5: \(Q_1\overline Q_0X\). Put the first two gate networks into D1 and D0, common clock, with feedback Qs; two other product networks drive outputs. The Mealy OUT is drawn in a conditional box after Done's X decision. BUSY is a Moore output.

## D21. Test a proposed invalid-state policy (4 marks)

A two-bit 00 → 01 → 10 → 00 loop has no intended 11. Student proposes \(D_1=Q_0,D_0=\overline Q_1\overline Q_0\). Is it self-starting? Derive equations for direct 11 → 00 instead.

> [!answer]- Answer
>
> Proposed 11 computes 10; following clock takes 10 → 00, so it is self-starting but does not satisfy immediate 11 → 00. Enforce exact four rows: D1 is 1 only from 01, giving \(\overline Q_1Q_0\); D0 is 1 only from 00, giving \(\overline Q_1\overline Q_0\). Verify \(D_1D_0=00\) at 11. A don't-care minimisation is acceptable only if the concrete resulting transition graph satisfies the requested recovery behaviour.

## D22. Write a complete two-process SystemVerilog model (15 marks)

Write a rising-edge model with asynchronous active-low reset to WAITING. WAITING moves to SAMPLE on start. In SAMPLE pulse grab, then move to READY if code is 2'b10, otherwise return to WAITING. READY asserts done while waiting for ack, which returns to WAITING. Also produce combinational alert only when READY and code==2'b11.

> [!answer]- Answer
>
> Register process uses nonblocking assignment; combinational process assigns all outputs and next on every path. Alert belongs in READY's decision, not in the state-box default.
>
> ~~~systemverilog
>
> module sample_ctrl (
>     input logic clk, rst_n, start, ack,
>     input logic [1:0] code,
>     output logic grab, done, alert
> );
>     typedef enum logic [1:0] {WAITING, SAMPLE, READY} state_t;
>     state_t state, next;
>
>     always_ff @(posedge clk or negedge rst_n) begin
>         if (!rst_n)
>             state <= WAITING;
>         else
>             state <= next;
>     end
>
>     always_comb begin
>         next = state;
>         grab = 1'b0;
>         done = 1'b0;
>         alert = 1'b0;
>
>         case (state)
>             WAITING: if (start) next = SAMPLE;
>             SAMPLE: begin
>                 grab = 1'b1;
>                 if (code == 2'b10) next = READY;
>                 else next = WAITING;
>             end
>             READY: begin
>                 done = 1'b1;
>                 alert = (code == 2'b11);
>                 if (ack) next = WAITING;
>             end
>             default: next = WAITING;
>         endcase
>     end
> endmodule
>
> ~~~
>
> The enum uses three of four codes. changing code alone in READY can change alert without a clock; changing code in SAMPLE changes next, not current state.

## D23. Test both ASM paths and reset (10 marks)

Test D22's sample success and reject paths, READY alert/ack and reset. Avoid testbench races.

> [!answer]- Answer
>
> Drive on negative edges, sample after a positive edge plus delta/short offset. A no-clock delay after driving code also suffices to check the Mealy alert. With 10 ns clock, a 1 ns settle avoids the positive-edge scheduling race.
>
> ~~~systemverilog
>
> module tb_sample;
>     timeunit 1ns;
>     timeprecision 1ps;
>     logic clk = 0, rst_n = 1, start = 0, ack = 0;
>     logic [1:0] code = 0;
>     logic grab, done, alert;
>
>     sample_ctrl uut (.*);
>     always #5 clk = ~clk;
>
>     task automatic check_outputs(input logic [2:0] expected);
>         if ({grab, done, alert} !== expected)
>             $fatal(1, "got %b expected %b", {grab, done, alert}, expected);
>     endtask
>
>     task automatic tick;
>         @(posedge clk);
>         #1;
>     endtask
>
>     initial begin
>         #1 rst_n = 0;
>         #1 check_outputs(3'b000);
>         @(negedge clk); rst_n = 1; start = 1; code = 2'b00;
>         tick(); check_outputs(3'b100);
>         @(negedge clk); start = 0;
>         tick(); check_outputs(3'b000);
>
>         @(negedge clk); start = 1; code = 2'b10;
>         tick(); check_outputs(3'b100);
>         @(negedge clk); start = 0;
>         tick(); check_outputs(3'b010);
>         @(negedge clk); code = 2'b11;
>         #1 check_outputs(3'b011); // No rising edge since code changed.
>         @(negedge clk); ack = 1;
>         tick(); check_outputs(3'b000);
>         $finish;
>     end
> endmodule
>
> ~~~
>
> Reject path transitions SAMPLE→WAITING; productive path SAMPLE→READY and checks the actual output rather than just displaying timestamps.

## D24. Structural HDL and self-checking combinational testbench (10 marks)

Instantiate two copies of module fa to add two 2-bit inputs with carry. Test every combination. Assume ports a, b, ci, sum, co for single-bit fa.

> [!answer]- Answer
>
> ~~~systemverilog
>
> module add2(input logic [1:0] a, b, input logic ci,
>             output logic [1:0] sum, output logic co);
>     logic c1;
>     fa lsb (.a(a[0]), .b(b[0]), .ci(ci), .sum(sum[0]), .co(c1));
>     fa msb (.a(a[1]), .b(b[1]), .ci(c1), .sum(sum[1]), .co(co));
> endmodule
>
> module tb_add2;
>     timeunit 1ns;
>     timeprecision 1ps;
>     logic [1:0] a, b, sum;
>     logic ci, co;
>     logic [2:0] expected;
>     add2 uut(.*);
>     initial begin
>         for (int i=0; i<4; i++)
>             for (int j=0; j<4; j++)
>                 for (int k=0; k<2; k++) begin
>                     a = i[1:0]; b = j[1:0]; ci = k[0];
>                     expected = i[2:0] + j[2:0] + k[2:0];
>                     #1;
>                     if ({co,sum} !== expected) $fatal(1, "bad add");
>                 end
>         $finish;
>     end
> endmodule
>
> ~~~
>
> 32 vectors; expected width is explicitly three bits to keep carry. A wrapper around two 7-segment instances follows the same named-port structure but connects BCD tens and ones to different inputs.

## D25. SIPO register, clear/load priority (7 marks)

Starting Q=0011, show Q after rising edges (load=1, parallel=1001), (shift=1, serial=1), (shift=1, serial=0), (clear=1 simultaneously with load=1), and give a clocked HDL update. Clear is synchronous and first priority; load wins over shift.

> [!answer]- Answer
>
> Sequence 1001 → 0011 → 0110 → 0000. Each shift moves previous bit 2 to bit 3, bit 1 to bit 2, bit 0 to bit 1, serial to bit 0. HDL:
>
> ~~~systemverilog
>
> always_ff @(posedge clk) begin
>     if (clear)       q <= 4'b0000;
>     else if (load)   q <= parallel_data;
>     else if (shift)  q <= {q[2:0], serial_in};
> end
>
> ~~~
>
> When all controls are low Q holds; this is an intended clocked enable, not a combinational latch. It is a SIPO register with extra controls for the question, not the excluded universal shift-register design exercise.

## D26. CMOS structure, delay and energy (7 marks; mostly syllabus)

Give complementary pull-up and pull-down arrangements for inverter, two-input NAND and NOR. For \(C_L=12\,\mathrm{pF}\) and \(V=3.3\,\mathrm V\), find energy drawn from supply for one complete charge–discharge and average dynamic power if 2 million charges occur per second. Why is XOR harder?

> [!answer]- Answer
>
> Inverter has pMOS to VDD and nMOS to ground, gates shared. NAND's nMOS are series so only A=B=1 can pull low; pMOS are parallel. NOR's nMOS are parallel so either high can pull low; pMOS are series. XOR is a parity function needing both true and complemented conditions; not a simple two-device single AND/OR conduction stack in static CMOS. Supply energy \(CV^2=12\times10^{-12}(3.3)^2=130.68\,\mathrm{pJ}\) per complete charge/discharge; power \(130.68\,\mathrm{pJ}\times2\,\mathrm{MHz}=0.26136\,\mathrm{mW}\). Half \(CV^2\) remains stored after charge, then dissipates on discharge; loop draws full \(CV^2\). Greater resistance/capacitance enlarges transition delay.

## D27. Programmable devices and synthesis (6 marks; syllabus)

Implement \(F=\overline AB+\overline C A\) in PAL-style logic and as a 3-input FPGA LUT. Explain simulation versus synthesis and why an incomplete combinational assigning branch matters.

> [!answer]- Answer
>
> Configure two product terms in the programmable AND plane and OR the outputs; a classic PAL's OR plane is fixed, while a PLA can also programme it. In ABC order: AB=01 makes rows 2,3 high, and A=1,C=0 makes rows 4,6 high, so program the LUT bit sequence (address 0 first) 0,0,1,1,1,0,1,0. An FPGA combines LUTs, FFs and configurable routing. Simulation computes behaviour for stimulus over time; synthesis turns a supported RTL subset into hardware and then implementation maps/places/routes it. A combinational process with no default and an unassigned branch implies retaining old data, therefore a latch. A testbench's # delays are stimulus, not a circuit specification.

## D28. Bus contention and ALU flags (6 marks; syllabus)

Two drivers, one drives 1010 and the other 0110, attach to a four-bit shared bus. Who may drive? Determine bus state if both disable. For a four-bit ALU calculating 1111+0001, give Z, N, C and V.

> [!answer]- Answer
>
> Only one logical bus master should enable its outputs at a time. Both enabled conflict at bits 3 and 2 even though bits 1 and 0 agree; hardware may draw damaging current and logic is indeterminate at conflicts. If both disable the bus floats (Z in four-state simulation; any pulls then set actual voltage). An internal FPGA design normally uses a MUX to select the driver. ALU result is 0000 with carry 1, so Z=1, N=0, C=1, V=0 because signed operands −1 and +1 have opposite signs. A small opcode decoder controls the ALU function or circuit mux.

## D29. Instruction cycle, conceptual datapath and BCD (7 marks; syllabus)

Illustrative byte-addressed CPU uses 1-byte instructions with no extra immediate fetch in this exercise. PC=0x24, memory[0x24] holds ADD R1,R2; R1=6 and R2=9. Give register transfers and final state. Encode the resulting decimal value in packed BCD and binary.

> [!answer]- Answer
>
> Fetch: address comes from PC into address register/bus, memory word goes to instruction register (through the memory data register if provided); increment PC to 0x25. Decode opcode ADD and R1/R2 fields; read operands. Execute: ALU gets 6 and 9, selects ADD; write 15 into R1 and leave R2=9. PC remains 0x25 if no branch/interrupt. Packed BCD encodes decimal digits 1 and 5 separately as 0001 0101, whereas binary 15 is 0000 1111 in eight bits. The controller emits selects/enables; datapath registers, buses and ALU actually transfer and transform the values. A microcontroller commonly integrates CPU, memory and peripherals on-chip; a microprocessor is primarily the CPU.
