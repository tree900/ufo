let player;
const left = document.querySelector('.overlay.left');
const right = document.querySelector('.overlay.right');
const blur = document.querySelector('.blur-layer');
const scrollText = document.querySelector('.scroll-text');

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

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    // 열림
    left.classList.remove('closed');
    right.classList.remove('closed');
    left.classList.add('open');
    right.classList.add('open');

    blur.style.backdropFilter = `blur(0px)`;
    scrollText.style.opacity = 0;
    player && player.play();
  } else {
    // 닫힘
    left.classList.remove('open');
    right.classList.remove('open');
    left.classList.add('closed');
    right.classList.add('closed');

    blur.style.backdropFilter = `blur(20px)`;
    scrollText.style.opacity = 1;
    player && player.pause();
  }
});
