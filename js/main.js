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


// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());
