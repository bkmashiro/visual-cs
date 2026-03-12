# Segment Tree

Interactive segment tree visualization for range sum queries, point updates, and lazy propagation.

## Features

- Array shown at the bottom and tree shown above
- Range query animation highlights the segments being combined
- Point update animation traces the path from leaf to root
- Lazy propagation demo with range add updates
- Play / pause / step / reset controls

## What You See

- Blue node: current active tree node
- Yellow nodes: query combination or update path
- Green nodes: fully covered query segment
- Purple label: node holding a lazy tag
- Bottom array mirrors the currently active interval

## Complexity

- Build: `O(n)`
- Range query: `O(log n)`
- Point update: `O(log n)`
- Range update with lazy propagation: `O(log n)`

---

# 线段树

这是一个线段树可视化页面，支持区间求和查询、单点更新以及 lazy propagation 区间更新。

## 功能

- 下方显示原数组，上方显示线段树结构
- 区间查询时高亮正在合并的区间节点
- 单点更新时展示从叶子到根的更新路径
- 支持 lazy propagation 的区间加法演示
- 支持播放 / 暂停 / 单步 / 重置

## 画面说明

- 蓝色节点：当前访问的树节点
- 黄色节点：查询合并路径或更新路径
- 绿色节点：被查询完整覆盖的区间
- 紫色 lazy 标记：该节点存在延迟下传的更新
- 底部数组会同步高亮当前活跃区间

## 复杂度

- 建树：`O(n)`
- 区间查询：`O(log n)`
- 单点更新：`O(log n)`
- 带 lazy propagation 的区间更新：`O(log n)`
