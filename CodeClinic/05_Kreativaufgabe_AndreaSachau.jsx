﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());


b.textFont("Droid Serif");    //  font
var textWiederholung = 5;    //  wie oft wird die Schleife wiederholt?



// for( var i = 0; i < textWiederholung; i++){

//   var x = (b.random(0, b.width-245));   // x Position Text
//   var y = (b.random(0, b.height-202));  // y Position Text

//     if( b.startsWith(words[i].contents, "E") ) {
//   words[i].contents = "HHHHHH"; 
//   // var bounds = b.bounds( words[i] );
//   // b.ellipse(bounds.left + bounds.width/2, bounds.baseline-4, bounds.width*1.2, bounds.width*1.2);  //Kreis um den Mittelpunkt des Wortes zeichnen, die Höhe ist nach Augenmaß (das -4). Größe des Kreises ist die Breite des Wortes *1.2
//   }
//   var text = b.text("Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich bin allein und freue mich meines Lebens in dieser Gegend, die für solche Seelen geschaffen ist wie die meine. Ich bin so glücklich, mein Bester, so ganz in dem Gefühle von ruhigem Dasein versunken, daß meine Kunst darunter leidet. Ich könnte jetzt nicht zeichnen, nicht einen Strich, und bin nie ein größerer Maler gewesen als in diesen Augenblicken.", x, y, 245, 202);


//   var words = b.words(text);            // Wörter werden als Wörter anerkannt
//   b.typo(text, 'leading', 16);          // Zeilenabstand
// } //for loop



for(var i = 0; i < textWiederholung; i++) {

  var x = (b.random(0, b.width-245));
  var y = (b.random(0, b.height-202));

  var text = b.text("Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich bin allein und freue mich meines Lebens in dieser Gegend, die für solche Seelen geschaffen ist wie die meine. Ich bin so glücklich, mein Bester, so ganz in dem Gefühle von ruhigem Dasein versunken, daß meine Kunst darunter leidet. Ich könnte jetzt nicht zeichnen, nicht einen Strich, und bin nie ein größerer Maler gewesen als in diesen Augenblicken.", x, y, 245, 202);
  var words = b.words(text); 

  if( b.startsWith(words[i].contents, "E") ) {
  words[i].contents = "HHHHHH";
  }

}


} //draw

b.go();
