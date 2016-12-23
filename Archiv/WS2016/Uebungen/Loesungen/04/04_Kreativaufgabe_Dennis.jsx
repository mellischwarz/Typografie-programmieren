﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

  for(var i = 0; i < 20; i++) {

    b.noStroke();
    
    b.fill(b.color(b.random(0, 255), b.random(0, 255), b.random(0,255)));

    var randomWidth = b.random(10, 50);
    var randomHeight = b.random(10, 100);
    var posX = b.random(0, b.width - randomWidth);
    var posY = b.random(0, b.height - randomHeight);

    b.rect(posX, posY, 300, 300);
  }

  b.noFill();

  for  (var i=0; i<15; i++){
    var x = b.random(0, b.width);
    var y = b.random(0, b.height);
    var x2 = b.random(0, b.width);
    var y2 = b.random(0, b.height);
    var random = b.round(b.random(1,20));

    b.noFill();
  
    b.ellipse(x, y, 80, 80);


  if (random <50) 
    {
      b.fill(0, 0, 0);
      b.ellipse(x2, y2, 20, 20);
    }


}

  b.textFont('Brandon Text', 'Black');


  var list1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" ,"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  for (var i = 0; i < list1.length; i++) {

    var x = b.random (b.width);
    var y = b.random (b.height);
    var randomFontSize = b.random (50, 200);

    b.fill(0, 0, 0);
    b.textSize(randomFontSize);
    b.text(list1[i], x, y, 100, 100);
  }

  b.textFont('Franziska Pro', 'Book');
  b.textSize(50);



  var list2 = ["Stil", "System", "Methode", "Stil", "System", "Methode", "Stil", "System", "Methode", "Stil", "System", "Methode", "Stil", "System", "Methode", "Stil", "System", "Methode", "Stil", "System", "Methode", "Stil", "System", "Methode", "Stil", "System", "Methode", "Stil", "System", "Methode", "Stil", "System", "Methode", "Stil", "System", "Methode", "Stil", "System", "Methode", "Stil", "System", "Methode", "Stil", "System", "Methode"]

  for (var i = 0; i < list2.length; i++) {

    var x = b.random (b.width);
    var y = b.random (b.height);
    var randomFontSize = b.random (10, 20);

    b.textSize(randomFontSize);
    b.text(list2[i], x, y, 500, 500);
  }






}
b.go();
