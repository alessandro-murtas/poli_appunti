In cases where i don't have the coarse grids and can't compute them with the techniques seen in [[Geometric multigrid]] i need to use Algebraic multigrid methods.
### Coarsening algorithm
Since algebraic smooth error varies slowly in the direction of [[Strong connection|strong connections]], we should coarsen in the direction of strong connections.
Starting from the matrix $A$ and its associated graph, given a strength matrix $S$
1. Choose independent set of $C$-vertices based on the graph of $S$
	1. Start with vertex $i$ and put it in $C$
	2. All vertices $i$ is strongly connected to become $F$-vertices
	3. An undecided vertex in $S$ gets picked and put in $C$ and its strongly connected vertices become $F$-vertices
	4. Repeat until we put all vertices in either $F$ or $C$
2. Choose additional $C$-vertices in order to satisfy the interpolation requirements.