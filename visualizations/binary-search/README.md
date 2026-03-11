# Binary Search

Interactive visualization of binary search on a sorted array.

## What's Shown

- Sorted array cells with color-coded states
- Blue range = active search space
- Orange cell = current mid element being checked
- Green cell = found target
- Faded cells = eliminated from search

## Controls

- Enter a target number and click **Search** for auto-run
- Use **Step** to advance one step at a time
- **Reset** clears the search state (keeps the array)
- **New Array** generates a fresh sorted array

## Algorithm

Binary search divides the search space in half each step by comparing the target to the middle element and discarding the half that can't contain it.

- **Time:** O(log n)
- **Space:** O(1)
- **Requirement:** Sorted array
