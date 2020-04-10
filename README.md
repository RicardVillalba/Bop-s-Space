# Bop-s-Space
M1 - Preoject - Game

Bop’s space

Description:
It will be a classic spaceship game, its mechanics will be similar to those of Galaxian but simplified and instead of creating a vertical parallax effect, I will make it horizontal.
In the graphic section, I will try to do something sober. With Asteroids in mind, the designs will be clearly influenced by the Cowboy Bebop anime spaceships.

MVP (DOM - CANVAS):
A space ship that can move in 4 directions has to shoot as many enemies as possible without collide with more than 5 enemies. The game is won whenever the player has still liver after 5 minutes.

Data structure:
1.	index.html
2.	main.js
3.	game.js
4.	player.js
5.	enemy.js

1. index.html file

2. Main file
•	buildDom
•	createStartScreen / removeStartScreen
•	createGameScreen / removeGameScreen
•	createGameOverScreen / removeGameOverScreen
•	createWinScreen / removeWinScreen
•	startGame / endGame


3. Game Constructor
Properties
•	canvas
•	ctx
•	player
•	name
•	enemies
•	gameOver
•	gameWon
•	loopCount
•	lives
•	timeScore

Methods
•	start
•	startLoop
•	checkCollision
•	checkTime
•	gameWon / gameOver
•	printLives
•	printScore


4. Player Constructor

Properties
•	canvas
•	ctx
•	x position
•	y position
•	width
•	height
•	lives
•	image
•	direction

Methods
•	draw
•	move
•	shoot
•	collidedWithEnemy
•	collidedWithScreen
•	removeLife


5. Enemy Constructor

Properties
•	canvas
•	ctx
•	x position
•	y position
•	width
•	height
•	speed
•	direction
•	image

Methods
•	draw
•	move


States and Transitions

startScreen
o	New game
o	Sounds Bill Evans trio spring is here
o	Goes to gameScreen when Start button is clicked

gameScreen
o	Game running while lives > 0
o	Goes to gameoverScreen if lives < 0 
o	Goes to winScreen if time > 1min
o	Sounds John Coltrane on green dolphin street live 1960

gameoverScreen
o	Shows Game Over message, Restart button and Go to splash button.
o	Goes back to Game Screen when Restart button is clicked
o	Goes back to Splash screen when Go to splash button is clicked
o	Sounds Stan Getz spring is here
o	WinScreen
o	Shows thank you for playing my game. message, Se you space cow boy, score and Go to splash
o	Goes back to Splash when Go to splash button is clicked
o	Sounds Stan Getz spring is here and Thank you for playing my game from Super Mario 64.


Task
•	Setup git & GitHub
•	Create and connect files: main.js, player.js, Enemy.js,
•	BuildDom in main.js
•	Create 4 screens in main.js
•	Create screen transitions in main.js
•	Create Game constructor
•	Create loop in game.js
•	Create Player constructor
•	Create Enemy constructor
•	Create a Bullet constructor
•	Draw Enemies in game.js
•	Move Enemies in game.js
•	Move player in game.js
•	Check Collisions in game.js
•	Check game result in game.js
•	Add Score and print it in game.js
•	Create score in main.js
•	Add audios, img and fonts

Links

Trello
https://trello.com/b/2F7oMGIl/bobs-space-ship

Git
......
Slides
......


