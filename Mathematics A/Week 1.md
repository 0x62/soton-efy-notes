---
tags:
  - linear-equations
  - factorisation
module: Mathematics A
permalink: maths-a/week-1
---
## Simultaneous Linear Equations

A linear equation in one variable (or unknown) is an equation in the form $ax=b$ where $a$ and $b$ are constant numbers and $a\ne 0$, for example, $10x=15$. A linear equation in two unknowns is in the form $ax+by=c$ where $a,b \ne 0$. If $c=0$ it is called *homogeneous*. For example, $3x-2y=4$.

When you have a pair of linear equations, you can solve them by substitution or elimination. 

$$
4x+y=9 \qquad -x+y=1
$$

### Substitution

Arrange one of the equations to make an unknown the subject, and substitute it into the other equation to eliminate one of the unknowns and solve the other unknown.

$$
y=x+1 \qquad 4x+x+1=9 \qquad 5x=8 \qquad \boxed{x=1.6}
$$

Then solve the first equation.

$$
y=\frac{8}{5}+1 \qquad y=\boxed{2.6}
$$

### Elimination

Subtract one equation from the other to eliminate at least one of the unknowns

$$
4x+y-(-x+y)=9-(1) \qquad 5x=8 \qquad \boxed{x=1.6}
$$

Then solve for the other term.

$$
y=9-(4\times 1.6) \qquad \boxed{y=2.6}
$$

## Cartesian Coordinates

The graph of a function in the form $f(x)=mx+c$ is a straight line, where $m$ is called the *slope* and $c$ is called the *intercept*. Note that $c=f(0)$. 

Given two points $P_{1}$ and $P_{2}$, you can calculate $m$ as the ratio of **rise over run** (vertical change over horizontal change, or gradient)

$$
P_{1}=(x_{1},\ y_{1}) \qquad P_{2}=(x_{2},\ y_{2})
$$
$$
m=\frac{y_{2}\ -\ y_{1}}{x_{2}\ -\ x_{1}}
$$

## Factorisation

Factors are the individual constituents of a product expression. For example:

$$
1\cdot 2 \cdot 2 \cdot 3 \qquad x(y+z) \qquad (a+b)(b+3)
$$

Factorising is writing something as a product. For example:

$$
12=1 \cdot 2 \cdot 2 \cdot 3 \qquad xy+xz=x(y+z) \qquad b^2+ab+3a+3b=(a+b)(b+3)
$$

Factors of a whole number $a$ always include $1$ and $a$. A prime number has no other factors, other than $1$ and itself. It is not always possible to sensibly factorise a given algebraic expression. 

### Difference of Squares

It is useful to remember the difference of squares formula, which is a general solution to factorising two square numbers.

$$
a^2-b^2=(a-b)(a+b)
$$

For example:

$$
x^2-25=(x+5)(x-5) \qquad m^2-49n^2=(m+7n)(m-7n)
$$
$$
4y^2-1=(2y+1)(2y-1) \qquad 81a^2-9b^2=(9a+3b)(9a-3b)
$$

### Magic X Method

The magic X method is a technique for factorising quadratic expressions in the form $ax^2+bx+c$. It works by finding two numbers that multiply to give $ac$ (the product of the coefficient of $x^2$ and the constant term) and add to give $b$ (the coefficient of $x$).

1. Draw an X diagram
2. Write $ac$ at the bottom and $b$ at the top
3. Find two numbers that multiply to $ac$ and add to $b$, and write them either side of the X
4. Divide each number by $a$ (the coefficient of $x^2$) and simplify
5. Write the factors as $(dx+e)(fx+g)$ where the denominators become the coefficients of $x$ and the numerators become the constants

#### Examples

**Example 1**
$$
2x^2+7x+3
$$
$$
a=2 \qquad b=7 \qquad c=3 \qquad ac=6
$$

We need two numbers that multiply to $6$ and add to $7$.

$$
\begin{array}{c}
& 7 & \\
6 & \times & 1 \\
& 6 &
\end{array}
$$

The numbers are $6$ and $1$. Divide by $a=2$ and simplify:

$$
\frac{6}{2}=\frac{3}{1} \qquad \frac{1}{2}
$$
$$
\boxed{2x^2+7x+3=(x+3)(2x+1)}
$$

**Example 2**

$$
6x^2-7x-3
$$
$$
a=6 \qquad b=-7 \qquad c=-3 \qquad ac=-18
$$

We need two numbers that multiply to $-18$ and add to $-7$.

$$
\begin{array}{c}
& -7 & \\
-9 & \times & 2 \\
& -18 &
\end{array}
$$

The numbers are $-9$ and $2$. Divide by $a=6$ and simplify:

$$
\frac{-9}{6}=\frac{-3}{2} \qquad \frac{2}{6}=\frac{1}{3}
$$

$$
\boxed{6x^2-7x-3=(2x-3)(3x+1)}
$$

**Example 3**

$$
x^2+5x+6
$$
$$
a=1 \qquad b=5 \qquad c=6 \qquad ac=6
$$

We need two numbers that multiply to $6$ and add to $5$.

$$
\begin{array}{c}
& 5 & \\
3 & \times & 2 \\
& 6 &
\end{array}
$$

The numbers are $3$ and $2$. Divide by $a=1$ and simplify:

$$
\frac{3}{1} \qquad \frac{2}{1}
$$

$$
\boxed{x^2+5x+6=(x+3)(x+2)}
$$

When $a=1$, the magic X method simplifies to finding two numbers that multiply to $c$ and add to $b$, which directly become the constants in the factors.