/*
*Taken from w3schools website: 
*https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self
*
*The code below - when the right or left arrows are clicked, the entire html page (each is its own slideshow), turns to the next page.
*/

var slideIndex = 1;
showDivs(slideIndex);

// this function is used by the buttons
function plusDivs(n) {
    showDivs(slideIndex += n);
}

// the following checks for if slides can appear
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");

    if (n > x.length) {
        slideIndex = 1;
        // this reach the end
    }
    if (n < 1) {
        slideIndex = x.length
        //this triggers when left btn is clicked
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";

    // this change the header bg-color per each slides
    document.getElementById('header').className = (x[slideIndex - 1].getAttribute('id'));

    // this change the bg-color of button right after first slide
    //document.getElementById('display-right').className = (x[slideIndex - 1].getAttribute('id'));
    if (slideIndex >= 1 && slideIndex <= 2) {
        document.getElementById('display-right').id = "black-button-right";
        document.getElementById('display-left').id = "black-button-left";
    }
    //document.getElementById('display-left').className = (x[slideIndex - 1].getAttribute('id'));
    //element.style.backgroundColor


    let target = document.getElementById('display-right').className;
    console.log(target);
}