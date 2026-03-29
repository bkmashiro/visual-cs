# Rabin-Karp — Rolling Hash String Matching

An interactive visualization of the Rabin-Karp algorithm, showing how a rolling hash lets a fixed-size search window slide across the text in O(1) update time.

## Algorithm Overview

Rabin-Karp solves single-pattern string matching by hashing:

- the pattern of length *m*
- each length-*m* window of the text

Instead of comparing all *m* characters at every shift, it first compares hashes:

- if the hashes differ, the window is definitely not a match
- if the hashes match, verify characters to rule out a collision

### Hash Construction

For characters interpreted as integer codes:

```text
hash = (base * hash + code(ch)) mod mod
```

For a pattern `P[0..m-1]`, this is a polynomial hash:

```text
P[0] * base^(m-1) + P[1] * base^(m-2) + ... + P[m-1]
```

all taken modulo `mod`.

### Rolling Hash Update

When sliding from text window `T[s..s+m-1]` to `T[s+1..s+m]`, remove the outgoing character and add the incoming one:

```text
h = base^(m-1) mod mod
newHash = (base * (oldHash - code(T[s]) * h) + code(T[s+m])) mod mod
```

This makes each shift O(1), which is the core optimization.

## Visualization Features

- Builds the initial pattern hash and first window hash step by step
- Animates every window shift and rolling-hash update
- Shows hash comparisons separately from character verification
- Highlights confirmed matches and hash collisions
- Lets you adjust `base` and `mod` to explore collision behavior

## Complexity

| Case | Time |
|---|---|
| Initial hash build | O(m) |
| Average search | O(n + m) |
| Worst case | O(nm) |
| Space | O(1) |

The worst case occurs when many windows share the same hash and force full character verification.

## Key Takeaways

- Rabin-Karp is especially useful when hash checks reject most windows.
- The rolling hash reuses previous work instead of recomputing each window hash from scratch.
- Hash equality is only a filter, not proof; exact character verification is still required.
- The same idea extends naturally to multiple-pattern matching by hashing many patterns up front.

## References

- Rabin, Karp — *Efficient Randomized Pattern-Matching Algorithms*, IBM Journal, 1987
- CLRS Chapter 32 (String Matching)
