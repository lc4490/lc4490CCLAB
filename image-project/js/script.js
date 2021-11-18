let img;

function preload(){
  img = loadImage("img/eren.jpg");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(220);

}

function keyPressed(){
  if (key == " "){
    saveCanvas("mySketch","png");
  }
}

function draw() {
  background(220);
  image(img,mouseX,mouseY);
}
