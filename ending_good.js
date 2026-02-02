function drawEndingGood() {
  background(200, 255, 200);
  textAlign(CENTER, CENTER);
  textSize(36);
  text("You conquered the night market 🍜", width / 2, 300);
  textSize(18);
  text("Press R to restart", width / 2, 360);
}

function endingMousePressed() {
  health = 3;
  currentScreen = "start";
}
