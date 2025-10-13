---
id: 6c0fa8684960e32a8f96dcb17aea49a3
noteFile: "[[Mechanical Science/Vectors.md]]"
generatedAt: "2025-10-13T20:22:16.326Z"
---
## Given components $A_x$ and $A_y$, how do you find the angle $\theta$ of the vector $\vec{A}$?

---

$$\theta=\tan^{-1}\left(\frac{A_y}{A_x}\right)$$

This gives the reference angle, but you must consider the signs of $A_x$ and $A_y$ to determine the correct quadrant. In practice use $\operatorname{atan2}(A_y,A_x)$ to get the full-range angle.