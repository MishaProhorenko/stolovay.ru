let select = function() {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');


    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });
    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText;
        let select = this.closest('.select')
        let currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }

};

select();
//Выпадающее меню


// Кнопка скопировать

let email = document.querySelector('.sup-menu__letter');
let copy = document.querySelector('.btn-copy');


let showCopy = () => {
    copy.style.display = 'flex';
};
let closeBtnCopy = () => {
    copy.style.display = 'none';
};

email.addEventListener('click', showCopy);
copy.addEventListener('click', closeBtnCopy);


//Slider Swiper
let slider = document.querySelector('.swiper-container')
let swiper = new Swiper(slider, {
    slidesPerVeiw: 1,
    pagination: {
        el: '.swiper-pagination',
        //Буллеты
        clickable: true,
    },
    //Управление клавиатурой
    keyboard: {
        //вкл., выкл.
        enadled: true,
        //   вкл., выкл.
        //   только когда слайдер
        //   в пределах вьюпорта
        onlyInViewport: true,
        // вкл., выкл.
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
    },
    //уПРАВЛЕНИЕ КОЛЕСОМ МЫШИ
    mousewheel: {
        //Чувствительность колеса мыши
        sensitvity: 1,
        //Класс объекта на котором
        //будетсрабатывать прокрутка мышью
        eventsTarget: ".swiper-slide"
    },
});