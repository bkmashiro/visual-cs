# Bellman-Ford

Interactive shortest-path visualization for directed graphs with negative edges. It shows each relaxation pass and highlights when a negative cycle is detected.

## Features

- Directed weighted graph with possible negative edges
- Full pass-by-pass relaxation animation
- Live distance / predecessor table
- Shortest-path tree highlight
- Extra negative-cycle detection pass
- Play / pause / step / reset controls

## What You See

- Blue edge: current edge being tested
- Green edge: successful relaxation
- Gold edge: current predecessor relation in the shortest-path tree
- Red edge: witness edge for a negative cycle
- Distance table: current best known distances from the source

## Complexity

- Time: `O(VE)`
- Space: `O(V)`

---

# Bellman-Ford

这是一个面向带负权有向图的最短路可视化，展示每一轮松弛过程，并在存在负环时高亮检测结果。

## 功能

- 支持可能含负权边的带权有向图
- 完整展示每一轮边松弛
- 实时距离 / 前驱表
- 最短路径树高亮
- 额外一轮负环检测
- 支持播放 / 暂停 / 单步 / 重置

## 画面说明

- 蓝色边：当前正在检查的边
- 绿色边：成功松弛的边
- 金色边：当前最短路径树中的前驱关系
- 红色边：负环检测的证据边
- 距离表：源点到各节点的当前最优距离

## 复杂度

- 时间：`O(VE)`
- 空间：`O(V)`
