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
    this.containerwidth = canvasContainer.clientWidth;
    this.containerheight = canvasContainer.clientHeight;

    this.canvas.width = this.containerWidth;
    this.canvas.height = this.containerHeight;

    this.player = new Player(this.canvas, 5);

    // event listener for moving the player
    function handleKeyDown(event) {
      if (event.key === "ArrowUp") {
        //console.log("up");
        this.player.setDirection("up");
      } else if (event.key === "ArrowDown") {
        //console.log("down");
        this.player.setDirection("down");
      }
    }
    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.addEventListener("keydown", boundHandleKeyDown);

    //Starts  the canvas  request animation frame loop
    this.startLoop();
  }

  startLoop() {
    const loop = function () {
      //console.log("in loop");

      // update the state of player and enemies
      // create new enemies randomly
      if (Math.random() > 0.96) {
        const randomHeighPos = this.canvas.height * Math.random();
        const newEnemy = new Enemy(this.canvas, randomHeighPos, 5);
        //console.log("enemy");

        this.enemies.push(newEnemy);
      }
      // check if player had hit any enemy
      this.checkCollisons();

      // update the player position
      this.player.handleScreenCollision();
      this.player.updatePosition();

      // move all enemies
      // check if enemy is out of screen
      const enemiesOnScreen = this.enemies.filter(function (enemy) {
        enemy.updatePosition();
        const isInsideScreen = enemy.isInsideScreen();

        return isInsideScreen;
      });

      this.enemies = enemiesOnScreen;

      // clear the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // paint the canvas
      // draw the player
      this.player.draw();
      // draw the enemies
      this.enemies.forEach((enemy) => {
        enemy.draw();
      });

      // terminate the loop if game is over

      if (this.gameIsOver === false) {
        requestAnimationFrame(loop); //start the animation loop
      }
    }.bind(this);
    loop(); // initial invocation
  }

  checkCollisons() {}

  updateGameStats() {}
}
