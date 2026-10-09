$$
[\hat{A},\hat{B}]=\hat{A}\hat{B}-\hat{B}\hat{A}
$$
If $[\hat{A},\hat{B}]=0$ we say that the operators commute, otherwise not.
###### Theorem
$$
[\hat{A},\hat{B}]=0 \iff \left(\hat{A}\ket{U} = v_A\ket{U} \iff \hat{B}\ket{U} = v_B\ket{U} \right)
$$
Two commuting operators share the same eigenstates.
###### Proof 1 $\implies$ (only for non degenerate eigenvalues)
Suppose $\hat{B}\ket{U}=b\ket{U}$, then
$$
\hat{A}\hat{B}\ket{U}=\hat{A}b\ket{U}
$$
From hp $\hat{A}\hat{B}=\hat{B}\hat{A}$, so
$$
\hat{A}\hat{B}\ket{U}=\hat{B}\hat{A}\ket{U}=b\hat{A}\ket{U}
$$
then
$$
\hat{B}(\hat{A}\ket{U})=b(\hat{A}\ket{U})
$$
we define $\ket{v}=\hat{A}\ket{U}$:
$$
\hat{B}\ket{v}=b\ket{v}
$$
Since both $\ket{v}$ and $\ket{U}$ are eigenvectors of $\hat{B}$ with the same eigenvalue $b$ they must be the same vector (from non-degeneracy) scaled by a factor $a$:
$$
\ket{v}=\hat{A}\ket{U}=a\ket{U}
$$
###### Proof 2 $\impliedby$
From hypothesis $\ket{U}$ is an eigenstate for both $\hat{A}$ and $\hat{B}$:
$$
\hat{B}\ket{U}=b \ket{U}\land\hat{A}\ket{U}=a \ket{U}
$$
$$
\begin{split}
\hat{A}\hat{B}\ket{U}=b\hat{A}\ket{U}=ab\ket{U}\\
\hat{B}\hat{A}\ket{U}=a\hat{B}\ket{U}=ab\ket{U}
\end{split}
\implies
\hat{A}\hat{B}=\hat{B}\hat{A}
$$