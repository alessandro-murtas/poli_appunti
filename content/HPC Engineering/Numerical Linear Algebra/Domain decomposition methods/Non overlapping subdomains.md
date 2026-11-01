We can reduce overlapping section to the limit where two domains overlap only on their mutual boundary $Gamma$.
We call
- $S_i$ the interior segment of $Omega_i$
- $S_Gamma$ the interface nodes in $Gamma$

In a 2 subdomains system we obtain
$$
mat(A_11,0,A_(1Gamma);0,A_22, A_(2Gamma);A_(1Gamma)^T,A_(2Gamma)^T, A_(Gamma Gamma))
mat(x_1;x_2;x_Gamma) =
mat(b_1;b_2;b_Gamma)
$$
The zeros in $A$ represent the fact that nodes in $Omega_1$ and $Omega_2$ do not communicate: $Omega_1$ and $Omega_2$ communicate only through $Gamma$.
### Schur complement
We define $S$ the Schur complement
$$
S=A_(Gamma Gamma) - A_(1 Gamma)^T A_11^(-1)A_(1Gamma) - A_(2Gamma)^T A_22^(-1) A_(2Gamma)
$$
Then we can rewrite $A$ as
$$
A=mat(A_11,0,A_(1Gamma);0,A_22, A_(2Gamma);A_(1Gamma)^T,A_(2Gamma)^T, A_(Gamma Gamma))=
mat(I,0,0;0,I, 0;A_(1Gamma)^T,A_(2Gamma)^T, I)
mat(A_11,0,A_(1Gamma);0,A_22, A_(2Gamma);0, 0, S)
$$
We use the Schur complement to determine interface unknowns $x_Gamma$:
$$
S x_Gamma=tilde(b)_Gamma
$$
where
$$
tilde(b)_Gamma=b_Gamma - A_(1Gamma)^T A_11^(-1)b_1 - A_(2Gamma)^T A_22^(-1)b_2
$$
The other unknowns are given by
$$
x_1=A_11^(-1)(b_1-A_(1Gamma) x_Gamma)\
x_2=A_22^(-1)(b_2-A_(2Gamma) x_Gamma)
$$
##### Remarks
- The Schur complement matrix $S$ is expensive to compute and generally dense even if $A$ is sparse so $S x_Gamma=tilde(b)_Gamma$ must be solved iteratively.
- $K(S)$ is generally better than $K(A)$: $O(h^(-1))$ vs $O(h^(-2))$
### Many non overlapping subdomains
To improve parallelism we use many subdomains.
If $p$ is the number of subdomains, we define $I$ as the set of the interior nodes of all the subdomains and $Gamma$ the set of interface nodes.
$$
mat(A_(I I), A_(I Gamma); A_(I Gamma)^T, A_(Gamma Gamma))
mat(x_I;x_Gamma)=mat(b_I; b_Gamma)
$$
where
$$
A_(I I) = mat(A_11, 0, dots.h, 0; 0, A_22,,0;dots.v, , dots.down, dots.v; 0, 0,dots.h,A_(p p))
$$
Again we can use Schur complement:
$$
S x_Gamma=tilde(b)_Gamma
$$
where
$$
S=A_(Gamma Gamma)-A_(I Gamma)^T A_(I I)^(-1) A_(I Gamma)
$$
and
$$
tilde(b)_Gamma=b_Gamma - A_(I Gamma)^T A_(I I)^(-1) A_(I Gamma)
$$
Again this can be solved with iterative methods and after this we can compute
$$
x_I=A_(I I)^(-1)(b_I-A_(I Gamma)x_Gamma))
$$
Each occurrence of $A_(I I)^(-1)$ can be done in parallel since $A_(I I)$ is block diagonal.