﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(  b.doc()  );

  for(var i = 0; i < 10; i++) {

    var redValue = i * 20;


    for(var j = 0; j < 5; j++) {
      var blueValue = j * 40;
      b.fill(   b.color(redValue, 0, blueValue)    );
      b.ellipse(j * 100, i * 100, 80, 80);
    }
  }

}

b.go();
