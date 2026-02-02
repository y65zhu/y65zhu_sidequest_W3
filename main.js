let currentScreen = "start";
let health = 3;

function setup() {
  createCanvas(800, 800);
  textFont("Trebuchet MS");
}

function draw() {
  if (currentScreen === "start") drawStart();
  else if (currentScreen === "instr") drawInstr();
  else if (currentScreen === "scene1") drawScene1();
  else if (currentScreen === "scene2") drawScene2();
  else if (currentScreen === "scene3") drawScene3();
  else if (currentScreen === "ending_good") drawEndingGood();
  else if (currentScreen === "ending_okay") drawEndingOkay();
  else if (currentScreen === "ending_bad") drawEndingBad();
}

function mousePressed() {
  if (currentScreen === "start") startMousePressed();
  else if (currentScreen === "instr") instrMousePressed();
  else if (currentScreen === "scene1") scene1MousePressed();
  else if (currentScreen === "scene2") scene2MousePressed();
  else if (currentScreen === "scene3") scene3MousePressed();
  else if (currentScreen.includes("ending")) endingMousePressed();
}

function keyPressed() {
  if (key === "r" || key === "R") {
    health = 3;
    currentScreen = "start";
  }
}

function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 && // mouse is right of left edge
    mouseX < x + w / 2 && // mouse is left of right edge
    mouseY > y - h / 2 && // mouse is below top edge
    mouseY < y + h / 2 // mouse is above bottom edge
  );
}

function endingMousePressed() {
  health = 3;
  currentScreen = "start";
}

function drawChoice(x, y, label) {
  rectMode(CENTER);
  const w = 420;
  const h = 70;
  const hover = isHover({ x, y, w, h });

  fill(hover ? 255 : 245);
  rect(x, y, w, h, 12);

  fill(0);
  textSize(18);
  text(label, x, y);
}
