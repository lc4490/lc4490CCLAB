let cam;

function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  background(0);

  let gridSize = 15;
  cam.loadPixels();
  for (let y = 0; y < cam.height; y+=gridSize) {
    for (let x = 0; x < cam.width; x+=gridSize) {
      let index = (x + y * cam.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      let avg = (r + g + b) / 3;
      let dia = floor( map(avg, 0, 255, 0, 20) );
      fill(r,g,b);
      noStroke();
      ellipse(x, y, dia, dia);
    }
  }
  cam.updatePixels();
  // image(cam, 0, 0);
}
