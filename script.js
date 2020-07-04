/*
 * Taken from w3schools website: 
 * https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self
 *
 * The code below - when the right or left arrows are clicked, the entire html page (each is its own slideshow), turns to the next page.
 */

/* 
 * Toggles the menu.
 */
function toggleMenu() {
    var x = document.getElementById("dropdown-container");

    if (x.style.display === "none") {
        x.style.display = "grid";
    } else {
        x.style.display = "none";
    }
}

/*
 * Defines the media queries for small screens
 */
var mobileQ = [
    window.matchMedia("(min-height: 1084px)"),
    window.matchMedia("(max-width: 768px)")
]

/*
 * Defines what should happen for small screens
 */
$(document).ready(function () {

    // triggers the menu dropdown
    if (mobileQ[0].matches || mobileQ[1].matches) {

        $(".toggle").hide();
        $(".mobile-nav").click(function () {
            $(".toggle").toggleClass("x");

            $(".toggle").animate({ height: "toggle" });
        });
    } else {
        $(".toggle").show();
    }
});

/*
 * fixed the header when user scroll
 */
var elementPosition = $('header').offset();

$(window).scroll(function () {
    if ($(window).scrollTop() > elementPosition.top) {
        $('header').css({ 'position': 'fixed', 'top': '0', 'width': '88%', 'z-index': '2' });

    } else {
        $('header').css({ 'position': 'static', 'width': 'auto' });
    }
});

// Reloads webpage when mobile orientation changes
window.onorientationchange = function () {
    window.onorientationchange = function () {
        window.location.reload();
    }
};