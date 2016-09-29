

// Declare an array
var points = []; 

function setup() {
  createCanvas(1920, 1080);
  frameRate(300);
}

function draw() {
  background(map(mouseY, 0, 1080, 0, 255));
  
  // New location
  var point = {
    x: mouseX,
    y: mouseY
  }
  
  points.push(point); // Update the last spot in the array with the mouse location.

  if (points.length > 50) {
    points.splice(0,1);
  }
  
  // Draw everything
  for (var i = 0; i < points.length; i++) {
     // Draw an ellipse for each element in the arrays. 
     // Color and size are tied to the loop's counter: i.
    noStroke();
    //fill it with a random color between 0 and 255
    fill(random(255));
    //draws a square at the x and y coordinates of the current point in the array
    rect(points[i].x,points[i].y,50,50);
    //makes the fill show up on the changing background
    fill(0+points[i].x/2);
    //draws an ellipse at the coordinates given
    ellipse(points[i].y * 2, points[i].x / 2, i/2, i/2);
  }
}