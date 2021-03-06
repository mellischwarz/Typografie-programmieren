﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());

  b.noFill();

  nikolaus(120, 40, 100);

  nikolaus(200, 300, 200);

  nikolaus(400, 200, 20);

}

b.go();



function nikolaus (x, y, size) {
  // base
  b.rect(x, y, size, size);
  b.line(x, y, x + size, y + size);
  b.line(x, y + size, x + size, y);

  // roof
  b.line(x, y, x + size / 2, y - size / 2);
  b.line(x + size / 2, y - size / 2, x + size, y);
}
