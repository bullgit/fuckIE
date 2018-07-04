if (window.navigator.msPointerEnabled) {

  var slice = Array.prototype.slice;
  var links = document.getElementsByTagName('link');
  var styles = document.getElementsByTagName('style');
  var walk = function (nodes, cb) {
    if (!('length' in nodes)) {
      nodes = [nodes];
    }
    nodes = slice.call(nodes);
    while (nodes.length) {
      var node = nodes.shift(),
        ret = cb(node);
      if (ret) {
        return ret;
      }
      if (node.childNodes && node.childNodes.length) {
        nodes = slice.call(node.childNodes).concat(nodes);
      }
    }
  }

  Array.prototype.forEach = Array.prototype.forEach || function forEach(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    var array = this;
    thisArg = thisArg || this;
    for (var i = 0, l = array.length; i !== l; ++i) {
      callback.call(thisArg, array[i], i, array);
    }
  };

  Array.prototype.forEach.call(links, function (link) {
    link.href = '';
  });

  Array.prototype.forEach.call(styles, function (style) {
    if (!style) {
      return;
    }
    style.parentElement.removeChild(style);
  });

  walk(document.body, function (dom) {
    dom.style = '';
  });
}
