// A* Pathfinding Visualization
const SIZE = 20;
const gridEl = document.getElementById('grid');
const pathLengthEl = document.getElementById('path-length');
const openCountEl = document.getElementById('open-count');
const closedCountEl = document.getElementById('closed-count');
const statusEl = document.getElementById('status');
const speedSlider = document.getElementById('speed-slider');
const speedValueEl = document.getElementById('speed-value');
const runBtn = document.getElementById('run-btn');
const resetBtn = document.getElementById('reset-btn');
const clearBtn = document.getElementById('clear-btn');
const mazeBtn = document.getElementById('maze-btn');
const wallModeBtn = document.getElementById('wall-mode-btn');
const startModeBtn = document.getElementById('start-mode-btn');
const endModeBtn = document.getElementById('end-mode-btn');

const cells = [];
let mode = 'wall';
let running = false;
let dragging = false;
let start = { row: 2, col: 2 };
let end = { row: 17, col: 17 };

function makeCell(row, col) {
  return { row, col, el: null, wall: false, state: 'unvisited', g: Infinity, h: 0, f: Infinity, parent: null };
}

function getCell(row, col) { return cells[row * SIZE + col]; }
function isStart(r, c) { return start.row === r && start.col === c; }
function isEnd(r, c) { return end.row === r && end.col === c; }
function manhattan(r1, c1, r2, c2) { return Math.abs(r1 - r2) + Math.abs(c1 - c2); }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function syncModeButtons() {
  [wallModeBtn, startModeBtn, endModeBtn].forEach(btn => {
    btn.classList.remove('active');
    btn.classList.add('secondary');
  });
  const active = mode === 'wall' ? wallModeBtn : mode === 'start' ? startModeBtn : endModeBtn;
  active.classList.add('active');
  active.classList.remove('secondary');
}

function resetPathState() {
  for (const cell of cells) {
    cell.state = 'unvisited';
    cell.g = Infinity;
    cell.h = 0;
    cell.f = Infinity;
    cell.parent = null;
  }
  pathLengthEl.textContent = '—';
  openCountEl.textContent = '0';
  closedCountEl.textContent = '0';
  paintGrid();
}

function paintGrid() {
  let openC = 0, closedC = 0;
  for (const cell of cells) {
    const classes = ['cell'];
    if (cell.wall) classes.push('wall');
    if (cell.state === 'open') { classes.push('open'); openC++; }
    if (cell.state === 'closed') { classes.push('closed'); closedC++; }
    if (cell.state === 'path') classes.push('path');
    if (isStart(cell.row, cell.col)) classes.push('start');
    if (isEnd(cell.row, cell.col)) classes.push('end');
    cell.el.className = classes.join(' ');
  }
  openCountEl.textContent = openC;
  closedCountEl.textContent = closedC;
}

function setMode(m) {
  mode = m;
  syncModeButtons();
}

function handleCellInteraction(cell) {
  if (running) return;
  if (mode === 'start') {
    if (isEnd(cell.row, cell.col)) return;
    start = { row: cell.row, col: cell.col };
    cell.wall = false;
    setMode('wall');
    resetPathState();
    return;
  }
  if (mode === 'end') {
    if (isStart(cell.row, cell.col)) return;
    end = { row: cell.row, col: cell.col };
    cell.wall = false;
    setMode('wall');
    resetPathState();
    return;
  }
  if (isStart(cell.row, cell.col) || isEnd(cell.row, cell.col)) return;
  cell.wall = !cell.wall;
  resetPathState();
}

function neighbors(cell) {
  const offsets = [[1,0],[-1,0],[0,1],[0,-1]];
  const result = [];
  for (const [dr, dc] of offsets) {
    const nr = cell.row + dr, nc = cell.col + dc;
    if (nr < 0 || nr >= SIZE || nc < 0 || nc >= SIZE) continue;
    const next = getCell(nr, nc);
    if (!next.wall) result.push(next);
  }
  return result;
}

function generateMaze() {
  if (running) return;
  for (const cell of cells) {
    cell.wall = Math.random() < 0.3;
  }
  getCell(start.row, start.col).wall = false;
  getCell(end.row, end.col).wall = false;
  resetPathState();
  statusEl.textContent = 'Maze generated';
}

async function runAStar() {
  if (running) return;
  running = true;
  runBtn.disabled = true;
  resetBtn.disabled = true;
  clearBtn.disabled = true;
  mazeBtn.disabled = true;
  statusEl.textContent = 'Running A*…';
  resetPathState();

  const openSet = [];
  const startCell = getCell(start.row, start.col);
  const endCell = getCell(end.row, end.col);
  startCell.g = 0;
  startCell.h = manhattan(start.row, start.col, end.row, end.col);
  startCell.f = startCell.h;
  openSet.push(startCell);
  startCell.state = 'open';

  while (openSet.length > 0) {
    openSet.sort((a, b) => a.f - b.f || a.h - b.h);
    const current = openSet.shift();

    if (current === endCell) {
      // Trace path
      const path = [];
      let cursor = endCell;
      while (cursor) {
        path.push(cursor);
        cursor = cursor.parent;
      }
      path.reverse();
      for (const cell of path) {
        if (!isStart(cell.row, cell.col) && !isEnd(cell.row, cell.col)) cell.state = 'path';
        paintGrid();
        await sleep(Math.max(10, Number(speedSlider.value) / 2));
      }
      pathLengthEl.textContent = String(path.length - 1);
      statusEl.textContent = `Path found: ${path.length - 1} steps`;
      finish();
      return;
    }

    current.state = 'closed';
    paintGrid();
    await sleep(Number(speedSlider.value));

    for (const neighbor of neighbors(current)) {
      if (neighbor.state === 'closed') continue;
      const tentG = current.g + 1;
      if (tentG < neighbor.g) {
        neighbor.parent = current;
        neighbor.g = tentG;
        neighbor.h = manhattan(neighbor.row, neighbor.col, end.row, end.col);
        neighbor.f = neighbor.g + neighbor.h;
        if (neighbor.state !== 'open') {
          neighbor.state = 'open';
          openSet.push(neighbor);
        }
      }
    }
    paintGrid();
  }

  pathLengthEl.textContent = '∞';
  statusEl.textContent = 'No path exists';
  finish();
}

function finish() {
  running = false;
  runBtn.disabled = false;
  resetBtn.disabled = false;
  clearBtn.disabled = false;
  mazeBtn.disabled = false;
}

function buildGrid() {
  const fragment = document.createDocumentFragment();
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      const cell = makeCell(row, col);
      const el = document.createElement('button');
      el.type = 'button';
      el.className = 'cell';
      el.addEventListener('mousedown', () => { dragging = true; handleCellInteraction(cell); });
      el.addEventListener('mouseenter', () => {
        if (dragging && mode === 'wall' && !running) {
          if (!isStart(cell.row, cell.col) && !isEnd(cell.row, cell.col)) {
            cell.wall = true;
            resetPathState();
          }
        }
      });
      cell.el = el;
      cells.push(cell);
      fragment.appendChild(el);
    }
  }
  document.addEventListener('mouseup', () => { dragging = false; });
  gridEl.appendChild(fragment);
  paintGrid();
  syncModeButtons();
}

speedSlider.addEventListener('input', () => { speedValueEl.textContent = `${speedSlider.value} ms`; });
wallModeBtn.addEventListener('click', () => setMode('wall'));
startModeBtn.addEventListener('click', () => setMode('start'));
endModeBtn.addEventListener('click', () => setMode('end'));
runBtn.addEventListener('click', runAStar);
resetBtn.addEventListener('click', () => { resetPathState(); statusEl.textContent = 'Ready'; });
clearBtn.addEventListener('click', () => {
  for (const cell of cells) cell.wall = false;
  resetPathState();
  statusEl.textContent = 'Cleared';
});
mazeBtn.addEventListener('click', generateMaze);

buildGrid();
