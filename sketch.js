function setup() {
  createCanvas(windowWidth,windowHeight)
  background(51, 10, 0)
  frameRate(70)
}

function draw() {
//starcenter
  noStroke()
  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 50.0);
  star(0, 0, 80, 100, 40); 
  pop();
  
}
//spin
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);

//mousetrail
noStroke()
 if (mouseIsPressed) {
    fill (255, 255, 204);
  } else {
    fill (255, 51, 0);
  }
  ellipse (mouseX,mouseY,400,1);


//random cirlce generator
frameRate(10)
var x = random(width)
  var y = random(height)
  var w = 8
  var h = 8
  ellipse(x,y,w,h)

//center ellipse
translate(width/2, height/2);
ellipse(0, 0, 200, 200);
fill(51, 0, 0,50)
ellipse(0,0,300,300)
fill(51, 0, 0,20)
ellipse(0,0,500,500)
fill(51, 0, 0,10)
ellipse(0,0,700,700)

}