﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

b.noStroke();

for (var k = 0; k < 20; k++) {

  var quad = b.random(400, 800);
  var x = b.random (0, b.width);
  var y = b.random(0, b.height / 2);

  var randomColor = b.color(b.random(0,255), b.random(0,255), b.random(0,255));
  b.fill(randomColor);
  var recta = b.rect(x, y, quad, quad);

  b.opacity(recta, 20);

}

b.stroke(b.color(0));
b.textSize(18);

var myText = b.loadString("Forever.txt");

var tFrame = b.text (myText, 100, 50, 490, 750); 

var words = b.words(tFrame);

for (var i = 0; i < words.length; i++) {

 if (words[i].contents.length == 3) {

    b.typo(words[i], "fillColor", b.color(b.random(0,255), b.random(0,255), b.random(0,255)));
    b.typo(words[i], "pointSize", b.random(20, 30));
    b.typo(words[i], "appliedFont", "Theinhardt");
    b.typo(words[i], "baselineShift", b.random(-300, -500));

  }
  if (b.startsWith (words[i].contents, "forever")) {

    b.typo (words[i], "fillColor", b.color(0, 0, 0));
    b.typo (words[i], "appliedFont", "Snell Roundhand");
    b.typo(words[i], "pointSize", b.random(40,50));
    b.typo( words[i], "baselineShift", b.random(-150, -500));
    //b.typo (words[i], "strokeColor", b.color(b.random(0,255), b.random (0,255), b.random(0,255)));

  } 
}



}


b.go();
