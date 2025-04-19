// Dark/Light mode toggle
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
let dark = false;
modeToggle.addEventListener('click', () => {
  dark = !dark;
  body.classList.toggle('dark-mode', dark);
  body.classList.toggle('light-mode', !dark);
  modeToggle.textContent = dark ? '☀️' : '🌙';
});

// Animated hero text (simple typewriter effect)
const animatedText = document.getElementById('animated-text');
const phrases = [
  'Commercial Excellence',
  'Strategy',
  'Retail Analytics',
  'Marketing Science',
  'Data Engineering',
  'Leadership',
  'Team Building',
  'Business Intelligence'
];
let phraseIdx = 0, charIdx = 0, typing = true;
function typeHeroText() {
  if (typing) {
    if (charIdx < phrases[phraseIdx].length) {
      animatedText.textContent += phrases[phraseIdx][charIdx++];
      setTimeout(typeHeroText, 70);
    } else {
      typing = false;
      setTimeout(typeHeroText, 1000);
    }
  } else {
    if (charIdx > 0) {
      animatedText.textContent = animatedText.textContent.slice(0, -1);
      charIdx--;
      setTimeout(typeHeroText, 35);
    } else {
      typing = true;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(typeHeroText, 400);
    }
  }
}
typeHeroText();
