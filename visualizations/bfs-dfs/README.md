# BFS vs DFS

Interactive graph traversal visualization comparing BFS and DFS on the same editable graph.

在同一个可编辑图上对比 BFS 和 DFS 的交互式可视化。

## What's Shown / 展示内容

- Click empty space to add nodes / 点击空白处添加节点
- Drag from one node to another to connect them / 从一个节点拖到另一个节点以连边
- Double-click a node to set the start / 双击节点设置起点
- Blue = BFS traversal, Orange = DFS traversal / 蓝色表示 BFS，橙色表示 DFS
- Side panel shows queue or stack plus traversal order / 侧边栏显示队列或栈，以及遍历顺序

## Controls / 控件

| Button | Action |
|--------|--------|
| Run BFS | Auto-run breadth-first traversal / 自动播放 BFS |
| Run DFS | Auto-run depth-first traversal / 自动播放 DFS |
| Step | Advance one recorded traversal step / 单步执行 |
| Pause | Stop auto-play / 暂停自动播放 |
| Reset Traversal | Keep graph, restart traversal state / 保留图结构并重置遍历 |
| Clear Graph | Remove all nodes and edges / 清空图 |
| Speed slider | Change playback interval / 调整播放速度 |

## Algorithm / 算法

BFS uses a FIFO queue and explores the graph level by level. DFS uses a LIFO stack and keeps moving down one branch before backtracking.

BFS 使用先进先出的队列，按层遍历图；DFS 使用后进先出的栈，优先沿一条分支深入再回溯。

- **Time / 时间复杂度:** O(V + E)
- **Space / 空间复杂度:** O(V)
- **Key difference / 核心区别:** Queue vs Stack / 队列与栈
