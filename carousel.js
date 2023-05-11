const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-image');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let counter = 0;
const slideWidth = carouselImages[0].clientWidth;

prevButton.addEventListener('click', () => {
    if (counter <= 0) {
        counter = carouselImages.length - 1;
        carouselSlide.style.transform = `translateX(-${slideWidth * counter}px)`;
        return;
    };
    counter--;
    carouselSlide.style.transform = `translateX(-${slideWidth * counter}px)`;
    updateIndicators();
});

nextButton.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) {
        carouselSlide.style.transform = `translateX(0px)`;
        counter = 0;
        return;
    };
    counter++;
    carouselSlide.style.transform = `translateX(-${slideWidth * counter}px)`;
    updateIndicators();
});

function updateIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator) => {
        indicator.classList.remove('active');
    });
    indicators[counter].classList.add('active');
}


function createIndicators() {
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    for (let i = 0; i < carouselImages.length - 1; i++) {
        const indicator = document.createElement('span');
        indicator.classList.add('carousel-indicator');
        indicator.dataset.index = i;
        indicatorsContainer.appendChild(indicator);

        indicator.addEventListener('click', () => {
            counter = i;
            carouselSlide.style.transform = `translateX(-${slideWidth * counter}px)`;

            const indicators = document.querySelectorAll('.carousel-indicator');
            indicators.forEach((indicator) => {
                indicator.classList.remove('active');
            });
            indicator.classList.add('active');
        });
    }
}

// Función para cambiar automáticamente las imágenes cada 5 segundos
function autoSlide() {
    setInterval(() => {
        if (counter >= carouselImages.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        carouselSlide.style.transform = `translateX(-${slideWidth * counter}px)`;

        const indicators = document.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator) => {
            indicator.classList.remove('active');
        });
        indicators[counter].classList.add('active');
    }, 5000); // Cambiar imagen cada 5 segundos (5000 ms)
}

createIndicators();
autoSlide();
