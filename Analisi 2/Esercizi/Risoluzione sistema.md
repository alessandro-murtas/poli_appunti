Per risolvere il sistema lineare
$$
\begin{cases}
x'=ax+by\\
y'=cx+dy
\end{cases}
$$
Per prima cosa riscrivo il sistema in forma matriciale:
$$
x'=Ax,\text{ con } x = (x,y) \text{ e } A =
\begin{pmatrix}  
a & b \\
c & d
\end{pmatrix}
$$
Determino quindi autovalori della matrice $A$
$$
det\begin{pmatrix}
\lambda-a & b \\
c & \lambda-d
\end{pmatrix}=0
$$
e trovo $\lambda_{1,2}$.
Determino ora gli autovalori relativi agli autovalori risolvendo
$$
\begin{pmatrix}
\lambda-a & b\\
c & \lambda-a
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix}
=
\begin{pmatrix}
0 \\
0
\end{pmatrix}
$$
Quindi le soluzioni del sistema sono
$$
\begin{pmatrix}
x(t)\\
y(t)
\end{pmatrix} = c_1\begin{pmatrix}
x_1 \\
y_1
\end{pmatrix} e^{\lambda_1t} + c_2\begin{pmatrix}
x_2 \\
y_2
\end{pmatrix} e^{\lambda_2t}, \;\;c_1,c_2\in\mathbb{R}
$$