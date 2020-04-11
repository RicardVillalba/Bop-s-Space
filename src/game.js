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

    this.player = new player(this.canvas, 5);

    // event listener for moving the player
    function handleKeyDown(event) {
        if(event.key === "ArrowUp") {
            this.player.setDirection('up');
        }
        else if (event.key === "ArrowDown") {
            this.player.setDirection('down');
        }
    }

    document.addEventListener('keydown', handleKeyDown)


     this.player.draw();

    //Starts  the canvas  request animation frame loop
    this.startLoop();
  }

  startLoop() {}

  checkCollisons() {}

  updateGameStats() {}
}
