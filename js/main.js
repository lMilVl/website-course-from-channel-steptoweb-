// самовызывающаяся функция
(function () {
    const header = document.querySelector('.header'); // берем шапку сайта
    window.onscroll = () => {
        if (window.pageYOffset > 50) { // если мы проскролили данную границу
            header.classList.add('header_active')// добавляем к .header класс .header_active в css
        }
        else {
            header.classList.remove('header_active')
        }
    }
}());

// Burger handler 

(function () {
    const burgerItem = document.querySelector('.burger');
    const closeItem = document.querySelector('.header__nav-close');
    const menu = document.querySelector('.header__nav');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });

    closeItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
}());
