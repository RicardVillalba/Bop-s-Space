'use strict'

class Bullet {
    constructor(canvas, y, speed) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
  
      this.size = 5;
      this.x = this.canvas.width + this.size;
      this.y = y;
      this.speed = speed*2;
    }

    draw() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
        //this.ctx.drawImage(img, this.x, this.y, this.size, this.size * 2);
      }
    
      updatePosition() {
        this.y = this.y + this.directionY * this.speed * 2;
        this.x = this.x + this.directionX * this.speed * 2;
      }
    
      isInsideScreen() {
        const playerRight = this.x + this.size;
        return playerRight > 0;
      }
    
      isOutsideScreen() {
        const playerRight = this.x + this.size;
        return playerRight < 0;
      }

      removeEnemy(enemy) {
        const bulletLeft = this.x;
        const bulletRight = this.x + this.size;
        const bulletTop = this.y;
        const bulletBottom = this.y + this.size;
    
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

      Shoot(direction) {
        draw()
      }


        
      }
    