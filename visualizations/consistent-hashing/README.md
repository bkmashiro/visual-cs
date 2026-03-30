# Consistent Hashing

Interactive visualization of consistent hashing with virtual nodes. Watch servers and keys placed on a hash ring, and see how adding or removing a server only remaps nearby keys.

## Features

- Large SVG hash ring with servers, virtual nodes, and keys
- Add/remove servers with animated placement and key reassignment
- Hash any key name and watch the clockwise walk to find its server
- Virtual nodes slider (1–5 per server) to improve load balance
- Real-time load distribution statistics

## Complexity

- Lookup: `O(log n)` with sorted ring (binary search)
- Add/remove server: `O(K/n)` keys remapped on average
- Space: `O(n · v)` where v = virtual nodes per server

---

# 一致性哈希

一致性哈希交互可视化，含虚拟节点。观察服务器和键如何放置在哈希环上，以及新增或移除服务器时仅重映射附近的键。

## 功能

- 大型 SVG 哈希环，展示服务器、虚拟节点和键
- 添加/移除服务器，动画展示放置与键重分配
- 输入任意键名，观看顺时针查找所属服务器
- 虚拟节点滑块（每服务器 1–5 个）改善负载均衡
- 实时负载分布统计

## 复杂度

- 查找：有序环上 `O(log n)` 二分搜索
- 增删服务器：平均重映射 `O(K/n)` 个键
- 空间：`O(n · v)`，v 为每服务器虚拟节点数
