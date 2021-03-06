﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {


b.clear (b.doc());
b.units (b.MM);
b.colorMode(b.RGB);
b.noStroke ();

// Loop für die Kreise
for (var i = 0; i < 50 ; i++) {

      // Variablen Höhe & Breite der Kreise bestimmen
      var width = b.random (0, b.width-5);
      var height = b.random (0, b.height-5);

      // Die Kreise
      var ellipse = b.ellipse (b.width/2, b.height/2, width,height );

      b.opacity (ellipse, 10);


      }

// Loop für die Rechtecke
for (var i = 0; i < 20 ; i++) {

     // x+y Größen der Rechtecke bestimmen
      var x = b.random (0,90-i*2);
      var y = b.random (0,90-i*2);

      // Die If Abfrage die gar nicht mal so viel Sinn hat ...
      if (width > width/2) {

        b.fill (b.color (250, 60,80));
        var rect = b.rect (b.width/2 - x/2, b.height/2 - y/2, x, y);
        b.opacity (rect,5+i)
        b.fill (b.color (0,0,0));
         }

      else {}
}

b.fill (b.color (250, 60,80));
var rect1 = b.rect (b.width/2-25,b.height/2-0.5,50,1);
var rect2 = b.rect (b.width/2-0.5,b.height/2-25,1,50);

b.opacity (rect1,100);
b.opacity (rect2,100);

}

b.go();
