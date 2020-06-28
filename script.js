/*
*Taken from w3schools website: 
*https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self
*
*The code below - when the right or left arrows are clicked, the entire html page (each is its own slideshow), turns to the next page.
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

const mobileQ = window.matchMedia("(max-width: 420px)");

$(document).ready(function () {
    if (mobileQ.matches) {
        $(".toggle").hide();
        $(".mobile-nav").click(function () {
            $(".toggle").toggleClass("x");

            $(".toggle").animate({ height: "toggle" });
        });
    } else {
        $(".toggle").show();
    }
});