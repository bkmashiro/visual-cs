// Merge Sort Visualization
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const comparisonsEl = document.getElementById('comparisons');
const writesEl = document.getElementById('writes');
const depthEl = document.getElementById('depth');
const statusEl = document.getElementById('status');
const playBtn = document.getElementById('play-btn');
const stepBtn = document.getElementById('step-btn');
const resetBtn = document.getElementById('reset-btn');
const sizeSlider = document.getElementById('size-slider');
const sizeValue = document.getElementById('size-value');
const speedSlider = document.getElementById('speed-slider');
const speedValue = document.getElementById('speed-value');

let arr = [];
let colors = [];
let comparisons = 0;
let writes = 0;
let maxDepth = 0;
let running = false;
let stepping = false;
let stepResolve = null;

function getSpeed() { return Number(speedSlider.value); }
function getSize() { return Number(sizeSlider.value); }

function generateArray() {
  const n = getSize();
  arr = [];
  colors = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.random() * 0.9 + 0.1);
    colors.push('default');
  }
  comparisons = 0;
  writes = 0;
  maxDepth = 0;
  updateStats();
}

function updateStats() {
  comparisonsEl.textContent = comparisons;
  writesEl.textContent = writes;
  depthEl.textContent = maxDepth;
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

  const n = arr.length;
  const gap = 2;
  const barW = (w - gap * (n + 1)) / n;
  const maxH = h - 20;

  for (let i = 0; i < n; i++) {
    const barH = arr[i] * maxH;
    const x = gap + i * (barW + gap);
    const y = h - barH;
    switch (colors[i]) {
      case 'split': ctx.fillStyle = '#ff7b72'; break;
      case 'compare': ctx.fillStyle = '#f2cc60'; break;
      case 'merge': ctx.fillStyle = '#3fb950'; break;
      case 'sorted': ctx.fillStyle = '#58a6ff'; break;
      default: ctx.fillStyle = '#8b949e';
    }
    ctx.fillRect(x, y, barW, barH);
  }
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function waitStep() {
  if (stepping) {
    return new Promise(r => { stepResolve = r; });
  }
  return sleep(getSpeed());
}

async function mergeSort(left, right, depth) {
  if (left >= right) return;
  maxDepth = Math.max(maxDepth, depth);
  depthEl.textContent = maxDepth;

  const mid = Math.floor((left + right) / 2);

  // Show split
  for (let i = left; i <= right; i++) colors[i] = 'split';
  draw();
  await waitStep();
  for (let i = left; i <= right; i++) colors[i] = 'default';

  await mergeSort(left, mid, depth + 1);
  await mergeSort(mid + 1, right, depth + 1);
  await merge(left, mid, right);
}

async function merge(left, mid, right) {
  const temp = [];
  let i = left, j = mid + 1;

  while (i <= mid && j <= right) {
    colors[i] = 'compare';
    colors[j] = 'compare';
    draw();
    comparisons++;
    updateStats();
    await waitStep();

    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      colors[i] = 'default';
      i++;
    } else {
      temp.push(arr[j]);
      colors[j] = 'default';
      j++;
    }
  }

  while (i <= mid) { temp.push(arr[i]); i++; }
  while (j <= right) { temp.push(arr[j]); j++; }

  for (let k = 0; k < temp.length; k++) {
    arr[left + k] = temp[k];
    colors[left + k] = 'merge';
    writes++;
    updateStats();
    draw();
    await waitStep();
  }

  for (let k = left; k <= right; k++) colors[k] = 'default';
  draw();
}

async function run() {
  if (running) return;
  running = true;
  stepping = false;
  playBtn.disabled = true;
  stepBtn.disabled = true;
  resetBtn.disabled = true;
  statusEl.textContent = 'Sorting…';

  await mergeSort(0, arr.length - 1, 1);

  for (let i = 0; i < arr.length; i++) colors[i] = 'sorted';
  draw();
  statusEl.textContent = 'Sorted!';
  running = false;
  playBtn.disabled = false;
  stepBtn.disabled = false;
  resetBtn.disabled = false;
}

async function runStepping() {
  if (running) return;
  running = true;
  stepping = true;
  playBtn.disabled = true;
  resetBtn.disabled = true;
  statusEl.textContent = 'Step mode — click Step';

  await mergeSort(0, arr.length - 1, 1);

  for (let i = 0; i < arr.length; i++) colors[i] = 'sorted';
  draw();
  statusEl.textContent = 'Sorted!';
  running = false;
  playBtn.disabled = false;
  stepBtn.disabled = false;
  resetBtn.disabled = false;
}

function reset() {
  running = false;
  stepping = false;
  if (stepResolve) { stepResolve(); stepResolve = null; }
  generateArray();
  draw();
  statusEl.textContent = 'Ready';
  playBtn.disabled = false;
  stepBtn.disabled = false;
  resetBtn.disabled = false;
}

playBtn.addEventListener('click', run);
stepBtn.addEventListener('click', () => {
  if (!running) {
    runStepping();
  } else if (stepResolve) {
    stepResolve();
    stepResolve = null;
  }
});
resetBtn.addEventListener('click', reset);

sizeSlider.addEventListener('input', () => {
  sizeValue.textContent = sizeSlider.value;
  if (!running) reset();
});
speedSlider.addEventListener('input', () => {
  speedValue.textContent = `${speedSlider.value} ms`;
});

window.addEventListener('resize', draw);

generateArray();
draw();
