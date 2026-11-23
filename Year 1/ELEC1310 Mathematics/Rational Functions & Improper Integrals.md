---
permalink: y1/elec1310/rational-functions-improper-integrals
---
#### Rational Functions & Improper Integrals

- [[#Partial fractions]]
- [[#Distinct linear factors]]
- [[#Repeated factors]]
- [[#Improper integrals as limits]]
- [[#A finite endpoint with a logarithm]]
- [[#Integrals over an infinite interval]]
- [[#A singularity does not automatically mean divergence]]

## Partial fractions

A **rational function** is a quotient of polynomials, $P(x)/Q(x)$. Partial fractions replace that quotient with a sum of simpler fractions whose antiderivatives are easier to recognise.[^1]

1. If $\deg P\ge\deg Q$, use polynomial division first:
   $$\frac{P(x)}{Q(x)}=S(x)+\frac{R(x)}{Q(x)},\qquad \deg R<\deg Q.$$
2. Factor the denominator over the real numbers.
3. Write a term for **every power of every factor**.
4. Clear denominators and find the coefficients by substitution or by equating coefficients.
5. Integrate each term, then differentiate the result to check it.

The numerator must have smaller degree than its denominator factor:

- A linear factor $x-a$ takes a constant numerator: $A/(x-a)$.
- A repeated factor $(x-a)^m$ requires
  $$\frac{A_1}{x-a}+\frac{A_2}{(x-a)^2}+\cdots+\frac{A_m}{(x-a)^m}.$$
- An irreducible quadratic $q(x)$ takes a linear numerator: $(Bx+C)/q(x)$. For a repeated quadratic, include a linear numerator over each power of $q(x)$.

For example, $x^2+1$ has no real roots and cannot be factored into real linear factors. Its constant-numerator primitive involves $\arctan x$, whereas an $x$ numerator gives a logarithm by substitution.

The logarithm rule is
$$
\int\frac{f'(x)}{f(x)}\,dx=\ln|f(x)|+C
$$
on an interval where $f(x)\ne0$. Thus
$$
\int\frac{A}{x-a}\,dx=A\ln|x-a|+C,
$$
whereas for $n\ge2$,
$$
\int\frac{A}{(x-a)^n}\,dx
=\frac{A}{1-n}(x-a)^{1-n}+C.
$$
Only the first power produces a logarithm. Constants can differ on intervals separated by poles.

## Distinct linear factors

Consider the rational function[^1]
$$
\frac{x^2+1}{x^3+2x^2-5x-6}.
$$
The numerator already has smaller degree. Using the given root $x=2$,
$$
x^3+2x^2-5x-6=(x-2)(x^2+4x+3)=(x-2)(x+1)(x+3).
$$
Set
$$
\frac{x^2+1}{(x-2)(x+1)(x+3)}
=\frac{A}{x-2}+\frac{B}{x+1}+\frac{D}{x+3}.
$$
Multiplying by the full denominator gives a polynomial identity:
$$
x^2+1=A(x+1)(x+3)+B(x-2)(x+3)+D(x-2)(x+1).
$$
Substitute the roots into this identity:
$$
x=2:\quad 5=15A,\qquad
x=-1:\quad 2=-6B,\qquad
x=-3:\quad 10=10D.
$$
Hence $A=1/3$, $B=-1/3$ and $D=1$, so
$$
\boxed{\int\frac{x^2+1}{x^3+2x^2-5x-6}\,dx
=\frac13\ln|x-2|-\frac13\ln|x+1|+\ln|x+3|+C}.
$$

The root substitutions are made **after clearing denominators**.[^3] The original rational function is still undefined at $x=2,-1,-3$.

## Repeated factors

For an example with a repeated factor,[^2]
$$
\frac1{s^2(s+2)}=\frac{A}{s}+\frac{B}{s^2}+\frac{D}{s+2}.
$$
The repeated root at $s=0$ requires **both** $1/s$ and $1/s^2$ terms. After clearing denominators,
$$
1=As(s+2)+B(s+2)+Ds^2.
$$
At $s=0$, $B=1/2$. At $s=-2$, $D=1/4$. At $s=1$,
$$
1=3A+\frac32+\frac14\quad\Longrightarrow\quad A=-\frac14.
$$
Therefore
$$
\frac1{s^2(s+2)}=-\frac1{4s}+\frac1{2s^2}+\frac1{4(s+2)},
$$
$$
\boxed{\int\frac1{s^2(s+2)}\,ds
=-\frac14\ln|s|-\frac1{2s}+\frac14\ln|s+2|+C}.
$$
The variable is simply called $s$ here; this calculation itself does not require a Laplace transform. Directly recombining the fractions verifies the negative coefficient of $1/s$.

## Improper integrals as limits

An integral is **improper** when the interval is unbounded or the integrand becomes unbounded at an endpoint or an interior point. An expression undefined at an endpoint should also be checked using a one-sided limit; it may have a removable discontinuity.[^1]

For an infinite upper limit,
$$
\int_a^\infty f(x)\,dx
\equiv\lim_{b\to\infty}\int_a^b f(x)\,dx.
$$
For a problem at the lower endpoint,
$$
\int_a^b f(x)\,dx
\equiv\lim_{c\to a^+}\int_c^b f(x)\,dx.
$$
The integral **converges** only if the defining limit exists and is finite. An infinite limit means divergence, not an ordinary numerical value for the integral.

If $f$ has a singularity at $c\in(a,b)$, split at $c$ and evaluate the two limits independently. Both must converge. Likewise, an integral over the whole real line requires separate convergence on each side of a finite splitting point. Cancelling $+\infty$ with $-\infty$ is not allowed.

## A finite endpoint with a logarithm

For example, consider[^1]
$$
\int_0^4 x\ln(4x)\,dx.
$$
Although the written expression is undefined at $0$, $x\ln(4x)\to0$ as $x\to0^+$, so its discontinuity is removable. Working with the one-sided limit makes this explicit.

For $x>0$, integration by parts with $u=\ln(4x)$ and $dv=x\,dx$ gives
$$
F(x)=\frac{x^2}{2}\ln(4x)-\frac{x^2}{4}.
$$
Since $a^2\ln(4a)\to0$ as $a\to0^+$,
$$
\int_0^4x\ln(4x)\,dx
=\lim_{a\to0^+}[F(x)]_a^4
=8\ln16-4
=\boxed{32\ln2-4}.
$$
Do not substitute $0$ directly into $\ln(4x)$. Evaluate the limit of the complete endpoint expression.

## Integrals over an infinite interval

### An exponential substitution

For[^1]
$$
\int_0^\infty\frac{dx}{e^x+e^{-x}},
$$
first use a finite upper bound $b$. Multiply the integrand's numerator and denominator by $e^x$ and put $u=e^x$:
$$
\int_0^b\frac{dx}{e^x+e^{-x}}
=\int_1^{e^b}\frac{du}{u^2+1}
=\arctan(e^b)-\frac\pi4.
$$
Taking $b\to\infty$ gives $\boxed{\pi/4}$. The lower bound becomes $u=1$, not $u=0$.

### Parameter-dependent convergence

For real $\alpha$,[^1]
$$
\int_0^\infty e^{\alpha x}\,dx
=\begin{cases}
-1/\alpha,&\alpha<0,\\
\text{divergent},&\alpha\ge0.
\end{cases}
$$
For $\alpha\ne0$, integrate to a finite $b$ to get $(e^{\alpha b}-1)/\alpha$, then take the limit. Treat $\alpha=0$ separately: the integrand is $1$ and its integral grows as $b$.

### Decay multiplied by oscillation

Consider[^1]
$$
\int_1^\infty e^{-x}\cos x\,dx.
$$
Integration by parts twice gives
$$
\int e^{-x}\cos x\,dx
=\frac12e^{-x}(\sin x-\cos x)+C.
$$
Because sine and cosine remain bounded while $e^{-b}\to0$,
$$
\boxed{\int_1^\infty e^{-x}\cos x\,dx
=\frac{e^{-1}}2(\cos1-\sin1)}.
$$
The answer is negative because the integral is signed. As a further check, $|e^{-x}\cos x|\le e^{-x}$ and the latter has a finite integral on $[1,\infty)$, so this integral is absolutely convergent.

## A singularity does not automatically mean divergence

Consider $\ln|x|$ on the whole real line.[^2] On either side of zero, a correct antiderivative is
$$
F(x)=x\ln|x|-x.
$$
The singularity at zero is integrable:
$$
\int_0^1\ln x\,dx
=\lim_{a\to0^+}[x\ln x-x]_a^1=-1.
$$
However,
$$
\int_1^b\ln x\,dx=b\ln b-b+1\to+\infty.
$$
Thus $\int_{-\infty}^{\infty}\ln|x|\,dx$ diverges because of its tails. It does **not** diverge merely because $\ln|x|$ is undefined at zero. By symmetry the negative tail also diverges to $+\infty$.

> [!NOTE] Antiderivative on the negative half-line
> For $x<0$, the primitive is $x\ln(-x)-x$, not $x\ln(-x)+x$. Differentiating gives $\ln(-x)+1-1=\ln(-x)$.[^3]

[^1]: Huajie Yi, [Week 7 L1 Integration recording, 3 November 2026](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=02c5a7e1-269c-4474-bb1a-b4f701187b36): 8:23–22:50, rational functions and partial fractions; 22:51–36:06, finite-endpoint example; 36:07–40:33, exponential substitution; 40:34–43:17, parameter-dependent exponential; 43:18–44:35, damped cosine. Mathematical formulas checked against the Integration Slides, footnote 3.
[^2]: Huajie Yi, [Week 7 L2 Integration recording, 6 November 2026](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=b5b2ac39-bed4-494f-84fe-b4fa010811be): 16:35–22:32, repeated-factor partial fractions; 22:33–25:10, logarithmic improper integral. Automatic captions are not used as mathematical notation; formulas are checked by recombination or differentiation.
[^3]: Huajie Yi, [Integration Slides](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=42929), SSQ2-1–5 and ADQ6–7, PDF pages 14–21 and 32–33. The sign corrections above follow polynomial expansion and differentiation. The whole-real-line bounds for ADQ7 are supplied by its worked limits and the recording; its question heading alone omits the bounds.
