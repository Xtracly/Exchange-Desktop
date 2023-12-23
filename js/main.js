
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.nav__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('nav__list--active')
    menu.style.display = "flex"
})

var modal1 = document.getElementById("myModal1");
var openModalImg1 = document.getElementById("openModalImg1");

var modal2 = document.getElementById("myModal2");
var openModalImg2 = document.getElementById("openModalImg2");

var modal3 = document.getElementById("myModal3");
var openModalImg3 = document.getElementById("openModalImg3");

var modal4 = document.getElementById("myModal4");
var openModalImg4 = document.getElementById("openModalImg4");

// Відкриваємо перше модальне вікно, коли натиснули на зображення
openModalImg1.onclick = function () {
    modal1.style.display = "block";
    document.body.classList.add("modal-open"); // Вимкнути скроллінг панелі
    document.body.style.overflow = 'hidden'; // Вимкнення прокрутки
};

// Закрити перше модальне вікно, коли натиснули на кнопку закриття
function closeModal1() {
    modal1.style.display = "none";
    document.body.classList.remove("modal-open"); // Увімкнути скроллінг панелі
    document.body.style.overflow = ''; // Відновлення прокрутки
}

// Закрити перше модальне вікно, якщо користувач клацне поза ним
window.onclick = function (event) {
    if (event.target === modal1) {
        closeModal1();
    }
};

// Керувати зміною зображення на основі вибраного елемента списку для першого модального вікна
let elementBlockItems1 = document.querySelectorAll(".element__block-item-give");
elementBlockItems1.forEach(function (item) {
    item.addEventListener("click", function () {
        item.preventDefault()
        // Отримати елемент зображення
        let imageElement = item.querySelector(".element__block-calc-give-img");

        // Перевірити, чи елемент зображення існує перед отриманням src
        if (imageElement) {
            // Отримати джерело зображення та оновіть openModalImg1
            let imgSrc = imageElement.src;
            openModalImg1.src = imgSrc;
        }

        // Закрити перше модальне вікно після вибору елемента
        closeModal1();
    });
});

// Відкриваємо друге модальне вікно, коли натиснули на зображення
openModalImg2.onclick = function () {
    modal2.style.display = "block";
    document.body.classList.add("modal-open"); // Вимкнути скроллінг панелі
    document.body.style.overflow = 'hidden'; // Вимкнення прокрутки
};

// Закрити друге модальне вікно, коли натиснули на кнопку закриття
function closeModal2() {
    modal2.style.display = "none";
    document.body.classList.remove("modal-open"); // Увімкнути скроллінг панелі
    document.body.style.overflow = ''; // Відновлення прокрутки
}

// Закрити друге модальне вікно, якщо користувач клацне поза ним
window.onclick = function (event) {
    if (event.target === modal2) {
        closeModal2();
    }
};

// Керувати зміною зображення на основі вибраного елемента списку для другого модального вікна
let elementBlockItems2 = document.querySelectorAll(".element__block-item-get");
elementBlockItems2.forEach(function (item) {
    item.addEventListener("click", function () {
        item.preventDefault()
        // Отримати елемент зображення
        let imageElement = item.querySelector(".element__block-calc-get-img");

        // Перевірити, чи елемент зображення існує перед отриманням src
        if (imageElement) {
            // Отримати джерело зображення та оновіть openModalImg1
            let imgSrc = imageElement.src;
            openModalImg2.src = imgSrc;
        }

        // Закрити перше модальне вікно після вибору елемента
        closeModal2();
    });
});