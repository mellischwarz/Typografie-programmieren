﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );

  b.units(b.MM);
  var stepSize = 40;

  // gesamten Text der .csv-Datei auslesen
  var weatherString = b.loadString("WetterHamburg.csv");

  // ausgelesenen Text in einen Daten-Array umwandeln
  b.CSV.delimiter(";");
  var data = b.CSV.decode(weatherString);

  b.size(stepSize * data.length, 120);

  // zum Testen wird die Eigenschaft Luftfeuchtigkeit des ersten Datensets in die Konsole geschrieben
  b.println(data[0].Luftfeuchtigkeit);


  for(var i = 0; i < data.length; i++) {

    b.rect(i * stepSize, 100, stepSize / 2, -data[i].Luftfeuchtigkeit);

  }

}

b.go();
