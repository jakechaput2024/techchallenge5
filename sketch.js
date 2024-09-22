let d = 60; //circle diameter
let deg = 58;
let outline = true;

let gui;
let diameterSlider, degSlider, outlineCheckbox;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  strokeWeight(10);

  gui = createGui();
  diameterSlider = createSlider("Diameter", 200, 10, 100, 20, 10, 100);
}

function draw() {
  background(125);
  drawGui();

if (outline) {
  stroke("black");
} else {
  noStroke();
}

  circle(100,200,50,d);

  push();
  translate(200, 200);
  rotate(radians(deg));
  rect(0,0,60,60);
  pop();


}
