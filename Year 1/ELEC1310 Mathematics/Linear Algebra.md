---
permalink: y1/elec1310/linear-algebra
---
#### Linear Algebra

- [[#Vectors and linear combinations]]
- [[#How to test for a subspace]]
- [[#Span and linear independence]]
- [[#Bases, dimension and coordinates]]
- [[#Linear transformations and their matrices]]
- [[#Which calculation does the question want?]]

## Vectors and linear combinations

Linear algebra helps solve several equations at once and describe how an input vector becomes an output vector. For example, in a linear circuit, the response to two sources can be found by adding the responses to each source separately.

A vector in $\mathbb R^2$ is a pair of real numbers. Write it as a column when multiplying by a matrix. A **linear combination** is a sum of vectors multiplied by numbers. If
$$
u=\begin{pmatrix}1\\1\end{pmatrix},
\qquad
v=\begin{pmatrix}1\\-1\end{pmatrix},
$$
then
$$
2u+3v
=\begin{pmatrix}2\\2\end{pmatrix}
 +\begin{pmatrix}3\\-3\end{pmatrix}
=\begin{pmatrix}5\\-1\end{pmatrix}.
$$
Here $2$ and $3$ are the **coefficients**. The result is still a vector, not a scalar.

## How to test for a subspace

A subspace is a set of vectors that contains the zero vector and stays inside the set when you add its vectors or multiply them by any real number. Geometrically, a line through the origin in $\mathbb R^2$ is a subspace; a parallel line offset from the origin is not.

**Example.** Is $W=\{(x,y,z)\in\mathbb R^3:x+y-z=0\}$ a subspace?

1. **Zero:** $(0,0,0)$ satisfies the equation.
2. **Addition:** If $u=(x_1,y_1,z_1)$ and $v=(x_2,y_2,z_2)$ both belong to $W$, check the defining expression for $u+v$:
   $$
   (x_1+x_2)+(y_1+y_2)-(z_1+z_2)
   =(x_1+y_1-z_1)+(x_2+y_2-z_2)=0.
   $$
3. **Scaling:** If $u$ belongs to $W$ and $c$ is any real number, the expression for $cu$ is
   $$
   cx_1+cy_1-cz_1=c(x_1+y_1-z_1)=c\cdot 0=0.
   $$

All three checks pass. If the defining equation were instead $x+y-z=1$, the zero vector would fail the first check, and that alone would rule it out.

## Span and linear independence

The **span** of a list is the set of all vectors you can make from that list. To see whether $w$ is in the span of $u$ and $v$, try solving $au+bv=w$ for the unknown numbers $a$ and $b$.

Using the same $u$ and $v$, let $w=(7,3)^T$, where $T$ as a superscript turns a row into a column. Equating the top and bottom entries gives
$$
a+b=7,\qquad a-b=3.
$$
Add the two equations to get $2a=10$, so $a=5$. Substitute that into $a+b=7$ to get $b=2$. The equations have a solution, so $w$ is in their span. More generally, for an arbitrary target $(x,y)^T$, the equations $a+b=x$ and $a-b=y$ give $a=(x+y)/2$ and $b=(x-y)/2$. This works for every $x,y$, so the pair spans all of $\mathbb R^2$.

The vectors are **linearly independent** if the only way to make the zero vector is to set every coefficient to zero. Here we solve a different system:
$$
au+bv=0
\quad\Longrightarrow\quad
a+b=0,\qquad a-b=0.
$$
Adding gives $2a=0$, so $a=0$; the first equation then gives $b=0$. The pair is independent. In contrast, $u$ and $2u$ are dependent because $2u-1(2u)=0$ uses nonzero coefficients. Adding $2u$ to a list already containing $u$ does not grow its span.

With more vectors, put them in the **columns** of a matrix $A$. Row-reduce $[A\mid w]$ to test whether a particular $w$ is in the span, or solve $Ac=0$ to test independence. A free coefficient in the homogeneous system means the columns are dependent. If you need a basis for the column span, take the pivot columns from the **original** matrix, not from its row-reduced form.

## Bases, dimension and coordinates

A **basis** is an independent list that spans the space you are talking about. It must pass both tests. The **dimension** of the space is the number of vectors in any of its bases. A line through the origin has dimension $1$ even when it sits in $\mathbb R^3$.

**Example.** Find a basis and the dimension of the plane $W$ above. Start from $x+y-z=0$, so $z=x+y$. Every vector in $W$ can then be written as
$$
\begin{pmatrix}x\\y\\x+y\end{pmatrix}
=x\begin{pmatrix}1\\0\\1\end{pmatrix}
+y\begin{pmatrix}0\\1\\1\end{pmatrix}.
$$
That shows that the two displayed vectors span $W$. To check independence, set their linear combination equal to zero. The first coordinate forces $x=0$ and the second forces $y=0$. The two vectors form a basis and $\dim W=2$.

If $B=(u,v)$, the **coordinates in basis $B$** are the coefficients in front of $u$ and $v$, in that order. We already found $(7,3)^T=5u+2v$, so
$$
\left[\begin{pmatrix}7\\3\end{pmatrix}\right]_B
=\begin{pmatrix}5\\2\end{pmatrix}.
$$
The vector has not changed. Only the numbers used to describe it have changed. If $P_B=[u\ v]$ has the basis vectors as columns, $w=P_B[w]_B$ converts from $B$ to standard coordinates. To go the other way, solve $P_Bc=w$ for $c=[w]_B$.

## Linear transformations and their matrices

A **linear transformation** $T$ is a rule that preserves addition and scaling:
$$
T(u+v)=T(u)+T(v),\qquad T(cu)=cT(u).
$$
It must send zero to zero. For example, $T(x,y)=(x+2y,2x+4y)$ is linear because every output is a linear combination of the inputs, with no constant term. By contrast, $F(x,y)=(x+1,y)$ sends the origin to $(1,0)$, so it is not linear. Sending zero to zero alone does not prove linearity.

To build the matrix of $T$, apply it to the standard basis vectors:
$$
T(1,0)=(1,2),\qquad T(0,1)=(2,4).
$$
Use those outputs as the **columns**, in order:
$$
[T]=\begin{pmatrix}1&2\\2&4\end{pmatrix}.
$$
Then $[T](x,y)^T=(x+2y,2x+4y)^T$, as required.

The **kernel** is the set of inputs that go to zero. Here the second output is twice the first, so the only constraint is $x+2y=0$. Write $x=-2y$ and let $y=t$. Every input in the kernel has the form $t(-2,1)^T$, so $\{(-2,1)^T\}$ is a basis for the kernel. The **image** is the set of outputs you can reach. Since every output is $(x+2y)(1,2)^T$, and $x+2y$ can be any real number, $\{(1,2)^T\}$ is a basis for the image.

This map is **not injective**: different inputs, such as $(0,0)$ and $(-2,1)$, give the same output. It is **not surjective onto $\mathbb R^2$**: its outputs lie on a line, so an output such as $(1,0)$ is impossible.

## Which calculation does the question want?

| Asked for | Start here |
| --- | --- |
| Is a set a subspace? | Test zero, addition and scaling using the set's defining condition. |
| Does a list span this space? | Try to make an arbitrary vector of that space, not just one example. |
| Is a list independent? | Make zero and see whether a nonzero coefficient is possible. |
| Find a basis or dimension | Find an independent spanning list; count its vectors for the dimension. |
| Find coordinates in a basis | Put the basis vectors in the columns and solve for the coefficients. |
| Find the matrix, kernel or image | Apply the map to the standard basis; solve $Ac=0$ for the kernel; use the column span for the image. |

**Practice:** [[Year 1/Revision/Maths/Practice Questions#Coordinates, span and uniqueness [9]|Coordinates, span and uniqueness]] in the Maths practice bank and the [[Year 1/Revision/Maths/Formula Book|Maths Formula Book]].

**Module material:** [ELEC1310 Linear Algebra](https://moodle.ecs.soton.ac.uk/course/section.php?id=11470), first teaching block (notes §§1.1–1.4), lecture slides and recordings, and the first tutorial. The worked examples here are original.
