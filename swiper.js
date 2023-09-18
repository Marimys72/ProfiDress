
const swiper = new Swiper('.popular-slider', {
    spaceBetween: 30,
    slidesPerView: 2,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewhell: true,
    keyboard: true,
  });