$$
(P) quad mark(L, #<l>) u= markhl(- div(mu gradient u), #<dif>) + markhl(arrow(b) gradient u, #<con>, #green) + markhl(sigma u, #<abs>, #blue) = mark(f, #<f>) quad quad x in Omega subset RR^d

#annot(<l>, dy: 1em)[Differential operator]
#annot(<dif>)[Diffusion]
#annot(<con>)[Convection]
#annot(<abs>, pos: top)[Reaction]
#annot(<f>, dy:1em)[Forcing term]
#v(4em)
$$
Where:
- $mu$ is the diffusion coefficient
- $arrow(b)$ is the transport field
- $sigma$ is the reaction term
- $u$ is the solution
$$
text("Boundary conditions")=
cases(
u = phi &text("on") Gamma_D subset.eq Omega quad (text("Dirichlet condition")),
mu (partial u)/ (partial n) = psi quad &text("on") Gamma_N subset.eq Omega quad (text("Neumann condition"))
)
$$
Boundary: $partial Omega = Gamma_D union Gamma_N, quad Gamma_D inter Gamma_N=diameter$
If:
- $Gamma_N = diameter$: Dirichlet B.C.
- $Gamma_D = diameter$: Neumann B.C.
- $Gamma_N != diameter and Gamma_D != diameter$: Mixed B.C.

Data $= {Omega, mu, arrow(b), sigma, f, phi, psi}$