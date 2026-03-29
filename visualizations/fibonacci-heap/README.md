# Fibonacci Heap

An interactive visualization of the **Fibonacci Heap** data structure — a lazy priority queue that achieves amortized O(1) for insert, find-min, decrease-key, and union, and O(log n) for extract-min.

## What you'll see

- A **root list** of binomial-like trees connected by dashed sibling links
- The **min pointer** (gold glow) tracking the current minimum
- **Degree badges** on each node showing how many children it has
- **Marked nodes** (pink dot) flagged after losing one child — ready for cascading cut
- **Insert** adds a new single-node tree with zero restructuring
- **Extract-Min** triggers **consolidation** — linking trees of equal degree until all roots have unique degrees
- **Decrease-Key** cuts a node from its parent and propagates **cascading cuts** up the ancestry

## Algorithm

### Core Operations

| Operation | Amortized Time | Description |
|-----------|---------------|-------------|
| Insert | O(1) | Add a new tree to root list |
| Find-Min | O(1) | Return the min pointer |
| Decrease-Key | O(1) | Cut + cascading cut |
| Union | O(1) | Merge two root lists |
| Extract-Min | O(log n) | Remove min, consolidate |
| Delete | O(log n) | Decrease to -∞, extract-min |

### Insert

Simply add a new single-node tree to the root list and update the min pointer if necessary. No restructuring. **O(1)**.

```
insert(key):
  n = new FibNode(key)
  add n to root list
  if key < min.key: min = n
  size++
```

### Extract-Min

1. Move all children of `min` into the root list
2. Remove `min` from the root list
3. **Consolidate**: merge trees of equal degree by linking the larger-key root under the smaller-key root, until all roots have distinct degrees

The consolidation step is bounded by O(log n) due to the Fibonacci number property: a Fibonacci heap node of degree k has at least F_{k+2} descendants, so max degree is O(log n).

```
consolidate():
  A = array of size O(log n)
  for each root w:
    d = w.degree
    while A[d] exists:
      link(A[d], w)  // larger under smaller
      A[d] = null
      d++
    A[d] = w
```

### Decrease-Key & Cascading Cut

When a node's key is decreased below its parent's key:
1. **Cut** the node from its parent → add it to the root list
2. Walk up the ancestor chain:
   - If the ancestor is **unmarked** → mark it (first child loss)
   - If the ancestor is **marked** → cut it too and continue upward (**cascading cut**)

The `marked` flag ensures each node is cut at most once before becoming a root again, bounding the amortized cost.

```
decrease_key(node, new_key):
  node.key = new_key
  if node.parent and node.key < node.parent.key:
    cut(node, node.parent)
    cascading_cut(node.parent)
  if node.key < min.key: min = node

cascading_cut(node):
  p = node.parent
  if p:
    if not node.marked: node.marked = true
    else:
      cut(node, p)
      cascading_cut(p)
```

## Why Fibonacci?

The name comes from the **Fibonacci number** lower bound on subtree sizes. A Fibonacci heap node of degree k has at least F_{k+2} nodes in its subtree (where F_i is the i-th Fibonacci number). This ensures the maximum degree is O(log n), bounding extract-min to O(log n).

## Applications

- **Dijkstra's algorithm**: Fibonacci heap reduces complexity from O((V+E) log V) to O(E + V log V)
- **Prim's MST**: Same improvement
- **Network flow**: Decrease-key is critical for dynamic graph updates

## Key Takeaways

1. **Laziness is powerful**: Insert and decrease-key defer work to extract-min. Amortized O(1) is achieved by spreading restructuring costs.
2. **Potential function**: The amortized analysis uses Φ = (# trees) + 2(# marked nodes). Each lazy operation increases Φ by a constant; consolidation pays it down.
3. **Cascading cut** prevents overly deep trees by ensuring marked nodes are quickly promoted to roots.
4. **Practical note**: Fibonacci heaps have large constant factors. In practice, binary heaps or d-ary heaps are often faster for typical graph sizes.
