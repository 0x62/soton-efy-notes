---
tags: quadratic-equations
module: Mathematics A
permalink: maths-a/week-2
---
> [!NOTE] Content on this page is adapted from [lecture notes](https://spakula.github.io/fyA/index.html) provided by [Ján Špakula](https://spakula.github.io)

## Quadratic Equations

**[Ján's notes](https://spakula.github.io/fyA/quadratic-equations.html)**

A *quadratic polynomial* is an expression in the form $ax^2+bx+c$ where $a,b,c$ are constants and $a\ne0$. Any value of $x$ that solves the equation $ax^2+bx+c=0$ is called a *root*. 

The graph of a quadratic equation consists of all pairs $(x,y)$ such that $y=ax^2+bx+c$. When charted, roots appear where the line intersects the $x$ axis (where $y=0$).

There is a general formula for determining the roots. First, calculate the *discriminant*, $n = b^2-4ac$ which gives you the number of solutions:

* If $n<0$ there are no real roots
* If $n=0$ there is one root
* If $n>0$ there are two roots

You can then use the quadratic equation to calculate the roots:

$$
x_{1,2}=\frac{-b\pm \sqrt{ b^2-4ac }}{2a}
$$

For example, finding the roots of $x^2+3x+1$:

$$
x_{1,2}=\frac{-3\pm\sqrt{ 3^2-4\cdot 1 \cdot 1 }}{2 \cdot 1}
$$

$$
x_{1,2}=-\frac{3}{2} \pm \frac{1}{2}\sqrt{ 5 }
$$

### Roots by Factorisation

You determine the roots by factorisation, for example using the [[Week 1#Magic X Method|Magic X method]]. After factorising, determine the values of $x$ where each factor equals zero. For example:

$$
y=x^2+5x+6 \qquad y=(x+3)(x+2)
$$

If $x=-3$ or $x=-2$, one of the factors becomes zero and $y=0$.

Thus the factors are $-3$ and $-2$.


