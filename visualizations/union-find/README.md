# Union-Find

Interactive disjoint-set visualization with union by rank and path compression. Watch parent pointers update as sets merge and paths flatten.

## Features

- `union(a, b)` animation
- `find(x)` traversal and path compression
- Parent and rank shown on every node
- Component grouping cards
- Demo sequence with multiple merges
- Play / pause / step / replay controls

## What You See

- Green root: current representative
- Blue edge/node: current traversal or union focus
- Gold highlight: rank comparison
- Red highlight: nodes whose parent pointers were compressed
- Set cards: current connected components

## Complexity

- Amortized `find`: `O(alpha(n))`
- Amortized `union`: `O(alpha(n))`
- Space: `O(n)`

---

# 并查集

这是一个可交互的并查集可视化，展示按秩合并与路径压缩。你可以看到集合合并时父指针如何变化，以及查找后路径如何被压平。

## 功能

- `union(a, b)` 动画
- `find(x)` 遍历与路径压缩
- 每个节点显示父节点与秩
- 组件分组卡片
- 内置多次合并的示例序列
- 支持播放 / 暂停 / 单步 / 重播

## 画面说明

- 绿色根节点：当前代表元
- 蓝色边/节点：当前查找或合并焦点
- 金色高亮：秩比较
- 红色高亮：父指针被压缩的节点
- 集合卡片：当前连通分量

## 复杂度

- `find` 均摊：`O(alpha(n))`
- `union` 均摊：`O(alpha(n))`
- 空间：`O(n)`
