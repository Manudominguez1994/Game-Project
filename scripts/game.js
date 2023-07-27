class Game {
  constructor() {
    this.positionYArr = [80, 146, 212, 336, 409, 470];
    this.enemiesArrType = ["flame", "flower", "mushrrom"];

    this.player = new Hero();
    this.enemiesArr = [];
    this.frames = 0;
    this.gameOn = true;
    this.doorExit = new Exitwin();
    this.shootFlower = null;
    this.interval = null;
    this.newEnemyLine = null;

    this.newVida1 = new Vida(20);
    this.newVida2 = new Vida(80);
    this.newVida3 = new Vida(140);
    this.vidaremove = false;
    this.countColision = 3;

    this.principalMusic = new Audio("./audio/OutOfHell.mp3");
    this.principalMusic.volume = 0.1;
    this.flameLineSound = new Audio("./audio/flamelinesound.wav");
    this.flameLineSound.volume = 0.1;
    this.gameOverSound = new Audio("./audio/gameover.wav");
    this.gameOverSound.volume = 0.1;
    this.winSound = new Audio("./audio/wingame.wav");
    this.winSound.volume = 0.1;
    this.heroDmg = new Audio("./audio/herodamage.mp3");
    this.heroDmg.volume = 0.2;
    this.heroBurn = new Audio("./audio/heroburn.wav");
    this.heroBurn.volume = 0.3;

    this.principalMusic.play();
  }

  removeVidas = () => {
    if (this.countColision === 3) {
      this.newVida1.removeVidaNode();
    } else if (this.countColision === 2) {
      this.newVida3.removeVidaNode();
    } else if (this.countColision === 1) {
      this.newVida2.removeVidaNode();
    }
  };

  enemiesSpawn = () => {
    this.ramdomEnemy =
      this.enemiesArrType[
        Math.floor(Math.random() * this.enemiesArrType.length)
      ];
    this.positionY =
      this.positionYArr[Math.floor(Math.random() * this.positionYArr.length)];
    if (this.enemiesArr.length === 0 || this.frames % 10 === 0) {
      this.newEnemy = new Enemy(
        this.x,
        this.ramdomEnemy,
        this.positionY,
        this.w,
        this.h,
        this.src
      );
      this.enemiesArr.push(this.newEnemy);
    }
  };

  enemeisDespawn = () => {
    if (this.enemiesArr[0].x < -250) {
      this.enemiesArr[0].enemyFlame.remove();
      this.enemiesArr.shift();
    }
  };

  interval10Sec = () => {
    this.interval = setInterval(() => {
      this.type = "fireline";
      this.newEnemyLine = new Enemy(0, this.type, 270, 800, 60, this.src);
      this.flameLineSound.play();
      this.newEnemyLine.removedEnemy();
      this.newEnemyLine.colisionComprobacion = true;
    }, 6000);
  };

  colisionHeroFlameLine = () => {
    if (this.countColision <= 3 && this.countColision > 0) {
      if (this.newEnemyLine.colisionComprobacion === true) {
        if (
          this.player.x < this.newEnemyLine.x + this.newEnemyLine.w &&
          this.player.x + this.player.w > this.newEnemyLine.x &&
          this.player.y < this.newEnemyLine.y + this.newEnemyLine.h &&
          this.player.y + this.player.h > this.newEnemyLine.y
        ) {
          this.countColision--;
          this.player.colisionMovimiento();
          this.removeVidas();
          this.flameLineSound.pause();
          this.heroBurn.play();
          this.heroDmg.play();
        }
      }
    } else if (this.countColision === 0) {
      this.gameOver();
    }
  };

  colisionHeroEnemy = () => {
    if (this.countColision <= 3 && this.countColision > 0) {
      this.enemiesArr.forEach((obstaculo, index) => {
        if (
          this.player.x < obstaculo.x + obstaculo.w &&
          this.player.x + this.player.w > obstaculo.x &&
          this.player.y < obstaculo.y + obstaculo.h &&
          this.player.y + this.player.h > obstaculo.y
        ) {
          this.countColision--;
          this.player.colisionMovimiento();
          obstaculo.removeOneEnemy();
          this.enemiesArr.splice(index, 1);
          this.removeVidas();
          this.heroBurn.play();
          this.heroDmg.play();
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
      this.flameLineSound.pause();
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
    this.interval = clearInterval(this.interval);
    this.winSound.play();
    this.principalMusic.pause();
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
    this.gameOverSound.play();
    this.principalMusic.pause();
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
    this.interval10Sec();
    this.gameLoop();
  };
}
