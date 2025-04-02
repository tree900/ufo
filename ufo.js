let player;
const left = document.querySelector('.overlay.left');
const right = document.querySelector('.overlay.right');
const blur = document.querySelector('.blur-layer');
const scrollText = document.querySelector('.scroll-text');

// Vimeo API 로드
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

// 스크롤 비례로 문 열고 닫기
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = 400;
  const progress = Math.min(scrollY / maxScroll, 1);

  // 좌우 문 슬라이드 비율로 적용
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
