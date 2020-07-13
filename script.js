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
var mobile = [
    window.matchMedia("(min-height: 1084px)"),
    window.matchMedia("(max-width: 768px)")
]

/*
 * Defines what should happen for small screens
 */
$(document).ready(function () {

    // triggers the menu dropdown
    if (mobile[0].matches || mobile[1].matches) {

        $(".toggle").hide();
        $(".mobile-nav").click(function () {
            $(".toggle").toggleClass("x");

            $(".toggle").animate({ height: "toggle" });
        });
    } else {
        $(".toggle").show();
    }
});

// side note: may have to implement a condition for browser check https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome/13348618#13348618

/*
 * Defines the media queries for small screens
 */
// var mobileR = [
//     window.matchMedia("(max-height: 1400px)"),
//     window.matchMedia("(max-width: 1024px)"),

//     window.matchMedia("(min-width: 800px)")
// ]

var mobileL = window.matchMedia("(max-width: 2000px)");

/*
 * fixed the header when user scroll
 */
var elementPosition = $('header').offset();

$(window).scroll(function () {

    // if the page scroll then fixed the header to the top
    if ($(window).scrollTop() > elementPosition.top) {

        // if the page is portrait then make header scrollable
        if (mobile[0].matches || mobile[1].matches) {
            $('header').css({
                'position': 'fixed',
                'left': '0',
                'right': '0',
                'padding': '2% 2%',
            });

            $('#dialogues-header').css({
                'margin-left': '2%',
            });

            $('#spring-right').css({
                'margin-right': '-7%',
            });

        }
    } else {

        $('header').css({
            'position': 'static',
            'width': 'auto',
        });

        $('#spring-right').css({
            'margin-right': '2.2%',
        });

    }

    // mac vs chrome issue
    if ($(window).scrollTop() > elementPosition.top) {

        // if the page is landscape then make header scrollable
        if (mobileL.matches) {

            $('header').css({
                'position': 'fixed',
                'width': '100vw',
                // 'padding-right': '10vw',
            });

            $('#spring-right').css({
                'margin-right': '8vw',
            });
        }

    } else {

        $('header').css({
            'position': 'static',
            'width': 'auto',
        });

        $('#spring-right').css({
            'margin-right': '0',
        });

    }

});


/*
 * Reloads webpage when mobile orientation changes
 */
// window.onorientationchange = function () {
//     window.onorientationchange = function () {
//         window.location.reload();
//     }
// };

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
var $div = $('#dropdown-container, header');
$div.on('mousewheel DOMMouseScroll', function (e) {
    var d = e.originalEvent.wheelDelta || -e.originalEvent.detail,
        dir = d > 0 ? 'up' : 'down',
        stop = (dir == 'up' && this.scrollTop == 0) || (dir == 'down' && this.scrollTop == this.scrollHeight - this.offsetHeight);
    stop && e.preventDefault();
});