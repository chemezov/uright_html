$(function () {
    var navbarTop = $('.b-navbar').position().top;

    window.onscroll = function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled > navbarTop) {
            $('.b-navbar').addClass('navbar-fixed-top');
            //$('body').css('padding-top', '48px');
        } else {
            $('.b-navbar').removeClass('navbar-fixed-top');
            //$('body').css('padding-top', '0px');
        }
    }
});