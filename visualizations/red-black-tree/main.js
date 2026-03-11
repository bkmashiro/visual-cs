// Red-Black Tree Visualization
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const nodeCountEl = document.getElementById('node-count');
const treeHeightEl = document.getElementById('tree-height');
const rotationsEl = document.getElementById('rotations');
const statusEl = document.getElementById('status');
const valueInput = document.getElementById('value-input');
const insertBtn = document.getElementById('insert-btn');
const deleteBtn = document.getElementById('delete-btn');
const randomBtn = document.getElementById('random-btn');
const clearBtn = document.getElementById('clear-btn');
const speedSlider = document.getElementById('speed-slider');
const speedValue = document.getElementById('speed-value');

const RED = 'red';
const BLACK = 'black';
const NIL = { color: BLACK, left: null, right: null, parent: null, value: null };

let root = NIL;
let rotationCount = 0;
let animating = false;
let highlightNode = null;

function getSpeed() { return Number(speedSlider.value); }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── RB Tree operations ──

function newNode(value) {
  return { value, color: RED, left: NIL, right: NIL, parent: NIL };
}

function leftRotate(x) {
  const y = x.right;
  x.right = y.left;
  if (y.left !== NIL) y.left.parent = x;
  y.parent = x.parent;
  if (x.parent === NIL) root = y;
  else if (x === x.parent.left) x.parent.left = y;
  else x.parent.right = y;
  y.left = x;
  x.parent = y;
  rotationCount++;
}

function rightRotate(x) {
  const y = x.left;
  x.left = y.right;
  if (y.right !== NIL) y.right.parent = x;
  y.parent = x.parent;
  if (x.parent === NIL) root = y;
  else if (x === x.parent.right) x.parent.right = y;
  else x.parent.left = y;
  y.right = x;
  x.parent = y;
  rotationCount++;
}

function insertFixup(z) {
  while (z.parent.color === RED) {
    if (z.parent === z.parent.parent.left) {
      const y = z.parent.parent.right;
      if (y.color === RED) {
        z.parent.color = BLACK;
        y.color = BLACK;
        z.parent.parent.color = RED;
        z = z.parent.parent;
      } else {
        if (z === z.parent.right) {
          z = z.parent;
          leftRotate(z);
        }
        z.parent.color = BLACK;
        z.parent.parent.color = RED;
        rightRotate(z.parent.parent);
      }
    } else {
      const y = z.parent.parent.left;
      if (y.color === RED) {
        z.parent.color = BLACK;
        y.color = BLACK;
        z.parent.parent.color = RED;
        z = z.parent.parent;
      } else {
        if (z === z.parent.left) {
          z = z.parent;
          rightRotate(z);
        }
        z.parent.color = BLACK;
        z.parent.parent.color = RED;
        leftRotate(z.parent.parent);
      }
    }
  }
  root.color = BLACK;
}

function rbInsert(value) {
  const z = newNode(value);
  let y = NIL;
  let x = root;
  while (x !== NIL) {
    y = x;
    if (z.value < x.value) x = x.left;
    else if (z.value > x.value) x = x.right;
    else return null; // duplicate
  }
  z.parent = y;
  if (y === NIL) root = z;
  else if (z.value < y.value) y.left = z;
  else y.right = z;
  insertFixup(z);
  return z;
}

function transplant(u, v) {
  if (u.parent === NIL) root = v;
  else if (u === u.parent.left) u.parent.left = v;
  else u.parent.right = v;
  v.parent = u.parent;
}

function treeMinimum(x) {
  while (x.left !== NIL) x = x.left;
  return x;
}

function deleteFixup(x) {
  while (x !== root && x.color === BLACK) {
    if (x === x.parent.left) {
      let w = x.parent.right;
      if (w.color === RED) {
        w.color = BLACK;
        x.parent.color = RED;
        leftRotate(x.parent);
        w = x.parent.right;
      }
      if (w.left.color === BLACK && w.right.color === BLACK) {
        w.color = RED;
        x = x.parent;
      } else {
        if (w.right.color === BLACK) {
          w.left.color = BLACK;
          w.color = RED;
          rightRotate(w);
          w = x.parent.right;
        }
        w.color = x.parent.color;
        x.parent.color = BLACK;
        w.right.color = BLACK;
        leftRotate(x.parent);
        x = root;
      }
    } else {
      let w = x.parent.left;
      if (w.color === RED) {
        w.color = BLACK;
        x.parent.color = RED;
        rightRotate(x.parent);
        w = x.parent.left;
      }
      if (w.right.color === BLACK && w.left.color === BLACK) {
        w.color = RED;
        x = x.parent;
      } else {
        if (w.left.color === BLACK) {
          w.right.color = BLACK;
          w.color = RED;
          leftRotate(w);
          w = x.parent.left;
        }
        w.color = x.parent.color;
        x.parent.color = BLACK;
        w.left.color = BLACK;
        rightRotate(x.parent);
        x = root;
      }
    }
  }
  x.color = BLACK;
}

function rbDelete(value) {
  let z = root;
  while (z !== NIL) {
    if (value < z.value) z = z.left;
    else if (value > z.value) z = z.right;
    else break;
  }
  if (z === NIL) return false;

  let y = z;
  let yOrigColor = y.color;
  let x;
  if (z.left === NIL) {
    x = z.right;
    transplant(z, z.right);
  } else if (z.right === NIL) {
    x = z.left;
    transplant(z, z.left);
  } else {
    y = treeMinimum(z.right);
    yOrigColor = y.color;
    x = y.right;
    if (y.parent === z) {
      x.parent = y;
    } else {
      transplant(y, y.right);
      y.right = z.right;
      y.right.parent = y;
    }
    transplant(z, y);
    y.left = z.left;
    y.left.parent = y;
    y.color = z.color;
  }
  if (yOrigColor === BLACK) deleteFixup(x);
  return true;
}

// ── Drawing ──

function getTreeHeight(node) {
  if (node === NIL) return 0;
  return 1 + Math.max(getTreeHeight(node.left), getTreeHeight(node.right));
}

function countNodes(node) {
  if (node === NIL) return 0;
  return 1 + countNodes(node.left) + countNodes(node.right);
}

function assignPositions(node, x, y, spread) {
  if (node === NIL) return [];
  const positions = [];
  node._x = x;
  node._y = y;
  positions.push(node);
  positions.push(...assignPositions(node.left, x - spread, y + 70, spread * 0.55));
  positions.push(...assignPositions(node.right, x + spread, y + 70, spread * 0.55));
  return positions;
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

  if (root === NIL) {
    ctx.fillStyle = '#8b949e';
    ctx.font = '16px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Insert values to build a Red-Black Tree', w / 2, h / 2);
    return;
  }

  const height = getTreeHeight(root);
  const spread = Math.min(w * 0.4, 260);
  const nodes = assignPositions(root, w / 2, 45, spread);

  // Draw edges
  for (const node of nodes) {
    if (node.left !== NIL) {
      ctx.beginPath();
      ctx.moveTo(node._x, node._y);
      ctx.lineTo(node.left._x, node.left._y);
      ctx.strokeStyle = '#30363d';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    if (node.right !== NIL) {
      ctx.beginPath();
      ctx.moveTo(node._x, node._y);
      ctx.lineTo(node.right._x, node.right._y);
      ctx.strokeStyle = '#30363d';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  // Draw nodes
  const radius = 20;
  for (const node of nodes) {
    ctx.beginPath();
    ctx.arc(node._x, node._y, radius, 0, Math.PI * 2);

    if (node === highlightNode) {
      ctx.fillStyle = '#f2cc60';
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 3;
    } else if (node.color === RED) {
      ctx.fillStyle = '#ff6b6b';
      ctx.strokeStyle = '#ff9999';
      ctx.lineWidth = 2;
    } else {
      ctx.fillStyle = '#444c56';
      ctx.strokeStyle = '#636e7b';
      ctx.lineWidth = 2;
    }
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#fff';
    ctx.font = 'bold 13px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(node.value), node._x, node._y);
  }
}

function updateStats() {
  nodeCountEl.textContent = countNodes(root);
  treeHeightEl.textContent = getTreeHeight(root);
  rotationsEl.textContent = rotationCount;
}

async function animateInsert(value) {
  if (animating) return;
  animating = true;
  statusEl.textContent = `Inserting ${value}…`;
  const node = rbInsert(value);
  if (!node) {
    statusEl.textContent = `${value} already exists`;
    animating = false;
    return;
  }
  highlightNode = node;
  updateStats();
  draw();
  await sleep(getSpeed());
  highlightNode = null;
  draw();
  statusEl.textContent = `Inserted ${value}`;
  animating = false;
}

async function animateDelete(value) {
  if (animating) return;
  animating = true;
  statusEl.textContent = `Deleting ${value}…`;
  const ok = rbDelete(value);
  if (!ok) {
    statusEl.textContent = `${value} not found`;
    animating = false;
    return;
  }
  updateStats();
  draw();
  await sleep(getSpeed());
  statusEl.textContent = `Deleted ${value}`;
  animating = false;
}

// ── Events ──

insertBtn.addEventListener('click', () => {
  const val = parseInt(valueInput.value, 10);
  if (isNaN(val)) return;
  valueInput.value = '';
  animateInsert(val);
});

deleteBtn.addEventListener('click', () => {
  const val = parseInt(valueInput.value, 10);
  if (isNaN(val)) return;
  valueInput.value = '';
  animateDelete(val);
});

valueInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') insertBtn.click();
});

randomBtn.addEventListener('click', async () => {
  if (animating) return;
  const used = new Set();
  const collect = (n) => { if (n !== NIL) { used.add(n.value); collect(n.left); collect(n.right); } };
  collect(root);
  for (let i = 0; i < 5; i++) {
    let v;
    do { v = Math.floor(Math.random() * 99) + 1; } while (used.has(v));
    used.add(v);
    await animateInsert(v);
  }
});

clearBtn.addEventListener('click', () => {
  root = NIL;
  rotationCount = 0;
  highlightNode = null;
  updateStats();
  draw();
  statusEl.textContent = 'Cleared';
});

speedSlider.addEventListener('input', () => {
  speedValue.textContent = `${speedSlider.value} ms`;
});

window.addEventListener('resize', draw);
draw();
