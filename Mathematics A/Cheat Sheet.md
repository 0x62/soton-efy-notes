---
permalink: maths-a/cheat-sheet
---

This document shows step by step methods for solving the common questions on the Maths A exams.

* **Section A**
	* [[#Factoring quadratics]]
	* [[#Simplifying algebraic fractions]]
	* [[#Solving algebraic inequalities]]
	* [[#Sketching the graph of a quadratic function]]
	* [[#Solving geometric progressions]]
	* [[#Solving arithmetic progressions]]
	* [[#Solving exponential equations]]
	* [[#Proving trigonometric identities]]
	* [[#Solving trigonometric equations]]
	* [[#Solving coordinate problems in polar and cartesian forms]]
	* [[#Solving matrix problems with unknowns]]
	* [[#Converting parametric equations to cartesian equations]]
	* [[#Solving triangle problems]]
	* [[#Binomial expansion with Pascal’s Triangle]]
* **Section B**
	* Work in progress

## Factoring quadratics

Factorise the expression

$$3x^2+10x-8=0$$
### Rules of Quadratics

The method you choose depends entirely on what the equation looks like. Always try "Difference of Squares" or "Basic Factoring" first, as they are fastest. Use the Formula only when you get stuck or need decimal answers.

| Rule Name | Formula / Method | Example | When to use it |
| :--- | :--- | :--- | :--- |
| **Difference of Two Squares** | $a^2 - b^2 = (a-b)(a+b)$ | $4x^2 - 9 = (2x-3)(2x+3)$ | When there are only **two terms**, they are subtracted, and both are square numbers. |
| **Basic Inspection** ($a=1$) | Find two numbers that multiply to $c$ and add to $b$. | $x^2 + 7x + 10$: $2 \times 5 = 10$, $2+5=7$. Result: $(x+2)(x+5)$. | When the number in front of $x^2$ is **1**. |
| **AC Method** ($a \neq 1$) | Multiply $a \cdot c$. Find factors of that number that add to $b$. Split the middle term and group. | $2x^2 + 7x + 3$. $2 \cdot 3 = 6$. Factors of 6 summing to 7 are 6, 1. | When there is a number in front of $x^2$ (like 2, 3, etc.) and it factors nicely. |
| **Quadratic Formula** | $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ | Used when you can't find simple factors. | When the question asks for **decimal places**, **exact form**, or you just can't spot the factors. |
| **Formula to Factor Link** | If $x = p$ is a root, then $(x-p)$ is a factor. | If formula gives $x=3$, factor is $(x-3)$. | To turn a solution back into brackets. |
### Step-by-step

#### Example 1 (AC Method)

Factorise the expression

$$3x^2+10x-8=0$$

**Step 1: Multiply $a$ and $c$**

$$a = 3 \qquad c = -8$$
$$ \text{Target Number} = 3 \times (-8) = -24 $$

**Step 2: Find the Magic Numbers**

We need two numbers that multiply to **-24** and add to **10** (the middle number).

*   Factors of 24: 1 & 24, 2 & 12, 3 & 8...
*   Check signs: $+12$ and $-2$ multiply to $-24$ and add to $+10$.
*   Numbers: **12** and **-2**.

**Step 3: Split the middle term**

Rewrite $10x$ using your new numbers.
$$ 3x^2 + 12x - 2x - 8 $$

**Step 4: Factor by Grouping**

Cut the equation in half. Factor the first two terms, then the last two.

*   First half: $3x(x + 4)$
*   Second half: $-2(x + 4)$ (Be careful with signs!)

**Step 5: Format result**

$$ (3x - 2)(x + 4) =0$$

#### Example 2 (Difference of Squares)

Factorise completely the expression

$$16x^2 - 25y^2=0$$

**Step 1: Check the pattern**
*   Are there only two terms? **Yes.**
*   Is there a minus sign? **Yes.**
*   Are they square numbers? **Yes**
	* $\sqrt{16x^2} = 4x$ 
	* $\sqrt{25y^2} = 5y$

**Step 2: Apply the rule $(a-b)(a+b)$**
$$ (4x - 5y)(4x + 5y) $$

#### Example 3 (Quadratic Formula)

Solve for x (giving your answer in exact form):

$$x^2 + 4x - 7 = 0$$

**Step 1: Identify variables**

$$a = 1 \quad b = 4 \quad c = -7$$

**Step 2: Substitute into the Formula**

$$ x = \frac{-4 \pm \sqrt{4^2 - 4(1)(-7)}}{2(1)} $$

**Step 3: Solve the expression using a calculator**

$$ x = -2 + \sqrt{11} \quad \text{or} \quad x = -2 - \sqrt{11} $$
## Simplifying algebraic fractions

Simplify the following expression, using positive indices only:

$$
\frac{(3^{-1}a^3\sqrt[4]{ b })^{-2}}{(6a^2c^{-2})^2} \times \frac{\left( b^{\frac{1}{2}}c \right)^3}{\sqrt[3]{8ac^6}}
$$

### Rules of Indices

| Rule                           | Formula                       | Example                       | When to use it                                                  |
| ------------------------------ | ----------------------------- | ----------------------------- | --------------------------------------------------------------- |
| Radical to Fractional Exponent | $\sqrt[n]{x}=x^{\frac{1}{n}}$ | $\sqrt[3]{8}=8^{\frac{1}{3}}$ | Simplify by removing roots                                      |
| Power of a Product             | $(xy)^n=x^ny^n$               | $(2a)^3=2^3a^3=8a^3$          | Parentheses surround multiple terms raised to a single exponent |
| Power of a Power               | $(x^m)^n=x^{m\times n}$       | $(a^2)^3=a^6$                 | Remove parentheses by multiplying powers                        |
| Negative Exponent              | $x^{-n}=\frac{1}{x^n}$        | $a^{-2}=\frac{1}{a^2}$        | Move a term from numerator to denominator (or vice versa)       |
| Product Rule                   | $x^m \cdot n^n=x^{m+n}$       | $a^3 \cdot a^2=a^5$           | Multiplying terms with the same base                            |
| Quotient Rule                  | $x^m \div x^n=x^{m-n}$        | $c^5\div c^2=c^3$             | Dividing terms with the same base                               |

### Step-by-step

**Step 1: Convert all roots to fractional exponents**

We change $\sqrt[4]{b}$ to $b^{1/4}$ and $\sqrt[3]{8ac^5}$ to $(8ac^6)^{1/3}$.

$$
\frac{(3^{-1}a^3b^{1/4})^{-2}}{(6ac^2c^{-2})^2} \times \frac{(b^{1/2}c)^3}{(8ac^6)^{1/3}}
$$

**Step 2: Apply the Power of a Product and Power of a Power rules**

Distribute the outer exponents into the parentheses.

* **Top Left**
	* $(3^{-1})^{-2}=3^2$
	* $(a^3)^{-2}=a^{-6}$
	* $(b^{1/4})^{-2}=b^{-2/4}=b^{-1/2}$
* **Bottom Left**
	* $6^2=36$
	* $(a^2)^2=a^4$
	* $(c^{-2})^2=c^{-4}$
* **Top Right**
	* $(b^{1/2})^3=b^{3/2}$
* **Bottom Right**
	* $8^{1/3}=2$
	* $(c^6)^{1/3}=c^2$

Rewrite the expression:

$$
\frac{3^2a^{-6}b^{-1/2}}{36a^4c^{-4}}\times \frac{b^{3/2}c^3}{2a^{1/3}c^2}
$$

**Step 3: Group the terms by type (constants, $a, b, c$)**

Combined the two fractions into one large fraction to make it easier to see like terms.

$$
\text{Numbers: } \frac{3^2}{36\cdot 2} \qquad \text{Terms: } \frac{a^{-6}\cdot b^{1/2}\cdot b^{3/2} \cdot c^3}{a^4\cdot a^{1/3}\cdot c^{-4}\cdot c^2}
$$

**Step 4: Simplify the constants**

$$
\frac{3^2}{36 \cdot 2}=\frac{9}{72}=\frac{1}{8}
$$

**Step 5: Simplify the variables**

Use Product and Quotient rules

**For $a$:**
* Numerator: $a^{-6}$
* Denominator: $a^4 \cdot a^{1/3}=a^{4+1/3}=a^{13/3}$
* Divide: $a^{-6} \div a^{13/3}=a^{-6-13/3}$
	* $-6=-\frac{18}{3}$
	* $-\frac{18}{3}-\frac{13}{3}=-\frac{13}{3}$
* Result: $a^{-31/3}$

**For $b$:**
* Combine numerator terms: $b^{-1/2} \cdot b^{3/2}=b^{-1/2+3/2}=b^{2/2}=b^1=b$
* Result: $b$

**For $c$:**
* Numerator: $c^{3}$
* Denominator: $c^{-4} \cdot c^2=c^{-2}$
* Divide: $c^3 \div c^{-2}=c^{3-(-2)}=c^{3+2}=c^5$
* Result: $c^5$

**Step 6: Assemble the result and ensure positive indices**

Current result:

$$
\frac{1}{8}\cdot b \cdot c^5 \cdot a^{-31/3}
$$

This question requires positive indices only. Use the negative exponent rule ($x^{-n}=\frac{1}{x^n}$) to move $a$ to the denominator.

$$
\frac{bc^5}{8a^{31/3}}
$$


## Sketching the graph of a quadratic function

Sketch the graph of the function below for $0\leq x\leq_{3}$, indicating where the graph intersects the coordinate axes:

$$
y=6x^2-17x+5
$$
### Rules of Quadratics

Rules for sketching a function in the format $y=ax^2+bx+c$

| **Rule Name**        | **Method**                        | Example                                                                     |
| -------------------- | --------------------------------- | --------------------------------------------------------------------------- |
| Parabola Orientation | Look at the sign of $a$           | If $a>0$, open up ($\cup$). If $a<0$, open down ($\cap$)                    |
| Y-Intercept          | Set $x=0$                         | $y=c$                                                                       |
| X-Intercepts         | Set $y=0$ and solve               | Factor $(x-p)(x-q)=0$ where roots are $p$ and $q$, or use quadratic formula |
| Endpoint Evaluation  | Substitute domain limits into $x$ | Find $y$ when $x=3$                                                         |


### Step-by-step

**Function:** $y = 6x^2 - 17x + 5$
**Domain:** $0 \le x \le 3$

**Step 1: Identify the shape**

The coefficient of $x^2$ is **6**. Since $6 > 0$, the graph is a **positive parabola** (a "U" shape).

**Step 2: Find the Y-intercept**

Set $x = 0$.
$$ y = 6(0)^2 - 17(0) + 5 $$
$$ y = 5 $$

**Step 3: Find the X-Intercepts**

Set $y = 0$ and factor the quadratic.

$$ 0 = 6x^2 - 17x + 5 $$

See [[#Factoring quadratics]] for steps.

$$
x=2.5 \qquad x=\frac{1}{3}
$$

**Step 4: Find the endpoint**

The domain ends at $x = 3$. Calculate the height of the graph at this point.

$$ y = 6(3)^2 - 17(3) + 5 $$
$$ y = 6(9) - 51 + 5 $$
$$ y = 54 - 51 + 5 $$
$$ y = 8 $$

**Step 5: Sketch curve and label**

Key features to label for full marks:
*   Y-intercept at **5**.
*   X-intercepts at **$1/3$** and **$2.5$**.
*   The curve must stop at $x=3$.

![[Example graph.png]]


## Solving algebraic inequalities 

Solve the inequality and illustrate the solution on the number line.

$$
\frac{2x-3}{3x+1}\leq 1
$$

### Rules of Algebraic Inequalities 

| Rule Name              | Formula / Method                                         | Example                                               | When to use it                                                                     |
| :--------------------- | :------------------------------------------------------- | :---------------------------------------------------- | :--------------------------------------------------------------------------------- |
| **Make RHS Zero**      | Move terms so one side is $0$.                           | $\frac{A}{B} \le 1 \rightarrow \frac{A}{B} - 1 \le 0$ | Always do this first. Never cross-multiply variables in an inequality.             |
| **Common Denominator** | Combine terms into one single fraction.                  | $\frac{x}{2} - 1 = \frac{x-2}{2}$                     | To simplify the expression into a $\frac{Numerator}{Denominator}$ format.          |
| **Critical Values**    | Set Num $= 0$ and Denom $= 0$.                           | If $\frac{x-3}{x+2} \le 0$, CVs are $3, -2$.          | To find the "tipping points" where the graph changes signs.                        |
| **Test Intervals**     | Pick a number between critical values to check the sign. | Test $x=0$: is the result $+$ or $-$?                 | To see which sections of the number line make the inequality true.                 |
| **Excluded Values**    | Denominator $\neq 0$.                                    | If denominator is $x-1$, then $x \neq 1$.             | Always use an **Open Circle** ($\circ$) for values that make the denominator zero. |
### Step-by-step

**Step 1: Make the Right-Hand Side Zero**

Subtract 1 from both sides. 

$$
\frac{2x-3}{3x+1}-1\leq 0
$$

**Step 2: Combine into a single fraction**

Rewrite 1 as $\frac{3x+1}{3x+1}$ to get a common denominator.

$$ \frac{2x - 3}{3x + 1} - \frac{3x + 1}{3x + 1} \leq 0 $$

Combine the numerators (be careful distributing negative signs).

$$ \frac{(2x - 3) - (3x + 1)}{3x + 1} \leq 0 $$
$$ \frac{2x - 3 - 3x - 1}{3x + 1} \leq 0 $$
$$ \frac{-x - 4}{3x + 1} \leq 0 $$

**Step 3: Find critical values**

Look for where the numerator and denominator is zero.

* ***Numerator:** 
	* $-x - 4 = 0$
	* $x = -4$
    * Since the inequality is $\leq$ (inclusive), this is a solution.
    * **Mark:** Solid Circle ($\bullet$).
* ***Denominator:**
	* $3x + 1 = 0$
	* $x = -1/3$
    * The denominator can never be zero (undefined).
    * **Mark:** Open Circle ($\circ$).

**Step 4: Test the intervals**

Critical points are $-4$ and $-1/3$. This splits the number line into three regions. Pick a number that satisfies the region (not the critical point itself). The result must be **Negative** ($\leq 0$).

| Region              | Test Value | Evaluation                                                                              | Result |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- | ------ |
| $x<-4$              | $x=-5$     | $\frac{-(-5) - 4}{3(-5) + 1} = \frac{5 - 4}{-15 + 1} = \frac{1}{-14} = \text{Negative}$ | Pass   |
| $-4<x<-\frac{1}{3}$ | $x=-1$     | $\frac{-(-1) - 4}{3(-1) + 1} = \frac{1 - 4}{-3 + 1} = \frac{-3}{-2} = \text{Positive}$  | Fail   |
| $x>-\frac{1}{3}$    | $x=0$      | $\frac{-(0) - 4}{3(0) + 1} = \frac{-4}{1} = \text{Negative}$                            | Pass   |

**Step 5: Write the final solution**

The inequality is true when $x\leq-4$, or when $x>-\frac{1}{3}$

$$
x\leq-4 \qquad or \qquad x>-\frac{1}{3}
$$

**Step 6: Draw on the number line**

Using a solid circle for an inclusive inequality, and an open circuit for an exclusive inequality.

```
<===========●             ○=================>
<---|---|---|---|---|---|---|---|---|---|--->
   -6  -5  -4  -3  -2  -1   0   1   2
                          ^
                        -1/3
```

## Solving geometric progressions

Most geometric progression problems are actually [[#Solving simultaneous equation|simultaneous equation]] problems in disguise. You are usually given two facts, which create two equations with two unknowns ($a$ and $r$).

* $a$ = The first term
* $r$ = The common ratio (what you multiply by to get the next term)

### Rules of Geometric Progressions

| Rule Name                  | Formula                      | When to use it                                                                                                    |
| :------------------------- | :--------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| **The $n$-th Term**        | $T_n = ar^{n-1}$             | When the problem gives you a specific term (e.g., "The 3rd term is...").                                          |
| **Sum to Infinity**        | $S_{\infty} = \frac{a}{1-r}$ | When the problem mentions "infinite progression" or "converges." **Note:** Only works if $-1 < r < 1$.            |
| **Sum of first $n$ terms** | $S_n = \frac{a(1-r^n)}{1-r}$ | When adding a specific number of terms (e.g., "Sum of the first 3 terms").                                        |
| **Elimination Strategy**   | Divide Eq(1) by Eq(2)        | Usually divide or substitute to eliminate $a$ and find $r$.                                                       |
| **"Positive/Negative"**    | Check $r$                    | If terms alternate signs ($+,-,+,-$), then $r$ must be negative. If terms are all positive, $r$ must be positive. |
### Step-by-step

#### Example 1

> The second term of an infinite geometric progression is 2, and the sum of its second and third terms is 1. Determine the sum of the progression.

**Step 1: Write the equations**

*  Eq 1: 2nd term is 2, therefore $2 = ar^{2-1}=ar^1=ar$
*  Eq 2: Sum of 2nd and 3rd is 1, therefore $ar + ar^2 = 1$

**Step 2: Solve for $r$**

We know from Eq 1 that $ar = 2$. Substitute this directly into Eq 2.
$$ 2 + ar^2 = 1 $$
Substitute $ar=2$ again:
$$ 2 + 2r = 1 $$
$$ 2r = -1 $$
$$ \boxed{r = -0.5 }$$

**Step 3: Solve for $a$**

$$ a(-0.5) = 2 \qquad \boxed{a = -4 }$$

**Step 4: Answer the specific question (sum to infinity)**

Use the $S_{\infty}$ formula:

$$ S_{\infty} = \frac{a}{1-r} = \frac{-4}{1 - (-0.5)} = \frac{-4}{1.5} $$
$$\boxed{ S_{\infty} = -\frac{8}{3} }$$

#### Example 2

> The third term of a geometric progression, which has both positive and negative terms, is 1. The sum of its first three terms is 3. What is its fourth term?


**Step 1: Write the equations**

*  Eq 1: 3rd term is 1, therefore $1=ar^{2}$
*  Eq 2: Sum of first 3 is 3, therefore
	* $ar^0 + ar^1 + ar^2 = 3$
	* $a+ar+ar^2=3$

**Step 2: Solve for $r$ using Substitution**

Isolate $a$ from the first equation
$$a = \frac{1}{r^2}$$
Substitute into Eq 2:
$$ \frac{1}{r^2} + \frac{1}{r^2}(r) + 1 = 3 $$
$$ \frac{1}{r^2} + \frac{1}{r} = 2 $$

Multiply the whole equation by $r^2$ to remove fractions:

$$ 1 + r = 2r^2 $$

Rearrange into a quadratic and [[#Factoring quadratics|factor]]:

$$ 2r^2 - r - 1 = 0 $$

$$
r=1 \qquad or \qquad r=-0.5
$$

**Step 3: Check validity**

The problem states "has both positive and negative terms."

*   If $r = 1$, all terms are the same (all positive).
*   Therefore, **$r = -0.5$**.

**Step 4: Find $a$**

$$ a = \frac{1}{(-0.5)^2} = \frac{1}{0.25} = 4 $$

**Step 5: Answer the specific question (find the 4th term)**

$$ T_4 = ar^3 = 4 \cdot (-0.5)^3 $$
$$ T_4 = 4 \cdot (-0.125) = -0.5 $$


#### Example 3

> The sum of all terms of an infinite geometric progression with positive terms is 48; and the sum of its first two terms is 36. Find the second term of the progression.

**Step 1: Write the equations**

* Eq 1: Sum to infinity is 48, therefore:
	* $\frac{a}{1-r} = 48$
	* $a = 48(1-r)$
* Eq 2: Sum of first two is 36, therefore:
	* $a + ar = 36$
	* $a(1+r) = 36$

**Step 2: Solve for $r$**

Substitute Eq 1 ($a$) into Eq 2:

$$ 48 \cdot (1-r) \cdot (1+r) = 36 $$
$$ 48(1 - r^2) = 36 $$
$$ 1 - r^2 = \frac{36}{48} = \frac{3}{4} $$
$$ r^2 = 1 - \frac{3}{4} = \frac{1}{4} $$
$$ r = \pm \frac{1}{2} $$

**Step 3: Check validity**

The problem states "positive terms," so $r$ cannot be negative.

$$ \boxed{r = 0.5} $$

**Step 4: Find $a$**

Using Eq 1:
$$ a = 48(1 - 0.5) = 24 $$

**Step 5: Answer the specific question (Find the 2nd term)**

The second term is $ar$.
$$ ar = 24 \cdot 0.5 = 12 $$


## Solving arithmetic progressions

Like [[#Solving geometric progressions|geometric progressions]], these problems are usually solved using [[#Solving simultaneous equation|simultaneous equations]]. The main difference is that in APs we usually subtract equations to eliminate $a$.

* $a$ = the first term
* $d$ = the common difference (what you add to get the next term)
* $n$ = the number of terms
### Rules of Arithmetic Progressions

| Rule Name | Formula | When to use it |
| :--- | :--- | :--- |
| **The $n$-th Term** | $T_n = a + (n-1)d$ | When the problem gives you a specific term (e.g., "The 5th term is..."). |
| **Sum of $n$ terms** (Standard) | $S_n = \frac{n}{2}[2a + (n-1)d]$ | When adding terms and you **don't** know the last term. This is the most common formula. |
| **Sum of $n$ terms** (Short) | $S_n = \frac{n}{2}(a + l)$ | When you know the first term ($a$) and the last term ($l$). |
| **Elimination Strategy** | Subtract: Eq(2) - Eq(1) | To find $d$ easily. Since both equations usually start with $a$, subtracting them cancels the $a$ out immediately. |
| **Integer Check** | $n$ must be a whole number | If solving a quadratic for $n$ results in a fraction or negative number, discard it. You cannot have the "3.5th" term. |

### Step-by-step

#### Example 1

> The sum of the first 6 terms of an arithmetic progression is 30, and the sum of the first 10 terms of this progression is 130. Find the common difference of the progression, and the value of its second term.

**Step 1: Write the equations using the Sum Formula**

For $n=6$:

$$ \frac{6}{2}[2a + 5d] = 30 $$
$$ 3(2a + 5d) = 30 $$
$$ 2a + 5d = 10\quad \text{(Eq 1)} $$
 For $n=10$:
    $$ \frac{10}{2}[2a + 9d] = 130 $$
$$ 5(2a + 9d) = 130 $$
$$ 2a + 9d = 26 \quad \text{(Eq 2)} $$

**Step 2: Solve for $d$ (elimination)**

Subtract Eq 1 from Eq 2:
$$ (2a + 9d) - (2a + 5d) = 26 - 10 $$
$$ 4d = 16 $$
$$ \boxed{d = 4} $$

**Step 3: Solve for $a$**
Substitute $d=4$ back into Eq 1:
$$ 2a + 5(4) = 10 $$
$$ 2a + 20 = 10 $$
$$ 2a = -10 $$
$$ \boxed{a = -5} $$

#### Example 2

> The fifth term of an arithmetic progression is 5 and its eighth term is 14. How many terms of the progression (starting with the first term) must be taken so that their sum is 65?

**Step 1: Write the equations using the $n$-th Term Formula**

Use $T_n = a + (n-1)d$.

* Eq 1: 5th term is 5, therefore: $a + 4d = 5$
* Eq 2: 8th term is 14, therefore: $a + 7d = 14$

**Step 2: Find $a$ and $d$**

Subtract Eq 1 from Eq 2:
$$ (a + 7d) - (a + 4d) = 14 - 5 $$
$$ 3d = 9 \qquad \boxed{d = 3} $$

Substitute $d=3$ into Eq 1:
$$ a + 4(3) = 5 $$
$$ a + 12 = 5 \qquad \boxed{a = -7} $$

**Step 3: Set up the Sum equation**

We need to find $n$ when Sum = 65.
$$ S_n = \frac{n}{2}[2a + (n-1)d] = 65 $$
$$ \frac{n}{2}[2(-7) + (n-1)3] = 65 $$

Multiply by 2 to clear the fraction:
$$ n(-14 + 3n - 3) = 130 $$
$$ n(3n - 17) = 130 $$
$$ 3n^2 - 17n - 130 = 0 $$

**Step 4: Solve the Quadratic Equation**

We need two numbers that multiply to $-390$ ($3 \times -130$) and add to $-17$. (The numbers are $-30$ and $13$). See [[#factoring quadratics]].
$$ 3n^2 - 30n + 13n - 130 = 0 $$
$$ 3n(n - 10) + 13(n - 10) = 0 $$
$$ (3n + 13)(n - 10) = 0 $$
$$
\boxed{n=-\frac{13}{3}} \qquad \text{or} \qquad \boxed{n=10}
$$

**Step 5: Check validity**
$n$ represents the count of terms, so it must be a positive integer. Therefore, **$n = 10$**.

#### Example 3

> The common difference of an arithmetic progression is −3 and its eleventh term $a_{11}$ is 2. Determine the first term of the progression and the sum of the first 13 terms.

**Step 1: Write the knowns**

$d = -3$
$T_{11} = 2$

**Step 2: Find the first term ($a$)**

Use $T_{11} = a + 10d$:
$$ 2 = a + 10(-3) $$
$$ 2 = a - 30 $$
$$ \boxed{a = 32} $$

**Step 3: Find the Sum of the first 13 terms**

Use $S_{13} = \frac{13}{2}[2a + (13-1)d]$:
$$ S_{13} = \frac{13}{2}[2(32) + 12(-3)] $$
$$ S_{13} = 6.5 [64 - 36] $$
$$ S_{13} = 6.5 [28] $$
$$\boxed{S_{13} = 182} $$


## Solving exponential equations

Find all solutions to the equation (to 3dp):

$$
24\cdot 5^{x-1}+25^x=1
$$

### Rules of Exponential Equations

This problem requires a technique often called "Hidden Quadratics" (or Substitution). You must transform the equation so that it looks like a standard quadratic ($ax^2 + bx + c = 0$).

| Rule Name                          | Formula                                       | Example                                     | When to use it                                                                                     |
| :--------------------------------- | :-------------------------------------------- | :------------------------------------------ | :------------------------------------------------------------------------------------------------- |
| **Base Match**                     | $25^x = (5^2)^x = (5^x)^2$                    | Change $9^x$ to $(3^x)^2$.                  | When you see bases that are powers of each other (like 5 and 25, or 2 and 4).                      |
| **Split Exponents (addition)**     | $a^{m+n} = a^m\cdot a^n$                      | $5^{x+1}=5^x \cdot 5^1$                     | To separate the $x$ from the number in the power, isolating the $5^x$ term.                        |
| **Split Exponents (substraction)** | $a^{m-n} = \frac{a^m}{a^n}$                   | $5^{x-1} = \frac{5^x}{5^1} = \frac{5^x}{5}$ | To separate the $x$ from the number in the power, isolating the $5^x$ term.                        |
| **Substitution**                   | Let $u = 5^x$                                 | $u^2 - 6u + 5 = 0$                          | To turn a scary exponential equation into a simple quadratic equation.                             |
| **Logarithms**                     | $a^x = b \rightarrow x = \frac{\ln b}{\ln a}$ | $5^x = 7 \rightarrow x = 1.209$             | To solve for $x$ once you have found the value of the substitute variable $u$.                     |
| **Validity Check**                 | $a^x > 0$                                     | If $5^x = -5$, no solution.                 | **Crucial:** Exponential terms can never result in a negative number. Discard negative $u$ values. |

### Step-by-step

**Step 1: Normalise the Bases and Exponents**

We want every term with an $x$ to look exactly the same so we can substitute it. We aim to make everything look like **$5^x$**.

$$
25^x=(5^x)^2
$$
$$
5^{x-1}=\frac{5^x}{5^1}=\frac{5^x}{5}
$$

Rewrite the equation:

$$ 24 \left( \frac{5^x}{5} \right) + (5^x)^2 = 1 $$

**Step 2: Use substitution**

Let $u=5^x$. Substitute $u$ into the equation:

$$
\frac{24u}{5}+u^2=1
$$

**Step 3: Solve the quadratic equation**

Get rid of the fraction by multiplying the entire equation by **5**:

$$ 24u + 5u^2 = 5 $$

Rearrange into standard quadratic form:

$$ 5u^2 + 24u - 5 = 0 $$

[[#Factoring quadratics|Factor the quadratic]]:

*   Multiply $a \cdot c$: $5 \cdot -5 = -25$.
*   Find numbers that multiply to -25 and add to 24. (The numbers are **25** and **-1**).
*   Rewrite middle term: $5u^2 + 25u - 1u - 5 = 0$
*   Factor groups: $5u(u + 5) - 1(u + 5) = 0$
*   Result: $(5u - 1)(u + 5) = 0$

Solutions for $u$:

$$
u=\frac{1}{5} \qquad \text{or} \qquad u=-5
$$

**Step 4: Back-substitute and solve for $x$**

Now we replace $u$ back with $5^x$ to find the real solution.

**Case A:** $u = -5$
$$ 5^x = -5 $$

**Impossible.** A positive base ($5$) raised to any power cannot equal a negative number. Reject this solution.

**Case B:** $u = \frac{1}{5}$
$$ 5^x = \frac{1}{5} $$
$$ 5^x = 5^{-1} $$
By equating the exponents:

$$ x = -1 $$


> [!TIP]  If the result wasn't a clean integer, you would take the log of both sides: $x = \frac{\ln(0.2)}{\ln(5)}$

As the question asks for 3 decimal places:

$$
\boxed{x=-1.000}
$$





## Proving trigonometric identities

Show that the following expression is true:

$$
\frac{1+\sin B-\cos (2B)}{\cos B+\sin(2B)}=\tan B
$$

### Rules of Trigonometric Identities

Proving identities usually involves converting "Double Angles" (like $2B$) into single angles ($B$), and then simplifying. The trickiest part is choosing the right version of the Cosine Double Angle rule.

| Rule Name                  | Formula                                     | When to use it                                                                                                                       |
| :------------------------- | :------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| **Double Angle (Sine)**    | $\sin(2A) = 2\sin A \cos A$                 | Whenever you see $\sin(2x)$. There is only one version of this rule, so just apply it immediately.                                   |
| **Double Angle (Cos) V1**  | $\cos(2A) = \cos^2 A - \sin^2 A$            | The standard form. Useful if you need to factor difference of squares later.                                                         |
| **Double Angle (Cos) V2**  | $\cos(2A) = 2\cos^2 A - 1$                  | **Strategic Choice:** Use this if there is a **"-1"** in the expression that you want to cancel out (e.g., $1 + \cos(2A)$).          |
| **Double Angle (Cos) V3**  | $\cos(2A) = 1 - 2\sin^2 A$                  | **Strategic Choice:** Use this if there is a **"1 -"** in the expression. The subtraction will cancel the 1s (e.g., $1 - \cos(2A)$). |
| **Tangent Identity**       | $\tan A = \frac{\sin A}{\cos A}$            | Used at the very end to convert a fraction into $\tan$.                                                                              |
| **Pythagorean Identity**   | $\sin^2 A + \cos^2 A = 1$                   | Used to swap $\sin^2$ for $(1-\cos^2)$ or vice versa.                                                                                |
| **Cos Sum Formula**        | $\cos(A+B) = \cos A \cos B - \sin A \sin B$ | To expand terms like $\cos(x+y)$.                                                                                                    |
| **Cos Difference Formula** | $\cos(A-B) = \cos A \cos B + \sin A \sin B$ | To expand terms like $\cos(x-y)$.                                                                                                    |
| **Difference of Squares**  | $(a-b)(a+b) = a^2 - b^2$                    | To multiply expanded terms quickly without doing a long "FOIL" process.                                                              |
### Step-by-step

**Step 1: Expand the denominator**

The denominator is $\cos B + \sin(2B)$. There is only one rule for $\sin(2B)$, so we apply it directly.

$$ \sin(2B) = 2\sin B \cos B $$

Denominator becomes:
$$ \cos B + 2\sin B \cos B $$

Both terms share a $\cos B$, so factor it out:

$$ \cos B (1 + 2\sin B) $$

Rewrite the equation:

$$
\frac{1+\sin B-\cos(2B)}{\cos B(1+2\sin B)}
$$

**Step 2: Expand the numerator**

The numerator is $1 + \sin B - \cos(2B)$. We need to replace $\cos(2B)$. We have three choices (see [[#Rules of Trigonometric Identities]]).

We have a **positive 1** at the start ($1 + ...$) and we are **subtracting** $\cos(2B)$. To make the algebra easiest, we want to eliminate that "1".

If we use Version 3, the "1" will cancel out.

$$ 1 + \sin B - (1 - 2\sin^2 B) $$

*Be careful applying the negative sign outside the bracket!*

$$ 1 + \sin B - 1 + 2\sin^2 B $$

Simplify (the $1$ and $-1$ disappear):
$$ \sin B + 2\sin^2 B $$

Both terms share a $\sin B$, so factor it out:

$$ \sin B (1 + 2\sin B) $$

Rewrite the equation:

$$
\frac{\sin B(1+2\sin B)}{\cos B(1+2\sin B)}
$$

**Step 3: Simplify**

Cancel out the $(1+2\sin B)$ terms:

$$
\frac{\sin B}{\cos B}=\tan B
$$



## Solving trigonometric equations

Determine all solutions of the equation for $0\leq x\leq 2\pi$

$$
\sin(2x)+2\cos^2(x)=2
$$

### Rules of Trigonometric Equations

> [!WARNING] Never divide by a variable term (like dividing by $\sin x$) to cancel it
> Always subtract and factor instead

| Rule Name                 | Formula                                                                                      | When to use it                                                                                                                               |
| :------------------------ | :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| **Double Angle (Sine)**   | $\sin(2A) = 2\sin A \cos A$                                                                  | To change the $2x$ angle into single $x$ angles.                                                                                             |
| **Double Angle (Cosine)** | $\cos(2A) = \begin{cases} 2\cos^2 A - 1 \\ 1 - 2\sin^2 A \\ \cos^2 A - \sin^2 A \end{cases}$ | If equation has $\cos x$, use $2\cos^2 A - 1$.<br>If equation has $\sin x$, use $1 - 2\sin^2 A$.<br>If it has squares of both, use the third |
| **Pythagorean Identity**  | $\sin^2 A + \cos^2 A = 1$                                                                    | To turn a number (like $1$) into variables, OR to swap $\sin^2$ for $(1-\cos^2)$ to make the equation match.                                 |
| **Tangent Identity**      | $\frac{\sin A}{\cos A} = \tan A$                                                             | Useful when you have $\sin x = \cos x$. Divide by cosine to turn it into $\tan x = 1$.                                                       |
| **Zero Product Property** | If $A \times B = 0$, then...                                                                 | Always try to get one side to equal **0** and then factor. Solve each bracket separately.                                                    |
| **Symmetry Rules**        | **Sin:** $\pi - \text{Ans}$<br>**Cos:** $2\pi - \text{Ans}$<br>**Tan:** $\pi + \text{Ans}$   | Use this immediately after getting the first answer from the calculator (or algebra) to find the missing pair in the $0 \to 2\pi$ range.     |

### Step-by-step

**Step 1: Unify the angles**

We have a $2x$ and an $x$. We must expand the double angle. Using $\sin(2x) = 2\sin x \cos x$:

$$ 2\sin x \cos x + 2\cos^2 x = 2 $$

**Step 2: Simplify the equation**

Notice every term is multiplied by 2. Let's divide the whole equation by 2 to make it cleaner.

$$ \sin x \cos x + \cos^2 x = 1 $$

**Step 3: Eliminate the constant**

We cannot factor easily while there is a "1" on the right side. We know that $1 = \sin^2 x + \cos^2 x$. Substitute this into the right side.

$$ \sin x \cos x + \cos^2 x = \sin^2 x + \cos^2 x $$

Now, subtract $\cos^2 x$ from both sides. They cancel out.

$$ \sin x \cos x = \sin^2 x $$

**Step 4: Factorise**

Move everything to one side to make it equal zero.

$$ \sin x \cos x - \sin^2 x = 0 $$

Factor out the common term $\sin x$:
$$ \sin x (\cos x - \sin x) = 0 $$

**Step 5: Solve for the two cases**

Now we have two separate simple equations to solve.

**Case A:**
$$ \sin x = 0 $$

Look at the unit circle for $0 \le x \le 2\pi$. Sine is the y-coordinate. The y-coordinate is 0 at the start, middle, and end of the rotation.

$$ x = 0, \quad x = \pi, \quad x = 2\pi $$

**Case B:**
$$ \cos x - \sin x = 0 $$
$$ \sin x = \cos x $$
Divide both sides by $\cos x$:

$$ \tan x = 1 $$

Tangent is positive (1) in the **1st** and **3rd** quadrants.
*   **1st Quadrant:** Inverse tan of 1 is $\frac{\pi}{4}$.
*   **3rd Quadrant:** $\pi + \frac{\pi}{4} = \frac{5\pi}{4}$.

**Step 6: Collect final answers**

List all solutions found in order:

$$ x = 0, \quad \frac{\pi}{4}, \quad \pi, \quad \frac{5\pi}{4}, \quad 2\pi $$

## Solving coordinate problems in polar and cartesian forms

Two holes in the plane are given: Hole 1 is at $(5, -3\sqrt{ 3 })$ in Cartesian coordinates, and hole 2 at $[2, \angle 60^{\circ}]$ in polar coordinates. Determine the polar coordinates of Hole 2 relative to Hole 1.

### Rules of Coordinate Geometry

To solve these kinds of problems, we must standardise the coordinates (turn everything into Cartesian $x,y$), do the subtractions, and then convert back to Polar.

| Rule Name                                | Formula                                                                                                                                                                            | When to use it                                                                                                                                                           |
| :--------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Polar to Cartesian**                   | $x = r \cos \theta$ <br> $y = r \sin \theta$                                                                                                                                       | To convert the polar point $[2, \angle 60^\circ]$ into $(x,y)$ numbers so we can do addition/subtraction.                                                                |
| **"Relative To"**                        | $\vec{v} = \text{Target} - \text{Start}$                                                                                                                                           | When finding position **B relative to A**, calculation is always **Coordinates of B minus Coordinates of A**.                                                            |
| **Cartesian to Polar (Magnitude)**       | $r = \sqrt{x^2 + y^2}$                                                                                                                                                             | To find the distance (radius) of the final vector.                                                                                                                       |
| **Cartesian to Polar (Reference Angle)** | $\alpha = \tan^{-1} \left( \left\lvert \frac{y}{x} \right\rvert \right)$                                                                                                           | Use this to find the **Reference Angle** ($\alpha$). Ignore the negative signs of $x$ and $y$ for this step (treat them as positive).                                    |
| **Quadrant Check (Final Angle)**         | **Q1 (+,+):** $\theta = \alpha$ <br> **Q2 (-,+):** $\theta = 180^\circ - \alpha$ <br> **Q3 (-,-):** $\theta = 180^\circ + \alpha$ <br> **Q4 (+,-):** $\theta = 360^\circ - \alpha$ | **Crucial:** Your calculator only gives the reference angle. You must sketch the point to see which quadrant it is in, then apply these rules to find the true $\theta$. |

### Step-by-step

**Step 1: Convert Hole 2 to Cartesian Coordinates**

We need both points in $(x, y)$ format to subtract them.

$$ x_2 = 2 \cos(60^\circ) = 1 $$
$$ y_2 = 2 \sin(60^\circ) = \sqrt{3} $$
$$
\text{Hole 2 = }(1, \sqrt{ 3 })
$$

**Step 2: Calculate the relative position**

We want the position of Hole 2 relative to Hole 1. Think of Hole 1 as the center $(0,0)$. We need to find how far we moved to get to Hole 2.

$$ \text{Relative Position} = (\text{Hole 2}) - (\text{Hole 1}) $$

**X-coordinate:**
$$ \Delta x = 1 - 5 = -4 $$

**Y-coordinate:**
$$ \Delta y = \sqrt{3} - (-3\sqrt{3}) =4\sqrt{ 3 }$$

The relative coordinates are **$(-4, 4\sqrt{3})$**.

**Step 3: Determine the quadrant**

Look at the signs of our relative coordinates:

*   $x$ is **Negative** (-4)
*   $y$ is **Positive** ($+6.93$)

Going "Left and Up" places us in the 2nd Quadrant. We will need to use the rule $\theta = 180^\circ - \text{reference angle}$.

**Step 4: Convert back to polar coordinates**

Find the radius $r$:

$$ r = \sqrt{(-4)^2 + (4\sqrt{3})^2}=8 $$

First, find the reference angle ($\alpha$) ignoring the negative signs.

$$ \tan \alpha = \frac{4\sqrt{3}}{4} = \sqrt{3} $$
$$ \alpha = \tan^{-1}(\sqrt{3}) = 60^\circ $$

Now, apply the Quadrant 2 Rule:

$$ \theta = 180^\circ - 60^\circ = 120^\circ $$

The question asks for 2 decimal places.

$$ r = 8.00 \qquad  \theta = 120.00^\circ $$
$$
[8.00, \angle 120.00^\circ] 
$$


## Solving matrix problems with unknowns

These problems always follow the same pattern: Perform the Matrix Operation $\rightarrow$ Extract an Equation $\rightarrow$ Solve for $x$.

### Rules of Matrix Algebra

| Rule Name | Formula / Concept | Example | When to use it |
| :--- | :--- | :--- | :--- |
| **Transpose** | Swap Rows and Columns | $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}^T = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$ | When you see the symbol **$A^T$**. The first column becomes the first row. |
| **Matrix Multiplication** | Row $\cdot$ Column | Multiply the row of the first matrix by the column of the second. | When calculating $BA$ or $A^T A$. **Order matters!** $AB \neq BA$. |
| **Resulting Size** | $(m \times n) \cdot (n \times p) = (m \times p)$ | $(2 \times 3) \cdot (3 \times 2) \rightarrow 2 \times 2$ result. | Check this before multiplying to make sure you are creating the right shape. |
| **Equating Matrices** | $M = N \Rightarrow M_{ij} = N_{ij}$ | $\begin{pmatrix} x & 5 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} 3 & 5 \\ 2 & 4 \end{pmatrix} \Rightarrow x=3$ | Use this to extract a simple algebra equation from the matrix. |
| **Determinant ($2 \times 2$)** | $ad - bc$ | $\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$ | When the question mentions "determinant is..." or $\det(M) = 0$. |

### Step-by-step

#### Example 1

> Matrices $A,B,C$ are given as $A=\begin{pmatrix} 3 & x \\ -1 & 2 \end{pmatrix}, \quad B=\begin{pmatrix} -1 & 1 \\ -2 & 3 \end{pmatrix}, \quad C=\begin{pmatrix} -1 & 1 \\ -1 & 1 \end{pmatrix}$.
> 
> Determine all values of $x$ such that $AB-4C$ has determinant 0.

**Step 1: Calculate $AB$ (matrix multiplication)**

Multiple Matrix A (Rows) by Matrix B (Columns)

$$ A = \begin{pmatrix} 3 & x \\ -1 & 2 \end{pmatrix}, \quad B = \begin{pmatrix} -1 & 1 \\ -2 & 3 \end{pmatrix} $$

*   **Top Left:** $(3)(-1) + (x)(-2) = -3 - 2x$
*   **Top Right:** $(3)(1) + (x)(3) = 3 + 3x$
*   **Bottom Left:** $(-1)(-1) + (2)(-2) = 1 - 4 = -3$
*   **Bottom Right:** $(-1)(1) + (2)(3) = -1 + 6 = 5$

$$ AB = \begin{pmatrix} -3-2x & 3+3x \\ -3 & 5 \end{pmatrix} $$

**Step 2: Calculate $4C$ (scalar multiplication)**

Multiply every element in Matrix $C$ by 4.

$$ C = \begin{pmatrix} -1 & 1 \\ -1 & 1 \end{pmatrix} $$
$$ 4C = \begin{pmatrix} -4 & 4 \\ -4 & 4 \end{pmatrix} $$

**Step 3: Calculate $AB-4C$ (matrix subtraction)**

Subtract the corresponding elements of Step 2 from Step 1. Be careful with double negatives (subtracting a negative number becomes addition).

*   **Top Left:** $(-3 - 2x) - (-4) = -3 - 2x + 4 = \mathbf{1 - 2x}$
*   **Top Right:** $(3 + 3x) - 4 = \mathbf{3x - 1}$
*   **Bottom Left:** $(-3) - (-4) = -3 + 4 = \mathbf{1}$
*   **Bottom Right:** $(5) - (4) = \mathbf{1}$

$$ \text{Resulting Matrix} = \begin{pmatrix} 1-2x & 3x-1 \\ 1 & 1 \end{pmatrix} $$

**Step 4: Calculate the determinant**

Apply the formula $ad - bc$ to the resulting matrix.

$$ \det = (1-2x)(1) - (3x-1)(1) $$

Simplify the expression:
$$ \det = (1 - 2x) - (3x - 1) $$
$$ \det = 1 - 2x - 3x + 1 $$
$$ \det = 2 - 5x $$

**Step 5: Solve for $x$**

The question states the determinant is equal to 0.

$$ 2 - 5x = 0 $$
$$ 2 = 5x $$
$$ \boxed{x = \frac{2}{5} }$$

#### Example 2

> The matrix A is given as $A = \begin{pmatrix} 1 & 4 \\ 0 & 2-x \\ 3 & -2 \end{pmatrix}$
> 
> Determine all values of $x$ such that $A^T A = \begin{pmatrix} 10 & -2 \\ -2 & 22 \end{pmatrix}$.


**Step 1: Find $A^T$ (transpose)**

Convert columns to rows.

$$ A^T = \begin{pmatrix} 1 & 0 & 3 \\ 4 & 2-x & -2 \end{pmatrix} $$

**Step 2: Perform the multiplication of $A^TA$**

We are multiplying a $(2 \times 3)$ by a $(3 \times 2)$. The result will be a $(2 \times 2)$ matrix.

$$ \begin{pmatrix} 1 & 0 & 3 \\ 4 & 2-x & -2 \end{pmatrix} \begin{pmatrix} 1 & 4 \\ 0 & 2-x \\ 3 & -2 \end{pmatrix} $$

Let's calculate the elements:

* **Top Left:** $(1)(1) + (0)(0) + (3)(3) = 1 + 0 + 9 = \mathbf{10}$
* **Top Right:** $(1)(4) + (0)(2-x) + (3)(-2) = 4 + 0 - 6 = \mathbf{-2}$
* **Bottom Left:** $(4)(1) + (2-x)(0) + (-2)(3) = 4 + 0 - 6 = \mathbf{-2}$
* **Bottom Right:** $(4)(4) + (2-x)(2-x) + (-2)(-2) = 16 + (2-x)^2 + 4$

So, the calculated matrix is:
$$ \begin{pmatrix} 10 & -2 \\ -2 & 20 + (2-x)^2 \end{pmatrix} $$

**Step 3: Equate to the target matrix**

$$ \begin{pmatrix} 10 & -2 \\ -2 & 20 + (2-x)^2 \end{pmatrix} = \begin{pmatrix} 10 & -2 \\ -2 & 22 \end{pmatrix} $$

For these matrices to be equal, the bottom-right corners must match:

$$ 20 + (2-x)^2 = 22 $$

**Step 4: Solve for $x$**

$$ (2-x)^2 = 2 $$
$$ 2 - x = \pm \sqrt{2} $$
$$ -x = -2 \pm \sqrt{2} $$
$$ x = 2 \mp \sqrt{2} $$

#### Example 3

> Given matrix A and B:
> $$ A = \begin{pmatrix} 1 & x \\ 0 & 2 \\ -2 & 1+x \end{pmatrix} \quad B = \begin{pmatrix} 3 & -1 & 2 \\ -2 & 1 & -5 \end{pmatrix} $$
> Find $x$ such that $\det(BA) = 102$.

**Step 1: Calculate the product $BA$**

> [!TIP] Pay attention to the order. $B$ is first.

$B$ is $(2 \times 3)$ and $A$ is $(3 \times 2)$. The result is a **$2 \times 2$** matrix.

$$ BA = \begin{pmatrix} 3 & -1 & 2 \\ -2 & 1 & -5 \end{pmatrix} \begin{pmatrix} 1 & x \\ 0 & 2 \\ -2 & 1+x \end{pmatrix} $$

* **Top Left:** $(3)(1) + (-1)(0) + (2)(-2) = 3 + 0 - 4 = \mathbf{-1}$
* **Top Right:** $(3)(x) + (-1)(2) + (2)(1+x) = 3x - 2 + 2 + 2x = \mathbf{5x}$
* **Bottom Left:** $(-2)(1) + (1)(0) + (-5)(-2) = -2 + 0 + 10 = \mathbf{8}$
* **Bottom Right:** $(-2)(x) + (1)(2) + (-5)(1+x) = -2x + 2 - 5 - 5x = \mathbf{-7x - 3}$

Resulting Matrix $BA$:

$$ \begin{pmatrix} -1 & 5x \\ 8 & -7x-3 \end{pmatrix} $$

**Step 2: Find the determinant ($ad-bc$)**

$$ \det(BA) = (-1)(-7x - 3) - (5x)(8) $$
$$ \det(BA) = (7x + 3) - 40x $$
$$ \det(BA) = 3 - 33x $$

**Step 3: Solve for $x$**

The question states the determinant is 102.

$$ 3 - 33x = 102 $$
$$ -33x = 99 $$
$$ \boxed{x = -3} $$



## Converting parametric equations to cartesian equations

A curve is given parametrically (for $t>0$) by $x=3^{t/2}$ and $y=^{3t-1}+t^2+\ln(t)$. Find the equation of this curve in terms of the Cartesian coordinates $x$ and $y$.

### Rules of Parametric to Cartesian

The goal is to eliminate the parameter $t$. We usually do this by rearranging the simpler equation to find $t = \dots$ and then plugging that into the more complex equation.

| Rule Name                                 | Formula / Identity                                                                                                         | When to use it                                                                                                                                                                               |
| :---------------------------------------- | :------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Direct Substitution**                   | **Step 1:** Isolate $t$ in the easier equation ($t = \dots$).<br>**Step 2:** Plug that expression into the other equation. | **Standard Algebra.** Use when $x$ or $y$ are simple polynomials ($t^2, 3t+1$) or linear functions.                                                                                          |
| **Pythagorean Identity (Circle/Ellipse)** | $\sin^2 t + \cos^2 t = 1$                                                                                                  | **Trigonometry.** Use when $x$ and $y$ involve **$\sin t$ and $\cos t$**. <br><br>*Method:* Rearrange to get $\sin t = \frac{x}{a}$, square both sides, then add equations to eliminate $t$. |
| **Pythagorean Identity (Hyperbola)**      | $\sec^2 t - \tan^2 t = 1$                                                                                                  | **Trigonometry.** Use when $x$ and $y$ involve **$\sec t$ and $\tan t$**. <br><br>*Method:* Isolate the trig functions, square them, and subtract to get $1$.                                |
| **Double Angle**                          | $\cos(2t) = 1 - 2\sin^2 t$<br>*(or other variations)*                                                                      | **Mismatched Angles.** Use when one equation has **$t$** and the other has **$2t$**. <br><br>*Method:* Replace the $2t$ part so everything is in terms of single $t$, then substitute.       |
| **Log/Exponential Loop**                  | $x = \log_b(t) \iff t = b^x$<br>$y = e^t \iff t = \ln(y)$                                                                  | **Logs & Exponentials.** Use when $t$ is trapped inside a log or power. <br><br>*Method:* Rewrite the log equation into exponential form (or vice versa) to free the $t$.                    |
| **Change of Base**                        | $\log_a(t) = \frac{\log_c(t)}{\log_c(a)}$                                                                                  | **Mismatched Log Bases.** Use when you have $\log_3$ in one part and $\log_9$ in another.                                                                                                    |

### Step-by-step

Given:
$$ x = 3^{t/2} $$
$$ y = 3^{2t-1} + t^2 + \ln(t) $$

We need to express $y$ entirely in terms of $x$. We can handle the exponential part ($3^{2t-1}$) and the algebraic part ($t^2 + \ln t$) separately to keep things clean.

**Step 1: Solve for $t$ (from the $x$ equation)**

We need an expression for $t$ to plug into the $t^2$ and $\ln(t)$ terms.
$$ x = 3^{t/2} $$
Take $\log_3$ of both sides:
$$ \log_3(x) = \frac{t}{2} $$
Multiply by 2:
$$ t = 2\log_3(x) $$

*Alternatively, using natural logs: $t = \frac{2\ln x}{\ln 3}$*. We will use the $\log_3$ form as it is cleaner for now.

**Step 2: Transform $x$ to match the exponential term**

The first term of $y$ is $3^{2t-1}$. Instead of plugging in the log expression (which gets messy), we can use exponent laws to transform $x$ directly.

We know $x = 3^{t/2}$.
We want $3^{2t}$.

How do we get from $t/2$ to $2t$? We multiply the power by **4**.

$$ (x)^4 = (3^{t/2})^4 $$
$$ x^4 = 3^{2t} $$

Now use the negative exponent rule to handle the $-1$:

$$ 3^{2t-1} = \frac{3^{2t}}{3^1} = \frac{x^4}{3} $$

**Step 3: Substitute everything into the $y$ equation**

Now we replace every part of the $y$ equation with its $x$ equivalent.

$$ y = \underbrace{3^{2t-1}}_{\text{Part A}} + \underbrace{t^2}_{\text{Part B}} + \underbrace{\ln(t)}_{\text{Part C}} $$

* **Part A:** $\frac{x^4}{3}$ (from Step 2)
* **Part B:** $(2\log_3 x)^2$ (from Step 1)
* **Part C:** $\ln(2\log_3 x)$ (from Step 1)

Combine them:

$$ y = \frac{x^4}{3} + (2\log_3 x)^2 + \ln(2\log_3 x) $$

**Step 4: Simplify**

We can clean up the middle term: $(2\log_3 x)^2 = 4(\log_3 x)^2$.

So the Cartesian equation is:
$$ y = \frac{1}{3}x^4 + 4(\log_3 x)^2 + \ln(2\log_3 x) $$

*Note: If you preferred using natural logarithms ($\ln$) for the whole solution, the answer would look like this:*
$$ y = \frac{1}{3}x^4 + \frac{4(\ln x)^2}{(\ln 3)^2} + \ln\left(\frac{2\ln x}{\ln 3}\right) $$

Both answers are correct, but the first one is more compact.

## Solving triangle problems

A triangle $\Delta ABC$ has angles $\angle B=21^\circ,\ \angle C=46^\circ$ and side $AB=9$ cm. Find the side $AC$ (to 3dp).
### Rules of Triangles

**Standard Labelling:** Side $a$ is opposite Angle $A$. Side $b$ is opposite Angle $B$. Side $c$ is opposite Angle $C$.

| Rule Name | Formula | When to use it |
| :--- | :--- | :--- |
| **Sine Rule (Finding Side)** | $\frac{a}{\sin A} = \frac{b}{\sin B}$ | When you have a **Matching Pair** and need to find another side. |
| **Sine Rule (Finding Angle)** | $\frac{\sin A}{a} = \frac{\sin B}{b}$ | When you have a **Matching Pair** and need to find another angle. *(Watch out for the Ambiguous Case!)* |
| **Cosine Rule (Finding Side)** | $a^2 = b^2 + c^2 - 2bc \cos A$ | When you have **SAS** (Two sides and the angle *trapped* between them). No matching pair. |
| **Cosine Rule (Finding Angle)** | $\cos A = \frac{b^2 + c^2 - a^2}{2bc}$ | When you have **SSS** (All three sides known). No matching pair. |
| **Area of a Triangle (Sine)** | $\text{Area} = \frac{1}{2}ab \sin C$ | When you have **SAS** (Two sides and the included angle). |
| **Area of a Triangle (Base)** | $\text{Area} = \frac{1}{2} \times \text{base} \times \text{height}$ | When you know the vertical height perpendicular to the base. |
| **Heron's Formula (Area)** | Area $= \sqrt{s(s-a)(s-b)(s-c)}$<br>*(where $s = \frac{a+b+c}{2}$)* | When you have **SSS** (All three sides known) but **no angles**, and you need the Area. |
| **Sum of Angles** | $180^\circ - (A + B)$ | When you know two angles and need the third. Check this first! |
| **Pythagoras Theorem** | $a^2 + b^2 = c^2$ | **Right-Angled Triangles Only.** Finding a side when you know two others. |
| **SOH CAH TOA** | $\sin \theta = \frac{O}{H}, \cos \theta = \frac{A}{H}, \tan \theta = \frac{O}{A}$ | **Right-Angled Triangles Only.** Relating sides and angles. |


> [!WARNING] The Ambiguous Case 
> When using the **Sine Rule to find an angle**, your calculator will always give you the acute angle (e.g., $60^\circ$). However, if the problem implies an obtuse angle (or doesn't specify), there is a second valid answer:
> 
> $$ \theta_2 = 180^\circ - \theta_1 $$
> 
> *Example: If calculator says $60^\circ$, the other possibility is $120^\circ$*. Always check if the second angle fits inside the triangle (i.e., Sum of angles $< 180^\circ$).

### Step-by-step

**Given:**
* $\angle B = 21^\circ$
* $\angle C = 46^\circ$
* Side $AB = 9$ cm.

**Target:** Find side $AC$.

**Step 1: Label the Triangle**

Translate the "Line Names" ($AB, AC$) into "Side Names" ($a, b, c$).
* Side $AB$ is opposite Angle $C$. So, **$c = 9$**.
* Side $AC$ is opposite Angle $B$. So, **$b = ?$** (This is our target).

**Step 2: Choose the Rule**

Check for a Matching Pair.
* We know Angle $C$ ($46^\circ$) and Side $c$ ($9$). **Yes, we have a matching pair.**
* We want Side $b$ and we know Angle $B$ ($21^\circ$).

Since we have a pair, we use the **Sine Rule**.

**Step 3: Set up the Formula**
$$ \frac{b}{\sin B} = \frac{c}{\sin C} $$

Substitute the numbers:
$$ \frac{b}{\sin(21^\circ)} = \frac{9}{\sin(46^\circ)} $$

**Step 4: Solve for $b$**

Multiply both sides by $\sin(21^\circ)$ to isolate $b$.
$$ b = \frac{9 \cdot \sin(21^\circ)}{\sin(46^\circ)} $$

**Step 5: Calculate**

Enter into the calculator:
$$ b = \frac{9 \times 0.3583...}{0.7193...} $$
$$ b = 4.4836... $$

Round to three decimal places.

$$ AC = 4.484 \text{ cm} $$

## Binomial expansion with Pascal’s Triangle

Expand the expression as far as possible:

$$
(3-x)^5
$$

### Pascal's Triangle

To find your coefficients, look at the row where the second number matches your exponent ($n$). This is technically "Row $n$".

![[Pascals triangle.jpg]]
### Rules of Binomial Expansion

> [!WARNING] Negative signs are part of the term
> If you have $(a - b)$, treat the second term as $(-b)$. Brackets are essential when squaring or cubing negatives.

| Rule Name | Logic | When to use it |
| :--- | :--- | :--- |
| **Row Selection** | Power $n$ = Row $n$ | The power of the bracket tells you which line of the triangle to use for coefficients. |
| **Exponent Descent** | $a^n, a^{n-1}, a^{n-2} \dots a^0$ | The first term starts at the highest power and drops by 1 each time. |
| **Exponent Ascent** | $b^0, b^1, b^2 \dots b^n$ | The second term starts at power 0 and increases by 1 each time. |
| **The "Sum" Check** | Power $a$ + Power $b = n$ | In every single term, the two exponents must add up to the original power of the bracket. |
| **Negative Bases** | $(-x)^{\text{even}} = +$ <br> $(-x)^{\text{odd}} = -$ | Use this at the end to determine if the term in the final answer is positive or negative. |

### Step-by-step

**Step 1: Identify the coefficients**

The power is **5**. Looking at the 5th row of Pascal's Triangle (the row starting 1, 5...), we get the coefficients:
$$ 1, \quad 5, \quad 10, \quad 10, \quad 5, \quad 1 $$

**Step 2: Set up the expansion "skeleton"**

We have two terms: $a = 3$ and $b = (-x)$. We set up the structure using the coefficients and exponents.
*   The powers of **3** will go: $5, 4, 3, 2, 1, 0$
*   The powers of **$(-x)$** will go: $0, 1, 2, 3, 4, 5$

$$
1(3)^5(-x)^0 + 5(3)^4(-x)^1 + 10(3)^3(-x)^2 + 10(3)^2(-x)^3 + 5(3)^1(-x)^4 + 1(3)^0(-x)^5
$$

**Step 3: Calculate the powers of the constant**

Calculate the numerical values for $3^n$:
*   $3^5 = 243$
*   $3^4 = 81$
*   $3^3 = 27$
*   $3^2 = 9$
*   $3^1 = 3$

Substitute these back into the expression:
$$
1(243)(1) + 5(81)(-x)^1 + 10(27)(-x)^2 + 10(9)(-x)^3 + 5(3)(-x)^4 + 1(1)(-x)^5
$$

**Step 4: Multiply the coefficients and handle signs**

Now, multiply the triangle coefficients by the powers of 3, and apply the sign rules for the negative $x$:
*   Term 1: $1 \times 243 \times 1 = \mathbf{243}$
*   Term 2: $5 \times 81 \times (-x) = \mathbf{-405x}$
*   Term 3: $10 \times 27 \times (x^2) = \mathbf{270x^2}$
*   Term 4: $10 \times 9 \times (-x^3) = \mathbf{-90x^3}$
*   Term 5: $5 \times 3 \times (x^4) = \mathbf{15x^4}$
*   Term 6: $1 \times 1 \times (-x^5) = \mathbf{-x^5}$

**Step 5: Collect final answer**

Write the terms out in a single line:

$$
243 - 405x + 270x^2 - 90x^3 + 15x^4 - x^5
$$

