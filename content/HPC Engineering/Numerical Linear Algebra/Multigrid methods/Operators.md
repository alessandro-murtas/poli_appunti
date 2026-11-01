### Restriction
The restriction operator takes us from fine to coarse grid.
The simples choice is to remove all entries we
### Interpolation
The interpolation operator takes us from a coarse to a fine grid
### Galerkin condition
$$
A_(2h)=I^(2h)_h A_h I_(2h)^h <==> I_h^(2h) = c(I^h_(2h))^T, c in RR
$$