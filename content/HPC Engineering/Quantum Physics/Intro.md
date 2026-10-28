# The Bloch Sphere
In quantum computing, any pure state of a two-level quantum system (a single qubit) can be geometrically represented as a point on the surface of a unit sphere known as the **Bloch sphere**.
A general pure state $ket(psi)$ is described by:
$$
ket(psi) = cos(theta/2)ket(0) + e^(i phi) sin(theta/2)ket(1)
$$
where:
- $theta in [0, pi]$ is the **polar angle**, measuring the tilt from the vertical $+z$ axis ($ket(0)$).
- $phi in [0, 2pi)$ is the **azimuthal angle**, measuring the rotation on the equatorial $x y$-plane from the $+x$ axis.
## Interactive State Representation
Drag with your mouse or touch to rotate the sphere in 3D and inspect the state from any angle. Notice:
- The **polar arc $theta$** from the $+z$ axis ($ket(0)$) to $ket(psi)$.
- The **dashed drop line** projecting down onto the equatorial plane.
- The **azimuthal arc $phi$** in the equatorial plane from $+x$ to the projection.
```bloch
theta: pi/3
phi: pi/4

title: "Arbitrary Qubit State |ψ⟩"

stateLabel: "|ψ⟩"

showAngles: true
showProjections: true
showEquatorPlane: true
```
---
## Canonical Basis States
You can choose which basis vectors to represent using the `basisStates` option:
- **$Z$-basis (Computational)**: `[0, 1]` $-> ket(0)$ at $+z$, $ket(1)$ at $-z$ *(default)*
- **$X$-basis (Hadamard / Diagonal)**: `["+", "-"]` $-> ket(+)$ at $+x$, $ket("-")$ at $-x$
- **$Y$-basis (Circular / Phase)**: `["i", "-i"]` $-> ket(i)$ at $+y$, $ket("-"i)$ at $-y$

Below is a Bloch sphere with all 6 canonical basis states enabled:

```bloch
theta: pi/4

phi: pi/3

title: "Bloch Sphere with All Basis States"

stateLabel: "|ψ⟩"

basisStates: [0, 1, "+", "-", "i", "-i"]

showAngles: true

showProjections: true

showEquatorPlane: true
```
---
## Quantum Gate Rotations
Any single-qubit unitary gate corresponds to a rotation of the Bloch vector around a specific axis on the sphere by an angle $alpha$:
$$
U = e^(-i alpha/2 arrow(n) dot arrow(sigma))
$$
### Hadamard Gate ($H$)
The Hadamard gate rotates the state by $pi$ around the diagonal axis $(arrow(x) + arrow(z))/sqrt(2)$, transforming the basis state $ket(0)$ into the equal superposition state $ket(+) = 1/sqrt(2) (ket(0)+ket(1))$.
Click **Play** below to watch the rotation and its trajectory path traced on the sphere surface:
```bloch
theta: 0
phi: 0

gate: H

title: "Hadamard Gate H: |0⟩ → |+⟩"

basisStates: [0, 1, "+", "-"]
duration: 2200

loop: true

autoplay: false

```
### Pauli-X Gate (Bit-Flip)
The Pauli-$X$ gate corresponds to a $pi$ rotation around the $x$-axis, mapping $ket(0) -> ket(1)$ and $ket(1) -> ket(0)$:
```bloch
theta: 0
phi: 0

gate: X

title: "Pauli-X (Bit-Flip): |0⟩ → |1⟩"

duration: 2000

loop: false
```
---
## Static TikZ Figure
For reference and print exports, the original static TikZ representation remains supported:
```tikz
% Source - https://tex.stackexchange.com/a/349333
\usetikzlibrary{angles, quotes}
\begin{document}
\begin{tikzpicture}
\def\r{3}
\draw (0,0) node[circle, fill, inner sep=1] (orig) {} -- (\r/3,\r/2)
node[circle, fill, inner sep=0.7, label=above:$\vert\psi\rangle$] (a) {};
\draw[dashed] (orig) -- (\r/3, -\r/5) node (phi) {} -- (a);
\draw (0,\r) node[circle, fill, inner sep=0.7, label=above left:$\vert 0\rangle$] (vec0) {};
\draw (0,-\r) node[circle, fill, inner sep=0.7, label=below left:$\vert 1\rangle$] (vec1) {};
\draw (orig) circle (\r);
\draw[dashed] (orig) ellipse (\r{} and \r/3);
\draw[->] (orig) -- ++(-\r*2/5, -\r*3/10) node[below] (x) {$x$};
\draw[->] (orig) -- ++(\r*14/15, -\r/9) node[right] (y) {$y$};
\draw[->] (0, -7*\r/6) -- (0, 7*\r/6) node[above] (z) {$z$};
\pic [draw=gray, text=gray, ->, "$\phi$"] {angle = x--orig--phi};
\pic [draw=gray, text=gray, <-, "$\theta$", angle eccentricity=1.4] {angle = a--orig--z};
\end{tikzpicture}
\end{document}
```