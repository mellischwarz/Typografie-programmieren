﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear (b.doc() );

   var myText1 = b.loadString ("GedichtSeminar1.txt");
   var myText2 = b.loadString ("GedichtSeminar2.txt");
   var myText3 = b.loadString ("GedichtSeminar3.txt");

   b.textFont("BalboaPlus");
   b.textSize(20);


// Buchstabe

b.textSize(60);
b.text ("o", 30, 30, 600, 100);
var Buchstabe = "o";

  
b.textSize(20); 

// Text 1

  var pos1x = b.random (5, 80);
  var pos1 = b.random (100,800);
 
      var tf = b.text (myText1, pos1x, pos1, 600, 100);
      b.ellipse (pos1x-7, pos1-7, 20,20);
    

// Buchstaben mit O verbinden

var character = b.characters(tf); 
  
    for ( var i = 0; i < character.length; i++) {
        if (character[i].contents == Buchstabe ) {
      
      var position = b.bounds ( character [i] );  
      b.line( position.left+3, position.baseline-15.1, 55, 77);
         }
      }


// Text 2
   
   var pos2x = b.random (5,135);
   var pos2 = b.random (100,800);
b.fill(0,0,0);
   var tf = b.text (myText2, pos2x, pos2, 500, 100);
   b.ellipse (pos2x-7, pos2-7, 20,20);

var character = b.characters(tf); 
  
    for ( var i = 0; i < character.length; i++) {
        if (character[i].contents == Buchstabe ) {
      
      var position = b.bounds ( character [i] );  
      b.line( position.left+3, position.baseline-15.1, 55, 77);
         }
      }

  

// Text 3 		 

   var pos3x = b.random (5,135);
   var pos3 = b.random (100,800);
   b.fill(0,0,0);
   		var tf = b.text (myText3, pos3x, pos3, 500, 100);
   		b.ellipse (pos3x-7, pos3-7, 20,20);

var character = b.characters(tf); 
  
    for ( var i = 0; i < character.length; i++) {
        if (character[i].contents == Buchstabe ) {
      
      var position = b.bounds ( character [i] );  
      b.line( position.left+3, position.baseline-15.1, 55, 77);
         }
      } 
  		

// Zahl im Kreis

 b.fill(255,255,255);
 b.textSize(10);
 	
 	b.text ("1",pos1x-9.5 , pos1-11.5, 20, 20);

	b.text ("2",pos2x-9.5 , pos2-11.5, 20, 20);

 	b.text ("3",pos3x-9.5 , pos3-11.5, 20, 20);
 








}

b.go();
