﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {


  b.weekday()

  if( b.weekday() == "Wednesday" ) {
    b.text("Heute ist Mittwoch!", 0, 0, 100, 100);
  } else {
    b.text("Heute ist nicht Mittwoch.", 0, 0, 100, 100)
  }


}

b.go();
