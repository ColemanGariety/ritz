RitzJS
======

15 lines of JavaScript to make your web app ritzy &amp; sophisticated. You'll be schmoozing with the dames in no time.

Installation
=====

Add this to your JavaScript:

```var ritz = function(node) {
    var node = node || document.body
    var func = function(node) {
      var exclude = ["BODY", "SCRIPT", "STYLE"]
      if (node.nodeType == 3  && node.data.indexOf("&") != -1 && exclude.indexOf(node.nodeName) == -1) {
        console.log(node.parentNode)
        node.parentNode.innerHTML = node.data.replace(/&/, "<span style=\"font-family: Baskerville; font-style: italic; font-weight: 100;\">&</span>")
      }
    }
    func(node);
    node = node.firstChild;
    while (node) {
      ritz(node, func);
      node = node.nextSibling;
    }
  }```

Usage
=====

Call this on every page you need to be ritzy & sophisticated:

`ritz();`
