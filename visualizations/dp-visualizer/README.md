# DP Visualizer

Interactive dynamic programming visualization for the Longest Common Subsequence problem. It fills the DP table cell by cell, then backtracks to recover one LCS.

## Features

- Editable input strings
- Cell-by-cell DP table filling
- Match vs mismatch transitions
- LCS backtracking path
- Recovered subsequence display
- Play / pause / step / replay controls

## What You See

- Blue cell: current DP position
- Green cell: character match, take diagonal + 1
- Gold cell: mismatch, take max from top or left
- Purple cells: backtracking path
- Side log: recurrence used for each filled cell

## Complexity

- Time: `O(mn)`
- Space: `O(mn)`

---

# 动态规划可视化

这是一个用于最长公共子序列（LCS）的动态规划可视化。它会逐格填充 DP 表，并在结束后回溯出一个实际的公共子序列。

## 功能

- 可编辑输入字符串
- 逐格填充 DP 表
- 匹配与不匹配转移展示
- LCS 回溯路径高亮
- 显示恢复出的子序列
- 支持播放 / 暂停 / 单步 / 重播

## 画面说明

- 蓝色单元格：当前 DP 位置
- 绿色单元格：字符匹配，取左上角 + 1
- 金色单元格：字符不匹配，取上方或左方最大值
- 紫色单元格：回溯路径
- 侧边日志：每个单元使用的状态转移

## 复杂度

- 时间：`O(mn)`
- 空间：`O(mn)`
