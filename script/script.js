/*
 * Defines the media queries
 */
var mobile = [
    window.matchMedia("(max-width: 2000px)"),
    window.matchMedia("(orientation: landscape)"),

    window.matchMedia("(orientation: portrait)")
]

/* 
 * Toggles the header menu
 */
function toggleMenu(e) {
    var x = document.getElementById("dropdown-container");

    if (mobile[0].matches && mobile[1].matches || mobile[2].matches) {

        if (!(x.style.display === "grid")) {
            x.style.display = "grid";

            console.log('click 1');

            // disables body from scrolling when menu open
            document.documentElement.style.overflow = 'hidden';
            document.body.scroll = "no";

        } else {
            x.style.display = "none";

            console.log('click 2');

            // enable scrolling when menu close
            document.documentElement.style.overflow = 'scroll';
            document.body.scroll = "yes";
        }

    } else {
        x.style.display = "none";
    }
}

/*
 * Toggles the header dropdown for info session
 */
$(document).ready(function () {

    // triggers the menu dropdown
    if (mobile[0].matches && mobile[2].matches) {

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
window.onscroll = function () { myFunction() };

var menu = document.getElementById("dropdown-container");
var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky || menu.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

/*
 * Reloads webpage when mobile orientation changes
 */
jQuery(document).ready(function ($) {
    orientationChange();
});

function orientationChange() {
    if (window.addEventListener) {
        window.addEventListener("orientationchange", function () {
            location.reload();
        });
    }
}