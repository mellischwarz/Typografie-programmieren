﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );

  b.units(b.MM);

        // PROBLEM: Die höchste und niedrigste Zahl aus der .csv-Datei wird nicht richtig ausgelesen ( link: https://support.spatialkey.com/spatialkey-sample-csv-data/  dortdie Datei real estate transactions.csv
       
        // gesamten Text der .csv-Datei auslesen
        var realEstate = b.loadString("realEstate.csv");

        // ausgelesenen Text in einen Daten-Array umwandeln
       
        // Komma - Separation ist der Standart für CSV, eigentlich muss der Befehl b.CSV.delimiter ("") nur benutzt werden, wenn die Werte durch andere Zeichen als Kommata getrennt sind
        b.CSV.delimiter(",");
        var data = b.CSV.decode(realEstate);
        var randomEntry = b.floor(b.random (0, data.length));


  var gridX = b.width/20;
  var gridY = b.height/40;

  b.textFont("DINPro", "Medium");
  

  var price = (data[randomEntry].price);
  var city = (data[randomEntry].city);
  var beds = (data[randomEntry].beds);
  var baths = (data[randomEntry].baths);
      b.println(" Bedrooms = " +data[randomEntry].beds);

  
  b.text("Bedrooms", gridX * 15, gridY, 100, 20);
  b.text("City", gridX * 2, gridY , 100, 20);
  b.text("Bathrooms", gridX * 10, gridY, 100, 20);
  b.text("Price", gridX * 2, gridY * 3, 100, 20);

  
  b.text(city, gridX * 2, gridY * 2, 100, 20);

  // niedrigsten Preis ermitteln
  var priceMin = 2000000000; 
  
  for (var k = 0; k < data.length - 1; k ++) {
     
     if ( data[k].price < priceMin) {
        priceMin = data[k].price;
    }
  };
  
 b.println ( "priceMin =" + priceMin);
 b.println("Eintraege = " +data.length);


 var priceMax = 0;
  for (var l = 0; l < data.length; l ++) {
    
     if ( data [l].price > priceMax) {
     priceMax = data[l].price;
    }
  };

b.println("priceMax = " + priceMax);

  for (var i = 0; i < beds; i++) {
    
    b.rect(gridX * (15 + i/2 ), gridY * 2, 1, 5);
  }

  for (var j = 0; j < baths; j++) {
    
    b.rect(gridX * (10 + j/2 ), gridY * 2, 1, 5);

  };


var priceBar = b.map(price, 0, priceMax, 20, 100);
b.rect( gridX * 4, gridY * 3, priceBar, 5);
b.println(priceBar)


}

b.go();
