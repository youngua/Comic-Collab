/*
*Taken from w3schools website: 
*https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self
*
*The code below - when the right or left arrows are clicked, the entire html page (each is its own slideshow), turns to the next page.
*/

var header = document.getElementById("header");
var button = document.getElementById("button");

button.onclick = function () {
    header.style.backgroundColor = "#FFF231";
    alert("Yeet!!!");
}