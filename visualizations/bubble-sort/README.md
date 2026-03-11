# Bubble Sort

Interactive step-by-step visualization of bubble sort.

## What's Shown

- Color-gradient bars (blue=small, magenta=large)
- Comparing bars highlighted orange/red
- Sorted bars turn green
- Live counters: comparisons, swaps, passes

## Controls

| Button | Action |
|--------|--------|
| Play | Auto-run animation |
| Pause | Pause mid-sort |
| Step | One comparison at a time |
| Reset | Re-shuffle same array |
| New Array | Generate fresh random array |
| Size slider | 10–80 elements |
| Speed slider | 5–500ms per step |

## Algorithm

Bubble sort compares adjacent pairs and swaps if out of order. After each pass, the largest unsorted element is in its final position.

- **Time:** O(n²) average/worst, O(n) best (early exit)
- **Space:** O(1)
- **Stable:** Yes
