var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(700,500);
      fill(63, 88, 245);
      rect(44, 14, 331, 168, 2);
      rect(44, 181, 331, 198, 2);
      
      rect(44, 180, 331, 26, 2);
      
      //inline//
      fill(15, 15, 15);
      rect(68, 37, 287, 126, 2);
      rect(107, 214, 200, 140, 2);
      
      //buttons, left side//
      fill(240, 231, 231);
      ellipse(76, 255, 50, 50);
      
      rect(65, 290, 19, 56, 2);
      rect(49, 308, 56, 19, 2);
      
      //buttons, left side//
      
      ellipse(341, 257, 24, 25);
      fill(8, 1, 1);
      text("X", 336, 254, 84, 78);
      fill(240, 231, 231);
      ellipse(361, 282, 24, 25);
      fill(8, 1, 1);
      text("A", 356, 279, 84, 78);
      fill(240, 231, 231);
      ellipse(323, 282, 24, 25);
      fill(8, 1, 1);
      text("Y", 318, 279, 84, 78);
      fill(240, 231, 231);
      ellipse(341, 307, 24, 25);
      fill(8, 1, 1);
      text("B", 337, 304, 84, 78);
      
      //buttons lower left side//
      
      fill(240, 231, 231);
      rect(317, 352, 23, 24, 2);
      fill(8, 1, 1);
      noFill();
      arc(329, 366, 14, 14, -434, -105);
      line(329, 363, 329, 355);
      
      //buttons lower middle//
      
      line(174, 378, 174, 355);
      line(247, 355, 247, 378);
      text("Home", 192, 363, 30, 47);
      line(108, 378, 108, 355);
      text("Select", 123, 363, 100, 20);
      line(307, 355, 307, 378);
      text("Start", 264, 363, 30, 47);
      
      //Text//
      fill(255, 255, 255, 255);
      textSize(30);
      text("3DS!", 184, 62);
      textSize(25);
      text("Play Cool Video Games!", 86, 118);
      
      
  
    }
  };
  var canvas = document.getElementById("canvas");
   var processing = new Processing(canvas, sketchProc);