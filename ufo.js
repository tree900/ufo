let player;
const left = document.querySelector('.overlay.left');
const right = document.querySelector('.overlay.right');
const blur = document.querySelector('.blur-layer');
const scrollText = document.querySelector('.scroll-text');

// Vimeo API 로드 및 플레이어 초기화
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

// 스크롤에 따라 애니메이션 제어
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = 400; // 400px까지 진행
  const progress = Math.min(scrollY / maxScroll, 1); // 0~1

  // 문 점진적으로 열기
  const offset = progress * 100;
  left.style.transform = `translateX(-${100 - offset}%)`;
  right.style.transform = `translateX(${100 - offset}%)`;

  // 블러 점점 줄이기
  blur.style.backdropFilter = `blur(${20 - progress * 20}px)`;

  // 텍스트 점점 사라지기
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
