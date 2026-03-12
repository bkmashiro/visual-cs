# Kruskal's MST

Interactive minimum spanning tree visualization using Kruskal's algorithm. Edges are sorted by weight, then accepted or rejected with help from Union-Find.

## Features

- Random weighted undirected graph
- Sorted edge queue
- Step-by-step edge consideration
- Accept / reject animation based on cycle checks
- Live connected-component view
- Play / pause / step / reset controls

## What You See

- Blue edge: current candidate
- Green edge: chosen for the MST
- Red edge: rejected because it would form a cycle
- Set cards: components tracked by Union-Find
- MST weight: running total of accepted edge weights

## Complexity

- Sorting edges: `O(E log E)`
- Union-Find checks: near `O(E alpha(V))`
- Total: `O(E log E)`

---

# Kruskal 最小生成树

这是一个使用 Kruskal 算法的最小生成树可视化。所有边先按权重排序，然后借助并查集逐条决定接收还是跳过。

## 功能

- 随机带权无向图
- 已排序边队列
- 逐步检查每条边
- 基于成环检测的接收 / 拒绝动画
- 实时连通分量视图
- 支持播放 / 暂停 / 单步 / 重置

## 画面说明

- 蓝色边：当前候选边
- 绿色边：已加入 MST
- 红色边：因为成环而被跳过
- 集合卡片：并查集维护的连通分量
- MST 权重：当前已选边权重总和

## 复杂度

- 排序边：`O(E log E)`
- 并查集检查：近似 `O(E alpha(V))`
- 总体：`O(E log E)`
