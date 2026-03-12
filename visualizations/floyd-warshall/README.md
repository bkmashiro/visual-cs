# Floyd-Warshall

Interactive Floyd-Warshall visualization showing the graph and the full distance matrix side by side.

## Features

- Animates every `(k, i, j)` relaxation check
- Highlights the current pivot node `k`
- Shows the full matrix state at each step
- Highlights improved shortest paths on the graph
- Play / pause / step / reset controls

## What You See

- Blue node: current pivot `k`
- Orange nodes: current source / target pair
- Green edges: current best shortest path
- Yellow edges: candidate route through `k`
- Matrix cell turns green when a shorter path is found

## Complexity

- Time: `O(V^3)`
- Space: `O(V^2)`

---

# Floyd-Warshall 全源最短路

这是一个 Floyd-Warshall 可视化页面，左侧显示图，右侧显示完整距离矩阵，并且同步展示算法每一步的状态。

## 功能

- 动画展示每一次 `(k, i, j)` 松弛检查
- 高亮当前中转点 `k`
- 每一步都显示完整矩阵状态
- 在图上高亮当前最短路径
- 支持播放 / 暂停 / 单步 / 重置

## 画面说明

- 蓝色节点：当前中转点 `k`
- 橙色节点：当前处理的源点 / 终点
- 绿色边：当前最优最短路径
- 黄色边：经过 `k` 的候选路径
- 当发现更短路径时，对应矩阵单元格会变绿

## 复杂度

- 时间：`O(V^3)`
- 空间：`O(V^2)`
