# AVL Tree

Interactive AVL tree visualization with insert/delete operations, per-node height and balance factor labels, and step-through replay for LL / RR / LR / RL rotations.

## Features

- Insert and delete integer keys
- Height and balance factor shown on every node
- Rotation highlighting with color-coded LL / RR / LR / RL states during both insert and delete rebalancing
- Play / pause / step / replay controls
- Pan and zoom for larger trees
- Built-in sample sequence that triggers multiple rotation types

## What You See

- Green node: balanced
- Colored highlight: current rotation focus
- `H x`: node height
- `BF x`: node balance factor
- Timeline: every recorded step for the current replay
- Operations panel: insert/delete history

## Controls

- `Insert`: add the integer in the input box
- `Delete`: remove the integer in the input box
- `Load Rotation Demo`: preload a sequence with multiple rebalancing cases
- `Play / Pause / Step / Replay`: control the recorded animation
- `Reset View`: center and reset zoom

## Complexity

- Search: `O(log n)`
- Insert: `O(log n)`
- Delete: `O(log n)`
- Space: `O(n)`

---

# AVL 树

这是一个可交互的 AVL 树可视化，支持插入、删除、每个节点显示高度与平衡因子，并可逐步回放 LL / RR / LR / RL 四种旋转。

## 功能

- 插入和删除整数键值
- 每个节点显示高度和平衡因子
- 用不同颜色高亮插入/删除重平衡中的 LL / RR / LR / RL 旋转
- 支持播放 / 暂停 / 单步 / 重播
- 大树可平移、缩放查看
- 内置示例序列，可触发多种旋转情况

## 画面说明

- 绿色节点：当前平衡
- 彩色高亮：当前旋转关注区域
- `H x`：节点高度
- `BF x`：节点平衡因子
- Timeline：当前回放的所有步骤
- Operations：插入 / 删除历史

## 控制方式

- `Insert`：插入输入框中的整数
- `Delete`：删除输入框中的整数
- `Load Rotation Demo`：加载会触发多种旋转的示例序列
- `Play / Pause / Step / Replay`：控制动画回放
- `Reset View`：重置视图中心和缩放

## 复杂度

- 查找：`O(log n)`
- 插入：`O(log n)`
- 删除：`O(log n)`
- 空间：`O(n)`
