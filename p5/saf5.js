var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(700,500);
     
      var xPositions = [500,259,221];
var yPositions = [0,200,150];
for(var x=0;x<50;x++){
    xPositions.push (random(0.680));
    yPositions.push (random(0.500));
}

draw = function() {
    background(1, 52, 61);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(236, 222, 255);
        var nubeX = 100;
        var nubeY = 40;
        
        ellipse(nubeX+250,nubeY,300,120);
        ellipse(nubeX,nubeY,100,120);
        ellipse(nubeX,nubeY,300,120);
        
        fill(235, 164, 228);
        ellipse(xPositions[i]-109, yPositions[i]+111, 10, 20);
        yPositions[i] += 10;
        
        fill(235, 164, 228);
        ellipse(xPositions[i]-300, yPositions[i]+11, 12, 20);
        fill(13, 255, 0);
        if(yPositions[i] > 450){
            yPositions[i] = 0;
        }
    }
    
};
mouseClicked = function(){
    xPositions.push(mouseX);
    yPositions.push(mouseY);
};
  
    }
  };
  var canvas = document.getElementById("canvas");
   var processing = new Processing(canvas, sketchProc);