$ = jQuery;

/* Кастомный прелоадер */
$(window).on('load', function () {

    $('#preloader').fadeOut('slow', function () {
        $(this).remove();
    });
});


$(document).ready(function () {

    new WOW().init();

    /* Мобильное меню */
    $('.header__btn-menu').on('click', function () {

        $('.header__btn-menu').toggleClass('_active');
        $('.header__wrapper').toggleClass('_active');
        $('body').toggleClass('_stop');
    });

    $('.home-last-marquee').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        /* speed: 25000, */
        speed: 10000,
        cssEase: 'linear'
    });

    /* Якорные ссылки */
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 800, 'swing');
    });

    /* Анимация блоков при сролле */
    if (window.innerWidth >= 992) {

        $.fn.isInViewport = function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            return elementBottom > viewportTop && elementTop < viewportBottom;
        };

        window.addEventListener('scroll', function () {
            document.querySelectorAll('.challenge').forEach((item) => {
                const sticky = item.getBoundingClientRect().top <= 200;
                if (sticky) {
                    item.classList.add('sticky');
                } else {
                    item.classList.remove('sticky');
                }
            });

        });

    }
});