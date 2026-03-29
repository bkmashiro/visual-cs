# Treap

Interactive treap visualization with integer-key insert, search, and delete operations. Each inserted node receives a random priority, so you can watch how BST placement and heap-ordered rotations work together.

## Features

- Insert integer keys with automatically generated priorities
- Step-by-step replay for insert bubble-up rotations and delete sink-down rotations
- Search path highlighting for successful lookups and misses
- Preset sequences for rotation-heavy inserts, deletes, and mixed workloads
- Dark, self-contained single-file HTML page with no dependencies

## What It Demonstrates

- A treap stores two values per node: the key and a random priority
- Keys obey BST ordering; priorities obey max-heap ordering
- Insert uses BST placement first, then rotations to restore heap order
- Delete rotates the target downward by promoting the higher-priority child
- Random priorities give expected `O(log n)` height without explicit balance factors

## Complexity

- Search: expected `O(log n)`, worst-case `O(n)`
- Insert: expected `O(log n)`, worst-case `O(n)`
- Delete: expected `O(log n)`, worst-case `O(n)`
- Space: `O(n)`

## Controls

- `Insert`: add the integer in the input box with a fresh random priority
- `Search`: highlight the BST search path and show hit/miss behavior
- `Delete`: rotate the target toward a leaf, then remove it
- `Play / Pause / Step / Replay`: control frame playback
- `Random Insert`: add a random integer quickly
- Presets: load insert-heavy, delete-heavy, or mixed demo sequences

## Why Treaps Matter

Treaps are a compact way to get balanced-tree behavior with simple code. They use the same rotation primitives as AVL or red-black trees, but the balancing rule comes from randomized priorities instead of explicit structural metadata.
