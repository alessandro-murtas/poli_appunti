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

