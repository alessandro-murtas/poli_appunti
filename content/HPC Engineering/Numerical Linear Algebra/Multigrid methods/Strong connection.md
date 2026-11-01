Given a threshold $theta in (0,1)$ we say $i$ is strongly connected with $j$ if
$$
-a_(i j)>= theta max_(k != i) (-a_(i k))
$$
$S_i$ is the set of vertices $i$ is strongly connected to
$$
S_i={j in N_i: i text("is strongly connected to") j}
$$
where
$$
N_i={j != i: a_(i j)!=0}
$$
The strong matrix $S$ is made up of $S_i$ rows.