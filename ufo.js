window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = 400; // 블러 벗겨지는 최대 스크롤 길이

  // 진행 비율 (0 ~ 1)
  const progress = Math.min(scrollY / maxScroll, 1);

  // 왼쪽 상단 → 오른쪽 하단으로 점점 벗겨지는 느낌
  const clipPath = `
    polygon(
      0% 0%,
      ${progress * 100}% 0%,
      ${progress * 100}% ${progress * 100}%,
      0% ${progress * 100}%
    )
  `;

  document.querySelector(".blur-overlay").style.clipPath = clipPath;
});
