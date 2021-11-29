let cam;
let r1, g1, b1;

function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  cam.hide();
}

function keyPressed(){
  if(key == "r"){
    r1=true;
    g1=false;
    b1=false;
  }
  else if(key == "g"){
    g1=true;
    r1=false;
    b1=false;
  }
  else if(key == "b"){
    b1=true;
    g1=false;
    r1=false;
  }
  else{
    r1 = false;
    g1=false;
    b1=false;
  }
}

function draw() {
  cam.loadPixels();
  for(let y = 0; y < height; y ++){
    for(let x = 0; x < width; x++)
      {
        let index = (x + y *cam.width)*4;
        let r = cam.pixels[index+0];
        let g = cam.pixels[index+1];
        let b = cam.pixels[index+2];
        let a = cam.pixels[index+3];

        let avg = (r+b+g)/3

        if(r1){
          cam.pixels[index+0]= r;
          cam.pixels[index+1]= 0;
          cam.pixels[index+2]= 0;
        }
        else if(g1){
          cam.pixels[index+0]= 0;
          cam.pixels[index+1]= g;
          cam.pixels[index+2]= 0;
        }
        else if(b1){
          cam.pixels[index+0]= 0;
          cam.pixels[index+1]= 0;
          cam.pixels[index+2]= b;
        }
      }
  }
  cam.updatePixels()
  image(cam, 0,0);
}
