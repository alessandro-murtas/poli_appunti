Let $lambda_1, lambda_2, dots.h , lambda_n$ be [[Eigenvalues and eigenvectors|eigenvalues]] of $A in RR^(n times n)$ s.t.
$$
abs(lambda_1)>abs(lambda_2)gt.eq abs(lambda_3)gt.eq dots.h gt.eq abs(lambda_n)
$$
Given $x^((0))$ initial guess s.t. $norm(x^((0)))_2=1$
##### Pseudo-algorithm
while(stopping criteria)
$space.quad space.quad y^((k+1))=A x^((k))$
$space.quad space.quad display(x^((k+1))=y^((k+1))/norm(y^((k+1))))$
$space.quad space.quad display(lambda^((k+1))=[x^((k+1))]^H A x^((k+1)))$
end
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
At first step
$$
y^((1))=A x^((0))=A (sum_(i=1)^n alpha v_i)=sum_(i=1)^n alpha_i A v_i=sum_(i=1)^n alpha_i lambda_i v_i \
x^((1))=sum_(i=1)^n tilde(alpha)_i lambda_i v_i
$$
Where $display(tilde(alpha)_i=alpha_i/norm(alpha_i))$.
At second step we get $x^((2))=sum_(i=1)^n tilde(alpha)_i lambda_i^2 v_i$, in general $x^((k))=sum_(i=1)^n tilde(alpha)_i lambda_i^k v_i$
We obtain
$$
A x^((k))=alpha_1 lambda_1^((k)) (v_1+sum_(i=2)^n alpha_i/alpha_1 (lambda_i/lambda_1)^k v_i)
$$
Since $lambda_1$ is dominant isolated eigenvalue $lambda_1/lambda_k < 1 space.third  forall k>1$ thus the series converges to $0$.
Hence
$$
lim_(k-> infinity) A x^((k))=alpha_1 lambda_1 v_1 
$$
### Convergence rate
The convergence rate of the power method depends on the ratio $lambda_2/lambda_1$ power method converges rapidly if $lambda_2/lambda_1$ is close to $0$, slowly if close to $1$.