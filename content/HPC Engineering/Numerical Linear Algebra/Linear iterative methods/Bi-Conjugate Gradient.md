BiCG works in a similar way as [[Conjugate Gradient|CG]] but while doing one step in initial system it also does one in the dual system and computes the next direction by combining the directions of the 2 systems.
### Pseudo-code
Choose $x^((0)), hat(x)^((0)), hat(b)$
$r^((0))=b-A x^((0))$, $hat(r)^((0))=b- A hat(x)^((0))$
$d^((0))=r^((0))$, $hat(d)^((0))=hat(r)^((0))$
while([[Stopping criteria]])
$space.quad space.quad alpha_k=(hat(r)^((k))r^((k)))/(hat(d)_k A d_k)$
$space.quad space.quad x^((k+1))=x^((k))+alpha_k d_k,space.quad hat(x)^((k+1))=hat(x)^((k))+alpha_k hat(d)_k$
$space.quad space.quad r^((k+1))=r^((k))-alpha_k A d_k$
$space.quad space.quad hat(r)^((k+1))=hat(r)^((k))-alpha_k hat(d)_k A^T$
$space.quad space.quad beta_k=(hat(r)^((k+1))r^((k+1)))/(hat(r)^((k))r^((k)))$
$space.quad space.quad d_(k+1)=r^((k+1))+beta_k d_k, space.quad hat(d)_(k+1)=hat(r)^((k+1))+beta_k hat(d)_k$
end
### Remarks
Usually we choose $hat(x)^((0))=(x^((0)))^T$, $hat(b)=b^T$.
Must make sure that $hat(r)^((0))r^((0))!=0$ (not orthogonal).
Each iteration of BiCG costs twice as one iteration of CG.
BiCG is unstable $->$ BiCGstab