# Levenshtein Distance

Interactive visualization of the **edit distance** dynamic programming algorithm.

## What it shows

- The full DP table filling, cell by cell, with color-coded operation types:
  - **Green** — match (characters equal, cost 0)
  - **Gold** — delete (remove a character from source)
  - **Pink** — insert (add a character from target)
  - **Violet** — replace (substitution, cost 1)
- The optimal alignment path traced back through the matrix
- The edit operation sequence (match / replace / delete / insert)
- Similarity percentage computed from the edit distance

## Controls

| Control | Action |
|:--------|:-------|
| Source / Target inputs | Edit strings live (up to 14 chars each) |
| Play / Pause | Auto-advance through DP steps |
| Step | Advance one cell at a time |
| Reset | Clear and restart |
| Speed slider | 1×–10× playback speed |
| Preset buttons | Load classic examples |

## Algorithm

The DP recurrence:

```
dp[0][0] = 0
dp[i][0] = i        (delete all of source prefix)
dp[0][j] = j        (insert all of target prefix)

dp[i][j] = dp[i-1][j-1]                         if s[i] == t[j]  (match)
          = min(dp[i-1][j] + 1,                  (delete)
                dp[i][j-1] + 1,                  (insert)
                dp[i-1][j-1] + 1)                (replace)
```

**Time:** O(m·n)
**Space:** O(m·n) for full table (reducible to O(min(m,n)) with rolling rows)

## Key insights

- The table is filled left-to-right, top-to-bottom
- Each cell depends on three neighbors: diagonal (replace/match), above (delete), left (insert)
- The optimal edit path is found by tracing back from dp[m][n] to dp[0][0]
- Levenshtein distance is used in spell checkers, DNA diff, fuzzy search, and git diff
