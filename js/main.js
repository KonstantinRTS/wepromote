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

    $('.marquee-slider-second').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 28000,
        cssEase: 'linear'
    });

    $('.marquee-slider-third').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 28000,
        cssEase: 'linear'
    });

    $('.marquee-slider-fourth').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 25000,
        cssEase: 'linear'
    });

    $('.marquee-slider-fifth').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 25000,
        cssEase: 'linear'
    });

    $('.marquee-slider-sixth').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 25000,
        cssEase: 'linear'
    });

    $('.marquee-slider-seventh').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 25000,
        cssEase: 'linear'
    });

    $('.work-hero-marquee').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 25000,
        cssEase: 'linear'
    });

    $('.home-create-slider').slick({
        arrows: true,
        appendArrows: '.home-create-slider__buttons',
        prevArrow: '.home-create-slider__btn-prev',
        nextArrow: '.home-create-slider__btn-next',
        slidesToShow: 4,
        dots: false,
        speed: 800,
        autoplay: false,
        autoplaySpeed: 1200,
        variableWidth: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                }
            },
        ]
    });

    if (window.innerWidth <= 992) {

        $('.home-welcome-slider').slick({
            arrows: true,
            appendArrows: '.home-welcome-slider__buttons',
            prevArrow: '.home-welcome-slider__btn-prev',
            nextArrow: '.home-welcome-slider__btn-next',
            slidesToShow: 1,
            dots: false,
            speed: 800,
        });

        $('.team-welcome-slider').slick({
            arrows: true,
            appendArrows: '.team-welcome-slider__buttons',
            prevArrow: '.team-welcome-slider__btn-prev',
            nextArrow: '.team-welcome-slider__btn-next',
            slidesToShow: 1,
            dots: false,
            speed: 800,
        });


        $('.home-stack-slider').slick({
            arrows: true,
            appendArrows: '.home-stack-slider__buttons',
            prevArrow: '.home-stack-slider__btn-prev',
            nextArrow: '.home-stack-slider__btn-next',
            slidesToShow: 1,
            dots: false,
            speed: 800,
        });

        $('.services-sol-slider').slick({
            arrows: true,
            appendArrows: '.services-sol-slider__buttons',
            prevArrow: '.services-sol-slider__btn-prev',
            nextArrow: '.services-sol-slider__btn-next',
            slidesToShow: 2,
            dots: false,
            speed: 800,
        });

        $('.work-discover-slider').slick({
            arrows: true,
            appendArrows: '.work-discover-slider__buttons',
            prevArrow: '.work-discover-slider__btn-prev',
            nextArrow: '.work-discover-slider__btn-next',
            slidesToShow: 1,
            dots: false,
            speed: 800,
        });


        $('.career-our-slider').slick({
            arrows: true,
            appendArrows: '.career-our-slider__buttons',
            prevArrow: '.career-our-slider__btn-prev',
            nextArrow: '.career-our-slider__btn-next',
            slidesToShow: 1,
            dots: false,
            speed: 800,
        });

    }

    /* Проверяю есть ли на странице такая секция и фиксирую её */
    if ($('.home-welcome__col-01').length > 0) {

        var $qwerty = $('._fixed-block');
        var $col01 = $('.home-welcome__col-01');
        var col01Height = $col01.height();
        var qwertyHeight = $qwerty.height();

        $(window).scroll(function () {

            if (window.innerWidth > 992) {
                var scrollPosition = $(this).scrollTop();

                if (scrollPosition >= $col01.offset().top && scrollPosition <= ($col01.offset().top + col01Height - qwertyHeight)) {
                    $qwerty.css({
                        'position': 'fixed',
                        'top': '0px',
                        'left': 'auto',
                        'bottom': 'auto'
                    });
                } else if (scrollPosition > ($col01.offset().top + col01Height - qwertyHeight)) {
                    $qwerty.css({
                        'position': 'absolute',
                        'top': 'auto',
                        'left': '0',
                        'bottom': '0'
                    });
                } else {
                    $qwerty.css({
                        'position': 'static',
                        'top': 'auto',
                        'left': 'auto',
                        'bottom': 'auto'
                    });
                }
            } else {

                $qwerty.css({
                    'position': 'static',
                    'top': 'auto',
                    'left': 'auto',
                    'bottom': 'auto'
                });
            }
        });
    }

    if ($('.team-welcome__col-01').length > 0) {

        var $qwerty = $('._fixed-block');
        var $col01 = $('.team-welcome__col-01');
        var col01Height = $col01.height();
        var qwertyHeight = $qwerty.height();

        $(window).scroll(function () {

            if (window.innerWidth > 992) {
                var scrollPosition = $(this).scrollTop();

                if (scrollPosition >= $col01.offset().top && scrollPosition <= ($col01.offset().top + col01Height - qwertyHeight)) {
                    $qwerty.css({
                        'position': 'fixed',
                        'top': '0px',
                        'left': 'auto',
                        'bottom': 'auto'
                    });
                } else if (scrollPosition > ($col01.offset().top + col01Height - qwertyHeight)) {
                    $qwerty.css({
                        'position': 'absolute',
                        'top': 'auto',
                        'left': '0',
                        'bottom': '0'
                    });
                } else {
                    $qwerty.css({
                        'position': 'static',
                        'top': 'auto',
                        'left': 'auto',
                        'bottom': 'auto'
                    });
                }
            } else {

                $qwerty.css({
                    'position': 'static',
                    'top': 'auto',
                    'left': 'auto',
                    'bottom': 'auto'
                });
            }
        });
    }

});