﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

//Der wget-command (MyCode) soll die Jpegs der URL in den von mir erstellten Ordner herunterladen.
//Darius

var MyCode = "wget  -r -l 3 -np -nd -p -P /Users/Darius/Documents/basiljs/Download  -A jpg,jpeg  http://www.booooooom.com/2016/10/25/photographer-spotlight-jesse-salto/ -S";

b.shellExecute( MyCode );



}

b.go();
