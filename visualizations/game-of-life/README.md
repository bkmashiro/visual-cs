# Game of Life

Conway's Game of Life simulation on a 60×60 toroidal grid.

## What's Shown

- Pink/purple live cells with hue variation for visual interest
- Generation counter, population, and Δ population
- Real FPS display

## Controls

- **Play/Pause**: Start/stop simulation
- **Step**: Advance one generation
- **Clear**: Empty the grid
- **Randomize**: Random ~30% density
- **Pattern buttons**: Load classic patterns
- **Speed slider**: 1–60 fps target
- **Click/drag on canvas**: Toggle cells alive/dead

## Patterns Included

| Pattern | Type | Notes |
|---------|------|-------|
| Glider | Spaceship | Moves diagonally |
| Pulsar | Oscillator | Period 3 |
| R-pentomino | Methuselah | 1103 gen to stabilize |
| Gosper Gun | Gun | Produces gliders indefinitely |
| LWSS | Spaceship | Moves horizontally |

## Rules

B3/S23: Born with 3 neighbors, survives with 2 or 3.
