/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var pageContent = document.querySelector(".page-content");
var navbar = document.querySelector(".navbar");
var prevScrollpos = pageContent.scrollTop;
pageContent.onscroll = function() {
    var currentScrollPos = pageContent.scrollTop;
    if (currentScrollPos > prevScrollpos) {
        navbar.style.top = "-3.5em";
    } else {
        navbar.style.top = "0";
    }
    prevScrollpos = currentScrollPos;
}