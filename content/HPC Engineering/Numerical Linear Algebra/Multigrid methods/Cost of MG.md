### Computation cost
We define WU (working unit) as the cost of one relaxation on the finest grid $cal(T)_h$.
The cost of a single V-Cycle iteration with $nu_1=nu_2=1$ is $approx 1/(1-2^(-d))$WU
In 1D a single V-Cycle costs $4$WU, in 2D $8$WU, in 3D $16$WU etc.
V-Cycle **converges always** independently of $h$.
Cost $approx O(n^d log(n))$
### Storage cost
We need to store $x^((k))_h, b_h$ at each level $j$.
Storage cost $approx (2n^d)/(1-2^(-d))$
The storage costs of multigrid algorithms decrease relatively as the dimension of the problem increases.