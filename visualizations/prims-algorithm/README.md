# Prim's Algorithm

**Category:** Graph · Minimum Spanning Tree

## What is a Minimum Spanning Tree?

A **Minimum Spanning Tree (MST)** of a weighted undirected connected graph is a spanning subgraph that:
- Connects all `V` vertices
- Contains exactly `V - 1` edges
- Has the minimum possible total edge weight

MSTs arise naturally in network design: connecting cities with roads, wiring computers in a LAN, building pipelines — you always want to connect everything at least cost.

## How Prim's Algorithm Works

Prim's builds the MST by greedily growing a **visited set** one vertex at a time.

### Key Idea — The Cut Property

At any point, the algorithm maintains a **cut**: the partition between visited and unvisited vertices. The **minimum-weight edge** crossing this cut is always safe to add to the MST (this is provable by exchange argument).

### Steps

1. **Initialize** — Pick any start node (e.g., node 0). Mark it visited. Push all its edges into a min-heap.
2. **Loop** — While the MST doesn't include all vertices:
   a. Pop the cheapest edge `(u → v, weight w)` from the heap.
   b. If `v` is already visited, skip (would form a cycle).
   c. Otherwise, add `v` to the MST and add edge `(u, v)` to the MST edge set.
   d. Push all edges from `v` to unvisited neighbors into the heap.
3. **Done** — After `V - 1` edges, the MST is complete.

### Pseudocode

```
function prim(graph, start):
    visited = {start}
    heap = min_heap(edges from start)
    mst_edges = []

    while |visited| < |V|:
        (cost, u, v) = heap.pop_min()
        if v in visited: continue
        visited.add(v)
        mst_edges.append((u, v, cost))
        for (v, w, neighbor) in graph[v]:
            if neighbor not in visited:
                heap.push((w, v, neighbor))

    return mst_edges
```

## Complexity

| | Value |
|---|---|
| Time (binary heap) | `O(E log V)` |
| Time (Fibonacci heap) | `O(E + V log V)` |
| Space | `O(V + E)` |

## Prim's vs Kruskal's

| | Prim's | Kruskal's |
|---|---|---|
| Approach | Grow from a vertex | Sort all edges globally |
| Data structure | Priority queue | Union-Find |
| Better for | Dense graphs | Sparse graphs |
| Starts from | A single vertex | Smallest edge anywhere |

Both produce a valid MST, but may choose different edges when weights aren't all unique.

## Interactive Controls

- **Randomize** — Generate a new random weighted graph (10–13 nodes)
- **Run / Pause** — Animate Prim's step by step
- **Step** — Advance one edge at a time
- **Reset** — Return to initial state with the same graph
- **Speed slider** — Control animation speed

## Visual Language

| Color | Meaning |
|---|---|
| 🟢 Green node | In the MST |
| 🟡 Yellow node | Most recently added (current frontier) |
| 🔵 Blue-outline node | Unvisited |
| Green edge | Added to MST |
| Yellow edge | Candidate in priority queue |
| Dark edge | Not yet considered |
| Circle on edge | Edge weight |
