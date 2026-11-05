Coherence: After i write a value in a memory cell all subsequent reads to that cell should read that same value.

Consistence: If I have 2 writes to different memory addresses the compiler might reorder the writes because in one thread program there is no difference.
But if there is another thread depending on the value of the 2 cells the order in which they are written might change behavior of that thread if it reads them while the other is writing (so the 2nd is already written but not the 1st).

> [!info]- Memory coherence
> Memory coherence defines requirements for the observed behavior of reads and writes to the same memory location

>[!info]- Memory consistency
>Memory consistency defines the behavior of reads and writes to different locations (as observed by other processors)

A program defines a sequence of loads and stores (the "program order"), there are 4 types of memory operation orderings:
- $W_X -> R_Y$: write to $X$ must commit before subsequent read from $Y$
- $R_X -> R_Y$: read from $X$ must commit before subsequent read from $Y$
- $R_X -> W_Y$: read to $X$ must commit before subsequent write to $Y$
- $W_X -> W_Y$: write to $X$ must commit before subsequent write to $Y$

>[!info]- "write to - must commit before subsequent read from -"
>This means that when a write comes before a read in program order, the write must commit (its results are visible) by the time the read occurs.

### Sequential consistency
Introduced to guarantee certain order of execution.
It maintains all four memory operation orderings.
### Relaxed consistency
Some rules are allowed to be violated.
Introduced to gain performance when two memory access are independent.

### Write buffers
To reduce write latency we can use write buffers. Instead of writing immediately the value to memory it stays in a write buffer so the program can continue execution before the data is actually written in memory.

- Partial store ordering: Allows writes to be reordered
- Weak ordering: remove all ordering
- Release Consistency: remove all constraints

The orderings are removed to improve performances.
When ordering is actually needed you use synchronization:
- Fence instructions that prevent reordering but are expensive (`__syncthreads`, `__syncwarps`, ...)

Intel uses total store ordering.
ARM uses relaxed consistency model.

## Data races
A data race occurs any time you have concurrent access to the same memory location and one of them is write. If ordering is not guaranteed program is not synchronized.
If program doesn't have data races ordering of instructions is not relevant.

## Locks
need atomic instruction to do a test-set instruction.

Using only locks to remove data-races slows down program execution because access to same memory location becomes sequential (also creating access on the bus when testing lock value from memory).
coherence traffic.