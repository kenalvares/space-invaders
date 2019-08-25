// Shows 'Heads-up Display'
const showHUD = (score, ammunition, speed) => {
  textSize(25);
  fill(255);
  text("Score: " + score, 10, 30);
  text("Ammo: " + ammunition, width / 3, 30);
  text("Enemy Speed: " + speed, 2 * (width / 3), 30);
};

// Checks Ammunition Level
const checkAmmo = ammunition => {
  if (ammunition === 0) {
    gameOver();
  }
};

// Spawns New Enemies
const spawnEnemies = () => {
  ammo += 15;
  enemyImg = loadImage(random(enemySprites));
  enemySpeed += 1;
  for (let i = 0; i < 6; i++) {
    enemies[i] = new Enemy(i * 80 + 80, 60, enemyImg, enemySpeed);
  }
};

// Checks if Enemy is Touching An Edge
const checkEnemyTouchEdge = (enemy, type) => {
  if (type === "s") {
    if (enemy.x > width - 60 || enemy.x < 0) {
      return true;
    }
  } else if (type === "b") {
    if (enemy.y > height - 125) {
      return true;
    }
  }
};

// Ends Gameplay
const gameOver = () => {
  createCanvas(600, 600);
  background(00);
  textSize(40);
  text("Game Over", width / 3, height / 2);
  text("Score: " + score, width / 3 + 30, height / 2 + 50);
  fill(255);
  continueGame = false;
};
