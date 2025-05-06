////

document.getElementById("menu-button").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

/////////////

document.querySelectorAll(".with-slider").forEach((container) => {
  const slider = container.querySelector(".slider-container");
  const prevBtn = container.querySelector("button#prev-btn");
  const nextBtn = container.querySelector("button#next-btn");
  function getCardWidth() {
    const firstCard = slider.querySelector(".card");
    return firstCard ? firstCard.getBoundingClientRect().width + 24 : 0;
  }

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -getCardWidth(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: getCardWidth(), behavior: "smooth" });
  });
});
