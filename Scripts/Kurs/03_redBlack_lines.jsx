﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.noFill();

  var step = 8;
  var red = b.color(255, 0, 0);
  var black = b.color(0);

  for(var i = 0; i < 50; i++) {

    if(i % 2 == 0) {
      // wenn i gerade ist
      b.stroke(red);
      b.strokeWeight(0.8);
    } else {
      b.stroke(black);
      b.strokeWeight(0.4);
    }

    b.line(0, i * step, b.width, b.height - (i * step) );

  }




}

b.go();
