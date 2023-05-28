const { default: axios } = require("axios");

let doc = document;
let body = doc.body;
let log_in_form = doc.querySelector('.log_in_form');
let log_up_form = doc.querySelector('.log_up_form');
let log_in = doc.querySelector('.log_in');
let log_up = doc.querySelector('.log_up');
let logo = doc.querySelector('.logo');
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
let log_up_x = doc.querySelector('.log_up_x');
let selected_city = doc.querySelector('.selected_city');
let my_city_input = doc.querySelector('.my_city_input');
let sign_up = doc.querySelector('.sign_up');
let login = doc.querySelector('.login');
let log_in_password = doc.querySelector('.log_in_password');
let login_sign_up = doc.querySelector('.login_sign_up');
let sign_up_login = doc.querySelector('.sign_up_login');
let email = doc.querySelector('#email');
let password = doc.querySelector('#password');
let file = doc.querySelector('#file');
let account_photo = doc.querySelector('.account_photo');
let avatar_img = doc.querySelector('.avatar_img');
// let 
// let 
// let 
// let 
// let 


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
    // Удаление стиля для всех элементов
    city_title.forEach(el => {
      el.style.color = '';
      let selected_city = doc.querySelector('.selected_city')
      selected_city.classList.add('none');
    });

    // Применение стиля к выбранному элементу
    location_span.textContent = item.textContent;
    item.style.color = '#6E00FF';
    selected_city.classList.remove('none');
  });
});

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
  body.style.overflow = 'hidden'
})

log_in_x.addEventListener('click', () => {
  modal_log_in.classList.add('none');
  body.style.overflow = 'auto'
})
log_up_x.addEventListener('click', () => {
  modal_log_in.classList.add('none');
  body.style.overflow = 'auto'
})

my_city_input.addEventListener('input', () => {
  let my_city_value = my_city_input.value.trim().toLowerCase();

  if (my_city_value !== '') {
    city_title.forEach(item => {
      const selected_city = item.querySelector('.selected_city');
      const city_name = selected_city.textContent.toLowerCase();

      if (city_name.includes(my_city_value)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  } else {
    city_title.forEach(item => {
      item.style.display = 'block';
    });
  }
});

anchor.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: logo.offsetTop - 0, behavior: 'smooth'
  })
})

login_sign_up.addEventListener('click', () => {
  log_up.classList.remove('none');
  log_in.classList.add('none');
})
sign_up_login.addEventListener('click', () => {
  log_up.classList.add('none');
  log_in.classList.remove('none');
})






log_in_form.addEventListener('submit', (e) => {
  e.preventDefault();

  let user = {
    id: Math.floor(Math.random() * 100000000),
    email: email.value,
    password: password.value,
    file: file.getAttribute('src')
  }
  console.log(user);

  fetch('http://localhost:6110/user', {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(user)
  })

  let json = JSON.stringify(user)
  console.log(json);

  password.value = ""
  email.value = ""
  file.value = ""
  avatar_img.src = "./img/avatar.png"
})

log_up_form.addEventListener('submit', (e) => {
  e.preventDefault();
  axios.get('http://localhost:6110/user')
  .then(res => {
    console.log(res.data);
  })
  
})



file.onchange = () => {
  let reader = new FileReader();
  reader.readAsDataURL(file.files[0]);
  reader.onload = () => {
    avatar_img.setAttribute('src', reader.result)
  }
}



// file.addEventListener('change', (event) => {
//   let file = event.target.files[0]
//   let reader = new FileReader()
//   reader.onload = () => {
//     avatar_img.src = reader.result
//   }
//   reader.readAsDataURL(file)
// })







































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

