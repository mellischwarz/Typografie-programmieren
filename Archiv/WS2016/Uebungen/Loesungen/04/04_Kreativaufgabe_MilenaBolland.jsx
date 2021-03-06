﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.noStroke();
  b.colorMode(b.CMYK);
  b.rectMode(b.CENTER);

  var color1 = b.color(26,0,58,0);
  var color2 = b.color(26,23,0,0);
  var color3 = b.color(67,98,12,41);
  var color4 = b.color(91,80,27,33);

  var colors = [color1,color2,color3,color4];

  var fill = b.floor(b.random(0,colors.length));
 
  b.println(fill);

  if (fill < 2) {

    b.fill(b.color(0,0,0,100));
    b.rect(b.width/2,b.height/2,b.width,b.height);   
  }

  for (var i = 0; i < 22; i++) {

    for (var j = 0; j < 30; j++) {

      var rotation1 = b.radians(j);
      b.rotate(rotation1);

      b.fill(colors[fill]);

      b.rect(5+i*10,5+j*10,10,10);

    }

  } 
  
}

b.go(); 

