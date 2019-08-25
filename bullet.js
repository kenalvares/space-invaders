// Bullet Class
class Bullet {
  // Construct (x,y) location and flag to destroy
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.toDestroy = false;
  }

  // Set flag to destroy true
  destroy = () => (this.toDestroy = true);

  // Render bullet
  render = () => {
    noStroke();
    fill(255, 200, 0);
    rect(this.x, this.y, 12, 24);
  };

  // Move bullet
  move = () => (this.y -= 7);

  // Check if bullet hit enemy
  hits = enemy => {
    let d = dist(this.x, this.y, enemy.x, enemy.y);
    if (d < 40) {
      return true;
    } else {
      return false;
    }
  };
}
