# van Emde Boas Tree

Interactive visualization of a van Emde Boas tree (universe U=16). Watch insert, delete, successor, and predecessor operations traverse the recursive √U structure in O(log log U) time.

## Features

- Universe bit-array (16 cells) showing present elements with high/low decomposition
- Recursive tree display: nested boxes for vEB(16) → summary + 4 clusters of vEB(4) → vEB(2)
- Animated insert, delete, successor, predecessor, and member queries
- Color-coded traversal: green for min, orange for max, yellow for summary path, blue for cluster path
- Step log showing recursive call trace

## Complexity

- Insert / Delete: `O(log log U)`
- Successor / Predecessor: `O(log log U)`
- Member: `O(log log U)`
- Space: `O(U)`

---

# van Emde Boas 树

van Emde Boas 树交互可视化（全域 U=16）。观看插入、删除、后继与前驱操作如何在递归 √U 结构中以 O(log log U) 时间遍历。

## 功能

- 全域位数组（16 格）显示已有元素及 high/low 分解
- 递归树展示：嵌套方框 vEB(16) → 摘要 + 4 个 vEB(4) 簇 → vEB(2)
- 动画展示插入、删除、后继、前驱与成员查询
- 按路径着色：绿色为 min，橙色为 max，黄色为摘要路径，蓝色为簇路径
- 步骤日志显示递归调用追踪

## 复杂度

- 插入 / 删除：`O(log log U)`
- 后继 / 前驱：`O(log log U)`
- 成员查询：`O(log log U)`
- 空间：`O(U)`
