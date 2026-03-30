# Raft Consensus

Interactive visualization of the Raft consensus protocol. Watch leader election, log replication, and term progression across a 5-node cluster with animated message passing.

## Features

- 5 nodes in a pentagon with animated RequestVote, AppendEntries, and heartbeat RPCs
- Click any node to trigger election or kill/revive it
- Client request button to replicate log entries through the leader
- Auto-mode with automatic heartbeats, timeouts, and elections
- Per-node status showing state, term, log length, and votes

## Complexity

- Leader election: `O(n)` messages per round
- Log replication: `O(n)` per entry
- Commit: majority (⌊n/2⌋ + 1) acknowledgements required

---

# Raft 共识算法

Raft 共识协议交互可视化。观看 5 节点集群中的领导者选举、日志复制与任期演进，配有动画消息传递。

## 功能

- 五角形排列的 5 个节点，动画展示 RequestVote、AppendEntries 和心跳 RPC
- 点击任意节点触发选举或关闭/恢复节点
- 客户端请求按钮，通过领导者复制日志条目
- 自动模式：自动心跳、超时与选举
- 每个节点显示状态、任期、日志长度与投票数

## 复杂度

- 领导者选举：每轮 `O(n)` 条消息
- 日志复制：每条目 `O(n)`
- 提交：需要多数派（⌊n/2⌋ + 1）确认
