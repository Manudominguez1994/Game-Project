const positionYArr = [80, 146, 212, 336, 409, 470];
const enemiesArrType = ["flame", "flower", "mushrrom"];

class Game {
  constructor() {
    this.player = new Hero();
    this.enemiesArr = [];
    this.frames = 0;
    this.gameOn = true;
    this.doorExit = new Exitwin();
    this.interval = null;
    this.newEnemyLine = null;

    this.vidasArr = [];
    this.newVida1 = null;
    this.newVida2 = null;
    this.newVida3 = null;
    this.vidaremove = false;

    this.countColision = 3;
  }

  creacionVidas = () => {
    let x = 0;
    let y = 0;

    x = 20;
    y = 6;
    this.newVida1 = new Vida(x, y);
    this.vidasArr.push(this.newVida1);
    x = 80;
    y = 6;
    this.newVida2 = new Vida(x, y);
    this.vidasArr.push(this.newVida2);
    x = 140;
    y = 6;
    this.newVida3 = new Vida(x, y);
    this.vidasArr.push(this.newVida3);
    console.log(this.vidasArr);
  };

  removeVidas = () => {
    if (this.countColision === 3) {
      this.newVida1.removeVidaNode();
      this.vidasArr.splice(1, 2);
    } else if (this.countColision === 2) {
      this.newVida3.removeVidaNode();
      this.vidasArr.splice(1, 1);
    } else if (this.countColision === 1) {
      this.newVida2.removeVidaNode();
      this.vidasArr.splice(1, 0);
    }
  };

  enemiesSpawn = () => {
    let width = 0;
    let height = 0;
    let src = "";
    let randomPosition = 0;
    let positionX = 0;
    let newEnemies1;
    if (this.enemiesArr.length === 0 || this.frames % 15 === 0) {
      let randomEnemy =
        enemiesArrType[Math.floor(Math.random() * enemiesArrType.length)];

      if (randomEnemy === "flame") {
        positionX = gameBoxNode.offsetWidth;
        width = 150;
        height = 60;
        src = "./images/enemyflame.png";
        randomPosition =
          positionYArr[Math.floor(Math.random() * positionYArr.length)];
        newEnemies1 = new Enemies(
          randomPosition,
          positionX,
          randomEnemy,
          width,
          height,
          src
        );
      } else if (randomEnemy === "flower") {
        positionX = gameBoxNode.offsetWidth;
        width = 60;
        height = 60;
        src = "./images/flower-fire.png";
        randomPosition =
          positionYArr[Math.floor(Math.random() * positionYArr.length)];
        newEnemies1 = new Enemies(
          randomPosition,
          positionX,
          randomEnemy,
          width,
          height,
          src
        );
      } else if (randomEnemy === "mushrrom") {
        positionX = gameBoxNode.offsetWidth;
        width = 60;
        height = 60;
        src = "./images/mushrrom-fire.png";
        randomPosition =
          positionYArr[Math.floor(Math.random() * positionYArr.length)];
        newEnemies1 = new Enemies(
          randomPosition,
          positionX,
          randomEnemy,
          width,
          height,
          src
        );
      }

      this.enemiesArr.push(newEnemies1);
      // if(this.enemiesArr.length >= 2 ){
      //  if(this.enemiesArr[this.enemiesArr.length -1 ].x === newEnemies1.x + newEnemies1.w){
      //   newEnemies1.x += Math.floor(Math.random( )* 250)
      // }
      //  this.enemiesArr.push(newEnemies1);
      // }
    }
  };

  enemeisDespawn = () => {
    if (this.enemiesArr[0].x < -250) {
      this.enemiesArr[0].enemyFlame.remove();
      this.enemiesArr.shift();
    }
  };

  fireLineSpawn = () => {
    let positionY = 270;
    let positionX = 0;
    let randomEnemy = "fireline";
    let width = 800;
    let height = 60;
    let src = "./images/fire-line.png";
    this.newEnemyLine = new Enemies(
      positionY,
      positionX,
      randomEnemy,
      width,
      height,
      src
    );
  };

  interval10Sec = () => {
    this.interval = setInterval(() => {
      this.fireLineSpawn();
      this.newEnemyLine.removedEnemy();
      this.newEnemyLine.colisionComprobacion = true;
    }, 8000);
  };

  colisionHeroFlameLine = () => {
    if (this.newEnemyLine.colisionComprobacion === true) {
      if (
        this.player.x < this.newEnemyLine.x + this.newEnemyLine.w &&
        this.player.x + this.player.w > this.newEnemyLine.x &&
        this.player.y < this.newEnemyLine.y + this.newEnemyLine.h &&
        this.player.y + this.player.h > this.newEnemyLine.y
      ) {
        this.gameOver();
      }
    }
  };

  colisionHeroEnemy = () => {
    if (this.countColision <= 3 && this.countColision > 0) {
      this.enemiesArr.forEach((obstaculo) => {
        if (
          this.player.x < obstaculo.x + obstaculo.w &&
          this.player.x + this.player.w > obstaculo.x &&
          this.player.y < obstaculo.y + obstaculo.h &&
          this.player.y + this.player.h > obstaculo.y
        ) {
          this.countColision--;
          this.player.colisionMovimiento();
          obstaculo.removeOneEnemy();
          this.removeVidas();
        }
      });
    } else if (this.countColision === 0) {
      this.gameOver();
    }
  };

  colisionGameBox = () => {
    if (
      this.player.y + this.player.h > gameBoxNode.offsetHeight ||
      this.player.x + this.player.w > gameBoxNode.offsetWidth
    )
      this.player.movimiento = false;
  };

  colisionHeroWin = () => {
    if (
      this.player.x < this.doorExit.x + this.doorExit.w &&
      this.player.x + this.player.w > this.doorExit.x &&
      this.player.y < this.doorExit.y + this.doorExit.h &&
      this.player.y + this.player.h > this.doorExit.y
    ) {
      this.winGame();
    }
  };

  winGame = () => {
    cancelAnimationFrame(this.gameLoop);
    this.gameOn = false;
    gameWinScreenNode.style.display = "flex";
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "none";
    this.enemiesArr = [];
    this.player = null;
    this.cleanGame();
  };

  gameOver = () => {
    cancelAnimationFrame(this.gameLoop);
    this.gameOn = false;
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
    this.enemiesArr = [];
    this.player = null;
    this.cleanGame();
    this.interval = clearInterval(this.interval);
  };

  cleanGame = () => {
    let first = gameBoxNode.firstElementChild;
    while (first) {
      first.remove();
      first = gameBoxNode.firstElementChild;
    }
  };

  gameLoop = () => {
    this.frames++;
    this.enemiesSpawn();
    if (this.newEnemyLine) {
      this.colisionHeroFlameLine();
    }
    this.colisionHeroEnemy();
    this.colisionHeroWin();
    this.enemiesArr.forEach((eachEnemy) => {
      eachEnemy.automaticMovementEnemies();
    });
    this.enemeisDespawn();
    requestAnimationFrame(this.gameLoop);
  };

  gamePlay = () => {
    this.creacionVidas();
    this.interval10Sec();
    this.gameLoop();
  };
}
