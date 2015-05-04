var myNav = navigator.userAgent.toLowerCase();

if ((myNav.indexOf('msie') !== -1) || (myNav.indexOf('edge') !== -1)) {
  var links = document.querySelectorAll("link");
  Array.prototype.forEach.call(links, function (link) {
    link.href = '';
  });
}
