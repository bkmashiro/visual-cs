# Paxos

Interactive visualization of the single-decree Paxos (Synod) consensus protocol. Watch Prepare/Promise/Accept/Accepted messages flow between proposers, acceptors, and learners.

## Features

- 3 proposers, 5 acceptors, 2 learners with animated message passing
- Propose values from any proposer with automatic proposal numbering
- Kill/revive any node to simulate failures
- Conflict scenario preset: two competing proposals fired simultaneously
- Step mode to advance one message at a time
- Color-coded phases: Prepare (amber), Promise (blue), Accept (violet), Accepted (green)

## Complexity

- Messages per round: `O(n)` where n = number of acceptors
- Rounds to consensus: typically 2 (Prepare + Accept), more under contention
- Liveness: not guaranteed (dueling proposers), but safety always holds

---

# Paxos 共识算法

单次决议 Paxos（Synod）共识协议交互可视化。观看 Prepare/Promise/Accept/Accepted 消息在提议者、接受者与学习者之间的流转。

## 功能

- 3 个提议者、5 个接受者、2 个学习者，消息传递动画
- 从任意提议者发起提案，自动编号
- 关闭/恢复任意节点模拟故障
- 冲突场景预设：两个提案同时竞争
- 逐步模式，每次推进一条消息
- 按阶段着色：Prepare（琥珀）、Promise（蓝）、Accept（紫）、Accepted（绿）

## 复杂度

- 每轮消息数：`O(n)`，n 为接受者数量
- 达成共识轮数：通常 2 轮（Prepare + Accept），竞争时更多
- 活性：不保证（对决提议者），但安全性始终成立
