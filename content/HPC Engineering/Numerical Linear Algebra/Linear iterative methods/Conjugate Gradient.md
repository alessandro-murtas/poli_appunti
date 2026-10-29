CG method is similar to [[Gradient|gradient method]] but I adjust the direction of correction to be not only orthogonal to the last direction but to be also [[A-orthogonality|A-orthogonal]] to all previous steps.
#### Finite termination property
The conjugacy of the search directions improves convergence, in fact in exact arithmetic it converges in at most $n$ iteration (with $n$ being the size of the square matrix we're solving).
$$
norm(e^((k)))_A lt.eq (2c^k)/(1+c^(2k)) norm(e^((0)))_A space.quad 
c=(sqrt(K(A))-1)/(sqrt(K(A))+1)
$$
### Pseudo-code
Given $x^((0))$
$r^((0))=b-A x^((0))$
$d^((0))=r^((0))$
while(stopping_criteria)
$space.quad space.quad   display(alpha_k=((d^((k)) )^T r^((k)))/((d^((k)))^T A d^((k))))$
$space.quad space.quad  x^((k+1))=x^((k))+alpha_k d^((k))$
$space.quad space.quad  display(r^((k+1))=r^((k))-alpha_k A d^((k)))$
$space.quad space.quad display(beta_k=((A d^((k)))^T r^((k+1)))/((A d^((k)))^T d^((k))))$
$space.quad space.quad  display(d^((k+1))=r^((k+1))-beta_k d^((k)))$
end
## Preconditioned Conjugate Gradient (PCG)
$$
A x = b arrow.l.r.double.long P^(-1/2) A P^(-1/2) y =P^(-1/2) b space.quad space.quad y=P^(1/2)x
$$
If $P$ is a good preconditioner
$$
(sqrt(K(P^(-1)A))-1)/(sqrt(K(P^(-1)A))+1) < (sqrt(K(A))-1)/(sqrt(K(A))+1)
$$