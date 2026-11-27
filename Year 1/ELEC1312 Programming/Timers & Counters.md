---
permalink: y1/elec1312/timers-counters
---
#### Timers & Counters

- [[#What hardware timing buys you]]
- [[#From clock ticks to events]]
- [[#Choose a mode and output action]]
- [[#Worked example C8 tone oscillator]]
- [[#PWM for amplitude]]
- [[#Check your understanding]]

**Coverage:** Week 9 lecture (16 November 2026), recording checked against the released Lecture 10 deck. The recording says it uses Klaus-Peter Zauner's notes and adds live explanations.[^lecture]

## What hardware timing buys you

A **counter** accumulates events. A **timer** counts ticks of a clock with known frequency, so count differences represent time. The hardware keeps running while the CPU does other work; a busy wait such as `_delay_ms()` instead spends CPU time waiting.[^concept]

The ATmega644P has Timer0 and Timer2 (8-bit, maximum count 255) and Timer1 (16-bit, maximum 65535). **MAX** is the largest representable count; **TOP** is the maximum used in the selected mode and can be smaller than MAX. **BOTTOM** is zero. A compare match happens when the count equals an output-compare register. It can set a flag, affect an output pin, or request an interrupt if configured; this lecture introduces the possibility, not interrupt programming.[^timer]

## From clock ticks to events

For an internal clock and prescaler $N$, $f_{tick}=f_{CPU}/N$ and $T_{tick}=N/f_{CPU}$. A clock-select setting chooses that prescaler or stops the timer; allowable settings vary by timer. The external-counter inputs are separate from the waveform pins.

**Single-slope, zero through TOP inclusive:** one cycle has $\mathrm{TOP}+1$ ticks. In CTC, where the counter clears on compare, the recurring match frequency is
$$
f_{match}=\frac{f_{CPU}}{N(1+\mathrm{TOP})}.
$$
If the pin toggles once per match, $f_{out}=f_{match}/2$. At 12 MHz, with $N=8$ and TOP = 749, there are 750 ticks/match, a match every 500 μs, and a 1 kHz square wave.

**Dual-slope, zero → TOP → zero:** one full cycle has $2\mathrm{TOP}$ ticks, not $2(\mathrm{TOP}+1)$. If a configured output toggles once at TOP per cycle, the waveform needs two count cycles.

## Choose a mode and output action

| Decision | Register / field |
| --- | --- |
| Which waveform/count pattern and what sets TOP? | `WGM` bits in `TCCRnA/B` |
| What should the compare unit do on the output pin? | `COMnx` field in `TCCRnA` |
| What clock and divider should feed this timer? | `CS` field in `TCCRnB` |
| What is the live count? | `TCNTn` |
| What is the match threshold, or TOP in modes using OCR? | `OCRnx` |
| Can the timer drive the physical pad? | Set the right `DDRx` output bit. |

Start with the mode table, not a guessed hexadecimal register value. For a timer with several channels, their compare values may differ but the channels normally share the parent counter, clock and counting cycle. If a channel's compare register is assigned the separate job of determining TOP, do not assume it still gives an independently adjustable duty on that channel.

## Worked example C8 tone oscillator

The lab uses **Timer1 Mode 9**: phase-and-frequency-correct PWM, TOP = `OCR1A`, toggle OC1A at compare, no prescaler. OC1A is PD5. Timer1 is chosen so slow notes can use a large enough TOP.[^c8]

1. From BOTTOM to TOP and back: $2\,\mathrm{TOP}$ timer ticks.
2. One toggle per count cycle: two such cycles per complete square wave.
3. Therefore $f_{tone}=12\,000\,000/(4\,\mathrm{TOP})$ on the 12 MHz Il Matto.

For 50 Hz, TOP = 60,000, which fits in 16 bits but not in 8. For 5 kHz, TOP = 600. At an ideal middle C of roughly 262 Hz, nearest TOP = 11,450 gives about 262.009 Hz.

For this particular allocation, `COM1A0` enables toggling; `WGM13/WGM10` select Mode 9 and `CS10` selects $N=1$. On a clean setup with other bits zero, `TCCR1A=0x41`, `TCCR1B=0x11`. These are not general PWM constants. If a waveform is at half or twice the target, count both the slope traversals and the toggles per output period before changing the register.

## PWM for amplitude

Duty cycle is $D=t_{high}/T$. For a logic waveform switching between 0 and $V_H$, its time average is $D V_H$; an appropriate low-pass load/filter smooths the carrier so its response better tracks that average. **Carrier frequency** and **duty** are independent controls in fixed-TOP mode. For example, 30% duty at 3.3 V gives a 0.99 V ideal average, not a 0.99 V logic-high level.[^pwm]

C8 uses Timer2 Fast PWM, fixed 8-bit TOP = 255, $N=1$, so $f_{PWM}=12\ \mathrm{MHz}/256=46.875\ \mathrm{kHz}$. Its two outputs use PD7 (OC2A) and PD6 (OC2B) for different duty cycles at the same carrier frequency. Timer1 separately controls audible tone pitch; using different timers decouples the tone period from duty updates. Compare the mode table and special endpoint behavior before assuming every value is linearly equivalent to 0–100% physical duty.

## Check your understanding

1. A 12 MHz timer with divide-by-8 and CTC TOP = 1499 generates a compare match at what rate? What if its output toggles per match?
2. Why not use the same $\mathrm{TOP}+1$ reasoning for dual-slope C8 tone generation?
3. Why can left and right panning share Timer2 despite different duty cycles?

**Answers:** 1. 1 kHz compare rate, 500 Hz output. 2. Each up/down count cycle takes $2\mathrm{TOP}$ ticks, and two toggles make a waveform period. 3. The channels share count and carrier period but use independent compare thresholds.

[^lecture]: [Week 9: 16 November 2026 recording](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=7fea0a01-e42a-4633-892a-b504010823b1), checked 23 November. Substantive captions include software vs hardware timing (3:11–4:43), interrupts deferred (20:48), PWM (23:41 onwards), and final Timer2 PWM setup (43:20–43:39). Klaus-Peter Zauner, [Lecture 10: Timers & Counters](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36219).
[^concept]: Lecture 10, pp. 9–15; Week 9 recording 3:11–4:43.
[^timer]: Lecture 10, pp. 16–19; [ATmega644P datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42744-ATmega644P_Datasheet.pdf), Timer/Counter chapters.
[^c8]: Lecture 10, pp. 23–34 and 43–64; [C8 lab resources](https://moodle.ecs.soton.ac.uk/mod/page/view.php?id=36053). The notes derive the count-period factors instead of copying the supplied oscillator.
[^pwm]: Lecture 10, pp. 15 and 65–67; Week 9 recording 23:41 onwards and 43:20–43:39.
