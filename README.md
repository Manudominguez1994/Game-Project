 # Out Of Hell

 https://manudominguez1994.github.io/Game-Project/

 ![Logo game](/images/out%20of%20hell.png)

 ## Description ![Logo game](/images/player.png)

 Out Of Hell es un juego en el que el jugador tendra que intentar que nuestro personaje escape del infierno en el que habitan criaturas de fuego y en el que se encontrara     diversos tipos de trampas.

 ## Funcionalidades principales

- Los movimientos del personaje se ejecutan pulsando las teclas de movimiento de las cuatro direcciones.
- Tienes que cruzar un mapa el cual representa el infierno, sin que ningun enemigo te toque.
- Los enemigos van saliendo en pantalla aleatoriamente en diferentes posiciones, se moveran se izquierda a derecha e intentaran colisionar con nuestro personaje.
- Si un enemigo colisiona contigo perderas una vida de tres vida que tienes en un inicio del juego, y ademas volveras al inicia del mapa y tendra que empezar de cero.
- Ademas de estos enemigos tambien existen en el mapa algunas trampas que subiran la dificultad del juego. 
- El fin del juego es escapar del infierno sin que ningun enemigo te toque .

## Funcionalidades pendientes

- Añadir mas pantallas de juego con aumento de nivel.
- Mas tipos de enemigos con diferentes tipos de ataques.
- Un bos final justo antes de escapar.
- Implementar en mi personaje algun tipo de escudo que te hiciera inmune duranto unos segundo a los enemigos.

## Tecnologias usadas

- HTML
- CSS
- JavaScript
- DOM Manipulation
- Js audio() and Js Imagen()
- Local Storage

## Estructura de proyecto

### Main
- const startBtnNode
- const restartBtnWinNode
- const restartBtnNode 
- const startScreenNode 
- const gameScreenNode 
- const gameOverScreenNode 
- const gameBoxNode 
- const gameWinScreenNode 
- function startGame()
- function restartGame() 
- startBtnNode.addEventListener("click", startGame);
- restartBtnNode.addEventListener("click", restartGame);
- restartBtnWinNode.addEventListener("click", restartGame);
- document.addEventListener "keydown", (event)

### Game
- removeVidas ()
- enemiesSpawn ()
- enemeisDespawn () 
- interval10Sec ()
- colisionHeroFlameLine ()
-  colisionHeroEnemy ()
- colisionGameBox ()
-  winGame()
-  gameOver()
-  cleanGame()
-  gameLoop()
-  gamePlay()

