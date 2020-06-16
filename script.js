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

//https://stackoverflow.com/questions/1103406/expanding-a-hidden-div-by-referring-with-an-anchor-from-external-page
// https://stackoverflow.com/questions/32100008/anchor-link-to-content-inside-hidden-div

// if this link is selected, then trigger
// $("#link").click(function () {
//     $(this).toggleClass("active").next().slideToggle("normal", function () {
//     });
// });

// var $targets = $('.target');
// $('.click').click(function () {
//     var $target = $($(this).data('target')).toggle();
// });

$(document).ready(function () {
    var x = $(location).attr('href').replace('http://graceyoung.design/Dialogues/index.html', "");
    $('a[href="' + x + '"]').click();

    var y = document.getElementsByClassName('mySlides');
    y[slideIndex - 1].style.display = 'block';
});

/* 
* Global variables
*/
var slideIndex = 1;
showDivs(slideIndex);

/* 
* This function is called by the buttons
*/
function plusDivs(n) {
    showDivs(slideIndex += n);
}

/* 
* The following checks for if slides can appear
*/
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName('mySlides');

    // this reach the end
    if (n > x.length) {
        slideIndex = 1;
    }

    // this triggers when left btn is clicked
    if (n < 1) {
        slideIndex = x.length
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    x[slideIndex - 1].style.display = 'block';

    // this change the header bg-color per each slides
    document.getElementById('header').className = (x[slideIndex - 1].getAttribute('id'));

    console.log(slideIndex);

    /* 
    * The following change the buttons to black and arrows to white for all slides except the first
    */
    if (slideIndex >= 2) {

        // change the buttons to black
        document.getElementById('display-right').style.backgroundColor = '#000';
        document.getElementById('display-left').style.backgroundColor = '#000';

        // change arrow to white
        document.getElementById('arrow-right').style.borderColor = '#fff #fff transparent transparent';
        document.getElementById('arrow-left').style.borderColor = '#fff #fff transparent transparent';

    } else if (slideIndex == 1) {

        // change button back to pink and yellow
        document.getElementById('display-right').style.backgroundColor = '#FFF231';
        document.getElementById('display-left').style.backgroundColor = '#FF83EC';

        //change arrow back to black
        document.getElementById('arrow-right').style.borderColor = '#000 #000 transparent transparent';
        document.getElementById('arrow-left').style.borderColor = '#000 #000 transparent transparent';
    }

    /* 
    * The following change the hover states depending on which slide it is on.
    * For yellow slides, blue hover state
    * For pink slides, purple hover state
    */
    // if (slideIndex >= 2 && slideIndex <= 3) {

    //     // when mouse hover left button, it turn purple
    //     document.getElementById('display-left').onmouseenter = function () {
    //         document.getElementById("display-left").style.backgroundColor = '#3957CB';
    //     };

    //     document.getElementById('display-left').onmouseleave = function () {
    //         document.getElementById("display-left").style.backgroundColor = '#000';
    //     };

    //     // when mouse hovers over yellow button, it turn blue
    //     document.getElementById('display-right').onmouseenter = function () {
    //         document.getElementById("display-right").style.backgroundColor = '#3957CB';
    //     };

    //     document.getElementById('display-right').onmouseleave = function () {
    //         document.getElementById("display-right").style.backgroundColor = '#000';
    //     };

    // } else if (slideIndex == 4) {

    //     // when mouse hovers over yellow button, it turn blue
    //     document.getElementById('display-right').onmouseenter = function () {
    //         document.getElementById("display-right").style.backgroundColor = '#5B356F';
    //     };

    //     document.getElementById('display-right').onmouseleave = function () {
    //         document.getElementById("display-right").style.backgroundColor = '#000';
    //     };

    // } else if (slideIndex == 5) {

    //     // when mouse hover left button, it turn purple
    //     document.getElementById('display-left').onmouseenter = function () {
    //         document.getElementById("display-left").style.backgroundColor = '#3957CB';
    //     };

    //     document.getElementById('display-left').onmouseleave = function () {
    //         document.getElementById("display-left").style.backgroundColor = '#000';
    //     };

    //     // when mouse hovers over yellow button, it turn blue
    //     document.getElementById('display-right').onmouseenter = function () {
    //         document.getElementById("display-right").style.backgroundColor = '#5B356F';
    //     };

    //     document.getElementById('display-right').onmouseleave = function () {
    //         document.getElementById("display-right").style.backgroundColor = '#000';
    //     };

    // } else if (slideIndex == 1) {

    //     // when mouse hovers over pink button, it turn purple
    //     document.getElementById('display-left').onmouseenter = function () {
    //         document.getElementById("display-left").style.backgroundColor = '#5B356F';
    //     };

    //     document.getElementById('display-left').onmouseleave = function () {
    //         document.getElementById("display-left").style.backgroundColor = '#FF83EC';
    //     };

    //     // when mouse hovers over yellow button, it turn blue
    //     document.getElementById('display-right').onmouseenter = function () {
    //         document.getElementById("display-right").style.backgroundColor = '#3957CB';
    //     };

    //     document.getElementById('display-right').onmouseleave = function () {
    //         document.getElementById("display-right").style.backgroundColor = '#FFF231';
    //     };
    // }
}



