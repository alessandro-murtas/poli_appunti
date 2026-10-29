Linear iterative methods are iterative methods to solve linear systems of the type
$$
A x = b
$$
With $A in RR^(x times n)$ and $x, b in RR^n$.
For the problem to be [[Well posed problem|well posed]] $A$ must be [[Matrix properties#Invertible (non singular)|invertible]].
They have the following form:
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
### Pseudo-code
Given $x^((0))$
while([[Stopping criteria]])
$space.quad space.quad text("solve") P x^((k+1))=N x^((k))+b$
end
