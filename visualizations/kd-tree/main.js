// KD-Tree Visualization
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const pointCountEl = document.getElementById('point-count');
const treeDepthEl = document.getElementById('tree-depth');
const nnDistEl = document.getElementById('nn-dist');
const statusEl = document.getElementById('status');
const randomBtn = document.getElementById('random-btn');
const nnBtn = document.getElementById('nn-btn');
const clearBtn = document.getElementById('clear-btn');
const speedSlider = document.getElementById('speed-slider');
const speedValueEl = document.getElementById('speed-value');

let points = [];
let kdRoot = null;
let nnMode = false;
let animating = false;
let queryPoint = null;
let nearestPoint = null;
let searchPath = [];

function getSpeed() { return Number(speedSlider.value); }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── KD-Tree ──
class KDNode {
  constructor(point, depth, left, right) {
    this.point = point; // [x, y]
    this.depth = depth;
    this.left = left;
    this.right = right;
    this.axis = depth % 2; // 0 = X, 1 = Y
  }
}

function buildKDTree(pts, depth) {
  if (pts.length === 0) return null;
  const axis = depth % 2;
  pts.sort((a, b) => a[axis] - b[axis]);
  const mid = Math.floor(pts.length / 2);
  return new KDNode(
    pts[mid],
    depth,
    buildKDTree(pts.slice(0, mid), depth + 1),
    buildKDTree(pts.slice(mid + 1), depth + 1)
  );
}

function treeDepth(node) {
  if (!node) return 0;
  return 1 + Math.max(treeDepth(node.left), treeDepth(node.right));
}

function dist2(a, b) {
  return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
}

function nnSearch(node, target, best, path) {
  if (!node) return best;
  path.push(node);

  const d = dist2(node.point, target);
  if (!best || d < best.dist) {
    best = { point: node.point, dist: d };
  }

  const axis = node.axis;
  const diff = target[axis] - node.point[axis];
  const first = diff < 0 ? node.left : node.right;
  const second = diff < 0 ? node.right : node.left;

  best = nnSearch(first, target, best, path);
  if (diff * diff < best.dist) {
    best = nnSearch(second, target, best, path);
  }

  return best;
}

function rebuild() {
  kdRoot = buildKDTree([...points], 0);
  queryPoint = null;
  nearestPoint = null;
  searchPath = [];
  updateStats();
  draw();
}

// ── Drawing ──
function getCanvasCoords(e) {
  const rect = canvas.getBoundingClientRect();
  return [
    (e.clientX - rect.left) / rect.width,
    (e.clientY - rect.top) / rect.height
  ];
}

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

  // Draw grid
  ctx.strokeStyle = 'rgba(48,54,61,0.4)';
  ctx.lineWidth = 0.5;
  for (let i = 0; i <= 10; i++) {
    ctx.beginPath();
    ctx.moveTo(i * w / 10, 0);
    ctx.lineTo(i * w / 10, h);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i * h / 10);
    ctx.lineTo(w, i * h / 10);
    ctx.stroke();
  }

  if (!kdRoot) {
    ctx.fillStyle = '#8b949e';
    ctx.font = '16px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Click to add points or use "Random 20 pts"', w / 2, h / 2);
    return;
  }

  // Draw split lines
  const searchSet = new Set(searchPath.map(n => n.point));
  drawSplitLines(kdRoot, 0, 0, w, h, searchSet);

  // Draw points
  for (const pt of points) {
    const px = pt[0] * w;
    const py = pt[1] * h;
    const isNearest = nearestPoint && pt[0] === nearestPoint[0] && pt[1] === nearestPoint[1];
    const isOnPath = searchSet.has(pt);

    ctx.beginPath();
    ctx.arc(px, py, isNearest ? 8 : 5, 0, Math.PI * 2);
    if (isNearest) {
      ctx.fillStyle = '#3fb950';
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#3fb950';
    } else if (isOnPath) {
      ctx.fillStyle = '#f2cc60';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#f2cc60';
    } else {
      ctx.fillStyle = '#e6edf3';
      ctx.shadowBlur = 0;
    }
    ctx.fill();
    ctx.shadowBlur = 0;

    if (isNearest) {
      ctx.strokeStyle = '#3fb950';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  // Draw query point
  if (queryPoint) {
    const qx = queryPoint[0] * w;
    const qy = queryPoint[1] * h;
    ctx.beginPath();
    ctx.arc(qx, qy, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#f2cc60';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw line to nearest
    if (nearestPoint) {
      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = 'rgba(63,185,80,0.6)';
      ctx.lineWidth = 1.5;
      ctx.moveTo(qx, qy);
      ctx.lineTo(nearestPoint[0] * w, nearestPoint[1] * h);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }
}

function drawSplitLines(node, x0, y0, x1, y1, searchSet) {
  if (!node) return;
  const rect = canvas.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;
  const px = node.point[0] * w;
  const py = node.point[1] * h;
  const isOnPath = searchSet.has(node.point);

  if (node.axis === 0) {
    // Vertical line (X-split)
    ctx.beginPath();
    ctx.strokeStyle = isOnPath ? 'rgba(255,107,107,0.8)' : 'rgba(255,107,107,0.3)';
    ctx.lineWidth = isOnPath ? 2 : 1;
    ctx.moveTo(px, y0);
    ctx.lineTo(px, y1);
    ctx.stroke();
    drawSplitLines(node.left, x0, y0, px, y1, searchSet);
    drawSplitLines(node.right, px, y0, x1, y1, searchSet);
  } else {
    // Horizontal line (Y-split)
    ctx.beginPath();
    ctx.strokeStyle = isOnPath ? 'rgba(88,166,255,0.8)' : 'rgba(88,166,255,0.3)';
    ctx.lineWidth = isOnPath ? 2 : 1;
    ctx.moveTo(x0, py);
    ctx.lineTo(x1, py);
    ctx.stroke();
    drawSplitLines(node.left, x0, y0, x1, py, searchSet);
    drawSplitLines(node.right, x0, py, x1, y1, searchSet);
  }
}

function updateStats() {
  pointCountEl.textContent = points.length;
  treeDepthEl.textContent = treeDepth(kdRoot);
}

// ── Animations ──
async function animateNN(target) {
  if (animating) return;
  animating = true;
  statusEl.textContent = 'Searching nearest neighbor…';
  queryPoint = target;
  nearestPoint = null;
  searchPath = [];

  const path = [];
  const result = nnSearch(kdRoot, target, null, path);

  // Animate the search path
  for (let i = 0; i < path.length; i++) {
    searchPath.push(path[i]);
    draw();
    await sleep(getSpeed());
  }

  if (result) {
    nearestPoint = result.point;
    const dist = Math.sqrt(result.dist).toFixed(4);
    nnDistEl.textContent = dist;
    statusEl.textContent = `Nearest: (${result.point[0].toFixed(2)}, ${result.point[1].toFixed(2)}) dist=${dist}`;
  }
  draw();
  animating = false;
}

// ── Events ──
canvas.addEventListener('click', (e) => {
  if (animating) return;
  const [cx, cy] = getCanvasCoords(e);
  if (nnMode) {
    if (points.length === 0) return;
    animateNN([cx, cy]);
  } else {
    points.push([cx, cy]);
    rebuild();
    statusEl.textContent = `Added point (${cx.toFixed(2)}, ${cy.toFixed(2)})`;
  }
});

randomBtn.addEventListener('click', () => {
  if (animating) return;
  for (let i = 0; i < 20; i++) {
    points.push([
      0.05 + Math.random() * 0.9,
      0.05 + Math.random() * 0.9
    ]);
  }
  rebuild();
  statusEl.textContent = 'Added 20 random points';
});

nnBtn.addEventListener('click', () => {
  nnMode = !nnMode;
  nnBtn.textContent = `NN Mode: ${nnMode ? 'ON' : 'OFF'}`;
  nnBtn.classList.toggle('active', nnMode);
  if (!nnMode) {
    queryPoint = null;
    nearestPoint = null;
    searchPath = [];
    nnDistEl.textContent = '—';
    draw();
  }
  statusEl.textContent = nnMode ? 'Click canvas to find nearest neighbor' : 'Click canvas to add points';
});

clearBtn.addEventListener('click', () => {
  points = [];
  kdRoot = null;
  queryPoint = null;
  nearestPoint = null;
  searchPath = [];
  nnDistEl.textContent = '—';
  updateStats();
  draw();
  statusEl.textContent = 'Cleared';
});

speedSlider.addEventListener('input', () => {
  speedValueEl.textContent = `${speedSlider.value} ms`;
});

window.addEventListener('resize', draw);
draw();
