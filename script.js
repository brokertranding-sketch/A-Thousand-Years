// DOM Elements
const lyricsLines = document.querySelectorAll('.lyrics-line-3d');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const slowBtn = document.getElementById('slowBtn');
const effectsBtn = document.getElementById('effectsBtn');
const speedSlider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');
const mainImage = document.getElementById('main-image');
const bgAudio = document.getElementById('bgAudio');
const particlesContainer = document.getElementById('particles');

// Lyrics data with enhanced 3D effects
const lyricsData = [
    {
        id: 'line1',
        words: [
            { text: 'I', delay: 300, color: '#ff6b6b' },
            { text: 'have', delay: 200, color: '#b8c1ec' },
            { text: 'died', delay: 800, color: '#ff4757' },
            { text: 'every', delay: 200, color: '#b8c1ec' },
            { text: 'day', delay: 300, color: '#b8c1ec' },
            { text: 'waiting', delay: 600, color: '#ffd93d' },
            { text: 'for', delay: 200, color: '#b8c1ec' },
            { text: 'you', delay: 400, color: '#6bcf7f' }
        ]
    },
    {
        id: 'line2',
        words: [
            { text: 'Darling,', delay: 500, color: '#4d96ff' },
            { text: "don't", delay: 