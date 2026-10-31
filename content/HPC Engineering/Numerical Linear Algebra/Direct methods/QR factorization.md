### QR factorization with partial pivoting
Given $A in RR^(n times n)$ [[Matrix properties#Invertible (non singular)|invertible]] we can decompose $A$ as $A=Q R$, with: 
* $Q$: orthogonal
* $R$: [[Triangular matrices#Upper triangular matrix|upper triangular]]

To solve $A x = b$:
1. Factor $A = Q R$
2. Solve $c = Q^T b$
3. Solve $R x = c$
### Pseudo-code
Given $a_1, a_2, dots.h , a_n$ column vectors of $A$
To find $q_j$ orthogonal to $q_1, q_2,dots.h , q_(j-1)$:
$$
w_j=a_j-sum_(k=1)^(j-1) (q_k^(-T)a_j)q_k -> q_j=w_j/norm(w_j)
$$
### QR factorization for rectangular matrices
Given $A in RR^(m times n), m gt.eq n$ full rank, $A$ admits a QR factorization if
- $exists Q in RR^(m times m)$ [[Matrix properties#Orthogonal|orthogonal]]
- $exists R in RR^(m times n)$ [[Triangular matrices#Upper triangular matrix|upper trapezoidal]]
s.t. $A=Q R$
### Reduced QR factorization
