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
 * mobileP = Portrait
 * mobileL = Landscape
 */
var mobileP = [
    window.matchMedia("(min-height: 1084px)"),
    window.matchMedia("(max-width: 768px)")
]

var mobileL = window.matchMedia("(max-width: 2000px)");

/*
 * Defines what should happen for small screens
 */
$(document).ready(function () {

    // triggers the menu dropdown
    if (mobileP[0].matches || mobileP[1].matches) {

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

    // if the page is portrait then make header scrollable
    if ($(window).scrollTop() > elementPosition.top && mobileP[0].matches || mobileP[1].matches) {
        $('header').css({
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'right': '0',
            'padding': '2% 2%',
            'z-index': '2'
        });

        $('#dialogues-header').css({
            'margin-left': '2%',
        });

        $('#spring-right').css({
            'margin-right': '2%',
        });

    } else {
        $('header').css({
            'position': 'static',
            'width': 'auto',
            'padding': '2% 2%',
        });
    }

    // if the page is landscape then make header scrollable
    if ($(window).scrollTop() > elementPosition.top && mobileL.matches) {

        $('header').css({
            'position': 'fixed',
            'top': '0',
            'width': '100%',
            'padding': '1% 2%',
            'z-index': '2'
        });

        $('#spring-right').css({
            'margin-right': '4%',
        });
    } else {

        $('header').css({
            'position': 'static',
            'width': 'auto',
            'padding': '1% 2%'
        });

        $('#spring-right').css({
            'margin-right': 'auto',
        });
    }
});

/*
 * Reloads webpage when mobile orientation changes
 */
window.onorientationchange = function () {
    window.onorientationchange = function () {
        window.location.reload();
    }
};

/*
 * disable page scroll when scrolling a div
 */
var $div = $('#dropdown-container');
$div.on('mousewheel DOMMouseScroll', function (e) {
    var d = e.originalEvent.wheelDelta || -e.originalEvent.detail,
        dir = d > 0 ? 'up' : 'down',
        stop = (dir == 'up' && this.scrollTop == 0) || (dir == 'down' && this.scrollTop == this.scrollHeight - this.offsetHeight);
    stop && e.preventDefault();
});