let d = 120; //circle diameter
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
  diameterSlider.onChange = diameterSliderChange;
  degSlider = createSlider("Rotation", 200, 40, 100, 20, 0, 180);
  degSlider.val = 23;
  outlineCheckbox = createCheckbox("Outline", 340, 10, 20, 20, true);
}

function draw() {
  background(125);
  drawGui();

if (outlineCheckbox.val) {
  stroke("black");
} else {
  noStroke();
}

  circle(100,200,d);

  push();
  translate(200, 200);
  deg = degSlider.val;
  rotate(radians(deg));
  rect(0,0,60,60);
  pop();

  noStroke();
  text(diameterSlider.label, 140, 25);

}

function diameterSliderChange() {
  d = diameterSlider.val

}