Lanczos algorithm is used to compute extremal eigenvalues of symmetric matrices and is very cheap to compute (uses only mat-vec multiplication).
Given a [[Matrix properties#Symmetric|symmetric]] matrix $A in RR^(n times n)$ it can be decomposed in $A=Q T Q^T$ where
- $Q$ is an [[Matrix properties#Orthogonal|orthonormal]] basis of vectors $q_1, q_2, dots.h , q_n$
- $T$ is tridiagonal

$A$ and $T$ are [[Matrix Similarity|similar]].
This decomposition always exists and is unique given $q_1$ is provided.
### Pseudo-code
$r_0=q_1$
$beta_0=1$
$q_0=0$
for($k=1, dots.h, n$)
$space.quad space.fig$ if($beta_(k-1)=0$) break
$space.quad space.quad q_k=r_(k-1)/beta_(k-1)$
$space.quad space.quad alpha_k=q_k^T A q_k$
$space.quad space.quad r_k=(A-alpha_k)q_k-beta_(k-1) q_(k-1)$
$space.quad space.quad beta_k=abs(r_k)$
end
#### Properties of $q_k$ and $T_k$
At iteration $k$ the $k$-th Lanczos vector $q_k$ maximizes LHS of
$$
max_(y !=0) (y^T (q^T_k A q_k)y)/(y^T y)=lambda_1(T_k) lt.eq lambda_1(A) = lambda_1(T)
$$
and minimizes LHS of
$$
min_(y !=0) (y^T (q^T_k A q_k)y)/(y^T y)=lambda_n(T_k) lt.eq lambda_n(A) = lambda_n(T)
$$
where $lambda_1(A)$ and $lambda_n (A)$ are the maximum and minimum eigenvalue of $A$ respectively.