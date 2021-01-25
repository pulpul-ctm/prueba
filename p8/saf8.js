var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(700,500);
     
      fill(0, 0, 0);
      ellipse(200, 200, 375, 375);
      fill(252, 252, 252);
      ellipse(200,200,225,225);
      fill(0, 0, 0);
      ellipse(200,155,80,80);
      ellipse(200,224,100,100);
      fill(252,252,252);
      ellipse(200,155,50,50);
      ellipse(200,224,70,70);
      fill(255, 0, 0);
      textSize(15);
      text("Think Of A Yes Or No Question,", 90, 375);
      text("Then Click The Magic 8 Ball For Your Answer!", 48, 390);
      
      var mousePressed=function() {
          background(11, 59, 14);
          textSize(12);
          fill(0, 0, 0);
          ellipse(200, 200, 375, 375);
          fill(60, 0, 255);
          triangle(200, 104, 280, 280, 120, 280);
          fill(230, 28, 230);
          var answer = floor(random(1, 11));
          
          fill(255, 255, 255);
          if (answer < 2) {
              text("I GUESS", 176, 200);
              text("YES", 187, 229); 
          }
          else if (answer < 3) {
              text("NOT", 188, 200);
              text("LOOKING LIKELY", 152, 229);
          }
          else if (answer < 4) {
              text("ASK", 186, 200);
              text("AGAIN LATER", 159, 229);
          }
          else if (answer < 5) {
              text("A BIG", 183, 200);
              text("YES", 187, 229);
          }
          else if (answer < 6) {
              text("COULD BE", 171, 200);
              text("A YES", 179, 229);
          }
          else if (answer < 7) {
              text("I CAN'T", 178, 200);
              text("SEE AN", 178, 229); 
              text("ANSWER", 175, 255);
          }
          else if (answer < 8) {
              text("THE FUTURE", 163, 200);
              text("IS FOGGY", 172, 229); 
          }
          else if (answer < 9) {
              text("I GUESS", 176, 200);
              text("IT MIGHT", 176, 229);
              text("HAPPEN", 179, 254);
          }
          else if (answer < 10) {
              text("DID YOU", 175, 200);
              text("TURN OFF", 169, 229);
              text("THE STOVE?", 164, 256);
          }
          else {
              text("I DON'T", 175, 200);
              text("KNOW...", 177, 229);
              text("YES? PERHAPS NO?", 142, 256);
          }
      };
      
  
    }
  };
  var canvas = document.getElementById("canvas");
   var processing = new Processing(canvas, sketchProc);