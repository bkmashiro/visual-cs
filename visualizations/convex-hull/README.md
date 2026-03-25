# Convex Hull — Graham Scan vs Jarvis March

## What is a Convex Hull?

The **convex hull** of a set of points is the smallest convex polygon that contains all the points. Imagine stretching a rubber band around a set of nails on a board — when released, the rubber band forms the convex hull.

A polygon is **convex** if for any two points inside it, the line segment connecting them lies entirely within the polygon. The convex hull has no "dents" or inward curves.

---

## Graham Scan

**Time Complexity:** O(n log n)

Graham Scan is an efficient algorithm that works by:

### Algorithm Steps

1. **Find the anchor point** — Select the point with the lowest y-coordinate (highest on screen). If there's a tie, choose the one with the smallest x-coordinate.

2. **Sort by polar angle** — Sort all other points by their polar angle with respect to the anchor point. Points with the same angle are sorted by distance (closer first).

3. **Build the hull** — Process points in sorted order, maintaining a stack:
   - For each new point, check if it makes a "left turn" with the last two points on the stack
   - If it makes a "right turn" or goes straight, pop points from the stack until a left turn is achieved
   - Push the new point onto the stack

4. **Result** — The stack contains the convex hull vertices in counter-clockwise order.

### Why It Works

The sorting ensures we process points in angular order around the anchor. By always maintaining left turns, we guarantee the hull stays convex. Right turns indicate a point is "inside" the current hull boundary and should be removed.

---

## Jarvis March (Gift Wrapping)

**Time Complexity:** O(nh) where h = hull size

Also known as the "gift wrapping" algorithm because it wraps around the points like wrapping paper.

### Algorithm Steps

1. **Find the starting point** — Select the leftmost point (smallest x-coordinate). This point is guaranteed to be on the hull.

2. **Wrap around** — From the current hull vertex:
   - Consider all points as potential next vertices
   - Choose the point that makes the smallest counter-clockwise angle from the current direction
   - This is equivalent to finding the point such that all other points are to the left of the line from current to next

3. **Repeat** — Continue until we return to the starting point.

### Why It Works

At each step, we find the point that "turns left the most" from our current position. This guarantees we trace the outer boundary of the point set without cutting through any points.

---

## Comparison

| Aspect | Graham Scan | Jarvis March |
|--------|-------------|--------------|
| Time Complexity | O(n log n) | O(nh) |
| Best Case | Always O(n log n) | O(n) when h ≈ 1 |
| Worst Case | O(n log n) | O(n²) when h ≈ n |
| Space | O(n) for sorted array | O(h) for hull |
| Strategy | Sort then scan | Greedy wrapping |

**When to use which:**
- **Graham Scan** — When you expect many points on the hull, or need predictable performance
- **Jarvis March** — When the hull is expected to have very few vertices (h << n), or when you only need part of the hull

---

## Applications

- **Computer Graphics** — Collision detection, bounding volumes
- **Image Processing** — Shape analysis, object recognition
- **Geographic Information Systems** — Territory boundaries, coverage areas
- **Pattern Recognition** — Cluster boundaries, outlier detection
- **Robotics** — Path planning, obstacle avoidance
- **Computational Geometry** — Foundation for more complex algorithms

---

## Implementation Notes

This visualization shows both algorithms running side-by-side on the same point set, allowing direct comparison of their approaches:

- **Yellow (Graham)** — Shows the sorted scan building up the hull
- **Purple (Jarvis)** — Shows the wrapping motion around the points
- **Red** — Current point being examined
- **Blue** — Current candidate for next hull vertex
- **Green** — Final hull when complete

Click to add points, or use "Random Points" to generate a test set.
