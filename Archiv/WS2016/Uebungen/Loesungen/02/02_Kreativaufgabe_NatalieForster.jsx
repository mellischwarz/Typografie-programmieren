﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());

  b.noFill();

  for (var i = 15; i < 50; ) {

    // hier wird die Linie erstellt
    b.stroke( b.color( b.random(6), b.random(15), b.random(130) ) );

    var randWidth = b.random(0, b.width, i++);
    var randHeight = b.random(0, b.height, i++);

    var x = b.random(10, b.width - randWidth, i++);
    var y = b.random(0, b.height - randHeight);

    b.rect(x, y, randWidth, randHeight);
    
 
  b.units(b.MM);
  b.noFill();

  var sideX = 70;
  var sideY = 90;
  
  b.rect(b.width / 5 - sideX / 2, b.height / 2 - sideY / 2, sideX, sideY);


 

  };

}

b.go();
