document.addEventListener('DOMContentLoaded', () => {
  let alreadyTriggered = false;

  window.addEventListener('wheel', () => {
    if (alreadyTriggered) return;
    alreadyTriggered = true;

    const leftDoor = document.querySelector('.overlay.left');
    const rightDoor = document.querySelector('.overlay.right');
    const scrollText = document.querySelector('.scroll-text');
    const blurLayer = document.querySelector('.blur-layer');

    if (!leftDoor || !rightDoor || !scrollText || !blurLayer) {
      console.warn("요소를 찾지 못했습니다.");
      return;
    }

    scrollText.style.opacity = 0;

    leftDoor.classList.remove('closed');
    leftDoor.classList.add('open');

    rightDoor.classList.remove('closed');
    rightDoor.classList.add('open');

    setTimeout(() => {
      blurLayer.style.transition = 'backdrop-filter 1.5s ease, background 1.5s ease';
      blurLayer.style.backdropFilter = 'blur(0px)';
      blurLayer.style.background = 'rgba(0, 0, 0, 0)';
    }, 1500);
  });
});
