# Burrows-Wheeler Transform

Interactive visualization of the Burrows-Wheeler Transform (BWT), showing forward transform (rotation matrix, lexicographic sorting, last-column extraction) and inverse transform (LF-mapping reconstruction).

## Features

- Enter any string and watch all rotations generated, sorted, and the last column extracted
- Animated forward BWT with highlighted first (green) and last (purple) columns
- Inverse BWT reconstruction via LF-mapping, character by character
- Step-by-step mode with speed control
- Sentinel character '$' highlighted distinctly

## Complexity

- Forward BWT: `O(n² log n)` naive, `O(n)` with suffix array
- Inverse BWT: `O(n)`
- Space: `O(n²)` for rotation matrix

---

# Burrows-Wheeler 变换

Burrows-Wheeler 变换 (BWT) 交互可视化，展示正向变换（旋转矩阵、字典序排序、末列提取）与逆变换（LF 映射重建原串）。

## 功能

- 输入任意字符串，观看所有旋转的生成、排序及末列提取
- 正向 BWT 动画，高亮首列（绿色）和末列（紫色）
- 逆向 BWT 通过 LF 映射逐字符重建原串
- 支持逐步模式与速度调节
- 哨兵字符 '$' 特殊高亮

## 复杂度

- 正向 BWT：朴素 `O(n² log n)`，后缀数组可达 `O(n)`
- 逆向 BWT：`O(n)`
- 空间：旋转矩阵 `O(n²)`
