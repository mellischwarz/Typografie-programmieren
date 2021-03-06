﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

// Stellt einen Datensatz auf interessante Weise visuell dar. Die Darstellung kann dabei so anschaulich oder abstrakt sein, wie ihr wollt. Als Datensatz könnt ihr entweder die von mir erstellte Datei WetterHamburg.csv verwenden oder aber besser: ihr sucht selbst online nach Daten im .csv-Format. Alternativ (ebenfalls besser) könnt ihr auch eine eigene Tabelle mit Daten in einem Tabellenkalkulationsprogramm erstellen und dann als .csv-Datei abspeichern. Wie ihr .csv-Daten in basil.js eingelesen werden, könnt ihr noch einmal in diesem Script aus dem Kurs nachvollziehen.

// Bedenkt, dass ihr, wenn ihr die Daten mit basil.js auslesen könnt mit diesen Daten alle möglichen Eigenschaften in InDesign steuern könnt: Schriftgröße, Position, Farben, Größe von Formen usw. Die Funktion b.map() kann dabei sehr nützlich sein.


function draw() {


//b.colorMode(b.CMYK);

b.clear(b.doc());

//String reinladen
var ageString = b.loadString("alter.csv");

//Mein Trennzeichen ist ein Semikolon
b.CSV.delimiter(",");

//String wird in einen Array umgewandelt
var data = b.CSV.decode(ageString);


for (var i = 0; i < data.length; i++) {

var farbe = hexToCMYK (data[i].favorite_color);

b.fill(farbe[0],farbe[1],farbe[2]);


var radius = data[i].Age;
var kreis = b.ellipse(0, 0, radius, radius);

var randomNumber = b.random(0, b.width-radius);
b.itemPosition(kreis,randomNumber,7*i);

var groesse = data[i].Age;
b.fill(0, 0, 0);
b.textAlign(Justification.CENTER_ALIGN,VerticalJustification.CENTER_ALIGN);
var name = b.text( data[i].first_name, randomNumber, 7*i, radius * 1 ,radius * 1);








}

function hexToCMYK (hex) {
 var computedC = 0;
 var computedM = 0;
 var computedY = 0;
 var computedK = 0;

 hex = (hex.charAt(0)=="#") ? hex.substring(1,7) : hex;

 if (hex.length != 6) {
  alert ('Invalid length of the input hex value!');   
  return; 
 }
 if (/[0-9a-f]{6}/i.test(hex) != true) {
  alert ('Invalid digits in the input hex value!');
  return; 
 }

 var r = parseInt(hex.substring(0,2),16); 
 var g = parseInt(hex.substring(2,4),16); 
 var b = parseInt(hex.substring(4,6),16); 

 // BLACK
 if (r==0 && g==0 && b==0) {
  computedK = 1;
  return [0,0,0,1];
 }

 computedC = 1 - (r/255);
 computedM = 1 - (g/255);
 computedY = 1 - (b/255);

 var minCMY = Math.min(computedC,Math.min(computedM,computedY));

 computedC = (computedC - minCMY) / (1 - minCMY) ;
 computedM = (computedM - minCMY) / (1 - minCMY) ;
 computedY = (computedY - minCMY) / (1 - minCMY) ;
 computedK = minCMY;

 //return [computedC,computedM,computedY,computedK];
 return [r, g, b];
}







}
b.go();
