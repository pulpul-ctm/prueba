var sketchProc = function(processingInstance) {

  with (processingInstance) {
    size(700,500);
        
    background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300); 
fill(145, 87, 11);
ellipse(192, 94, 177, 63); //bread
fill(214, 168, 51); //bread
ellipse(146, 93, 12, 41);
fill(214, 168, 51);
ellipse(188, 94, -12, 57);
ellipse(231, 95, 12, 52);
fill(235, 156, 18);
ellipse(286, 180, 78, 120);
fill(250, 245, 245);
rect(277, 239, 14, 35);
ellipse(285, 275, 20, 19);
fill(250, 250, 247);
ellipse(140, 187, 118, 115);
fill(250, 250, 5);
ellipse(143, 171, 50, 50);
fill(60, 201, 65);
noStroke();
ellipse(214, 240, 33, 36);
ellipse(214, 265, 33, 36);
ellipse(200, 240, 33, 36);
ellipse(214, 222, 33, 36);
ellipse(241, 267, 33, 36);
ellipse(237, 232, 33, 36);
ellipse(235, 261, 33, 36);
ellipse(195, 267, 33, 36);
rect(204, 271, 29, 40);
  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);