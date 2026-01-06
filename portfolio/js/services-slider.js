const track = document.querySelector(".services__track");
const cards = document.querySelectorAll(".service-card");
const nextBtn = document.querySelector(".slider-btn--right");
const prevBtn = document.querySelector(".slider-btn--left");

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 32; // gap

nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    }
});
