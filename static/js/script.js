// Carousal
let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
    console.log("Test");
    showSlides(slideIndex + 1);
}

function currentSlide(n) {
    showSlides(n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Reset to 1 if
    // last slide
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Reset to last
    // slide if navigating before first
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Update the dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
