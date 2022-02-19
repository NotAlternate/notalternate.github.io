window.onscroll = function() {myFunction()};

var link = document.getElementById("link");
var sticky = link.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        link.classList.add("link-s");
    } else {
        link.classList.remove("link-s");
    }
}