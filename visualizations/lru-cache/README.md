# LRU Cache

Interactive LRU cache visualization showing how a hash map and doubly linked list cooperate to support constant-time `get` and `put`.

## Features

- Adjustable cache capacity
- `put(key, value)` and `get(key)` operations
- Animated MRU/LRU movement in the linked list
- Hash map lookup highlight
- Eviction visualization when capacity is exceeded
- Play / pause / step / replay controls

## What You See

- Leftmost node: most recently used
- Rightmost node: least recently used
- Blue highlight: active node movement
- Green highlight: cache hit
- Red highlight: evicted node
- Hash map cards: key-to-node references

## Complexity

- `get`: `O(1)`
- `put`: `O(1)`
- Space: `O(capacity)`

---

# LRU 缓存

这是一个可交互的 LRU 缓存可视化，展示哈希表和双向链表如何协作，实现 `get` 与 `put` 的常数时间操作。

## 功能

- 可调缓存容量
- 支持 `put(key, value)` 与 `get(key)` 操作
- 动画展示节点在链表中的 MRU/LRU 移动
- 高亮哈希表查找过程
- 容量满时可视化淘汰过程
- 支持播放 / 暂停 / 单步 / 重播

## 画面说明

- 最左节点：最近使用
- 最右节点：最久未使用
- 蓝色高亮：当前移动节点
- 绿色高亮：命中缓存
- 红色高亮：被淘汰节点
- 哈希卡片：键到链表节点的引用

## 复杂度

- `get`：`O(1)`
- `put`：`O(1)`
- 空间：`O(capacity)`
