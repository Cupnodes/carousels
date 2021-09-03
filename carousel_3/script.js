let slidePosition = 0;
const slides = document.querySelectorAll('.carousel__item');
const totalSlides = slides.length;
const prevButton = document.querySelector('#carousel__button--prev');
const nextButton = document.querySelector('#carousel__button--next');

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }

    slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToPreviousSlide(){
    if(slidePosition === 0) {
        return;
    }

    if (slidePosition === totalSlides) {
        slidePosition = 0;
    } else {
        slidePosition = slidePosition - 1;
    }

    updateSlidePosition();
}

function moveToNextSlide(){
    if(slidePosition === totalSlides - 1) {
        return;
    }

    if (slidePosition === totalSlides) {
        slidePosition = 0;
    } else {
        slidePosition = slidePosition + 1;
    }

    updateSlidePosition();
}

nextButton.addEventListener('click',  () => {
    moveToNextSlide();
});

prevButton.addEventListener('click',  () => {
    moveToPreviousSlide();
});

