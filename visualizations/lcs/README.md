# Longest Common Subsequence (LCS)

Interactive step-by-step visualization of the classic dynamic programming algorithm for finding the Longest Common Subsequence of two strings.

## Algorithm

Given two strings A (length m) and B (length n), build a 2D DP table where `dp[i][j]` stores the LCS length of `A[0..i-1]` and `B[0..j-1]`.

**Recurrence:**

```
if A[i-1] == B[j-1]:
    dp[i][j] = dp[i-1][j-1] + 1        # match: extend diagonal
else:
    dp[i][j] = max(dp[i-1][j], dp[i][j-1])   # no match: best of up/left
```

**Base cases:** `dp[0][j] = dp[i][0] = 0` for all i, j.

**Traceback:** Walk from `dp[m][n]` back to `dp[0][0]`:
- If `A[i-1] == B[j-1]`: character is part of LCS, move diagonally.
- Else: move toward the larger of `dp[i-1][j]` or `dp[i][j-1]`.

**Time complexity:** O(m × n)
**Space complexity:** O(m × n)

## Visualization Phases

1. **Fill** — Cells are filled row by row. Matching cells are highlighted green; non-matching cells show which neighbor (above or left) was taken.
2. **Traceback** — The optimal path from `dp[m][n]` to `dp[0][0]` is highlighted in violet/pink, with LCS characters distinguished from non-LCS traceback steps.
3. **Result** — The final LCS string is shown, and the LCS characters are highlighted in both original strings.

## Controls

| Control | Action |
|---------|--------|
| Play/Pause | Run or pause the animation |
| Step | Advance one step at a time |
| Reset | Return to initial state |
| Speed slider | Control animation speed (slow → fast) |

## Color Coding

| Color | Meaning |
|-------|---------|
| Green | Match: `dp[i][j] = dp[i-1][j-1] + 1` |
| Gold | No match: value taken from `dp[i-1][j]` (above) |
| Accent blue | No match: value taken from `dp[i][j-1]` (left) |
| Violet | Traceback path (non-LCS cells) |
| Pink | LCS character cells on traceback path |
