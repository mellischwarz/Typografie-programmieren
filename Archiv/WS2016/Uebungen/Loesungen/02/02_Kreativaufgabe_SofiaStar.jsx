﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";



function draw() {


b.clear(b.page());
b.units(b.MM);
b.rect(0,0,b.width,b.height);
b.fill(0)

for(var i= 0; i<50; i++){

var posX = b.random(b.width);
var posY = b.random(b.height);

    for(var j= 0; j<200; j += 5){


      var width = 10;
      var height = j;
      posY+=2

    b.noFill();
    b.stroke(255);
    b.ellipse(posX,posY,width,height);

      }
b.println(i);
 
}


}

b.go();
