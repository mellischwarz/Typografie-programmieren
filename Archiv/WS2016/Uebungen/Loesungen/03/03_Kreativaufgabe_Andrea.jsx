﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.noFill();

for (var i=0; i<5; i++) {
  var color1 = b.color(b.random(0,255), b.random(0,255), b.random(0,255));
  var color2 = b.color(b.random(0,255), b.random(0,255), b.random(0,255));
  b.stroke(255);
  b.fill( b.gradient(color1, color2) );
  b.ellipse(i*148, 80, 100, 100);
  b.ellipse(i*148, 760, 100, 100);
}

b.stroke(0);
for (var i=0; i<10; i++) {
  var x2 = b.random(10, b.width);
  var y2 = b.random(10, b.width);

  if(x2 < b.width/2){
    b.stroke(color1);
  } else {
    b.stroke(color2);
  }

  b.line(0, b.height/2, x2, y2);
}

}

b.go();
