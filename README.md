RitzJS
======

14 lines of JavaScript to make your web app ritzy &amp; sophisticated. You'll be schmoozing with the dames in no time.

Installation
=====

Add this to your JavaScript:

```JavaScript
var ritz = function(node) {
  var node = node || document.body;
  if (node.nodeType == 3  && node.data.indexOf("&") != -1 && ["BODY", "SCRIPT", "STYLE"].indexOf(node.nodeName) == -1) {
    node.parentNode.innerHTML = node.data.replace(/&/, "<span style=\"font-family: Baskerville; font-style: italic; font-weight: 100;\">&</span>");
  };

  node = node.firstChild;
  while (node) {
    ritz(node);
    node = node.nextSibling;
  };
};
```

Usage
=====

Call this on every page you need to be ritzy & sophisticated:

`ritz();`
