﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  // select a textFrame with some text

  var tf = b.selection();
  var words = b.words(tf);

  var firstWordBounds = b.bounds(words[0]);

  b.inspect(firstWordBounds);

  alert("Der linke Rand des erste Wortes liegt bei " + firstWordBounds.left + ".\nWeitere Maße des ersten Wortes in der Konsole.");

}

b.go();
