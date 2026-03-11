# Quicksort

Quicksort visualization with pivot, left/right pointer animation and comparison to bubble sort.

## What's Shown

- Red bar = current pivot (last element of subarray)
- Blue bar = left store pointer (i)
- Green bar = right scan pointer (j)
- Purple bars = active subarray range
- Green bars = sorted (pivot placed)

## Controls

Same as bubble sort: Play / Pause / Step / Reset / New Array / Size / Speed sliders.

The comparison table shows current run's stats vs estimated bubble sort numbers for the same array size.

## Algorithm

Quicksort uses Lomuto partition: scan with j, maintain store index i, place elements ≤ pivot at i, finally swap pivot into position. Recurse on both halves using an explicit stack.

- **Time:** O(n log n) average, O(n²) worst
- **Space:** O(log n)
- **Stable:** No
