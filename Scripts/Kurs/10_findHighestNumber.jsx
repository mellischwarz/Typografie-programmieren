﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  var highest = 0;

  for(var i = 0; i < 10; i++) {

    var randomNumber = b.floor(b.random(1, 100));
    alert( randomNumber );

    if(randomNumber > highest) {
      highest = randomNumber;
    }

  }

  alert("Höchste Zahl war " + highest);


}

b.go();

