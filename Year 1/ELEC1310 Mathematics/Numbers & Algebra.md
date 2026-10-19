---
permalink: y1/elec1310/numbers-algebra
---
#### Numbers & Algebra

- [[#Number sets and intervals]]
- [[#Algebraic notation]]
- [[#Operators and precedence]]
- [[#Rearranging and factorising]]
- [[#Fractions]]
- [[#Powers and logarithms]]
- [[#Engineering interpretation]]

**[[#Rearranging and factorising|Useful identities]]**
$$
a(b+c)=ab+ac \qquad a^2-b^2=(a-b)(a+b)
$$

**[[#Powers and logarithms|Powers and logarithms]]**
For positive bases and valid logarithm arguments:
$$
a^ma^n=a^{m+n}\qquad (a^m)^n=a^{mn}\qquad
\log_b(xy)=\log_b x+\log_b y
$$
$$
\log_b(x/y)=\log_b x-\log_b y\qquad
\log_b(x^p)=p\log_b x\qquad \log_b x=\frac{\ln x}{\ln b}
$$

## Number sets and intervals

A **set** is a collection of distinct elements. $x\in A$ means that $x$ belongs to $A$; $x\notin A$ means it does not. $A\subseteq B$ permits equality, while $A\subset B$ here means a proper subset.

| Set | Meaning | Example |
| --- | --- | --- |
| $\mathbb N$ | Counting numbers, starting at 1 in this module | $1,2,3,\ldots$ |
| $\mathbb Z$ | Integers, including zero and negative integers | $-3,0,5$ |
| $\mathbb Q$ | Ratios of integers, with nonzero denominator | $2/3$, $0.25$ |
| $\mathbb R\setminus\mathbb Q$ | Irrational real numbers | $\sqrt2$, $\pi$ |
| $\mathbb R$ | All real numbers | Rational and irrational values |
| $\mathbb C$ | $a+jb$, with $a,b\in\mathbb R$ and $j^2=-1$ | $2+3j$ |

$$
\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb R\subset\mathbb C
$$

An interval describes a continuous part of the real number line:

- $(a,b)$: $a<x<b$, excluding endpoints.
- $[a,b]$: $a\leq x\leq b$, including endpoints.
- $[a,b)$: $a\leq x<b$.
- $(-\infty,b]$: all $x\leq b$. Infinity is never an included endpoint.

#### Example 1

$\sqrt9=3$ is natural, integer, rational, real and complex. $\sqrt3$ is real but not rational. A quantity restricted to positive values has domain $(0,\infty)$, not $[0,\infty)$.

## Algebraic notation

In $5+3x-2x^2y$, $5$ is a constant term, $x,y$ are variables and $3,-2$ are coefficients. Terms are separated by addition/subtraction at the outermost level. An **expression** represents a value; an **equation** asserts that two expressions are equal.

An **implicit equation** relates variables without isolating the chosen output; an **explicit equation** expresses that output directly. For example, $v^3+2=x$ can be written explicitly as $v=\sqrt[3]{x-2}$. Some engineering equations cannot be conveniently rearranged into a closed-form expression, so a numerical solver is used instead. [^4]

Only like terms combine: $3x+5x=8x$, but $3x+5x^2$ cannot be combined into one term. The exponent is part of what identifies a term.

The **independent variable** is the chosen input; the **dependent variable** changes in response. With a fixed resistance, $I(V)=V/R$ describes current as a function of voltage. Usually the independent variable is on the horizontal axis.

## Operators and precedence

Unary operators act on one operand, such as $-x$. Binary operators act on two, such as $x+y$.

Addition and multiplication of ordinary numbers are commutative and associative:
$$
a+b=b+a,\quad ab=ba,\quad (a+b)+c=a+(b+c),\quad (ab)c=a(bc).
$$
Subtraction and division are not: $8-3\neq3-8$ and $(12/6)/2\neq12/(6/2)$.

Evaluate parentheses first, then powers, then multiplication/division at equal precedence from left to right, then addition/subtraction at equal precedence from left to right. Explicit brackets remove ambiguity.

In programming, check the language's own operator rules rather than assuming every mathematical symbol behaves identically. Scalar multiplication rules should not automatically be carried over to matrix/vector operations.[^3]

For a chain such as $a/b\times c$, rewrite division as multiplication by the reciprocal: $a(1/b)c$, with $b\neq0$. The factors can then be regrouped without changing the result. Similarly, subtraction is addition of a negative quantity. Do not use this to ignore existing brackets: $a/(bc)$ is a different expression. [^3]

#### Example 2


$$
(2+3)\times2^3-12/4=5\times8-3=37.
$$
Also $-3^2=-9$, whereas $(-3)^2=9$.

## Rearranging and factorising

An equation remains equivalent when the same reversible operation is applied to both sides. Adding the additive inverse cancels a term; multiplying by a reciprocal cancels a nonzero factor.

The distributive law expands brackets; reading it backwards extracts common factors:
$$
a(b+c)=ab+ac,\qquad a(b-c)=ab-ac.
$$
Useful identities are
$$
(a+b)^2=a^2+2ab+b^2,\qquad
(a-b)^2=a^2-2ab+b^2,\qquad
(a-b)(a+b)=a^2-b^2.
$$

#### Example 3

Factor by grouping:
$$
3x^2+6xy-2x-4y=3x(x+2y)-2(x+2y)=(3x-2)(x+2y).
$$
Solve $3(2x-1)=15$ by dividing by 3, adding 1, then dividing by 2: $2x-1=5$, $2x=6$, $x=3$.

See [[Functions#Polynomial functions]] for quadratic roots and their graphical interpretation.

## Fractions

For nonzero denominators:
$$
\frac ab+\frac cd=\frac{ad+bc}{bd},\qquad
\frac ab\frac cd=\frac{ac}{bd},\qquad
\frac ab\div\frac cd=\frac{ad}{bc}\quad(c\neq0).
$$
A common denominator is needed for addition/subtraction, not for multiplication. Cancel **factors**, never isolated terms within sums.

#### Example 4

$$
\frac{x^2-9}{x^2+x-6}
=\frac{(x-3)(x+3)}{(x+3)(x-2)}
=\frac{x-3}{x-2},\qquad x\neq-3,2.
$$
The original restriction $x\neq-3$ survives cancellation. The simplified formula alone would otherwise incorrectly appear to allow that value.

> [!WARNING] Distribution through a fraction
> $(a+b)/c=a/c+b/c$, but $a/(b+c)$ is not $a/b+a/c$.

## Powers and logarithms



![[Mathematics A Cheat Sheet#Rules of Indices]]

> [!WARNING] Correction to the embedded table
> The product-rule row has a typo. It should read $x^m\cdot x^n=x^{m+n}$, with the **same base** on both factors. For arbitrary real exponents, take positive bases; denominators must be nonzero.

The additional zero-power rule is $a^0=1$ for $a\neq0$.

Some integer-exponent rules also work for negative bases, but real roots and fractional powers require care. In particular, $\sqrt{x^2}=|x|$, not always $x$.

A logarithm asks for the exponent:
$$
y=\log_b x\iff b^y=x,\qquad x>0,\ b>0,\ b\neq1.
$$
Common bases are $10$, $2$ and $e$; $\ln x=\log_e x$. Product, quotient and power laws are listed in the overview. There is **no** law $\log(x+y)=\log x+\log y$.

#### Example 5

$$
\frac{(2\times10^3)(3\times10^{-2})}{4\times10^1}
=\frac64\times10^{3-2-1}=1.5.
$$
For $x>0$, $\log_{10}(30x)-\log_{10}(3x)=\log_{10}10=1$.

Squaring a product squares its numerical coefficient as well as its power of ten. Thus $(3\times10^4)^2=9\times10^8$, not $3\times10^8$. Logarithms then turn multiplication/division into addition/subtraction.[^4]

To solve $2^{3x}=10$, take logarithms on both sides:
$$
3x\ln2=\ln10\quad\Rightarrow\quad x=\frac{\ln10}{3\ln2}.
$$

## Engineering interpretation

Algebra manipulates a model; it does not remove its assumptions. $V=IR$ models an ideal linear resistor. Rearranging gives $R=V/I$ only when $I\neq0$.

For two positive resistances in parallel:
$$
\frac1R=\frac1{R_1}+\frac1{R_2}
\quad\Rightarrow\quad R=\frac{R_1R_2}{R_1+R_2}.
$$
With $R_1=100\,\Omega$ and $R_2=300\,\Omega$, $R=75\,\Omega$, smaller than either branch resistance as expected.

For an unloaded voltage divider, $V_o=V_iR_2/(R_1+R_2)$. Rearranging gives $R_1=R_2(V_i/V_o-1)$ for $V_o\neq0$. Check units: the voltage ratio is dimensionless and the answer has units of resistance.

Logarithms also describe power ratios: $G_{\rm dB}=10\log_{10}(P_o/P_i)$. A tenfold power ratio is $10\,\mathrm{dB}$; this is a ratio, not an absolute power.

[^1]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=44401 — Lecture 1 slides, Numbers and Algebra, 21 September 2026.
[^2]: https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=44792 — Lecture 1 explanatory notes. These notes paraphrase the taught material; worked examples here are original.

[^3]: https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=29ca14fd-1911-47c7-9186-b4cc01086c83 — Numbers and Algebra recording, 21 September 2026. Spoken explanations reviewed against the slides; including operator rules and fractions.
[^4]: https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=5b366901-c2b9-4fa7-9ab1-b4cd0107afe7 — Functions recording, 22 September 2026, including the algebra continuation at 9:14–20:40. Automatic captions were checked against the mathematical source material rather than copied literally.
