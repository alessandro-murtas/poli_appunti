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