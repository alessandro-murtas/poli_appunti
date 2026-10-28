Memory stores data and instructions
Some instructions store/load data from/to CPU to/from memory, ALU instructions work on registers not directly on RAM.

Memory access latency: time between data request and data arriving at processor.
A processor stalls when it's waiting for memory access

e.g.:
```asm
ld r0 mem[r2]
ld r1 mem[r3]
add r0, r0, r1
```
The third instruction waits for the first two instructions because it needs the data from the memory to do the calculation.
## Cache
Memory inside the CPU/GPU that has much lower latency but smaller.
Adding cache leads to more complex silicon (earlier GPUs didn't have cache for this reason).
Cache hits reduce stalls

### Prefetching
Modern CPUs can predict future memory accesses so that when load instruction is executed it already has loaded the data in cache (cache hit).
Pro:
- Correct predictions speed up a lot memory accesses
Cons:
- More complex hardware
- Wrong predictions consume useless memory bandwidth

### Outstanding memory transactions
Multiple data requests are allowed and when the first request is received then all the others keep flowing
## Multithreading
When a thread stalls after a memory access, the processor switches to another thread until the data needed from the first thread is received.
Context switch time must be low for this method to be efficient.
In superscalar and multi-core architectures they have less registers so when context switch happens they need to store the old registers in memory.
GPUs have enough registers so no need to store them in memory (much faster context switch).
This method does NOT reduce memory access latency (might actually increase if data is read from memory before processor comes back to first thread).
This method maximizes core utilization and throughput of the system.
With many small contexts you get better latency hiding (what GPU actually does)
> [!tip]- Takeaway 1
> Hardware multithreading hides stalls by running another thread while one waits for memory.
> The memory operations is not faster, but the core is kept busier

> [!tip]- Takeaway 2
> More arithmetic per memory access means fewer threads are needed to hide stalls.
> Multithreading hides memory latency by filling wait time with useful arithmetic from other threads
### Hardware-supported multithreading
- Core manages execution contexts for multiple threads
- Interleaved multithreading
	- Fine grain: switch every cycle
	- Coarse grain: switch only on long stalls
- Simultaneous multithreading (Intel Hyper-threading)
	- Core can execute more than one instruction at a time ([[Superscalar]])