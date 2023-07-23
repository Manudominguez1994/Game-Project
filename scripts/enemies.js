class Enemies {
  constructor(positionY) {

    this.enemyFlame = document.createElement("img");
    this.enemyFlame.src = "./images/enemyflame.png";
    gameBoxNode.append(this.enemyFlame);

    
    this.enemyFlamex = gameBoxNode.offsetWidth;
    this.enemyFlamey = positionY;
    this.enemyFlamew = 250;
    this.enemyFlameh = 60;
    this.enemyFlame.style.width = `${this.enemyFlamew}px`;
    this.enemyFlame.style.height = `${this.enemyFlameh}px`;
    this.enemyFlame.style.top = `${this.enemyFlamey}px`;
    this.enemyFlame.style.left = `${this.enemyFlamex}px`;
    // this.enemyFlame.style.right = `${this.enemyFlamex}px`;
    this.enemyFlame.style.position = "absolute";
  }

  automaticMovementEnemies = () =>{
    this.enemyFlamex -=4;
    this.positionUpdateEnemies();
  }

  positionUpdateEnemies = () =>{
     this.enemyFlame.style.left = `${this.enemyFlamex}px`;
    // this.enemyFlame.style.right = `${this.enemyFlamex}px`;
  }
}
