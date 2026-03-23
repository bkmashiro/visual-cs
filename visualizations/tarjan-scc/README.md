# Tarjan's SCC Algorithm

An interactive visualization of **Tarjan's Strongly Connected Components (SCC)** algorithm on a directed graph.

## What is an SCC?

A **Strongly Connected Component** is a maximal set of vertices in a directed graph such that there is a path from every vertex in the set to every other vertex in the set.

For example, in a graph where A → B → C → A forms a cycle, {A, B, C} is one SCC.

## How Tarjan's Algorithm Works

Tarjan's algorithm finds all SCCs in a single DFS traversal — **O(V + E)** time.

### Key Concepts

- **`disc[v]`** — discovery time: when node `v` was first visited
- **`low[v]`** — the lowest discovery time reachable from `v`'s subtree (including back edges)
- **Stack** — tracks the current DFS path; when an SCC is complete, it's popped

### Algorithm Steps

```
function dfs(v):
  disc[v] = low[v] = timer++
  push v onto stack, mark onStack[v] = true

  for each neighbor w of v:
    if w not visited:
      dfs(w)
      low[v] = min(low[v], low[w])   // propagate low upward
    elif w is on stack:
      low[v] = min(low[v], disc[w])  // back edge — update low

  if disc[v] == low[v]:              // v is an SCC root!
    pop stack until v, collect as one SCC
```

### Why `disc[v] == low[v]` Means SCC Root

If `low[v] == disc[v]`, it means no node in `v`'s subtree can reach a node discovered *before* `v`. This makes `v` the topmost entry point of its cycle group — i.e., the SCC root.

### Edge Types

| Edge type | Meaning |
|:----------|:--------|
| **Tree edge** | DFS tree edge (w not yet visited) |
| **Back edge** | Points to an ancestor on the stack → cycle! |
| **Cross edge** | Points to a node already in a completed SCC (ignored) |

## Complexity

| | |
|:--|:--|
| Time | O(V + E) |
| Space | O(V) for disc/low/stack arrays |

Tarjan's algorithm is linear — it visits each node and edge exactly once.

## Comparison with Kosaraju's Algorithm

Both find SCCs in O(V + E), but:

- **Tarjan's**: single DFS pass, uses `low` values and a stack
- **Kosaraju's**: two DFS passes, transposes the graph between them

Tarjan's is typically preferred for its single-pass efficiency.

## Applications

- **Compiler optimization** — detect mutually recursive functions
- **Circuit analysis** — find feedback loops
- **Social networks** — find tightly-knit communities
- **Deadlock detection** — identify cycles in resource graphs
- **2-SAT problems** — model implications as SCCs

## Interactive Features

- **Add Node mode**: click canvas to place nodes
- **Add Edge mode**: click source → click destination to draw directed edges
- **Drag nodes**: rearrange the graph at any time
- **Load Demo**: generates a 8-node graph with 3 clearly separated SCCs
- **Run / Step**: watch the algorithm animate or advance one step at a time
- **Speed slider**: control animation speed

## Key Takeaways

1. A single DFS is enough — no need to transpose the graph
2. The `low` value propagates upward during DFS and captures reachability
3. The stack ensures each node belongs to exactly one SCC
4. Nodes are popped in reverse topological order of SCCs
