// Trie Visualization
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const wordCountEl = document.getElementById('word-count');
const nodeCountEl = document.getElementById('node-count');
const prefixMatchesEl = document.getElementById('prefix-matches');
const statusEl = document.getElementById('status');
const wordInput = document.getElementById('word-input');
const insertBtn = document.getElementById('insert-btn');
const searchBtn = document.getElementById('search-btn');
const sampleBtn = document.getElementById('sample-btn');
const clearBtn = document.getElementById('clear-btn');
const speedSlider = document.getElementById('speed-slider');
const speedValueEl = document.getElementById('speed-value');
const wordListEl = document.getElementById('word-list');

let animating = false;
let highlightNodes = new Set();
let insertingNodes = new Set();
let searchPrefix = '';

function getSpeed() { return Number(speedSlider.value); }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── Trie ──
class TrieNode {
  constructor(char) {
    this.char = char;
    this.children = {};
    this.isEnd = false;
    this.id = TrieNode._id++;
  }
}
TrieNode._id = 0;

class Trie {
  constructor() {
    this.root = new TrieNode('');
    this.wordCount = 0;
  }

  insert(word) {
    let node = this.root;
    const path = [node];
    for (const ch of word.toLowerCase()) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode(ch);
      }
      node = node.children[ch];
      path.push(node);
    }
    if (node.isEnd) return { path, alreadyExists: true };
    node.isEnd = true;
    this.wordCount++;
    return { path, alreadyExists: false };
  }

  search(word) {
    let node = this.root;
    const path = [node];
    for (const ch of word.toLowerCase()) {
      if (!node.children[ch]) return { path, found: false };
      node = node.children[ch];
      path.push(node);
    }
    return { path, found: node.isEnd };
  }

  prefixSearch(prefix) {
    let node = this.root;
    for (const ch of prefix.toLowerCase()) {
      if (!node.children[ch]) return [];
      node = node.children[ch];
    }
    const results = [];
    this._collect(node, prefix.toLowerCase(), results);
    return results;
  }

  _collect(node, prefix, results) {
    if (node.isEnd) results.push(prefix);
    for (const ch of Object.keys(node.children).sort()) {
      this._collect(node.children[ch], prefix + ch, results);
    }
  }

  getAllWords() {
    const words = [];
    this._collect(this.root, '', words);
    return words;
  }

  countNodes() {
    let count = 0;
    const q = [this.root];
    while (q.length) {
      const n = q.shift();
      count++;
      for (const ch of Object.values(n.children)) q.push(ch);
    }
    return count;
  }

  getSearchPath(prefix) {
    let node = this.root;
    const path = [node];
    for (const ch of prefix.toLowerCase()) {
      if (!node.children[ch]) break;
      node = node.children[ch];
      path.push(node);
    }
    return path;
  }
}

const trie = new Trie();

// ── Layout ──
function computeLayout() {
  const positions = new Map();
  const nodeW = 36;

  function subtreeWidth(node) {
    const children = Object.keys(node.children).sort();
    if (children.length === 0) return 1;
    let w = 0;
    for (const ch of children) {
      w += subtreeWidth(node.children[ch]);
    }
    return w;
  }

  function layout(node, depth, leftOffset) {
    const children = Object.keys(node.children).sort();
    const width = subtreeWidth(node);
    const centerX = leftOffset + width / 2;
    positions.set(node.id, { x: centerX, y: depth, node });

    let childLeft = leftOffset;
    for (const ch of children) {
      const child = node.children[ch];
      const childW = subtreeWidth(child);
      layout(child, depth + 1, childLeft);
      childLeft += childW;
    }
  }

  layout(trie.root, 0, 0);
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

  const positions = computeLayout();
  if (positions.size <= 1 && Object.keys(trie.root.children).length === 0) {
    ctx.fillStyle = '#8b949e';
    ctx.font = '16px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Insert words to build a Trie', w / 2, h / 2);
    return;
  }

  // Find bounds for scaling
  let minX = Infinity, maxX = -Infinity, maxY = 0;
  for (const pos of positions.values()) {
    if (pos.x < minX) minX = pos.x;
    if (pos.x > maxX) maxX = pos.x;
    if (pos.y > maxY) maxY = pos.y;
  }

  const spanX = maxX - minX || 1;
  const spanY = maxY || 1;
  const padX = 60;
  const padY = 50;
  const scaleX = (w - padX * 2) / spanX;
  const scaleY = Math.min((h - padY * 2) / spanY, 70);
  const radius = 18;

  function toScreen(pos) {
    return {
      x: padX + (pos.x - minX) * scaleX,
      y: padY + pos.y * scaleY
    };
  }

  // Draw edges
  for (const pos of positions.values()) {
    const children = Object.keys(pos.node.children).sort();
    const parentScreen = toScreen(pos);
    for (const ch of children) {
      const child = pos.node.children[ch];
      const childPos = positions.get(child.id);
      if (!childPos) continue;
      const childScreen = toScreen(childPos);

      const bothHighlighted = highlightNodes.has(pos.node.id) && highlightNodes.has(child.id);
      ctx.beginPath();
      ctx.strokeStyle = bothHighlighted ? '#f2cc60' : 'rgba(88,166,255,0.25)';
      ctx.lineWidth = bothHighlighted ? 2.5 : 1.5;
      ctx.moveTo(parentScreen.x, parentScreen.y + radius);
      ctx.lineTo(childScreen.x, childScreen.y - radius);
      ctx.stroke();
    }
  }

  // Draw nodes
  for (const pos of positions.values()) {
    const screen = toScreen(pos);
    const isHighlighted = highlightNodes.has(pos.node.id);
    const isInserting = insertingNodes.has(pos.node.id);
    const isEnd = pos.node.isEnd;

    let fill = '#1f6feb';
    let stroke = '#58a6ff';
    if (pos.node === trie.root) { fill = '#30363d'; stroke = '#8b949e'; }
    if (isHighlighted) { fill = '#7c6a1e'; stroke = '#f2cc60'; }
    if (isInserting) { fill = '#8b2020'; stroke = '#ff6b6b'; }

    ctx.beginPath();
    ctx.arc(screen.x, screen.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.strokeStyle = isEnd ? '#3fb950' : stroke;
    ctx.lineWidth = isEnd ? 3 : 1.5;
    ctx.stroke();

    // Draw a second ring for end-of-word
    if (isEnd) {
      ctx.beginPath();
      ctx.arc(screen.x, screen.y, radius + 4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(63,185,80,0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    ctx.fillStyle = '#e6edf3';
    ctx.font = 'bold 14px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(pos.node === trie.root ? '∅' : pos.node.char, screen.x, screen.y);
  }
}

function updateWordList() {
  const words = trie.getAllWords();
  const matches = searchPrefix ? trie.prefixSearch(searchPrefix) : [];
  const matchSet = new Set(matches);

  wordListEl.innerHTML = words.map(w =>
    `<span class="word-tag${matchSet.has(w) ? ' matched' : ''}">${w}</span>`
  ).join('');

  prefixMatchesEl.textContent = searchPrefix ? matches.length : 0;
}

function updateStats() {
  wordCountEl.textContent = trie.wordCount;
  nodeCountEl.textContent = trie.countNodes();
  updateWordList();
}

// ── Animations ──
async function animateInsert(word) {
  if (animating) return;
  if (!word.trim()) return;
  animating = true;
  statusEl.textContent = `Inserting "${word}"…`;

  // Walk existing path
  const result = trie.insert(word);
  if (result.alreadyExists) {
    statusEl.textContent = `"${word}" already exists`;
    animating = false;
    updateStats();
    return;
  }

  // Animate path
  highlightNodes = new Set();
  insertingNodes = new Set();
  for (let i = 0; i < result.path.length; i++) {
    insertingNodes.add(result.path[i].id);
    updateStats();
    draw();
    await sleep(getSpeed());
  }

  insertingNodes = new Set();
  highlightNodes = new Set(result.path.map(n => n.id));
  updateStats();
  draw();
  await sleep(getSpeed());

  highlightNodes = new Set();
  draw();
  statusEl.textContent = `Inserted "${word}"`;
  animating = false;
}

async function animateSearch(word) {
  if (animating) return;
  if (!word.trim()) return;
  animating = true;
  statusEl.textContent = `Searching "${word}"…`;

  const result = trie.search(word);

  highlightNodes = new Set();
  insertingNodes = new Set();
  for (let i = 0; i < result.path.length; i++) {
    highlightNodes.add(result.path[i].id);
    draw();
    await sleep(getSpeed());
  }

  await sleep(getSpeed());

  if (result.found) {
    statusEl.textContent = `"${word}" found!`;
  } else {
    statusEl.textContent = `"${word}" not found`;
  }

  await sleep(getSpeed() * 2);
  highlightNodes = new Set();
  draw();
  animating = false;
}

// ── Real-time prefix matching ──
wordInput.addEventListener('input', () => {
  searchPrefix = wordInput.value.trim();
  if (!animating) {
    const path = trie.getSearchPath(searchPrefix);
    highlightNodes = searchPrefix ? new Set(path.map(n => n.id)) : new Set();
    updateStats();
    draw();
  }
});

// ── Events ──
insertBtn.addEventListener('click', () => {
  const word = wordInput.value.trim();
  if (!word) return;
  wordInput.value = '';
  searchPrefix = '';
  animateInsert(word);
});

searchBtn.addEventListener('click', () => {
  const word = wordInput.value.trim();
  if (!word) return;
  searchPrefix = '';
  animateSearch(word);
});

wordInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') insertBtn.click();
});

sampleBtn.addEventListener('click', async () => {
  if (animating) return;
  const words = ['cat', 'car', 'card', 'care', 'bat', 'bar', 'ball', 'do', 'dog', 'done'];
  for (const w of words) {
    await animateInsert(w);
  }
});

clearBtn.addEventListener('click', () => {
  trie.root = new TrieNode('');
  TrieNode._id = 1;
  trie.root.id = 0;
  trie.wordCount = 0;
  highlightNodes = new Set();
  insertingNodes = new Set();
  searchPrefix = '';
  wordInput.value = '';
  updateStats();
  draw();
  statusEl.textContent = 'Cleared';
});

speedSlider.addEventListener('input', () => {
  speedValueEl.textContent = `${speedSlider.value} ms`;
});

window.addEventListener('resize', draw);
updateStats();
draw();
