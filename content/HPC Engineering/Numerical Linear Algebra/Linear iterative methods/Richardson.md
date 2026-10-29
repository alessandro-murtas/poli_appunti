Given $x^((0)) in RR^n$, $alpha_k in R$, a Richardson method is based on this update:
$$
x^((k+1))=x^((k)) + alpha_k P^(-1)r^((k))
$$
We're correcting $x^((k))$ towards the residual to converge faster than other linear methods.
$alpha_k$ determines the size of the correction step towards solution, in general it can change for every iteration.
Richardson methods can be:
- Stationary: $alpha_k=alpha forall k$
- Dynamic: $alpha_k$ varies $forall k$
### Convergence for general $A$
$$
text("Convergence") arrow.l.r.double.long rho(B) < 1
$$
$B_alpha=I-alpha P^(-1)A$
$alpha$ must be chosen to reduce $B_alpha$ to have all $abs(lambda) < 1$
### Convergence
Given $A$ [[SPD matrixes|SPD]], $P=I$ the method converges iff
$$
0 < alpha <2/(lambda max A)
$$
The optimal value is
$$
alpha = 2 / (lambda min(A)+lambda max(A))
$$
### Convergence for preconditioned method
Given $A$ SPD, $P != I$ the method converges iff
$$
0 < alpha < 2/(lambda max(P^(-1)A)+lambda min(P^(-1)A))
$$
