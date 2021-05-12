const slider = document.querySelector('.swiper-container')

let mySwiper = new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
})