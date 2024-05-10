 

var eyeSketch = function(p) {
    let whiteEye, blackPupil, glossyLayer;
    let scaleFactor = 0.5;
    let followCursor = true; 
    let animationVisible = true; 
  
    let angle = 0;     
    let scalar = 50;    
    let startX = 130;   
    let startY = 150;  
    let eyeSize = 200; 
  
    p.preload = function() {
        whiteEye = p.loadImage('whiteEye.png');
        blackPupil = p.loadImage('blackPupil.png');
        glossyLayer = p.loadImage('glossyLayer.png');
    }
  
    p.setup = function() {
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent('eye-container'); 
    }
  
    p.draw = function() {
        p.clear();
        let rows = 35;   
        let cols = 45;  
        let padding = -120;
        let margin = 0;  
  
        let totalWidth = cols * (eyeSize + padding);
        let totalHeight = rows * (eyeSize + padding);
  
        let startX = (p.width - totalWidth) / 2;
        let startY = (p.height - totalHeight) / 2;
  
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let x = startX + j * (eyeSize + padding);
                let y = startY + i * (eyeSize + padding);
                displayEyeWithCursor(x, y, eyeSize);
            }
        }
    }
  
    function displayEyeWithCursor(x, y, d) {
        p.imageMode(p.CENTER);
  

        p.image(whiteEye, x, y, d, d);
  
        let pr = 0.7 * d; 
  
       
        let angle = p.atan2(p.mouseY - y, p.mouseX - x);
  
        let distance = p.min(d / 2 - pr / 2, p.dist(x, y, p.mouseX, p.mouseY)) * 0.5;
  
      
        let x2 = x + distance * p.cos(angle);
        let y2 = y + distance * p.sin(angle);

        p.image(blackPupil, x2, y2, pr * 2, pr * 2);
  
   
        p.image(glossyLayer, x, y, d, d);
    }
  };
  
  
  new p5(eyeSketch);
  
  

var cursorSketch = function(p) {
    let secondAngle = 0;
    let minuteAngle = 0;
    let hourAngle = 0;
  
    p.setup = function() {
      let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.parent('cursor-container'); 
      p.angleMode(p.DEGREES);
      p.noCursor(); 
    }
  
    p.windowResized = function() {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
  
    p.draw = function() {
      p.clear();
      p.background(0, 0);
      p.translate(p.mouseX, p.mouseY); 
  

      secondAngle += 0.1; 
      minuteAngle += 0.06;
      hourAngle += 0.03;
  
    
      p.noStroke();
      p.fill("#E81A70");
      p.ellipse(0, 0, 275, 275);
  
    
      let r = p.map(p.second(), 0, 60, 100, 200);
      let b = p.map(p.second(), 0, 60, 255, 0);
      p.fill(r, 50, b);
      p.ellipse(0, 0, 250, 250);
      p.fill("#E81A70");
      p.ellipse(0, 0, 100, 100);
  
      
      p.push();
      p.rotate(secondAngle);
      let r2 = p.map(p.second(), 0, 60, 0, 255); 
      let b2 = p.map(p.second(), 0, 60, 255, 0);
      p.stroke(r2, 100, b2);
      p.strokeWeight(8);
      p.line(0, 0, 100, 0);
      p.pop();
  

      p.push();
      p.rotate(minuteAngle);
      p.stroke("#C9DAD9");
      p.strokeWeight(8);
      p.line(0, 0, 75, 0);
      p.pop();
  

      p.push();
      p.rotate(hourAngle);
      p.stroke("#D8E81A");
      p.strokeWeight(8);
      p.line(0, 0, 50, 0);
      p.pop();
  
      p.stroke("#06B583");
      p.point(0, 0);
    }
  };
  

  new p5(cursorSketch);
  