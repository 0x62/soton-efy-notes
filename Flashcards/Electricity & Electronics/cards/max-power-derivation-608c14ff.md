---
id: 608c14ffada02ed86fe85696ba3257de
noteFile: "[[Electricity & Electronics/Circuit Theory (3).md]]"
generatedAt: "2025-10-13T20:27:36.744Z"
---
## Derive the condition for maximum load power from $P=\dfrac{V^2 R_l}{(R_s+R_l)^2}$

---

$$R_l = R_s$$

Derivation:

1. Start with $$P=\dfrac{V^2 R_l}{(R_s+R_l)^2}$$
2. Differentiate with respect to $R_l$ and set to zero: $$\frac{dP}{dR_l}=0$$
3. Using the quotient rule with $u=V^2R_l$, $v=(R_s+R_l)^2$ gives

$\frac{dP}{dR_l}=V^2\cdot\frac{(R_s+R_l)^2-2R_l(R_s+R_l)}{(R_s+R_l)^4}$$
4. Simplify:

$\frac{dP}{dR_l}=V^2\cdot\frac{R_s-R_l}{(R_s+R_l)^3}$$
5. Set numerator zero (since $V^2\neq0$ and denominator $\neq0$): $$R_s-R_l=0\Rightarrow R_l=R_s$$.