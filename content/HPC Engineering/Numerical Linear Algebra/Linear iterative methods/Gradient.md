With the Gradient Method I update $x^((k))$ to $x^((k+1))$ in the direction of the negative gradient of its [[Minimization problem|energy function]]:
$$
x^((k+1))=x^((k))-alpha_k gradient phi.alt (x^((k)))=x^((k))+alpha_k r^((k))
$$
2 consecutive steps are always orthogonal.
We want to choose optimal $alpha_k$ to minimize $phi.alt (x^((k+1)))$:
$$
phi.alt (x^((k+1))))
= &1/2 (x^((k))+alpha_k r^((k)))^T A (x^((k))+alpha_k r^((k))) + (x^((k))+alpha_k r^((k)))^T b= \
= & 1/2 alpha_k^2 (r^((k)))^T A r^((k))+1/2 (x^((k)))^T A x^((k)) + 1/2alpha_k (x^((k)))^T A r^((k)) + 1/2alpha_k (r^((k)))^T A x^((k))
\ & - alpha_k (r^((k)))^T b +1/2 (x^((k)))^T A x^((k)) - (x^((k)))^T b =\
= & 1/2 alpha_k^2 (r^((k)))^T A r^((k)) - alpha_k (r^((k)))^T r^((k)) + 1/2 (x^((k)))^T A x^((k)) - (x^((k)))^T b
$$
We want
$$
(d phi.alt x^((k+1)))/(d alpha_k)= alpha_k (r^((k)))^T A r^((k)) - (r^((k)))^T A r^((k)) =0 ==> alpha_k =((r^((k)))^T A r^((k)))/((r^((k)))^T A r^((k)))
$$
### Pseudo-code
Given $x^((0))$
$r^((0))=b-A x^((0))$
while(stopping_criteria)
$space.quad space.quad display(alpha_k=([r^((k))]^T r^((k)))/([r^((k))]^T A r^((k))))$
$space.quad space.quad x^((k+1))=x^((k))+alpha_k r^((k))$
$space.quad space.quad r^((k+1))=r^((k))-alpha_k A r^((k))$
end
### Convergence rate
$$
norm(e^((k+1)))_A lt.eq (k(A)-1)/(k(A)+1)norm(e^((k)))_A arrow.r.double.long norm(e^((k))) lt.eq ((K(A)+1)/(K(A)-1))^k norm(e^((0)))_A 
$$
With a bigger $K(A)$ you get a slower convergence rate, in the best case of $K(A)=1$ it converges in one iteration.
## Preconditioned gradient
$$
A x = b arrow.l.r.double.long P^(-1/2) A P^(-1/2) y =P^(-1/2) b space.quad space.quad y=P^(1/2)x
$$
If $P$ is a good ([[SPD matrixes|SPD]]) preconditioner
$$
(K(P^(-1)A)-1)/(K(P^(-1)A)+1) < (K(A)-1)/(K(A)+1)
$$
### Pseudo-code
Given $x^((0))$
$r^((0))=b-A x^((0))$
while(stopping_criteria)
$space.quad space.quad text("solve") P z^((k))=r^((k))$ (action of $P$ on $r^((k))$)
$space.quad space.quad display(alpha_k=([z^((k))]^T r^((k)))/([z^((k))]^T A z^((k))))$
$space.quad space.quad x^((k+1))=x^((k))+alpha_k z^((k))$
$space.quad space.quad r^((k+1))=r^((k))-alpha_k A z^((k))$
end