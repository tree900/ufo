document.addEventListener('DOMContentLoaded', () => {
  let alreadyTriggered = false;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > 50 && !alreadyTriggered) {
      alreadyTriggered = true;

      const leftDoor = document.querySelector('.overlay.left');
      const rightDoor = document.querySelector('.overlay.right');
      const scrollText = document.querySelector('.scroll-text');
      const blurLayer = document.querySelector('.blur-layer');

      // ✅ 요소가 존재하지 않으면 에러 방지
      if (!leftDoor || !rightDoor || !scrollText || !blurLayer) {
        console.warn("요소를 찾을 수 없습니다.");
        return;
      }

      // ✅ 텍스트 사라짐
      scrollText.style.opacity = 0;

      // ✅ 문 열림
      leftDoor.classList.remove('closed');
      leftDoor.classList.add('open');

      rightDoor.classList.remove('closed');
      rightDoor.classList.add('open');

      // ✅ 블러 1.5초 후 사라짐
      setTimeout(() => {
        blurLayer.style.transition = 'backdrop-filter 1.5s ease, background 1.5s ease';
        blurLayer.style.backdropFilter = 'blur(0px)';
        blurLayer.style.background = 'rgba(0, 0, 0, 0)';
      }, 1500);
    }
  });
});
