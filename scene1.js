function drawScene1() {
  background(255, 240, 200);
  textAlign(CENTER, CENTER);
  fill(0);

  textSize(32);
  text("Street Food Roulette", width / 2, 120);

  textSize(18);
  text("Stomach HP: " + health, width / 2, 160);

  text("First stall.\nYou are starving.\nWhat do you eat?", width / 2, 260);

  drawChoice(width / 2, 400, "🥟 Steamed Dumplings");
  drawChoice(width / 2, 500, "🐙 Suspicious Octopus");
}

function scene1MousePressed() {
  if (isHover({ x: width / 2, y: 400, w: 420, h: 70 })) {
    health = min(health + 1, 4);
    currentScreen = "scene2";
  }

  if (isHover({ x: width / 2, y: 500, w: 420, h: 70 })) {
    health -= 1;
    currentScreen = health <= 0 ? "ending_bad" : "scene2";
  }
}
