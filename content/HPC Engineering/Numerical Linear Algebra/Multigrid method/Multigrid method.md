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