Superscalar cores exploit [[ILP]] by adding more lanes to run more instructions in the same execution unit at the same time.

**Pros**:
- Code does not expose parallelism (no need to recompile code for superscalar cores)
- Automatic discovery of parallelism by hardware with branch predictors

**Cons**:
- More complex hardware
- Speedup is capped by dependency chains even with sophisticated hardware
- Sometimes possible parallelizations are not discovered because the instruction (discovery) window is too short for the CPU to detect possible instruction parallelism