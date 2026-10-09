## Definition
Given $A\in \mathbb{R}^{m \times n}, m\geq n$
$$
U^TAV=\Sigma=diag(\sigma_1, \sigma_2, ..., \sigma_n) \in \mathbb{R}^{m\times n}
$$
with $U\in\mathbb{R}^{m\times m}, V\in\mathbb{R}^{n\times n}$ both orthogonal and
$$
\Sigma=\left[\begin{matrix} \sigma_1 & 0 & . & . & 0 \\ 0 & \sigma_2 &  &  & . \\ . &  & . &  & . \\ . &  &  & . & . \\ . &  &  &  & \sigma_p \\ . &  &  &  & 0 \\ . &  &  &  & . \\ . &  &  &  & . \\ . &  &  &  & . \\ 0 & 0 & . & . & 0 \end{matrix} \right]\hspace{2cm} 
\begin{split}
p=min(m,n) \\
\sigma_i\geq 0\;\forall i\in[1,p]
\end{split}
$$
$\sigma_i$ are called singular values of $A$.
$U^TAV=\Sigma\iff A=U\Sigma V^T$ 
###### Theorem
$\sqrt{\lambda_i(A^TA)}=\sigma_i(A), \forall i$
###### Proof
$$
A^TA=(U\Sigma V^T)^T U\Sigma V^T=V\Sigma^TU^TU\Sigma V^T=V\Sigma^T\Sigma V^T
$$
So $A^TA$ is [[Matrix Similarity|similar]] to $\Sigma^T\Sigma$ (hence preserving its spectrum):
$$
\lambda_i(A^TA)=\lambda_i(\Sigma\Sigma^T)=[\sigma_i(A)]^2
$$
