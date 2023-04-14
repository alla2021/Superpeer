new Swiper('.swiper', { 
  pagination: {
      el: '.swiper-pagination',
    },
  navigation: {
      nextEl: '.swiper-custom-nav-right',
      prevEl: '.swiper-custom-nav-left',
  }, 
  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 40,
      }
  }
});


