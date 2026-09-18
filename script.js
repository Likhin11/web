/* =========================
   BIRTHDAY MEMORY SLIDER
========================= */

const track = document.querySelector(".slide-track");
const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

let currentSlide = 0;


/* Move slider */

function goToSlide(index) {

    if (index < 0) {
        currentSlide = slides.length - 1;
    }

    else if (index >= slides.length) {
        currentSlide = 0;
    }

    else {
        currentSlide = index;
    }


    track.style.transform =
        `translateX(-${currentSlide * 100}%)`;


    updateDots();
}


/* Update dots */

function updateDots() {

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentSlide
        );

    });
}



/* Dots */

dots.forEach((dot, index) => {

    dot.addEventListener("click", function () {

        goToSlide(index);

    });

});


/* Click image to move */

slides.forEach((slide) => {

    const image = slide.querySelector("img");

    image.addEventListener("click", function () {

        goToSlide(currentSlide + 1);

    });

});


/* =========================
   MOBILE SWIPE
========================= */

let touchStartX = 0;
let touchEndX = 0;


track.addEventListener("touchstart", function (event) {

    touchStartX = event.changedTouches[0].screenX;

});


track.addEventListener("touchend", function (event) {

    touchEndX = event.changedTouches[0].screenX;

    handleSwipe();

});


function handleSwipe() {

    const distance = touchStartX - touchEndX;

    if (Math.abs(distance) < 50) {
        return;
    }

    if (distance > 0) {

        goToSlide(currentSlide + 1);

    } else {

        goToSlide(currentSlide - 1);

    }

}
const scrollButton = document.getElementById("scrollButton");

scrollButton.addEventListener("click", function () {

    document.querySelector(".wish-section").scrollIntoView({
        behavior: "smooth"
    });

});


/* Start from first memory */

goToSlide(0);
