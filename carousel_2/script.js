const label1 = document.querySelector('label[for="radio1"]');
const label2 = document.querySelector('label[for="radio2"]');
const label3 = document.querySelector('label[for="radio3"]');
const label4 = document.querySelector('label[for="radio4"]');
const label5 = document.querySelector('label[for="radio5"]');
const slides = document.querySelectorAll('.slides');
const firstSlideImage = document.getElementById('first');

label1.setAttribute('id','active');

let currentActive = document.querySelector('#active');

label1.addEventListener('click', () => {
    currentActive.removeAttribute('id');
    label1.setAttribute('id','active');
    currentActive = label1;
    firstSlideImage.style.marginLeft = "0"
});

label2.addEventListener('click', () => {
    currentActive.removeAttribute('id');
    label2.setAttribute('id','active');
    currentActive = label2;
    firstSlideImage.style.marginLeft="-80vw";
});

label3.addEventListener('click', () => {
    currentActive.removeAttribute('id');
    label3.setAttribute('id','active');
    currentActive = label3;
    firstSlideImage.style.marginLeft="-160vw";
});

label4.addEventListener('click', () => {
    currentActive.removeAttribute('id');
    label4.setAttribute('id','active');
    currentActive = label4;
    firstSlideImage.style.marginLeft="-240vw";
});

label5.addEventListener('click', () => {
    currentActive.removeAttribute('id');
    label5.setAttribute('id','active');
    currentActive = label5;
    firstSlideImage.style.marginLeft="-320vw";
});

function format(string) {
    return string.slice(-1);
}

function scrollCarousel() {
    const currentSlide = slides[currentActive[order]];
    
}

window.setInterval(() => {
    scrollCarousel();
}, 3000)

console.log()
