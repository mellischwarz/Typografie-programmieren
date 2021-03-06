﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units(b.MM);

// text setting
b.textFont("Helvetica", "Regular");
b.textLeading(24);

var white = b.color(255,255,255);
var grey = b.color(220);
var black = b.color(0);
b.fill(black);

var textSize = prompt("Textgröße?", 8);
b.textSize(textSize);

if (textSize > 30){
  var newTextSize = prompt("Oh, das ist zu groß. Mach mal was unter 30", 29);
}


// stroke weight abhängig von text size
b.stroke(white);
var textSizeMin = 0;
var textSizeMax = 50;
var strokeWeightMin = 1;
var strokeWeightMax = 80;
var strokeWeight = b.map(textSize, textSizeMin, textSizeMax, strokeWeightMin, strokeWeightMax);
b.strokeWeight(strokeWeight);


// text
var x = b.width/10;
var y = b.height/10;
var w = b.width - 2*b.width/10;
var h = b.height - 2*b.height/10;
var textWolf = b.loadString("Wolf.txt");
var tfWolf = b.text(textWolf, x, y, w, h);
b.typo(tfWolf, 'underline', true);
b.typo(tfWolf, 'underlineWeight', strokeWeight);

//array
var words = b.words(tfWolf);

//wenn wolf, dann linien
for (i = 0; i < words.length; i++){
  var redWolf = false; 

  if( b.startsWith(words[i].contents, "Wolf") ){
    var redWolf = true; 
  
    var wordMiddleBefore = wordMiddle;
    var baselineBefore = baseline; 
        
    var wordMiddle = (b.bounds(words[i]).left) + ((b.bounds(words[i]).right)-(b.bounds(words[i]).left))/2;
    var baseline = b.bounds(words[i]).baseline;

    if (redWolf = true && i > 1){ //Frage: wie kann ich die nummer des ersten i herausfinden?
        

        b.line(wordMiddleBefore, baselineBefore, wordMiddle, baseline);
    }    
  }
}


}
b.go();



// Wolf
// Der Wolf (Canis lupus) ist ein Beutegreifer und gehört zur Familie der Hunde (Canidae) aus der Ordnung der Raubtiere (Carnivora). Wölfe leben in der Regel in Familienverbänden, umgangssprachlich auch Rudel genannt. Hauptbeute sind mittelgroße bis große Huftiere. Die Art war seit dem späten Pleistozän, somit etwa einhunderttausend Jahre lang, in ganz Europa, weiten Teilen Asiens einschließlich der Arabischen Halbinsel sowie Japan und Nordamerika verbreitet. Sie wurde jedoch im 19. Jahrhundert in nahezu allen Regionen vor allem durch menschliche Bejagung stark dezimiert, in West- und Mitteleuropa fast und in Japan vollständig ausgerottet. Seit Ende des 20. Jahrhunderts steht der Wolf unter internationalem Schutz und die Bestände erholen sich teilweise. In Deutschland konnte im Jahr 2000 erstmals wieder die Geburt von Welpen nachgewiesen werden. Im November 2013 wurden 25 sesshafte Wolfsrudel nachgewiesen,[1] im Oktober 2014 wurden 34 Wolfsrudel oder -paare bestätigt[2] und im August 2016 gab es 69 nachgewiesene Wolfsrudel.[3] Wölfe haben schon frühzeitig Eingang in die Mythen und Märchen vieler Völker gefunden, sie zählen daher zu den bekanntesten Raubtieren.Kopf eines Wolfes im Profil Grundsätzlich ähnelt der Wolf einem großen Haushund, wobei der Rumpf im Vergleich zu ähnlich gebauten Haushunden länger und der Brustkorb höher, aber schmaler ist. Der Kopf ist relativ groß und die Stirn breit. Die Augen setzen schräg an, die Ohren sind eher kurz. Der buschige Schwanz (fachsprachlich auch als Rute bezeichnet) hat etwa ein Drittel der Kopf-Rumpf-Länge.[4]Die Färbung ist sehr variabel, es gibt weiße, cremefarbene, gelbliche, rötliche, braune, graue und schwarze Wölfe. In den gemäßigten Zonen Europas und Asiens überwiegen graue Wölfe, die nördlichen Populationen zeigen größere Anteile schwarzer und weißer Tiere. Meist überwiegen dunkle Haare auf dem Rücken und dem Schwanz. Bauch, Beine und Schnauze sind meist deutlich heller gefärbt. Nach genetischen Untersuchungen beruht die schwarze Fellfarbe bei Grauwölfen auf einer Mutation, die zuerst unter Haushunden auftrat und später in die Wolfspopulation eindrang.[5] Wolf im Profil (C. l. lupus) Maße und Gewichte des Wolfes sind aufgrund seines ausgedehnten Verbreitungsgebietes sehr unterschiedlich (siehe Bergmannsche Regel): Die größten Wölfe in den Waldzonen Lettlands, Weißrusslands, Alaskas und Kanadas erreichen eine Kopfrumpflänge von bis zu 160 cm, der Schwanz ist zusätzlich bis zu 52 cm lang. Die Schulterhöhe beträgt etwa 80 cm. Diese Wölfe können bis zu 80 kg wiegen. Die kleinsten Wölfe leben im Vorderen Orient und auf der Arabischen Halbinsel; ihre Körperlänge beträgt etwa 80 cm bei einem Gewicht von rund 20 kg und einer Schwanzlänge von etwa 29 cm. Die Weibchen sind um 2 bis 12 % kleiner als die Rüden und 20 bis 25 % leichter. Mitteleuropäische Wölfe liegen zwischen diesen Extremen. Männliche polnische Wölfe aus dem Białowieża-Urwald hatten eine Kopf-Rumpf-Länge von im Mittel 119 cm und eine Schulterhöhe von 70 bis 90 cm, Weibchen aus demselben Gebiet eine mittlere Kopf-Rumpf-Länge von 111 cm (Extreme 97 bis 124 cm) und eine Schulterhöhe von 60 bis 80 cm. Männchen aus dem Südosten Polens wogen 35 bis 67 kg, Weibchen 27 bis 50 kg.[6] Unterschiede zum Haushund Tschechoslowakische Wolfhunde sehen Wölfen zum Verwechseln ähnlich.Haushunde sind domestizierte Formen des Wolfes und gehören daher ebenso wie der Dingo der gleichen Art (Canis lupus) an. Anhand einiger charakteristischer Merkmale ist die Unterscheidung von Wölfen und Haushunden meistens möglich, wobei das Ausmaß der Unterschiede je nach Hunderasse stark variieren kann. In einigen Fällen ist es allerdings nur mit einer DNA-Analyse zweifelsfrei festzustellen, ob ein Individuum ein reiner Wolf oder eindeutig ein Haushund ist, oder eine Mischform mit Vorfahren von beiden Seiten.Morphologische und anatomische Unterschiede Schädel Wölfe tragen ihren Schwanz meist waagerecht oder etwas gesenkt, Hunde hingegen oft nach oben oder eingerollt. Wölfe haben eine Violdrüse an der Oberseite des Schwanzes, die bei vielen Hunden fehlt oder verkümmert auftritt, bei anderen aber ein weites Drüsenfeld bildet.[7] Insbesondere am Schädel lassen sich zahlreiche Unterschiede zwischen Wolf und Hund feststellen; dies betrifft unter anderem die Form der Augenhöhle, der Ohrmuschel, des Praesphenoids, des Basis vomerus, der Fissura petrobasialis sowie die Form des Unterkiefers und die Anordnung der Schneidezähne im Unterkiefer. Weitere Unterschiede Weibliche Wölfe werden nur einmal im Jahr fruchtbar, sie sind monoöstrisch, Haushunde bis zu zweimal, sie sind diöstrisch. Männliche Wölfe sind nur zur Zeit der Brunft paarungsbereit, und nur zu dieser Zeit produzieren sie fortpflanzungsfähige Spermien. Männliche Haushunde sind im Prinzip jederzeit paarungsbereit und -fähig. Da die Pfotenabdrücke mit fünfteiligen Ballen ähnlich und anhand der Größe nicht zweifelsfrei unterscheidbar sind, werden Fährten anhand ihres Verlaufs zugeordnet. Wölfe setzen im Schnee ihre Hinterpfoten in die Abdrücke der Vorderpfoten – sie schnüren –, im Rudel laufen sie oft hintereinander und setzen ihre Pfoten in die Abdrücke des Vorderwolfes. Daher entsteht oft der Eindruck, dass man der Spur eines einzelnen Wolfes folgt, bis sich die Fährte plötzlich in mehrere Individualfährten aufteilt. Der Verlauf einer Wolfsfährte ist zudem oftmals über hunderte Meter geradlinig und zielorientiert, während für Hunde das Umherlaufen und Abweichen typisch ist.
