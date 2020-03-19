/*
Taken from w3schools website: 
https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self

The code below - when the right or left arrows are clicked, the entire html page (each is its own slideshow), turns to the next page.
*/

var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}