const blur = document.querySelector('.blur-dark');
const scrollText = document.querySelector('.scroll-text');
const iframe = document.getElementById('video-frame');
let player;

// Vimeo API 로드
function loadVimeoPlayer() {
  const script = document.createElement('script');
  script.src = "https://player.vimeo.com/api/player.js";
  script.onload = () => {
    player = new Vimeo.Player(iframe);
  };
  document.body.appendChild(script);
}
loadVimeoPlayer();

// 휠로 종이 찢기처럼 scale 축소
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = 300;
  const progress = Math.min(scrollY / maxScroll, 1);

  // 종이가 찢어지듯 scaleY 줄이기 (0.1~1 사이)
  const scale = 1 - progress;
  blur.style.transform = `scaleY(${scale})`;

  // 텍스트 점점 사라짐
  scrollText.style.opacity = 1 - progress;

  // 영상 재생/일시정지
  if (player) {
    if (progress >= 1) {
      player.play();
    } else {
      player.pause();
    }
  }
});
