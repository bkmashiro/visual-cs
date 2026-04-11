# Visual-CS Todo Queue

## Upcoming

### Strings & Compression
- [x] boyer-moore — Boyer-Moore String Search (bad character + good suffix heuristics, right-to-left scan) ✅ 2026-04-11
- [ ] z-algorithm — Z-Algorithm (Z-array linear string matching, prefix vs suffix comparison)
- [ ] suffix-automaton — Suffix Automaton (SAM, online construction, endpos sets)
- [ ] suffix-tree — Suffix Tree (Ukkonen's algorithm, compact trie, O(n) construction)
- [ ] arithmetic-coding — Arithmetic Coding (interval subdivision, encoder + decoder)

### Graphs
- [ ] edmonds-blossom — Edmonds' Blossom (maximum matching, blossom contraction)
- [ ] karger-mincut — Karger's Min Cut (randomized contraction, edge collapse)
- [ ] hungarian — Hungarian Algorithm (assignment problem, augmenting path)
- [ ] pagerank — PageRank (iterative power method, dangling nodes, damping factor)
- [ ] scc-kosaraju — Kosaraju's SCC (two-pass DFS, transpose graph)

### Dynamic Programming
- [ ] knapsack — 0/1 Knapsack (DP table fill, item selection traceback)
- [ ] matrix-chain — Matrix Chain Multiplication (optimal parenthesization)
- [ ] lis — Longest Increasing Subsequence (patience sorting, O(n log n))
- [ ] egg-drop — Egg Drop Problem (2D DP table, floor vs egg tradeoff)

### Probabilistic & Approximate
- [ ] count-min-sketch — Count-Min Sketch (frequency estimation, hash collision, error bounds)
- [ ] hyperloglog — HyperLogLog (cardinality estimation, leading zeros, register merge)
- [ ] reservoir-sampling — Reservoir Sampling (streaming uniform sample)
- [ ] monte-carlo-pi — Monte Carlo π (point sampling in circle, convergence)

### Numerical & Mathematical
- [ ] fft — Fast Fourier Transform (butterfly diagram, bit-reversal permutation)
- [ ] strassen — Strassen Matrix Multiplication (7-multiply recursion tree)
- [ ] quickselect — QuickSelect / BFPRT (linear-time k-th element)
- [ ] extended-gcd — Extended Euclidean Algorithm (Bézout coefficients)
- [ ] chinese-remainder — Chinese Remainder Theorem (Garner's algorithm)

### Geometry
- [ ] line-sweep — Sweep Line (segment intersection, event queue)
- [ ] voronoi — Voronoi Diagram (Fortune's sweep line, beach line)
- [ ] closest-pair — Closest Pair of Points (divide & conquer, strip merge)

### Misc
- [ ] wavelet-tree — Wavelet Tree (range frequency queries, O(log σ) per op)
- [ ] disjoint-set-weighted — Weighted Union-Find (union by rank + path compression)
- [ ] van-emde-boas-ops — vEB Interactive Demo (predecessor/successor with universe size slider)

## Done
- miller-rabin — Miller-Rabin Primality Test (probabilistic primality, witness squaring chains, Carmichael numbers) ✅ 2026-04-03
- sieve-of-eratosthenes — Sieve of Eratosthenes (prime number sieve, mark composites step by step, O(n log log n)) ✅ 2026-03-31
- van-emde-boas — van Emde Boas Tree (O(log log U) predecessor queries, recursive √U structure) ✅ 2026-03-30
- cuckoo-hashing — Cuckoo Hashing (O(1) worst-case lookup, two hash tables, eviction chain) ✅ 2026-03-30
- paxos — Paxos (distributed consensus, proposer/acceptor/learner roles, Synod protocol) ✅ 2026-03-30
- raft-consensus — Raft Consensus (leader election, log replication, term-based state machine) ✅ 2026-03-30
- consistent-hashing — Consistent Hashing (ring topology, virtual nodes, minimal key remapping) ✅ 2026-03-30
- burrows-wheeler — Burrows-Wheeler Transform (BWT for data compression, forward/inverse transform visualization) ✅ 2026-03-30
- lru-cache — LRU Cache (doubly linked list + hashmap, O(1) get/put with MRU/LRU eviction) ✅ 2026-03-30
- rope — Rope (string data structure, binary tree for efficient concatenation/split/index operations) ✅ 2026-03-29
- topological-sort — Topological Sort / Kahn's Algorithm (BFS, in-degree, queue, cycle detection) ✅ 2026-03-29
- coin-change — Coin Change (DP table fill + traceback, minimum coins with recurrence dp[a]=min(dp[a-c]+1)) ✅ 2026-03-29
- manacher — Manacher's Algorithm (longest palindromic substring in O(n), center expansion with p-array) ✅ 2026-03-29
- bridge-articulation — Bridge & Articulation Points (Tarjan DFS, disc/low values, bridge detection low[v]>disc[u], cut-vertex detection) ✅ 2026-03-29
- segment-tree — Segment Tree (range sum query, point update, lazy propagation range add) ✅ 2026-03-29
- bloom-filter — Bloom Filter (probabilistic membership, k hash functions, false-positive rate visualization) ✅ 2026-03-29
- lcs — Longest Common Subsequence (DP table fill + traceback, LCS highlight in both strings) ✅ 2026-03-29
- levenshtein-distance — Levenshtein Distance (edit distance DP table fill with alignment trace) ✅ 2026-03-29
- cycle-detection — Floyd's Cycle Detection (tortoise & hare, 3-phase: detect + μ + λ) ✅ 2026-03-29
- skip-list — Skip List (probabilistic multi-level linked list) ✅ 2026-03-29
- aho-corasick — Aho-Corasick Multi-Pattern String Matching (trie + failure links + output links) ✅ 2026-03-29
- fibonacci-heap — Fibonacci Heap (lazy consolidation, decrease-key cascading cuts, amortized O(1) insert) ✅ 2026-03-29
- ford-fulkerson — Ford-Fulkerson Max Flow (augmenting paths, residual graph, BFS/DFS) ✅ 2026-03-29
- b-tree — B-Tree（多分岐木、DBインデックス）✅ 2026-03-29
- lz77 — LZ77 Compression (sliding window, back-reference tokens) ✅ 2026-03-29
- red-black-tree — Red-Black Tree (insert/delete recolor and rotation replay) ✅ 2026-03-29
- avl-tree — AVL Tree (self-balancing BST with rotation replay) ✅ 2026-03-29
- huffman-coding — Huffman Coding (optimal prefix-free compression) ✅ 2026-03-29
- quadtree — Quadtree (2D spatial partitioning) ✅ 2026-03-29
- treap — Treap (randomized BST) ✅ 2026-03-29
- splay-tree — Splay Tree (self-adjusting BST) ✅ 2026-03-29
- hash-table — Hash Table (collision handling visualization) ✅ 2026-03-29
- suffix-array — Suffix Array (efficient string indexing) ✅ 2026-03-29
- rabin-karp — Rabin-Karp (rolling hash string search) ✅ 2026-03-29
- knuth-morris-pratt — KMP String Matching (pattern search with failure function) ✅ 2026-03-27
- convex-hull — Convex Hull (Graham scan / Jarvis march) ✅ 2026-03-25
- tarjan-scc — Tarjan's SCC Algorithm (strongly connected components) ✅ 2026-03-23
- prims-algorithm — Prim's Algorithm (MST via greedy vertex expansion) ✅ 2026-03-21
- shell-sort — Shell Sort (gap-based insertion sort) ✅ 2026-03-19
- insertion-sort — Insertion Sort (simple quadratic sort) ✅ 2026-03-17
- counting-sort — Counting Sort (linear-time sort for bounded integers) ✅ 2026-03-15
- radix-sort — Radix Sort (non-comparative integer sorting) ✅ 2026-03-13
