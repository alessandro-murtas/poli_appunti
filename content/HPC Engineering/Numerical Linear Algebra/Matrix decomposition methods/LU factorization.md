Given $A in RR^(n times n)$ [[Matrix properties#Invertible (non singular)|invertible]] we can write it as $P A = L U$ with
- $P$: permutation matrix
- $L$: [[Triangular matrices#Unitary triangular matrices|unitary lower triangular]]
- $U$: [[Triangular matrices#Upper triangular matrix|upper triangular]]

To solve $A x = b$:
1. Factor $P A = L U$
2. Solve $L y = P b$
3. Solve $U x = y$