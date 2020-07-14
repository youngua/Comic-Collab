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
 * disable page scroll when scrolling a div
 */
// var $div = $('header');
// $div.on('mousewheel DOMMouseScroll', function (e) {
//     var d = e.originalEvent.wheelDelta || -e.originalEvent.detail,
//         dir = d > 0 ? 'up' : 'down',
//         stop = (dir == 'up' && this.scrollTop == 0) || (dir == 'down' && this.scrollTop == this.scrollHeight - this.offsetHeight);
//     stop && e.preventDefault();
// });

/*
 * Fullscreen the artworks
 */
var elem = document.getElementById("artwork-fullscreen");

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}


