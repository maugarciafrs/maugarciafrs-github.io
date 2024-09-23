// Función para mover el carrusel manualmente
function moveSlide(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('img');
    const currentTransform = getComputedStyle(carousel).transform;
    const matrix = new WebKitCSSMatrix(currentTransform);
    const currentX = matrix.m41; // posición X actual del carrusel

    const width = carousel.clientWidth; // ancho de una imagen
    const totalWidth = width * images.length; // ancho total del carrusel

    // Calculamos la nueva posición en función de la dirección
    let newX = currentX - direction * width;

    // Evitamos que el carrusel se desplace fuera de los límites
    if (newX > 0) {
        newX = -(totalWidth - width); // Regresar al final si se pasa del principio
    } else if (newX < -(totalWidth - width)) {
        newX = 0; // Regresar al principio si se pasa del final
    }

    // Mueve el carrusel al nuevo valor
    carousel.style.transform = `translateX(${newX}px)`;
}

// Función para mover automáticamente el carrusel
function autoMove(carouselId) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    setInterval(() => {
        const width = carousel.clientWidth;
        currentIndex = (currentIndex + 1) % images.length; // Cicla a la siguiente imagen
        const newX = -currentIndex * width;

        // Mueve el carrusel al nuevo valor
        carousel.style.transform = `translateX(${newX}px)`;
    }, 2000); // 3000 ms = 3 segundos
}

// Iniciar movimiento automático de ambos carruseles
document.addEventListener('DOMContentLoaded', function () {
    autoMove('carousel-1');  // Carrusel 1
    autoMove('carousel-2');  // Carrusel 2
});
