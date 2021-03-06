﻿// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());

  b.colorMode(b.RGB);


// Variable der Text Höhe und Breite


  b.units(b.PX);
  b.noStroke();


// Das Bild
  var imgWidth = 736 / 1.5;
  var imgHeight = 891 / 1.5;

  var imgPilz = b.image("pilz.jpg", b.width / 1.5 + 180 - imgWidth, b.height / 1.5 + 120 - imgHeight, imgWidth, imgHeight);

  b.opacity(imgPilz, 20);


// Der Text Rahmen und die Auslesung der Wörter
  b.units(b.MM);

  var textWidth = 100;
  var textHeight = 300;

  b.textFont("Brazilia", "Regular");
  var textPilze = b.loadString("pilze.txt");
  var textFrame = b.text(textPilze, b.width / 2 - textWidth / 2, b.height / 2 - textHeight / 3, textWidth, textHeight);

  var words = b.words(textFrame);
  var characters = b.characters(textFrame);


// promt Abfrage der Wörter
  var witchWord = prompt("Welches Wort willst du zu Pilzen verarbeiten?", "Gib hier das Wort ein!");

  if (b.isNumber(witchWord)) {

    alert("Bitte nur Wörter eingeben!");

    var witchWord = prompt("Welches Wort willst du zu Pilzen verarbeiten?", "Gib hier das Wort ein!");
  }

// Variable zum Zählen der Wörter
  var wordCount = 0;

// for Loop mit Wort Abfrage und Bild plazierung

  for (var i = 0; i < words.length; i++) {

    if (words [i].contents == witchWord) {

   // + 1 für die Wort Variable
      wordCount++;

    // Wenn das Wort richtig ist wird Pilz plaziern
      b.noStroke();
      var x = b.width / 2 - textWidth / 1.5;
      var y = (b.height / 2 - textHeight / 2) + i / 2;
      var size = 626 / 50;
      var image2 = b.image("pilz2.png", x, y, size, size);
      b.opacity(image2, 50);

    // Und eine Linie gezogen

      b.strokeWeight(0.7);
      var newRandomColor = b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255));
      b.stroke(newRandomColor);

      var wordBounds = b.bounds(words[i]);

      b.line(x + size / 2, y + size / 2, wordBounds.left, wordBounds.baseline - 1);
    }
  }


// promt Abfrage der Buchstaben
  var witchCharacter = prompt("Und welche Buchstabe willst du zu Pilzenverarbeiten?", "Gib hier den Buchstaben ein!");

  if (b.isNumber(witchCharacter)) {

    alert("Bitte nur Wörter eingeben!");

    var witchCharacter = prompt("Und welche Buchstabe willst du zu Pilzenverarbeiten?", "Gib hier den Buchstaben ein!");
  }

// for Loop mit Buchstabe Abfrage und Bild plazierung

  var characterCount = 0;

  for (var j = 0; j < words.length; j++) {

    if (words[j].contents [0] == witchCharacter) {

      characterCount++;

    // Wenn oberes zutrifft wird Bild plaziert

      b.noStroke();
      var x = b.width / 2 - textWidth / 1.5 + 120;
      var y = (b.height / 2 - textHeight / 2) + j / 1.2;
      var size = 626 / 50;
      var image2 = b.image("pilz2.png", x, y, size, size);
      b.opacity(image2, 50);

    // Und eine Linie gezogen

      b.strokeWeight(0.7);
      var newRandomColor = b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255));
      b.stroke(newRandomColor);

      var wordBounds = b.bounds(words[j]);

      b.line(x + size / 2, y + size / 2, wordBounds.left, wordBounds.baseline - 1);
    }
  }


// Die Beiden Texte mit Ausgabe der Wort und Buchstaben Zahlen
  var rotation = b.radians(-90);
  b.rotate(rotation);

  b.textFont("Bodoni MT", "Regular");
  b.textSize(80);
  b.fill(b.color(120, 120, 120));
  b.text(wordCount + " Pilze verarbeitet", 10, 260, 300, 50);

  var rotation = b.radians(180);
  b.rotate(rotation);

  b.textFont("Bodoni MT", "Regular");
  b.textSize(80);
  b.fill(b.color(120, 120, 120));
  b.text(characterCount + " Pilze verarbeitet", 204, 30, 300, 50);

  b.noFill();

  var rotation = b.radians(-90);
  b.rotate(rotation);


}

b.go();
