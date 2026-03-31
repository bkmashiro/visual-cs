<div align="center">

# 🎨 visual-cs

**Algorithm and data structure visualizations — pure HTML/CSS/JS, no build step.**

[![GitHub stars](https://img.shields.io/github/stars/bkmashiro/visual-cs?style=for-the-badge&logo=github&color=FFD700)](https://github.com/bkmashiro/visual-cs)
[![MIT License](https://img.shields.io/badge/license-MIT-22c55e?style=for-the-badge)](LICENSE)

**English** | [中文](README.zh.md)

> See algorithms run, step by step, in your browser. **59 visualizations** and counting.

**[→ Browse All Visualizations](https://bkmashiro.github.io/visual-cs)**

</div>

---

## 🗂️ Visualizations

### Sorting (9)

| Name | Description |
|:-----|:------------|
| [Bubble Sort](./visualizations/bubble-sort/) | Step-by-step comparison and swap visualization |
| [Quicksort](./visualizations/quicksort/) | Partition and pivot animation |
| [Heap Sort](./visualizations/heap-sort/) | Max-heap build and extract |
| [Merge Sort](./visualizations/merge-sort/) | Divide and conquer sort |
| [Insertion Sort](./visualizations/insertion-sort/) | Key element slides left past larger values |
| [Counting Sort](./visualizations/counting-sort/) | Linear-time sort for bounded integers |
| [Radix Sort](./visualizations/radix-sort/) | Non-comparative digit-by-digit sort |
| [Shell Sort](./visualizations/shell-sort/) | Gap-based insertion sort with Knuth sequence |
| [Coin Change](./visualizations/coin-change/) | Dynamic programming coin change optimization |

### Search & Pathfinding (4)

| Name | Description |
|:-----|:------------|
| [Binary Search](./visualizations/binary-search/) | Visual range narrowing |
| [A* Pathfinding](./visualizations/astar/) | Heuristic grid pathfinding |
| [BFS on Grid](./visualizations/bfs-grid/) | Interactive flood-fill pathfinding |
| [Trie](./visualizations/trie/) | Prefix tree with real-time matching |

### Graph Algorithms (11)

| Name | Description |
|:-----|:------------|
| [Dijkstra](./visualizations/dijkstra/) | Weighted shortest path on grid |
| [Floyd-Warshall](./visualizations/floyd-warshall/) | All-pairs shortest paths with matrix + graph view |
| [Bellman-Ford](./visualizations/bellman-ford/) | Single-source shortest paths with negative edges + cycle detection |
| [Prim's Algorithm](./visualizations/prims-algorithm/) | Greedy MST via min-heap frontier expansion |
| [Kruskal's MST](./visualizations/mst-kruskal/) | Edge-sort MST with Union-Find |
| [BFS vs DFS](./visualizations/bfs-dfs/) | Side-by-side interactive graph traversal comparison |
| [Tarjan's SCC](./visualizations/tarjan-scc/) | Single-DFS strongly connected components with disc/low stack |
| [Bridge & Articulation Points](./visualizations/bridge-articulation/) | Finding critical vertices and edges via DFS |
| [Topological Sort](./visualizations/topological-sort/) | DAG vertex ordering and cycle detection |
| [Ford-Fulkerson Max Flow](./visualizations/ford-fulkerson/) | Augmenting paths on residual graph |
| [Cycle Detection](./visualizations/cycle-detection/) | Floyd's Tortoise & Hare — 3-phase detection, cycle start, and cycle length |

### Trees (9)

| Name | Description |
|:-----|:------------|
| [AVL Tree](./visualizations/avl-tree/) | Self-balancing BST with insert/delete replay, node heights, and LL/RR/LR/RL rotations |
| [Red-Black Tree](./visualizations/red-black-tree/) | Self-balancing BST with insert/delete recolor replay, rotations, and live 5-property checks |
| [Splay Tree](./visualizations/splay-tree/) | Self-adjusting BST with zig / zig-zig / zig-zag access replay |
| [B-Tree](./visualizations/b-tree/) | Order-4 B-tree with search, insert, delete — watch splits, merges, and borrows |
| [Treap](./visualizations/treap/) | Randomized BST + heap priorities with insert bubble-up and delete sink-down |
| [Skip List](./visualizations/skip-list/) | Probabilistic layered linked list |
| [Segment Tree](./visualizations/segment-tree/) | Range sum queries, point updates, and lazy propagation |
| [Fenwick Tree](./visualizations/fenwick-tree/) | Binary indexed tree for prefix sums and point updates |
| [Fibonacci Heap](./visualizations/fibonacci-heap/) | Lazy priority queue with amortized O(1) insert/decrease-key; consolidation and cascading cuts |

### Hash & Probabilistic (4)

| Name | Description |
|:-----|:------------|
| [Hash Table](./visualizations/hash-table/) | Separate chaining vs open addressing (linear probe) with collision visualization |
| [Bloom Filter](./visualizations/bloom-filter/) | Bit-array filter with k hash functions, animated membership checks, and live false-positive rate |
| [Cuckoo Hashing](./visualizations/cuckoo-hashing/) | Two hash tables with O(1) worst-case lookup, animated eviction chains, and automatic rehash |
| [Consistent Hashing](./visualizations/consistent-hashing/) | Hash ring with virtual nodes; add/remove servers and watch minimal key remapping |

### Spatial (3)

| Name | Description |
|:-----|:------------|
| [KD-Tree](./visualizations/kd-tree/) | 2D spatial partitioning & nearest neighbor |
| [Quadtree](./visualizations/quadtree/) | Adaptive 2D spatial partitioning with range query and nearest-neighbor pruning |
| [Convex Hull](./visualizations/convex-hull/) | Graham scan + Jarvis march with side-by-side animated comparison |

### String & Text (8)

| Name | Description |
|:-----|:------------|
| [Suffix Array](./visualizations/suffix-array/) | Prefix-doubling suffix ordering with final SA + LCP arrays |
| [KMP](./visualizations/knuth-morris-pratt/) | Knuth-Morris-Pratt pattern matching with failure function |
| [Rabin-Karp](./visualizations/rabin-karp/) | Rolling hash string matching |
| [Aho-Corasick](./visualizations/aho-corasick/) | Multi-pattern string matching with failure links |
| [Burrows-Wheeler](./visualizations/burrows-wheeler/) | Forward BWT via rotation matrix sorting, inverse via LF-mapping reconstruction |
| [Huffman Coding](./visualizations/huffman-coding/) | Optimal prefix-free coding with frequency counts, greedy tree construction, and code-table generation |
| [LZ77 Compression](./visualizations/lz77/) | Sliding window lossless compression with back-reference tokens |
| [Rope](./visualizations/rope/) | Chunked binary string tree with node weights, animated index traversal, split, and concat |

### Dynamic Programming (4)

| Name | Description |
|:-----|:------------|
| [Levenshtein Distance](./visualizations/levenshtein-distance/) | DP table fill with color-coded operations and optimal alignment path trace |
| [Longest Common Subsequence](./visualizations/lcs/) | LCS dynamic programming table fill and traceback |
| [DP Visualizer](./visualizations/dp-visualizer/) | General DP table visualization and step-through tracing |
| [Manacher's Algorithm](./visualizations/manacher/) | Linear-time longest palindromic substring |

### Distributed Systems (3)

| Name | Description |
|:-----|:------------|
| [Raft Consensus](./visualizations/raft-consensus/) | 5-node cluster with leader election, log replication, heartbeat RPCs, and node failure simulation |
| [Paxos](./visualizations/paxos/) | Single-decree Synod Paxos with proposers, acceptors, learners; animated phase messages |
| [Consistent Hashing](./visualizations/consistent-hashing/) | Hash ring with virtual nodes and minimal key remapping |

### Other Data Structures (3)

| Name | Description |
|:-----|:------------|
| [LRU Cache](./visualizations/lru-cache/) | Doubly linked list + hash map with animated get/put, MRU/LRU reordering, and tail eviction |
| [Union-Find](./visualizations/union-find/) | Disjoint set union with path compression and union by rank |
| [van Emde Boas Tree](./visualizations/van-emde-boas/) | Recursive √U decomposition with O(log log U) predecessor queries, nested box visualization |

### Simulation (1)

| Name | Description |
|:-----|:------------|
| [Game of Life](./visualizations/game-of-life/) | Conway's cellular automaton |

### Number Theory (1)

| Name | Description |
|:-----|:------------|
| [Sieve of Eratosthenes](./visualizations/sieve-of-eratosthenes/) | Grid visualization of prime sieving — watch composites get crossed out in O(n log log n) |

---

## 📐 Philosophy

Each visualization is a **single self-contained HTML file**. No frameworks, no bundlers, no npm install.
Open any file directly in your browser or serve with `python -m http.server`.

Every visualization includes:
- Interactive controls (play/pause/step/reset/speed)
- Inline explanation of the algorithm
- Key implementation notes

### Technical Approach

- **Pure HTML/CSS/JavaScript** — Canvas API for animations, dark theme with color-coded state indicators
- **Zero dependencies** — each visualization is one `.html` file (~12–40 KB) with embedded CSS and JS
- **Bilingual** — many visualizations include English and Chinese inline documentation

---

## 📄 License

MIT © [bkmashiro](https://github.com/bkmashiro)
