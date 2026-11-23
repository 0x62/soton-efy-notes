---
permalink: y1/elec1312/digital-input-output
---
#### Digital Input & Output

- [[#Direction, output and readback]]
- [[#Change one bit without disturbing neighbours]]
- [[#Drive an LED]]
- [[#Read and debounce a switch]]
- [[#Check your understanding]]

**Coverage:** Lecture 8, Digital Input & Output, based on the released lecture slides. The slide number is not the teaching-week number.[^slides]

## Direction, output and readback

Each ATmega644P GPIO port has three 8-bit registers, with one bit per pin. For example, bit 0 corresponds to PA0 in all three Port A registers. See [[Embedded Programming & Architecture#Choosing pins and peripheral functions|alternate pin functions]] if the pin is also used by a peripheral.

| Register | Meaning |
| --- | --- |
| `DDRx` | Direction: 0 = input, 1 = output. |
| `PORTx` | Output latch for an output pin; 1 enables the internal pull-up for an input pin, unless globally disabled. |
| `PINx` | Read the actual pin logic level, not merely the value last written to the output latch. |

As an input with no pull-up and no external circuit setting its voltage, a pin can float. A pull-up provides a default **high**, not a forceful output: a switch to ground can safely pull the input low. As an output, the pin actively drives high or low. Do not join it to another output that might drive the opposite value.[^gpio]

AVR also supports toggling a latch by **writing a 1 to the corresponding `PINx` bit**. This is a deliberate write-side feature, not the usual read path. Use a direct mask write (e.g. `PINB = _BV(PB7);`) if using it; avoid a read-modify-write of `PINx` that could write back other sampled high bits.[^gpio]

## Change one bit without disturbing neighbours

`_BV(n)` means a mask with bit `n` set. The rightmost bit is bit 0. On an 8-bit register, for bit 5 the mask `1 << 5` is `0x20`. Use bitwise operators, not logical operators such as `&&`.[^mask]

| Action | Example |
| --- | --- |
| Set | `PORTB |= _BV(PB5);` |
| Clear | `PORTB &= ~_BV(PB5);` |
| Toggle | `PORTB ^= _BV(PB5);` |
| Test | `(PINB & _BV(PB5)) != 0` |

If `PORTB` is `0x46`, setting bit 5 gives `0x66`; clearing bit 1 afterwards gives `0x64`. By contrast, writing `PORTB = _BV(PB5)` replaces the entire latch byte, and can alter other outputs or input pull-ups.

## Drive an LED

**Source current:** pin → resistor/LED → ground. A high pin turns it on. **Sink current:** supply → resistor/LED → pin. A low pin turns it on. Orient the LED for the chosen current direction and always include a current-limiting resistor.[^output]

For a 3.3 V output and an LED with approximately 1.9 V forward drop, targeting 4 mA gives `R ≈ (3.3 − 1.9) / 0.004 = 350 Ω`; 360 Ω is a nearby value, and actual current also depends on pin output voltage. Check per-pin and aggregate datasheet limits. Use a transistor or MOSFET for greater current or a separate load supply, and level-shift where logic levels are incompatible.

## Read and debounce a switch

For an active-low switch on PA0, connect the switch from PA0 to ground. Configure input mode and enable its pull-up. Released reads 1, pressed reads 0.[^input]

```c
#include <avr/io.h>

void button_init(void) {
  DDRA &= ~_BV(PA0);
  PORTA |= _BV(PA0);
}

int button_is_pressed(void) {
  return (PINA & _BV(PA0)) == 0;
}
```

Counting every low sample counts the same hold many times. Counting transitions fixes that but still counts contact bounce unless the input is debounced. One approach is to check periodically, accept a new state only after it stays unchanged for several consecutive samples, then count only accepted released-to-pressed transitions. A low-pass circuit is the hardware alternative shown in the slides. A fixed wait followed by re-reading is simple but blocks foreground code; [[Timers & Counters]] explains what hardware timers can offload.

## Check your understanding

1. A normally open button connects a pin to ground. What should its input and pull-up configuration be? What reading means pressed?
2. What is the difference between reading `PORTB` and `PINB`?
3. Why does waiting for release solve the held-button problem but not always the bounce problem?

**Answers:** 1. Direction 0 and pull-up enabled; 0 means pressed. 2. Latch versus pin level. 3. Contact bounce can briefly appear to be a release, then generate another apparent press.

[^slides]: Steve Gunn, [ELEC1312 Lecture 8: Digital Input & Output](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36217), checked 23 November 2026. The listed recording was not used to establish any further teaching coverage.
[^gpio]: Lecture 8, pp. 4–8 and 19–20, 25–27; [ATmega644P datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42744-ATmega644P_Datasheet.pdf), I/O Ports.
[^mask]: Lecture 8, pp. 9–15 and 21–22. Hex arithmetic is an original worked example.
[^output]: Lecture 8, pp. 17–20. The 360 Ω example is illustrative; use device-specific electrical limits.
[^input]: Lecture 8, pp. 24–30. The short input example is original, not a course-file copy.
