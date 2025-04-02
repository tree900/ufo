window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const blurLayer = document.querySelector(".blur-layer");
  const zipper = document.querySelector(".zipper");
  const scrollText = document.querySelector(".scroll-text");

  // 블러 점점 사라짐
  const blurStrength = Math.max(15 - scrollY / 20, 0);
  blurLayer.style.backdropFilter = `blur(${blurStrength}px)`;

  // 지퍼 점점 내려감
  const zipperMove = Math.min(scrollY / 2, 400);
  zipper.style.transform = `translateX(-50%) translateY(${zipperMove}px)`;

  // 텍스트 점점 사라짐
  const textOpacity = Math.max(1 - scrollY / 200, 0);
  scrollText.style.opacity = textOpacity;
});
