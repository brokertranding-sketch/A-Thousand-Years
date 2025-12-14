// =====================
// DOM ELEMENTS
// =====================
const lyricsLines = document.querySelectorAll(".lyrics-line-3d");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const slowBtn = document.getElementById("slowBtn");
const effectsBtn = document.getElementById("effectsBtn");
const speedSlider = document.getElementById("speedSlider");
const speedValue = document.getElementById("speedValue");
const bgAudio = document.getElementById("bgAudio");
const particlesContainer = document.getElementById("particles");

let speedMultiplier = 1;
let isPlaying = false;
let slowMode = false;

// =====================
// LYRICS DATA
// =====================
const lyricsData = [
  {
    id: "line1",
    text: "I have died every day waiting for you"
  },
  {
    id: "line2",
    text: "Darling don't be afraid I have loved you"
  },
  {
    id: "line3",
    text: "For a thousand years I'll love you"
  },
  {
    id: "line4",
    text: "For a thousand more"
  }
];

// =====================
// PARTICLES
// =====================
function createParticles(count = 40) {
  particlesContainer.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");
    p.style.width = Math.random() * 6 + 4 + "px";
    p.style.height = p.style.width;
    p.style.left = Math.random() * 100 + "%";
    p.style.top = Math.random() * 100 + "%";
    p.style.animationDuration = Math.random() * 10 + 10 + "s";
    particlesContainer.appendChild(p);
  }
}

// =====================
// SHOW LYRICS
// =====================
async function showLyrics() {
  isPlaying = true;
  bgAudio.play();

  for (let i = 0; i < lyricsData.length; i++) {
    const lineData = lyricsData[i];
    const lineEl = document.getElementById(lineData.id);

    lineEl.innerHTML = "";
    lineEl.classList.add("show", "highlight");

    const words = lineData.text.split(" ");

    for (let word of words) {
      const span = document.createElement("span");
      span.className = "word-3d";
      span.textContent = word;
      lineEl.appendChild(span);

      setTimeout(() => span.classList.add("show"), 50);
      await sleep(300 / speedMultiplier);
    }

    await sleep(1200 / speedMultiplier);
    lineEl.classList.remove("highlight");
  }

  isPlaying = false;
}

// =====================
// RESET
// =====================
function resetLyrics() {
  lyricsLines.forEach(line => {
    line.innerHTML = "";
    line.classList.remove("show", "highlight");
  });

  bgAudio.pause();
  bgAudio.currentTime = 0;
  isPlaying = false;
}

// =====================
// UTIL
// =====================
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// =====================
// CONTROLS
// =====================
startBtn.addEventListener("click", () => {
  if (!isPlaying) showLyrics();
});

resetBtn.addEventListener("click", resetLyrics);

slowBtn.addEventListener("click", () => {
  slowMode = !slowMode;
  speedMultiplier = slowMode ? 0.5 : 1;
  speedSlider.value = speedMultiplier;
  speedValue.textContent = speedMultiplier + "x";
});

effectsBtn.addEventListener("click", () => {
  document.body.classList.toggle("effects-on");
  createParticles(80);
});

// Speed Slider
speedSlider.addEventListener("input", () => {
  speedMultiplier = speedSlider.value;
  speedValue.textContent = speedMultiplier + "x";
});

// =====================
// INIT
// =====================
createParticles();
