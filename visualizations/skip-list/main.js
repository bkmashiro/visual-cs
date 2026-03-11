// Skip List Visualization
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const nodeCountEl = document.getElementById('node-count');
const levelCountEl = document.getElementById('level-count');
const comparisonsEl = document.getElementById('comparisons');
const statusEl = document.getElementById('status');
const valueInput = document.getElementById('value-input');
const insertBtn = document.getElementById('insert-btn');
const searchBtn = document.getElementById('search-btn');
const randomBtn = document.getElementById('random-btn');
const clearBtn = document.getElementById('clear-btn');
const speedSlider = document.getElementById('speed-slider');
const speedValueEl = document.getElementById('speed-value');

const MAX_LEVEL = 6;
const P = 0.5;
let animating = false;
let highlightPath = [];
let highlightFound = null;
let highlightNewLevels = [];
let comparisonCount = 0;

function getSpeed() { return Number(speedSlider.value); }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── Skip List Node ──
class SLNode {
  constructor(value, level) {
    this.value = value;
    this.forward = new Array(level + 1).fill(null);
  }
}

// ── Skip List ──
class SkipList {
  constructor() {
    this.level = 0;
    this.header = new SLNode(-Infinity, MAX_LEVEL);
    this.size = 0;
  }

  randomLevel() {
    let lvl = 0;
    while (Math.random() < P && lvl < MAX_LEVEL) lvl++;
    return lvl;
  }

  insert(value) {
    const update = new Array(MAX_LEVEL + 1).fill(null);
    let current = this.header;
    const path = [];

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] !== null && current.forward[i].value < value) {
        path.push({ node: current, level: i, action: 'right' });
        current = current.forward[i];
      }
      path.push({ node: current, level: i, action: 'down' });
      update[i] = current;
    }
    current = current.forward[0];

    if (current !== null && current.value === value) {
      return { path, inserted: false, newLevels: [] };
    }

    const newLevel = this.randomLevel();
    const newLevels = [];
    for (let i = 0; i <= newLevel; i++) newLevels.push(i);

    if (newLevel > this.level) {
      for (let i = this.level + 1; i <= newLevel; i++) {
        update[i] = this.header;
      }
      this.level = newLevel;
    }

    const newNode = new SLNode(value, newLevel);
    for (let i = 0; i <= newLevel; i++) {
      newNode.forward[i] = update[i].forward[i];
      update[i].forward[i] = newNode;
    }
    this.size++;
    return { path, inserted: true, newLevels, node: newNode };
  }

  search(value) {
    let current = this.header;
    const path = [];
    comparisonCount = 0;

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] !== null && current.forward[i].value < value) {
        path.push({ node: current, level: i, action: 'right' });
        current = current.forward[i];
        comparisonCount++;
      }
      path.push({ node: current, level: i, action: 'down' });
      comparisonCount++;
    }
    current = current.forward[0];
    const found = (current !== null && current.value === value) ? current : null;
    return { path, found };
  }

  toArray() {
    const nodes = [];
    let current = this.header;
    while (current !== null) {
      nodes.push(current);
      current = current.forward[0];
    }
    return nodes;
  }
}

const skipList = new SkipList();

// ── Drawing ──
function draw() {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const w = rect.width;
  const h = rect.height;

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#0b1118';
  ctx.fillRect(0, 0, w, h);

  const nodes = skipList.toArray();
  if (nodes.length <= 1) {
    ctx.fillStyle = '#8b949e';
    ctx.font = '16px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Insert values to build a Skip List', w / 2, h / 2);
    return;
  }

  const maxLevel = skipList.level;
  const levelH = 56;
  const nodeW = 52;
  const padX = 80;
  const padY = 40;
  const startY = padY + maxLevel * levelH;

  // Build position map
  const posMap = new Map();
  nodes.forEach((node, idx) => {
    const x = padX + idx * (nodeW + 20);
    posMap.set(node, x);
  });

  // Check canvas overflow
  const maxX = padX + nodes.length * (nodeW + 20);
  if (maxX > w) {
    canvas.style.width = maxX + 40 + 'px';
  }

  // Build highlight sets
  const pathSet = new Set();
  for (const step of highlightPath) {
    pathSet.add(`${step.node === skipList.header ? 'HEAD' : step.node.value}:${step.level}`);
  }

  const newLevelSet = new Set();
  for (const lvl of highlightNewLevels) {
    newLevelSet.add(lvl);
  }

  // Draw arrows and nodes level by level
  for (let lvl = 0; lvl <= maxLevel; lvl++) {
    const y = startY - lvl * levelH;

    // Draw level label
    ctx.fillStyle = '#8b949e';
    ctx.font = '11px -apple-system, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(`L${lvl}`, padX - 16, y + 4);

    // Draw forward pointers
    for (const node of nodes) {
      if (lvl >= node.forward.length) continue;
      const x = posMap.get(node);
      const next = node.forward[lvl];
      if (next !== null) {
        const nx = posMap.get(next);
        if (nx === undefined) continue;

        const key = `${node === skipList.header ? 'HEAD' : node.value}:${lvl}`;
        const isOnPath = pathSet.has(key);

        ctx.beginPath();
        ctx.strokeStyle = isOnPath ? '#f2cc60' : 'rgba(88,166,255,0.3)';
        ctx.lineWidth = isOnPath ? 2.5 : 1.5;
        ctx.moveTo(x + nodeW / 2 + 8, y);
        ctx.lineTo(nx - nodeW / 2 + 14, y);
        ctx.stroke();

        // Arrow head
        const ax = nx - nodeW / 2 + 14;
        ctx.beginPath();
        ctx.fillStyle = isOnPath ? '#f2cc60' : 'rgba(88,166,255,0.3)';
        ctx.moveTo(ax, y);
        ctx.lineTo(ax - 6, y - 4);
        ctx.lineTo(ax - 6, y + 4);
        ctx.fill();
      }
    }

    // Draw nodes
    for (const node of nodes) {
      if (lvl >= node.forward.length) continue;
      const x = posMap.get(node);

      const key = `${node === skipList.header ? 'HEAD' : node.value}:${lvl}`;
      const isOnPath = pathSet.has(key);
      const isFound = (highlightFound === node && lvl === 0);
      const isNewLevel = (highlightFound === node && newLevelSet.has(lvl));

      let fillColor = '#1f6feb';
      let strokeColor = '#58a6ff';
      if (node === skipList.header) {
        fillColor = '#30363d';
        strokeColor = '#8b949e';
      }
      if (isOnPath) { fillColor = '#7c6a1e'; strokeColor = '#f2cc60'; }
      if (isFound) { fillColor = '#238636'; strokeColor = '#3fb950'; }
      if (isNewLevel) { fillColor = '#8b2020'; strokeColor = '#ff6b6b'; }

      const rx = x - nodeW / 2 + 12;
      const ry = y - 16;
      const rw = nodeW - 4;
      const rh = 32;
      const r = 6;

      ctx.beginPath();
      ctx.moveTo(rx + r, ry);
      ctx.lineTo(rx + rw - r, ry);
      ctx.quadraticCurveTo(rx + rw, ry, rx + rw, ry + r);
      ctx.lineTo(rx + rw, ry + rh - r);
      ctx.quadraticCurveTo(rx + rw, ry + rh, rx + rw - r, ry + rh);
      ctx.lineTo(rx + r, ry + rh);
      ctx.quadraticCurveTo(rx, ry + rh, rx, ry + rh - r);
      ctx.lineTo(rx, ry + r);
      ctx.quadraticCurveTo(rx, ry, rx + r, ry);
      ctx.closePath();
      ctx.fillStyle = fillColor;
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.5;
      ctx.fill();
      ctx.stroke();

      // Node label
      ctx.fillStyle = '#e6edf3';
      ctx.font = 'bold 13px -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        node === skipList.header ? 'HD' : String(node.value),
        x + 10, y
      );
    }
  }

  // Draw vertical connectors between levels for each node
  for (const node of nodes) {
    const x = posMap.get(node) + 10;
    for (let lvl = 0; lvl < node.forward.length - 1; lvl++) {
      const y1 = startY - lvl * levelH - 16;
      const y2 = startY - (lvl + 1) * levelH + 16;
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(88,166,255,0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.moveTo(x, y1);
      ctx.lineTo(x, y2);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }
}

function updateStats() {
  nodeCountEl.textContent = skipList.size;
  levelCountEl.textContent = skipList.level + 1;
  comparisonsEl.textContent = comparisonCount;
}

// ── Animations ──
async function animateInsert(value) {
  if (animating) return;
  animating = true;
  statusEl.textContent = `Inserting ${value}…`;

  const result = skipList.insert(value);

  if (!result.inserted) {
    statusEl.textContent = `${value} already exists`;
    animating = false;
    return;
  }

  // Animate search path
  highlightPath = result.path;
  highlightFound = null;
  highlightNewLevels = [];
  updateStats();
  draw();
  await sleep(getSpeed());

  // Animate the inserted node
  highlightFound = result.node;
  highlightNewLevels = result.newLevels;
  draw();
  await sleep(getSpeed());

  highlightPath = [];
  highlightFound = null;
  highlightNewLevels = [];
  draw();
  statusEl.textContent = `Inserted ${value} (level ${result.newLevels.length - 1})`;
  animating = false;
}

async function animateSearch(value) {
  if (animating) return;
  animating = true;
  statusEl.textContent = `Searching for ${value}…`;

  const result = skipList.search(value);

  // Animate step by step
  highlightPath = [];
  highlightFound = null;
  highlightNewLevels = [];

  for (let i = 0; i < result.path.length; i++) {
    highlightPath.push(result.path[i]);
    updateStats();
    draw();
    await sleep(getSpeed() * 0.5);
  }

  if (result.found) {
    highlightFound = result.found;
    draw();
    await sleep(getSpeed());
    statusEl.textContent = `Found ${value} in ${comparisonCount} comparisons`;
  } else {
    statusEl.textContent = `${value} not found (${comparisonCount} comparisons)`;
  }

  await sleep(getSpeed());
  highlightPath = [];
  highlightFound = null;
  draw();
  animating = false;
}

// ── Events ──
insertBtn.addEventListener('click', () => {
  const val = parseInt(valueInput.value, 10);
  if (isNaN(val)) return;
  valueInput.value = '';
  animateInsert(val);
});

searchBtn.addEventListener('click', () => {
  const val = parseInt(valueInput.value, 10);
  if (isNaN(val)) return;
  valueInput.value = '';
  animateSearch(val);
});

valueInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') insertBtn.click();
});

randomBtn.addEventListener('click', async () => {
  if (animating) return;
  const used = new Set();
  let cur = skipList.header.forward[0];
  while (cur) { used.add(cur.value); cur = cur.forward[0]; }
  for (let i = 0; i < 5; i++) {
    let v;
    do { v = Math.floor(Math.random() * 99) + 1; } while (used.has(v));
    used.add(v);
    await animateInsert(v);
  }
});

clearBtn.addEventListener('click', () => {
  skipList.header = new SLNode(-Infinity, MAX_LEVEL);
  skipList.level = 0;
  skipList.size = 0;
  comparisonCount = 0;
  highlightPath = [];
  highlightFound = null;
  highlightNewLevels = [];
  updateStats();
  draw();
  statusEl.textContent = 'Cleared';
});

speedSlider.addEventListener('input', () => {
  speedValueEl.textContent = `${speedSlider.value} ms`;
});

window.addEventListener('resize', draw);
draw();
