class Enemy {
  constructor(x,enemyType, y, w, h, src) {

    this.enemyFlame = document.createElement("img");
    gameBoxNode.append(this.enemyFlame);

    // this.x = gameBoxNode.offsetWidth;
    this.colisionComprobacion = true;



    if (enemyType === "flame") {
      this.x = gameBoxNode.offsetWidth;
      this.y = y
      this.type = enemyType;
      this.w = 150;
      this.h = 60;
      this.enemyFlame.src = "./images/enemyflame.png";
    } else if (enemyType === "flower") {
      this.x = gameBoxNode.offsetWidth;
      this.y = y
      this.type = enemyType;
      this.w = 60;
      this.h = 60;
      this.enemyFlame.src = "./images/flower-fire.png";
    } else if (enemyType === "mushrrom") {
      this.x = gameBoxNode.offsetWidth;
      this.y =y
      this.type = enemyType;
      this.w = 60;
      this.h = 60;
      this.enemyFlame.src = "./images/mushrrom-fire.png";
    }else if (enemyType === "fireline") {
      this.x = 0;
      this.y = 270;
      this.type = enemyType;
      this.w =800;
      this.h = 60;
      this.enemyFlame.src = "./images/fire-line.png";
    }
    
    

    this.enemyFlame.style.width = `${this.w}px`;
    this.enemyFlame.style.height = `${this.h}px`;
    this.enemyFlame.style.top = `${this.y}px`;
    this.enemyFlame.style.left = `${this.x}px`;
    this.enemyFlame.style.position = "absolute";
  }

  automaticMovementEnemies = () => {
    this.x -= 5;
    this.positionUpdateEnemies();
  };

  positionUpdateEnemies = () => {
    this.enemyFlame.style.top = `${this.y}px`;
    this.enemyFlame.style.left = `${this.x}px`;
    this.enemyFlame.style.position = "absolute";
    this.enemyFlame.style.width = `${this.width}px`;
    this.enemyFlame.style.height = `${this.height}px`;
  };

  removeOneEnemy = () => {
    this.enemyFlame.remove();
  };

  removedEnemy = () => {
    setTimeout(() => {
      this.enemyFlame.remove();
      this.enemyFlame = gameBoxNode.firstElementChild;
      this.colisionComprobacion = false;
    }, 2000);
  };

}
