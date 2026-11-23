---
permalink: y1/elec1312/analogue-input
---
#### Analogue Input

- [[#Sampling and quantisation]]
- [[#The AVR ADC]]
- [[#Clock, reads and triggering]]
- [[#Analogue comparator]]
- [[#Check your understanding]]

**Coverage:** Lecture 11 slides released by 23 November 2026. These are slide-based notes; the Week 10 recording was not listed when checked and the lecture’s actual coverage is not yet confirmed.[^slides]

## Sampling and quantisation

**Sampling** selects particular times to measure the input; **quantisation** maps each measured voltage to one of a finite number of codes. These are independent: sampling faster does not give finer voltage resolution, and adding bits does not stop aliasing.

For a signal band-limited below a maximum frequency $f_{max}$, use a sample rate above $2f_{max}$ to avoid ambiguity in ideal sampling. In practice, allow room for a low-pass anti-alias filter and for the bandwidth you need. An out-of-band input can otherwise appear as a slower one: at 1 ksample/s, a 900 Hz sinusoid produces samples equivalent to a 100 Hz sinusoid up to phase/sign.

An $n$-bit converter has $2^n$ possible output codes. For a 10-bit unipolar ADC, codes are 0–1023 and the nominal voltage step is $V_{REF}/1024$, about 3.22 mV at a 3.3 V reference. Dividing by 1024 sets the step; 1023 is the largest integer code, not the number of steps in the reference range. Resolution does not guarantee accuracy: reference error, noise and other converter errors still matter.[^quant]

## The AVR ADC

The ATmega644P has eight single-ended channels on PA0–PA7. A **multiplexer** chooses one input at a time; the channels do not convert simultaneously. The **sample-and-hold** keeps the sampled voltage stable during conversion. A **successive-approximation register (SAR)** tries bits from most significant to least significant: an internal DAC makes a trial voltage, the converter compares it with the held sample, and decides whether to keep each trial bit.[^adc]

Example with a 3-bit ADC and a 4 V reference: for a 2.7 V input, try code `100` (2 V), keep it; try `110` (3 V), reject bit 1; try `101` (2.5 V), keep it. Final code: `101`. This is a simplified SAR illustration; it is not a calibration curve for the AVR.

For the actual AVR, choose the reference in `ADMUX` and use the legal analogue input range from the datasheet. In unipolar conversion, voltages at or above the selected reference saturate at the highest code within the permitted pin voltage range; a slide quoting 0–VCC does not imply that all reference settings give useful measurements up to VCC.

## Clock, reads and triggering

1. Select input channel, reference and alignment in `ADMUX`; ensure the pin is not driving an output or enabling its pull-up.
2. Enable the ADC and set its prescaler in `ADCSRA`. For full resolution, the specified ADC clock is typically 50–200 kHz. With the Il Matto’s 12 MHz clock, divide-by-64 gives 187.5 kHz.
3. Set `ADSC` to start a single conversion and wait until it clears. A normal conversion takes 13 ADC clock cycles, about 69.3 μs at 187.5 kHz. The first after enabling takes 25 cycles, about 133 μs. Those are converter timings, not the guaranteed full application throughput.
4. For a right-adjusted 10-bit result, read `ADCL` **before** `ADCH`, or use a compiler-supported complete ADC register read. Reading the low byte locks the result pair until the high byte is read. For a left-adjusted result, `ADCH` alone gives the most significant eight bits.

**Single conversion** needs a new start request each time. **Free running** repeatedly converts after the first start; for this device enable `ADATE` and select `ADTS=000` in `ADCSRB`. For a conversion-complete interrupt, `ADIE` enables the ADC request and the usual global interrupt enable is also required. The legacy `ADFR` label visible in an overlapping excerpt on slide 20 is not the ATmega644P's control bit; use the device datasheet and header for register names.[^timing]

## Analogue comparator

The comparator does not return a voltage code. It reports which of two analogue voltages is higher: with the normal pin selection, `ACO=1` when AIN0 (PB2, positive input) is above AIN1 (PB3, negative input). The comparator can report a threshold crossing without regularly polling ADC codes, and it can request an interrupt. For example, a sensor voltage and a known reference can signal when pressure crosses a threshold. If the reference is noisy or the voltage sits near it, consider hysteresis or filtering. The Il Matto shares these comparator pins with USB circuitry; follow the board’s warning about using the pins with the USB cable connected.[^comparator]

## Check your understanding

1. Which change improves nominal voltage resolution: an increased sampling rate, or more ADC bits at the same reference?
2. What ADC clock do you get at 12 MHz with divide-by-128? Is it within the full-resolution band?
3. Which peripheral is better if you only need to act on a threshold crossing? Which if you need to record the voltage?

**Answers:** 1. More bits. 2. 93.75 kHz, yes. 3. Comparator for the threshold; ADC for the numerical measurement.

[^slides]: Steve Gunn, [Lecture 11: Analogue Input](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36220), checked 23 November 2026. Supporting timing and register details checked against the device datasheet.
[^quant]: Lecture 11, pp. 2–4 and 8; [ATmega644P datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42744-ATmega644P_Datasheet.pdf), ADC Conversion Result. Aliasing and numerical examples expand the slide concepts.
[^adc]: Lecture 11, pp. 5–11; ATmega644P datasheet, ADC Overview and Operation.
[^timing]: Lecture 11, pp. 11–15 and 20; ATmega644P datasheet, Prescaling and Conversion Timing, ADC Data Register and ADC Auto Trigger Enable.
[^comparator]: Lecture 11, pp. 16–20; ATmega644P datasheet, Analogue Comparator and alternate functions of Port B.
