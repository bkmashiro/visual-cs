<div align="center">

# 🎨 visual-cs

**算法与数据结构可视化 — 纯 HTML/CSS/JS，零构建步骤。**

[![GitHub stars](https://img.shields.io/github/stars/bkmashiro/visual-cs?style=for-the-badge&logo=github&color=FFD700)](https://github.com/bkmashiro/visual-cs)
[![MIT License](https://img.shields.io/badge/许可证-MIT-22c55e?style=for-the-badge)](LICENSE)

[English](README.md) | **中文**

> 在浏览器中直观理解算法运行过程。每 2 天自动新增一个可视化。

**[→ 浏览所有可视化](https://bkmashiro.github.io/visual-cs)**

</div>

---

## 🗂️ 可视化列表

| 名称 | 分类 | 说明 |
|:-----|:-----|:-----|
| [冒泡排序](./visualizations/bubble-sort/) | 排序 | 逐步比较与交换可视化 |
| [二分查找](./visualizations/binary-search/) | 搜索 | 范围不断缩小的动画 |
| [网格 BFS](./visualizations/bfs-grid/) | 图算法 | 交互式寻路演示 |
| [快速排序](./visualizations/quicksort/) | 排序 | 分区与基准点动画 |
| [生命游戏](./visualizations/game-of-life/) | 模拟 | Conway 元胞自动机 |
| [AVL 树](./visualizations/avl-tree/) | 树 | 自平衡 BST，支持插入/删除回放，显示节点高度、平衡因子与 LL/RR/LR/RL 旋转 |
| [Dijkstra](./visualizations/dijkstra/) | 图算法 | 网格上的加权最短路 |
| [堆排序](./visualizations/heap-sort/) | 排序 | 最大堆构建与提取 |
| [红黑树](./visualizations/red-black-tree/) | 树 | 支持插入/删除变色回放、左右旋动画，并实时校验 5 条红黑树性质的自平衡 BST |
| [归并排序](./visualizations/merge-sort/) | 排序 | 分治排序动画 |
| [A* 寻路](./visualizations/astar/) | 搜索 | 启发式网格寻路 |
| [跳表](./visualizations/skip-list/) | 数据结构 | 概率层级链表 |
| [字典树](./visualizations/trie/) | 搜索 | 前缀树，实时匹配 |
| [后缀数组](./visualizations/suffix-array/) | 字符串 | 前缀倍增构建后缀序，并展示最终 SA 与 LCP 数组 |
| [KD 树](./visualizations/kd-tree/) | 数据结构 | 二维空间划分与最近邻搜索 |
| [四叉树](./visualizations/quadtree/) | 数据结构 | 自适应二维空间划分，支持范围查询与最近邻剪枝演示 |
| [基数排序](./visualizations/radix-sort/) | 排序 | 非比较排序，按位分桶 |
| [计数排序](./visualizations/counting-sort/) | 排序 | 线性时间，适用于有界整数 |
| [插入排序](./visualizations/insertion-sort/) | 排序 | 关键元素逐步向左越过更大的值 |
| [希尔排序](./visualizations/shell-sort/) | 排序 | 基于缩减间隔的插入排序，Knuth 间隔序列 |
| [Prim 最小生成树](./visualizations/prims-algorithm/) | 图算法 | 贪心扩展，最小堆维护前沿边，逐步构建 MST |
| [Tarjan 强连通分量](./visualizations/tarjan-scc/) | 图算法 | 单次 DFS 求所有强连通分量，disc/low 值与栈协同工作 |
| [凸包算法](./visualizations/convex-hull/) | 几何 | Graham 扫描 + Jarvis 步进，双算法并排动画对比 |
| [哈希表](./visualizations/hash-table/) | 数据结构 | 拉链法 vs 开放寻址（线性探测），碰撞过程可视化 |
| [Huffman 编码](./visualizations/huffman-coding/) | 字符串 | 最优前缀编码，展示字符频率统计、贪心树构建与编码表生成 |
| [伸展树](./visualizations/splay-tree/) | 数据结构 | 自调整 BST，逐步回放 zig / zig-zig / zig-zag 访问旋转 |
| [Treap](./visualizations/treap/) | 数据结构 | 随机化 BST + 堆优先级，通过插入上浮与删除下沉旋转维持平衡 |

---

## 📐 设计理念

每个可视化都是**单文件自包含 HTML**，无框架，无 npm，直接用浏览器打开。

每个可视化包含：
- 交互控件（播放 / 暂停 / 单步 / 重置 / 速度调节）
- 算法原理内联说明
- 关键实现要点

---

## 📄 许可证

MIT © [bkmashiro](https://github.com/bkmashiro)
