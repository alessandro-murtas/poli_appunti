Modern processors combine several kind of parallelism:
- [[Superscalar]]
- [[Multi-core]]
- [[SIMD]]

| Form        | Where parallelism lives | Who exposes it        | Limiter                           |
| ----------- | ----------------------- | --------------------- | --------------------------------- |
| Superscalar | One stream              | Hardware              | Dependent recurrences             |
| Multi-core  | Across streams          | Software (programmer) | Overhead, load balance, bandwidth |
| SIMD        | Data lanes (ALUs)       | Compiler/programmer   | Divergence, alignment, bandwidth  |
### CPU/GPU model
CPU:
- Few powerful cores
- SIMD lanes

GPU:
- Many simple cores
- SIMD-like lanes

How to choose which parallelism
- Each iteration writes independent output: SIMD, threads
- Every data element follows same path: SIMD
- Long dependency chain: not superscalar
- Memory traffic dominant: adding cores/lanes may hit bandwidth limits