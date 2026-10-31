At each iteration look for best vector in the [[Krylov-space methods#Krylov space|Krylov space]] $x^((0))+cal(K)_k (A, r^((0)))$ that minimizes $r^((k))=b - A x^((k))$.
Due to round-off errors vectors $r^((0)), A r^((0)), dots.h , A^((k-1))r^((0))$ are not exactly linearly independent. We can use them to build orthogonal vectors using [[Gram-Schmidt orthogonalization]].
### Pseudo-code
Choose $x^((0))$
$r^((0))=b-A x^((0))$
while([[Stopping criteria]])
$space.quad space.quad text("compute") q_k$ with suitable method
$space.quad space.quad text("form") Q_k in RR^(n times k)$ formed by $q_1,q_2,..., q_k$
$space.quad space.quad text("find") y^((k))$ s.t. it minimizes $norm(r^((k)))_2$
$space.quad space.quad x^((k+1))=x^((0))+Q_k y^((k))$
end
### GMRES convergence
If $A_s=(A+A^T)/2$ is [[SPD matrixes|SPD]]
$$
norm(r^((k)))_2 lt.eq [1-(lambda^2_min (A_s))/(lambda_max (A^T A))]^(k/2) norm(r^((0)))_2
$$
If $A$ is [[SPD matrixes|SPD]]
$$
norm(r^((k)))_2 lt.eq [((K_2 (A))^2-1)/((K_2 (A))^2)]^(k/2) norm(r^((0)))_2
$$