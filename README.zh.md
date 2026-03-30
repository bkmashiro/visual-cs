<div align="center">

# 🎨 visual-cs

**算法与数据结构可视化 — 纯 HTML/CSS/JS，零构建步骤。**

[![GitHub stars](https://img.shields.io/github/stars/bkmashiro/visual-cs?style=for-the-badge&logo=github&color=FFD700)](https://github.com/bkmashiro/visual-cs)
[![MIT License](https://img.shields.io/badge/许可证-MIT-22c55e?style=for-the-badge)](LICENSE)

[English](README.md) | **中文**

> 在浏览器中直观理解算法运行过程。已收录 **58 个可视化**，持续更新中。

**[→ 浏览所有可视化](https://bkmashiro.github.io/visual-cs)**

</div>

---

## 🗂️ 可视化列表

### 排序 (9)

| 名称 | 说明 |
|:-----|:-----|
| [冒泡排序](./visualizations/bubble-sort/) | 逐步比较与交换可视化 |
| [快速排序](./visualizations/quicksort/) | 分区与基准点动画 |
| [堆排序](./visualizations/heap-sort/) | 最大堆构建与提取 |
| [归并排序](./visualizations/merge-sort/) | 分治排序动画 |
| [插入排序](./visualizations/insertion-sort/) | 关键元素逐步向左越过更大的值 |
| [计数排序](./visualizations/counting-sort/) | 线性时间，适用于有界整数 |
| [基数排序](./visualizations/radix-sort/) | 非比较排序，按位分桶 |
| [希尔排序](./visualizations/shell-sort/) | 基于缩减间隔的插入排序，Knuth 间隔序列 |
| [零钱兑换](./visualizations/coin-change/) | 动态规划求最少硬币数 |

### 搜索与寻路 (4)

| 名称 | 说明 |
|:-----|:-----|
| [二分查找](./visualizations/binary-search/) | 范围不断缩小的动画 |
| [A* 寻路](./visualizations/astar/) | 启发式网格寻路 |
| [网格 BFS](./visualizations/bfs-grid/) | 交互式洪水填充寻路 |
| [字典树](./visualizations/trie/) | 前缀树，实时匹配 |

### 图算法 (11)

| 名称 | 说明 |
|:-----|:-----|
| [Dijkstra](./visualizations/dijkstra/) | 网格上的加权最短路 |
| [Floyd-Warshall](./visualizations/floyd-warshall/) | 全源最短路，矩阵 + 图双视图 |
| [Bellman-Ford](./visualizations/bellman-ford/) | 支持负权边的单源最短路 + 负环检测 |
| [Prim 最小生成树](./visualizations/prims-algorithm/) | 贪心扩展，最小堆维护前沿边 |
| [Kruskal 最小生成树](./visualizations/mst-kruskal/) | 按边排序 + Union-Find 构建 MST |
| [BFS vs DFS](./visualizations/bfs-dfs/) | 双算法并排交互式图遍历对比 |
| [Tarjan 强连通分量](./visualizations/tarjan-scc/) | 单次 DFS 求所有强连通分量，disc/low 值与栈协同 |
| [桥与割点](./visualizations/bridge-articulation/) | 通过 DFS 发现图中的关键顶点和边 |
| [拓扑排序](./visualizations/topological-sort/) | DAG 顶点排序与环检测 |
| [Ford-Fulkerson 最大流](./visualizations/ford-fulkerson/) | 增广路径与残余图 |
| [环检测](./visualizations/cycle-detection/) | Floyd 龟兔算法三阶段演示：检测环、定位起点、测量环长 |

### 树 (9)

| 名称 | 说明 |
|:-----|:-----|
| [AVL 树](./visualizations/avl-tree/) | 自平衡 BST，支持插入/删除回放，显示节点高度与 LL/RR/LR/RL 旋转 |
| [红黑树](./visualizations/red-black-tree/) | 支持插入/删除变色回放、左右旋动画，实时校验 5 条红黑树性质 |
| [伸展树](./visualizations/splay-tree/) | 自调整 BST，逐步回放 zig / zig-zig / zig-zag 访问旋转 |
| [B 树](./visualizations/b-tree/) | 4 阶 B 树的查找、插入与删除，展示分裂、合并与借位操作 |
| [Treap](./visualizations/treap/) | 随机化 BST + 堆优先级，通过插入上浮与删除下沉旋转维持平衡 |
| [跳表](./visualizations/skip-list/) | 概率层级链表 |
| [线段树](./visualizations/segment-tree/) | 区间查询、单点更新与懒标记传播 |
| [树状数组](./visualizations/fenwick-tree/) | 前缀和与单点更新 |
| [斐波那契堆](./visualizations/fibonacci-heap/) | 惰性优先队列，插入/decrease-key 均摊 O(1)；可视化整合与级联剪切 |

### 哈希与概率型 (4)

| 名称 | 说明 |
|:-----|:-----|
| [哈希表](./visualizations/hash-table/) | 拉链法 vs 开放寻址（线性探测），碰撞过程可视化 |
| [布隆过滤器](./visualizations/bloom-filter/) | 位数组过滤器，k 个哈希函数动画、成员查询与实时假阳性率统计 |
| [布谷鸟哈希](./visualizations/cuckoo-hashing/) | 双哈希表 O(1) 最坏查找，动画驱逐链，检测环时自动重建 |
| [一致性哈希](./visualizations/consistent-hashing/) | 哈希环 + 虚拟节点，增删服务器时仅重映射少量键 |

### 空间数据结构 (3)

| 名称 | 说明 |
|:-----|:-----|
| [KD 树](./visualizations/kd-tree/) | 二维空间划分与最近邻搜索 |
| [四叉树](./visualizations/quadtree/) | 自适应二维空间划分，支持范围查询与最近邻剪枝 |
| [凸包算法](./visualizations/convex-hull/) | Graham 扫描 + Jarvis 步进，双算法并排动画对比 |

### 字符串与文本 (8)

| 名称 | 说明 |
|:-----|:-----|
| [后缀数组](./visualizations/suffix-array/) | 前缀倍增构建后缀序，展示最终 SA 与 LCP 数组 |
| [KMP](./visualizations/knuth-morris-pratt/) | Knuth-Morris-Pratt 模式匹配与失配函数 |
| [Rabin-Karp](./visualizations/rabin-karp/) | 滚动哈希字符串匹配 |
| [Aho-Corasick](./visualizations/aho-corasick/) | 多模式字符串匹配，失败链接自动机 |
| [Burrows-Wheeler 变换](./visualizations/burrows-wheeler/) | 正向 BWT 旋转矩阵排序与末列提取，逆向 LF 映射重建原串 |
| [Huffman 编码](./visualizations/huffman-coding/) | 最优前缀编码，展示字符频率统计、贪心树构建与编码表生成 |
| [LZ77 压缩](./visualizations/lz77/) | 滑动窗口无损压缩，回引标记可视化 |
| [Rope 字符串树](./visualizations/rope/) | 分块二叉字符串树，展示节点权重、按索引查找路径、分裂与拼接 |

### 动态规划 (4)

| 名称 | 说明 |
|:-----|:-----|
| [Levenshtein 编辑距离](./visualizations/levenshtein-distance/) | DP 表格逐格填充，按操作类型着色，追踪最优对齐路径 |
| [最长公共子序列](./visualizations/lcs/) | LCS 动态规划表格填充与回溯 |
| [DP 可视化器](./visualizations/dp-visualizer/) | 通用 DP 表格可视化与单步追踪 |
| [Manacher 算法](./visualizations/manacher/) | 线性时间求最长回文子串 |

### 分布式系统 (3)

| 名称 | 说明 |
|:-----|:-----|
| [Raft 共识](./visualizations/raft-consensus/) | 5 节点集群，领导者选举、日志复制、心跳 RPC 与节点故障模拟 |
| [Paxos 共识](./visualizations/paxos/) | 单次决议 Synod Paxos，提议者/接受者/学习者角色，动画展示各阶段消息流 |
| [一致性哈希](./visualizations/consistent-hashing/) | 哈希环 + 虚拟节点，顺时针查找动画 |

### 其他数据结构 (3)

| 名称 | 说明 |
|:-----|:-----|
| [LRU 缓存](./visualizations/lru-cache/) | 双向链表 + 哈希表，动画展示 get/put 操作、MRU/LRU 重排与尾部淘汰 |
| [Union-Find 并查集](./visualizations/union-find/) | 路径压缩与按秩合并的不相交集合 |
| [van Emde Boas 树](./visualizations/van-emde-boas/) | 递归 √U 分解，O(log log U) 前驱查询，U=16 嵌套方框可视化 |

### 模拟 (1)

| 名称 | 说明 |
|:-----|:-----|
| [生命游戏](./visualizations/game-of-life/) | Conway 元胞自动机 |

---

## 📐 设计理念

每个可视化都是**单文件自包含 HTML**，无框架，无 npm，直接用浏览器打开。

每个可视化包含：
- 交互控件（播放 / 暂停 / 单步 / 重置 / 速度调节）
- 算法原理内联说明
- 关键实现要点

### 技术方案

- **纯 HTML/CSS/JavaScript** — Canvas API 动画，暗色主题，状态着色
- **零依赖** — 每个可视化为一个 `.html` 文件（约 12–40 KB），内嵌 CSS 和 JS
- **双语** — 大部分可视化包含中英文内联说明

---

## 📄 许可证

MIT © [bkmashiro](https://github.com/bkmashiro)
