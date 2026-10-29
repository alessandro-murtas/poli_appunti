A sparse matrix is a matrix whose most elements are zeros.
$n n z(A)$ indicates the number of non-zero entries of $A$.
In a sparse matrix $A in RR^(n times n)$, $n n z(A)=O(n)$

### Storage schemes
We can store only non-zero entries with their location so that data size become $O(n n z)$ instead of $O(n^2)$
- Compressed Space Row (CSR): store 3 arrays (value, column, pointer to row beginning)
- Compressed Space Column (CSC): store 3 arrays (value, row, pointer to column beginning)
- COO: store 3 arrays (value, row, column)