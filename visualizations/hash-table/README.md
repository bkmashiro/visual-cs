# Hash Table — Collision Handling Visualization

An interactive visualization showing how hash tables handle collisions with two classic strategies: **Separate Chaining** and **Open Addressing** (linear probing).

## What It Shows

- Insert, search, and delete keys while watching the djb2 hash function map them to buckets
- Real-time collision detection and highlighting (orange cells = collision, violet = probing)
- Side-by-side comparison of chaining vs open addressing on the same dataset
- Hash function trace tab: step through djb2 computation character by character
- Probe sequence sidebar showing every slot visited during the last operation

## Collision Strategies

### Separate Chaining
Each bucket holds a linked list of entries. Multiple keys hashing to the same index form a chain. Lookup traverses the chain until the key is found or the list ends.

```
bucket[3] → [apple] → [grape] → null
bucket[7] → [banana]
```

### Open Addressing (Linear Probe)
All entries live in the flat array. On collision, the probe walks forward `(idx + i) % m` until finding an empty (`null`) or tombstone (`deleted`) slot. Delete leaves a tombstone so probe sequences remain intact.

```
slot[3] = apple     ← hash("apple") = 3
slot[4] = grape     ← hash("grape") = 3, probed to 4 (collision!)
```

## Hash Function

Uses **djb2** — a fast, well-distributed non-cryptographic hash:

```js
function djb2(str) {
  let h = 5381;
  for (const c of str) h = (h * 33 + c.charCodeAt(0)) >>> 0;
  return h;
}
index = djb2(key) % m
```

## Visualization Features

- Dark, self-contained single-file HTML page
- Four presets: Fruits, Integers, Collisions (force many collisions), Heavy load
- Live load factor, collision count, key count, and capacity metrics
- Color-coded cells: blue = occupied, cyan = just inserted, orange = collision, violet = probed, green = found, red = deleted
- Per-operation log with all recent inserts, searches, and deletes
- Hash function step-by-step trace tab
- Adjustable table size (7, 11, 13, 17 — all prime)

## Complexity

| Operation | Average | Chaining Worst | OA Worst |
|-----------|---------|----------------|----------|
| Insert    | O(1)    | O(n)           | O(n)     |
| Search    | O(1)    | O(n)           | O(n)     |
| Delete    | O(1)    | O(n)           | O(n)     |
| Space     | O(n+m)  | O(n+m)         | O(m)     |

Average case holds when load factor α = n/m is kept below ~0.75 (chaining) or ~0.5 (OA).

## Key Takeaways

- Prime table sizes reduce collision clustering
- Chaining degrades gracefully at high load; OA degrades sharply (primary clustering)
- Open addressing has better cache locality (entries are contiguous)
- Deleting in OA requires tombstones, not actual removal, to preserve probe chains
- The djb2 hash distributes strings well but is not cryptographically secure

## References

- Knuth — *The Art of Computer Programming, Vol. 3: Sorting and Searching* (1998)
- Sedgewick & Wayne — *Algorithms, 4th edition* (2011)
