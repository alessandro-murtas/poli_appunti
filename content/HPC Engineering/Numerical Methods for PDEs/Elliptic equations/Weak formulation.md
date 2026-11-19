Find $circle(u) in H_(Gamma_D)^1 (Omega)$ such that:
$$
(P W) quad a(circle(u), v) = F(v) quad forall v in H_(Gamma_D)^1(Omega)
$$
**Lifting / Extension ($R$)**
* $circle(u) = u - R phi$, where $R$ is the extension (lifting) of $phi$:
$$
R: phi -> R phi quad cases(
  R phi in H^1(Omega),
  lr(R phi|, size: #170%)_(Gamma_D) = phi
)
$$
**Bilinear and Linear Forms**
* **Bilinear form** $a(u, v)$:
$$
a(u, v) = integral_Omega mu gradient u gradient v + integral_Omega arrow(b) gradient u v + integral_Omega sigma u v
$$
* **Linear functional** $F(v)$:
$$
F(v) = integral_Gamma f dot v + integral_(Gamma_N) psi v
$$
**Alternative Formulation**
The weak formulation can also be written as follows.
Find $u in cal(V)$ such that:
$$
a(u, v) = F(v) quad forall v in cal(V)
$$
**Function Spaces**
* **Space** $cal(V)$:
$$
cal(V) = cases(
  H^1(Omega) & text("if ") Gamma_D = diameter,
  H_0^1(Omega) & text("if ") Gamma_D = partial Omega
)
$$
* **Space** $H_0^1(Omega)$ (where $H^1$ is a [[Sobolev space]]):
$$
H_0^1(Omega) = {v in H^1(Omega) : lr(v|, size: #150%)_(partial Omega) = 0}
$$
### Demonstration
Starting from [[Strong formulation]] i multiply both sides by a test function $v$:
$$
L u=f <=> L u v=f v <=> integral_Omega L u v = integral_Omega f v <=>
integral_Omega - div(mu gradient u)v+ arrow(b) gradient u space v+ sigma u v=integral_Omega f v quad forall v
$$
From Green formula i then get
$$
markhl(integral_Omega mu gradient u gradient v+ integral_Omega arrow(b) gradient u space v + integral_Omega sigma u v, #<auv>, #green) - cancel(integral_Gamma_D mu (partial u)/(partial n) v) markhl(-integral_Gamma_N markhl(mu gradient u n, #<psi>) space v=integral_Omega f v, #<f>, #blue)

#annot(<auv>)[$a(u,v)$]
#annot(<psi>)[$=psi$]
#annot(<f>)[$=F(v)$]
$$
To simplify things later i fix $v=0$ on $Gamma_D$.