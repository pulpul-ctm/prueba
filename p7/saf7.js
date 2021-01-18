var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(700,500);
        
      var bookOpen = false;

      var books = [
          {
          title: "The Giver",
          author: "I.M. Generous",
          stars: 4,
          posX: 0,
          posY: 0,
          width: 20,
          height: 100,
          bookColour: color(214, 255, 219)
          },
          {
          title: "Blind Luck",
          author: "I.C. Nomore",
          stars: 2,
          posX: 0,
          posY: 0,
          width: 30,
          height: 110,
          bookColour: color(111, 217, 123)
          },
          {
          title: "Programming",
          author: "J.S. Easee",
          stars: 5,
          posX: 0,
          posY: 0,
          width: 40,
          height: 120,
          bookColour: color(227, 144, 0)
          },
          {
          title: "Spelling",
          author: "A.B.See",
          stars: 3,
          posX: 0,
          posY: 0,
          width: 20,
          height: 105,
          bookColour: color(156, 153, 255)
          }
      ];
      
      // draw shelf
      fill(173, 117, 33);
      rect(5, 150, 389, 10);
      
      
      var draw = function() {
          //background
          for(var i = 0; i <= 400; i++) {
              stroke(i/3, i/3, i/2);
              line(0, i, 400, i);
          }
          // draw shelf
          stroke(0, 0, 0);
          fill(173, 117, 33);
          rect(5, 150, 389, 10);
          // Instructions
          fill(255, 255, 255);
          textSize(15);
          text("Click and hold a book to view details",140, 50);
          // draw books
          var posX = 10; // the position to draw the next book
          for(var i = 0; i < books.length; i++) {
              textSize(12);
              fill(books[i].bookColour); //set the books colour from object
              rect(posX, 150 - books[i].height, books[i].width, books[i].height); // draw the book
              fill(0, 0, 0);
              pushMatrix();
              rotate(90);        
              text(books[i].title, 160-books[i].height, -5-posX-(0.5*books[i].width), 70, 100);
              popMatrix();
              books[i].posX = posX;                   //Set the position for finding with mouse later
              books[i].posY = 150 - books[i].height;   //
              posX += books[i].width; // move to the position for the next book
          }
          if(mouseIsPressed) {
              var title;
              var author;
              var stars;
              for(var i = 0; i < books.length; i++) {
                  if(mouseX > books[i].posX && mouseX < books[i].posX + books[i].width && mouseY > books[i].posY && mouseY < books[i].posY + books[i].height) {
                      fill(books[i].bookColour);
                      rect(115,170,170,220);
                      fill(0, 0, 0);
                      textSize(20);
                      text(books[i].title,200-(textWidth(books[i].title)/2), 225);
                      textSize(16);
                      text(books[i].author,200-(textWidth(books[i].author)/2), 255);
                      textSize(12);
                      text("Rating:",125, 350);
                      for (var j = 0; j < books[i].stars; j++) {
                          image(getImage("cute/Star"), 125 + j * 20, 350, 20, 30);
                      }
                  }
              }
          }
      };
      
      
      
      var openBook = function(book) {
          
      };
      
      
  
    }
  };
  var canvas = document.getElementById("canvas");
   var processing = new Processing(canvas, sketchProc);