let currentSlideIndex = 0;
const slides = document.getElementsByClassName("slides");

function showSlide(index) {
    // Hide all slides
    for (let slide of slides) {
        slide.style.display = "none";
    }
    
    // Wrap around the slides if out of range
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;
    
    // Show the current slide
    slides[currentSlideIndex].style.display = "block";
}

// Show the initial slide
showSlide(currentSlideIndex);

// Next/previous controls
function changeSlide(step) {
    currentSlideIndex += step;
    showSlide(currentSlideIndex);
}

// Automatic slideshow
setInterval(() => {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}, 3000); // Change image every 3 seconds
