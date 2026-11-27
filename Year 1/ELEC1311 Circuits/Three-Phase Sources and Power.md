---
permalink: y1/elec1311/three-phase-sources-and-power
---
#### Three-Phase Sources and Power

- [[#From windings to phase sequence]]
- [[#Star and delta source connections]]
- [[#Deriving the line-to-line voltage]]
- [[#Released preview: balanced star-star load]]
- [[#Released preview: three-phase power]]

A balanced set uses phase displacement to deliver smoother total power. Start with the source and voltage references before analysing its load.[^schedule][^introduction][^source]

![[AC Theory (1)#Phasors]]

## From windings to phase sequence

A three-phase generator produces three sinusoids of the same frequency. Its windings are positioned so that their voltages are displaced by $120^\circ$ electrically. In balanced operation their amplitudes also match. Use the same waveform reference and RMS convention for all three.

For phase sequence ABC, set the A phasor as reference:

$$
V_{AN}=V_p\angle0^\circ,\qquad
V_{BN}=V_p\angle-120^\circ,\qquad
V_{CN}=V_p\angle120^\circ.
$$

The sum is zero. The phases reach a common point in their cycle in the order A, B, C; swapping B and C reverses that sequence, without changing individual RMS magnitudes. Balanced is a statement about spacing and magnitudes; it does not specify the sequence.

## Star and delta source connections

**Star (Y):** connect one end of each winding to a common neutral $N$. The winding voltage is the phase/line-to-neutral voltage. A line-to-line voltage spans two line potentials, so it is a phasor difference.

**Delta ($\Delta$):** connect the three windings end-to-end; the line terminals are the three junctions. A winding is directly across a pair of lines, so its voltage is the line-to-line voltage (with reference orientation observed). The arrangement has no intrinsic neutral. Do not apply the star voltage ratio to a delta winding.[^source]

## Deriving the line-to-line voltage

The subscript $AB$ means A relative to B, hence $V_{AB}=V_{AN}-V_{BN}$. For the ABC sequence above:

$$
V_{AB}
 =V_p\left(1-\left[-\tfrac12-j\tfrac{\sqrt3}{2}\right]\right)
 =V_p\left(\tfrac32+j\tfrac{\sqrt3}{2}\right)
 =\sqrt3 V_p\angle30^\circ.
$$

Thus a balanced star source with $V_p=120\,\mathrm V$ RMS has $|V_{AB}|=207.8\,\mathrm V$ RMS. Here $V_{AB}$ leads $V_{AN}$ by $30^\circ$; reverse the order of the terminals or the phase sequence and the angle relationship changes. Use complex subtraction rather than subtracting magnitudes.

## Released preview: balanced star-star load

YT10 pairs a balanced star source with three identical star-connected load impedances, $Z_\phi$. Each line current equals its corresponding phase current. With source and load neutrals linked, each phase can be solved as a separate one-phase loop:

$$
I_A=\frac{V_{AN}}{Z_\phi},\quad
I_B=\frac{V_{BN}}{Z_\phi},\quad
I_C=\frac{V_{CN}}{Z_\phi}.
$$

The three current phasors sum to zero, so an ideal neutral carries no current under these balanced conditions. Opening the neutral with an unbalanced load is not equivalent: the load neutral may move and the per-phase voltages need not stay equal.[^load]

**Example:** with $V_p=120\,\mathrm V$ RMS and $Z_\phi=8+j6=10\angle36.87^\circ\,\Omega$, the magnitudes are $12\,\mathrm A$ RMS. The A current is $12\angle-36.87^\circ$, and B and C have the same shift relative to their own voltages.

## Released preview: three-phase power

For a balanced star load, $I_L=I_\phi$ and $|V_{LL}|=\sqrt3|V_\phi|$. With RMS magnitudes and $\phi=\arg Z_\phi$:

$$
P_\mathrm{total}=3 V_\phi I_\phi\cos\phi
=\sqrt3 V_{LL}I_L\cos\phi,\qquad
Q_\mathrm{total}=3V_\phi I_\phi\sin\phi.
$$

The angle is between **corresponding phase voltage and current**; it is not the raw angle between $V_{AB}$ and $I_A$. In the preceding example, $\cos\phi=0.8$, giving $P_\mathrm{total}=3456\,\mathrm W$ and $Q_\mathrm{total}=2592\,\mathrm{var}$.

Each phase's instantaneous power has a twice-frequency component. In a balanced set the three such terms cancel; the total instantaneous power is constant in sinusoidal steady state. That gives the smooth-power rationale from the introduction. The cancellation and the shortcut are not general for unbalanced loads. See [[AC Power#Instantaneous and average power]].[^power]

[^schedule]: [ELEC1311 lecture and tutorial timetable](https://moodle.ecs.soton.ac.uk/mod/page/view.php?id=43581), dated YT08–11 rows.
[^introduction]: Yoshi Tsuchiya, [YT08: Introduction to Three Phase](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=46246), polyphase comparison, generation, motors and transmission.
[^source]: Yoshi Tsuchiya, [YT09: Three Phase Source](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=46247), phasors, phase sequence, star and delta source connections and the star vector derivation.
[^load]: Yoshi Tsuchiya, [YT10: Three Phase Circuits](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=46377), released slides for 25 November, balanced star-star load and neutral current.
[^power]: Yoshi Tsuchiya, [YT11: Power in Three Phase](https://moodle.ecs.soton.ac.uk/mod/resource/view.php?id=46378), released slides for 27 November, RMS power, phase and line forms, cancellation of oscillatory power.
