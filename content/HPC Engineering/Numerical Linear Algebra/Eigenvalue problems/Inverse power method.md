The inverse power method uses the fact that the eigenvalues of $A^(-1)$ are the reciprocals of those of $A$, hence the smallest eigenvalue of $A$ is the reciprocal of the largest eigenvalue of $A^(-1)$.
Given $q^((0))!= 0$ s.t. $norm(q^((0)))_2=1$ we apply the [[Power method|power method]] to $A^(-1)$.
##### Pseudo-algorithm
while(stopping criteria)
$space.quad space.quad text("solve") A z^((k+1))= q^((k))$
$space.quad space.quad display(q^((k+1))=z^((k+1))/norm(z^((k+1))))$
$space.quad space.quad display(sigma^((k+1))=[q^((k+1))]^H A q^((k+1)))$
end
### Inverse power method with shift
If we want to compute the eigenvalue closest to $mu in.not sigma(A)$:
$forall i$ find for such $lambda$, $norm(lambda_i-mu)$ is as small as possible
We define $M_mu = A - mu I$, if $w$ is an eigenvalue of $A$:
$$
M_mu w = (A- mu I)w= A w - mu w =(lambda - mu) w
$$
So the eigenvalue of $M_mu$ is $ʒ = lambda - mu$.
We now compute the minimum eigenvalue of $M_mu$.