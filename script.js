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
 * Toggles the menu
 */
function toggleMenu() {
    var x = document.getElementById("dropdown-container");

    if (mobile[0].matches && mobile[1].matches || mobile[4].matches) {
        if (x.style.display === "none") {
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
    }

    if (mobile[2].matches && mobile[3].matches && !(mobile[4].matches)) {
        if (x.style.display === "none") {
            x.style.display = "inline-block";

            // disables body from scrolling when menu open
            document.documentElement.style.overflow = 'hidden';
            document.body.scroll = "no";

        } else {
            x.style.display = "none";

            // enable scrolling when menu close
            document.documentElement.style.overflow = 'scroll';
            document.body.scroll = "yes";
        }
    }
}

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
 * fixed the header when user scroll
 */
$('#dropdown-container').scroll(function () {

    if ($('#dropdown-container').scrollTop() > elementPosition.top) {
        if (mobile[4].matches && mobile[3].matches) {

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
 * Locks the orientation when in Fullscreen mode
 */



/*
 * Fullscreen the artworks
 */
function openFullscreen() {
    var x = document.getElementById("artwork-container");

    if (x.style.display === "none") {
        x.style.display = "block";

        // disables body from scrolling when menu open
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.height = '100%';
        // document.body.scroll = "no";

    } else {
        x.style.display = "none";

        // enable scrolling when menu close
        document.documentElement.style.overflow = 'scroll';
        document.documentElement.style.height = 'auto';
        // document.body.scroll = "yes";
    }
}
