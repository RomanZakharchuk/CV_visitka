$('.flowing-scroll').on('click', function () {
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
});