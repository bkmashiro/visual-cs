# Rope

Interactive rope visualization showing chunked leaves, internal node weights, index traversal, split, and concat.

## Features

- Build a balanced rope from any input string and chunk size
- Animate index lookup by comparing the query offset against node weights
- Split the logical string into left/right ropes at any position
- Concatenate the split halves back into one rope
- Step log and chunk view stay synchronized with the tree

## Complexity

- Index: `O(log n)` on a balanced rope
- Split / concat: typically `O(log n)`
- Space: `O(n)`

---

# Rope

这是一个 Rope 字符串数据结构可视化，展示分块叶子、内部节点权重、按索引查找、分裂与拼接。

## 功能

- 从任意字符串和块大小构建平衡 Rope
- 按节点权重逐步演示索引查询路径
- 在任意位置把逻辑字符串切成左右两棵 Rope
- 将切开的两半重新拼接回单棵 Rope
- 树视图、步骤日志和分块视图保持同步

## 复杂度

- 索引查询：平衡 Rope 下约为 `O(log n)`
- 分裂 / 拼接：通常为 `O(log n)`
- 空间：`O(n)`
