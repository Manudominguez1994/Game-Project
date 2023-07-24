class Enemies {
  constructor(positionY,enemyType , enemyWidth, enemyHeight, enemySrc) {

    this.enemyFlame = document.createElement("img");
    gameBoxNode.append(this.enemyFlame);

    
    this.x = gameBoxNode.offsetWidth;
    this.y = positionY;
    this.enemyType = enemyType;
    this.w = enemyWidth;
    this.h = enemyHeight;
    this.enemyFlame.src = enemySrc
   
  
  }

  automaticMovementEnemies = () =>{
    this.x -=6;
    this.positionUpdateEnemies();
  }

  positionUpdateEnemies = () =>{ 
  this.enemyFlame.style.width = `${this.w}px`;
  this.enemyFlame.style.height = `${this.h}px`;
  this.enemyFlame.style.top = `${this.y}px`;
  this.enemyFlame.style.left = `${this.x}px`;
  this.enemyFlame.style.position = "absolute";
   
  }
}
