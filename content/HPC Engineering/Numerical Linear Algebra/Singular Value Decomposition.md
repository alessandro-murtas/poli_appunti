## Definition
Given $A in RR^(m times n), m gt.eq n$
$$
U^T A V = Sigma=diag(sigma_1, sigma_2, ..., sigma_n) in RR^(m times n)
$$
with $U in RR^(m times m), V in RR^(n times n)$ both orthogonal and
$$
Sigma = mat(delim: "[", sigma_1, 0, ., ., 0 ; 0, sigma_(2),,, . ; .,, .,, . ; .,,, ., . ; .,,,, sigma_(p) ; .,,,, 0 ; .,,,, . ; .,,,, . ; .,,,, . ; 0, 0, ., ., 0) space.quad mat( delim: #none, p = m i n (m,n); sigma_(i)>= 0 thick forall i in [1,p ])
$$
$sigma_i$ are called singular values of $A$.
$U^T A V= Sigma <=> A=U Sigma V^T$
###### Theorem
$sqrt(lambda_i (A^T A)) = sigma_i (A), forall i$
###### Proof
$$
A^T A=(U Sigma V^T)^T U Sigma V^T=V Sigma^T U^T U Sigma V^T=V Sigma^T Sigma V^T
$$
So $A^T A$ is [[Matrix Similarity|similar]] to $Sigma^T Sigma$ (hence preserving its spectrum):
$$
lambda_i (A^T A) = lambda_i (Sigma Sigma^T)=[sigma_i (A)]^2
$$
