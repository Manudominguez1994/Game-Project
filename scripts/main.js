// GLOBAL VARIABLES

const startBtnNode = document.querySelector("#btn-start");
const restartBtnNode = document.querySelector("#btn-restart");

const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#gameover-screen");
const gameBoxNode = document.querySelector("#game-box");

let gameObj = null;

//  STATE MANAGEMENT FUNCTIONS

function startGame() {
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObj = new Game();
  gameObj.gameLoop();
}

 function restartGame() {
  gameObj = null;
  startScreenNode.style.display ="flex";
  gameOverScreenNode.style.display ="none";
 
 
 }

//ADD EVENT LISTENERS

//Accion en el boton de comenzar el juego
startBtnNode.addEventListener("click", startGame);
//Accion de restart del juego
restartBtnNode.addEventListener("click",restartGame)
//Movimiento del personaje
document.addEventListener("keydown", (event) => {
  gameObj.player.walkEffect();
});
//Disparo del personaje

