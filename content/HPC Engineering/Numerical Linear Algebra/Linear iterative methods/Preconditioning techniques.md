Badly conditioned matrices ($K(A) gt.double 1$) converge slowly with [[Linear iterative methods|linear iterative methods]].
To improve the convergence rate we introduce the [[SPD matrixes|SPD]] preconditioner $P^(-1)$.
Solving $A x=b$ is equivalent to this
$$
P^(-1/2)A P^(-1/2) P^(1/2)x=P^(-1/2)A P^(-1/2) z=P^(-1/2)b
$$
> [!tip] Choose $P$ s.t. $K(P^(-1/2)A P^(-1/2)) lt.double K(A)$

When choosing preconditioner we need to balance number of iterations with cost of each iteration to reduce total CPU time.