var pageContent = document.querySelector(".page-content");
var navbar = document.querySelector(".navbar");
var prevScrollPos = pageContent.scrollTop;
const pageTop = pageContent.scrollTop;
const pageBottom = pageTop + $(window).height();
var currentElement = $(".title-header");
var nextElement = currentElement.next();

pageContent.onscroll = function() {
    var currentScrollPos = pageContent.scrollTop;

    /* Navbar */
    // if (currentScrollPos > prevScrollPos) {
    //     navbar.style.top = `-${navbar.clientHeight}px`;
    // } else if (prevScrollPos + navbar.clientHeight > currentScrollPos) {
    //     navbar.style.top = "0";
    // }
    /* End of navbar */


    /*  Fade scroll animation */
    $(".fade-scroll").each(function() {
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