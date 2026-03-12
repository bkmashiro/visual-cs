# Topological Sort

Interactive DAG visualization comparing Kahn's algorithm and DFS-based topological sort side by side.

## Features

- Same DAG rendered twice for direct comparison
- Kahn view shows queue updates and edge removals
- DFS view shows recursion stack and finish order
- Nodes are colored by output / completion order
- Play / pause / step / reset controls

## What You See

- Blue node: currently active node
- Yellow node: queued in Kahn or on the DFS recursion stack
- Green-to-blue gradient: finalized order
- Orange edge: edge currently removed or explored

## Complexity

- Time: `O(V + E)`
- Space: `O(V + E)`

---

# 拓扑排序

这是一个 DAG 拓扑排序可视化，同时并排展示 Kahn 算法和 DFS 拓扑排序，便于直接比较两种方法。

## 功能

- 同一张 DAG 同时渲染两份
- Kahn 视图展示队列变化和边删除过程
- DFS 视图展示递归栈和完成顺序
- 节点按输出 / 完成顺序着色
- 支持播放 / 暂停 / 单步 / 重置

## 画面说明

- 蓝色节点：当前处理节点
- 黄色节点：Kahn 队列中的节点或 DFS 递归栈中的节点
- 渐变颜色：已经确定顺序的节点
- 橙色边：当前正在删除或遍历的边

## 复杂度

- 时间：`O(V + E)`
- 空间：`O(V + E)`
