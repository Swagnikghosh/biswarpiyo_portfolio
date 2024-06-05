const slides1 = document.querySelectorAll(".slide");
let counter = 0;

slides1.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

function slideImage() {
    slides1.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

function goNext() {
    counter++;
    slideImage();
}

function goPrev() {
    counter--;
    slideImage();
}
