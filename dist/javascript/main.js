/*$(document).ready(function() {
    $("#language").on("click", function() {
        $(".language__dropdown").addClass("show");
    });
});*/
$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $("#header__top").addClass("hide");
        $('nav').addClass('sticky');
    } else {
        $("#header__top").removeClass("hide");
        $('nav').removeClass('sticky');
    }
});
$(window).on("load", function() {
    $(".section__large__content p").after("<p>&nbsp;</p>");
    $(".section__general-grid .title-4").after("<p>&nbsp;</p>");
});
$(document).ready(function() {
    $(".burger").on("click", function() {
        if ($("nav ul").hasClass("show-nav")) {
            $(".burger").removeClass("burger-effect");
            $("nav ul").removeClass("show-nav");
        } else {
            $("nav ul").addClass("show-nav");
            $(".burger").addClass("burger-effect");
        }
    })
});