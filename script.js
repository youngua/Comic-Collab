/*
*Taken from w3schools website: 
*https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self
*
*The code below - when the right or left arrows are clicked, the entire html page (each is its own slideshow), turns to the next page.
*/

function toggleMenu() {
    var x = document.getElementById("dropdown-container");
    if (x.style.display === "none") {
        x.style.display = "grid";
    } else {
        x.style.display = "none";
    }
}

var slideIndex = 1;
showDivs(slideIndex);

// this function is used by the buttons
function plusDivs(n) {
    showDivs(slideIndex += n);
}

// the following checks for if slides can appear
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName('mySlides');

    // this reach the end
    if (n > x.length) {
        slideIndex = 1;
    }

    //this triggers when left btn is clicked
    if (n < 1) {
        slideIndex = x.length
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    x[slideIndex - 1].style.display = 'block';

    // this change the header bg-color per each slides
    document.getElementById('header').className = (x[slideIndex - 1].getAttribute('id'));

    // this change the bg-color of button and arrow for certain slides
    if (slideIndex >= 2) {
        document.getElementById('display-right').style.backgroundColor = '#000';
        document.getElementById('display-left').style.backgroundColor = '#000';

        document.getElementById('arrow-right').style.borderColor = '#fff #fff transparent transparent';
        document.getElementById('arrow-left').style.borderColor = '#fff #fff transparent transparent';

    } else if (slideIndex == 1) {
        document.getElementById('display-right').style.backgroundColor = '#FFF231';
        document.getElementById('display-left').style.backgroundColor = '#FF83EC';

        document.getElementById('arrow-right').style.borderColor = '#000 #000 transparent transparent';
        document.getElementById('arrow-left').style.borderColor = '#000 #000 transparent transparent';
    }
}