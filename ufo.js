let player;
const blurLayer = document.querySelector('.blur-layer');
const leftFlap = document.querySelector('.flap.left');
const rightFlap = document.querySelector('.flap.right');
const scrollText = document.querySelector('.scroll-text');

// Load Vimeo API and set up player
function loadVimeoPlayer() {
  const iframe = document.getElementById('video-frame');
  const script = document.createElement('script');
  script.src = "https://player.vimeo.com/api/player.js";
  script.onload = () => {
    player = new Vimeo.Player(iframe);
  };
  document.body.appendChild(script);
}
loadVimeoPlayer();

// Scroll interaction
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = 400;
  const progress = Math.min(scrollY / maxScroll, 1);

  // Rotate flaps open
  const angle = progress * 60; // degrees
  const offsetX = progress * 200; // move outward

  leftFlap.style.transform = `translateX(-${offsetX}px) rotateY(-${angle}deg)`;
  rightFlap.style.transform = `translateX(${offsetX}px) rotateY(${angle}deg)`;

  // Blur fade out
  blurLayer.style.backdropFilter = `blur(${20 - progress * 20}px)`;

  // Text fade out
  scrollText.style.opacity = 1 - progress;

  // Video playback
  if (player) {
    if (progress >= 1) {
      player.play();
    } else if (progress <= 0.05) {
      player.pause();
    }
  }
});
