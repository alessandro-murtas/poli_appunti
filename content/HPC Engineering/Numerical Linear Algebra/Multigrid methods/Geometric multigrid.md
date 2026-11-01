## Core idea
We want to solve a partial differential problem of the type
$$
A_h x_h = b_h
$$
where $h$ represents the width of each discretization step.
At iteration $k$ we are going to have
$$
A_h (x_h-x_h^((k))) = r^((k))
$$
we can then obtain the error equation
$$
A_h e_h^((k))=r_j^((k))
$$
Let $u_j$ be the approximate solution of $u(x_j)$ on the grid of mesh size $h$, $u_0$ and $u_(n+1)$ are known from boundary conditions.
### Correction scheme $(x^((k))-> x^((k+1)))$
1. Relax $nu_1$ times on $A_h x_h=b_h$ to obtain approximation $x^((k+nu_1))_h$
2. Compute residual $r^((k+nu_1))_h = b_h - A_h x_h^((k+nu_1))$
3. Move residual $r_h^((k+nu_1))$ from $cal(T)_h$ to $cal(T)_(2h)$ to obtain $r_(2h)^((k+nu_1))$
4. Solve the error equation $A_(2h)e_(2h)=r_(2h)^((k+nu_1))$ on $cal(T)_(2h)$
5. Move the error $e_(2h)$ from $cal(T)_(2h)$ to $cal(T)_h$ to obtain $e_h$
6. Correct approximation on $cal(T)_h$ with the error obtained on $cal(T)_(2h): x^((k+1))_h=x^((k))_h +e_h$