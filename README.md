# visual-cs

[![GitHub stars](https://img.shields.io/github/stars/bkmashiro/visual-cs?style=social)](https://github.com/bkmashiro/visual-cs)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> Algorithm and data structure visualizations — pure HTML/CSS/JS, no build step.

**[⭐ Star on GitHub](https://github.com/bkmashiro/visual-cs)** if you find this useful!

## Live Demo

[**→ Browse All Visualizations**](https://bkmashiro.github.io/visual-cs)

## Visualizations

| Name | Category | Description |
|------|----------|-------------|
| [Bubble Sort](./visualizations/bubble-sort/) | Sorting | Step-by-step comparison visualization |
| [Binary Search](./visualizations/binary-search/) | Search | Visual range narrowing |
| [BFS on Grid](./visualizations/bfs-grid/) | Graph | Interactive pathfinding |
| [Quicksort](./visualizations/quicksort/) | Sorting | Partition and pivot animation |
| [Game of Life](./visualizations/game-of-life/) | Simulation | Conway's cellular automaton |

## Philosophy

Each visualization is a single self-contained HTML file. No frameworks, no bundlers, no npm install.
Open any file directly in your browser or serve with `python -m http.server`.

Every visualization includes:
- Interactive controls (play/pause/step/reset/speed)
- Inline explanation of the algorithm
- Key implementation notes

## Contributing / Adding New Visualizations

New visualizations are added regularly. Each one lives in `visualizations/<name>/`.
