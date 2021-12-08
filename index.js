$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  dots:false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
})
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  spacebetween: 8,
  slidesPerView: 8,
  freeModel: true,
  loopAdditionalslides: 4,
  speed: 500,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

