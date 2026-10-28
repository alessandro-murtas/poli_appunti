The solution to a linear problem with $A$ [[SPD matrixes|SPD]] can be seen as the minimum point of a parabola $phi.alt$ (energy function):
$$
phi.alt(x) lt.eq phi.alt(y) space.quad forall y in RR^n arrow.r.double.long  phi.alt (x)=min_(y in RR^n) phi.alt(y)
$$
where
$$
& phi.alt:RR^n -> RR \
& phi.alt(y)=1/2 y^T A y - y^T b
$$
If $A$ is [[SPD matrixes|SPD]] the energy function is convex and admits a unique minimum.
Since $gradient phi.alt (y)=A y - b$ the minimum ($gradient phi.alt (y)=0$) coincides with solution of $A x - b$.
$$
gradient phi.alt (y)=A y - b = 0
$$
### Remark
Every perturbation $e != 0$ to the exact solution $x$ increases $phi.alt (x)$:
$$
phi.alt(x+e)=phi.alt(x)+1/2 e^T A e > phi.alt(x)
$$