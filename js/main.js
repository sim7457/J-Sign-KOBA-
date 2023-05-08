document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image");

  images.forEach((image) => {
    image.addEventListener("mouseover", function () {
      const originalSrc = image.src;
      const hoverSrc = image.dataset.hoverSrc;

      image.src = hoverSrc;
      image.dataset.hoverSrc = originalSrc;
    });

    image.addEventListener("mouseout", function () {
      const originalSrc = image.src;
      const hoverSrc = image.dataset.hoverSrc;

      image.src = hoverSrc;
      image.dataset.hoverSrc = originalSrc;
    });
  });
});
