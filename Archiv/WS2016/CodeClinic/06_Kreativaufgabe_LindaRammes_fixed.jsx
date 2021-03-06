﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

//Lösung: Du hattest einen zweiten Loop der die Zählvariable j benutzt im Hauptloop, der ebenfalls j benutzt
//Der innere Loop hat j bis 11 hochgezählt und dadurch wurde der äußere Hauptloop nicht mehr ausgeführt,
//weil j dann plötzlich höher als 4 war. Deshalb musst du einfach die Zählvariable von deinem inneren Loop durch
//z.B. k ersetzen, dann funktioniert es. :)

function draw() {


  b.clear(b.doc());
  b.noFill();

  var pageCount = 4;
  var lineCount = 16;

  //Loop 1: Seitenanzahl
  for (var j = 0; j < pageCount; j++) {

    // in der ersten Runde müssen wir keine neue Seite hinzufügen, denn die erste Seite ist schon vorhanden
    if(j > 0) {
      b.addPage();
    }

    //Loop 2: zeichnet 16 Linien von Oben nach unten
    for(var i = 0; i < lineCount; i++) {

      //1. Zufalls-Rotation = Horizontal
      var randomradius = b.random(0,90);
      b.rotate (b.radians(randomradius));

      //2.Zufalls-Linienstärke = Horizontal
      b.strokeWeight ( b.random(5,40));




      // Loop 3: Macht das Muster und verdoppelt alles um 11

        //mit jedem Loop, den wir vorher machen, werden 17 Linien gezeichnet
        //die Horizontale (xKoordinate) wird mit j (11 Linien) gesteuert
        //die Vertikale (y) wird mit i gesteuert (16),
        // Zahl die Multipliziert wird = Abstand (var distance)
      for (var k = 0; k < 11; k++) {

        var lineStart = 30 // Koordinate für den Anfang der Linie
        var lineEnd = 60 // Koordinate für das Ende der Line

        var distance = 50

        b.line(lineStart +k*distance,  50+i*distance , lineEnd +k*distance, 50 +i*distance);
      }
    }
  }
}

b.go();
