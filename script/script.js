/*
 * Defines the media queries
 */
var mobile = [
    window.matchMedia("(max-width: 2000px)"),
    window.matchMedia("(orientation: landscape)"),

    window.matchMedia("(max-width: 1200px)"),
    window.matchMedia("(orientation: portrait)"),

    window.matchMedia("(max-width: 736px)")
]

/* 
 * Toggles the header menu
 */
function toggleMenu(e) {
    var x = document.getElementById("dropdown-container");

    if (mobile[0].matches && mobile[1].matches || mobile[3].matches) {

        if (!(x.style.display == "grid")) {
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
    if (mobile[0].matches && mobile[3].matches) {

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
        if (mobile[0].matches) {

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
 * fixed the header when user scroll / for mobile screen sizes
 */
$('#dropdown-container').scroll(function () {

    if ($('#dropdown-container').scrollTop() > elementPosition.top) {
        if (mobile[4].matches || mobile[3].matches) {

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