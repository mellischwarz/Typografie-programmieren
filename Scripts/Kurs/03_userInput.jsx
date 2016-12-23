﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );

  var count = prompt("Wie viele Formen möchtest du zeichnen?", 20);

  if (b.isNumber(count)) {
    var circles = confirm("Willst du Kreise erstellen?");


    for(var i = 0; i < count; i++) {

      var x = b.random( 0, b.width);
      var y = b.random( 0, b.height);
      var random = b.round( b.random(1, 20) );
      b.println(random);

      if(circles == true) {
        b.ellipse(x, y, 20, 20);
      } else {
        b.rect(x, y, 20, 20);
      }

    }
  } else {
    alert("Die Eingabe ist keine Nummer.");
  }

}

b.go();
