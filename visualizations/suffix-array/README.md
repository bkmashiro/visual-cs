# Suffix Array — Prefix Doubling Visualization

An interactive visualization of the suffix array construction process using the classic **prefix doubling** algorithm.

## What It Shows

The page animates how suffixes are sorted by progressively larger prefixes:

- start with the first character rank for every suffix
- compare rank pairs `(rank[i], rank[i + k])` for `k = 1, 2, 4, ...`
- sort suffixes by those pairs
- compress equal pairs into the same new rank
- stop once every suffix has a unique rank

It also derives the **LCP array** at the end so adjacent suffix overlap is visible immediately.

## Why Prefix Doubling Works

If suffixes are already ranked correctly by their first `k` characters, then the first `2k` characters can be compared using two precomputed pieces:

```text
(rank[i], rank[i + k])
```

The first value ranks the left half, and the second value ranks the right half. Sorting these pairs avoids comparing entire suffix strings directly at every step.

## Visualization Features

- dark self-contained single-file HTML page
- presets such as `banana$`, `abracadabra$`, and `mississippi$`
- play / pause / step / reset controls
- phase timeline for each doubling round
- live suffix cards with rank pairs and new ranks
- final suffix array and LCP array output

## Complexity

| Item | Complexity |
|---|---|
| Prefix doubling construction | `O(n log² n)` with comparison sort |
| Space | `O(n)` |
| Kasai LCP construction | `O(n)` |

With radix/counting sort over bounded ranks, suffix array construction can be improved to `O(n log n)`, but the visualization uses the more direct comparison-sort variant because it maps cleanly to the conceptual steps.

## Key Takeaways

- the suffix array stores starting indices, not the suffix strings themselves
- a unique sentinel like `$` makes suffix ordering cleaner and guarantees one smallest suffix
- rank compression is the core trick that lets later rounds reuse earlier work
- the LCP array is often as useful as the suffix array for repeated-substring analysis

## References

- Manber, Myers — *Suffix Arrays: A New Method for On-Line String Searches* (1990)
- Kasai et al. — *Linear-Time Longest-Common-Prefix Computation in Suffix Arrays* (2001)
