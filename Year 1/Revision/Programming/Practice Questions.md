---
title: "Practice Questions"
permalink: y1/revision/elec1312/practice-questions
---

Original exam-style questions. Try each one before opening **Answer** to see the working. Marks shown are for practice, not an official scheme.

Trace the code before you run it.

## P01. Trace types and flow

Starting with n = 7, d = 2, z = 0, evaluate int q = n/d; double y = n/d; double x = (double)n/d; int ok = z != 0 && n/z > 1; and n += d * 3. Give q, y, x, ok and final n. Would changing && to & be safe?

> [!answer]- Answer
>
> Two int operands give integer division: 7/2 is 3. Therefore q is 3 and assignment converts 3 to y = 3.0. Casting n *before* division converts the other operand to double, so x = 3.5. z != 0 is false, so && returns 0 without evaluating the division. Multiplication groups before +=; n becomes 7 + 6 = 13. Bitwise & does not short-circuit; division by zero would have undefined behaviour. Parenthesise both comparisons when discussing bitwise operators because their precedence also differs.

## P02. Array traversal and functional decomposition

Implement the number of strict upward threshold crossings in an int array: the previous reading is at or below t and the current one is greater than t. Use length n; empty and one-element arrays give zero. Determine the result for {1, 5, 5, 2, 6} with t = 4.

> [!answer]- Answer
>
> ~~~c
>
> #include <stddef.h>
>
> size_t crossings(const int a[], size_t n, int t)
> {
>     size_t count = 0;
>     for (size_t i = 1; i < n; ++i) {
>         if (a[i - 1] <= t && a[i] > t)
>             ++count;
>     }
>     return count;
> }
>
> ~~~
>
> Starting at 1 makes i - 1 safe. i < n means no read beyond the final element; no access at all for n ≤ 1. Crossings are 1→5 and 2→6, so 2. An array parameter does not tell the function its size; the caller supplies n.

## P03. Aliasing and caller mutation

Let int a[] = {4, 7, 9}; int *p = a+1; int *q = p. After *q += 3; ++p; change(p);, where change is void change(int *x) { *x = 2 * *x; }, what are the array, *p and *q? What does change(a+3) do?

> [!answer]- Answer
>
> p and q originally point to a[1], so *q += 3 changes 7 to 10. ++p moves only the pointer p one int forward; q stays at the same address. change mutates a[2] from 9 to 18. Final array {4, 10, 18}; *p=18; *q=10. a+3 can be formed as a one-past pointer but cannot be dereferenced, so that call is undefined behaviour. The pointer is passed by value, but the pointed-to storage is shared.

## P04. Strings and capacity

Write a function to copy a C string into capacity cap including the terminator. Return 0 if it fits, -1 otherwise; on too-long input leave dst unchanged. Assume valid source and non-overlapping buffers. Will "AVR!" fit a 4-byte destination?

> [!answer]- Answer
>
> ~~~c
>
> #include <stddef.h>
> #include <string.h>
>
> int copy_label(char *dst, size_t cap, const char *src)
> {
>     size_t n = strlen(src);
>     if (n >= cap)
>         return -1;
>     memcpy(dst, src, n + 1);
>     return 0;
> }
>
> ~~~
>
> strlen excludes NUL. Equality n == cap is failure; 4 visible characters need 5 bytes. n < cap proves there is room for n+1. This also handles cap=0 before any access. sizeof on a parameter declared char dst[] gives pointer size, not the buffer capacity.

## P05. File reading and EOF

Count occurrences of byte 0xff in a named binary file. Return 1 on successful read and close, 0 on error; only write the result on success. Why cannot c be char?

> [!answer]- Answer
>
> ~~~c
>
> #include <stddef.h>
> #include <stdio.h>
>
> int count_ff(const char *name, size_t *out)
> {
>     FILE *fp = fopen(name, "rb");
>     if (!fp)
>         return 0;
>     size_t n = 0;
>     int c;
>     while ((c = fgetc(fp)) != EOF)
>         if (c == 0xff)
>             ++n;
>     int read_ok = !ferror(fp);
>     int close_ok = fclose(fp) == 0;
>     if (!read_ok || !close_ok)
>         return 0;
>     *out = n;
>     return 1;
> }
>
> ~~~
>
> fgetc returns any unsigned-char value converted to int or the distinct EOF sentinel. A narrower char cannot represent both all bytes and EOF; on some hosts byte 255 would become -1. Check ferror before close to distinguish an error from normal end of file. Close on either path. This assumes the count fits size_t.

## P06. Structures and enum states

Define OFF and ON states and a record containing that state and count. A valid press toggles the state and increments count; an invalid sample does not. Mutate the record through a pointer. Starting from OFF,count=3, apply valid, invalid, valid.

> [!answer]- Answer
>
> ~~~c
>
> enum State { OFF, ON };
> struct Alarm { enum State state; unsigned count; };
>
> void press(struct Alarm *alarm, int valid)
> {
>     if (!valid)
>         return;
>     alarm->state = alarm->state == OFF ? ON : OFF;
>     ++alarm->count;
> }
>
> ~~~
>
> Start OFF/3; ON/4; ON/4; OFF/5. p->field means (*p).field. Using named enum values makes it clear which states are expected, rather than relying on the numeric encoding. Unsigned counters wrap modulo their width if the system ever reaches the maximum.

## P07. Dynamic allocation and ownership

Grow a heap-allocated int array to exactly n elements; no lost allocation on failure, reject byte-count overflow, and n=0 must free and clear the pointer. How would newly added elements be initialised?

> [!answer]- Answer
>
> ~~~c
>
> #include <stddef.h>
> #include <stdint.h>
> #include <stdlib.h>
>
> int resize_ints(int **a, size_t n)
> {
>     if (n == 0) {
>         free(*a);
>         *a = NULL;
>         return 1;
>     }
>     if (n > SIZE_MAX / sizeof **a)
>         return 0;
>     int *tmp = realloc(*a, n * sizeof **a);
>     if (!tmp)
>         return 0;
>     *a = tmp;
>     return 1;
> }
>
> ~~~
>
> The original buffer remains valid on a nonzero-size failure. A successful realloc may move it, so old aliases must not be reused. It preserves the overlapping prefix, but does not initialise any newly added elements. The caller can initialise indices old_n through n-1. Pass &p because changing p itself needs pointer-to-pointer. On success caller owns the result and eventually frees it exactly once.

## P08. Two-dimensional storage

A flattened row-major unsigned matrix has 3 rows and 4 columns. Find the element index for row 2, column 1 (zero-based); give the function expression and explain why unsigned ** is not interchangeable with unsigned [3][4].

> [!answer]- Answer
>
> Index = row×columns+col = 2×4+1 = 9. For a flat block use a[r * cols + c]; validate r < rows, c < cols and allocation size first. A real 2D array is contiguous in rows of four and decays to pointer-to-row (unsigned (*)[4]); unsigned ** instead points to unsigned * values, often a table of separately allocated rows. Their object layouts and pointer types differ. A pointer does not store a length automatically.

## P09. Build stages and linkage

main.c includes calc.h declaring int triple(int); calc.c defines it. gcc -c main.c succeeds but gcc main.o -o demo fails with undefined reference. Give separate build commands and explain where macros, machine code and symbol resolution happen.

> [!answer]- Answer
>
> ~~~sh
>
> gcc -std=c11 -Wall -Wextra -c main.c -o main.o
> gcc -std=c11 -Wall -Wextra -c calc.c -o calc.o
> gcc main.o calc.o -o demo
>
> ~~~
>
> Preprocessing substitutes macros and inserts headers. Compilation translates C to assembly; the assembler forms object code. The linker resolves the call to triple using calc.o. A successful compile with only a declaration is not proof an implementation will be linked. A header guard prevents repeated declarations/definitions from repeated inclusion where applicable; it does not link implementations.

## P10. Command-line input

Accept exactly one argument in range 1–255, reject empty text, suffixes and out-of-range input. Why is atoi insufficient?

> [!answer]- Answer
>
> ~~~c
>
> #include <errno.h>
> #include <stdlib.h>
>
> int main(int argc, char **argv)
> {
>     if (argc != 2)
>         return EXIT_FAILURE;
>     char *end;
>     errno = 0;
>     long value = strtol(argv[1], &end, 10);
>     if (end == argv[1] || *end != '\0' || errno == ERANGE ||
>         value < 1 || value > 255)
>         return EXIT_FAILURE;
>     return EXIT_SUCCESS;
> }
>
> ~~~
>
> argc includes the command name. end checks both that conversion occurred and that no trailing text remains. errno is reset before conversion so a previous library failure does not contaminate the check. Check the long before narrowing. atoi cannot distinguish invalid text from a valid zero and gives no reliable range reporting. This solution accepts leading whitespace and a plus sign as strtol does; reject them explicitly if the specification says digits only.

## P11. Embedded architecture and resources

AVR SRAM is 4096 B. Store 1500 16-bit samples, 700 B of static overhead and reserve 500 B of stack. Does it fit? What does a 12 MHz clock imply for a loop of 240 clock cycles? What does Harvard organisation change?

> [!answer]- Answer
>
> Sample storage is 3000 B; total is 4200 B, 104 B over budget. A stack/heap collision is possible even if compile/link succeeds because stack use is dynamic. Time = 240 / (12×10^6) = 20 μs, assuming that cycle count includes all relevant instructions and interrupts do not intervene. Clock rate is not instruction rate for multi-cycle instructions. Harvard separates program and data address spaces; ordinary SRAM pointer access is not the same as reading a constant from program Flash on classic AVR.

## P12. AVR assembly trace

Trace r18 after ldi r18, 4; loop: dec r18; brne loop. How many cycles if LDI and DEC take 1, a taken BRNE 2, and a non-taken BRNE 1? What flag does BRNE test?

> [!answer]- Answer
>
> DEC produces 3,2,1,0. Its zero flag Z is set on the fourth DEC. BRNE branches while Z=0, so three taken plus one not taken. Total = 1 + 4 + (3×2 + 1)=12 cycles. BRNE tests the status flag, not the register directly. This loading literal into a register is different from loading SRAM through an address register.

## P13. GPIO and bit masks

Configure PB2 as an output while preserving other DDRB bits, clear PB2 without changing other outputs, configure PB4 as input with its pull-up, then test whether a button from PB4 to ground is pressed. Start with DDRB=0xB1 and PORTB=0x0D; predict the final registers.

> [!answer]- Answer
>
> ~~~c
>
> DDRB |= _BV(PB2);
> PORTB &= (uint8_t)~_BV(PB2);
> DDRB &= (uint8_t)~_BV(PB4);
> PORTB |= _BV(PB4);
> bool pressed = (PINB & _BV(PB4)) == 0;
>
> ~~~
>
> _BV(n) has one at bit n. Set means OR; clear means AND with complement. 0xB1 OR 0x04 = 0xB5, clearing mask 0x10 gives 0xA5. PORTB 0x0D with bit 2 clear is 0x09, then setting bit 4 makes 0x19. With an input, the PORTB bit enables a pull-up if globally permitted. Read PINB for physical state, not PORTB, which is the output latch/pull-up setting. The pressed button draws the pin down, hence low means pressed.

## P14. Debouncing sampled input

A button is read every 1 ms. Require four consecutive samples of the candidate state before updating the debounced state. Starting released, which sample accepts a press in the sequence 1,1,0,1,1,1,1?

> [!answer]- Answer
>
> Maintain stable, candidate and consecutive count. On a sample different from candidate set candidate to the sample and count=1; on equal samples increment count up to 4; when count reaches 4 copy candidate to stable and emit an event only if it changed. The first two 1s are interrupted by the 0. The second run lasts through samples 4–7, so accept at sample 7. Poll with a timer instead of busy-waiting if other application work must continue.

## P15. Timer periods: overflow versus CTC toggle

A 12 MHz clock and prescaler 64 drive an 8-bit timer. Find normal overflow frequency. Then choose OCR for the closest CTC square-wave output to 1 kHz if the pin toggles every compare.

> [!answer]- Answer
>
> Timer ticks at 12,000,000/64=187,500 Hz. An overflow takes 256 ticks, giving 732.421875 Hz. CTC counts 0 through OCR, inclusive. A full pin period has two toggles, so f = 187500/[2(OCR+1)]. Ideal OCR = 92.75; candidates 92 and 93 give 1008.06 and 997.34 Hz, so choose 93. Prescaler divides the clock once, the inclusive count accounts for +1, and toggles account for the factor of 2. For a compare interrupt frequency without toggling, do not include that factor of 2.

## P16. Fast PWM and duty

An 8-bit fast PWM channel non-inverting, fixed TOP=255, f_cpu=12 MHz and N=8, uses the convention that an interior OCR generates OCR+1 high ticks per cycle. Find the carrier, OCR for 25% duty, and average ideal voltage with a 3.3 V high.

> [!answer]- Answer
>
> Each period is 256 ticks, with timer at 1.5 MHz; f=5859.375 Hz. 25% of 256 is 64 high ticks, so OCR=63. An ideal average is 0.25×3.3=0.825 V; pin level is still either low or high. The convention is explicitly for this mode/interior values; check edge cases OCR=0/TOP and other modes in data manual rather than assuming all PWM uses the same counts.

## P17. ADC code, sample rate and comparator

A 10-bit ADC uses 4.096 V reference and ideal code floor(1024 Vin/Vref), then clips to 0–1023. Find the code at 1.233 V. With 12 MHz CPU and /128 ADC prescaler, find steady continuous conversion rate assuming 13 ADC ticks, and is a 4 kHz sine adequately sampled in the ideal aliasing sense? Which input would report threshold crossing without a voltage code?

> [!answer]- Answer
>
> 1 LSB=4 mV; 1.233/0.004=308.25, so code 308. ADC clock is 93.75 kHz and steady rate is 93,750/13 ≈ 7211.5 samples/s. Nyquist requires strictly above 8 ksample/s for a 4 kHz sine, so not here. An analogue comparator compares voltages and yields one binary threshold state, not a 10-bit measurement. First conversion and manual or triggered acquisition can be slower than the assumptions.

## P18. ADC conversion register handling

On the ATmega644P, a right-adjusted ADC result yields ADCL=0x34, ADCH=0x02. Recover the value. For polling manually triggered conversions, what happens if you read ADCH first? When can ADCH alone be enough?

> [!answer]- Answer
>
> Read ADCL first; that locks the combined result until ADCH is read. Then combine low | ((uint16_t)high << 8) = 0x234 = 564. Reading ADCH first can combine bytes from different conversions if another result arrives in between. In a fresh manual conversion, set ADSC to start and wait for it to clear before reading. With left-adjustment, the top eight bits are in ADCH and can be read alone if only eight-bit precision is required and no prior ADCL read left the register locked. Timer auto-triggering can make cadence more repeatable than main-loop polling.

## P19. Interrupts and atomic shared access

An ISR increments a volatile uint16_t ticks on an 8-bit AVR. Main reads it. Explain a torn read from 0x00FF→0x0100 and show how to fix without accidentally enabling interrupts that were already disabled.

> [!answer]- Answer
>
> ~~~c
>
> #include <stdint.h>
> #include <util/atomic.h>
> extern volatile uint16_t ticks;
>
> uint16_t snapshot(void)
> {
>     uint16_t result;
>     ATOMIC_BLOCK(ATOMIC_RESTORESTATE) {
>         result = ticks;
>     }
>     return result;
> }
>
> ~~~
>
> On a low-byte-first read, main could read old low byte 0xff, ISR updates, main reads new high 0x01, yielding impossible 0x01ff. Volatile says the accesses must actually occur, not that multiple byte reads are indivisible. ATOMIC_RESTORESTATE restores prior interrupt enable state when leaving the block. Keep the block short; handle calculations outside it. Polling means repeatedly checking status in main; interrupts can reduce idle polling but may introduce timing jitter and shared-state races.

## P20. UART timing and divider

For 8N1 at nominal 9600 baud, how long does a character take and what is maximum byte/s? Set a conventional AVR normal-mode UBRR divider at 12 MHz using baud = f_cpu/[16(UBRR+1)] and calculate actual error.

> [!answer]- Answer
>
> Start 1 + data 8 + stop 1 = 10 bit periods, so 10/9600=1.0417 ms and 960 bytes/s before gaps/protocol overhead. Ideal UBRR=77.125; choose 77. Actual baud=12,000,000/(16×78)≈9615.38; error ≈ +0.160%. One symbol per bit is assumed. Cross transmitter to receiver and share ground; TX idles high in ordinary logic-level UART. This is not directly RS-232 electrical signalling.

## P21. SPI modes and one-bit-looking error

The controller uses SPI mode 0, MSB-first and active-low CS. Identify idle level, sample/change edges, and controller-to-peripheral line. An analyser decodes 0x80 as 0x40. Give useful checks before rewriting firmware.

> [!answer]- Answer
>
> Mode 0 is CPOL=0, CPHA=0: SCK idles low, receiver samples rising (leading) edges, transmitter changes on falling edges after presenting the first bit before the first rising edge. MOSI carries controller→peripheral, MISO the reverse, and CS brackets the frame with common ground. On raw traces locate CS then count eight rising edges and inspect MOSI at each edge, especially the first edge; check analyser protocol, frame alignment, bit order, rate and ground. Confirm actual pin and on-wire pattern with 0x80/0x01/0xA5 before attributing a single shifted decode to code. In an AVR master normal transfer reads/writes SPDR, polls SPIF and should ensure hardware SS is driven/output as required by the design.

## P22. I2C addressing and read

Read two bytes from a device register 0x0F at device address 0x48 (seven bits), by writing the register pointer and then reading. Give bytes on the bus and which actor generates the final NACK. Explain pull-ups.

> [!answer]- Answer
>
> START, 0x90 (0x48 shifted left, R/W=0), device ACK, 0x0F, device ACK, repeated START, 0x91 (R/W=1), device ACK, data byte 1, controller ACK, data byte 2, controller NACK, STOP. During the read the receiver is the controller, so the controller ACKs the first byte and NACKs the final one to signal it is done. Both lines need pull-ups because devices normally pull low or release rather than driving high. Bus APIs often take the unshifted 0x48, not 0x90/0x91; use the declared interface.

## P23. Programming versus debugging interfaces

You need to program a blank AVR, inspect live register state while paused and send a sensor value to the PC during normal running. Identify reasonable interfaces and state why a serial USB adapter alone may not program the blank AVR.

> [!answer]- Answer
>
> Use a compatible JTAG programmer/debugger for flash and breakpoints/register inspection if board/device configuration permits. ISP can program a blank AVR but is not equivalent to JTAG on-chip debugging. UART with a logic-level USB–UART bridge is a sensible running-program console. UART bootloader programming requires an already installed bootloader supporting that protocol; application logging and programming are different workflows. Check common ground, correct pins, target power/voltage and selected device before blaming the application.

## P24. Design for testability

A sensor application clamps negative values to 0, returns the actual value for 0–100 inclusive, and clamps larger values to 100. How would you structure and exercise it? Distinguish testing, static analysis and debugging.

> [!answer]- Answer
>
> Keep ADC/register access in a hardware-specific acquisition layer. Pass a signed integer into a pure clamp function and feed the resulting percentage to a separate output layer. Tests (-1→0, 0→0, 1→1, 99→99, 100→100, 101→100) exercise just below, on and just above both boundaries. Also test the signed input minimum/maximum if applicable. Tests run the program and assert outcomes. Static analysis examines code without executing these cases (e.g. finding suspicious conversions); a debugger inspects the state of a failing run. Neither host tests nor static analysis verify device timing or electrical behaviour.
