### SIMD vs SIMT
In SIMD:
- Explicit vectorization
- Divergence handled with masking

In SIMT:
- Implicit vectorization
- Divergence handled with SIMT stack (masking)
- Each thread has its own registry and program counter
- Each thread in a warp (32 threads) is executed simultaneously (assuming no divergence)

### Example of memory-bound algorithm
To compute inner product of two vectors we first multiply each entry in the first vector to the corresponding entry in the second one and then perform a reduction on the output vector.
A thread that performs the first step of the algorithm looks like this
```
Load A[i]
Load B[i]
Compute A[i] x B[i]
Store C[i]
```
Each thread will need to read 2 values from memory before doing any actual computation. For big vectors the memory won't be able to retrieve the data in enough time to keep the ALUs busy.

To avoid this we can do improvements to the memory:
- Improve throughput by adding lanes connecting GPU and memory
- Improve latency by increasing each lane's speed
- Improve throughput by putting as much data as I can in the same lane

GPUs are designed to maximize throughput, not to minimize latency.
> [!tip] A computation is bandwidth limited if the processor can request data faster than memory can deliver it

Fast parallel program reduce memory bandwidth:
- Fetch data less often
- Reuse data within a thread
- Share data across threads
- Prefer extra arithmetic over storing and reloading values

### Shared memory
