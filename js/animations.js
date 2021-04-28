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
    if (currentScrollPos > prevScrollPos) {
        navbar.style.top = `-${navbar.clientHeight}px`;
    } else {
        navbar.style.top = "0";
    }
    /* End of navbar */

    /* Custom scrolling */
    // if (currentScrollPos > prevScrollPos) {
    //     /* scroll down */
    //     if (currentElement == $(".title-header")) {
    //         // pageContent.scrollTo({
    //         //     top: nextElement.position().top - (nextElement.height() * 2 / 3),
    //         //     behavior: "smooth"
    //         // });
    //     }
    // } else {
    //     /* scroll up */

    // }
    /* End of custom scrolling */

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