const positionYArr = [80, 146, 212, 336, 409, 470];
const enemiesArrType = ["flame", "flower", "mushrrom"];

class Game {
  constructor() {
    this.player = new Hero();
    this.enemiesArr = [];
    this.frames = 0;
    this.gameOn = true;
  }

  enemiesSpawn = () => {
    let width = 0;
    let height = 0;
    let src = "";
    let randomPosition = 0;
    let newEnemies1;
    if (
      this.enemiesArr.length === 0 ||
      this.frames % Math.floor(Math.random() * 40) === 0
    ) {
      let randomEnemy =
        enemiesArrType[Math.floor(Math.random() * enemiesArrType.length)];

      if (randomEnemy === "flame") {
        width = 250;
        height = 60;
        src = "./images/enemyflame.png";
        randomPosition =
          positionYArr[Math.floor(Math.random() * positionYArr.length)];
        newEnemies1 = new Enemies(
          randomPosition,
          randomEnemy,
          width,
          height,
          src
        );
      } else if (randomEnemy === "flower") {
        width = 60;
        height = 60;
        src = "./images/flower-fire.png";
        randomPosition =
          positionYArr[Math.floor(Math.random() * positionYArr.length)];
        newEnemies1 = new Enemies(
          randomPosition,
          randomEnemy,
          width,
          height,
          src
        );
      } else if (randomEnemy === "mushrrom") {
        width = 60;
        height = 60;
        src = "./images/mushrrom-fire.png";
        randomPosition =
          positionYArr[Math.floor(Math.random() * positionYArr.length)];
        newEnemies1 = new Enemies(
          randomPosition,
          randomEnemy,
          width,
          height,
          src
        );
      }
       //if(this.enemiesArr[this.enemiesArr.length - 1 ].x !== this.enemiesArr[newEnemies1].x ){
        this.enemiesArr.push(newEnemies1)
      //}
    }
  };

  enemeisDespawn = () => {
    if (this.enemiesArr[0].x < -250) {
      this.enemiesArr[0].enemyFlame.remove();
      this.enemiesArr.shift();
    }
  };

  colisionHeroEnemy = () => {
    this.enemiesArr.forEach((obstaculo) => {
      if (
        this.player.x < obstaculo.x + obstaculo.w &&
        this.player.x + this.player.w > obstaculo.x &&
        this.player.y < obstaculo.y + obstaculo.h &&
        this.player.y + this.player.h > obstaculo.y
      ) {
        this.gameOver();
      }
    });
  };

  colisionGameBox = () => {
    if (
      this.player.y + this.player.h > gameBoxNode.offsetHeight ||
      this.player.x + this.player.w > gameBoxNode.offsetWidth
    )
      this.player.movimiento = false;
  };

  gameOver = () => {
    cancelAnimationFrame(this.gameLoop);
    this.gameOn = false;
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
    this.enemiesArr = [];
    this.player = null;
    this.cleanGame();
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
    this.colisionHeroEnemy();
    this.enemiesSpawn();

    this.enemiesArr.forEach((eachEnemy) => {
      eachEnemy.automaticMovementEnemies();
    });
    // this.colisionGameBox();
    this.enemeisDespawn();
    requestAnimationFrame(this.gameLoop);
  };
}
