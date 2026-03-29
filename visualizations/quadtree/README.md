# Quadtree — 2D Spatial Partitioning Visualization

An interactive point-quadtree visualization focused on how recursive spatial partitioning supports fast range queries and nearest-neighbor search.

## What It Shows

- Click-to-insert points with live subdivision when a leaf exceeds its capacity
- Range query mode: drag a rectangle and replay which quadrants are visited or pruned
- Nearest-neighbor mode: click a target and watch bounding-box pruning narrow the search
- Adjustable leaf capacity with full tree rebuild so the effect on depth and leaf count is visible
- Dense-center, range-query, and nearest-neighbor presets for repeatable demos

## Why Quadtrees Work

A quadtree stores 2D points inside axis-aligned rectangular regions. Each node holds up to `capacity` points. Once a leaf overflows, it splits into four equal quadrants:

```text
NW | NE
---+---
SW | SE
```

Points are then redistributed into the appropriate child. Dense areas receive deeper subdivision while empty space stays coarse.

## Visualization Features

- Dark, self-contained single-file HTML page
- Insert / range query / nearest-neighbor interaction modes
- Step / play / pause / replay controls for the latest operation trace
- Canvas overlays for active region, subdivision flashes, range rectangle, and nearest match
- Live metrics for point count, leaf count, tree depth, and visited nodes
- Operation log plus timeline explaining each prune / visit / candidate check

## Complexity

| Operation | Typical | Worst Case |
|-----------|---------|------------|
| Insert | `O(log n)` | `O(n)` |
| Range query | `O(log n + k)` | `O(n)` |
| Nearest neighbor | Often sublinear | `O(n)` |
| Space | `O(n)` | `O(n)` |

`k` is the number of reported points. Worst-case behavior appears when points are distributed pathologically and pruning becomes ineffective.

## Key Takeaways

- Quadtrees adapt resolution to point density instead of partitioning space uniformly everywhere
- Rectangle-intersection checks let range queries discard entire quadrants at once
- Nearest-neighbor search becomes efficient when bounding boxes prove some branches cannot beat the current best distance
- Leaf capacity is a real tradeoff: smaller capacity gives deeper trees and finer pruning, larger capacity gives shallower trees and more point checks per leaf

## References

- Hanan Samet — *Foundations of Multidimensional and Metric Data Structures* (2006)
- Mark de Berg et al. — *Computational Geometry: Algorithms and Applications* (3rd ed.)
