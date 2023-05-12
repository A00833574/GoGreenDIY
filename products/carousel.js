// Obtener elementos del DOM
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

// Configuración del carousel
let counter = 1;
const slideWidth = carouselImages[0].clientWidth;
const totalSlides = carouselImages.length;

// Función para ajustar el ancho de los slides al tamaño de las imágenes
function adjustSlideWidth() {
    slideWidth = carouselImages[0].clientWidth;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

// Establecer la posición inicial del carousel
carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

// Función para cambiar al siguiente slide
function nextSlide() {
    if (counter >= totalSlides - 1) return;
    carouselSlide.style.transition = 'transform 0.3s ease-in-out';
    counter++;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

// Función para cambiar al slide anterior
function prevSlide() {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.3s ease-in-out';
    counter--;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

// Event Listeners para los botones de navegación
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Event Listener para reiniciar el carousel al finalizar la transición
carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'last-clone') {
        carouselSlide.style.transition = 'none';
        counter = totalSlides - 2;
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }
    if (carouselImages[counter].id === 'first-clone') {
        carouselSlide.style.transition = 'none';
        counter = totalSlides - counter;
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }
});

window.addEventListener('DOMContentLoaded', adjustSlideWidth);
window.addEventListener('resize', adjustSlideWidth);
