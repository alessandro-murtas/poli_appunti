RAM = Random Access Machine $\neq$ Random Access Memory
PRAM = Parallel RAM

|           |     PRAM      |         PRAM         |
| --------- | :-----------: | :------------------: |
| Processor |       1       |       Multiple       |
| Memory    |     local     |        shared        |
| Cost      | # insructions | # synchronous rounds |
| Execution |  sequential   |       parallel       |
A PRAM round is divided in 4 steps (all processors execute them synchronously):
1. Read memory (either from input/shared memory)
2. Compute
3. Store memory (either to output/shared memory)
4. Next round
Due to concurrent access to same memory cells we can define 3 models:

| Model | Sim. reads              | Sim. writes                         | Use                   |
| ----- | ----------------------- | ----------------------------------- | --------------------- |
| EREW  | Only distinct addresses | Only distinct addresses             | no same-round sharing |
| CREW  | OK same address         | Only distinct addresses             | Matrix multiplication |
| CRCW  | OK same address         | OK same address if write same value | global OR             |
Parallelization patterns:
1. Map (matrix vector multiplication): each output can be independently computed from other outputs so they can all be computed in parallel
2. Reduce (tree sum)
3. Prefix sum

PRAM model is useful to determine if parallel algorithm is efficient

## Metrics
- $T^*(n)$: time of **best** sequential algorithm for size n input
- $T_1(n)$: time of parallel algorithm with **one processor**
- $T^*(n)\leq T_1(n)$ this is always true, sometimes parallel algorithm is slower because of overhead (bookkeeping to organize processors work)
- $T_p(n)$: time of parallel alg with $p$ processors
- $S_p(n)=\frac{T^*(n)}{T_p(n)}$: speedup of algorithm with $p$ processors compared to serial algorithm
- $S_p(n)\leq p$ (ideally we want $S_p=p$ but in practice impossible)
- $E_p(n)=\frac{T_1(n)}{p\cdot T_p(n)}=\frac{S_p(n)}{p}$: efficiency ($E_p(n)\leq 1$) perfect efficiency means every processor contributes ideally without being idle or doing overhead work.
- $C_p(n)=p\cdot T_p(n)$: cost is total processors usage time
Typically increasing $p$ increases speedup and cost and decreases efficiency and execution time.