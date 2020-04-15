"use strict";

class Enemy {
  constructor(canvas, y, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 100;
    this.x = this.canvas.width + this.size;
    this.y = y;
    this.speed = speed;
    this.image = new Image();
    this.image.src = "img/enemy-sprite.png";
  }

  draw() {
    //console.log("img", this.image);
    this.ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.size,
      this.size
    );

    //this.ctx.fillStyle = "white";
    //this.ctx.fillRect(this.x, this.y, this.size, this.size);
    //this.ctx.drawImage(img, this.x, this.y, this.size, this.size * 2);
  }

  updatePosition() {
    this.x = this.x - this.speed;
  }

  isInsideScreen() {
    const playerRight = this.x + this.size;
    return playerRight > 0;
  }

  isOutsideScreen() {
    const playerRight = this.x + this.size;
    return playerRight < 0;
  }
}
