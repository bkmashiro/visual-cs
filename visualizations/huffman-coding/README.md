# Huffman Coding — Prefix-Free Compression Visualization

An interactive visualization of **Huffman coding**, the classic greedy algorithm for building an optimal binary prefix code from character frequencies.

## What It Shows

The page keeps three views synchronized:

- a frequency chart for every distinct character in the input
- the min-heap frontier as the two lightest nodes are merged repeatedly
- the final prefix tree and the code table generated from root-to-leaf paths

You can play the process automatically, step through it manually, or swap between short preset strings to see how different frequency distributions reshape the tree.

## Why Huffman Coding Works

Huffman coding relies on a greedy-choice property: in some optimal prefix code, the two least frequent symbols can be made siblings at the greatest depth. Merging them into a single combined weight reduces the problem to a smaller one of the same form. Repeating that step bottom-up produces an optimal binary prefix-free tree.

## Visualization Features

- dark self-contained single-file HTML page
- custom input plus presets such as `beep boop beer!` and `abracadabra`
- play / pause / step / reset controls with speed slider
- live character-frequency histogram
- heap / merge frontier with merge history
- animated prefix tree with `0` / `1` edge labels
- progressive code-table reveal during final DFS traversal

## Complexity

| Item | Complexity |
|---|---|
| Frequency counting | `O(n)` |
| Tree construction with min-heap | `O(k log k)` |
| Code generation DFS | `O(k)` |
| Space | `O(k)` |

Here `n` is the input length and `k` is the number of distinct characters.

## Key Takeaways

- more frequent characters should stay closer to the root
- Huffman codes are prefix-free, so no emitted code is the prefix of another
- the tree is built bottom-up from local greedy choices
- the encoded bit count is the weighted sum of leaf depths

## References

- David A. Huffman — *A Method for the Construction of Minimum-Redundancy Codes* (1952)
- Thomas H. Cormen et al. — *Introduction to Algorithms*, Huffman Codes chapter
