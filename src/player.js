"use strict";

class Player {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.lives = lives;
    this.size = 60;
    this.x = 50;
    this.y = this.canvas.height / 2;

    this.directionY = 0; //0 not moving // -1 moving up // 1 moving down
    this.directionX = 0; //0 not moving // -1 moving left // 1 moving right
    this.speed = 1.5;

    //positions for screen collider Y
    this.playerTop = this.y;
    this.playerBottom = this.y + this.size;
    this.screenTop = 0; // y = 0
    this.screenBootom = this.canvas.height;
    //positions of screen collider X
    this.playerLeft = this.x;
    this.playerRight = this.x + this.size;
    this.screenLeft = 0; // y = 0
    this.screenRight = this.canvas.width;

    this.image = new Image();
    this.image.src = "img/player-sprite.png";
  }

  setDirection(direction) {
    if (direction === "up") this.directionY = -1;
    else if (direction === "down") this.directionY = 1;
    else if (direction === "left") this.directionX = -1;
    else if (direction === "right") this.directionX = 1;
  }

  handleScreenCollision() {
    //    if (this.x < 1 || this.playerRight > this.screenRight-1 ){
    //    debugger;
    //  }
    this.updatePosition();

    const {
      playerBottom,
      screenBootom,
      playerTop,
      screenTop,
      playerLeft,
      playerRight,
      screenLeft,
      screenRight,
    } = this;

    //player's limit of screen in y
    if (playerBottom > screenBootom) this.setDirection("up");
    else if (playerTop < screenTop) this.setDirection("down");

    if (playerRight > screenRight) this.setDirection("left");
    else if (playerLeft < screenLeft) this.setDirection("right");
  }

  updatePosition() {
    //update the player possition
    this.y = this.y + this.directionY * this.speed;
    this.x = this.x + this.directionX * this.speed;

    // Update properties after changing value to y
    this.playerTop = this.y;
    this.playerBottom = this.y + this.size;
    this.screenTop = 0; // y = 0
    this.screenBootom = this.canvas.height;

    // Update properties after changing value to x
    this.playerLeft = this.x;
    this.playerRight = this.x + this.size;
    this.screenLeft = 0; // y = 0
    this.screenRight = this.canvas.width;
  }

  removeLife() {
    this.lives -= 1;
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);

    //this.ctx.fillStyle = "white";
    // ctx.fillRect (x , y, with, height)
    //this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  didCollide(enemy) {
    const playerLeft = this.x;
    const playerRight = this.x + this.size;
    const playerTop = this.y;
    const playerBottom = this.y + this.size;

    const enemyLeft = enemy.x;
    const enemyRight = enemy.x + enemy.size;
    const enemyTop = enemy.y;
    const enemyBottom = enemy.y + enemy.size;

    const crossLeft = enemyLeft <= playerRight && enemyLeft >= playerLeft;
    const crossRight = enemyRight >= playerLeft && enemyRight <= playerRight;

    const crossTop = enemyTop <= playerBottom && enemyTop >= playerTop;
    const crossBottom = enemyBottom >= playerTop && enemyBottom <= playerBottom;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  } //true or false if player touch enemy
}
