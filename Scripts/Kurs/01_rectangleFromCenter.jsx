﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  var sideX = 80;
  var sideY = 40;
  
  b.rect(b.width / 2 - sideX / 2, b.height / 2 - sideY / 2, sideX, sideY);

}

b.go();
