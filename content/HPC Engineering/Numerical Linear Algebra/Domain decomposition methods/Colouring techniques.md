Used to parallelize [[Discretized Schwarz methods#Multiplicative Schwarz Method|multiplicative Schwarz method]].
We assign to each subdomain a color in a way that unrelated subdomains have the same color (in the sense that to solve one subdomain i don't need to solve the other).
Then i can run in parallel all the subdomains with the same color.
The parallelism is limited by the number of subdomains associated to the same color.