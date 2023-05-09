let doc = document;
let body = doc.body;
let anchor = doc.querySelector('.anchor');
let catalog = doc.querySelector('.catalog');
let language = doc.querySelector('.language');
let flag = doc.querySelector('#flag');
let btn_more = doc.querySelector('.btn-more');
let location_span = doc.querySelector('.location_span');
let my_city_modal = doc.querySelector('.my_city_modal');
let my_city_x = doc.querySelector('.x');
let city_title = doc.querySelectorAll('.city_title');
let sliders = doc.querySelector('.sliders')



location_span.addEventListener('click', () => {
  my_city_modal.classList.remove('none');
  body.style.overflow = 'hidden'
})
my_city_x.addEventListener('click', () => {
  my_city_modal.classList.add('none');
  body.style.overflow = 'auto'
})

city_title.forEach(item => {
  item.addEventListener('click', () => {
    location_span.textContent = item.textContent;
    city_title.style.color = '#6E00FF';
  })
})


sliders.addEventListener('click', () =>{
  sliders.style.cursor = "grabbing"
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

