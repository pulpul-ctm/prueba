var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(700,500);
      var bodyX = 200;
      var bodyY = 220;
      var bodyW = 100;
      var bodyH = bodyW/2;
      var bodyW2 = 60;
      var eyeSize = 5;
      var iceWidth = 413;
      var iceHeight = 152;
      var legWidth = 177;
      var legHeight = 268;
      var leg2Width = 223;
      
      draw = function() {
          noStroke();
          background(207, 254, 255);
          fill(0, 0, 0);
          ellipse(bodyX, bodyY, bodyW, 106); // body
          ellipse(bodyX, bodyY-70, bodyH, 47); // face
          fill(255, 255, 255);
          ellipse(bodyX, bodyY, bodyW2, 70); // body
          ellipse(bodyX, bodyY-70, 0, 27); // face
          fill(0, 60, 255);
          ellipse(187, 145, eyeSize, eyeSize);
          ellipse(211, 145, eyeSize, eyeSize);
          fill(255, 175, 0);
          
          stroke(255, 221, 0);
          line(177, 297, legWidth, legHeight);
          line(224, 298, leg2Width, legHeight);
          
          noStroke();
          fill(255, 130, 0);
          triangle(192, 161, 200, 175, 208, 161);
          
          fill(255, 255, 255);
          rect(0, 300, iceWidth, iceHeight);
          
          bodyW ++;
          bodyW2 ++;
          
          if (bodyW >= 500){
              background(109, 163, 0);
              fill(255, 0, 0);
              textSize(30);
              text("BARF!", 150, 200);
          }
      };
      
      
  
    }
  };
  var canvas = document.getElementById("canvas");
   var processing = new Processing(canvas, sketchProc);