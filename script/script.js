/*
 * Defines the media queries
 */
var mobile = [
    window.matchMedia("(orientation: landscape)"),
    window.matchMedia("(orientation: portrait)")
]

/* 
 * Toggles the header menu
 */
function toggleMenu(e) {
    var x = document.getElementById("dropdown-container");

    if (mobile[0].matches || mobile[1].matches) {

        if (!(x.style.display === "grid")) {
            x.style.display = "grid";

            // disables body from scrolling when menu open
            document.documentElement.style.overflow = 'hidden';
            document.body.scroll = "no";

        } else {
            x.style.display = "none";

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
    if (mobile[1].matches) {

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
var header = document.getElementById("header");

$(window).scroll(function () {
    if ($(window).scrollTop() > elementPosition.top) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

/*
 * fixed the menu header when user scroll for portrait mode
 */
$('#dropdown-container').scroll(function () {

    if ($('#dropdown-container').scrollTop() > elementPosition.top) {
        if (mobile[1].matches) {

            $('header').css({
                'position': 'fixed',
                'left': '0',
                'right': '0',
                'width': 'auto',
            });
        }
    } else {

        $('header').css({
            'position': 'static',
            'width': 'auto',
        });
    }
});

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