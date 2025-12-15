const imageConfig = {
    images: [
        { path: "./images/IMG20250117104207.jpg", alternativeText: "Image 1" },
        { path: "./images/IMG20250121165122.jpg", alternativeText: "Image 2" },
        { path: "./images/IMG20250123194235_BURST018.jpg", alternativeText: "Image 3" },
        { path: "./images/IMG20250214092151.jpg", alternativeText: "Image 4" },
        { path: "./images/IMG20250302102140.jpg", alternativeText: "Image 5" },
        { path: "./images/IMG20250307143341 (1).jpg", alternativeText: "Image 6" },
        { path: "./images/IMG20250415160556.jpg", alternativeText: "Image 7" },
        { path: "./images/IMG20250723003502.jpg", alternativeText: "Image 8" },
        { path: "./images/IMG20251026151658.jpg", alternativeText: "Image 9" },
        { path: "./images/IMG20251028164012.jpg", alternativeText: "Image 10" },
        { path: "./images/IMG20251203204104.jpg", alternativeText: "Image 11" }
    ]
};

let currentIndex = 0;
let totalSlides = 0;

function buildSlideShow() {
    const track = document.querySelector('.carousel-track');
    track.innerHTML = '';

    imageConfig.images.forEach(img => {
        const item = document.createElement('div');
        item.className = 'carousel-item';

        const image = new Image();
        image.src = img.path;
        image.alt = img.alternativeText;

        item.appendChild(image);
        track.appendChild(item);
    });

    totalSlides = imageConfig.images.length;
}

function updateSlide() {
    const track = document.querySelector('.carousel-track');
    const slideWidth = track.clientWidth;

    track.scrollTo({
        left: slideWidth * currentIndex,
        behavior: 'smooth'
    });
}

function next() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function prev() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

document.addEventListener('DOMContentLoaded', () => {
    buildSlideShow();
    updateSlide();
});
