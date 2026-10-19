---
tags:
  - ac-theory
module: Electricity & Electronics
component: AC Theory
permalink: fy/electricity-electronics/ac-theory-4
---

## Filters

Most electronic signals contain both wanted and unwanted information. Therefore, some kind of filtering must be used to separate the signal before processing can begin. Filters are used in Digital Signal Processing and in circuits to pass or amplify certain frequencies while attenuating (blocking) other frequencies.

Filters can either be analog or digital, however we typically categories them as either active or passive:

- **Passive filters** are made up of components like resistors, capacitors and inductors, and have no amplifying elements. There is no signal gain, therefore the output level is always lower than the input.
- **Active filters** typically use an amplifier component and can add complexity to the signal, such as consuming power and injecting noise into a system

**Signal separation** is needed when a signal has been contaminated with interference, noise, or other signals.

For example, imagine a device for measuring the electrical activity of a baby's heart (EKG) while still in the womb. The raw signal will be corrupted by the breathing and heartbeat of the mother. A filter might be used to separate these signals so they can be individually analysed.

**Signal restoration** is used when a signal has been distorted in some way. For example, and audio recording may be filtered to better represent the sound as it actually occurred.

Usually DSP filters are applied to signals to select certain frequencies or certain information while rejecting other frequencies or information.

There are four main types of filters:

1. Low-pass filter
2. High-pass filter
3. Band-pass filter
4. Notch/Band-stop filter

High and low typically refer to the relative values with respect to the cut-off frequency, such as those critical frequencies we looked at last week.


> [!NOTE] Examinable components
> A filter question on the exam is likely to include:
> - Types of filters
> - Circuit config
> - Roughly how it works
> - Transfer characteristic sketch 


### Filter Bands

All filters have a **pass-band** (sometimes called **bandwidth**), a **stop-band** and a **cut-off frequency** $f_{c}$ (sometimes called corner frequency) which defines the frequency boundary between the pass-band and the stop-band.

The **pass-band** of the filter is the frequency range that passes through the filter. An ideal filter has a gain of one in the passband so the amplitude of the signal neither increases or decreases.

The **stop-band** is the range of frequencies that the filter attenuates.

Ab ideal filter transmits frequencies in its **pass-band** without attenuation or phase shift, while not. allowing any signal components in the stop-band to get through.

![[Screenshot 2026-03-17 at 15.28.32@2x.png]]

### Passive Low Pass Filter

![[Screenshot 2026-03-17 at 15.42.59@2x.png]]

A low-pass filter is used to filter out unwanted signals, and (ideally) will separate and pass sinusoidal input signals based on their frequency.

In low frequency applications (up to 100 kHz), passive filters are generally constructed using simple RC networks, while higher frequency filters (above 100 kHz) are usually made from RLC networks.

For a low-pass filter, the pass-band extends from DC (0 Hz) to the cut-off frequency $f_{c}$ and the stop-band lies above $f_{c}$.

The cut-off frequency occurs at resonance, where the capacitive reactance $X_{c}$ equals the resistance.

At very low frequencies $X_{c}$ is large compared to $R$. When the frequency is small, most of the input voltage $V_{in}$ appears at the output ($V_{out} \approx V_{in}$).

As the frequency increases, $X_{c}$ falls and $V_{out}$ falls consequently. When $X_c$ is 'big' then so is $V_{c}$. At some frequency $f_{c}$ known as the cutoff frequency, $F_{out}=0.707\times V_{in}$.

For a low-pass filter the main equation is:

$$
V_{out}=V_{in} \frac{X_{c}}{\sqrt{ R^2+X_{C}^2 }} \qquad f_{c}=\frac{1}{2\pi RC}
$$

### Passive High Pass Filter

![[Screenshot 2026-03-17 at 15.43.56@2x.png]]

Unlike a low-pass filter, the output voltage $V_{out}$ of a high-pass filter is taken across the resistor $R$ rather than the capacitor. The pass-band lies above $f_{c}$ while the stop-band is below that point. 

The reactance of the capacitor $X_{c}$ is very high at low frequencies, so the capacitor acts like an open circuit and blocks any input signals until the cut-off point $f_{c}$ is reached.

The boundary between the stop-band and the pass-band is the cut-off frequency. At this exact point in a high-pass filter:

- The output voltage ($V_{out}$) reaches 0.707 of the input voltage $V_{in}$. This point is referred to as the -3dB point
- The voltage drop across the resistor is equal to the voltage drop across the capacitor ($V_R=V_{C}$)

For a high-pass filter, the main equations to remember are:

$$
V_{out}=V_{in} \frac{R}{\sqrt{ R^2+X^2_{C} }} \qquad f_{c}=\frac{1}{2\pi RC}
$$

### Passive Band Pass Filter

![[Screenshot 2026-03-17 at 15.53.09@2x.png]]

Band-pass filters transmit only those signal components within a band around a centre frequency $f_{o}$.

Band-pass filters are created by combining a high-pass filter and a low-pass filter. The signal is first fed through the high-pass filter to stop the low frequencies, then a low-pass filter to stop the high frequencies.

An ideal band-pass filter would reject all frequencies outside the range $f_{H}-f_{L}$. Band-pass filter applications include situations that require extracting a specific tone, such as a test tone, from adjacent tones or broadband noise. The two limits can be defined by:

$$
f_{L}=\frac{1}{2\pi R_{1}C_{1}} \qquad f_{H}=\frac{1}{2\pi R_{2}C_{2}}
$$


Often Op-Amps are used in their voltage follower configuration to isolate the filters and prevent current flowing through them.

![[Screenshot 2026-03-17 at 15.53.32@2x.png]]

## Passive Band Stop Filter

![[Screenshot 2026-03-17 at 16.14.33@2x.png]]

A band-stop is essentially the opposite to a band-pass filter. It transmits all signals except those within a specific frequency band. It rejects the frequencies between the lower limit and the upper limit. It is useful for removing very specific, unwanted tone from a signal - for example, removing a 50Hz or 60Hz main frequency hum.

If you want to build an RLC circuit and take the output voltage $V_{out}$ specifically across the Inductor-Capacitor part of the circuit, something special happens at resonance.

Because $V_{L}$ and $V_{C}$ cancel each other, the total voltage across the LC combination drops to zero. Therefore, the output of the circuit goes to zero, effectively "notching out" that specific frequency while allowing other frequencies to pass.

### Real vs Ideal Filters

Real filters are far from ideal. Instead of the sharply defined transition regions represented by ideal filters, real filters contain a transition region between the pass-band and the stop-band.

![[Screenshot 2026-03-17 at 16.15.52@2x.png]]

Recall **Q Factor** as a measure of 'goodness' and is the ratio of the centre frequency $f_{o}$ to the bandwidth $\Delta f$ where $Q=\frac{f_{o}}{f_{h}-f_{l}}$

The higher the Q, the more resonant the filter and the narrower the range of frequencies that are allowed to pass. A good filter will have a high Q-factor, but not too high. Too high a Q-factor results in a very narrow bandwidth, possibly cutting out some important signal frequency components.