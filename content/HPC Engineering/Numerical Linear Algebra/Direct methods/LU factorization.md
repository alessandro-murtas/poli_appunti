Given $A in RR^(n times n)$ [[Matrix properties#Invertible (non singular)|invertible]] we can write it as $P A = L U$ with
- $P$: permutation matrix
- $L$: [[Triangular matrices#Unitary triangular matrices|unitary lower triangular]]
- $U$: [[Triangular matrices#Upper triangular matrix|upper triangular]]

To solve $A x = b$:
1. Factor $P A = L U$ with cost of $O(n^3)$ FLOPS
2. Solve $L y = P b$ with cost of $O(n^2)$ FLOPS
3. Solve $U x = y$ with cost of $O(n^2)$ FLOPS
### Algorithm for factorization (Gaussian elimination)
for $k=1,...,n-1$:
$space.quad space.quad$ for $i=k+1, ..., n$:
$space.quad space.quad space.quad space.quad display(l_(i k)=(a_(i k)^((k)))/(a_(k k)^((k))))$
$space.quad space.quad space.quad space.quad$ for $j=k+1, ..., n$:
$space.quad space.quad space.quad space.quad space.quad space.quad a_(i j)^((k+1))=a_(i j)^((k))-l_(i k) a_(k j)^((k))$
$space.quad space.quad space.quad space.quad b_i^((k+1))=b_i^((k))- l_(i k) b_k^((k))$
After $n$ steps $A^((n))=U, l^((n))=L$
>[!warning] $a_(k k)^((k))$ must be $!= 0 forall k$, if it isn't use [[Pivoting thecniques|pivoting]]

Computational cost $approx 2/3 n^3$