var pageContent = document.querySelector(".page-content");
var navbar = document.querySelector(".navbar");
var prevScrollPos = pageContent.scrollTop;
const pageTop = pageContent.scrollTop;
const pageBottom = pageTop + $(window).height();

pageContent.onscroll = function() {
    /* Navbar */
    var currentScrollPos = pageContent.scrollTop;
    if (currentScrollPos > prevScrollPos) {
        navbar.style.top = `-${navbar.clientHeight}px`;
    } else {
        navbar.style.top = "0";
    }
    prevScrollPos = currentScrollPos;
    /* End of navbar */


    $(".fade-scroll").each(function() {
        if (pageTop <= $(this).position().top && $(this).position().top + $(this).height() <= pageBottom) {
            $(this).addClass("visible");
            // $(this).animate({
            //     opacity: '1 '
            // }, .8, "swing");

        } else {
            $(this).removeClass("visible");
            // $(this).animate({
            //     opacity: '.1'
            // }, .8);
        }
    });
}