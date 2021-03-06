﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );

  b.units(b.MM);
  var stepSize = 20;

  b.fill(b.color(255));

  var weatherString = b.loadString("WetterHamburg.csv");

  b.CSV.delimiter(";");
  var data = b.CSV.decode(weatherString);

  b.size(stepSize * data.length - 20, 400);

  for(var i = 0; i < data.length; i++) {

    b.ellipse(i * stepSize, 400, stepSize * 2 , -data[i].Luftfeuchtigkeit * 2 );

    b.fill(b.color(0));

    b.ellipse(i * stepSize, 380, data[i].Sonnenscheindauer * 4 , -data[i].Sonnenscheindauer * 4 );

      b.fill(b.color(255, 220, 0));
      b.noStroke();

b.ellipse(i * stepSize, 200, data[i].TempTagesmax * 2 , -data[i].TempTagesmax * 2 );
    
    b.fill(b.color(255));

    b.stroke(b.color(0));

  }

}

b.go();
