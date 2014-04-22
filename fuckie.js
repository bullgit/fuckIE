var myNav = navigator.userAgent.toLowerCase();
var isIE = (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;

if (isIE) {
    var link = document.querySelectorAll("link");
    for (var i = 0; i < link.length; i++) {
        link[i].href = '';
    }
}
