let swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    simulateTouch: false,
    mousewheel: {
        invert: false,
    },
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
}); 