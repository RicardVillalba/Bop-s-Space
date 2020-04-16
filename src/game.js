"use strict";

class Game {
  constructor() {
    this.player = null;
    this.enemies = [];
    this.gameIsOver = false;
    this.score = 0;
    this.gameScreen = null;
    this.canvas = null;
    this.ctx = null;
    this.shoot = false;
    this.bullets = [];
  }

  //initiate the player, set the canvas and start the canvas loop
  start() {
    //save reference to canvas and container, create ctx
    const canvasContainer = document.querySelector(".canvas-container");
    this.canvas = this.gameScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    // Save the reference to lives and score elements
    this.livesElement = this.gameScreen.querySelector(".lives .value");
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    //set the canvas dimensions
    this.containerWidth = canvasContainer.clientWidth;
    this.containerHeight = canvasContainer.clientHeight;

    this.canvas.width = this.containerWidth;
    this.canvas.height = this.containerHeight;

    this.player = new Player(this.canvas, 5);
    console.log(this.player.image);
    // event listener for moving the player
    function handleKeyDown(event) {
      if (event.key === "ArrowUp") {
        //console.log("up");
        this.player.setDirection("up");
      } else if (event.key === "ArrowDown") {
        //console.log("down");
        this.player.setDirection("down");
      } else if (event.key === "ArrowLeft") {
        //console.log("up");
        this.player.setDirection("left");
      } else if (event.key === "ArrowRight") {
        //console.log("down");
        this.player.setDirection("right");
      }

      if (event.key === "s") {
        //console.log("shooting");

        this.shoot = true;
      }
    }
    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.addEventListener("keydown", boundHandleKeyDown);

    // eventlistener fo shooting
    /* 
     this.bullet = new Bullet(this.canvas, 5);
    
    // event listener shoot
    function handleKeyDown(event) {
   
    }
    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.addEventListener("keydown", boundHandleKeyDown);
    */
    //Starts  the canvas  request animation frame loop
    this.startLoop();
  }

  startLoop() {
    const loop = function () {
      //console.log("in loop");
      //console.log(this.player.x);
      //console.log(this.player.y);

      // update the state of player and enemies
      // create new enemies randomly
      if (Math.random() > 0.96) {
        const randomHeighPos = this.canvas.height * Math.random();
        const newEnemy = new Enemy(this.canvas, randomHeighPos, 1);
        //console.log("enemy");

        this.enemies.push(newEnemy);
      }

      if (this.shoot) {
        //create the bullet
        const newBullet = new Bullet(
          this.canvas,
          5,
          this.player.x,
          (this.player.y) + (this.player.size/2) 
        );
        //add the bullet to a property (this.bullet)
        this.bullets.push(newBullet);
        console.log(this.bullets);
        //reset the triger (this.shoot)
        this.shoot = false;
      }
      // check if player had hit any enemy //
      this.checkCollisons();

      // update the player position
      this.player.handleScreenCollision();
      this.player.updatePosition();

      //update bullet position

      // check is bullet collides with enemies
      //this.removeEnemy(enemy)

      // move all enemies
      // check if enemy is out of screen
      const enemiesOnScreen = this.enemies.filter(function (enemy) {
        enemy.updatePosition();
        const isInsideScreen = enemy.isInsideScreen();

        return isInsideScreen;
      });

      this.enemies = enemiesOnScreen;

      // move all bullets
      // check if bullet is out of screen
      /// the promebl
      const bulletsOnScreen = this.bullets.filter(function (bullet) {
        console.log(bullet);
        bullet.updatePosition();
        console.log(bullet);
        const isInsideScreen = bullet.isInsideScreen();

        return isInsideScreen;
      });

      this.bullets = bulletsOnScreen;

      // clear the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // paint the canvas
      // draw the player
      this.player.draw();
      //console.log(this.player.);
      // draw the enemies
      this.enemies.forEach((enemy) => {
        enemy.draw();
      });
      this.bullets.forEach((bullet) => {
        bullet.draw();
      });
      //

      // terminate the loop if game is over

      if (this.gameIsOver === false) {
        requestAnimationFrame(loop); //start the animation loop
      }
      // update game status
      this.updateGameStats();
    }.bind(this);
    loop(); // initial invocation
  }

  checkCollisons() {
    // array of bullet / use foreach
    this.enemies.forEach((enemy) => {
      if (this.player.didCollide(enemy)) {
        this.player.removeLife();
        console.log("player lives", this.player.lives);

        enemy.x = -1 * enemy.size;

        if (this.player.lives <= 0) {
          this.gameOver(this.score);
        }
      }
      //bullet collisons
      if (this.bullets.length > 0) {
        this.bullets.forEach(function (bullet) {
          bullet.didCollide(enemy);
            
          if (bullet.didCollide(enemy)) {
            enemy.x = -1 * enemy.size;
            bullet.x = this.canvas.with + bullet.sizeWidth;
            console.log("works");
          }
        },this);

        //array.forEach(function(currentValue, index, arr), thisValue)
      }

      ///////////////////////////////////////
    },this);
  }

  gameOver(score) {
    //don't accept this.score
    this.gameIsOver = true;
    endGame(score);
  }

  updateGameStats() {
    //score
    this.score += 5;

    //console.log(this.score);
    this.livesElement.innerHTML = this.player.lives;
    this.scoreElement.innerHTML = this.score;
  }
}
