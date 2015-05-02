var myNav = navigator.userAgent.toLowerCase();
var isIE = (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;

if (isIE) {
    var links = document.querySelectorAll("link");
    Array.prototype.forEach.call(links, function(link){
        link.href = '';
    });
}
