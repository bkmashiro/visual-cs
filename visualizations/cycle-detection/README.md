# Cycle Detection — Floyd's Tortoise and Hare

Interactive visualization of **Floyd's cycle detection algorithm** on a linked list.

## What it shows

- A linked list with a configurable tail (μ) and cycle (λ)
- Two pointers — a 🐢 tortoise (moves 1 step/tick) and a 🐇 hare (moves 2 steps/tick)
- All three phases of the algorithm, step by step:
  1. **Phase 1** — detect that a cycle exists (tortoise and hare meet)
  2. **Phase 2** — locate the exact cycle start node (μ)
  3. **Phase 3** — measure the cycle length (λ)

## Controls

| Control | Action |
|:--------|:-------|
| μ input | Set tail length (nodes before the cycle) |
| λ input | Set cycle length |
| Play / Pause | Auto-advance steps |
| Step | Single step |
| Reset | Restart from head |
| Speed | 1×–10× playback speed |
| Presets | Load classic configurations |

## Algorithm

**Phase 1 — Cycle detection**
```
tortoise = head
hare = head
while hare.next and hare.next.next:
    tortoise = tortoise.next
    hare = hare.next.next
    if tortoise == hare:
        cycle detected! (meeting point M)
```

**Phase 2 — Find cycle start (μ)**
```
tortoise = head          # reset
hare stays at M
while tortoise != hare:
    tortoise = tortoise.next
    hare = hare.next
# tortoise == hare == cycle start
```

**Phase 3 — Find cycle length (λ)**
```
count = 1
hare = cycle_start.next
while hare != cycle_start:
    hare = hare.next
    count++
# count == λ
```

## Why Phase 2 works

When they first meet, the hare has traveled exactly twice as far as the tortoise. After some algebra on modular arithmetic, it follows that resetting one pointer to the head and advancing both at speed 1 will cause them to meet exactly at the cycle entry point (distance μ from the head).

**Time:** O(μ + λ) — linear
**Space:** O(1) — only two pointers

## Applications

- Detecting loops in linked lists (LeetCode 142)
- Detecting repeated states in algorithms (e.g., finding a repeated number in O(1) space)
- Pseudorandom number generator cycle analysis
- Rho algorithm for integer factorization
