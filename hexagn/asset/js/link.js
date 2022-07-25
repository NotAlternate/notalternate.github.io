var link = document.getElementById("link");
var sticky = link.offsetTop;

window.onscroll = function() {
    if(document.getElementById("mobile"))
        return;
    if (window.pageYOffset > sticky)
        link.classList.add("link-s");
    else
        link.classList.remove("link-s");
};