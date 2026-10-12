Let $lambda_1, lambda_2, dots.h , lambda_n$ be [[Eigenvalues and eigenvectors|eigenvalues]] of $A in RR^(n times n)$ s.t.
$$
abs(lambda_1)>abs(lambda_2)gt.eq abs(lambda_3)gt.eq dots.h gt.eq abs(lambda_n)
$$
Given $x^((0))$ initial guess s.t. $norm(x^((0)))_2=1$
##### Pseudo-algorithm
`while(stopping criteria)`
	$y^((k+1))=A x^((k))$
	$x^((k+1))=y^((k+1))/norm(y^((k+1)))$
	$lambda^((k+1))=[x^((k+1))]^H A x^((k+1))$
`end`
### Theorem
Given $A$ diagonalizable and $lambda_1$ isolated:
$$
lim_(k -> +infinity) x^((k))=v_1 and lim_(k -> +infinity) lambda^((k))=lambda_1
$$
#### Proof
Since $A$ is diagonalizable, $v_1,v_2,dots.h ,v_n$ form a basis for $C^n$ that is
$$
x^((0))=sum_(i=1)^n alpha_i v_i
$$