// Change nav on scroll
$(function () {
    var header = $(".navbar");

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            header.addClass("nav-scrolled");
        } else {
            header.removeClass("nav-scrolled");
        }
    })
});