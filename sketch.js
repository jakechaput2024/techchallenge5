let d = 120; //circle diameter
let deg = 58;
let outline = true;

let j;
let x, y, velX, velY;

let gui;
let diameterSlider, degSlider, outlineCheckbox;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  strokeWeight(10);

  gui = createGui();
  gui.setRounding(1);

  j = createJoystick("Joystick", 10, 210, 175, 175, -1, 1, 1, -1);
  x     = 300;
  y     = 100;
  velX  = 0;
  velY  = 0;


  diameterSlider = createSlider("Diameter", 200, 10, 100, 20, 10, 300);
  diameterSlider.onChange = diameterSliderChange;
  degSlider = createSlider("Rotation", 200, 40, 100, 20, 0, 180);
  diameterSlider.setStyle({
    fillBg:color("red"),
    strokeWeight: 4
  })
  degSlider.isInteger = true;
  degSlider.val = 23;
  outlineCheckbox = createCheckbox("Outline", 340, 10, 20, 20, true);
}

function draw() {
  background(125);
  drawGui();

  if (j.isChanged) {
    // Print a message when Slider 1 is changed
    // that displays its value.
    print(j.label + " = {" + j.valX + ", " + j.valY + "}");
  }
  
  // Use Joystick's output to change velocity
  velX += j.valX;
  velY += j.valY;  

if (outlineCheckbox.val) {
  stroke("black");
} else {
  noStroke();
}

  circle(x + velX, y + velY,x + velX, y + velY,d);

  push();
  translate(300, 200);
  deg = degSlider.val;
  rotate(radians(deg));
  rect(0,0,degSlider.val,degSlider.val);
  pop();

  noStroke();
  text(diameterSlider.label, 140, 25);

}

function diameterSliderChange() {
  d = diameterSlider.val

}