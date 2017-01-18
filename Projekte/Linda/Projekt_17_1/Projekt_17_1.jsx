// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// demonstrates how to load json files that might be exported from Processing

function draw() {

  b.clear(b.doc());
  b.noFill();

  // get data folder where the JSON files will be saved
  var projectFolder = b.projectFolder();
  var dataFolder = Folder(projectFolder + "/data");


  // optional: delete all old .json files
  // if you want to keep them, just comment out the for loop
  var oldJsonFiles = dataFolder.getFiles("*.json");
  for (var i = 0; i < oldJsonFiles.length; i++) {
    oldJsonFiles[i].remove();
  }


  // count all JSON files that are in the folder
  var oldJsonCount = dataFolder.getFiles("*.json").length;


  // main loop; every second we check if the new json count is greater than the old one.
  // If so, a new JSON file was added and we can use it to create a poster
  // (for testing, loop will stop after 60 seconds)
  while(b.millis() < 60000) {

    var jsonFiles = dataFolder.getFiles("*.json");
    var newJsonCount = jsonFiles.length;

    // a new JSON file was added
    if (newJsonCount > oldJsonCount) {

      // the new file is the last of all JSON files
      var addedJsonFile = jsonFiles[newJsonCount - 1];

      var jsonString = b.loadString(addedJsonFile);
      var jsonData = b.JSON.decode(jsonString);

      for (var i = 0; i < jsonData.length; i++) {
        jsonData[i].corrX = b.map(jsonData[i].x, 0, 1024, -100, 100);
        jsonData[i].corrY = b.map(jsonData[i].y, 0, 576, -100, 100);
        jsonData[i].absolute = b.abs(jsonData[i].corrX) + b.abs(jsonData[i].corrY);
      }

      // create stuff for all the questions
      question1(jsonData[0]);

      question2(jsonData[1]);

      question3(jsonData[2]);


      //etc.


      // export the file and reset the document
      b.savePDF("/export/Poster_" + newJsonCount +  ".pdf", false);
      b.clear(b.doc());

      // new count becomes the new old count
      oldJsonCount = newJsonCount;

      //Höchste X-Zahl finden
      var mostExtremeValue = 0;
      var mostExtremeAnser = 0;
      for(var i = 0; i < jsonData.length; i++) {
        if(jsonData[i].abolute > mostExtremeValue) {
          mostExtremeValue = jsonData[i].absolute;
          mostExtremeAnser = i;
        }
      }
      b.println ("Die höchste Zahl ist " + highest);
    }

    b.delay(1000);

  }



}

b.go();

// Example: draw shapes for question 1
function question1(data) {






  // transfer color from Processing sketch
  var c = b.color(data.r, data.g, data.b);
  b.stroke(c);

  // depending on the xPosition of the user answer 1-50 shapes will be generated
  var shapeCount = b.floor( b.map(data.x, 0, 1024, 1, 50) );

  // depending on the yPosition of the user answer the shape's max size will be between 20 and 100
  var shapeSize = b.map(data.y, 0, 576, 20, 100);

  for (var i = 0; i < shapeCount; i++) {
    var randomX = b.random(0, b.width);
    var randomY = b.random(0, b.height / 3);
    var randomSize = b.random(10, shapeSize);
    b.ellipse(randomX, randomY, randomSize, randomSize);
  }

}

// Example: draw shapes for question 2
function question2(data) {

  // transfer color from Processing sketch
  var c = b.color(data.r, data.g, data.b);
  b.stroke(c);
  b.println(c);


  // depending on the xPosition of the user answer 1-100 shapes will be generated
  var shapeCount = b.floor( b.map(data.x, 0, 1024, 1, 100) );


  for (var i = 0; i < shapeCount; i++) {
    var randomX = b.random(0, b.width);
    var randomY = b.random(b.height / 3, b.height / 3 * 2);
    var randomSize = b.random(10, 40);

    var r = b.rect(randomX, randomY, randomSize, randomSize);

    // depending on the yPosition of the user answer the shape's min opacity will be between 20 and 100
    var oMin = b.map(data.y, 0, 576, 20, 100);
    var o = b.random(oMin, 100);
    b.opacity(r, o);
  }

}

// Example: draw shapes for question 3
function question3(data) {

  // transfer color from Processing sketch
  var c = b.color(data.r, data.g, data.b);
  b.stroke(c);

  // depending on the xPosition of the user answer 1-1000 vertices will be generated
  var vertexCount = b.floor( b.map(data.x, 0, 1024, 1, 1000) );

  b.beginShape();

  for (var i = 0; i < vertexCount; i++) {
    var randomX = b.random(0, b.width);
    var randomY = b.random(b.height / 3 * 2, b.height / 3 * 3);

    b.vertex(randomX, randomY);

  }

  b.endShape();
}