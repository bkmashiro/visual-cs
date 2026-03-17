# Insertion Sort

A simple, intuitive sorting algorithm that builds the final sorted array one element at a time.

## How It Works

Imagine sorting a hand of playing cards:
1. Start with one card (the first element) — it's trivially sorted
2. Pick up the next card and compare it with cards in your hand
3. Slide it left past all larger cards until it finds its correct position
4. Repeat until all cards are in your hand, sorted

## Algorithm

```
for i = 1 to n-1:
    key = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > key:
        arr[j+1] = arr[j]
        j = j - 1
    arr[j+1] = key
```

## Complexity

| Case | Time | Space |
|------|------|-------|
| Best | O(n) | O(1) |
| Average | O(n²) | O(1) |
| Worst | O(n²) | O(1) |

- **Best case (O(n))**: Array is already sorted — each element requires only one comparison
- **Worst case (O(n²))**: Array is reverse sorted — each element must shift all previous elements

## Properties

- **Stable**: Equal elements maintain their relative order
- **In-place**: Only requires O(1) extra memory
- **Adaptive**: Very efficient for nearly sorted data
- **Online**: Can sort elements as they are received

## Use Cases

1. **Small arrays**: Overhead of complex algorithms isn't worth it for n < 50
2. **Nearly sorted data**: Only O(n) comparisons when few elements are out of place
3. **Hybrid algorithms**: Used as the base case in Timsort (Python/Java) and Introsort
4. **Online sorting**: When you need to maintain a sorted list while receiving new elements

## Comparison with Other Sorts

| Algorithm | Best | Average | Worst | Stable | In-place |
|-----------|------|---------|-------|--------|----------|
| Insertion | O(n) | O(n²) | O(n²) | ✓ | ✓ |
| Bubble | O(n) | O(n²) | O(n²) | ✓ | ✓ |
| Selection | O(n²) | O(n²) | O(n²) | ✗ | ✓ |
| Merge | O(n log n) | O(n log n) | O(n log n) | ✓ | ✗ |
| Quick | O(n log n) | O(n log n) | O(n²) | ✗ | ✓ |

## Why It Matters

Despite its O(n²) worst case, insertion sort is one of the most practical sorting algorithms for:
- Small datasets
- Maintaining sorted lists with incremental insertions
- As a building block for more sophisticated algorithms

Its simplicity makes it easy to implement correctly, and its adaptive nature makes it surprisingly efficient in real-world scenarios where data often has some existing order.
