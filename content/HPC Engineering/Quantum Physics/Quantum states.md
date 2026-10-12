A quantum state by a vector in a [[Hilbert spaces|Hilbert space]]:
$$
ket(u) in cal(H)
$$
### Example
In a NH3 molecule (ammonia) the Nitrogen molecule can be either above or below the 3 Hydrogen molecules. We define the generale state of the molecule as
$$
ket("NH3")=alpha ket("above") + beta ket("below")
$$
When we measure the system it's going to be in either the $ket("above")$ or $ket("below")$ state but as long as we don't measure it it's going to be in a superposition of both.
Here $alpha$ and $beta$ represent the root of the probabilities of the corresponding states:
$$
mat(delim: #none, abs(alpha)^2=cal(P)("position"="above"); abs(beta)^2=cal(P)("position"="below")) arrow.r.double.long abs(a)^2+abs(b)^2=1
$$
### Isomorphism to $CC^n$
An $n$ state quantum state is isomorphic to the complex vector space $CC^n$.
Our 2 state ammonia molecule quantum system is therefore isomorphic to $CC^2$:
- $ket("above")=vec(1,0)$
- $ket("below")=vec(0,1)$

We can then represent the general state as
$$
ket("NH3")=alpha vec(1,0)+beta vec(0,1) =vec(delim: "[", alpha, beta)
$$
If 2 vectors are orthogonal they are associated to mutually exclusive states when measured:
$$
braket("above","below")=0
$$
Implies that when measured the Nitrogen atom is either above or below.
### Eigenstates
An eigenstate (or proper state) is the outcome of an [[Observables|observable]] that is completely defined.
Any state can be represented as a superposition of eigenstates (they form a basis for a vectorial space).
The output of an experiment is always one of those corresponding to an eigenstate.
The state $ket("NH3")=alpha ket("above") + beta ket("below")$ is not a proper state.