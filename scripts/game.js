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
    
  }

  enemiesSpawn = () => {
    let width = 0;
    let height = 0;
    let src = "";
    let randomPosition = 0;
    let newEnemies1;
    if (this.enemiesArr.length === 0 || this.frames % 15 === 0) {
      let randomEnemy =
        enemiesArrType[Math.floor(Math.random() * enemiesArrType.length)];

      if (randomEnemy === "flame") {
        width = 150;
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
    
    let width = 60;
    let height = 60;
    let src = "./images/fire-line.png";
    let positonY = -30;
    let randomEnemy = "fireline"
    newEnemies1 = new Enemies(positonY, randomEnemy, width, height, src);
      
  };
  
  interval10Sec = () =>{
    
   this.interval =  setInterval(() => {
      fireLineSpawn()
      setTimeout()
    }, 10000);


  }
 
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

  colisionHeroWin = () => {
  
    if (
      this.player.x < this.doorExit.x + this.doorExit.w &&
      this.player.x + this.player.w > this.doorExit.x &&
      this.player.y < this.doorExit.y + this.doorExit.h &&
      this.player.y + this.player.h > this.doorExit.y
    ) {
      this.winGame();
    }


  }

  winGame = () =>{ 
    cancelAnimationFrame(this.gameLoop);
    this.gameOn = false;
    gameWinScreenNode.style.display = "flex"
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "none";
    this.enemiesArr = [];
    this.player = null;
    this.cleanGame();
  }

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
    this.colisionHeroWin();
    this.enemiesArr.forEach((eachEnemy) => {
      eachEnemy.automaticMovementEnemies();
    })
    this.enemeisDespawn();
    requestAnimationFrame(this.gameLoop);
  };

  gamePlay = () =>{

    this.gameLoop();
    this.fireLineSpawn ();
    
}}
  
