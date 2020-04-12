let game;
let splashScreen;
let gameScreen;
let gameOverScreen;

function buildDom(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString;

  return div.children[0];
}

// splash screen
function createSplashScreen() {
  splashScreen = buildDom(`
    <main class="splashscreen">
    <button class="newgame">New Game</button>
    </main> 
   
`);
  document.body.appendChild(splashScreen);

  const startButton = splashScreen.querySelector("button");
  startButton.addEventListener("click", function () {
    startGame();
  });
}

function removeSplashScreen() {
  splashScreen.remove();
}

//game screen
function createGameScreen() {
  gameScreen = buildDom(`
    <main class="game container">
       <header class="livesandscore">
           <div class="lives">
           <span class="label">lives:</span>
           <span class="value"></span>
           </div>
           <div class="score">
           <span class="label">score:</span>
           <span class="value"></span>
           </div>
       </header>
       <div class="canvas-container">
       <canvas></canvas>
       </div>
   </main> 
    `);
  document.body.appendChild(gameScreen);
}

function removeScreen() {
  document.body.innerHTML = "";
}

// game over screen
function createGameOverScreen() {
}

function removeGameOverScreen() {}

//start the game, end the game
function startGame() {
  removeScreen();
  createGameScreen();

  game = new Game();
  game.gameScreen = gameScreen;

  game.start();
}

function endGame() {}

// Run the function createSplashScreen once all the resources are loaded.
window.addEventListener("load", createSplashScreen);
