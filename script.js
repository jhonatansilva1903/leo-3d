let currentSlide = 0; // Inicializa com a primeira imagem visível

// Função para mover as imagens do carrossel
function moveSlide(step) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  
  // Calcula o novo índice da imagem visível
  currentSlide = (currentSlide + step + totalSlides) % totalSlides;

  // Atualiza a visibilidade das imagens
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });
}

// Inicializa o carrossel mostrando a primeira imagem
document.addEventListener("DOMContentLoaded", () => {
  moveSlide(0); // Exibe a primeira imagem
});
