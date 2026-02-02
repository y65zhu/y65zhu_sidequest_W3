function drawScene3() {
  background(255, 200, 180);
  textAlign(CENTER, CENTER);
  fill(0);

  textSize(18);
  text("Stomach HP: " + health, width / 2, 140);

  text("Final stall.\nThis is your last chance.", width / 2, 240);

  drawChoice(width / 2, 400, "🦂 Fried Scorpion");
  drawChoice(width / 2, 500, "🍡 Sweet Rice Cake");
}

function scene3MousePressed() {
  if (isHover({ x: width / 2, y: 400, w: 420, h: 70 })) {
    health -= 2;
  }

  if (isHover({ x: width / 2, y: 500, w: 420, h: 70 })) {
    health += 1;
  }

  if (health >= 3) currentScreen = "ending_good";
  else if (health > 0) currentScreen = "ending_okay";
  else currentScreen = "ending_bad";
}
