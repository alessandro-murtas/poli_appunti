Given $A in RR^(n times n)$ [[SPD matrixes|SPD]] we can write it as $A=L^T L$ with $L$ [[Triangular matrices#Lower triangular matrix|lower triangular]].
To solve $A x=b$:
1. Factor $A=L^T L$ with cost of $O(n^3)$ FLOPS
2. Solve $L^T y=b$ with cost of $O(n^2)$ FLOPS
3. Solve $L x=y$ with cost of $O(n^2)$ FLOPS

### Algorithm for factorization
$r_11=sqrt(a_11)$
for $j=2,...,n$:
$space.quad space.quad$ for $i=1, ..., n-1$
$space.quad space.quad space.quad space.quad display(r_(i j)=1/r_(i i)(a_(i j) - sum_(k=1)^(i-1) r_(k i)r_(k j)))$

$space.quad space.quad display(r_(j j)=sqrt(a_(j j)-sum_(k=1)^(j-1)r^2_(k j)))$

Computational cost $approx n^3/3$