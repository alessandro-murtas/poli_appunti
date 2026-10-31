Given $A$ full rank, I can write $A$ as $n$ linearly independent column vectors:
$$
A=mat(delim: "[", underline(a)_1, underline(a)_2, ..., underline(a)_n;;;;)->Q=mat(delim: "[", underline(q)_1, underline(q)_2, ..., underline(q)_n;;;;)
$$
With $A=Q R$ being the [[QR factorization]] and $underline(q)_1, underline(q)_2, ..., underline(q)_n$ being all orthogonal to each other.
### Pseudo-code
Given $A,A^((0))=A, U^((0))=I$
while(stopping_criteria)
$space.quad space.quad text("find") Q^((k))R^((k))$ s.t. $A^((k-1))=Q^((k))R^((k))$
$space.quad space.quad A^((k))= R^((k))Q^((k))$
$space.quad space.quad U^((k))=U^((k-1))Q^((k))$
end
### Theorem
$lim_(k -> infinity) A^((k))=T$  triangular [[Matrix Similarity|similar]] to $A$ (thus with same [[Spectrum|spectrum]])
#### Proof
$$
A^((k))
= &R^((k))Q^((k))=(Q^((k)))^T Q^((k)) R^((k)) Q^((k))=(Q^((k)))^T A^((k-1)) Q^((k))=...= \
= &(Q^((k)))^T (Q^((k-1)))^T (Q^((k-2)))^T ... (Q^((0)))^T A^((0)) Q^((0)) Q^((1)) ... Q^((k))=T^(-1) A^((0)) T
$$
$lim_(k->infinity) a_(i j)^((k))=0 space.quad forall i>j$
