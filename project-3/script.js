//CURSOR
document.addEventListener('mousemove', function(e) {
    var cursor = document.querySelector('.custom-cursor');
    
   
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
//CLOCK

let sketchContainer;

  var r = 0;
var b = 255;
var r2 = 0;
var b2 = 255;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
  }
  

  function draw() {
   
    push();
    translate(windowWidth / 2, windowHeight / 2); 
    rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  background(255, 255, 255, 0)
  

  noStroke();
  fill("#E81A70");
  ellipse(0, 0, 275, 275);
 
  let r = map(sc, 0, 60, 100, 200);
  let b = map(sc, 0, 60, 255, 0);
  fill(r, 50, b);
  ellipse(0, 0, 250, 250);
  fill("#E81A70");
  ellipse(0, 0, 100, 100);

  strokeWeight(8);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);

  let minuteAngle = map(mn, 0, 60, 0, 360);

  let hourAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(secondAngle);
  let r2 = map(sc, 0, 60, 0, 255) 
  let b2 = map(sc, 0, 60, 255, 0)
  stroke(r2, 100, b2);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("#C9DAD9");
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("#D8E81A");
  line(0, 0, 50, 0);
  pop();

  stroke("#06B583");
  point(0, 0);

}
new p5(cursorSketch);
  
document.addEventListener('mousemove', function(e) {
    
    var cursor = document.querySelector('.custom-cursor');
    
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});


