let doc = document;
let body = doc.body;
let anchor = doc.querySelector('.anchor');
let catalog = doc.querySelector('.catalog');
let btn_more = doc.querySelector('.btn-more');
let location_span = doc.querySelector('.location_span');
let my_city_modal = doc.querySelector('.my_city_modal');
let my_city_x = doc.querySelector('.x');
let city_title = doc.querySelectorAll('.city_title');
let sliders = doc.querySelector('.sliders')
let container = doc.querySelector('.container');
let language = doc.querySelector('.language');
let flag_rus = doc.querySelector('.flag_rus');
let flag_uzb = doc.querySelector('.flag_uzb');
let flag = doc.querySelector('.flag');
let flag_block = doc.querySelector('.flag_block');
let menu_more = doc.querySelector('.menu_more');
let extra_menu = doc.querySelector('.extra_menu');
let header_bottom = doc.querySelector('.header_bottom');
let extra_menu_x = doc.querySelector('.extra_menu_x');
let catalog_img = doc.querySelector('.catalog_img');
// let catalog_img_1 = "./img/catalog-icon.png"
// let catalog_img_2 = "./img/FrameX.svg"
let sign = doc.querySelector('.sign');
let modal_log_in = doc.querySelector('.modal_log_in');
let log_in_x = doc.querySelector('.log_in_x');


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

language.addEventListener('click', () => {
  flag_rus.classList.remove('none');
  flag_uzb.classList.remove('none');
})
flag_block.addEventListener('click', () => {
  flag_rus.classList.toggle('flag_block');
  flag_uzb.classList.toggle('flag_block');

  let flag_blocks = doc.querySelectorAll('.flag_block');
  for (let i of flag_blocks) {
    i.classList.add('none');
  }
});

menu_more.addEventListener('click', () => {
  extra_menu.classList.toggle('none');
  header_bottom.classList.add('none');
  // catalog_img.src = catalog_img_2;
})
catalog.addEventListener('click', () => {
  extra_menu.classList.remove('none');
  header_bottom.classList.add('none');
  // catalog_img.src = catalog_img_2;
})
extra_menu_x.addEventListener('click', () => {
  extra_menu.classList.add('none');
  header_bottom.classList.remove('none');
  // catalog_img.src = catalog_img_1;
})

sign.addEventListener('click', () => {
  modal_log_in.classList.remove('none');
})

log_in_x.addEventListener('click', () => {
  modal_log_in.classList.add('none');
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

