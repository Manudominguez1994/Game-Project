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
    
    if (
      this.enemiesArr.length === 0 ||
      this.frames % Math.floor(Math.random() * 60) === 0) {
      let randomEnemy = enemiesArrType[Math.floor(Math.random() * enemiesArrType.length)];

      if (randomEnemy === "flame") {
        width = 250;
        height = 60;
        src = "./images/enemyflame.png";
        randomPosition =positionYArr[Math.floor(Math.random() * positionYArr.length)];
        let newEnemies1 = new Enemies(
          randomPosition,
          randomEnemy,
          width,
          height,
          src
        );
        this.enemiesArr.push(newEnemies1);
        
      } else if (randomEnemy === "flower") {
        width = 60;
        height = 60;
        src = "./images/flower-fire.png";
        randomPosition =positionYArr[Math.floor(Math.random() * positionYArr.length)];
        let newEnemies1 = new Enemies(
          randomPosition,
          randomEnemy,
          width,
          height,
          src
        );
        this.enemiesArr.push(newEnemies1);
        
      } else if (randomEnemy === "mushrrom") {
        width = 60;
        height = 60;
        src = "./images/mushrrom-fire.png";
        randomPosition =positionYArr[Math.floor(Math.random() * positionYArr.length)];
        let newEnemies1 = new Enemies(
          randomPosition,
          randomEnemy,
          width,
          height,
          src
        );
        this.enemiesArr.push(newEnemies1);
      }
    }
  };

  enemeisDespawn = () => {
    if (this.enemiesArr[0].enemyFlamex < -250) {
      this.enemiesArr[0].enemyFlame.remove();
      this.enemiesArr.shift();
    }
  };

  colisionHeroEnemy = () =>{
    this.enemiesArr.forEach((obstaculo)=>{
      if (
        this.player.x < obstaculo.x + obstaculo.w &&
        this.player.x + this.player.w > obstaculo.x &&
        this.player.y < obstaculo.y + obstaculo.h &&
        this.player.y + this.player.h > obstaculo.y
      ) {
        this.gameOver()
      } 
    })

  }

  gameOver = () =>{
    this.gameOn = false;
    gameScreenNode.style.display = "none"
    gameOverScreenNode.style.display = "flex"

  }

  gameLoop = () => {
    this.frames++;
    this.colisionHeroEnemy();
    this.enemiesSpawn();
    this.enemiesArr.forEach((eachEnemy) => {
      eachEnemy.automaticMovementEnemies();
    });
    
    this.enemeisDespawn();

    requestAnimationFrame(this.gameLoop);
  };
}
