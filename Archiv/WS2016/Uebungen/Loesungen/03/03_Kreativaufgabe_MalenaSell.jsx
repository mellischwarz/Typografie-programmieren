﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.strokeWeight(3);

  //amount of lines is random
  var amount = b.random(100, 200);

  //color
  var color = prompt("Welche Farbe sollen die Linien haben?", "rot, gelb, grün, blau, schwarz");
    
  var red = b.color(255, 0, 0);
  var yellow = b.color(255, 255, 0);
  var green = b.color(0, 255, 0);
  var blue = b.color(0, 0, 255);
  var black = b.color(0);

  if (color == "rot"){
    b.stroke(red);
  }
  if (color == "gelb"){
    b.stroke(yellow);
  }
  if (color == "grün"){
    b.stroke(green);
  }
  if (color == "blau"){
    b.stroke(blue);
  }
  if (color == "schwarz"){
    b.stroke(black);
  }

  //lines and its opacity
  for (var i = 1; i < amount; i++){
    
    var height = b.random(0, b.height);
    var width = b.random(0, b.width);

    var lines = b.line(0, height, width, height);

    if (width < b.width){
      b.opacity(lines, 20)
    }
    if (width < b.width/1.3){
      b.opacity(lines, 40);
    }
    if (width < b.width/2){
      b.opacity(lines, 60);
    }
    if (width < b.width/4){
      b.opacity(lines, 80);
    }

  }



}

b.go();
