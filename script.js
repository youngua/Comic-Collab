var mobileT = [
    window.matchMedia("(max-width: 2000px)"),
    window.matchMedia("(orientation: landscape)"),

    window.matchMedia("(max-width: 1200px)"),
    window.matchMedia("(orientation: portrait)"),

    window.matchMedia("(max-width: 736px)")
]

/* 
 * Toggles the menu.
 */
function toggleMenu() {
    var x = document.getElementById("dropdown-container");

    if (mobileT[0].matches && mobileT[1].matches || mobileT[4].matches) {
        if (x.style.display === "none") {
            x.style.display = "grid";
        } else {
            x.style.display = "none";
        }
    }

    if (mobileT[2].matches && mobileT[3].matches && !(mobileT[4].matches)) {
        if (x.style.display === "none") {
            x.style.display = "inline-block";
        } else {
            x.style.display = "none";
        }
    }
}

/*
 * Defines what should happen for small screens
 */
$(document).ready(function () {

    // triggers the menu dropdown
    if (mobile[0].matches || mobile[1].matches && !(mobile[2].matches)) {

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
 * Defines the media queries for small screens
 */
var mobile = [
    window.matchMedia("(min-height: 1084px)"),
    window.matchMedia("(max-width: 768px)"),
    window.matchMedia("(max-height: 414px)"),

    window.matchMedia("(max-width: 2000px)"),
    window.matchMedia("(max-width: 420px)")
]

/*
 * fixed the header when user scroll
 */
var elementPosition = $('header').offset();

$(window).scroll(function () {

    if ($(window).scrollTop() > elementPosition.top) {
        if (mobile[3].matches) {

            $('header').css({
                'position': 'fixed',
                'left': '0',
                'right': '0',
                'width': '100vw',
            });

            $('#dialogues-header').css({
                'position': 'fixed',
            });

            $('#spring-right').css({
                'position': 'fixed',
            });

        }
    } else {

        $('header').css({
            'position': 'static',
            'width': 'auto',
        });

        $('#dialogues-header').css({
            'position': 'fixed',
        });

        $('#spring-right').css({
            'position': 'fixed',
        });
    }
});

/*
 * fixed the header when user scroll
 */
$('#dropdown-container').scroll(function () {

    if ($('#dropdown-container').scrollTop() > elementPosition.top) {
        if (mobile[4].matches) {

            $('header').css({
                'position': 'fixed',
                'left': '0',
                'right': '0',
                'width': '100vw',
            });

            $('#dialogues-header').css({
                'position': 'fixed',
            });

            $('#spring-right').css({
                'position': 'fixed',
            });

        }
    } else {

        $('header').css({
            'position': 'static',
            'width': 'auto',
        });

        $('#dialogues-header').css({
            'position': 'fixed',
        });

        $('#spring-right').css({
            'position': 'fixed',
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

/*
 * Disable page scroll when scrolling a div
 */

/*
 * Locks the orientation when in Fullscreen mode
 */



/*
 * Fullscreen the artworks
 */
function openFullscreen() {
    var x = document.getElementById("artwork-container");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
