
// carousel
let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      i++;
    }

let width = 300; // ширина картинки
let count = 3; // видимое количество изображений

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
  // сдвиг влево
  position += width;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  // сдвиг вправо
  position -= width;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};

// for btn-menu

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".header-navbar");
const closeMenuButton = document.querySelector(".close-button");

const toggleMenu = (event) => {
  menu.classList.toggle("is-open"); 
};

menuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);




