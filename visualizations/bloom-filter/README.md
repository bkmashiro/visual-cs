# Bloom Filter

Bloom filter visualization showing a bit array, animated hash functions, and true/false/false-positive membership checks.

布隆过滤器可视化，展示位数组、哈希函数动画，以及 true / false / false-positive 查询结果。

## What's Shown / 展示内容

- 32-bit array updates as words are inserted / 插入单词时更新 32 位数组
- Three hash functions map each word to bit positions / 3 个哈希函数把单词映射到不同位置
- Membership checks are labeled as true positive, true negative, or false positive / 查询结果会标记为 true positive、true negative 或 false positive
- Live stats show bits set, tests, false positives, and estimated false positive rate / 实时统计展示置位数量、测试次数、假阳性次数和估算假阳性率

## Controls / 控件

| Button | Action |
|--------|--------|
| Add Word | Insert the word into the Bloom filter / 把单词插入布隆过滤器 |
| Test Membership | Check whether the word is possibly present / 测试单词是否“可能存在” |
| Try Random Test | Generate and test a random word / 生成并测试随机单词 |
| Reset | Restore the demo dataset and clear stats / 恢复示例数据并清空统计 |
| Text input | Enter the word to add or test / 输入要插入或测试的单词 |

## Algorithm / 算法

A Bloom filter stores no full keys. It only stores bits set by multiple hash functions, which makes it memory-efficient but allows false positives.

布隆过滤器不直接存储完整键值，只存储多个哈希函数设置的位，因此节省空间，但会出现假阳性。

- **Insert / 插入:** Set k hashed bits to 1 / 将 k 个哈希位置设为 1
- **Query / 查询:** If any bit is 0, the key is definitely absent / 只要有一个位置为 0，就一定不存在
- **False positives / 假阳性:** Possible / 可能发生
- **False negatives / 假阴性:** No, unless deletions are added incorrectly / 正常情况下不会发生
