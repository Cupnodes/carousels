const images = document.querySelector('.images')
const slides = images.querySelectorAll('img')
let i = 0;

function nextSlide() {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    console.log(i);
    slides[i].classList.add('active');
}

function previousSlide() {
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length ) % slides.length;
    console.log(i);
    slides[i].classList.add('active');
}