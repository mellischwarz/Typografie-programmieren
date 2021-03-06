﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.noStroke();

  for (var i = 0; i < 20; i++) {
    var img = b.image("MonaLisa.jpg", 0, 0);

    b.blendMode(img, BlendMode.LIGHTEN);

    var randomScale = b.random(0.1, 0.6);

    //calculate the new dimensions of the image
    var imgWidth = b.itemWidth(img) * randomScale;
    var imgHeight = b.itemHeight(img) * randomScale;

    //pick a random position on the page
    var x = b.random(b.width - imgWidth);
    var y = b.random(b.height - imgHeight);

    //transform the position and scale of the image
    b.transformImage(img, x, y, imgWidth, imgHeight);
  }



}

b.go();
