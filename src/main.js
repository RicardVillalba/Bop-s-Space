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

    <div id="splashScreensound">
      <audio
        autoplay
        src="../sound/bill-evans-trio-spring-is-here.mp3">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  
      <img src="../img/IMG_1547.PNG"/>
   
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
function createGameOverScreen(score) {
  gameOverScreen = buildDom(`
  <main>
    <h1>Game Over</h1>
    <p>Your score: <span> ${score} </span></p>
    <h3>Do you want to try again?</h3>
    <button>yes</button>
    <button>no</button>
  </main>
  `);
  var restartButton = gameOverScreen.querySelector("button");
  restartButton.addEventListener("click", startGame);
  document.body.appendChild(gameOverScreen);
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

function endGame(score) {
  removeScreen();
  createGameOverScreen(score);
}

// Run the function createSplashScreen once all the resources are loaded.
window.addEventListener("load", createSplashScreen);
