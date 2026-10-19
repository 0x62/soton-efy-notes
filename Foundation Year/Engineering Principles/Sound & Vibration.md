---
tags:
  - sound
  - vibration
module: Engineering Principles
component: Sound & Vibration
permalink: fy/engineering-principles/sound-vibration
---
## Vibration

Vibration is repetitive back-and-forth motion about an equilibrium position. It requires a restoring force, which attempts to return the object to equilibrium, and inertia. Many vibrations are period (e.g pendulum), and are represented as a generic model with as a mass on a spring.

### Spring model

Springs provide a restoring force whenever the mass is displaced from its equilibrium position. The restoring force is always directed towards the equilibrium position, and is proportional to the displacement - the further it is displaced, the greater the force. The mass provides inertia, and as it returns to its equilibrium position its inertia makes it keep going and "overshoot", continuing the cycle.

### Characteristics of vibration

A vibrating system has two characteristics:

* **Amplitude,** $A$ ($m$): its maximum displacement from its equilibrium position. Also notated as $x_{m}$ in Walker text book.
* **Period,** $T$ ($s$): the time it takes to return to a given position, traveling in the same direction.

The peak-to-peak amplitude (stroke) is twice the amplitude. We might specify displacement-amplitude, to distinguish from velocity-amplitude and acceleration-amplitude. 

### Frequency

The frequency $f$ of a vibration is the number of vibrations that occur in unit time. Since the period of the number of seconds per vibration:

$$
f=\frac{1}{T}
$$

SI units of frequency are Hertz (Hz).

### Periodic Functions

A signal is a function of time, which may have a physical dimension (e.g pressure, velocity). The displacement of our vibration mass in the spring model is a signal with dimension of distance. 

If the signal is periodic, the function will satisfy:

$$
x(t+T)=x(t)
$$

Periodic functions include sawtooth, square-waves and sinusoids.

### Sinusoidal motion

> [!figure] ![[Sinusoidal motion.png]]
> © University of Southampton [^1]

Our mass on a spring vibrates sinusoidally with time, as do many other typical vibrating systems. We call this Simple Harmonic Motion (SHM). The displacement $x(t)$ is proportional to a cosine function, suitable scaled in the horizontal and vertical directions.

## Simple Harmonic Motion

The cosine function works on angles, and has a period of $2\pi$ radians, so $\cos(\theta)=\cos(\theta+2\pi)$. To make a function that works on time and has a period $T$ seconds, we can write:

$$
\frac{\theta}{2\pi}=\frac{t}{T}=f\times t \qquad \cos(2\pi ft)=\cos[2\pi f(t+T)]
$$

We often write $\omega=2\pi f$ and call $\omega$ the angular frequency, units $rad\ s^{-1}$.

### Amplitude

> [!figure] ![[SHM amplitude.png]]
> © University of Southampton [^1]

The $\cos$ function varies between $-1$ and $+1$ and has no dimensions. If $x(t)$ is the displacement of the mass from its equilibrium position, the SHM can be written as $x(t)=A\cos(\omega t)$.

### Phase

> [!figure] ![[SHM phase.png]]
> © University of Southampton [^1]

We call $\omega t$ the phase of the SHM. It goes from $0$ to $2\pi$ during each period. A more general expression for a sinusoidal signal, and for SHM, is:

$$
x({t})=A\cos(\omega t+\phi)
$$

Since $\omega t$ is the phase, we call $\phi$ the phase shift (radians). For a single motion signal sit doesn't matter much, since the definition of $t=0$ is usually arbitrary. It comes in use when comparing two sinusoidal signals with the same frequency, when calculating the *phase shift* between the two signals. 

| Phase Shift                       | Effect                                              | Example                                                                                                                                          |
| --------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| $\pm 2\pi\ (360^{\circ})$         | No effect (shifts one complete phase, aligns again) | $A\cos(\omega t+\phi+2\pi)=A\cos(\omega t+\phi-2\pi)=A\cos(\omega t + \phi)$                                                                     |
| $\pm \pi\ (180^{\circ})$          | Inverts the signal                                  | $A\cos(\omega t+\phi+\pi)=A\cos(\omega t+\phi-\pi)=-A\cos(\omega t + \phi)$                                                                      |
| $\pm \frac{\pi}{2}\ (90^{\circ})$ | Convert between sine and cosine                     | $A\sin\left( \omega t+\phi+\frac{\pi}{2} \right)=A\cos(\omega t+\phi)$<br>$A\cos\left( \omega t+\phi-\frac{\pi}{2} \right)=A\sin(\omega t+\phi)$ |

### Relative Phase Shift

> [!figure] ![[Relative phase shift 1.png]]
> © University of Southampton [^1]

These two signals are both sinusoidal, which the same frequency, so we can write:

$$
x_{1}(t)=A_{1}\cos(\omega t+\phi_{1}) \qquad x_{2}(t)=A_{2}\cos(\omega t+\phi_{2})
$$

The phase difference, or relative phase (shift), between $x_{1}(t)$ and $x_{2}(t)$ is:

$$
\Delta\phi=\phi_{2}-\phi_{1}
$$

### Lead and Lag

> [!figure] ![[Angular frequency.png]]
> © University of Southampton [^1]

We have two sinusoidal signals:

$$
x_{1}(t)=A_{1}\cos(\omega t+\phi_{1}) \qquad x_{2}(t)=A_{2}\cos(\omega t+\phi_{2})
$$

Depending on the difference between the phase of the two signals, we can say:

| Rules                                                       | Terminology                                                        |
| ----------------------------------------------------------- | ------------------------------------------------------------------ |
| $\phi_{2}-\phi_{1}=0$                                       | $x_{1}(t)$ and $x_{2}(t)$ are **in phase**                         |
| $\phi_{2}-\phi_{1}<\pi$ then $\Delta\phi=\phi_{2}-\phi_{1}$ | $x_{2}(t)$ **leads** $x_{1}(t)$ by $\Delta\phi$                    |
| $\phi_{2}-\phi_{1}=\pi$                                     | $x_{2}(t)$ is in **antiphase** or **out of phase** with $x_{1}(t)$ |
| $\phi_{2}-\phi_{1}>\pi$                                     | Swap, and use other rules                                          |

### Velocity and Acceleration

A mass undergoing SHM has displacement $y(t)$ from equilibrium given by $x(t)=A\cos(\omega t+\phi)$. Its velocity $v(t)$ is the. rate of the change of its displacement with time, so:

$$
v(t)=\dot{x}(t)=\frac{dx}{dt}=-\omega A\sin(\omega t+\phi)
$$

Since $-\sin(\omega t+\phi)=\cos\left( \omega t+\phi+\frac{\pi}{2} \right)$, this tells us that its velocity leads its displacement by $90^{\circ}$.

Its acceleration $a(t)$ is the rate of change of its velocity with time, so:

$$
a(t)=\dot{v}(t)=\ddot{x}(t)=\frac{dv}{dt}=\frac{d^2x}{d^2t}=-\omega^2A\cos(\omega t+\phi)
$$

The acceleration is in anti-phase to the displacement, and lags the velocity by $90^{\circ}$. 

The acceleration is always in the opposite direction to the displacement. When the displacement-magnitude is the greatest:

- The velocity is zero
- The acceleration-magnitude is greatest

When the mass passes through its equilibrium position:

- The magnitude of the velocity is the greatest
- The acceleration is zero 


> [!WARNING] Missing vibration week 2

## Speed and reflection

Reminder of concepts from vibrations:

 - Frequency $f$ and period $T$ are reciprocals
 - Natural frequency $f_{n}$ depends on restoring force and inertia
 - Angular frequency $\omega$ is the rate of change of phase (angle) with time
 - Kinetic and potential energy are exchanged as the system vibrates

$$
f=\frac{1}{T}=\frac{\omega}{2\pi}=\frac{1}{2\pi}\sqrt{ \frac{k}{m} }
$$

### Speed of mechanical waves

Wave-bearing media have inertia and restoring force, as do vibrating systems. Mechanical waves transport energy without transporting matter. As with vibration, the energy is in kinetic and potential forms.

In a progressive wave, the kinetic and potential energies travel together (rather than exchanging). In strings, the restoring force comes from tension $\tau$ and the mass per unit length $\micro$ to give:

$$
c=\sqrt{ \frac{\tau}{\micro} }
$$

#### Speed of sound

In a fluid, the inertia comes from its density $\rho_{0}$. The restoring force comes from its bulk modulus, $B_{0}$, the reciprocal of its compressibility. The speed of sound therefore is:

$$
c=\sqrt{ \frac{B_{0}}{\rho_{0}} }
$$

In liquids, both are large. In gasses, both are small. Generally, sound travels faster in liquids and slower in gases, but as it is due to the ratio it is by no means guaranteed. There are some gases which have a faster speed of sound than some liquids. 

In an ideal gas, such as air, $B_{0}=\gamma P_{0}$ where $\gamma=\frac{C_{p}}{C_{V}}$ is the adiabatic index of the gas (about 1.4 for air). The ideal gas law states that $P=\rho RT$ where $R$ is the gas constant and $T$ is absolute temperature.

Speed of sound is therefore:

$$
c=\sqrt{ \frac{B_{0}}{\rho_{0}} }=\sqrt{ \frac{\gamma P_{0}}{\rho_{0}} }=\sqrt{ \frac{\gamma\rho_{0}RT_{0}}{\rho_{0}} }=\sqrt{ \gamma RT_{0} }
$$

It is proportional to the square root of absolute temperature. At room temperature it is about $341\text{ m s}^{-1}$ and increases by about $0.6\ m$ for each $^{\circ}\text{C}$ of temperature rise. 

#### Speed in solids

Solids can support both longitudinal and transverse waves. They're called 'P waves' and 'S waves' (primary and secondary). Because the restoring force is different, they travel at different speeds.

For bending waves (aka flexural waves) in plates and beams, the restoring force depends on:
- Stiffness of the material
- Thickness
- Curvature of the bend

### Superposition

Most mechanical waves, at small enough amplitudes, obey the principle of superposition. This states that waves pass through one another without affecting each other. Mathematically this means that if we have expressions for individual waves, we can just add them together.


> [!WARNING] Week 3 content not fully completed in these notes

## Standing Waves and Modes

Single-frequency saves are sinusoidal in both space and time. Their wavelength (spatial period) is related to their frequency (reciprocal of temporal period) by $c=f\lambda$. When a wave meets boundaries that arrest its motion, a reflected wave is generated with opposing direction of propagation and opposing (inverted) motion. For longitudinal waves (such as sound waves) the pressure in the reflected wave is not inverted.

### Standing waves on semi-infinite strings

A single-frequency wave qave reflects from the fixed end of a semi-infinite string. Superimposing a positive and a negative-going wave with the same amplitude and wavelength creates a standing wave.

Unlike the progressive (travelling) wave, energy is exchanged between kinetic and potential forms. Every half-wavelength from the fixed end the dispalcement vanishes. We call these points displacement nodes.

Displacement antinodes occur in between displacement nodes. On a semi-infinite string, stranding waves can satisfy the boundary condition at any frequency.

### Standing waves on finite strings

> [!figure] ![[Standing waves on finite strings.gif]]
> © University of Southampton [^1]

Consider a finite string of length $L$, fixed at both ends.

Only certain single-frequency waves will satisfy the boundary conditions at both ends. At those frequencies, the ends of the string much be a whole number of half-wavelengths apart, e.g:

$$
L=n\frac{\lambda}{2}\qquad n=1,2,\dots
$$

This will be true at a set of wavelengths $\lambda_{n}=2\frac{L}{2}$

At those frequencies, since $c=f_{n}\lambda_{n}$

$$
f_{n}=\frac{c}{\lambda_{n}}=\frac{nc}{2L}
$$

We call $f_{1}$ the fundamental - it's the note the string is tuned to.

#### Worked example

The A-string of a guitar is 63 cm long, weighs 2.5 grammes, and is tuned to 110 Hz; what is it's tension?

**What do we know?**

- Fundamental frequency is related to length by $f_{1}=\frac{c}{2L}$
- Wave-speed is related to tension by $c=\sqrt{ \frac{\tau}{\micro} }$
- Mass per unit length is related to mass and length by $\micro=\frac{m}{L}$
- We know $m$, $L$ and $f_{1}$
- We want to find $\tau$

Combine the equations:

$$
\tau=uc^2=\left( \frac{m}{L} \right)\times(2f_{1}L)^2=4f_{1}^2mL
$$

Substitute values:

$$
\tau=4f_{1}^2mL=4\times 110^2 \times 0.0025 \times 0.63=76.2N
$$

### Standing acoustic waves

![[Standing acoustic waves.gif]]

Superimposing a positive-going wave and a negative going wave of the same frequency and amplitude creates a standing acoustic wave. The regions where the pressure exactly cancels out are pressure nodes, half a wavelength apart.

Pressure nodes are velocity antinodes and vice versa. Hard-wall boundary conditions L m apart are satisfied when $f_{n}=\frac{nc}{2L}$ as before.

What is $n$ for the case shown?

### Frequency

> [!figure] ![[Frequency ranges.png]]
> © University of Southampton [^1]

- Nominal range of human hearing is $20\text{ Hz to } 20\text{ kHz}$
- Infrasound $<20\text{ Hz}$
- Ultrasound (A) $17.8\text{ to } 500 \text{ kHz}$ can cause acoustic cavitation in liquids or body tissue
- Ultrasound (B) $500\text{ kHz to } 100\text{ MHz}$ can cause temperature rise in tissue
- Ultrasound (C) $>100\text{ MHz}$ can generate radiation forces

### Pitch

> [!figure] ![[Pitch.png]]
> © University of Southampton [^1]

A fixed pitch difference corresponds to a fixed fequency ratio. If the pitch of $f_{2}$ is an octave above $f_{1}$ then $\frac{f_{2}}{f_{1}}=2$.

In the Equal Temperament (ET) tuning system, octaves are divided into 12 equal semitones. In the Scientific Pitch Notation (SPN) notes are specified a name C-B followed by the number of the octave it occurs inas shown above.

ISO16 specifies A4 (yellow) as $440\text{ Hz}$ (often called concert pitch). We call the lowest modal frequency of a pipe or string its fundamental $f_{1}$. We call $f_{n}$ the $(n-1)\text{th}$ overtone of the pipe or string.

### Standing waves and modes



[^1]: https://blackboard.soton.ac.uk/bbcswebdav/pid-7789956-dt-content-rid-37918172_1/xid-37918172_1?xythos-download=true
