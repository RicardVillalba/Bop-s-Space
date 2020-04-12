"use strict";

class Player {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.lives = lives;
    this.size = 100;
    this.x = 50;
    this.y = this.canvas.height / 2;

    this.direction = 0; //0 not moving // -1 moving up // 1 moving down
    this.speed = 5;

    //positions for screen collider
    this.playerTop = this.y;
    this.playerBottom = this.y + this.size;
    this.screenTop = 0; // y = 0
    this.screenBootom = this.canvas.height;
  }

  setDirection(direction) {
    debugger;
    if (direction === "up") this.direction = -1;
    else if (direction === "down") this.direction = 1;
  }

  handleScreenCollision() {
    this.updatePosition();
    const { playerBottom, screenBootom, playerTop, screenTop } = this;

    //player's limit of screen in y
    if (playerBottom > screenBootom) this.setDirection("up");
    else if (playerTop < screenTop) this.setDirection("down");
  }

  updatePosition() {
    //update the player possition
    this.y = this.y + this.direction * this.speed;
    this.playerTop = this.y;
    this.playerBottom = this.y + this.size;
    this.screenTop = 0; // y = 0
    this.screenBootom = this.canvas.height;
  }

  removeLife() {
    this.lives -= 1;
  }

  draw() {
    this.ctx.fillStyle = "blue";

    // ctx.fillRect (x , y, with, height)
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  didCollide() {}
}
