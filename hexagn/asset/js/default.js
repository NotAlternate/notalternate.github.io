var page = {};
window.onload = function() {
    page.original = document.body.innerHTML;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if(window.matchMedia("(orientation: portrait)").matches) {
            document.body.innerHTML = `
            <div style="padding:20px;">
                In order to view this website in <b>Mobile</b>, Please switch to landscape mode.<br><br>
                Viewing in portrait mode can lead to unexpected layout.
            </div>`;
            document.getElementsByTagName("html")[0].style.visibility = "visible";
        } else document.getElementsByTagName("html")[0].style.visibility = "visible"; 
            /*document.getElementById("link").id = "mobile";*/
    } else document.getElementsByTagName("html")[0].style.visibility = "visible";
};
window.onresize = function () {
    if(window.matchMedia("(orientation: portrait)").matches) {
        document.body.innerHTML = `
        <div style="padding:20px;">
            In order to view this website in <b>Mobile</b>, Please switch to landscape mode.<br><br>
            Viewing in portrait mode can lead to unexpected layout.
        </div>`;
        document.getElementsByTagName("html")[0].style.visibility = "visible";
    } else {
        document.body.innerHTML = page.original;
        document.getElementsByTagName("html")[0].style.visibility = "visible";
        /*document.getElementById("link").id = "mobile";*/
    }
}
/*
window.onscroll = function() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return;
    if (window.pageYOffset > document.getElementById("link").offsetTop) document.getElementById("link").classList.add("link-s");
    else document.getElementById("link").classList.remove("link-s");
};
*/