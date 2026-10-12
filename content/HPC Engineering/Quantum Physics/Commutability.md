$$
[hat(A) , hat(B)] =hat(A) hat(B) - hat(B) hat(A)
$$
If $[hat(A) , hat(B)]=0$ we say that the operators commute, otherwise not.
###### Theorem
$$
[hat(A) , hat(B)]=0 <=> (hat(A) ket(U) = v_A ket(U) <=> hat(B) ket(U) = v_B ket(U))
$$
Two operators commute if and only if they have the same eigenstates.
###### Proof 1 $arrow.r.double.long$ (only for non degenerate eigenvalues)
Suppose $hat(B) ket(U) = b ket(U)$, then
$$
hat(A) hat(B) ket(U) = hat(A) b ket(U)
$$
From hp $hat(A) hat(B) = hat(B) hat(A)$, so
$$
hat(A) hat(B) ket(U) = hat(B) hat(A) ket(U) = b hat(A) ket(U)
$$
then
$$
hat(B) (hat(A) ket(U)) = b (hat(A) ket(U))
$$
we define $ket(v) = hat(A) ket(U)$:
$$
hat(B) ket(v) = b ket(v)
$$
Since both $ket(v)$ and $ket(U)$ are eigenvectors of $hat(B)$ with the same eigenvalue $b$ they must be the same vector (from non-degeneracy) scaled by a factor $a$:
$$
ket(v) = hat(A) ket(U) = a ket(U)
$$
###### Proof 2 $arrow.l.double.long$
From hypothesis $ket(U)$ is an eigenstate for both $hat(A)$ and $hat(B)$:
$$
hat(B) ket(U) = b ket(U) and hat(A) ket(U) = a ket(U)
$$
$$
mat(delim: #none, hat(A) hat(B) ket(U) = b hat(A) ket(U) = a b ket(U); hat(B) hat(A) ket(U) = a hat(B) ket(U) = a b ket(U))  arrow.r.double.long hat(A) hat(B)= hat(B) hat(A)
$$
