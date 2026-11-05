### Amdahl's law (strong scaling)
The Amdahl's Law is a formula which gives the theoretical speedup in latency of the execution of a task at fixed workload that can be expected of a system whose resources are improved.
>[!info] Amdahl's law
>The overall performance improvement gained by optimizing a single part of a system is limited by the fraction of time that the improved part is actually used.

$$
S U(P, f)=1/((1-f)+f/P)
$$
Where
- $P$ is the number of processors
- $f$ is the parallelizable segment ($1-f$ is the sequential segment)
$$
lim_(P->+ infinity) S U(P,f)=1/(1-f)
$$
Given a fixed sized problem, if $f$ is small we don't get a lot of benefits by increasing number of processors.
### Gustafson's law (weak scaling)
While Amdahl's law focuses on fixed size problems, Gustafson's focuses on fixed time problem.
Given a fixed time as $P$ number increases the speedup increases linearly.
$$
S U (P)= s + P(1 -s) 
$$
where $s$ is fixed serial time (and $1-s$ is the fixed parallel time).
According to Gustafson's law the portion of parallelizable time $f$ is not fixed but decreases with size increase if the task is parallelized.
### Comparison
Amdahl's Law states that as computing power increases, computational requirements remain the same: the analysis of the same data will take less time with more computing power.
Gustafson, on the other hand, says that more computing power leads to more careful and complete analysis of the data in the same time.