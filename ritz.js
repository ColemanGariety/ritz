var ritz = function(node) {
  var node = node || document.body;
  if (node.nodeType == 3  && node.data.indexOf("&") != -1 && ["BODY", "SCRIPT", "STYLE"].indexOf(node.nodeName) == -1) {
    node.parentNode.innerHTML = node.data.replace(/&/g, "<span style=\"font-family: Baskerville; font-style: italic; font-weight: 100;    \">&</span>");
  };

  node = node.firstChild;
  while (node) {
    ritz(node);
    node = node.nextSibling;
  };
};

ritz();
