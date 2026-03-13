# Radix Sort

Radix Sort is a non-comparative integer sorting algorithm that sorts data by grouping numbers by individual digits. Unlike comparison-based algorithms (quicksort, mergesort), it never compares two elements directly.

## How It Works

Radix Sort processes digits from least significant to most significant (LSD approach):

1. **Find max digits**: Determine how many digit positions need processing
2. **For each digit position** (ones → tens → hundreds → ...):
   - **Distribute**: Place each number into bucket 0-9 based on current digit
   - **Collect**: Gather numbers from buckets in order (0 first, 9 last)
3. **Result**: After processing all digits, array is sorted

### Why It Works

The key insight is **stability**: when distributing by digit `d`, numbers that were already sorted by digits `0..d-1` maintain their relative order within each bucket. This builds up the correct ordering digit by digit.

## Example

Sort `[170, 45, 75, 90, 802, 24, 2, 66]`:

**Pass 1 (ones digit):**
```
Buckets: 0:[170,90], 2:[802,2], 4:[24], 5:[45,75], 6:[66]
Result:  [170, 90, 802, 2, 24, 45, 75, 66]
```

**Pass 2 (tens digit):**
```
Buckets: 0:[802,2], 2:[24], 4:[45], 6:[66], 7:[170,75], 9:[90]
Result:  [802, 2, 24, 45, 66, 170, 75, 90]
```

**Pass 3 (hundreds digit):**
```
Buckets: 0:[2,24,45,66,75,90], 1:[170], 8:[802]
Result:  [2, 24, 45, 66, 75, 90, 170, 802] ✓
```

## Complexity

| Metric | Value |
|--------|-------|
| Time | O(d × n) where d = digit count |
| Space | O(n + k) where k = radix (10 for decimal) |
| Stable | Yes |
| In-place | No |

## When to Use

✅ **Good for:**
- Large arrays of integers with bounded range
- When d (digit count) is small relative to log(n)
- Situations requiring stable sort

❌ **Not ideal for:**
- Floating point numbers (needs adaptation)
- Strings of varying lengths
- Very large digit counts (d >> log n)

## Implementation Notes

```python
def radix_sort(arr):
    if not arr:
        return arr
    
    max_val = max(arr)
    exp = 1
    
    while max_val // exp > 0:
        counting_sort_by_digit(arr, exp)
        exp *= 10
    
    return arr

def counting_sort_by_digit(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10
    
    # Count occurrences
    for num in arr:
        digit = (num // exp) % 10
        count[digit] += 1
    
    # Cumulative count
    for i in range(1, 10):
        count[i] += count[i - 1]
    
    # Build output (traverse backwards for stability)
    for i in range(n - 1, -1, -1):
        digit = (arr[i] // exp) % 10
        output[count[digit] - 1] = arr[i]
        count[digit] -= 1
    
    # Copy back
    for i in range(n):
        arr[i] = output[i]
```

## Variants

- **LSD Radix Sort**: Process from least to most significant digit (shown here)
- **MSD Radix Sort**: Process from most to least significant digit (recursive)
- **Binary Radix Sort**: Use base-2 for binary data

## Related Algorithms

- [Counting Sort](../counting-sort/) — Used as subroutine for each digit
- [Bucket Sort](../bucket-sort/) — Similar distribution approach
- [Quicksort](../quicksort/) — Comparison-based alternative
