<div align="center">

# 🎨 visual-cs

**Algorithm and data structure visualizations — pure HTML/CSS/JS, no build step.**

[![GitHub stars](https://img.shields.io/github/stars/bkmashiro/visual-cs?style=for-the-badge&logo=github&color=FFD700)](https://github.com/bkmashiro/visual-cs)
[![MIT License](https://img.shields.io/badge/license-MIT-22c55e?style=for-the-badge)](LICENSE)

**English** | [中文](README.zh.md)

> See algorithms run, step by step, in your browser. New visualization added every 2 days.

**[→ Browse All Visualizations](https://bkmashiro.github.io/visual-cs)**

</div>

---

## 🗂️ Visualizations

| Name | Category | Description |
|:-----|:---------|:------------|
| [Bubble Sort](./visualizations/bubble-sort/) | Sorting | Step-by-step comparison visualization |
| [Binary Search](./visualizations/binary-search/) | Search | Visual range narrowing |
| [BFS on Grid](./visualizations/bfs-grid/) | Graph | Interactive pathfinding |
| [Quicksort](./visualizations/quicksort/) | Sorting | Partition and pivot animation |
| [Game of Life](./visualizations/game-of-life/) | Simulation | Conway's cellular automaton |
| [AVL Tree](./visualizations/avl-tree/) | Tree | Self-balancing BST with insert/delete replay, node heights, and LL/RR/LR/RL rotations |
| [Dijkstra](./visualizations/dijkstra/) | Graph | Weighted shortest path on grid |
| [Heap Sort](./visualizations/heap-sort/) | Sorting | Max-heap build and extract |
| [Red-Black Tree](./visualizations/red-black-tree/) | Tree | Self-balancing BST with insert/delete recolor replay, left/right rotations, and live checks for all 5 RB properties |
| [Merge Sort](./visualizations/merge-sort/) | Sorting | Divide and conquer sort |
| [A* Pathfinding](./visualizations/astar/) | Search | Heuristic grid pathfinding |
| [Skip List](./visualizations/skip-list/) | Data Structure | Probabilistic layered linked list |
| [Trie](./visualizations/trie/) | Search | Prefix tree with real-time matching |
| [Suffix Array](./visualizations/suffix-array/) | String | Prefix-doubling suffix ordering with final SA + LCP arrays |
| [KD-Tree](./visualizations/kd-tree/) | Data Structure | 2D spatial partitioning & nearest neighbor |
| [Quadtree](./visualizations/quadtree/) | Data Structure | Adaptive 2D spatial partitioning with range query and nearest-neighbor pruning |
| [Radix Sort](./visualizations/radix-sort/) | Sorting | Non-comparative digit-by-digit sort |
| [Counting Sort](./visualizations/counting-sort/) | Sorting | Linear-time sort for bounded integers |
| [Insertion Sort](./visualizations/insertion-sort/) | Sorting | Key element slides left past larger values |
| [Shell Sort](./visualizations/shell-sort/) | Sorting | Gap-based insertion sort with Knuth sequence |
| [Prim's Algorithm](./visualizations/prims-algorithm/) | Graph | Greedy MST via min-heap frontier expansion |
| [Tarjan's SCC](./visualizations/tarjan-scc/) | Graph | Single-DFS strongly connected components with disc/low stack |
| [Convex Hull](./visualizations/convex-hull/) | Geometry | Graham scan + Jarvis march with side-by-side animated comparison |
| [Hash Table](./visualizations/hash-table/) | Data Structure | Separate chaining vs open addressing (linear probe) with collision visualization |
| [Huffman Coding](./visualizations/huffman-coding/) | String | Optimal prefix-free coding with frequency counts, greedy tree construction, and code-table generation |
| [Splay Tree](./visualizations/splay-tree/) | Data Structure | Self-adjusting BST with zig / zig-zig / zig-zag access replay |
| [Treap](./visualizations/treap/) | Data Structure | Randomized BST + heap priorities with insert bubble-up and delete sink-down rotations |
| [Fibonacci Heap](./visualizations/fibonacci-heap/) | Data Structure | Lazy priority queue with amortized O(1) insert/decrease-key; watch consolidation and cascading cuts |

---

## 📐 Philosophy

Each visualization is a **single self-contained HTML file**. No frameworks, no bundlers, no npm install.  
Open any file directly in your browser or serve with `python -m http.server`.

Every visualization includes:
- Interactive controls (play/pause/step/reset/speed)
- Inline explanation of the algorithm
- Key implementation notes

---

## 📄 License

MIT © [bkmashiro](https://github.com/bkmashiro)
