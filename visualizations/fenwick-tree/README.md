# Fenwick Tree

Interactive Binary Indexed Tree visualization for prefix sums and point updates. See how `lowbit(i)` determines both coverage and traversal.

## Features

- Random initial array
- Point update animation
- Prefix sum query animation
- Tree nodes labeled with covered intervals
- Linked array and BIT views
- Play / pause / step / replay controls

## What You See

- Blue node: current update/query position
- Gold node: contributes to the current prefix sum
- Array row: source values
- BIT row: internal `tree[i]` cells
- Interval label: the range each tree cell summarizes

## Complexity

- Point update: `O(log n)`
- Prefix query: `O(log n)`
- Space: `O(n)`

---

# 树状数组

这是一个可交互的树状数组（Fenwick Tree / BIT）可视化，用于展示前缀和查询与单点更新。你可以直观看到 `lowbit(i)` 如何决定覆盖区间和跳转路径。

## 功能

- 随机生成初始数组
- 单点更新动画
- 前缀和查询动画
- 树节点显示覆盖区间
- 原数组与 BIT 视图联动
- 支持播放 / 暂停 / 单步 / 重播

## 画面说明

- 蓝色节点：当前更新/查询位置
- 金色节点：参与当前前缀和的节点
- 数组行：原始数据
- BIT 行：内部 `tree[i]` 单元
- 区间标签：每个树节点汇总的范围

## 复杂度

- 单点更新：`O(log n)`
- 前缀查询：`O(log n)`
- 空间：`O(n)`
