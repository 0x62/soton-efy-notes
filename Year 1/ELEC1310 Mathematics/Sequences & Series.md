---
permalink: y1/elec1310/sequences-series
---
#### Sequences & Series

- [[#Sequences]]
- [[#Arithmetic sequences and sums]]
- [[#Geometric sequences and sums]]
- [[#Limits and infinite sums]]
- [[#Extension - binomial expansion]]
- [[#Supplemental - power series]]

**[[#Arithmetic sequences and sums|Arithmetic progression]]**
$$
a_n=a_1+(n-1)d\qquad S_N=\frac N2(a_1+a_N)
$$

**[[#Geometric sequences and sums|Geometric progression]]**
$$
a_n=a_1r^{n-1}\qquad S_N=a_1\frac{1-r^N}{1-r}\quad(r\neq1)
$$

**[[#Limits and infinite sums|Infinite geometric sum]]**
$$
S_\infty=\frac{a_1}{1-r}\qquad (|r|<1)
$$

## Sequences

Week 1 assigned reading, Philip Calado. The 22 September recording explicitly assigns this week's sequences/series notes as homework at 46:02–46:18 and says the topic will be revisited later. It was **not delivered in that live lecture**. It belongs in this week's notes because it was assigned, not because all uploaded slides were covered orally.[^3]

The main assigned material is in slides 49–59 and lecture-note sections 9–11; optional extension and supplemental slides are separated below and are not claimed as live teaching.[^1][^2]

A **sequence** is an ordered list $a_1,a_2,a_3,\ldots$; a **series** adds its terms. The first $N$ terms have partial sum
$$
S_N=\sum_{n=1}^{N}a_n.
$$
An explicit formula gives a term directly, for example $a_n=2n+1$. A recurrence uses earlier terms, such as Fibonacci's $F_n=F_{n-1}+F_{n-2}$ with $F_1=F_2=1$. A recurrence requires starting values.

## Arithmetic sequences and sums

Foundation Year methods:

![[Mathematics A Cheat Sheet#Rules of Arithmetic Progressions]]

Here $a_1$ denotes the first term (called $a$ in the embedded table), and $d=a_{n+1}-a_n$ is constant. There are $n-1$ increments between the first and $n$th terms. Pairing the first and last terms, then the second and penultimate terms, gives equal pair sums and hence
$$
S_N=\frac N2(a_1+a_N)=\frac N2[2a_1+(N-1)d].
$$

#### Example 1

For $7,11,15,\ldots$, $d=4$. The tenth term is $a_{10}=7+9(4)=43$. The sum of the first ten terms is $S_{10}=10(7+43)/2=250$.

The sum of the first $N$ positive integers is the special case $a_1=d=1$:
$$
1+2+\cdots+N=\frac{N(N+1)}2.
$$


## Geometric sequences and sums

Foundation Year methods:

![[Mathematics A Cheat Sheet#Rules of Geometric Progressions]]

A geometric sequence repeatedly multiplies by a constant ratio $r$. The embedded finite-sum formula assumes $r\neq1$; the special case follows below.

For a nonzero starting value, $r=a_{n+1}/a_n$ where the denominator is nonzero. Writing the partial sum and subtracting $r$ times that sum cancels the intermediate terms:
$$
S_N=a_1+a_1r+\cdots+a_1r^{N-1},
$$
$$
S_N-rS_N=a_1-a_1r^N.
$$
Therefore
$$
S_N=a_1\frac{1-r^N}{1-r}\quad(r\neq1).
$$
When $r=1$, all terms equal $a_1$, so $S_N=Na_1$ instead.

#### Example 2

For $3,6,12,\ldots$, $r=2$. The sixth term is $3(2^5)=96$, while the sum of the first six terms is
$$
S_6=3\frac{1-2^6}{1-2}=189.
$$
The term and the sum are different questions. For negative $r$, the terms alternate in sign.



## Limits and infinite sums

A sequence **converges** when its terms approach a single finite value. For example $1/n\to0$. A sequence that does not converge diverges: it may grow without bound or remain bounded while oscillating, as $(-1)^n$ does.

A series converges when its **partial sums** approach a finite value. These are distinct tests: terms approaching zero is necessary for series convergence, but is not sufficient. For example, the harmonic terms $1/n$ tend to zero while $\sum_{n=1}^{\infty}1/n$ diverges.

For a geometric series with $|r|<1$, $r^N\to0$, so
$$
S_\infty=\lim_{N\to\infty}S_N=\frac{a_1}{1-r}.
$$
For a nonzero first term, the infinite geometric series does not converge when $|r|\geq1$.

#### Example 3

$$
4+2+1+\frac12+\cdots=\frac4{1-1/2}=8.
$$
After five terms, $S_5=4(1-(1/2)^5)/(1-1/2)=7.75$. The remaining tail is $8-7.75=0.25$.

> [!WARNING] Bounded does not mean convergent
> $1,-1,1,-1,\ldots$ is bounded but has no single limit. Its partial sums also oscillate. Do not classify oscillation as a third alternative to convergence/divergence: failure to converge is divergence.

## Extension - binomial expansion

The lecture deck's extension section introduces finite series expansions.[^1] For nonnegative integer $n$:
$$
(x+y)^n=\sum_{k=0}^{n}\binom nkx^{n-k}y^k,\qquad
\binom nk=\frac{n!}{k!(n-k)!},\qquad0!=1.
$$
The existing expansion method supplies the basics:

![[Mathematics A Cheat Sheet#Rules of Binomial Expansion]]

The new notation $\binom nk$ gives the coefficients directly without constructing Pascal's triangle.

#### Example 4

$$
(x+3)^3=x^3+3x^2(3)+3x(3^2)+3^3
=x^3+9x^2+27x+27.
$$


## Supplemental - power series

The final slides provide a preview of approximation methods, not a full week of calculus. A power series represents a function using powers of its argument. Taylor expansion about $a$ takes the form
$$
f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n
$$
where the series converges to the function. Merely possessing derivatives does not guarantee that equality everywhere. Maclaurin expansion is the special case $a=0$.

The deck lists
$$
e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots,
$$
$$
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots,\qquad
\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots.
$$
These three series converge for every real $x$. Truncating gives an approximation, not exact equality; the trigonometric arguments must be in radians. For example, $e^{0.1}\approx1+0.1+0.1^2/2=1.105$ using terms through second order.

The engineering point is to replace a difficult expression with a manageable polynomial near the expansion point. The notes also introduce Fourier series conceptually: periodic signals can be represented using sums of sinusoidal components. Detailed Fourier analysis belongs to later teaching.

[^1]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=44402 — Lecture 2 slides, Functions, Sequences and Series. Core: slides 49–59; binomial/application extensions: slides 72–73; power-series supplemental material: slides 87–91.
[^2]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=44793 — Lecture 2 explanatory notes, sections 9–11. Original worked examples are used here; convergence terminology is stated consistently even where the source summary is loose.

[^3]: https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=5b366901-c2b9-4fa7-9ab1-b4cd0107afe7 — Functions recording, 22 September 2026, 0:20–0:28 and 46:02–46:18: focus on functions, sequences/series assigned for independent study and a later return to the topic.
