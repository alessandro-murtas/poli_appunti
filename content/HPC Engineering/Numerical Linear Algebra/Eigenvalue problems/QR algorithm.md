Given $A,A^((0))=A, U^((0))=I$
while(stopping_criteria)
$space.quad space.quad text("find") Q^((k-1))R^((k-1))$ s.t. $A^((k-1))=Q^((k-1))R^((k-1))$
$space.quad space.quad text("define") R^((k-1))Q^((k-1))=A^((k))$
$space.quad space.quad text("define") U^((k))=U^((k-1))Q^((k-1))$
end
### Theorem
$lim_(k -> infinity) A^((k))=T$ (triangular)
### Proof
$$
lim_(k->infinity) a_(i j)^k=0 space.quad forall i>j
$$
