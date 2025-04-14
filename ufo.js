// 이미 실행했는지 체크하는 플래그
let alreadyTriggered = false;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 50 && !alreadyTriggered) {
    alreadyTriggered = true;

    const leftDoor = document.querySelector('.overlay.left');
    const rightDoor = document.querySelector('.overlay.right');
    const scrollText = document.querySelector('.scroll-text');
    const blurLayer = document.querySelector('.blur-layer');

    // ✅ 텍스트는 바로 사라짐
    scrollText.style.opacity = 0;

    // ✅ 문은 동시에 열림
    leftDoor.classList.remove('closed');
    leftDoor.classList.add('open');

    rightDoor.classList.remove('closed');
    rightDoor.classList.add('open');

    // ✅ 블러는 1.5초 뒤에 천천히 사라짐
    setTimeout(() => {
      blurLayer.style.transition = 'backdrop-filter 1.5s ease, background 1.5s ease';
      blurLayer.style.backdropFilter = 'blur(0px)';
      blurLayer.style.background = 'rgba(0, 0, 0, 0)';
    }, 1500);
  }
});
