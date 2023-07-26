class Enemies {
  constructor(positionY, positionX, enemyType , enemyWidth, enemyHeight, enemySrc) {

    this.enemyFlame = document.createElement("img");
    gameBoxNode.append(this.enemyFlame);

    
    this.x = positionX;
    this.y = positionY;
    this.enemyType = enemyType;
    this.w = enemyWidth;
    this.h = enemyHeight;
    this.enemyFlame.src = enemySrc
    this.colisionComprobacion = true;

    this.enemyFlame.style.width = `${this.w}px`;
    this.enemyFlame.style.height = `${this.h}px`;
    this.enemyFlame.style.top = `${this.y}px`;
    this.enemyFlame.style.left = `${this.x}px`;
    this.enemyFlame.style.position = "absolute";
   
  
  }

  automaticMovementEnemies = () =>{
    this.x -=5;
    this.positionUpdateEnemies();
  }

  positionUpdateEnemies = () =>{ 
    this.enemyFlame.style.top = `${this.y}px`;
    this.enemyFlame.style.left = `${this.x}px`;
    this.enemyFlame.style.position = "absolute";
    }

  removedEnemy = () =>{
    setTimeout(()=>{
      this.enemyFlame.remove();
      this.enemyFlame = gameBoxNode.firstElementChild;
      this.colisionComprobacion = false;
  },2000)
  }
  }

