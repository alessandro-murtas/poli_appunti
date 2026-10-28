Single Instruction Multiple Data (SIMD) provides useful CPU instructions to perform multiple arithmetic operations on contiguous data at the same time.
It does so by utilizing multiple ALUs each computing a different expression.
Same infrastructure for scalar instructions.
One instruction can act on multiple data:
- Same core
- Multiple ALUs
Vectorization can be done by the compiler (implicit) or the programmer (explicit).
### Divergence
SIMD needs instruction-stream coherence:
- With branches you can get multiple instructions and multiple data
```cpp
if (t > 0.0f) {
	t = t * t;
	t = t * 50.0f + 100.0f;
} else {
	t = (t + 30.0f) / 10.0f;
}
```
In this example some iterations will take first branch, some the second.
Vectorization can be done by ***masking*** the vectorized instructions
e.g.
Mask = T T F T F F F F
Only 1st, 2nd, 4th iteration will store the computed value, the others will discard it and now the second branch will be executed with another mask
Mask = F F T F T T T T
With 2 masks and 3 instructions we covered all the iterations.
Only ALUs with mask set to T will be activated.
In this example we get
- 3/8 used ALUs (lanes) in the first branch
- 5/8 used lanes in second branch
In worst case we hve 1/8 lanes used for a certain path.
There are also cases with more than 2 branches (if / else if / else).

Coherent execution: all lanes follow same path
Divergent execution: different lanes follow different paths

Compiler cannot remove divergence, this must be done by programmer.

### Coherence