const siteLoading = function () {
    $('#preloader').delay(350).fadeOut('slow');
};

const showMenu = function () {
    $('.menu-burger_header').toggleClass('open-menu');
    $('.navigation').toggleClass('open-menu');
};

const scrollMenu = function () {
    let offset = 122;
    let el = $(this);
    let dest = el.attr('href');
    if (dest != undefined && dest !== '') {
        $('html').animate({
            scrollTop: $(dest).offset().top - offset
        }, 500
        );
    }
    $('.flowing-scroll').removeClass('active');
    $(this).addClass('active');
    return false;
};

const hideMenu = function () {
    $('.navigation').removeClass('open-menu');
    $('.menu-burger_header').removeClass('open-menu');
};

$('.flowing-scroll').on('click', hideMenu);
$(document).ready(siteLoading);
$('.flowing-scroll').on('click', scrollMenu);
$('.menu-burger_header').click(showMenu);

