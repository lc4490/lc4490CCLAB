let dios = [];
let sliderSpd;
let sliderSz;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sliderSpd = document.getElementById("speed");
  sliderSz = document.getElementById("size");
}

function mousePressed() {
  if(mouseY > 0 && mouseX > 0){
    x = mouseX;
    y = mouseY;
    let spdRange = int(sliderSpd.value);
    let szRange = int(sliderSz.value);
    negX = random();
    negY = random();
    spdX = spdRange;
    spdY = spdRange;
    if(negX > 0.5){
      spdX*=-1;
    }
    if(negY > 0.5){
      spdY*=-1;
    }
    size = szRange/2;
    temp = new LilDio(x, y, spdX, spdY, size);
    dios.push(temp);
}
}

function draw() {
  background(0);
  for (let i = 0; i < dios.length; i++) {
    dios[i].display();
    dios[i].move();
  }
  while (dios.length > 25) {
    dios.splice(0, 1);
  }
}
function keyPressed(){
  if(key==" "){
  while(dios.length>0)
    {
  dios.splice(0,1)
    }
}
}

class LilDio {
  constructor(x, y, spdX, spdY, i) {
    this.x = x;
    this.y = y;
    this.s = i;
    this.xSpd = spdX;
    this.ySpd = spdY;
    this.sinValue = 0;
    this.mapValue = 0;
    this.amp = 0;
    this.distance = 0;
  }
  dance() {
    this.distance = dist(this.x, this.y, mouseX, mouseY);
    this.amp = map(this.distance, 0, width, 1, 15);
    this.x += cos(frameCount / 2) * this.amp;
    this.y += sin(frameCount / 2) * this.amp;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
    console.log(this.arrSize);
    if (this.x > width+100 || this.x < 0) {
      //arrX[i] = -150 * arrSize[i];
      //spdX[i]=random(1,25)
      this.xSpd = this.xSpd * -1;
    }
    if (this.y > height+100 || this.y < 0) {
      this.ySpd = this.ySpd * -1;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    noFill();
    stroke("lightblue");
    this.drawDino(0, 0, this.s);
    for (let i = 0; i < this.amp; i++) {
      this.drawParticles();
    }
    pop();
  }
  drawParticles() {
    let range = 100;
    let dia = random(2, 15);
    stroke(random(255), random(255), random(255));
    ellipse(random(-range, range), random(-range, range), dia, dia);
  }
  drawDino(x, y, s) {
    push();
    scale(s);
    translate(x, y);
    this.drawScales();
    this.drawLeg(-20, 75, 1);
    this.drawLeg(10, 75, -1);
    this.drawHead(x, y);
    this.drawBody();
    this.drawRHand();
    this.drawLHand();
    pop();
  }

  drawHead() {
    push();
    fill("lightblue");
    stroke(0);
    rect(-57, 0, 50, 85);
    ellipse(-5, 0, 110, 100);
    arc(-3, 25, 105, 120, radians(345), radians(95));
    noStroke();

    ellipse(-3, 25, 105, 120);
    //eyes
    fill(0);
    ellipse(20, -10, 7, 5);
    ellipse(-10, -10, 7, 5);
    fill(255);
    ellipse(21, -11, 7 / 2, 5 / 2);
    ellipse(-9, -11, 7 / 2, 5 / 2);
    //mouth
    push();
    translate(-5, 0);
    stroke(0);
    noFill();
    arc(0, 0, 25, 10, radians(0), radians(90));
    arc(25, 0, 25, 10, radians(90), radians(180));
    translate(-5, 0);
    stroke("pink");
    line(-13, 3, -17, 0);
    line(-13, 1, -17, -2);
    line(-13, -1, -17, -4);

    line(41, 0, 37, 3);
    line(41, -2, 37, 1);
    line(41, -4, 37, -1);
    pop();
    stroke(0);
    noStroke();
    pop();
  }

  drawBody() {
    push();
    fill(255);
    stroke(0);
    ellipse(5, 52, 50, 65);
    pop();
  }

  drawScales() {
    push();
    stroke(0);
    fill("skyblue");
    ellipse(-45, -28, 35, 35);
    ellipse(-55, 0, 35, 35);
    ellipse(-58, 30, 35, 35);
    ellipse(-58, 60, 35, 35);
    pop();
  }

  drawRHand() {
    push();
    fill("lightblue");
    stroke(0);
    translate(25 + 35 / 2, 40);
    this.sinValue = sin(radians(frameCount * 10));
    this.mapValue = map(this.sinValue, -1, 1, -0.3, 0.3);
    rotate(this.mapValue);
    ellipse(-35 / 2, 0, 35, 20);
    pop();
  }

  drawLHand() {
    push();
    fill("lightblue");
    stroke(0);
    translate(-15 - 35 / 2, 40);
    this.sinValue = sin(radians(frameCount * 10));
    this.mapValue = map(this.sinValue, -1, 1, -0.3, 0.3);
    rotate(this.mapValue);
    ellipse(35 / 2, 0, 35, 20);
    pop();
  }

  drawLeg(x, y, i) {
    push();
    stroke(0);
    translate(x, y);
    fill("lightblue");
    this.sinValue = sin(radians(frameCount * 10));
    this.mapValue = map(this.sinValue, -1, 1, -0.5, 0.5);
    rotate(this.mapValue * i);
    ellipse(0, 15, 25, 30);
    pop();
  }
}
