﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";
function draw() {
  var hour = b.hour();
  
  var white = b.color(255);
  var black = b.color (0);

  var tf = b.selection();
  var words = b.words(tf);

  var blackWords = [];

  // b.typo(tf, 'fillColor', white);



  for (i = 1; i < words.length; i++){
    
    // schwarze wörte in array blackWords schieben
    if ((b.typo(words[i], 'fillColor', black)) == true){
      blackWords.push(words[i]);
    }
    // if (i % hour == 0){
    //   b.typo(words[i-1], 'fillColor', black);
    // }

  }

b.println(blackWords);

}
b.go();






// 0      - jedes Wort
// 1, 23  - jedes 2. Wort
// 2, 22  - jedes 3. Wort
// 3, 21  - jedes 4. Wort
// 4, 20  - jedes 5. Wort
// 5, 19  - jedes 6. Wort
// 6, 18  - jedes 7. Wort
// 7, 17  - jedes 8. Wort
// 8, 16  - jedes 9. Wort
// 9, 15  - jedes 10. Wort
// 10, 14 - jedes 11. Wort
// 11, 13 - jedes 12. Wort
// 12     - jedes 13. Wort
