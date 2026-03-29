# KMP — Knuth-Morris-Pratt String Matching

An interactive visualization of the KMP string-search algorithm, demonstrating both the failure-function build phase and the linear-time search phase.

## Algorithm Overview

KMP solves the classic problem: given a **text** of length *n* and a **pattern** of length *m*, find all occurrences of the pattern in the text in **O(n + m)** time — versus the naïve O(n·m) approach.

### Phase 1 — Build the Failure Function

The **failure function** (also called the *prefix table*) is precomputed from the pattern alone in O(m) time.

```
fail[k] = length of the longest proper prefix of pattern[0..k]
          that is also a suffix of pattern[0..k]
```

**Example** — pattern `ABABCABABD`:

| index   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---------|---|---|---|---|---|---|---|---|---|---|
| pattern | A | B | A | B | C | A | B | A | B | D |
| fail[]  | 0 | 0 | 1 | 2 | 0 | 1 | 2 | 3 | 4 | 0 |

`fail[7] = 3` because `"ABA"` is the longest prefix of `"ABABCABA"` that is also a suffix.

### Phase 2 — Search

Two pointers: `i` scans the text (never moves backward), `j` tracks the match depth in the pattern.

```
for i = 0 to n-1:
    while j > 0 and text[i] ≠ pattern[j]:
        j = fail[j-1]          # smart skip — not j = 0!
    if text[i] == pattern[j]:
        j++
    if j == m:
        report match at i - m + 1
        j = fail[m-1]
```

The key insight: when a mismatch happens at `j`, we already know that `pattern[0..j-1]` matched the text. The failure function tells us the longest prefix of the pattern that is guaranteed to still match — so we jump `j` there instead of starting over.

## Complexity

| | |
|---|---|
| Preprocessing | O(m) |
| Search | O(n) |
| **Total** | **O(n + m)** |
| Space | O(m) |
| Naïve comparison | O(n·m) |

## Key Takeaways

- The text pointer `i` **never moves backward** — this guarantees O(n) search.
- The failure function encodes all the reusable prefix-suffix knowledge about the pattern.
- KMP is optimal for single-pattern search; Aho-Corasick extends it to multiple patterns.
- Worst case for naïve (e.g., text = `AAAA…AB`, pattern = `AAA…AB`) is where KMP shines most.

## References

- Knuth, Morris, Pratt — *"Fast Pattern Matching in Strings"*, SIAM 1977
- CLRS Chapter 32 (String Matching)
