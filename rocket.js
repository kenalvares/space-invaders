// Rocket Class
class Rocket {
  // Construct width, direction & img
  constructor(img) {
    this.x = width / 2;
    this.xdir = 0;
    this.img = img;
  }

  // Render Rocket
  render = () => {
    fill(255);
    image(this.img, this.x - 30, height - 70, 60, 60);
  };

  // Check if rocket touches side
  checkSideEdge = rocket => {
    if (this.x > width - 40 || this.x < 40) {
      this.setDir(0);
    }
  };

  // Set direction of rocket
  setDir = dir => (this.xdir = dir);

  // Move rocket
  move = () => (this.x += this.xdir * 5);
}
