---
permalink: y1/elec1312/serial-communication
---
#### Serial Communication

- [[#Serial and parallel communication]]
- [[#UART connections and frames]]
- [[#UART baud rate]]
- [[#UART software and debugging]]
- [[#SPI transfers and device selection]]
- [[#SPI clock modes]]
- [[#I2C connections and addressing]]
- [[#I2C transactions and acknowledgements]]
- [[#Choosing and checking an interface]]

**Coverage:** Week 8 lecture, **9 November 2026**, checked against the recording and lecture slides. The lecture covers UART, SPI and I²C through about 44:45, followed by laboratory preparation. The slides' later JTAG section is outside this recording's taught scope.[^lecture]

**[[#UART connections and frames|UART]]** Two devices exchange asynchronous frames. Cross TX to RX, share a ground reference, and agree on baud rate and frame format.

**[[#SPI transfers and device selection|SPI]]** A controller supplies the clock and selects a peripheral. Each transfer clocks bits in both directions simultaneously.

**[[#I2C transactions and acknowledgements|I²C]]** Devices share clock and data lines. An address selects the peripheral, and the receiver acknowledges each byte.

## Serial and parallel communication

**Serial** communication sends successive bits along a data path. **Parallel** communication sends several bits at once on separate conductors. At the same transfer rate per conductor, an $n$-bit parallel data path can carry $n$ times as many bits. This does not mean every parallel interface is faster than every serial interface: their achievable signalling rates can differ substantially.[^principles]

Parallel interfaces need more package pins and board traces. At high speeds, they also face:

- **Timing skew:** signals on different paths arrive at different times. Matching trace lengths can reduce differences in propagation delay. Serpentine routing adds length to an otherwise shorter path.
- **Crosstalk:** unwanted capacitive or inductive coupling lets one signal disturb another.

The timing issue concerns the propagation of electrical signals, rather than electrons travelling instantly from one end of a wire to the other.

**Synchronous** interfaces provide an accompanying clock signal. **Asynchronous** UART has no separate clock connection: the receiver detects the start of a frame and uses its own configured timing to sample the following bits. The endpoints must therefore agree sufficiently closely on bit duration. “Asynchronous” does not mean that timing is unimportant.

| Interface in this lecture | Timing | Data paths | Device selection |
|---|---|---|---|
| UART | Asynchronous | Separate TX and RX | Normally a direct two-device connection |
| SPI | Synchronous | MOSI and MISO | Separate chip-select signals |
| I²C, called TWI on AVR | Synchronous | One shared bidirectional SDA line | Address sent on the bus |

These are signal-line descriptions. The devices also need suitable power arrangements and a shared electrical reference. See [[Embedded Programming & Architecture#Choosing pins and peripheral functions|alternate pin functions]] before assigning pins.

## UART connections and frames

UART means **Universal Asynchronous Receiver/Transmitter**. The AVR's USART hardware also supports synchronous operation, but the lecture uses its asynchronous mode.[^uart]

For two compatible logic-level UART devices:

TX connects to the other device's **RX**, and the ground connection supplies the voltage reference. Connecting TX to TX connects two outputs rather than forming the intended communication path.

On the course ATmega644P/PA:

- USART0 uses **PD0 = RXD0** and **PD1 = TXD0**.
- USART1 uses **PD2 = RXD1** and **PD3 = TXD1**.

The Il Matto uses 3.3 V logic. A traditional RS-232 port has different voltage levels and signalling polarity, so it requires a suitable transceiver or level conversion. Do not connect an RS-232 port directly to the microcontroller pins merely because both links carry serial characters.

**Simplex** sends data in one direction. **Full duplex** allows simultaneous communication in both directions using the two data lines. **Half duplex** restricts communication to one direction at a time.

### Frame structure

A UART line idles high. A frame starts with a low **start bit**, continues with data bits, optionally includes parity, and ends with one or more high **stop bits**. The AVR sends the least significant data bit first. The lecture's common setting is **8N1**: eight data bits, no parity and one stop bit.

For 8N1, one frame occupies **10 bit periods**: one start, eight data and one stop. Optional parity changes that count. Even parity makes the total number of ones in the data plus parity bit even; odd parity makes it odd. Parity can detect some errors but does not guarantee that a frame is correct.

For example, ASCII `A` is `0x41`, or `01000001` in conventional most-significant-bit-first notation. Its eight UART data bits appear in time order as `1, 0, 0, 0, 0, 0, 1, 0`. The start and stop bits surround them; they are not part of the character value.

## UART baud rate

For this binary UART link, one symbol carries one bit, so the baud rate equals the number of transmitted bits per second. This equality is not a universal definition for all communication systems.[^baud]

In AVR asynchronous normal mode, with `U2Xn = 0`,

$$
\mathrm{BAUD}=\frac{f_{\mathrm{osc}}}{16(\mathrm{UBRRn}+1)},
\qquad
\mathrm{UBRRn}=\frac{f_{\mathrm{osc}}}{16\,\mathrm{BAUD}}-1.
$$

`UBRRn` is the baud-divider value for USART $n$. The hardware stores it across high and low registers. The value must be an integer, so a desired baud rate may only be approximated. The $+1$ in the denominator matters.

For a 12 MHz oscillator and a desired rate of 9600 baud:

$$
\mathrm{UBRRn}_{\mathrm{ideal}}
=\frac{12\times10^6}{16\times9600}-1
=77.125.
$$

Choosing 77 gives

$$
\mathrm{BAUD}_{\mathrm{actual}}
=\frac{12\times10^6}{16(77+1)}
\approx9615.38,
$$

an error of approximately $+0.160\%$ relative to 9600. Check the permitted timing error for both endpoints instead of assuming that any rounded divisor will work.

At an ideal 9600 baud, each bit lasts about $104.17\ \mu\mathrm{s}$. An 8N1 frame takes about $1.042\ \mathrm{ms}$, giving at most **960 payload bytes per second** if frames are sent continuously. Framing overhead means 9600 baud does not deliver 9600 characters per second.

The slides also show asynchronous double-speed mode, with a factor of 8 rather than 16, and synchronous master mode, with a factor of 2. Use the equation for the configured mode. `<util/setbaud.h>` can calculate suitable AVR divider values and the double-speed setting using the supplied `F_CPU` and `BAUD` definitions. Those definitions must describe the actual clock and precede the header's inclusion.

## UART software and debugging

The software sequence is to configure the interface once, then transmit and receive bytes through its data register.[^uartsoftware]

- **Transmit:** wait until the UART data register is ready for another byte, then write the byte to `UDRn`. The `UDREn` flag means the data register is empty; it does not mean the last stop bit has already left the pin.
- **Receive:** wait until `RXCn` indicates received data is available, then read `UDRn`.
- Replace the notation `n` with **0 or 1** consistently for the selected USART. It is not a literal register name to paste into a program.

These polling operations can block. A receive function waiting for a byte will not return until the byte arrives, so the rest of a simple main loop cannot progress during that wait. A device-level implementation should also consider receive errors and whether a timeout is needed.

The lecture shows a supplied debug interface that associates C's standard input and output streams with UART receive and transmit. After including its header and calling its initialisation function, `printf` output can appear in a PC terminal and input can travel back from the terminal. Merely writing `printf` in an embedded program does not create that connection automatically.

A useful check order is: correct physical wiring and ground, correct UART pins, correct baud rate and frame format at both ends, then software initialisation. Debug output also consumes communication time, so a large amount of printing can change the timing of the program being investigated.

## SPI transfers and device selection

SPI means **Serial Peripheral Interface**. The controller, called the *master* in the lecture and AVR documentation, supplies the clock. A selected peripheral is called the *slave*.[^spi]

| Signal | Meaning | Direction at the controller |
|---|---|---|
| SCK or SCLK | Serial clock | Output |
| MOSI | Master Out, Slave In | Output |
| MISO | Master In, Slave Out | Input |
| `/SS` or `/CS` | Active-low slave/chip select | Output to select the peripheral |

For the course AVR, these functions use **PB7 = SCK, PB5 = MOSI, PB6 = MISO and PB4 = SS**. GPIO pins can supply additional chip-select outputs.

Both peripherals share SCK, MOSI and MISO, but have separate selects. Select only the intended peripheral, and check that unselected devices release MISO.

### Simultaneous shifting

The AVR's SPI hardware has an eight-bit shift register. During eight clock cycles, the controller shifts out eight bits on MOSI while receiving eight bits on MISO. The selected peripheral does the corresponding operation. Both directions transfer at the same time: SPI is **full duplex**.

A helpful mental model is two shift registers connected in a loop. If one begins with byte `0xA5` and the other with `0x3C`, a correctly configured eight-clock exchange transfers `0xA5` to the peripheral and `0x3C` to the controller. Real peripherals may return status, an earlier result or meaningless bits during a command; the datasheet defines what each received byte means. Do not assume a reply to a new command can be computed before that command has arrived.

Even a read requires the controller to generate clocks, often by transmitting a dummy byte whose received counterpart is the useful data. This is distinct from UART, where the other device can transmit using its own timing.

For the AVR controller,

$$
f_{\mathrm{SCK}}=\frac{f_{\mathrm{CPU}}}{d},
\qquad d\in\{2,4,8,16,32,64,128\}.
$$

At 12 MHz, the smallest divider gives **6 MHz**. This is the target's controller-clock limit from the divider, not a guarantee that every attached peripheral works at 6 MHz. A byte then occupies eight clock periods, about $1.33\ \mu\mathrm{s}$, before chip-select gaps or software overhead.

### Chip select and multiple devices

Chip-select transitions can carry meaning beyond choosing a device. A falling edge may start an ADC conversion, or a rising edge may end a command. Follow the peripheral's transaction rules instead of permanently tying select low just because it is the only peripheral.

The lecture also describes **daisy chaining**: the output of one peripheral feeds the input of the next, with shared clock and select. Data must be shifted through the chain to reach the required device. It saves select lines, but only works with devices and command formats that support it. Separate selects are the usual arrangement shown above.

## SPI clock modes

Both ends must agree on clock polarity and phase.[^spimodes]

- **CPOL** sets the clock's idle level: 0 means low, 1 means high.
- **CPHA** chooses the sampling edge: 0 uses the first edge away from idle, 1 uses the second edge returning towards idle.

| Mode | CPOL | CPHA | Idle clock | Sampling edge |
|---|---|---|---|---|
| 0 | 0 | 0 | Low | Rising |
| 1 | 0 | 1 | Low | Falling |
| 2 | 1 | 0 | High | Falling |
| 3 | 1 | 1 | High | Rising |

The output changes on the other edge so the receiver can sample stable data. For CPHA = 0, the first data bit must already be ready before the first sampling edge. The lecture's digital potentiometer uses mode 0, but this is a device-specific choice, not a rule for every SPI peripheral. Check bit order as well as mode and maximum clock frequency.

## I2C connections and addressing

I²C means **Inter-Integrated Circuit**. The AVR calls its compatible interface **TWI**, or Two-Wire Interface. It uses **SCL** for clock and **SDA** for bidirectional data. On the course device, **PC0 = SCL** and **PC1 = SDA**.[^i2c]

Both signal lines use **open-drain** behaviour: a device can pull the line low or release it. External pull-up resistors bring released lines high. Thus:

- A low level means at least one connected device is pulling down.
- A high level requires every connected device to release the line.
- The devices do not actively drive a high level against another device's low output.

Use suitable pull-ups for the bus voltage, capacitance and speed. The lecture specifically warns that the Il Matto's internal pull-ups are too weak for the intended laboratory setup. Several breakout boards may each contain pull-ups; in parallel, these reduce the effective resistance and increase the low-state current.

Unlike SPI's separate data paths, SDA changes direction during a transaction. I²C is **bidirectional but not full duplex**: only one sender drives data on SDA at a time. The slides use the word “simplex”; the important distinction is that the same line supports both directions at different times.

The common address format has **seven address bits**, followed by a direction bit: **0 = write** and **1 = read**, from the controller's point of view. Seven bits give 128 possible bit patterns, but reserved addresses mean they are not 128 freely usable peripheral addresses. Connected devices must have suitable distinct addresses.

For a hypothetical seven-bit address `0x2A`, the first byte is:

$$
\text{address byte}=(\text{address}\ll1)\mathbin{|}\text{direction}.
$$

It is `0x54` for a write and `0x55` for a read. Check whether a library expects the seven-bit address or the already shifted address byte, rather than shifting twice.

## I2C transactions and acknowledgements

The controller begins with a **START condition**, sends the address and direction, and waits for the addressed device to acknowledge. Data bytes then follow. The controller ends the transaction with **STOP** or starts another phase with a repeated START.[^i2ctransfer]

START and STOP are bus conditions rather than ordinary fixed-duration UART start/stop bits. START is SDA falling while SCL is high; STOP is SDA rising while SCL is high. During ordinary data bits, SDA remains stable while SCL is high.

After eight bits, the **receiver** controls the ninth clock's acknowledgement:

- **ACK:** pull SDA low.
- **NACK:** leave SDA released high.

A write sends the data from controller to peripheral, so the peripheral acknowledges. A read sends the data from peripheral to controller, so the controller acknowledges received bytes. For the final byte of a read, the controller sends **NACK**, telling the peripheral that no more bytes are wanted.

In the two-byte read, the peripheral supplies the data on the same SDA wire and the controller supplies the clock and acknowledgements. An address NACK or a data NACK during a write is different from the expected final NACK of a successful read; software must interpret status in context.

The lecture's common clock rates are **100 kHz** and **400 kHz**. In the AVR clock equation,

$$
f_{\mathrm{SCL}}
=\frac{f_{\mathrm{CPU}}}{16+2\,\mathrm{TWBR}\,4^{p}},
\qquad p\in\{0,1,2,3\},
$$

$p$ is the prescaler setting. For a 12 MHz CPU, `TWBR = 52` and $p=0$ give a denominator of 120 and hence **100 kHz**. This is a clock rate, not a payload byte rate: address and acknowledgement clocks consume part of the bus time.

The AVR exposes START, STOP, transmit and receive operations through its TWI registers. `<util/twi.h>` supplies named status codes. Check the status after an operation rather than treating “operation finished” as equivalent to “peripheral acknowledged successfully”.

## Choosing and checking an interface

- **PC terminal or simple two-device link:** UART provides byte frames without a separate clock line. Match baud and frame settings, cross TX/RX, and check voltage compatibility.
- **Fast connection to an ADC, memory or sensor with SPI support:** SPI uses separate data lines and a controller clock. Verify mode, bit order, chip-select timing and supported speed.
- **Several addressed devices sharing a small number of signal wires:** I²C shares SDA and SCL. Verify addresses, pull-ups, bus voltage and acknowledgement handling.

The peripheral datasheet determines the bytes to send and how to interpret the reply. Knowing how to send a byte over a bus is only the transport layer of using a sensor or other device.

The 9 November lecture explicitly says that I²C remains **examinable even though the corresponding laboratory work is optional**. Its UART internal block diagram is presented as explanatory rather than examinable detail.[^lecture]

[^lecture]: Steve Gunn, [Week 8: 9 November 2026 recording](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=d28b2bd8-62b7-458c-b68e-b4fd0107ed0f), 47:58 duration. Serial communication begins at 1:08; UART 12:54–27:51; SPI 28:00–37:08; I²C 37:18–44:45. Laboratory scope and I²C examinability at 11:48–12:12; UART block-diagram qualification at 17:15–17:35. Checked 10 November 2026 and rechecked against the official sources on 23 November 2026. Automatic captions were checked against the slides for equations, pins and frame diagrams.

[^principles]: Steve Gunn, [Lecture 9: Serial Communication slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36218), pp. 2–7; recording 2:01–11:38. Slide numbering and teaching-week numbering differ: Lecture 9 slides accompany the Week 8 recording.

[^uart]: Serial Communication slides, pp. 7–11; recording 12:54–17:08. UART wiring diagram and frame order checked visually against pp. 10–11.

[^baud]: Serial Communication slides, pp. 13–15; recording 17:40–22:39. Baud-divider table checked visually on p. 14. The 9600-baud arithmetic and payload-rate calculation are worked examples derived from that table.

[^uartsoftware]: Serial Communication slides, pp. 15–18; recording 21:03–27:51, including the supplied UART debug interface shown during the lecture.

[^spi]: Serial Communication slides, pp. 19–22 and 24–27; recording 28:00–31:45 and 32:39–37:08. The illustrative byte exchange and transfer-time calculation expand the shift-register explanation rather than reproduce a laboratory solution.

[^spimodes]: Serial Communication slides, p. 23, visually checked; recording 31:53–32:27.

[^i2c]: Serial Communication slides, pp. 28–31; recording 37:18–40:21. The pull-up connection diagram was checked visually on p. 30. The address-count and direction explanations clarify the slides' simplified labels.

[^i2ctransfer]: Serial Communication slides, pp. 32–36; recording 40:27–44:45. Read/write and ACK/NACK sequences checked visually on p. 34. The hypothetical address example is explanatory, not a device-specific laboratory answer.
