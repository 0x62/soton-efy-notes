---
permalink: y1/elec1313/computer-arithmetic
---
#### Computer Arithmetic

- [[#Binary]]
	- [[#Converting decimal to binary]]
	- [[#Binary Addition]]
- [[#Hexadecimal]]
	- [[#Converting decimal to hexadecimal]]
	- [[#Converting hexadecimal to decimal]]
	- [[#Converting hexadecimal to binary]]

## Number Systems

### Positional number systems

A number is represented as a string of digits, where each position has a weight. The value of the number is the weighted sum of its digits.

> [!figure] ![[Screenshot 2026-09-22 at 09.09.06@2x.png]]
> © University of Southampton [^1]

$$
= (1\times 1000)+(7\times 100) + (3 \times 10) + (4 \times 1) + (7 \times 0.1) + (1 \times 0.01)
$$

Decimal is **base 10** (or *radix 10*). If ambiguous, base can be written as a subscript (e.g $10$ could be decimal or binary, therefore can be disambiguated as $10_{10}$).

### Binary

Binary is a **base 2** number system, where each position is an increment of a power of 2.

> [!figure] ![[Screenshot 2026-09-22 at 09.12.27@2x 1.png]]
> © University of Southampton [^1]

Th convert binary to decimal, from most significant bit to least significant bit:

$$
64+16+8+2=90_{10}=1011010_{2}
$$
$$
= \sum d_{i} \cdot 2^i
$$

#### Converting decimal to binary

There are several ways to convert decimal to binary.

**Largest power of 2**

e.g convert $141_{10}$ to binary:

|     | Power Value | Remainder  | Binary (MSB to LSB) |
| --- | ----------- | ---------- | ------------------- |
| 141 | 128         | 13         | 1                   |
| 13  | 64          | *negative* | 0                   |
| 13  | 32          | *negative* | 0                   |
| 13  | 16          | *negative* | 0                   |
| 13  | 8           | 5          | 1                   |
| 5   | 4           | 1          | 1                   |
| 1   | 2           | *negative* | 0                   |
| 1   | 1           | 0          | 1                   |

Giving us the result of $10001101_{2}$.

**Successive division**

e.g convert $90_{10}$ to binary:

|     | Result        | Remainder (MSB to LSB) |
| --- | ------------- | ---------------------- |
| 90  | $90\div 2=45$ | 0                      |
| 45  | $45\div 2=22$ | 1                      |
| 22  | $22\div 2=11$ | 0                      |
| 11  | $11\div 2=5$  | 1                      |
| 5   | $5\div 2=2$   | 1                      |
| 2   | $2\div 2=1$   | 0                      |
| 1   | $1\div 2=0$   | 1                      |

Giving us a result of $1011010_{2}$.

#### Binary representation

A **word** is a number represented using multiple **bits**. A 4-bit work is a **nibble** (one hexadecimal digit), and an 8-bit word is a byte.

> [!figure] ![[Screenshot 2026-09-22 at 09.26.09@2x.png]]
> © University of Southampton [^1]

#### Binary Addition

Same as usual long addition, with a carry bit:

> [!figure] ![[Screenshot 2026-09-25 at 12.10.03@2x.png]]
> © University of Southampton [^1]


### Hexadecimal

Hexadecimal is a **base 16** number system. 

| Decimal | Binary | Hex |
| ------- | ------ | --- |
| 0       | 0000   | 0   |
| 1       | 0001   | 1   |
| 2       | 0010   | 2   |
| 3       | 0011   | 3   |
| 4       | 0100   | 4   |
| 5       | 0101   | 5   |
| 6       | 0110   | 6   |
| 7       | 0111   | 7   |
| 8       | 1000   | 9   |
| 9       | 1001   | 9   |
| 10      | 1010   | A   |
| 11      | 1011   | B   |
| 12      | 1100   | C   |
| 13      | 1101   | D   |
| 14      | 1110   | E   |
| 15      | 1111   | F   |

#### Converting decimal to hexadecimal

We use successive devision, like for binary, however we start with the LSB and end with the MSB. For example, converting $2703_{10}$ to hexadecimal:

|      | Result            | Remainder (LSB to MSB) |
| ---- | ----------------- | ---------------------- |
| 2703 | $2703\div 16=168$ | 15 (F)                 |
| 168  | $168\div 16=10$   | 8                      |
| 10   | $10\div 16=0$     | 10 (A)                 |

This gives the result $A8F_{16}$.

#### Converting hexadecimal to decimal

To convert hexadecimal to decimal, we can follow the same process as binary, but using powers of 16.

> [!figure] ![[Screenshot 2026-09-22 at 09.30.43@2x.png]]
> © University of Southampton [^1]

$$
= (A\times 256)+(8 \times 16)+(F \times 1)
$$
$$
= (10 \times 256)+(8 \times 16)+(15 \times 1) = 2703_{10}
$$
$$
=\sum d_{i} \cdot 16^i
$$


#### Converting hexadecimal to binary

As $16=2^4$, each hex digit can be treated individually and then combined.

> [!figure] ![[Screenshot 2026-09-22 at 12.37.46@2x.png]]
> © University of Southampton [^1]



[^1]: https://moodle.ecs.soton.ac.uk/pluginfile.php/85703/mod_resource/content/2/L1%20Computer%20Arithmetic%20Part%201%20-%20Number%20Systems%20PRINT.pdf
