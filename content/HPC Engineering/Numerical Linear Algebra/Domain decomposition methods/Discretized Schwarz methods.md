Discretization yields a $n times n$ [[SPD matrixes|SPD]] linear system of the form $A x=b$.
We split our domain $Omega$ in $Omega_1, Omega_2$ s.t. $Omega=Omega_1 union Omega_2$.
Let $s_i in Omega$ be a vertex in the domain, we define $S_1, S_2$ as the set of $n_1,n_2$ vertices belonging to $Omega_1,Omega_2$.
Since $Omega_1 inter Omega_2 != emptyset ==> n_1+n_2 > n$.
Then we can build restriction operators $R_i in RR^(n_i times n)$.
We can obtain the matrices $A_i=R_i A R_i^T$, where $R_i^T in RR^(n times n_i)$ is the prolongation matrix and $A_i in RR^(n_i times n_i)$ is the $A$ submatrix corresponding to the $Omega_i$ subdomain.
### Multiplicative Schwarz Method
$$
& x^((k+1/2))=x^((k))+R_1^T A_1^(-1) R_1 (b -A x^((k))) \
& x^((k+1))=x^((k+1/2))+R_2^T A_2^(-1) R_2 (b -A x^((k+1/2)))
$$
Since to solve the problem in $Omega_2$ i need the solution in $Omega_1$ this problem must be solved sequentially.
This method is analog to [[Linear iterative methods#Jacobi & Gauss-Seidel|Gauss-Seidel]] but with overlapping blocks.
Its iteration matrix
$$
B_(M S)=(I − R^T_2 A^(−1)_2 R_2 A)(I − R^T_1 A^(−1)_1 R_1 A)
$$
### Additive Schwarz Method
$$
& x^((k+1/2))=x^((k))+R_1^T A_1^(-1) R_1 (b -A x^((k))) \
& x^((k+1))=x^((k+1/2))+R_2^T A_2^(-1) R_2 (b -A x^((k)))
$$
Similar to the multiplicative but uses $x^((k))$ to solve the problem in $Omega_2$ thus being easy to be implemented in a parallel way.
This method is analog to [[Linear iterative methods#Jacobi & Gauss-Seidel|Jacobi]] but with overlapping blocks.
We can write
$$
x^((k+1))
&= x^((k))+R_1^T A_1^(-1) R_1 (b-A x^((k))) + R_2^T A_2^(-1)R_2 (b-A x^((k)))= \
&= x^((k))+(R_1^T A_1^(-1) R_1 + R_2^T A_2^(-1)R_2)(b-A x^((k)))=\
&= x^((k))+P^(-1)_(a d) r^((k))
$$
This is a [[Richardson]] iteration with Additive Schwarz preconditioner.
Its iteration matrix
$$
B_(A S)=(R^T_2 A^(−1)_2 R_2 + R^T_1 A^(−1)_1 R_1)A
$$
With both methods the convergence is independent of the mesh size provided overlap between subdomains is sufficiently large.
### Schwarz methods as preconditioner
Both methods can be used as preconditioners:
$$
P_(a d)=(R_2^T A_2^(-1)R_2 + R_1^T A_1^(-1)R_1)
$$
Multiplicative Schwarz is not symmetric so to be used with [[Conjugate Gradient#Preconditioned Conjugate Gradient (PCG)|PCG]] we need to add a third step to make it [[SPD matrixes|SPD]].
### Many overlapping subdomains
To achieve higher degree of parallelism with Schwarz method, we can apply two-domain algorithm recursively or use many subdomains.
If there are $p$ overlapping subdomains, then define $R_i$ and $A_i$ as before, $i=1, dots.h, p$.
The Additive Schwarz preconditioner then takes form
$$
P^(-1)_(text("ad"))=sum_(i=1)^p R_i^T A_i^(-1)R_i
$$
Resulting generalization of block-Jacobi iteration is highly parallel, but not algorithmically scalable because the convergence rate degrades as grows.
The convergence rate can be restored by using a coarse grid correction to provide global coupling.
The Additive Schwarz preconditioner then takes the form
$$
P^(-1)_(text("ad"))=sum_(#text(fill: red)[$i=0$])^p R_i^T A_i^(-1)R_i
$$