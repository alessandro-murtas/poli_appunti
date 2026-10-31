Given $A in RR^(m times n), m>= n$ I say $x^*$ is a solution to $A x = b$ in the least square sense if
$$
phi.alt (x^*)=min_(y in RR^n) phi.alt (y),space.quad phi.alt (y)= norm(A y-b)_2^2
$$
$$
forall y in RR^n space.quad phi.alt(y)=&norm(A y - b)_2^2=(A y-b)^T (A y -b)=y^T A^T A y- b^T A y - y^T A^T b + b^T b=\
=&y^T A^T A y - 2y^T A^T b + b^T b
$$
$$
gradient phi.alt (y)=2A^T A y - 2 A^T b =0 <==> A^T A y=A^T b
$$
The vector $x^*$ that minimizes $phi.alt(y)$ is the solution in the classical sense of $A^T A x^*=A^T b$.
### Unique solution in LSS
If $A$ is not full rank and $x^*$ is a solution in LSS of $A x^*=b ==> x^* + z$ is also solution in LSS $forall z in ker(A)$.
For the problem to be [[Well posed problem|well posed]] among all the solutions in LSS we pick only the one with minimum norm.
### Theorem
$A$ full rank $==> A^T A$ [[SPD matrixes|SPD]] $==> exists! x^*$ solution in the least square sense
### Theorem for computing $x^*$
Given $A in RR^(m times n), m >= n$ full rank.
Let $A=hat(Q) hat(R)$ be its [[QR factorization#Reduced QR factorization|reduced QR factorization]].
Then
$$
x^*=hat(R)^(-1) hat(Q)^T b
$$
is the solution in the least square sense of $A x = b$.
#### Proof
Since $A$ has full rank $exists !Q,R$ s.t. $A=Q R$
$$
phi.alt(x)
=& norm(A x-b)_2^2=norm(Q R x - b)_2^2=norm(Q^T Q R x- Q^T b)_2^2=norm(R x - Q^T b)_2^2=\
=& norm(hat(R) x-hat(Q)^T b)_2^2 + sum_(i=n+1)^(m) (Q^T b)_i^2
$$
Since the second term does not depend on $x$ to minimize $phi.alt(x)$ we can only find $x^*$ s.t.
$$
norm(hat(R)x-hat(Q)^T b)_2^2=0 <==> hat(R) x=hat(Q)^T b <==> x=hat(R)^(-1) hat(Q)^T b
$$
### Theorem for computing unique $x^*$
Let $A in RR^(m times n), m>=n$ with [[Singular Value Decomposition|SVD]] given by $A=U Sigma V^T$, then the unique solution in LSS is
$$
x^*=A^dagger b
$$
where $A^dagger$ is the [[Pseudoinverse of a matrix|pseudoinverse]] of $A$