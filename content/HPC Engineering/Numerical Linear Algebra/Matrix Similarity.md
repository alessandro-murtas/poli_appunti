Two square matrices $A, B in RR^(n times n)$ are **similar** if there exists an invertible matrix $T$ such that:
$$
B = T^(-1) A T <=> A = T B T^(-1)
$$
### Spectrum invariance
Similarity preserves the [[Spectrum|spectrum]]:
$$
sigma(A) = sigma(B)
$$
The eigenvalues do not change, but the eigenvectors transform via $T$.
### Transformation of eigenvectors
Let $underline(y) != bold(0)$ be an eigenvector of $B$ associated with eigenvalue $lambda$, and define $underline(w) = T underline(y)$:
$$
B underline(y) = lambda underline(y)
$$
Substitute $B = T^(-1) A T$:
$$
T^(-1) A T underline(y) = lambda underline(y)
$$
Multiply both sides on the left by $T$:
$$
A(T underline(y)) = lambda(T underline(y))
$$
Substitute $underline(w) = T underline(y)$:
$$
A underline(w) = lambda underline(w)
$$
Since $T$ is invertible and $underline(y) != bold(0)$, $underline(w) = T underline(y) != 0$. Therefore, $underline(w) = T underline(u)$ is an eigenvector of $A$ corresponding to $lambda$.
> [!note] Inversion
> Conversely, if $underline(v)$ is an eigenvector of $A$, then $underline(y)=T^(-1) underline(v)$ is an eigenvector of $B$.