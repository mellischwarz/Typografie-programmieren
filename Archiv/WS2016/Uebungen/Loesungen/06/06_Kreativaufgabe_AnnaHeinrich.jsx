//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

   function draw() {

var pageCount = 3;

for (var i =0 ; i < 60; i++){
 var x = b.random(0, b.width);
 var y = b.random(0, b.height);
 var random = b.round(b.random(1,70));
 var color1 = b.color(b.random(0,255), b.random(0,255), b.random(0,255));
 var color2 = b.color(b.random(0,255), b.random(0,255), b.random(0,255));
 b.stroke(b.random(0,255),b.random(0,255), b.random(0, 255));
 b.line(b.width/2, 0, x, y);

  if (random < 20) {
     b.fill(b.gradient(color1, color2));
     b.ellipse(x, y, 35, 35);
}
}

for (var j=0; j<pageCount; j++){
  
b.addPage();

for (var i =0 ; i < 60; i++){
 var x = b.random(0, b.width);
 var y = b.random(0, b.height);
 var random = b.round(b.random(1,70));
 var color1 = b.color(b.random(0,255), b.random(0,255), b.random(0,255));
 var color2 = b.color(b.random(0,255), b.random(0,255), b.random(0,255));
 b.stroke(b.random(0,255),b.random(0,255), b.random(0, 255));
 b.line(b.width/2, 0, x, y);

  if (random < 20) {
     b.fill(b.gradient(color1, color2));
     b.ellipse(x, y, 35, 35);

}
}
}
}
b.go();
