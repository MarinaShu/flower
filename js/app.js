// Подключаем кнопку наверх

const buttonUp = document.querySelector('#buttonUp');
buttonUp.addEventListener('click', scrollToStart);

function scrollToStart(event) {
    event.preventDefault();
    window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth',
    })
}

window.addEventListener('scroll', (event) => {
    const button = document.querySelector('#buttonUp');
    const topOfSet = 400;
    if (window.pageYOffset > topOfSet) {
        button.classList.add('visible');
    } else {
        button.classList.remove('visible')
    }
})

// Плавная прокрутка страницы

const smoothLinks = document.querySelectorAll('.js-scrolling');
smoothLinks.forEach(smoothLink => {
    smoothLink.addEventListener('click', (Event) => {
        Event.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })
})

// Показать или убрать класс
const buttons = document.querySelectorAll('.js-button');
console.log(buttons)
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log(event);
        event.target.classList.add('active');
    })
})

// Определение устройства
"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
