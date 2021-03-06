//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  // ACHTUNG!
  // 1) Erstelle einen neuen Ordner namens "Download" und lege ihn in den basiljs Ordner.
  // 2) Das Indesign Dokument muss vor dem Ausführen des Skriptes gespeichert werden.
  // 3) Es ist kein lizensfreies Bild...

b.clear(b.doc());
b.rect(0,0,b.width, b.height);

  
// Bild wird heruntergeladen und in den Ordner ~/basiljs/Download/ gelegt.

  var MyCode1 = "curl -o ~/basiljs/Download/1.jpg http://www.booooooom.com/wp-content/uploads/2016/11/Eline-Van-Dam20.jpg"
  
  b.shellExecute( MyCode1 );

// Bild aus dem Ordner im Dokument platziert.

  var myImagesArray = Folder('~/basiljs/Download/').getFiles();
  var imgF = b.image(myImagesArray[1], 100,100 );
  var imgWidth = b.itemWidth(imgF);
  var imgHeight = b.itemHeight(imgF);
  var x = b.random(0, b.width - imgWidth/2);
  var y = b.random(0, b.height - imgHeight);

  b.transformImage(imgF, x, y, imgWidth/2, imgHeight/2);
  




var txt = "Basil.js ERROR\n Uncaught Javascript exception: Something is undefined\n\nERROR ERROR: You can not do that, directory not found! ERROR: Coding Skills not found"
var txt2 = "\n\nwork by Dutch illustrator Eline Van Dam aka Zeloot."

alert("That's a picture...now some text...");

//Schriftgröße/-art, Position, Farbe, Zeilenabstand
  var count = prompt("Fontsize: ", 30);
  var txtSize = b.textSize(count);

  var posX = b.random(0, b.width - count*10);
  var posY = b.random(100, b.height - 200);

  var white = b.color(255, 255, 255);
  var black = b.color(0,0,0);
  var red = b.color(255,0,0);
  var blue = b.color(20,0, 255);
  var leadingRatio = 0.833
  
  b.textLeading(txtSize / leadingRatio );
  b.textFont("Avenir", "Black");
  

b.fill(red);
var tf1 = b.text(txt, 0, 0, 300, 300);
var tf2 = b.text(" ", 300, 300, 300, 300);
var tf3 = b.text(" ", 600,600, 300,300);

b.fill(blue);
b.text(txt, 0, 3, 300, 300);
b.text(" ", 300, 303, 300, 300);
b.text(" ", 600,603, 300,300);

b.rotate(b.radians(90));
b.fill(white);
var tf4 = b.text(txt2, b.random(0,b.width),520, 300, 300);
b.linkTextFrames(tf1,tf2,tf3);

var tf2Height = b.itemHeight(tf2);


while(tf2.overflows == true) {
  b.itemHeight(tf2, tf2Height++);
  b.itemHeight(tf3, tf3Height++);
}


// "ERROR" markieren
  var words = b.words(tf1);

  for(var i = 0; i < words.length; i++){

    // [0] = 1. Buchstabe (wert) des Worts (objekt)
    if ( words[i].contents[0] == "E") {

    // b.bounds bestimmt die Grenzen eines Objekts
    var bounds = b.bounds( words[i] );
    
    b.noFill();
    b.strokeWeight(3);
    b.stroke(red);
    b.rect(bounds.left + bounds.width, bounds.xHeight - 10 , bounds.height + 5, bounds.width - 5);
    b.stroke(blue);
    b.rect(bounds.left + bounds.width, bounds.xHeight - 13 , bounds.height + 5, bounds.width - 5);
}
}

if (count > b.width/20){
b.itemPosition(tf1, [b.width/2 + count*10], [b.height/4]);
b.itemPosition(tf2, b.width/2, b.height/2);

}

}

b.go();
