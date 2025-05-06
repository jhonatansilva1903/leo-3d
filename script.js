let currentSlide = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  currentSlide = (currentSlide + step + totalSlides) % totalSlides;
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });
}

document.addEventListener("DOMContentLoaded", () => {
  moveSlide(0);
});
