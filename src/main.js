let game;
let splashScreen;
let gameScreen;
let gameOverScreen;
let creditsScreen;

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
    
    <audio
        autoplay
        src="sound/bill-evans-trio-spring-is-here.mp3">
        Your browser does not support the
        <code>audio</code> element.
    </audio>
    <img src="img/background_spaceship.png"/>
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
      <audio
      autoplay
        src="sound/lester-young-tea-for-two-1952.mp3">
        Your browser does not support the
        <code>audio</code> element.
     </audio>
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
  <main class>
    <div class="over">
    <h1>Game Over</h1>
    <p>Your score: <span> ${score} </span></p>
    <h3>Do you want to try again?</h3>
    <button id="restart-button">yes</button>
    <button id="credits-button">no</button>
    </div>
    <audio
    autoplay
    src="sound/stan-getz-spring-is-here.mp3">
    Your browser does not support the
    <code>audio</code> element.
  </audio>
  </main>
  `);
  var restartButton = gameOverScreen.querySelector("#restart-button");
  restartButton.addEventListener("click", startGame);

  var creditsButton = gameOverScreen.querySelector("#credits-button");
  creditsButton.addEventListener("click", createCreditsScreen);

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

function createCreditsScreen() {
  removeScreen();
  creditsScreen = buildDom(`
  <main>
  <div class="credits">
      <h2>tatata</h2>
      <h3>tatati</h3>
      </div>
      <audio
      autoplay
      src="sound/see-you-space-cowboy.mp3">
      Your browser does not support the
      <code>audio</code> element.
      </audio>
  
  </main>
  
  `);

  document.body.appendChild(creditsScreen);
}

// Run the function createSplashScreen once all the resources are loaded.
window.addEventListener("load", createSplashScreen);
