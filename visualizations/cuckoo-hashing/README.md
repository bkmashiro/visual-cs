# Cuckoo Hashing

Interactive visualization of cuckoo hashing with two hash tables. Watch keys get inserted with eviction chains, and see O(1) worst-case lookups checking exactly two locations.

## Features

- Two side-by-side tables (blue T1, orange T2) with animated insert/lookup/delete
- Eviction chain animation: displaced keys visibly hop between tables
- Cycle detection triggers automatic rehash with new hash functions
- Adjustable table size (4–16 slots) and animation speed
- Random insert button for bulk testing

## Complexity

- Lookup: `O(1)` worst case (2 table probes)
- Insert: `O(1)` amortized, `O(n)` worst case (rehash)
- Delete: `O(1)` worst case
- Space: `O(n)`

---

# 布谷鸟哈希

布谷鸟哈希交互可视化，含两张哈希表。观看键的插入驱逐链，以及 O(1) 最坏情况查找（仅检查两个位置）。

## 功能

- 并排显示两张表（蓝色 T1、橙色 T2），动画展示插入/查找/删除
- 驱逐链动画：被挤出的键在两张表间跳跃
- 检测到环时自动以新哈希函数重建
- 可调表大小（4–16 槽）与动画速度
- 随机插入按钮用于批量测试

## 复杂度

- 查找：最坏 `O(1)`（2 次探测）
- 插入：均摊 `O(1)`，最坏 `O(n)`（重建）
- 删除：最坏 `O(1)`
- 空间：`O(n)`
