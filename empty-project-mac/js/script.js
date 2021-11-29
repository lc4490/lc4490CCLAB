let sound, song, amp, mic;
function preload(){
  // load image, sound, text, table, etc.
  sound = loadSound("assets/beat.mp3");
  song = loadSound("assets/song.mp3");
}
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.mousePressed(userStartAudio);
  background(220);
  amp = new p5.Amplitude();
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0,50);

  let volume = mic.getLevel();
  console.log(volume);
  let dia = map(volume, 0, 1, 10, 500);
  noStroke();
  fill("red");
  ellipse(width/2, height/2, dia);

}
// function mousePressed(){
//   sound.play();
// }

function keyPressed(){
  if(key == "p"){
    if(!song.isPlaying()){
      song.play();
    }
  }
  else if(key == "s"){
    song.stop();
  }

}
