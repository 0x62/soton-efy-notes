---
permalink: y1/elec1313/boolean-algebra-minimisation
---
#### Boolean Algebra and Minimisation

- [[#Boolean identities]]
- [[#De Morgan and universal gates]]
- [[#Canonical forms]]
- [[#Karnaugh maps]]
- [[#Prime implicants and minimum covers]]
- [[#Design examples]]

**[[#Boolean identities|Absorption and combination]]**
$$A+AB=A,\qquad A(A+B)=A,\qquad AB+A\bar B=A$$
**[[#De Morgan and universal gates|De Morgan]]**
$$\overline{AB}=\bar A+\bar B,\qquad\overline{A+B}=\bar A\bar B$$
**[[#Canonical forms|Function count]]**
$$n\text{ binary inputs}\Rightarrow2^n\text{ rows and }2^{2^n}\text{ one-output functions}$$
**[[#Karnaugh maps|Grouping]]**
$$2^k\text{ adjacent cells in an }n\text{-variable map}\Rightarrow n-k\text{ retained literals}$$

## Boolean identities

![[Electronics (1)#Operator Notation]]

Boolean addition means OR, not ordinary numerical addition: $1+1=1$. Multiplication means AND and a bar means NOT. Useful laws are:[^1]

- Identity: $A+0=A$, $A\cdot1=A$.
- Dominance: $A+1=1$, $A\cdot0=0$.
- Idempotence: $A+A=A$, $AA=A$.
- Complement: $A+\bar A=1$, $A\bar A=0$; double negation gives $\overline{\bar A}=A$.
- Commutativity and associativity allow reordering and regrouping within an AND or OR operation.
- Distributivity works in both forms: $A(B+C)=AB+AC$ and $A+BC=(A+B)(A+C)$.
- Absorption: $A+AB=A$ and $A(A+B)=A$.

Two product terms differing only in one complemented variable combine:
$$AB+A\bar B=A(B+\bar B)=A.$$
The output is independent of $B$ for those cases. This is the algebraic basis of K-map grouping.

## De Morgan and universal gates

![[Electronics (2)#Universal Logic]]

Complementing an AND gives the OR of the complemented inputs; complementing an OR gives the AND of the complemented inputs. Complement **every literal and operation within the complemented expression**:
$$\overline{A+BC}=\bar A\,\overline{BC}=\bar A(\bar B+\bar C).$$
This is not $\bar A+\bar B\bar C$.

A sum of products maps naturally to NAND–NAND hardware:
$$F=AB+CD=\overline{\overline{AB}\;\overline{CD}}.$$
Similarly, a product of sums maps to NOR–NOR hardware:
$$F=(A+B)(C+D)=\overline{\overline{A+B}+\overline{C+D}}.$$
Inversions may be absorbed into neighbouring gates rather than built as separate NOT gates.[^1]

## Canonical forms

For $n$ inputs, a truth table has $2^n$ rows. Each row's one-bit output may independently be 0 or 1, producing $2^{2^n}$ possible single-output Boolean functions. This counts alternative behaviours, not gates required for one design.[^2]

A **minterm** contains every input variable exactly once and is 1 for exactly one row. With variable order $A,B,C$, row $101_2=5$ has $m_5=A\bar BC$.

A canonical **sum of products (SOP)** ORs the minterms for which $F=1$:
$$F(A,B,C)=\Sigma m(0,2,3,7).$$
A **maxterm** is a sum containing each variable once, chosen to be 0 for one row. Row $101$ has $M_5=(\bar A+B+\bar C)$: the complement rule is reversed compared with a minterm.

The equivalent canonical **product of sums (POS)** ANDs the maxterms for which $F=0$:
$$F(A,B,C)=\Pi M(1,4,5,6).$$
The variable order is part of the specification. Reordering the variables changes the numerical row labels. “Canonical” means all variables appear in each term; a simplified SOP or POS need not retain them all.[^3]

## Karnaugh maps

![[Electronics (3)#Karnaugh Maps]]

A K-map arranges truth-table rows so adjacent cells differ in exactly one variable. Use Gray-code order $00,01,11,10$, not ordinary binary order. Horizontal and vertical edges wrap around: the left edge touches the right edge, and the top touches the bottom. Diagonals are not adjacent.[^4]

For an SOP implementation:
1. Put 1s into the map for the specified minterms.
2. Group rectangular blocks of $1,2,4,8,\ldots$ cells containing only 1s.
3. Make groups as large as possible; overlapping groups are allowed.
4. Retain only variables constant across a group. A constant 1 gives the uncomplemented variable; a constant 0 gives its complement.
5. OR the group terms, ensuring every 1 is covered.

A four-cell group in a four-variable map removes two variables and produces a two-literal product. A group spanning four corner cells is valid because both directions wrap around.

For POS, group the **0s**. One reliable method is to obtain an SOP for $\bar F$ from those groups, then apply De Morgan to obtain $F$. This avoids reversing literal signs accidentally.[^3]

## Prime implicants and minimum covers

An **implicant** is a product term whose covered cells all have $F=1$. A **prime implicant** cannot be expanded into a larger valid group. An **essential prime implicant** covers at least one 1 that no other prime implicant covers, so it must appear in any cover using prime implicants.

Choose essential groups first, then cover remaining 1s with as few additional terms and literals as possible. Largest groups help, but selecting every large group can introduce redundancy. There may be several equally minimal expressions.[^4]

For $F=\Sigma m(0,2,3,7)$, grouping $0,2$ gives $\bar A\bar C$ and grouping $3,7$ gives $BC$:
$$F=\bar A\bar C+BC.$$
Grouping zeros instead gives $\bar F=A\bar C+\bar BC$, hence
$$F=(\bar A+C)(B+\bar C).$$
These expressions describe the same truth table even though their gate structures differ.

## Design examples

### Seat-belt warning

Let $A$ indicate a driver present, $B$ a passenger present, $C$ the driver's belt fastened and $D$ the passenger's belt fastened. The warning is active when either occupied seat has an unfastened belt:
$$F=A\bar C+B\bar D.$$
The canonical minterm list is $\Sigma m(4,6,8,9,12,13,14)$ for input order $A,B,C,D$. Two four-cell K-map groups produce the compact expression directly. An unoccupied seat does not cause a warning regardless of that seat's belt state.[^5]

### Two-bit magnitude comparator

Compare unsigned numbers $AB$ and $CD$, where $A,C$ are the most significant bits. Define $G$ for greater than, $E$ for equal and $L$ for less than.

First compare the most significant bits. Only if they match does the low-bit comparison matter. Let $H=\overline{A\oplus C}$:
$$G=A\bar C+HB\bar D,$$
$$L=\bar AC+H\bar BD,$$
$$E=H\overline{B\oplus D}.$$
Exactly one of $G,E,L$ should be 1 for every valid input combination. This provides a useful independent check of a four-input truth table or minimised gate network.[^6]

### Multiplexer implementation and Shannon expansion

Fixing one input splits a function into two simpler functions:
$$F(A,B,C)=\bar A F(0,B,C)+A F(1,B,C).$$
When $A=0$, only the first term remains; when $A=1$, only the second remains. This is **Shannon expansion**, and it has exactly the form of a 2-to-1 multiplexer.

A four-input function can be implemented with an 8-to-1 multiplexer by using three variables as selects. For each select combination, the output becomes one of $0$, $1$, the remaining variable, or its complement.

For the comparator's $L$ output, use $B,C,D$ as selects and retain $A$ as the data variable. The required data inputs for select codes $000$ through $111$ are
$$[0,\bar A,\bar A,1,0,0,\bar A,\bar A].$$
For example, select $BCD=011$ means comparing $2A$ with $3$, which is true for either value of $A$, so that data input is tied to 1. Select $BCD=110$ means comparing $2A+1$ with $2$, which is true only when $A=0$, so that data input is $\bar A$.[^6][^7]

Boolean minimisation reduces expression size, but practical optimisation also considers circuit area, switching power and propagation delay. Fewer product terms do not by themselves prove the fastest physical implementation, especially when gate fan-in and interconnect change.[^8]

[^1]: [Logic laws of Boolean algebra](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36311).
[^2]: [Truth tables and logic functions](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36306).
[^3]: [Boolean conventions](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36314).
[^4]: [Introduction to Karnaugh Maps](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36312); [Application of Karnaugh Maps](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36315).
[^5]: [Combinational design](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36309).
[^6]: [Magnitude comparator design](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=36316).

[^7]: [9 October comparator explanation](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=5b56fe2e-a63e-4820-a7fb-b4de00f73c02), 32:23–34:58, multiplexer implementation and Shannon expansion.
[^8]: [9 October K-map applications](https://southampton.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=cfa9ce9f-e86c-47b8-942f-b4de00e70a28), 6:38–10:04, area, power and delay.
