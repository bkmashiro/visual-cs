# Splay Tree

Interactive splay tree visualization with integer-key insert, search, and delete operations. Every access records the full rotation sequence so you can replay how the touched node moves toward the root.

## Features

- Insert, search, and delete integer keys in a self-adjusting BST
- Step-by-step replay for `zig`, `zig-zig`, and `zig-zag` rotations
- Animated access-path highlighting on every search or join
- Preset sequences for single rotation, double rotation, and working-set behavior
- Dark, self-contained single-file HTML page with no dependencies

## What It Demonstrates

- A splay tree does not store explicit balance metadata
- The accessed node is always moved to the root after a successful access
- Search misses still restructure the tree by splaying the last visited node
- Deletion splays the target to the root, removes it, then joins the remaining subtrees
- Frequently accessed keys tend to stay near the top over time

## Complexity

- Search: amortized `O(log n)`, worst-case `O(n)`
- Insert: amortized `O(log n)`, worst-case `O(n)`
- Delete: amortized `O(log n)`, worst-case `O(n)`
- Space: `O(n)`

## Controls

- `Insert`: add the integer in the input box
- `Search`: access a key and splay the found node or last visited node
- `Delete`: remove a key with subtree join visualization
- `Play / Pause / Step / Replay`: control frame playback
- `Random Insert`: add a random integer quickly
- Presets: load `zig`, `zig-zig`, `zig-zag`, or a working-set style sequence

## Why Splay Trees Matter

Splay trees are attractive when recent accesses strongly predict future accesses. They are simple compared with AVL or Red-Black Trees, yet still provide strong amortized guarantees and adapt naturally to locality-heavy workloads.
