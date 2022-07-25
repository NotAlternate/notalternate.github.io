window.onscroll = function() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return;
    if (window.pageYOffset > document.getElementById("link").offsetTop) document.getElementById("link").classList.add("link-s");
    else document.getElementById("link").classList.remove("link-s");
};