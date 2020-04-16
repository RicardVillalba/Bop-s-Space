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
  //
  document.body.appendChild(gameScreen);
}

function removeScreen() {
  document.body.innerHTML = "";
}

// game over screen
function createGameOverScreen(score) {
  gameOverScreen = buildDom(`
  <main class="credits">
    <div class="over">
    <h1>Game Over</h1>
    <p>Your score: <span> ${score} </span></p>
    <h3>Do you want to try again?</h3>
      <div class="gameOverButtons">
      <button id="restart-button">yes</button>
      <button id="credits-button">no</button>
      </div>
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
  <main class="credits">
  <div class="animatedCredits">
      <h3>Developer</h3>
      <h4>Ricard Villalba</h4>
      <h3>Quality assurance</h3>
      <h4>Uros</h4>
      <h4>Capu</h4>
      <h3>Concept Work</h3>
      <h4>Ricard Villalba</h4>
      <h3>Design</h3>
      <h4>Ricard Villalba</h4>
      <h3>Art</h3>
      <h4>Ricard Villalba</h4>
      <h3>Music</h3>
      <h3>Spring is here</h3>
      <h4>Bill Evans (piano)</h4>
      <h4>Scott LaFaro (bass)</h4>
      <h4>Paul Motian (drums)</h4>
      <h3>Tea for two</h3>
      <h4>Lester Young (tenor saxophone)</h4>
      <h4>Barney Kessel (guitar)</h4>
      <h4>Ray Brown (bass)</h4>
      <h4>J.C.Heard (drums)</h4>
      <h3>Spring is here</h3>
      <h4>Stan Getz (tenor saxophone)</h4>
      <h4>Jim McNeely (piano)</h4>
      <h4>Marc Johnson (bass)</h4>
      <h4>Billy Hart (drums)</h4>
      <h3>The Real Folk Blues</h3>
      <h4>Yoko Kanno (composer)</h4>
      <h4>Mai Yamane (vocals)</h4>
      <h4>Yūho Iwasato (lyrics)</h4>
      <h3>Beta testers</h3>
      <h4>Ramon Quesada</h4>
      <h4>Ferran Calpe</h4>
      <h4>Gabriel Espin</h4>
      <h4>Ferran Pelayo</h4>
      <h4>David Perez</h4>
      <h4> </h4>
      <h1>Thank you for playing</h1>
      </div>
      <div class="seeyou">
      <img clas="see" src="img/see_you_space_cowboy.png"/>
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
