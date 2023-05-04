let doc = document;
let body = doc.body;
let anchor = doc.querySelector('.anchor');
let catalog = doc.querySelector('.catalog');
let language = doc.querySelector('.language');
let flag = doc.querySelector('#flag');
let btn_more = doc.querySelector('.btn-more');



language.addEventListener('click', () => {
  
})







var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

