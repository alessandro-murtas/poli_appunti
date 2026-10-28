### QR factorization with partial pivoting
Given $A in RR^(n times n)$ [[Matrix properties#Invertible (non singular)|invertible]] we can decompose $A$ as $A=Q R$, with: 
* $Q$: orthogonal
* $R$: [[Triangular matrices#Upper triangular matrix|upper triangular]]

To solve $A x = b$:
1. Factor $A = Q R$
2. Solve $c = Q^T b$
3. Solve $R x = c$
### QR factorization for rectangular matrices
Given $A in RR^(m times n), m gt.eq n$ full rank, $A$ admits a QR factorization if
- $exists Q in RR^(m times m)$ [[Matrix properties#Orthogonal|orthogonal]]
- $exists R in RR^(m times n)$ [[Triangular matrices#Upper triangular matrix|upper trapezoidal]]
s.t. $A=Q R$
### Reduced QR factorization
