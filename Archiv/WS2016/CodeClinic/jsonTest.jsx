﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());

  b.println(1);

  //JSON
  var jsonString = b.loadString("161115_sound_short.json");
  b.println(2);
  var jsonData = b.JSON.decode( jsonString );
 
  b.println(3);

}
b.go();

