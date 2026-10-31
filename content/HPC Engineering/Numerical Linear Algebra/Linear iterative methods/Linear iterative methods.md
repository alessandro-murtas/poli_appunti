Linear iterative methods are iterative methods to solve linear systems of the type
$$
A x = b
$$
With $A in RR^(x times n)$ and $x, b in RR^n$.
For the problem to be [[Well posed problem|well posed]] $A$ must be [[Matrix properties#Invertible (non singular)|invertible]].
We pick an initial guess $x^((0))$ and choose $P,N$ s.t. $A=P-N$ with $P$ [[Matrix properties#Invertible (non singular)|invertible]].
$$
A x=b <=> (P-N)x=b <=> P x-N x=b <=> x=P^(-1)N x+P^(-1)b
$$
After defining $B=P^(-1)N, f=P^(-1)b$ we can write
$$
A x=b <==> x=B x + f
$$
We can then write:
$$
x^((k+1))=B x^((k)) + f
$$
where $B in RR^(n times n), f in RR^n$. $B$ is called the iteration matrix.
$B$ must be chosen to satisfy two properties:
- Consistency: if $x^((k))=x arrow.r.double.long x^((k+1))=x arrow.r.double.long f=(I-B)x=(I-B)A^(-1)b$
- Convergence: $display(lim_(k -> +infinity)) x^((k))=x$
### Necessary and sufficient conditions for convergence
For a consistent iterative method of the form
$$
x^((k+1))=B x^((k))+f
$$
- $rho(B) < 1 arrow.l.r.double.long$ convergence ($rho(B)$: [[Spectrum#Spectral Radius|spectral radius]])
- $norm(B)_*<1 arrow.r.double.long$ convergence (where $*$ is whichever magnitude for the [[Norm of a matrix|norm]])
#### Proof
$$
lim_(k -> infinity) x^((k))=x arrow.r.double.long lim_(k-> infinity) e^((k))=lim_(k-> infinity) (x-x^((k)))=0
$$
$$
norm(e^((k+1)))=
&norm(x-x^((k+1)))=norm(x - B x^((k)) - f)=norm(cancel(x)-B x^((k))-cancel(x)+B x)=\ 
=&norm(B(x-x^((k))))=norm(B e^((k))) <= norm(B)norm(e^((k)))
$$
We obtained the error equation
$$
e^((k+1))=B e^((k)) space forall k gt.eq 1
$$
So we can write
$$
0 lt.eq norm(e^((k+1))) lt.eq norm(B)norm(e^((k))) lt.eq norm(B)norm(B)norm(e^((k-1))) lt.eq dots.h <= norm(B)^(k+1) norm(e^((0)))
$$
It's possible to prove that $rho(B)lt.eq norm(B)_p forall p$ to obtain the first two relations.
In practice if $rho(B) <1$ is close to $1$ convergence is not assured due to floating-point rounding errors. 
### Pseudo-code
Given $x^((0))$
while([[Stopping criteria]])
$space.quad space.quad text("solve") P x^((k+1))=N x^((k))+b$
end
### Jacobi & Gauss-Seidel
We can write 
$$
A=D-E-F=mat(delim: "[",,,-F;,D,;-E,,)
$$
- Jacobi: $P=D ==> B_J=I-D^(-1)A$
- Gauss-Seidel: $P=D-E arrow.r.double.long B_J=I-(D-E)^(-1)A$
- We could choose $P=A ==> B=I-A^(-1)A$ but it requires to compute $A^(-1)$ which is exactly what we're trying to avoid by using these methods. 

If $A$ is [[Diagonally dominant matrix|diagonally dominant]] both Gauss-Seidel and Jacobi convergence.
If $A$ is [[SPD matrixes|SPD]] only Gauss-Seidel converges.
If $A$ is tridiagonal $rho(B_J)^2=rho(B_(G S))$, so if $rho(B)<1$ they both converge but Gauss-Seidel converges more rapidly.