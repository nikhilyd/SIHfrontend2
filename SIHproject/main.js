const menuToggle = document.getElementById('menuToggle');
menuToggle?.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

const industries = [
  {
    title: 'Oil & Gas',
    copy: 'Supervise pipelines, pumping stations, and custody transfer with redundant telemetry.',
    badge: 'Hydrocarbon ready',
  },
  {
    title: 'Water',
    copy: 'Optimize treatment, distribution, and leakage detection with AI-assisted control.',
    badge: 'Water secure',
  },
  {
    title: 'Food & Pharma',
    copy: 'Validate batches, CFR 21 Part 11 compliant reporting, and hygienic monitoring.',
    badge: 'Compliance built-in',
  },
  {
    title: 'Marine',
    copy: 'Bridge monitoring, propulsion diagnostics, and vessel-wide energy dashboards.',
    badge: 'Maritime grade',
  },
  {
    title: 'Mining & Metals',
    copy: 'Track ore flow, furnace health, and predictive maintenance for heavy assets.',
    badge: 'Heavy industry',
  },
  {
    title: 'Electric Utilities',
    copy: 'Visualize substations, feeders, and load flows with DNP3 and IEC integrations.',
    badge: 'Grid aware',
  },
];

// const carousel = document.getElementById('industryCarousel');
// industries.forEach((item) => {
//   const card = document.createElement('article');
//   card.className = 'industry-card';
//   card.innerHTML = `
//     <h4>${item.title}</h4>
//     <p>${item.copy}</p>
//     <div class="chip">${item.badge}</div>
//   `;
//   carousel.appendChild(card);
// });

const canvas = document.getElementById('noiseCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function drawNoise() {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const buffer32 = new Uint32Array(imageData.data.buffer);
  const len = buffer32.length;
  for (let i = 0; i < len; i++) {
    if (Math.random() < 0.03) {
      buffer32[i] = 0xffffffff;
    }
  }
  ctx.putImageData(imageData, 0, 0);
  requestAnimationFrame(drawNoise);
}
drawNoise();

const statsPanel = document.querySelector('.stats-panel');
if (statsPanel) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          statsPanel.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(statsPanel);
}

const revealBlocks = document.querySelectorAll('.reveal-from-left, .reveal-from-right, .reveal-up');
if (revealBlocks.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );

  revealBlocks.forEach((block) => revealObserver.observe(block));
}


