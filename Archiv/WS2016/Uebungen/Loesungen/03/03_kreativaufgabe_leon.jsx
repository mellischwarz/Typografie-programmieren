﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";




//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

var backgroundcolor = b.color( b.random (70));
b.fill ( backgroundcolor);
b.rect ( 0, 0, b.width, b.height);

var count = prompt( "Wie viele Formen möchtest du zeichnen?", 30);

if (b.isNumber(count))
    
    var circles = confirm( "Willst du Kreise erstellen?");

    for(var i = 0; i < count; i++) {
        

      var x = b.random( 2, b.width);
      var y = b.random( 2, b.height);
    
        
      b.stroke( b.color( b.random (220), b.random (220), b.random (220) ) );
      b.strokeWeight( b.random (220) );

      b.fill( b.color ( b.random (0), b.random (0), b.random (0)));
            
      if(circles == true) {
        b.ellipse( x, y, x, y);
            
      } else {
        b.rect( x, y, x, y);
      }

  }

}

b.go();
