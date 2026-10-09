$$f'(x)=\frac{f(x+h)-f(x)}{h}$$
$$f''(x)=\frac{f'(x+h)-f'(x)}{h}=\frac{\frac{f(x+2h)-f(x+h)}{h}-\frac{f(x+h)-f(x)}{h}}{h}=\frac{f(x-h)-2f(x)+f(x+h)}{h^2}$$


Incognita: $u_j$
$$\frac{-u_{j-1}+2u_j-u_{j+1}}{h^2}=f(x_j)$$
$$-u_{j-1}+2u_j-u_{j+1}=h^2f(x_j)$$


$$Ax=b\implies (P-N)x=b\implies x=P^{-1}Nx+P^{-1}b\implies x=Bx+f$$
$$A=(P-N)\implies N=D-(D-E-F)=E+F$$
$$B=P^{-1}N,\;\;\; F=P^{-1}b$$
B: matrice di iterazione

$$x=Bx+f\implies x^{(k+1)}=Bx^{(k)}+f$$
Jacobi: $P=diag(A)$
A=
 10 3   4
 2   12 5
 7   5   10
P=
 1 0 0
 0 4 0
 0 0 4
Gauss Siedel: $P=lower triang(A)$
A=
 1 3 4
 2 4 5
 7 5 4
P=
 1 0 0
 2 4 0
 7 5 4
Consistenza: $$f=(I-B)x=(I-B)A^{-1}b$$

$$Ax=b$$ abbiamo solo $x^k$
$e^k=x-x^k$
$Ax^k=b^k$
$$r^k=(b-b^k)/b$$