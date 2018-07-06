(function() {
  if (window.msWriteProfilerMark || !!window.ActiveXObject) {
    function removeStyles(elements) {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        switch (element.tagName) {
          case 'LINK':
          case 'STYLE':
            element.parentElement.removeChild(element);
            break;

          default:
            if (!!element.style) {
              element.style.cssText = '';
            }
            break;
        }
      }
    }

    removeStyles(document.getElementsByTagName('*'));
    // Note: Due a strange bug `document.getElementsByTagName('*')` doesn't contain `style` tags
    removeStyles(document.getElementsByTagName('style'));
  }
})();
