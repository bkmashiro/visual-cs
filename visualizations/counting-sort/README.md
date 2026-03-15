# Counting Sort

A **non-comparative** sorting algorithm that counts the occurrences of each distinct element and uses arithmetic to determine their positions in the sorted output.

## How It Works

Counting Sort operates in three distinct phases:

### Phase 1: Count
Iterate through the input array and count how many times each value appears. Store these counts in a separate "count array" indexed by the value itself.

```
Input:  [3, 1, 4, 1, 5, 9, 2, 6]
Count:  [0, 2, 1, 1, 1, 1, 1, 0, 0, 1]
         ↑  ↑  ↑  ↑  ↑  ↑  ↑        ↑
         0  1  2  3  4  5  6        9
```

### Phase 2: Cumulate
Convert the count array into a cumulative sum. Each index now holds the number of elements less than or equal to that value — effectively the "end position" for that value in the sorted output.

```
Count:      [0, 2, 1, 1, 1, 1, 1, 0, 0, 1]
Cumulative: [0, 2, 3, 4, 5, 6, 7, 7, 7, 8]
```

### Phase 3: Place
Iterate through the input array **backwards** (for stability), using the cumulative counts to place each element at its correct position in the output array. Decrement the count after each placement.

```
Place 6 → output[6] (count[6] = 7, decrement to 6)
Place 2 → output[2] (count[2] = 3, decrement to 2)
...
```

## Complexity

| Metric | Value |
|--------|-------|
| Time   | O(n + k) |
| Space  | O(n + k) |

Where **n** is the number of elements and **k** is the range of input values.

## Key Properties

- **Non-comparative**: Doesn't compare elements directly, beats the O(n log n) lower bound for comparison sorts.
- **Stable**: Equal elements retain their original relative order (when placing backwards).
- **Limited range**: Only practical when k is small relative to n.
- **Integer only**: Works on non-negative integers (or values that can be mapped to them).

## When to Use

✅ Small, known range of integer values (e.g., ages, grades, ASCII codes)  
✅ Need stable sort  
✅ O(n) performance matters  

❌ Large or unbounded range (count array becomes huge)  
❌ Floating-point or string data (need mapping)  
❌ Memory-constrained environments  

## Visualization Features

- **Three-phase animation**: See Count → Cumulate → Place phases clearly
- **Color-coded highlighting**: Active elements pulse in distinct colors
- **Live count array**: Watch counts update and convert to positions
- **Output building**: See sorted array construct element by element
- **Step-by-step mode**: Advance manually to understand each operation

## Related Algorithms

- **Radix Sort**: Uses counting sort as a subroutine for each digit
- **Bucket Sort**: Distributes into buckets, then sorts within buckets
- **Pigeonhole Sort**: Similar counting approach for small ranges
