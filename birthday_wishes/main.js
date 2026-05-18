// ===== STARS =====
function createStars() {
  const container = document.getElementById('stars');
  const count = 120;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 1;
    const opacity = Math.random() * 0.7 + 0.3;
    const dur = (Math.random() * 3 + 2).toFixed(1);
    const delay = (Math.random() * 5).toFixed(1);
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --dur: ${dur}s;
      --delay: ${delay}s;
      --op: ${opacity};
    `;
    container.appendChild(star);
  }
}

// ===== FLOATING ORBS =====
function createOrbs() {
  const container = document.getElementById('bg-container');
  const orbs = [
    { color: 'rgba(168,85,247,0.5)', size: 400, x: '10%', y: '15%', dur: 14, delay: 0 },
    { color: 'rgba(236,72,153,0.4)', size: 350, x: '70%', y: '60%', dur: 18, delay: -5 },
    { color: 'rgba(251,191,36,0.3)', size: 300, x: '50%', y: '80%', dur: 12, delay: -3 },
    { color: 'rgba(96,165,250,0.3)', size: 280, x: '85%', y: '10%', dur: 16, delay: -8 },
    { color: 'rgba(167,139,250,0.35)', size: 320, x: '25%', y: '70%', dur: 20, delay: -11 },
  ];
  orbs.forEach(o => {
    const el = document.createElement('div');
    el.className = 'orb';
    el.style.cssText = `
      width: ${o.size}px;
      height: ${o.size}px;
      background: ${o.color};
      left: ${o.x};
      top: ${o.y};
      --dur: ${o.dur}s;
      --delay: ${o.delay}s;
      transform: translate(-50%, -50%);
    `;
    container.appendChild(el);
  });
}

// ===== CONFETTI BURST =====
function fireConfetti() {
  const duration = 4000;
  const end = Date.now() + duration;

  const colors = ['#fbbf24', '#f472b6', '#a855f7', '#60a5fa', '#34d399', '#fb923c'];

  // First big burst
  confetti({
    particleCount: 120,
    spread: 100,
    origin: { x: 0.5, y: 0.5 },
    colors,
    scalar: 1.3,
    zIndex: 999,
  });

  // Side cannons
  setTimeout(() => {
    confetti({ particleCount: 60, angle: 60, spread: 70, origin: { x: 0, y: 0.6 }, colors, zIndex: 999 });
    confetti({ particleCount: 60, angle: 120, spread: 70, origin: { x: 1, y: 0.6 }, colors, zIndex: 999 });
  }, 200);

  // Continuous shower
  const interval = setInterval(() => {
    if (Date.now() > end) { clearInterval(interval); return; }
    confetti({
      particleCount: 12,
      spread: 60,
      origin: { x: Math.random(), y: Math.random() * 0.4 },
      colors,
      scalar: 0.9,
      zIndex: 999,
    });
  }, 180);
}

// ===== GIFT BOX INTERACTION =====
let isOpened = false;

function openGift() {
  if (isOpened) return;
  isOpened = true;

  const lid = document.getElementById('gift-lid');
  const giftScene = document.getElementById('gift-scene');
  const messageCard = document.getElementById('message-card');
  const tapHint = document.getElementById('tap-hint');

  // Hide hint
  tapHint.style.opacity = '0';
  tapHint.style.transition = 'opacity 0.3s';

  // Open lid
  lid.classList.add('open');

  // Fire confetti after short delay
  setTimeout(() => {
    fireConfetti();
  }, 400);

  // Hide gift, show card
  setTimeout(() => {
    giftScene.classList.add('hidden');
    setTimeout(() => {
      giftScene.style.display = 'none';
      messageCard.classList.add('visible');
    }, 500);
  }, 900);
}

function resetAll() {
  const lid = document.getElementById('gift-lid');
  const giftScene = document.getElementById('gift-scene');
  const messageCard = document.getElementById('message-card');
  const tapHint = document.getElementById('tap-hint');

  isOpened = false;

  messageCard.classList.remove('visible');
  setTimeout(() => {
    giftScene.style.display = 'flex';
    requestAnimationFrame(() => {
      giftScene.classList.remove('hidden');
      lid.classList.remove('open');
      tapHint.style.opacity = '1';
    });
  }, 400);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  createOrbs();

  const giftBox = document.getElementById('gift-box');
  const replayBtn = document.getElementById('replay-btn');

  giftBox.addEventListener('click', openGift);
  replayBtn.addEventListener('click', resetAll);

  // Keyboard support
  giftBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') openGift();
  });
  giftBox.setAttribute('tabindex', '0');
  giftBox.setAttribute('role', 'button');
  giftBox.setAttribute('aria-label', 'Бэлгийн хайрцгийг нээх');
});
