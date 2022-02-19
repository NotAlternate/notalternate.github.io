window.onscroll = function() {set()};

var link = document.getElementById("link");
var sticky = link.offsetTop;

function set() {
    if (window.pageYOffset > sticky) {
        link.classList.add("link-s");
    } else {
        link.classList.remove("link-s");
    }
}