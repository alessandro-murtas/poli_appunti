When using [[Linear iterative methods|linear iterative methods]] we don't know the actual error
$$
norm(x-x^((k)))/norm(x) lt.eq epsilon
$$
so we must use surrogates.
## Residual based stopping criteria
We can use the residual $r^((k))=b-A x^((k)) != 0$:
$$
norm(r^((k)))/norm(b) lt.eq epsilon
$$
It can be shown that
$$
norm(x -x^((k)))/norm(x)lt.eq K(A) norm(r^((k)))/norm(b)
$$
We can stop when $norm(r^((k)))/norm(b) lt.eq epsilon$ only when $K(A)$ is small.
#### Criteria for preconditioned methods
$$
norm(x -x^((k)))/norm(x)lt.eq K(P^(-1)A) norm(z^((k)))/norm(b)
$$
If we choose $P=I$ we don't change the condition number: $K(P^(-1)A)=K(A)$
If we choose $P=A$ we get the $K(P^(-1)A)=K(A^(-1)A)=K(I)=1$ which is ideal but then we would need to compute $A^(-1)$ which is exactly the problem we're solving so that's not a feasible option.
## Distance between consecutive iterations
Defined $delta^((k))=x^((k+1))-x^((k))$ we choose to stop when
$$
norm(delta^((k))) lt.eq epsilon
$$
It can be shown that
$$
norm(e^((k))) lt.eq 1/(1-rho(B))norm(delta^((k)))
$$
This criteria is good only if $rho(B) lt.double 1$
#### Proof
$$
norm(e^((k)))= &norm(x-x^((k)))=norm(x-x^((k+1))+x^((k+1))-x^((k)))= norm(e^((k+1))+delta^((k))) \
<=& norm(e^((k+1)))+norm(delta^((k)))=rho(B) norm(e^((k))) + norm(delta^((k)))
$$
