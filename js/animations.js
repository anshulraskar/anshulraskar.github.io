var pageContent = document.querySelector(".page-content");
var navbar = document.querySelector(".navbar");
var prevScrollPos = pageContent.scrollTop;
const pageTop = pageContent.scrollTop;
const pageBottom = pageTop + $(window).height();

/* Scroll animations */
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

        if ($(this).hasClass("title-header")) {
            if ($(this).position().top + $(window).height() <= pageBottom * 2 / 3) {
                $(this).removeClass("visible");
            } else if ($(this).position().top <= pageTop && $(this).position().top + $(window).height() >= pageTop && $(this).position().top + $(window).height() >= pageBottom / 3.5 ||
                pageTop <= $(this).position().top && $(this).position().top + $(window).height() <= pageBottom) {
                $(this).addClass("visible");
            }
        } else if ($(this).position().top <= pageBottom * 0.7 && $(this).position().top >= pageTop) {
            $(this).addClass("visible");
            $(this).removeClass("passed");

        } else if ($(this).position().top + $(this).height() <= pageBottom) {
            $(this).addClass("passed");
            $(this).removeClass("visible");

        } else {
            $(this).removeClass("visible");
        }
    });
    /* End of fade scroll animation */

    prevScrollPos = currentScrollPos;
};
/* End of scroll animations */

/* Link clicks */
$(".link").click(function(event) {
    event.preventDefault();
    var redir = $(this).attr('href');
    var curURL = $(location).attr("href").includes("#") ? $(location).attr("href").split("#")[0] : $(location).attr("href");

    if (!curURL.endsWith(redir.substr(1))) {
        $(".nav-container").slideUp(250);
        $(".page-content").fadeOut(250, function() {
            window.location = redir;

        });
    } else {
        pageContent.scrollTo(0, 0);
    }

});
/* End of link clicks */