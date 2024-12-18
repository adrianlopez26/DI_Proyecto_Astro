document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track") as HTMLElement | null;
  const items = document.querySelectorAll(".carousel-item") as NodeListOf<HTMLElement>;
  const prevBtn = document.querySelector(".prev") as HTMLButtonElement | null;
  const nextBtn = document.querySelector(".next") as HTMLButtonElement | null;

  if (!track || !prevBtn || !nextBtn || items.length === 0) return; // Verificar que los elementos existen

  let currentIndex: number = 0;

  function updateCarousel(index: number): void {
    if (!track) return; // Verificar que track no es null
    const width = items[0].offsetWidth;  // Obtener el ancho del primer item
    track.style.transform = `translateX(-${index * width}px)`;  // Mover el carrusel
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    updateCarousel(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    updateCarousel(currentIndex);
  });
});