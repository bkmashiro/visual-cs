# Shell Sort

## Overview

Shell sort is a generalization of insertion sort invented by Donald Shell in 1959. Instead of comparing adjacent elements (gap = 1), it compares elements separated by a **gap** and performs an insertion sort on each interleaved subsequence. The gap shrinks each pass until it reaches 1, at which point the algorithm degenerates into a standard insertion sort — but on an array that is already nearly sorted, making that final pass very cheap.

## How It Works

1. **Choose a gap sequence.** This visualization uses the **Knuth sequence**: `1, 4, 13, 40, 121, …` (h = 3h + 1, starting from the largest h < n/3).
2. **For each gap (largest → 1):** perform an insertion sort where elements compare and shift across a stride of `gap` instead of 1.
3. **Repeat** until gap = 1 and the array is fully sorted.

### Example with gap = 4 on 8 elements

```
Index: 0   1   2   3   4   5   6   7
Array: 8   3   5   1   9   2   7   4

Gap-4 groups:
  Bucket 0: a[0]=8, a[4]=9
  Bucket 1: a[1]=3, a[5]=2
  Bucket 2: a[2]=5, a[6]=7
  Bucket 3: a[3]=1, a[7]=4

After gap-4 pass:
Array: 8   2   5   1   9   3   7   4
```

Then gap = 1 finishes the job on an almost-sorted array.

## Gap Sequences

| Sequence | Worst case | Notes |
|:---------|:-----------|:------|
| Shell (n/2) | O(n²) | Simple, poor |
| Hibbard (2^k − 1) | O(n^(3/2)) | Better |
| **Knuth (3h+1)** | **O(n^(3/2))** | **Used here** |
| Sedgewick | O(n^(4/3)) | Near-optimal |

## Complexity

| Case | Time |
|:-----|:-----|
| Best | O(n log n) |
| Average | O(n log² n) — Knuth |
| Worst | O(n^(3/2)) — Knuth |
| Space | O(1) in-place |
| Stable? | No |

## Key Takeaways

- Shell sort bridges the gap between O(n²) insertion sort and O(n log n) algorithms — without extra memory.
- The gap sequence is crucial: a bad choice leads to O(n²); a good one approaches O(n log n).
- The final gap-1 pass is nearly free because previous passes have pre-sorted the array.
- It is **not stable**: equal elements may swap order across gap strides.

## Visualization Features

- **Gap group coloring**: the ghost row at the bottom shows each element's bucket for the current gap.
- **Key element** (blue) is being inserted into its sorted position within its bucket.
- **Comparing** (amber) shows the element being compared against the key.
- **Shift** (red) shows elements being moved one gap to the right.
- **Placed** (green) confirms the key is in its correct gap-sorted position.
- All gap values in the Knuth sequence are shown as pills; active gap is highlighted in purple, completed gaps in green.
