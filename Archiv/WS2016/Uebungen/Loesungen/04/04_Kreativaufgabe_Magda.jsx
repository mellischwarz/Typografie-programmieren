﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

// (Kreativaufgabe) Versucht mit eurem Wissen über das bisher gelernte eine interessante Gestaltung bzw. ein interessantes Muster per Script zu erstellen. In eurem Script soll ein Array verwendet werden. Speichert von diesem Design ein JPEG ab (Datei -> Exportieren -> Format JPEG -> Qualität Hoch | Auflösung(ppi): 72).


function draw() {

  b.clear( b.doc() );
  b.noFill();
  b.textFont("Cooper Black");
  b.textSize(3);

  b.fill (200,226,235);
  b.rect (0,0, b.width, b.height);

  	 for (var i = 0; i < 120; i++) {

  	  	var posX = 0
  	  	var posY = b.height*0.1
  	  	b.stroke (b.color(b.random(45,55), b.random(130,139),b.random(160,169)) );
      b.ellipse( posX, posY, b.width*0.6+i*6, b.height-i*4 );

      }


  for (var i = 0; i < 120; i++) {

  	  	var posX = b.width+180
  	  	var posY = b.height*0.6
  	  	b.stroke (b.color(b.random(45,55),b.random(130,139),b.random(160,169)) );
      b.ellipse( posX, posY, b.width*0.6+i*6, b.height-i*4 );

      }

  for (var i = 0; i < 60; i++) {

  	  	var posX = 0-100
  	  	var posY = b.height
  	  	b.stroke (b.color(b.random(45,55),b.random(130,139),b.random(160,169)) );
      b.ellipse( posX, posY, b.width*0.6+i*6, b.height-i*4 );

      } 

      

      var words = [
    "Adam Rose", "Alberto Del Rio", "Alexander Rusev", "Andre the Giant", "Arn Anderson", "Bad News Barrett", "Barry Horowitz", "Batista", "Big Boss Man", "Big E", "Big Show", "Billy Gunn", "Booker T", "Bray Wyatt", "Bret \"Hitman\" Hart", "Brock Lesnar", "Brodus Clay", "Brutus \"The Barber\" Beefcake", "Cesaro", "Christian", "CM Punk", "Cody Rhodes", "Curt Hawkins", "Curtis Axel", "Damien Sandow", "Daniel Bryan", "Darren Young", "David Otunga", "Dean Ambrose", "Diego", "Dolph Ziggler", "Drew McIntyre", "Dwayne \"The Rock\" Johnson", "Erick Rowan", "Evan Bourne", "Fernando", "George \"The Animal\" Steele", "Goldust", "The Great Khali", "\"Hacksaw\" Jim Duggan", "Heath Slater", "The Honky Tonk Man", "Hornswoggle", "Hulk Hogan", "The Iron Shiek", "Jack Swagger", "Jake \"The Snake\" Roberts", "Jey Uso", "Jimmy Uso", "Jinder Mahal", "John Cena", "JTG", "Junkyard Dog", 
	];

	



for(i=0; i<words.length; i++){
		var x = b.random (0,b.width);
		var y = b.random (0,b.height);
		b.fill (2,41,54);

  	b.text(words[i], x, y, 100, 100);
}

}

b.go();
