var pageContent = document.querySelector(".page-content");
var navbar = document.querySelector(".navbar");
var prevScrollPos = pageContent.scrollTop;
const pageTop = pageContent.scrollTop;
const pageBottom = pageTop + $(window).height();

pageContent.onscroll = function() {
    var currentScrollPos = pageContent.scrollTop;

    /* Navbar */
    if (currentScrollPos == 0) {
        $(".navbar").addClass("visible");
    } else {
        $(".navbar").removeClass("visible")
    }
    /* End of navbar */

    /*  Fade scroll animation */
    $(".fade-scroll").each(function() {

        if ($(this).hasClass("title-header") && $(this).position().top <= pageTop && $(this).position().top + $(window).height() >= pageTop) {
            if ($(this).position().top + $(window).height() >= pageBottom / 3.5 /*&& currentScrollPos <= prevScrollPos*/ ) {
                $(this).addClass("visible");
            }
        }
        if (pageTop <= $(this).position().top && $(this).position().top + $(this).height() <= pageBottom) {
            $(this).addClass("visible");
            $(this).removeClass("passed");

        } else if ($(this).position().top + $(this).height() <= pageBottom && !$(this).hasClass("title-header")) {
            $(this).addClass("passed");
        } else {
            $(this).removeClass("visible");
        }
    });
    /* End of fade scroll animation */

    prevScrollPos = currentScrollPos;
}

$(".link").click(function(event) {
    event.preventDefault();
    var href = $(this).attr('href');

    $(".nav-container").slideUp(250);
    $(".page-content").fadeOut(250, function() {
        // go to link when animation completes
        window.location = href;

    })

});