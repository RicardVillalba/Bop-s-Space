"use strict";

class Bullet {
  constructor(canvas, speed, x, y) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.sizeWidth = 10;
    this.sizeHight = 2;
    this.x = x;
    this.y = y;
    this.speed = speed * 2;
    this.image = new Image();
    this.image.src = "img/bullet.png";
  }

  draw() {
    console.log("img", this.image);
    this.ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.sizeWidth,
      this.sizeHight
    );
    //this.ctx.fillStyle = "red";
    //this.ctx.fillRect( this.x, this.y, this.size, this.size);
  }

  updatePosition() {
    this.x = this.x + this.speed * 2;
  }

  isInsideScreen() {
    const bulletRight = this.x + this.sizeWidth;
    return bulletRight < this.canvas.width;
  }

  didCollide(enemy) {
    const bulletLeft = this.x;
    const bulletRight = this.x + this.sizeWidth;
    const bulletTop = this.y;
    const bulletBottom = this.y + this.sizeHight;

    const enemyLeft = enemy.x;
    const enemyRight = enemy.x + enemy.size;
    const enemyTop = enemy.y;
    const enemyBottom = enemy.y + enemy.size;

    const crossLeft = enemyLeft <= bulletRight && enemyLeft >= bulletLeft;
    const crossRight = enemyRight >= bulletLeft && enemyRight <= bulletRight;

    const crossTop = enemyTop <= bulletBottom && enemyTop >= bulletTop;
    const crossBottom = enemyBottom >= bulletTop && enemyBottom <= bulletBottom;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  } //true or false if player touch enemy
}
