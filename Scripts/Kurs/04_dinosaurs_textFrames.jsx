﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(  b.doc()  );


  // Array
  var dinosaurs = ["Kangnasaurus", "Lophostropheus", "Spinophorosaurus", "Epachthosaurus", "Coelurosauria", "Lycorhinus", "Adasaurus", "Draconyx", "Ceratops", "Lagerpeton", "Qiaowanlong", "Rhynchosaur", "Ningyuansaurus", "Palaeolimnornis", "Anabisetia", "Talarurus", "Sphenodontia", "Tianyulong", "Aepisaurus", "Neuquenraptor", "Galesaurus", "Pachysuchus", "Auroraceratops", "Hecatasaurus", "Barapasaurus", "Asiatosaurus", "Daanosaurus"];



  for(var i = 0; i < dinosaurs.length; i++) {

    b.fill( b.color(0) );

    var x = b.random( b.width );
    var y = b.random( b.height );
    var randomFontSize = b.random(3, 16);

    if (  b.startsWith(dinosaurs[i], "A")   ) {
      b.fill(  b.color(255, 0, 0)   );
    }


    b.textSize(randomFontSize);

    b.text(dinosaurs[i], x, y, 100, 100);
  }




}

b.go();
