// Global variables
let rocket, // rocket instance
  enemies = [], // array containing enemy instances
  bullets = [], // array containing bullet instances
  rocketImg, // rocket image object
  enemyImg, // enemy image object
  enemySpeed = 1, // speed of enemy aliens
  continueGame = true, // is user allowed to play?
  ammo = 20, // bullet counter
  score = 0; // score counter

// Different Types of Enemy Aliens
const enemySprites = [
  "images/enemy.png", // Green
  "images/enemy2.png", // Blue
  "images/enemy3.png" // Red
];

// Load images prior to invoking setup function
function preload() {
  rocketImg = loadImage("images/ship.png");
  enemyImg = loadImage(random(enemySprites));
}

// Initial setup
function setup() {
  createCanvas(600, 600);
  rocket = new Rocket(rocketImg); // Create new rocket
  for (let i = 0; i < 6; i++) {
    enemies[i] = new Enemy(i * 80 + 80, 60, enemyImg, enemySpeed); // Create array of enemies
  }
}

// Loop
function draw() {
  // Flags to set if enemy touches a wall
  let sideTouched = false,
    bottomTouched = false;

  background(00);
  checkAmmo(ammo); // Check if bullets are remaining
  showHUD(score, ammo, enemySpeed); // Display 'heads-up display' with score, ammo and speed
  rocket.render(); // Render rocket
  rocket.move(); // Move rocket
  rocket.checkSideEdge(); // check if rocket touched a wall while moving

  for (enemy of enemies) {
    enemy.render(); // Render enemy alien
    enemy.move(); // Move alien

    sideTouched = checkEnemyTouchEdge(enemy, "s"); // Is enemy touching side?
    bottomTouched = checkEnemyTouchEdge(enemy, "b"); // Is enemy touching bottom?

    if (sideTouched) {
      for (enemy of enemies) {
        enemy.moveForward(); // Move enemy forward
      }
    }

    if (bottomTouched) {
      gameOver(); // End Game
    }
  }
  for (bullet of bullets) {
    bullet.render(); // Render bullet
    bullet.move(); // Move bullet

    for (enemy of enemies) {
      if (bullet.hits(enemy)) {
        enemy.destroy(); // Destroy enemy
        bullet.destroy(); // Destroy bullet
      }
    }
  }

  for (let i = enemies.length - 1; i >= 0; i--) {
    if (enemies[i].toDestroy) {
      // If enemy is destroyed
      enemies.splice(i, 1); // Remove enemy from enemies array
      score++; // +1 point
    }
    if (enemies.length <= 0) {
      // If enemies array is empty
      spawnEnemies(); // Spawn new enemies
    }
  }
  for (let i = bullets.length - 1; i >= 0; i--) {
    if (bullets[i].toDestroy) {
      // If bullet is destroyed
      bullets.splice(i, 1); // Remove bullet from bullets array
    }
  }
}

function keyReleased() {
  if (continueGame) {
    // Can user play?
    if (key != " ") {
      rocket.setDir(0); // Stop rocket movement
    }
  }
}

function keyPressed() {
  if (continueGame) {
    if (key === " ") {
      var bullet = new Bullet(rocket.x, height - 80); // New bullet instance
      bullets.push(bullet); // Add bullet to bullets array
      ammo--; // Decrement ammunition
    }
    if (keyCode === RIGHT_ARROW) {
      rocket.setDir(1); // Move rocket right
    } else if (keyCode === LEFT_ARROW) {
      rocket.setDir(-1); // Move rocket left
    }
  }
}
