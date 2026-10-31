Badly conditioned matrices ($K(A) gt.double 1$) converge slowly with [[Linear iterative methods|linear iterative methods]].
To improve the convergence rate we introduce the [[SPD matrixes|SPD]] preconditioner $P^(-1)$.
Solving $A x=b$ is equivalent to this
$$
P^(-1/2)A P^(-1/2) P^(1/2)x=P^(-1/2)A P^(-1/2) z=P^(-1/2)b
$$
> [!tip] Choose $P$ s.t. $K(P^(-1/2)A P^(-1/2)) lt.double K(A)$

When choosing preconditioner we need to balance number of iterations with cost of each iteration to reduce total CPU time.
### Inexact LU factorization (ILU)
We can use the inexact [[LU factorization]] of $A$:
$$
A=L U ==> A approx tilde(L) tilde(U)
$$
where
$$
a_(i,j)=0 ==> tilde(l)_(i,j)=tilde(u)_(i,j)=0
$$
to preserve the sparsity pattern of $A$ (no fill-in).
This is a good compromise between cost of computing the preconditioner and the condition number.