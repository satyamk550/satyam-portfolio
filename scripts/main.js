'use strict';

/** Three.js particle field and floating blockchain crystal. */
function initBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 18;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const particleCount = 140;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = Array.from({ length: particleCount }, () => ({
    x: (Math.random() - 0.5) * 0.015,
    y: (Math.random() - 0.5) * 0.015,
    z: (Math.random() - 0.5) * 0.015
  }));

  for (let i = 0; i < positions.length; i += 3) {
    positions[i] = (Math.random() - 0.5) * 25;
    positions[i + 1] = (Math.random() - 0.5) * 25;
    positions[i + 2] = (Math.random() - 0.5) * 25;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const points = new THREE.Points(geometry, new THREE.PointsMaterial({
    color: 0x05d9e8, size: 0.16, transparent: true, opacity: 0.8
  }));
  scene.add(points);

  const crystal = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.5, 1),
    new THREE.MeshBasicMaterial({ color: 0xff2a6d, wireframe: true, transparent: true, opacity: 0.22 })
  );
  scene.add(crystal);

  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let animationFrame = null;
  let isPageVisible = !document.hidden;

  function renderFrame(advance) {
    if (advance) {
      for (let i = 0; i < particleCount; i += 1) {
        const offset = i * 3;
        positions[offset] += velocities[i].x;
        positions[offset + 1] += velocities[i].y;
        positions[offset + 2] += velocities[i].z;
        for (let axis = 0; axis < 3; axis += 1) {
          if (positions[offset + axis] > 12.5) positions[offset + axis] = -12.5;
          if (positions[offset + axis] < -12.5) positions[offset + axis] = 12.5;
        }
      }
      geometry.attributes.position.needsUpdate = true;
      points.rotation.y += 0.0005;
      crystal.rotation.x += 0.002;
      crystal.rotation.y += 0.003;
    }
    renderer.render(scene, camera);
  }

  function animate() {
    animationFrame = null;
    if (!isPageVisible || reducedMotion.matches) return;
    renderFrame(true);
    animationFrame = requestAnimationFrame(animate);
  }

  function syncAnimation() {
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
    if (isPageVisible && !reducedMotion.matches) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      renderFrame(false);
    }
  }

  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => {
    isPageVisible = !document.hidden;
    syncAnimation();
  });
  reducedMotion.addEventListener?.('change', syncAnimation);
  syncAnimation();
}

/** Add a restrained pointer tilt to the profile and project cards. */
function initCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.photo-card, .tilt-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 7}deg) rotateY(${(x - 0.5) * 7}deg) translateY(-2px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}

/** Small portfolio terminal. Input is rendered as text to avoid interpreting markup. */
function initTerminal() {
  const input = document.getElementById('term-cmd');
  const output = document.getElementById('term-output');
  if (!input || !output) return;

  const commands = {
    help: 'Available commands: help, about, skills, projects, clear',
    about: 'Satyam Kumar — Computer Science undergraduate focused on blockchain, Solidity, C++, and cybersecurity.',
    skills: 'Languages: C++, Solidity, Python, Java, JavaScript. Web3: Ethereum, IPFS, MetaMask, ethers.js. Tools: Docker, Git, Linux.',
    projects: 'Featured: Blockchain Credential Verification; BREACH & ESCAPE – Sector A; Terminal Based Portfolio.'
  };

  input.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    const command = input.value.trim().toLowerCase();
    const entered = document.createElement('div');
    entered.className = 'terminal-line';
    entered.textContent = `satyam@web3:~$ ${input.value}`;
    output.appendChild(entered);

    if (command === 'clear') {
      output.replaceChildren();
    } else {
      const result = document.createElement('div');
      result.className = 'terminal-line';
      result.textContent = commands[command] || `Command not found: ${command || '(empty)'}. Type help to see available commands.`;
      output.appendChild(result);
    }

    input.value = '';
    output.scrollTop = output.scrollHeight;
  });
}

/** Accessible small-screen navigation with Escape and outside-click support. */
function initMobileNavigation() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('primary-navigation');
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    menu.classList.toggle('is-open', open);
    const icon = toggle.querySelector('i');
    if (icon) icon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
  });
  window.matchMedia('(min-width: 901px)').addEventListener?.('change', () => setOpen(false));
}

document.addEventListener('DOMContentLoaded', () => {
  initBackground();
  initCardTilt();
  initTerminal();
  initMobileNavigation();
});
const __initBackground = initBackground;
initBackground = function initBackgroundWithDeviceGuard() {
  if (window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  __initBackground();
};
