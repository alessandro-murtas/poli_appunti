### Krylov space
Given $A in RR^(n times n)$ [[Matrix properties#Invertible (non singular)|non singular]], $y in RR^n without {0}$, the $k$-th order Krylov (sub) space is
$$
cal(K)_k (A, y)colon.eq op("span") (y, A y, ..., A^(k-1)y)
$$
We can write that
$$
x^((k)) in x^((0))+cal(K)_k (A,r^((0)))
$$
## Krylov space method
A Krylov space method is an iterative method starting from some initial approximation $x^((0))$ and the corresponding residual $r^((0))$ .
At each iteration $k$ (until convergence or breakdown), it generates iterates of the form
$$
x^((k))=x^((0))+p_(k-1)(A)r^((0))
$$
where $p_(k-1)$ is typically a polynomial of exact degree $k - 1$. For certain values of $k$, the iterate $x^((k))$ may fail to exist (breakdown), or the polynomial $p_(k-1)$ may have degree strictly less than $k - 1$.
### Solving non-symmetric systems with Krylov-space methods
To solve non-symmetric systems I can construct a dual system to the initial one
$$
A x = b <==> (A x)^T=b^T <==> x^T A^T=b^T
$$
Methods:
- [[Bi-Conjugate Gradient|BiCG]]
- BiCGstab (stable version)
- [[Generalized Minimal Residual|GMRES]]