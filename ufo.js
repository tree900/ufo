let player;
const left = document.querySelector('.overlay.left');
const right = document.querySelector('.overlay.right');
const blur = document.querySelector('.blur-layer');
const scrollText = document.querySelector('.scroll-text');

// Vimeo API 연결
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

// 초기 상태: 닫힘
left.classList.add("closed");
right.classList.add("closed");

// 스크롤 이벤트로 열고 닫기
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = 400;
  const progress = Math.min(scrollY / maxScroll, 1);

  if (progress >= 1) {
    // 열림
    left.classList.remove("closed");
    right.classList.remove("closed");
    left.classList.add("open");
    right.classList.add("open");

    blur.style.backdropFilter = `blur(0px)`;
    scrollText.style.opacity = 0;

    player && player.play();
  } else {
    // 닫힘
    left.classList.remove("open");
    right.classList.remove("open");
    left.classList.add("closed");
    right.classList.add("closed");

    blur.style.backdropFilter = `blur(20px)`;
    scrollText.style.opacity = 1;

    player && player.pause();
  }
});
