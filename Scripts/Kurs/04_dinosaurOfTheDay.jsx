﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(  b.doc()  );


  // Array
  var dinosaurs = ["Kangnasaurus", "Lophostropheus", "Spinophorosaurus", "Epachthosaurus", "Coelurosauria", "Lycorhinus", "Adasaurus", "Draconyx", "Ceratops", "Lagerpeton", "Qiaowanlong", "Rhynchosaur", "Ningyuansaurus", "Palaeolimnornis", "Anabisetia", "Talarurus", "Sphenodontia", "Tianyulong", "Aepisaurus", "Neuquenraptor", "Galesaurus", "Pachysuchus", "Auroraceratops", "Hecatasaurus", "Barapasaurus", "Asiatosaurus", "Daanosaurus"];

  var random = b.random(0, dinosaurs.length);
  var randomRounded = b.floor(   random   );

  alert( "Der Dinosaurier des Tages ist: " + dinosaurs[randomRounded]  );


}

b.go();
