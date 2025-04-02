let player;
const left = document.querySelector('.overlay.left');
const right = document.querySelector('.overlay.right');
const blur = document.querySelector('.blur-layer');
const scrollText = document.querySelector('.scroll-text');

// Vimeo Player 연결
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

// Scroll 따라 열고 닫기
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = 400;
  const progress = Math.min(scrollY / maxScroll, 1);

  // 문 열리듯이 좌우로 rotateY
  left.style.transform = `rotateY(-${progress * 90}deg)`;
  right.style.transform = `rotateY(${progress * 90}deg)`;

  // 블러 줄이기
  blur.style.backdropFilter = `blur(${20 - progress * 20}px)`;

  // 텍스트 사라지기
  scrollText.style.opacity = 1 - progress;

  // 영상 제어
  if (player) {
    if (progress >= 1) {
      player.play();
    } else if (progress <= 0.05) {
      player.pause();
    }
  }
});
