---
tags:
  - electronics
module: Electricity & Electronics
component: Electronics
permalink: electricity-electronics/electronics-3
---
## Karnaugh Maps

Karnaugh maps (sometimes called **K-maps**) provide a method of arriving at the simplest possible logic expression. They are an alternative to simplifying Boolean algebra.

Karnaugh maps can be used with up to five logic variables, above this number the maps become too large. A maximum of four input variables (A, B, C, D) will be considered during this course.

To implement a Karnaugh map, we need a boolean expression in **sum of products** form, rather than product of sums form. In other worse, each group of expressions should be combined with an OR operation:

$$
\text{✅ SOP Form}=\overline{A}.B.C\ +\ A.\overline{B}.C\ +\ A.B.\overline{C} 
$$
$$
\text{🚫 POS Form}=(\overline{A}+B+C).(A+\overline{B}+C).(A+B+\overline{C})
$$

Next, we will create a truth table, such that it is arranged:

- The number of output cells matches the number of rows in the truth table
- The possible input values form the row and column headings
- The output for each combination of input values is written at the row/column intersections

Thee and four K-maps group two input variables together. The order and positioning of the grouping (e.g AB, AC, BC etc) does not matter.

