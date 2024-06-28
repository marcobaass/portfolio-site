document.addEventListener('scroll', function() {
  const imgLeft = document.getElementById('img-left');
  const imgRight = document.getElementById('img-right');

  const text1Rect = document.getElementById('text1').getBoundingClientRect();
  const text2Rect = document.getElementById('text2').getBoundingClientRect();

  const viewportCenter = window.innerHeight / 2;

  let scale = 1;
  let translateY = 0;

  // Calculate the distance of each text container from the center of the viewport
  const distanceFromCenter1 = Math.abs((text1Rect.top + text1Rect.bottom) / 2 - viewportCenter);
  const distanceFromCenter2 = Math.abs((text2Rect.top + text2Rect.bottom) / 2 - viewportCenter);

  // Determine the maximum distance from the center at which scaling should be 100%
  const maxDistance = viewportCenter;

  if (distanceFromCenter1 > maxDistance) {
    const scrollPercent = 1 - (distanceFromCenter1 / maxDistance);
    scale = 1 + scrollPercent * 0.5;
    translateY = -((scrollPercent - 0.5) * 50);
  }

  if (distanceFromCenter2 > maxDistance) {
    const scrollPercent = 1 - (distanceFromCenter2 / maxDistance);
    scale = 1 + scrollPercent * 0.5;
    translateY = (scrollPercent - 0.5) * 50;
  }

  // Apply transformations to both images
  imgLeft.style.transform = `translateY(${translateY}px) scale(${scale})`;
  imgRight.style.transform = `translateY(${translateY}px) scale(${scale})`;
});
