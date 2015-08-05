if (window.navigator.msPointerEnabled) {
  var links = document.querySelectorAll("link");
  Array.prototype.forEach.call(links, function (link) {
    link.href = '';
  });
}
