
function moveSlide(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('img');
    const currentTransform = getComputedStyle(carousel).transform;
    const matrix = new WebKitCSSMatrix(currentTransform);
    const currentX = matrix.m41;

    const width = carousel.clientWidth;
    const totalWidth = width * images.length;

    let newX = currentX - direction * width;

    if (newX > 0) {
        newX = -(totalWidth - width); 
    } else if (newX < -(totalWidth - width)) {
        newX = 0;
    }

    carousel.style.transform = `translateX(${newX}px)`;
}


function autoMove(carouselId) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    setInterval(() => {
        const width = carousel.clientWidth;
        currentIndex = (currentIndex + 1) % images.length;
        const newX = -currentIndex * width;

       
        carousel.style.transform = `translateX(${newX}px)`;
    }, 2000); 
}

document.addEventListener('DOMContentLoaded', function () {
    autoMove('carousel-1');  
    autoMove('carousel-2'); 
});
