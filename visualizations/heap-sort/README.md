# Heap Sort

Heap sort visualization with both the array bars and the heap tree shown at the same time.

堆排序可视化，同时展示数组柱状图和堆树结构。

## What's Shown / 展示内容

- Blue = active heap / 蓝色表示当前堆区域
- Yellow = compare between parent and child / 黄色表示父子节点比较
- Red = swap in array and heap / 红色表示交换
- Green = sorted suffix / 绿色表示已经排好序的后缀
- Left panel = array bars, right panel = heap tree / 左侧是数组柱状图，右侧是堆树

## Controls / 控件

| Button | Action |
|--------|--------|
| Auto | Run the animation automatically / 自动播放 |
| Step | Advance one recorded heap-sort step / 单步执行 |
| Pause | Stop auto-play / 暂停自动播放 |
| Reset | Restart from the same array / 使用同一数组重置 |
| Randomize | Generate a new shuffled array / 生成新的随机数组 |
| Speed slider | Change playback interval / 调整播放速度 |

## Algorithm / 算法

Heap sort first builds a max heap bottom-up, then repeatedly swaps the root with the end of the heap and sifts the new root down.

堆排序先自底向上建成最大堆，然后不断把根节点交换到堆尾，再向下调整新的根节点。

- **Time / 时间复杂度:** O(n log n)
- **Space / 空间复杂度:** O(1)
- **Stable / 是否稳定:** No / 否
