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