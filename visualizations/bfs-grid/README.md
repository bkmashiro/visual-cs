# BFS on Grid

Interactive BFS pathfinding on a 20×20 grid.

## What's Shown

- Draw walls, set start (S) and end (E) positions
- BFS flood-fill: frontier = orange, explored = blue
- Found path = gold highlight
- Queue size and step counter in sidebar

## Controls

- **Draw Mode buttons**: Set Start / Set End / Draw Wall / Erase
- Click or drag on canvas to paint
- **Run BFS**: Auto-run animation
- **Step**: One cell at a time
- **Reset**: Clear BFS state, keep walls
- **Clear All**: Reset everything

## Algorithm

BFS explores cells level by level (FIFO queue), guaranteeing the shortest path in an unweighted grid.

- **Time:** O(V + E) = O(rows × cols)
- **Space:** O(rows × cols)
- **Guarantee:** Shortest path (unweighted)
