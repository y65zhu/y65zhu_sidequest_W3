function drawScene2() {
  background(255, 220, 200);
  textAlign(CENTER, CENTER);
  fill(0);

  textSize(18);
  text("Stomach HP: " + health, width / 2, 140);

  text(
    "Second stall.\nYour confidence is rising.\nOr maybe nausea.",
    width / 2,
    240,
  );

  drawChoice(width / 2, 400, "🍜 Spicy Ramen");
  drawChoice(width / 2, 500, "🧋 Milk Tea");
}

function scene2MousePressed() {
  if (isHover({ x: width / 2, y: 400, w: 420, h: 70 })) {
    health -= 1;
  }

  if (health <= 0) {
    currentScreen = "ending_bad";
  } else {
    currentScreen = "scene3";
  }
}
