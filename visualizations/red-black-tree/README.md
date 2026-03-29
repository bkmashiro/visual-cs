# Red-Black Tree

Interactive red-black tree visualization with self-contained dark-theme HTML, step-by-step insert/delete repair playback, and explicit recolor / rotation annotations.

## Features

- Insert, delete, and search unique integer keys
- Frame-by-frame replay for insert fix-up and delete fix-up
- Rotation and color-flip event log with highlighted active nodes
- On-screen validation of all 5 red-black tree properties
- Built-in demo sequences for classic insert and delete cases
- Pure single-file HTML with inline CSS and JavaScript

## What It Demonstrates

- New nodes are inserted red, then repaired with recoloring or rotations
- Red-red violations are fixed locally around the parent / uncle / grandparent
- Delete may create an "extra black" that must be pushed upward or absorbed
- Left and right rotations preserve BST order while changing local shape
- Equal black height across all root-to-NIL paths keeps the tree logarithmic

## Controls

- `Insert`: add the integer in the input box
- `Delete`: remove the integer in the input box
- `Search`: replay the BST search path without changing structure
- `Play / Step / Replay`: control recorded frames for the latest operation
- `Insert Demo`: load the classic `41, 38, 31, 12, 19, 8` insert sequence
- `Delete Demo`: build a delete-heavy tree and replay a fix-up
- `Random +4`: insert four random unique values
- `Clear`: reset the tree

## Complexity

- Search: `O(log n)`
- Insert: `O(log n)`
- Delete: `O(log n)`
- Space: `O(n)`

---

# 红黑树

这是一个红黑树交互可视化，采用单文件深色主题 HTML，支持逐帧回放插入 / 删除修复过程，并明确展示颜色翻转与旋转步骤。

## 功能

- 插入、删除、查找唯一整数键
- 逐帧回放插入修复与删除修复
- 事件日志展示颜色翻转与左右旋
- 实时标注并校验 5 条红黑树性质
- 内置经典插入序列与删除示例
- 纯单文件 HTML，无外部依赖

## 你会看到什么

- 新节点默认红色插入，再通过变色或旋转恢复性质
- 当出现红父红子时，会围绕父节点 / 叔叔 / 祖父节点局部修复
- 删除黑节点后，额外黑高会向上推动或通过兄弟节点吸收
- 左旋 / 右旋会改变局部结构，但保持 BST 中序顺序不变
- 所有根到 NIL 叶子的黑高一致，从而保证树高保持对数级

## 控件

- `Insert`：插入输入框中的整数
- `Delete`：删除输入框中的整数
- `Search`：回放 BST 查找路径，不修改结构
- `Play / Step / Replay`：控制当前操作的动画回放
- `Insert Demo`：加载经典插入序列 `41, 38, 31, 12, 19, 8`
- `Delete Demo`：构造删除修复示例并回放
- `Random +4`：随机插入 4 个唯一整数
- `Clear`：清空整棵树

## 复杂度

- 查找：`O(log n)`
- 插入：`O(log n)`
- 删除：`O(log n)`
- 空间：`O(n)`
