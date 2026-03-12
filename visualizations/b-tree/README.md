# B-Tree

Interactive B-Tree visualization using order 4 (minimum degree 2). It supports search, insertion, and deletion, including node splits, borrowing, merging, and root shrinking.

## Features

- Insert integer keys
- Delete integer keys
- Search path visualization
- Split-child animation during insertion
- Borrow / merge animation during deletion
- Play / pause / step / replay controls

## What You See

- Blue node: current descent or search path
- Green key: inserted or found key
- Gold node: split / borrow / merge focus
- Red key: deleted key or root shrink event
- Timeline: action history for replay

## Complexity

- Search: `O(log n)`
- Insert: `O(log n)`
- Delete: `O(log n)`
- Space: `O(n)`

---

# B 树

这是一个基于 4 阶 B 树（最小度数 2）的可视化，支持查找、插入、删除，并展示分裂、借位、合并以及根节点收缩。

## 功能

- 插入整数键
- 删除整数键
- 查找路径可视化
- 插入时的子节点分裂动画
- 删除时的借位 / 合并动画
- 支持播放 / 暂停 / 单步 / 重播

## 画面说明

- 蓝色节点：当前下降路径或查找路径
- 绿色键：插入成功或查找到的键
- 金色节点：分裂 / 借位 / 合并焦点
- 红色键：被删除的键或根收缩事件
- 时间线：可回放的操作历史

## 复杂度

- 查找：`O(log n)`
- 插入：`O(log n)`
- 删除：`O(log n)`
- 空间：`O(n)`
