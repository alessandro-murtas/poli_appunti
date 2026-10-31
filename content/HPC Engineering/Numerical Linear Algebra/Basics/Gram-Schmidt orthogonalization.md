Given $a_1, a_2, dots.h , a_n$ column vectors of $A$
Find $q_j$ orthogonal to $q_1, q_2, dots.h , q_(j-1)$:
$$
w_j=a_j-sum_(k=1)^(j-1) (q_k^T a_j)q_j
$$
Normalize to get $q_j=w_j/norm(w_j)$.
This process is numerically unstable due to rounding errors.