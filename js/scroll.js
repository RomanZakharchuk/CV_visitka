$('.flowing-scroll').on('click', function () {
    let el = $(this);
    let dest = el.attr('href');
    if (dest != undefined && dest !== '') {
        $('html').animate({
            scrollTop: $(dest).offset().top
        }, 500
        );
    }
    return false;
});