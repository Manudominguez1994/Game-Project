// GLOBAL VARIABLES

const startBtnNode = document.querySelector("#btn-start");
const restartBtnNode = document.querySelector("#btn-restart");
const restartBtnWinNode = document.querySelector("#btn-restart-win");

const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#gameover-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameWinScreenNode = document.querySelector("#gamewin-screen");

let gameObj = null;

this.HeroMoveSound = new Audio('./audio/heromove.wav');
this.HeroMoveSound.volume = 0.1;

//  STATE MANAGEMENT FUNCTIONS
function startGame() {
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  gameWinScreenNode.style.display = "none";

  gameObj = new Game();
  gameObj.gamePlay();
}

function restartGame() {
  gameObj = null;
  startScreenNode.style.display = "flex";
  gameOverScreenNode.style.display = "none";
  gameWinScreenNode.style.display = "none";
}

//ADD EVENT LISTENERS

//Accion en el boton de comenzar el juego
startBtnNode.addEventListener("click", startGame);
//Accion de restart del juego
restartBtnNode.addEventListener("click", restartGame);
restartBtnWinNode.addEventListener("click", restartGame);
//Movimiento del personaje
document.addEventListener("keydown", (event) => {
  gameObj.player.walkEffect();
  this.HeroMoveSound.play()
});
