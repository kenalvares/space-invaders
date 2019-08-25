// Enemy Class
class Enemy {
  // Construct (x,y) location, size, flag to destroy, direction and img
  constructor(x, y, img, speed) {
    this.x = x;
    this.y = y;
    this.size = 60;
    this.toDestroy = false;
    this.xdir = speed;
    this.img = img;
  }

  // Render enemy
  render = () => {
    fill(155, 0, 200);
    image(this.img, this.x, this.y, this.size, this.size);
  };

  // Move enemy forward
  moveForward = () => {
    this.xdir *= -1;
    this.y += this.size;
  };

  // Move enemy sideways
  move = () => (this.x += this.xdir);

  // Destroy enemy
  destroy = () => (this.toDestroy = true);
}
