let cam;
let butterfly;
let pixels=[];

function preload() {
  butterfly = loadImage("img/butterfly.png");
}

function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  background(220);
  for(let i = 0; i < pixels.length; i++){
    xValue = pixels[i][0];
    yValue = pixels[i][1];
    b = new Butterfly(xValue,yValue, 0);
    b.display();
    b.move();
  }
  cam.loadPixels();
  for(let y = 0; y < height; y ++){
    for(let x = 0; x < width; x++)
      {
        let index = (x + y *cam.width)*4;
        let r = cam.pixels[index+0];
        let g = cam.pixels[index+1];
        let b = cam.pixels[index+2];
        let a = cam.pixels[index+3];

        let avg = (r+b+g)/3;

        if(avg<25){
          cam.pixels[index+0]=r*5;
          // cam.pixels[index+1]=255
          // cam.pixels[index+2]=255
          pixels.push([x,y]);
        }
      }
  }
  cam.updatePixels()
  image(cam, 0,0);
}

class Butterfly{
  constructor(x,y,i){
    this.x=x;
    this.y=y;
    this.i=i;
    this.sinValue = 0;
    this.mapValue = 1;
    this.flapFreq = random(15, 20);
    this.Xspd = 0;
    this.Yspd = 0;
    this.set = 0;
  }
  display() {
    push();
    translate(this.x, this.y);
    scale(0.1, 0.1);
    rotate(this.i);
    this.sinValue = sin(radians(frameCount * this.flapFreq));
    this.mapValue = map(this.sinValue, -1, 1, 0.5, 1);
    scale(Math.pow(this.mapValue, this.set), 1);
    // fill(this.c);
    image(butterfly,-butterfly.width/2,0);
    stroke(255/2);
    pop();
  }
  changeSpeed(mx,my) {
    let range = 2.5;
    if(this.x> (mx-width/2) && this.y > (my-height/2)){
      this.Xspd =random(0,range);
      this.Yspd=random(0,range);
    }
    else if(this.x<(mx-width/2) && this.y >(my-height/2)){
      this.Xspd=random(-range,0);
      this.Yspd=random(0,range);
    }
    else if(this.x<(mx-width/2) && this.y < (my-height/2)){
      this.Xspd=random(-range,0);
      this.Yspd=random(-range,0);
    }
    else{
      this.Xspd=random(0,range);
      this.Yspd=random(-range,0);
    }
    //this.Xspd=random(-range,range)
    //this.Yspd=random(-range,range)
    this.set = 1;
  }
  move() {
    push();
    rotate(-this.i);
    this.x += this.Xspd;
    this.y += this.Yspd;
    pop();
  }
}
