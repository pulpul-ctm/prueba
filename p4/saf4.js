var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(700,500);
      var xPos = 401;
      var yPos = 0;
      var starSize=10;
      var xPos2=0;
      var yPos2=0;
      var starSize2=10;
      background(29,40,115);
      draw = function() {
          
          fill(255, 242, 0);
          ellipse(xPos, yPos, starSize, starSize);
          xPos-=2;
          yPos+=2;
          starSize+=1;
          ellipse(xPos2,yPos2,starSize,starSize);
          xPos2+=2;
          yPos2+=2;
          
      };
      
  
    }
  };
  var canvas = document.getElementById("canvas");
   var processing = new Processing(canvas, sketchProc);